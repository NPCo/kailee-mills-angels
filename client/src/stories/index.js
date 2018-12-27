import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import '../index.css'

import AngelListItem from '../components/AngelListItem'
import AngelDisplay from '../views/AngelDisplay'
import EditableAngelGrid from '../views/EditableAngelGrid'

storiesOf('AngelListItem', module)
  .add('named', () => <AngelListItem color="#deeeee" name="Me" onClick={action('clicked')} />)
  .add('unnamed', () => <AngelListItem color="#deeeee" onClick={action('clicked')} />)
  .add('uncolored', () => <AngelListItem name="Me" onClick={action('clicked')} />)

const angelData = [{"_id":"5c1c860150d21b00165d43f7","color":"#d7f5e1","x":"1","y":"1","w":"1","h":"2","name":"Kailee Mayher","bio":"age 16; beloved and cherished daughter of Rick and Stella (nee Del Corpo); dear granddaughter of the late Domenic and Donna Del Corpo, Dick and Carol Mayher; dearest niece of Jimmy Del Corpo and Randy Mayher; great-niece of Angela Bellucci, Sandra Kolenc, Anna Del Corpo and Jean Mayher; loving cousin of Joanne Milia, Loretta Picione (Nick), Matthew Milia (Stephanie), Danielle Milia, Thomas Picione, Isabella Picione, Adele Caccia, Alessia Caccia, Laurie Norvaisis and Linda Kane-Cox. Kailee was a student at Strongsville High School, class of 2019 where she was an excellent student, a member of the track team, the Key Club and accepted into DECA. She was generous, thoughtful and kind. Her beautiful smile and her sparkling eyes will always be remembered. She touched the lives of everyone she came in contact with. Kailee was the light of our lives. She was beautiful in every way and will be greatly missed by many. In lieu of flowers, contributions may be made to the Kailee Mayher Charitable Fund c/o any Fifth Third Bank. Mass of Christian Burial at St. Joseph Church, 12700 Pearl Rd., Strongsville, Tuesday, June 13, 2017 at 10 a.m. Entombment Holy Cross Mausoleum. Family will receive friends at the church, Monday, June 12 from 3-8 p.m.","photo":"https://static.wixstatic.com/media/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg/v1/crop/x_0,y_19,w_320,h_398/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg","thumbnail":"https://static.wixstatic.com/media/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg/v1/crop/x_0,y_19,w_320,h_398/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_37d2056d4b214c8bacd52cd05731b06e~mv2.jpg","dates":"2001 - 2017"},{"_id":"5c1c860150d21b00165d43f8","color":"#deeeee","x":"1","y":"3","w":"1","h":"1"},{"_id":"5c1c860150d21b00165d43f9","color":"#f17079","x":"2","y":"2","w":"1","h":"2","name":"David Tucker","dates":"1998 - 2018","photo":"https://static.wixstatic.com/media/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg/v1/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg","thumbnail":"https://static.wixstatic.com/media/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg/v1/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/82ddba_bf03a12aaa5a474387e2935588dbfefa~mv2.jpg","bio":"."},{"_id":"5c1c860150d21b00165d43fa","color":"#d7f5e1","x":"2","y":"1","w":"1","h":"1"},{"_id":"5c1c860150d21b00165d43fb","color":"#deeeee","x":"3","y":"1","w":"1","h":"2","name":"Tavin Parker","dates":"1997 - 2015","photo":"https://static.wixstatic.com/media/82ddba_db45fc9153134e6597812339610dda3c~mv2.jpg/v1/crop/x_0,y_43,w_521,h_662/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/44618644_755147158153269_914238857306282.jpg","thumbnail":"https://static.wixstatic.com/media/82ddba_db45fc9153134e6597812339610dda3c~mv2.jpg/v1/crop/x_0,y_43,w_521,h_662/fill/w_194,h_246,al_c,q_80,usm_0.66_1.00_0.01/44618644_755147158153269_914238857306282.jpg","bio":".."},{"_id":"5c1c860150d21b00165d43fc","color":"#f17079","x":"3","y":"3","w":"1","h":"1"},{"_id":"5c1c860150d21b00165d43fd","color":"#d7f5e1","x":"4","y":"1","w":"1","h":"1"},{"_id":"5c1c860150d21b00165d43fe","color":"#deeeee","x":"4","y":"2","w":"1","h":"2","name":"Katlyn Fowler","dates":"1999 - 2016","photo":"https://static.wixstatic.com/media/82ddba_93dc731394ed4ddaaa56667cc8dd5c81~mv2.jpg/v1/crop/x_105,y_3,w_435,h_537/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/Katlyn%20Fowler%203.jpg","thumbnail":"https://static.wixstatic.com/media/82ddba_93dc731394ed4ddaaa56667cc8dd5c81~mv2.jpg/v1/crop/x_105,y_3,w_435,h_537/fill/w_201,h_246,al_c,q_80,usm_0.66_1.00_0.01/Katlyn%20Fowler%203.jpg","bio":"..."}]


const dimensions = { width: 250, height: 150 }

storiesOf('AngelDisplay', module)
  .add('desktop', () => <div style={{ width: '1000px' }}><AngelDisplay angels={angelData} {...dimensions} /></div>)
  .add('mobile', () => <div style={{ width: '360px' }}><AngelDisplay angels={angelData} {...dimensions} /></div>)

storiesOf('EditableAngelGrid', module)
  .add('desktop', () => <div style={{ width: '1000px' }}><EditableAngelGrid angels={angelData} /></div>)