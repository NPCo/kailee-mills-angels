import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import '../index.css'

import AngelListItem from '../components/AngelListItem'

storiesOf('AngelListItem', module)
  .add('named', () => <AngelListItem color="#deeeee" name="Me" onClick={action('clicked')} />)
  .add('unnamed', () => <AngelListItem color="#deeeee" onClick={action('clicked')} />)
  .add('uncolored', () => <AngelListItem name="Me" onClick={action('clicked')} />)