import { useState } from 'react';
import * as ui from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle } from '@mui/icons-material';

const TopBar = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <ui.AppBar position="static" color='primary'>
            <ui.Toolbar>
                <ui.IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ color: 'common.white', mr: 2 }}>
                    <MenuIcon />
                </ui.IconButton>
                <ui.Typography variant="h6" color="inherit" component="div" sx={{ color: 'common.white', flexGrow: 1 }}>
                    웹 개발 백과사전
                </ui.Typography>
                <div>
                    <ui.IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={{ color: 'common.white' }}
                    >
                        <AccountCircle />
                    </ui.IconButton>
                    <ui.Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <ui.MenuItem onClick={handleClose}>Profile</ui.MenuItem>
                        <ui.MenuItem onClick={handleClose}>My account</ui.MenuItem>
                    </ui.Menu>
                </div>
            </ui.Toolbar>
        </ui.AppBar>

    );
};

export default TopBar;