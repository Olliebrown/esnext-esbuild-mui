import React, { useState } from 'react'

import { Container, Typography, Button, Grid } from '@mui/material'

export default function App () {
  const [enablePower, setEnablePower] = useState(false)

  return (
    <Container fixed>
      <Typography
        variant="h2"
        component="h1"
        sx={{ mt: 4, mb: 4, pb: 1, borderBottom: 1, borderColor: 'grey.400' }}
      >
        {'Welcome to Material UI!'}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button variant="contained" fullWidth color="primary">
            {'Hello Streetlight'}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" fullWidth color="secondary">
            {'What\'cha knowing?'}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="status"
            onClick={() => { setEnablePower(!enablePower) }}
            fullWidth
          >
            {'I\'ve come to see'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth disabled={enablePower}>
            {'Your power flowing'}
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}
