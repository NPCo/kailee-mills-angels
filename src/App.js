import React, { Component } from 'react'

import AngelGrid from './AngelGrid.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const angels = [
  {
    x: 1,
    y: 1,
    w: 1,
    h: 2,
    color: '#d7f5e1',
    thumbnail: 'https://static.wixstatic.com/media/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg/v1/crop/x_0,y_19,w_320,h_398/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg',
    photo: 'https://static.wixstatic.com/media/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg/v1/crop/x_0,y_19,w_320,h_398/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg',
    name: 'Kailee Mayher',
    dates: '2001 - 2017',
    bio: [
      'age 16; beloved and cherished daughter of Rick and Stella (nee Del Corpo); dear granddaughter of the late Domenic and Donna Del Corpo, Dick and Carol Mayher; dearest niece of Jimmy Del Corpo and Randy Mayher; great-niece of Angela Bellucci, Sandra Kolenc, Anna Del Corpo and Jean Mayher; loving cousin of Joanne Milia, Loretta Picione (Nick), Matthew Milia (Stephanie), Danielle Milia, Thomas Picione, Isabella Picione, Adele Caccia, Alessia Caccia, Laurie Norvaisis and Linda Kane-Cox.',
      'Kailee was a student at Strongsville High School, class of 2019 where she was an excellent student, a member of the track team, the Key Club and accepted into DECA. She was generous, thoughtful and kind. Her beautiful smile and her sparkling eyes will always be remembered. She touched the lives of everyone she came in contact with. Kailee was the light of our lives. She was beautiful in every way and will be greatly missed by many.',
      'In lieu of flowers, contributions may be made to the Kailee Mayher Charitable Fund c/o any Fifth Third Bank. Mass of Christian Burial at St. Joseph Church, 12700 Pearl Rd., Strongsville, Tuesday, June 13, 2017 at 10 a.m. Entombment Holy Cross Mausoleum. Family will receive friends at the church, Monday, June 12 from 3-8 p.m.'
    ]
  },
  {
    x: 1,
    y: 3,
    w: 1,
    h: 1,
    color: '#d7f5e1',
  },
  {
    x: 2,
    y: 1,
    w: 1,
    h: 1,
    color: '#f17079',
  },
  {
    x: 2,
    y: 2,
    w: 1,
    h: 2,
    color: '#f17079',
    thumbnail: 'https://static.wixstatic.com/media/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg/v1/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg',
    photo: 'https://static.wixstatic.com/media/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg/v1/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg',
    name: 'David Tucker',
    dates: '1998 - 2018',
    bio: [
      'Est minima iusto saepe eligendi voluptas. Beatae ex sunt rem suscipit sed. Corporis repudiandae et qui. Dolorum cupiditate vel nihil aut doloremque. Pariatur molestiae perspiciatis ut vitae tempore. Natus qui velit id veniam ut dolorum.',
      'Quis consequuntur itaque sint dolor est voluptatem eum quidem. Qui sed et sint eligendi recusandae. Eligendi eaque unde reiciendis non possimus. Voluptatem dolor dolores qui at ut veniam quia esse Minus quae inventore sit. Provident nostrum corrupti numquam voluptatem. Et eum est ducimus. Vel vitae voluptate tempora.',
      'Voluptatibus perferendis a sed consequuntur aut non possimus tempora. Aperiam in officia maiores et illo tempora qui. Nemo illo illum voluptate est. Est blanditiis quis enim sint eum consequatur est perspiciatis. Vel voluptas ipsa et. Omnis pariatur totam dolorum nisi quas assumenda. Ut atque qui exercitationem. Sunt numquam et laboriosam.'
    ]
  },
  {
    x: 3,
    y: 1,
    w: 1,
    h: 2,
    color: '#d7f5e1',
    thumbnail: 'https://static.wixstatic.com/media/82ddba_db45fc9153134e6597812339610dda3c~mv2.jpg/v1/crop/x_0,y_43,w_521,h_662/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/44618644_755147158153269_914238857306282.jpg',
    photo: 'https://static.wixstatic.com/media/82ddba_db45fc9153134e6597812339610dda3c~mv2.jpg/v1/crop/x_0,y_43,w_521,h_662/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/44618644_755147158153269_914238857306282.jpg',
    name: 'Tavin Parker',
    dates: '1997 - 2015',
    bio: [
      'Est minima iusto saepe eligendi voluptas. Beatae ex sunt rem suscipit sed. Corporis repudiandae et qui. Dolorum cupiditate vel nihil aut doloremque. Pariatur molestiae perspiciatis ut vitae tempore. Natus qui velit id veniam ut dolorum.',
      'Quis consequuntur itaque sint dolor est voluptatem eum quidem. Qui sed et sint eligendi recusandae. Eligendi eaque unde reiciendis non possimus. Voluptatem dolor dolores qui at ut veniam quia esse Minus quae inventore sit. Provident nostrum corrupti numquam voluptatem. Et eum est ducimus. Vel vitae voluptate tempora.',
      'Voluptatibus perferendis a sed consequuntur aut non possimus tempora. Aperiam in officia maiores et illo tempora qui. Nemo illo illum voluptate est. Est blanditiis quis enim sint eum consequatur est perspiciatis. Vel voluptas ipsa et. Omnis pariatur totam dolorum nisi quas assumenda. Ut atque qui exercitationem. Sunt numquam et laboriosam.'
    ]
  },
  {
    x: 3,
    y: 3,
    w: 1,
    h: 1,
    color: '#d7f5e1',
  },
  {
    x: 4,
    y: 1,
    w: 1,
    h: 1,
    color: '#f17079',
  },
  {
    x: 4,
    y: 2,
    w: 1,
    h: 2,
    color: '#f17079',
    thumbnail: 'https://static.wixstatic.com/media/82ddba_93dc731394ed4ddaaa56667cc8dd5c81~mv2.jpg/v1/crop/x_105,y_3,w_435,h_537/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/Katlyn%20Fowler%203.jpg',
    photo: 'https://static.wixstatic.com/media/82ddba_93dc731394ed4ddaaa56667cc8dd5c81~mv2.jpg/v1/crop/x_105,y_3,w_435,h_537/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/Katlyn%20Fowler%203.jpg',
    name: 'Katlyn Fowler',
    dates: '1999 - 2016',
    bio: [
      'Est minima iusto saepe eligendi voluptas. Beatae ex sunt rem suscipit sed. Corporis repudiandae et qui. Dolorum cupiditate vel nihil aut doloremque. Pariatur molestiae perspiciatis ut vitae tempore. Natus qui velit id veniam ut dolorum.',
      'Quis consequuntur itaque sint dolor est voluptatem eum quidem. Qui sed et sint eligendi recusandae. Eligendi eaque unde reiciendis non possimus. Voluptatem dolor dolores qui at ut veniam quia esse Minus quae inventore sit. Provident nostrum corrupti numquam voluptatem. Et eum est ducimus. Vel vitae voluptate tempora.',
      'Voluptatibus perferendis a sed consequuntur aut non possimus tempora. Aperiam in officia maiores et illo tempora qui. Nemo illo illum voluptate est. Est blanditiis quis enim sint eum consequatur est perspiciatis. Vel voluptas ipsa et. Omnis pariatur totam dolorum nisi quas assumenda. Ut atque qui exercitationem. Sunt numquam et laboriosam.'
    ]
  }
]

const angelGrid = () => <AngelGrid rows={3} columns={4} width={250} height={150} angels={angels}/>

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="angel-container">
              <Route path="/" exact component={angelGrid} />
              <Route path="/edit" component={() => <h2>Hello there</h2>} />
          </div>
        </Router>
      </div>
    )
  }
}
