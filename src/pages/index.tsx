import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Link } from 'gatsby-theme-material-ui'
import Button from '@material-ui/core/Button'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.hellotham.com/">
        Hello Tham Pty Ltd
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Copyright />
      </Box>
    </Container>
  )
}
