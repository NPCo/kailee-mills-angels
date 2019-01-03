import React, { Component } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import AngelFormInfo from './AngelFormInfo'
import AngelFormBio from './AngelFormBio'
import AngelFormPosition from './AngelFormPosition';

export default class AngelEditForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      x: 1,
      y: 1,
      w: 1,
      h: 1,
      ...props.angel
    }

    this.onEdit = this.onEdit.bind(this)
  }

  onEdit(angel) {
    this.props.onValueChange(angel)
    this.setState(angel)
  }

  render() {
    const { removeAngel } = this.props
    const { ...angel } = this.state
    return (
      <div style={{ backgroundColor: angel.color, gridArea: 'edit' }}>
        <div className="edit-angel-form">
          <Tabs>
            <TabList>
              <Tab>Information</Tab>
              <Tab>Biography</Tab>
              <Tab>Position</Tab>
            </TabList>

            <TabPanel>
              <AngelFormInfo onValueChange={this.onEdit} { ...angel } />
            </TabPanel>
            <TabPanel>
              <AngelFormBio onValueChange={this.onEdit} { ...angel } />
            </TabPanel>
            <TabPanel>
              <AngelFormPosition onValueChange={this.onEdit} removeAngel={removeAngel} { ...angel } />
            </TabPanel>
          </Tabs>
        </div>
    </div>
    )
  }
}