import AppBar from '@mui/material'
import Toolbar from '@mui/material'
import MenuIcon from '@mui/material'
import IconButton from '@mui/material'
import Typography from '@mui/material'






function Header() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            App Title
          </Typography>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
  