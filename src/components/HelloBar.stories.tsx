import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'

import HelloBar from './HelloBar'

// eslint-disable-next-line no-underscore-dangle
// global.__PATH_PREFIX__ = ''

storiesOf('HelloBar', module)
  .addDecorator(muiTheme())
  .add('Default', () => <HelloBar />)
