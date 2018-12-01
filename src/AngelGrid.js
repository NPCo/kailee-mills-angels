import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Transition from 'react-transition-group/Transition'
import sizeMe from 'react-sizeme'
import uuid from 'uuid'

import Angel from './Angel.js'

const HEIGHT_GAP = 10
const assignId = a => Object.assign(a, { _id: uuid() })

export default sizeMe()(class AngelGrid extends Component {

  state = {
    selectedId: null,
    triggered: false,
    angels: []
  }

  constructor(props) {
    super(props)

    this.props.angels()
      .then(data => data.map(assignId))
      .then(data => this.setState({ angels: data }))
      .catch(err => console.error('Error getting angels -', err))

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

    const angel = Object.assign(
      { color: 'white', photo: '#', name: '...', dates: '', bio: [] },
      this.state.angels.find(a => a._id === this.state.selectedId)
    )

    const columns = this.props.columns || Math.max(...this.state.angels.map(a => a.w + a.x - 1)) || 4
    const rows = this.props.rows || Math.max(...this.state.angels.map(a => a.h + a.y - 1)) || 3
    console.log(columns, rows)
    const WIDTH_GAP = (this.props.size.width - (columns * this.props.width)) / (columns - 1)
    
    return (!this.state.triggered)
      ? (
        <div className="angels" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns || 4}, ${this.props.width || 100}px)`,
          gridTemplateRows: `repeat(${rows || 3}, ${this.props.height || 100}px)`,
          columnGap: `calc((100% - ${columns * this.props.width}px) / ${columns - 1})`,
          height: `${rows * (this.props.height + HEIGHT_GAP) - HEIGHT_GAP}px`,
          rowGap: `${HEIGHT_GAP}px`
        }}>
          <TransitionGroup component={null}>
            {
              this.state.angels
                .filter(a => a._id !== this.state.selectedId)
                .map((a) => (
			            <Transition key={`angel-${a._id}`} timeout={{exit: 500}} unmountOnExit>
                    {state => 
                    <Angel transitionState={state}
                    onSelected={() => this.selectId(a._id)}
                    expandMargin={{
                      top: `${(this.props.height + HEIGHT_GAP) * (1 - a.y)}px`,
                      left: `${(this.props.width + WIDTH_GAP) * (1 - a.x)}px`,
                      bottom: `${(this.props.height + HEIGHT_GAP) * (a.y + a.h - 1 - rows)}px`,
                      right: `${(this.props.width + WIDTH_GAP) * (a.x + a.w - 1 - columns)}px`,
                    }}
                    trigger={() => this.trigger()} {...a} />}
                  </Transition>
                ))
            }
          </TransitionGroup>
        </div>
      )
      : (
          <div className="angels" style={{
            backgroundColor: angel.color,
            height: `${rows * (this.props.height + 10) - 10}px`,
          }}>
            <div className="angel-expanded">
              <div className="angel-photo">
                <img alt={angel.name} src={angel.photo} />
              </div>
              <div className="angel-title">
                <span className="angel-name">{angel.name}</span>
                <span className="angel-dates">{angel.dates}</span>
                <div className="angel-exit" onClick={() => this.selectId(null)}><div className="close icon"></div></div>
              </div>
              <div className="angel-bio">
                {angel.bio.map((text, i) => <p key={i}>{text}</p>)}
              </div>
            </div>
          </div>
      )
  }
})