import { Box, Button, Stack, Typography } from '@mui/material'

/**
 * This is a sample Home Page Component
 */
export const Component = () => {
  return (
    <>
      <title>Home</title>
      <Box sx={{ width: '100%', maxWidth: 800 }}>
        <Typography variant='h1' gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant='h2' gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant='h3' gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant='h4' gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant='h5' gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant='h6' gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant='body1' gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='body2' gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='button' gutterBottom sx={{ display: 'block' }}>
          button text
        </Typography>
        <Typography variant='caption' gutterBottom sx={{ display: 'block' }}>
          caption text
        </Typography>
        <Typography variant='overline' gutterBottom sx={{ display: 'block' }}>
          overline text
        </Typography>
        <Stack spacing={2} direction='column'>
          <Stack spacing={2} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
          </Stack>
          <Stack spacing={2} direction='row'>
            <Button color='secondary' variant='text'>
              Text
            </Button>
            <Button color='secondary' variant='contained'>
              Contained
            </Button>
            <Button color='secondary' variant='outlined'>
              Outlined
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

Component.displayName = 'Home'
