import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ type, link, text}) {

    const handleClick = () => {
        console.log('#click');
    }

  return (
    <Button variant={type} href={link} 
      sx={{
        color:'white', 
        borderColor:'white', 
        borderRadius:'1rem',
    }} 
    onClick={handleClick}
    >
        {text}
    </Button>
  );
}

