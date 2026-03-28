import React from 'react';
import { Box, Typography, IconButton, Switch, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomToggle = ({ checked, onChange, labelLeft, labelRight, color = '#34D399' }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {labelLeft && (
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                {labelLeft}
            </Typography>
        )}
        <Switch
            checked={checked}
            onChange={onChange}
            sx={{
                width: 42,
                height: 22,
                padding: 0,
                '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: 2,
                    transitionDuration: '300ms',
                    '&.Mui-checked': {
                        transform: 'translateX(20px)',
                        color: '#fff',
                        '& + .MuiSwitch-track': {
                            backgroundColor: color,
                            opacity: 1,
                            border: 0,
                        },
                    },
                },
                '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    width: 18,
                    height: 18,
                },
                '& .MuiSwitch-track': {
                    borderRadius: 22 / 2,
                    backgroundColor: '#E5E7EB',
                    opacity: 1,
                },
            }}
        />
        {labelRight && (
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                {labelRight}
            </Typography>
        )}
    </Box>
);

const AccPreferance = ({ onBack, darkMode = false }) => {
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
                        <CustomToggle labelLeft="Light" labelRight="Dark" checked={darkMode} onChange={() => { }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Sound Effects */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Sound Effects
                        </Typography>
                        <CustomToggle labelLeft="ON" labelRight="OFF" checked={true} onChange={() => { }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* People Unfollowed/Blocked */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px', cursor: 'pointer' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            People Unfollowed/Blocked
                        </Typography>
                        <ArrowForwardIosIcon sx={{ fontSize: '14px', color: '#888' }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Account type */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px', cursor: 'pointer' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Account type
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ color: '#888' }} />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Showing Profile and Details */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px', cursor: 'pointer' }}>
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
                        <CustomToggle labelLeft="Enable" labelRight="Disable" checked={false} onChange={() => { }} color="#6B7280" />
                    </Box>

                    <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? '#333' : '#eee' }} />

                    {/* Deactivate / Delete account */}
                    <Box sx={{ width: '100%', height: '55px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '10px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#888' }}>
                            Deactivate / Delete account
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#C80E0E',
                                color: '#fff',
                                textTransform: 'none',
                                fontFamily: 'Poppins',
                                fontSize: '12px',
                                borderRadius: '10px',
                                px: '20px',
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
