import React from 'react'
import { IconButton, Typography, Box, Button} from '@mui/material';
import { TbChartDots3 } from 'react-icons/tb';

const pages = ['Products', 'Pricing', 'Blog'];

function MobileMenu({ handleCloseNavMenu }) {
  return (
    <>
        <IconButton color='inherit' size='0.75rem' sx={{ margin: '0 0.15rem', display: { xs: 'flex', md:'none'}}} href='/'>
            <TbChartDots3/>
        </IconButton>
        <Typography variant="h6" noWrap component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              alignItems: 'center'
            }}
        >
            NextGen CMS
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
        </Box>
    </>
  )
}

export default MobileMenu