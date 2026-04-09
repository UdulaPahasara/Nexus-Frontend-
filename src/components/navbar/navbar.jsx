import React, { useState } from 'react';
import { Box, Button, Link, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import nexusLogo from '../../assets/nexus/nexus.webp';

function Navbar() {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleNavigate = (path) => {
        setDrawerOpen(false);
        navigate(path);
    };

    return (
        <>
            <Box sx={{
                width: '100%',
                height: '75px',
                bgcolor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                boxSizing: 'border-box'
            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1225px',
                    px: '20px',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxSizing: 'border-box'
                }}>
                    {/* Left: Hamburger (mobile only) + Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <IconButton
                            edge="start"
                            aria-label="open menu"
                            onClick={toggleDrawer(true)}
                            sx={{
                                display: { xs: 'flex', sm: 'none' }, // Only show on mobile
                                color: '#ffffff',
                                p: 0
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            component="img"
                            src={nexusLogo}
                            alt="Nexus Logo"
                            sx={{ width: 109, height: 15, cursor: 'pointer' }}
                            onClick={() => navigate('/')}
                        />
                    </Box>

                    {/* Right: Nav Links + Buttons (hidden on mobile) */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 4, md: 6 } }}>
                        <Link href="#" underline="none" sx={{ color: '#ffffff', fontFamily: 'Poppins', fontSize: '13px', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
                            Reviews
                        </Link>
                        <Link href="#" underline="none" sx={{ color: '#ffffff', fontFamily: 'Poppins', fontSize: '13px', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>
                            Pricing
                        </Link>
                        <Link
                            component="button"
                            onClick={() => navigate('/login')}
                            underline="none"
                            sx={{ color: '#ffffff', fontFamily: 'Poppins', fontSize: '13px', fontWeight: 500, cursor: 'pointer', display: { xs: 'none', sm: 'block' } }}
                        >
                            Login
                        </Link>
                        <Button
                            onClick={() => navigate('/individuals')}
                            sx={{
                                bgcolor: '#00E783',
                                color: '#000',
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '13px',
                                textTransform: 'none',
                                borderRadius: '25px',
                                pl: '20px',
                                pr: '12px',
                                py: '6px',
                                '&:hover': { bgcolor: '#00c670' },
                                display: { xs: 'none', sm: 'flex' },
                                alignItems: 'center',
                                gap: '4px'
                            }}
                        >
                            Sign Up <KeyboardArrowRightIcon fontSize="small" sx={{ ml: '-4px' }} />
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Mobile Dropdown Drawer */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        width: '260px',
                        bgcolor: '#0d0d0d',
                        color: '#fff',
                        pt: '20px'
                    }
                }}
            >
                {/* Drawer Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '20px', pb: '16px' }}>
                    <Box
                        component="img"
                        src={nexusLogo}
                        alt="Nexus Logo"
                        sx={{ width: 90, height: 13 }}
                    />
                    <IconButton onClick={toggleDrawer(false)} sx={{ color: '#fff', p: 0 }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: '8px' }} />

                {/* Nav Links */}
                <List disablePadding>
                    <ListItem disablePadding>
                        <ListItemButton
                            href="#"
                            sx={{ px: '24px', py: '14px', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}
                            onClick={toggleDrawer(false)}
                        >
                            <ListItemText
                                primary="Reviews"
                                primaryTypographyProps={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '15px', color: '#fff' }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            href="#"
                            sx={{ px: '24px', py: '14px', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}
                            onClick={toggleDrawer(false)}
                        >
                            <ListItemText
                                primary="Pricing"
                                primaryTypographyProps={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '15px', color: '#fff' }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: '8px' }} />

                {/* Login / Sign Up */}
                <Box sx={{ px: '20px', pt: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Button
                        onClick={() => handleNavigate('/login')}
                        fullWidth
                        variant="outlined"
                        sx={{
                            color: '#fff',
                            borderColor: 'rgba(255,255,255,0.3)',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '14px',
                            textTransform: 'none',
                            borderRadius: '25px',
                            py: '10px',
                            '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => handleNavigate('/individuals')}
                        fullWidth
                        sx={{
                            bgcolor: '#00E783',
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '14px',
                            textTransform: 'none',
                            borderRadius: '25px',
                            py: '10px',
                            '&:hover': { bgcolor: '#00c670' },
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                        }}
                    >
                        Sign Up <KeyboardArrowRightIcon fontSize="small" />
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;
