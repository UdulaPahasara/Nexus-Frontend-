import React from 'react';
import { Box, Typography } from '@mui/material';
import nochatAsset from '../../../assets/chats/nocaht.webp';

const NoChat = ({ darkMode = false }) => {
    return (
        <Box
            sx={{
                width: '767px',
                height: '656px',
                bgcolor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 1)',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: darkMode
                    ? '0px 4px 20px rgba(0,0,0,0.5)'
                    : '0px 4px 20px rgba(0,0,0,0.05)'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '22.26px',
                    width: '218.47px',
                    height: '263.74px'
                }}
            >
                <Box
                    component="img"
                    src={nochatAsset}
                    alt="No Chat"
                    sx={{
                        width: '218.47px',
                        height: 'auto',
                        opacity: 1,
                        objectFit: 'contain'
                    }}
                />
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '18px',
                        color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.4)',
                        textAlign: 'center',
                        lineHeight: '1.2'
                    }}
                >
                    No more message
                </Typography>
            </Box>
        </Box>
    );
};

export default NoChat;
