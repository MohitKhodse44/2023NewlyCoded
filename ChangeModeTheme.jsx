import { Button, IconButton } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from './BlackWhiteTheme';


const ChangeModeTheme = () => {
    const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div>
        <Button> {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="black">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton></Button>
      
    </div>
  )
}

export default ChangeModeTheme
