import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position='sticky' color='inherit' elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
            <Stack direction='row' spacing={1} alignItems='center'>
                <Box sx={{ width: 40, height: 40,bgcolor: 'primary.main', color: 'white',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 20
                }}>ANT</Box>
                <Typography variant='h6'>Accelerated Nexus of Talent</Typography>
            </Stack>
            <Stack direction='row' spacing={3} alignItems='center'>
                <Button color="inherit">Features</Button>
                <Button color="inherit">How it Works</Button>
                <Button color="inherit">Testimonials</Button>
                <Button color="inherit" variant='outlined' sx={{ ml: 2}} >Log in</Button>
                <Button color="primary" variant='contained' sx={{ borderRadius: 2}} >Sign up</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
