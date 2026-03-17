import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';

const CallPopup = ({ onClose }) => {
    return (
        <Box
            sx={{
                width: '108px',
                height: '61px',
                bgcolor: '#FFFFFF',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                p: '8px 9px',
                boxSizing: 'border-box',
                position: 'absolute',
                top: '55px',
                right: '25px',
                zIndex: 100,
                opacity: 1
            }}
        >
            {/* Audio Call Row */}
            <Box
                sx={{
                    width: '84px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.7 }
                }}
            >
                <LocalPhoneIcon sx={{ width: '18px', height: '18px', color: '#808080' }} />
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        color: '#666666',
                        lineHeight: '18px',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Audio call
                </Typography>
            </Box>

            <Divider sx={{ my: '4px', width: '100%', borderColor: 'rgba(0,0,0,0.05)' }} />

            {/* Video Call Row */}
            <Box
                sx={{
                    width: '84px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.7 }
                }}
            >
                <VideocamIcon sx={{ width: '18px', height: '18px', color: '#808080' }} />
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        color: '#666666',
                        lineHeight: '18px',
                        whiteSpace: 'nowrap'
                    }}
                >
                    Video call
                </Typography>
            </Box>
        </Box>
    );
};

export default CallPopup;
