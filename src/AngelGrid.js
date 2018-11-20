import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Transition from 'react-transition-group/Transition'
import sizeMe from 'react-sizeme'
import uuid from 'uuid'

import Angel from './Angel.js'

const HEIGHT_GAP = 10

export default class AngelGrid extends Component {

  state = {
    selectedId: null,
    triggered: false
  }

  constructor(props) {
    super(props)

    this.angels = this.props.angels
      .map(a => Object.assign({ id: uuid() }, a))

    this.selectId = this.selectId.bind(this)
    this.trigger = this.trigger.bind(this)
  }

  selectId(id) {
    console.log(id)
    this.setState({
      selectedId: id,
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
      { color: 'white', photo: '#', name: 'An error has occured', dates: '', bio: [] },
      this.angels.find(a => a.id === this.state.selectedId)
    )

    return (!this.state.triggered)
      ? (
        <div className="angels" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${this.props.columns || 4}, ${this.props.width || 100}px)`,
          gridTemplateRows: `repeat(${this.props.rows || 3}, ${this.props.height || 100}px)`,
          columnGap: `calc((100% - ${this.props.columns * this.props.width}px) / ${this.props.columns - 1})`,
          height: `${this.props.rows * (this.props.height + HEIGHT_GAP) - HEIGHT_GAP}px`,
          rowGap: `${HEIGHT_GAP}px`
        }}>
          <TransitionGroup component={null}>
            {
              this.angels
                .filter(a => a.id !== this.state.selectedId)
                .map((a) => (
			            <Transition key={`angel-${a.id}`} timeout={1000} unmountOnExit>
                    {state => 
                    <Angel transitionState={state}
                    onSelected={() => this.selectId(a.id)}
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
            height: `${this.props.rows * (this.props.height + 10) - 10}px`,
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
}