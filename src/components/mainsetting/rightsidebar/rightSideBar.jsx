"use no memo";
import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';

const SESSIONS = [
    { device: 'I Phone 16 Pro', location: 'Colombo, Sri Lanka', status: 'Active', time: '5h ago', statusColor: '#00E783' },
    { device: 'I Phone 14 Pro', location: 'Kandy, Sri Lanka', status: 'Offline', time: '1m ago', statusColor: '#E02424' },
];

const SOCIAL_LINKS = [
    'https://www.twitter.com/in/nuwini-karunarathna',
    'https://www.fiverr.com/in/nuwini-karunarathna',
    'https://www.dribble.com/in/nuwini-karunarathna',
    'https://www.behance.com/in/nuwini-karunarathna',
];

const SettingsRightSideBar = ({ darkMode = false }) => {
    return (
        <Box sx={{
            width: { xs: '100%', md: '372px' },
            height: '440px',
            display: 'flex',
            flexDirection: 'column',
            gap: '11px',
            bgcolor: 'transparent',
            boxSizing: 'border-box',
            ml: '-20px'
        }}>
            {/* Session Box */}
            <Box sx={{
                width: '100%',
                height: '153px',
                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff',
                borderRadius: '20px',
                p: '17px 16px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)'
            }}>
                {/* Session Header */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: '5px'
                }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>
                        Sessions
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                        <AddIcon sx={{ fontSize: '16px', color: darkMode ? '#fff' : '#111' }} />
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: darkMode ? '#fff' : '#111' }}>
                            Add New
                        </Typography>
                    </Box>
                </Box>

                {/* Session Rows */}
                {SESSIONS.map((session, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '35px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Box sx={{ width: '30px', height: '30px', borderRadius: '4px', border: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <SmartphoneIcon sx={{ fontSize: '18px', color: darkMode ? '#aaa' : '#888' }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: darkMode ? '#ddd' : '#333', lineHeight: 1 }}>
                                    {session.device}
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: darkMode ? '#888' : '#aaa' }}>
                                    {session.location}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Button size="small" sx={{
                                bgcolor: '#C80E0E',
                                color: '#fff',
                                fontSize: '8px',
                                px: '8px',
                                height: '18px',
                                borderRadius: '10px',
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#a60b0b' }
                            }}>
                                Terminate session
                            </Button>
                            <Box sx={{ textAlign: 'right', minWidth: '40px' }}>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '9px', fontWeight: 600, color: session.statusColor, lineHeight: 1 }}>
                                    {session.status}
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '8px', color: '#aaa' }}>
                                    {session.time}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Social & Profile Link Box */}
            <Box sx={{
                width: '100%',
                height: '267px',
                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff',
                borderRadius: '20px',
                p: '20px 16px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)'
            }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>
                    Social
                </Typography>

                {/* Social Links List */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {SOCIAL_LINKS.map((link, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Box sx={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                bgcolor: '#A5F3E4',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0
                            }}>
                                <TwitterIcon sx={{ fontSize: '14px', color: '#000' }} />
                            </Box>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '10px',
                                color: darkMode ? '#aaa' : '#888',
                                textDecoration: 'underline',
                                flexGrow: 1,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}>
                                {link}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '5px', opacity: 0.6 }}>
                                <ContentCopyIcon sx={{ fontSize: '12px', cursor: 'pointer' }} />
                                <ShareIcon sx={{ fontSize: '12px', cursor: 'pointer' }} />
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Profile Link Section */}
                <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>
                        Profile Link
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '10px',
                            color: darkMode ? '#aaa' : '#888',
                            textDecoration: 'underline',
                            flexGrow: 1,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                            https://www.workwing.com/in/nuwini-karunarathna-a6159327a/
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '5px', opacity: 0.6 }}>
                            <ContentCopyIcon sx={{ fontSize: '12px', cursor: 'pointer' }} />
                            <ShareIcon sx={{ fontSize: '12px', cursor: 'pointer' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SettingsRightSideBar;
