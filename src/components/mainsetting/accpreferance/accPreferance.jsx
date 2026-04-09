"use no memo";
import React, { useState } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomToggle = ({ checked, onChange, color = '#00E783' }) => (
    <Box
        onClick={onChange}
        sx={{
            width: '38px',
            height: '20px',
            bgcolor: checked ? color : '#D1D5DB',
            borderRadius: '20px',
            position: 'relative',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            px: '2px'
        }}
    >
        <Box sx={{
            width: '16px',
            height: '16px',
            bgcolor: '#fff',
            borderRadius: '50%',
            position: 'absolute',
            left: checked ? '20px' : '2px',
            transition: 'left 0.3s ease',
            boxShadow: '0px 1px 3px rgba(0,0,0,0.2)'
        }} />
    </Box>
);

const AccPreferance = ({ onBack, darkMode = false, onToggle }) => {
    console.log("Rendering AccPreferance, darkMode:", darkMode);

    // Interactive states
    const [soundOn, setSoundOn] = useState(true);
    const [hibernateEnabled, setHibernateEnabled] = useState(false);
    const navigate = useNavigate();

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            height: { xs: 'auto', md: '656px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            p: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            transition: 'background 0.3s ease'
        }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '20px' }}>
                <IconButton onClick={onBack} size="small" sx={{ color: darkMode ? '#fff' : '#111' }}>
                    <ArrowBackIcon />
                </IconButton>
            </Box>

            {/* Inner Container */}
            <Box sx={{
                width: '100%',
                maxWidth: '680px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            }}>
                {/* Profile Information Section */}
                <Box sx={{
                    width: '100%',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f9f9f9' },
                    borderRadius: '8px',
                    px: '10px'
                }}>
                    <Box>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>
                            Profile Information
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: darkMode ? '#aaa' : '#888' }}>
                            Modify name, mail, phone, education, professional, etc.
                        </Typography>
                    </Box>
                    <ArrowForwardIosIcon sx={{ fontSize: '14px', color: '#888' }} />
                </Box>

                <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee', my: '4px' }} />

                {/* Preference List */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                    {/* Preferred language */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px' }}>
                        <Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '15px', fontWeight: 500, color: darkMode ? '#fff' : '#333' }}>
                                Account Preference
                            </Typography>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                                Preferred language
                            </Typography>
                        </Box>
                        <KeyboardArrowDownIcon sx={{ color: '#888' }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Theme */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Theme
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>Light</Typography>
                            <CustomToggle checked={darkMode} onChange={onToggle} />
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>Dark</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Sound Effects */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Sound Effects
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>ON</Typography>
                            <CustomToggle checked={soundOn} onChange={() => setSoundOn(!soundOn)} />
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>OFF</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* People Unfollowed/Blocked */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px', cursor: 'pointer', '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f9f9f9' } }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            People Unfollowed/Blocked
                        </Typography>
                        <ArrowForwardIosIcon sx={{ fontSize: '14px', color: '#888' }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Account type */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px', cursor: 'pointer', '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f9f9f9' } }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Account type
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ color: '#888' }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Showing Profile and Details */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px', cursor: 'pointer', '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f9f9f9' } }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Showing Profile and Details
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ color: '#888' }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Hibernate Account */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Hibernate Account
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>Enable</Typography>
                            <CustomToggle checked={hibernateEnabled} onChange={() => setHibernateEnabled(!hibernateEnabled)} color="#6B7280" />
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>Disable</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Deactivate / Delete account */}
                    <Box sx={{
                        width: '100%',
                        minHeight: '55px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: { xs: '5px', sm: '10px' },
                        py: { xs: '10px', sm: 0 },
                        gap: '10px'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: { xs: '13px', sm: '14px' },
                            color: '#888',
                            flex: 1,
                            lineHeight: 1.3
                        }}>
                            Deactivate / Delete account
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/login')}
                            sx={{
                                bgcolor: '#C80E0E',
                                color: '#fff',
                                textTransform: 'none',
                                fontFamily: 'Poppins',
                                fontSize: { xs: '11px', sm: '12px' },
                                borderRadius: '25px',
                                px: { xs: '12px', sm: '20px' },
                                height: '30px',
                                flexShrink: 0,
                                whiteSpace: 'nowrap',
                                minWidth: 'fit-content',
                                '&:hover': { bgcolor: '#a60b0b' }
                            }}
                        >
                            Delete account
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AccPreferance;
