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

const angelData = [
  { color: '#deeeee', name: 'Me', bio: 'lorem ipsum', dates: '2001 - 2018', photo: 'https://via.placeholder.com/140x100', thumbnail: 'https://via.placeholder.com/140x100', x: 1, y: 1, w: 1, h: 1 },
  { color: '#d7f5e1', name: 'Me', bio: 'lorem ipsum', dates: '2001 - 2018', photo: 'https://via.placeholder.com/140x100', thumbnail: 'https://via.placeholder.com/140x100', x: 1, y: 2, w: 2, h: 1 },
  { color: '#deeeee', name: 'Me', bio: 'lorem ipsum', dates: '2001 - 2018', photo: 'https://via.placeholder.com/140x100', thumbnail: 'https://via.placeholder.com/140x100', x: 2, y: 1, w: 2, h: 1 },
  { color: '#f17079', name: 'Me', bio: 'lorem ipsum', dates: '2001 - 2018', photo: 'https://via.placeholder.com/140x100', thumbnail: 'https://via.placeholder.com/140x100', x: 3, y: 2, w: 1, h: 1 },
]

const dimensions = { width: 250, height: 150 }

storiesOf('AngelDisplay', module)
  .add('desktop', () => <div style={{ width: '1000px' }}><AngelDisplay angels={angelData} {...dimensions} /></div>)
  .add('mobile', () => <div style={{ width: '360px' }}><AngelDisplay angels={angelData} {...dimensions} /></div>)

storiesOf('EditableAngelGrid', module)
  .add('desktop', () => <div style={{ width: '1000px' }}><EditableAngelGrid angels={angelData} /></div>)