import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Transition from 'react-transition-group/Transition'
import sizeMe from 'react-sizeme'
import uuid from 'uuid'

import AngelElement from '../components/AngelElement.js'
import AngelExpanded from '../components/AngelExpanded.js'

const HEIGHT_GAP = 10
const ANGEL_TEMPLATE = { color: 'white', photo: '#', name: '...', dates: '', bio: [] }
const assignId = a => Object.assign(a, { _id: uuid() })

export default sizeMe()(class AngelDisplay extends Component {

  state = {
    selectedId: null,
    triggered: false,
    angels: []
  }

  constructor(props) {
    super(props)

    const { angels } = this.props

    if (typeof angels === 'function')
      angels()
        .then(data => data.map(assignId))
        .then(data => this.setState({ angels: data }))
        .catch(err => console.error('Error getting angels -', err))
    else
      this.state = Object.assign(this.state, { angels: angels.map(assignId) })

    this.selectId = this.selectId.bind(this)
    this.trigger = this.trigger.bind(this)
  }

  selectId(_id) {
    console.log(_id)
    this.setState({
      selectedId: _id,
      triggered: false
    })
  }

  trigger() {
    this.setState({
      triggered: true
    })
  }

  render() {

    const { angels, selectedId } = this.state
    const { width, height } = this.props

    const columns = this.props.columns || Math.max(...angels.map(a => a.w + a.x - 1)) || 4
    const rows = this.props.rows || Math.max(...angels.map(a => a.h + a.y - 1)) || 3

    const WIDTH_GAP = (this.props.size.width - columns * width) / (columns - 1)

    if (this.state.triggered) {
      
      const angel = Object.assign(ANGEL_TEMPLATE, angels.find(a => a._id === selectedId))

      return <AngelExpanded angel={angel} 
        height={`${rows * (height + HEIGHT_GAP) - HEIGHT_GAP}px`}
        exit={() => this.selectId(null)} />
    }

    return (
        <div className="angels" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns || 4}, ${width || 100}px)`,
          gridTemplateRows: `repeat(${rows || 3}, ${height || 100}px)`,
          columnGap: `calc((100% - ${columns * width}px) / ${columns - 1})`,
          height: `${rows * (height + HEIGHT_GAP) - HEIGHT_GAP}px`,
          rowGap: `${HEIGHT_GAP}px`
        }}>
          <TransitionGroup component={null}>
            {
              angels
                .filter(a => a._id !== selectedId)
                .map(a => (
			            <Transition key={`angel-${a._id}`} timeout={{exit: 500}} unmountOnExit>
                    {state => 
                      <AngelElement transitionState={state}
                        onSelected={() => this.selectId(a._id)}
                        expandMargin={{
                          top: `${(height + HEIGHT_GAP) * (1 - a.y)}px`,
                          left: `${(width + WIDTH_GAP) * (1 - a.x)}px`,
                          bottom: `${(height + HEIGHT_GAP) * (a.y + a.h - 1 - rows)}px`,
                          right: `${(width + WIDTH_GAP) * (a.x + a.w - 1 - columns)}px`,
                        }}
                        trigger={() => this.trigger()} {...a} />}
                    </Transition>
                ))
            }
          </TransitionGroup>
        </div>
      )
  }
})