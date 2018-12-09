import React, { Component } from 'react'

import AngelDisplay from './views/AngelDisplay.js'
import EditableAngelGrid from './views/EditableAngelGrid.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const angels = () => fetch('http://localhost:3000/api/angel')
  .then(res => res.json())
  .then(json => json.data)

const angelGrid = () => (
  <div className="three-by-three">
    <div className="middle-center">
      <AngelDisplay width={250} height={150} angels={angels} />
    </div>
  </div>
)

const testAngels = [
  { _id: 'abc', x: 1, y: 1, w: 1, h: 2, color: '#d7f5e1', name: 'Kailee Mayher', dates: '2001 - 2017',
    thumbnail: 'https://static.wixstatic.com/media/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg/v1/crop/x_0,y_19,w_320,h_398/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg',
    photo: 'https://static.wixstatic.com/media/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg/v1/crop/x_0,y_19,w_320,h_398/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg',
    bio: [
      'age 16; beloved and cherished daughter of Rick and Stella (nee Del Corpo); dear granddaughter of the late Domenic and Donna Del Corpo, Dick and Carol Mayher; dearest niece of Jimmy Del Corpo and Randy Mayher; great-niece of Angela Bellucci, Sandra Kolenc, Anna Del Corpo and Jean Mayher; loving cousin of Joanne Milia, Loretta Picione (Nick), Matthew Milia (Stephanie), Danielle Milia, Thomas Picione, Isabella Picione, Adele Caccia, Alessia Caccia, Laurie Norvaisis and Linda Kane-Cox.',
      'Kailee was a student at Strongsville High School, class of 2019 where she was an excellent student, a member of the track team, the Key Club and accepted into DECA. She was generous, thoughtful and kind. Her beautiful smile and her sparkling eyes will always be remembered. She touched the lives of everyone she came in contact with. Kailee was the light of our lives. She was beautiful in every way and will be greatly missed by many.',
      'In lieu of flowers, contributions may be made to the Kailee Mayher Charitable Fund c/o any Fifth Third Bank. Mass of Christian Burial at St. Joseph Church, 12700 Pearl Rd., Strongsville, Tuesday, June 13, 2017 at 10 a.m. Entombment Holy Cross Mausoleum. Family will receive friends at the church, Monday, June 12 from 3-8 p.m.'
    ]
  },
  { _id: 'def', x: 1, y: 3, w: 1, h: 1, color: '#d7f5e1' }
]

const editInterface = () => <EditableAngelGrid angels={testAngels} />

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={angelGrid} />
          <Route path="/edit" component={editInterface} />
        </>
      </Router>
    )
  }
}
