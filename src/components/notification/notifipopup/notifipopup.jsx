import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const NotifiPopup = ({ darkMode = false, onDelete, onMute, onSettings }) => {
    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        py: '10px',
        px: '15px',
        cursor: 'pointer',
        '&:hover': {
            bgcolor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'
        },
        transition: 'background 0.2s'
    };

    return (
        <Box sx={{
            width: '200px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            border: darkMode ? '1px solid #333' : '1px solid #eee',
            position: 'absolute',
            zIndex: 1000,
            right: 0,
            top: '30px'
        }}>
            {/* Delete Option */}
            <Box sx={itemStyle} onClick={onDelete}>
                <DeleteOutlineIcon sx={{ color: '#ff4d4d', fontSize: '18px' }} />
                <Typography sx={{
                    color: '#ff4d4d',
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                    fontWeight: 600
                }}>
                    Delete
                </Typography>
            </Box>

            <Divider sx={{ bgcolor: darkMode ? '#333' : '#eee' }} />

            {/* Mute Option */}
            <Box sx={itemStyle} onClick={onMute}>
                <NotificationsOffOutlinedIcon sx={{ color: darkMode ? '#aaa' : '#888', fontSize: '18px' }} />
                <Typography sx={{
                    color: darkMode ? '#fff' : '#666',
                    fontFamily: 'Poppins',
                    fontSize: '13px'
                }}>
                    Mute notification
                </Typography>
            </Box>

            <Divider sx={{ bgcolor: darkMode ? '#333' : '#eee' }} />

            {/* Settings Option */}
            <Box sx={itemStyle} onClick={onSettings}>
                <SettingsOutlinedIcon sx={{ color: darkMode ? '#aaa' : '#888', fontSize: '18px' }} />
                <Typography sx={{
                    color: darkMode ? '#fff' : '#666',
                    fontFamily: 'Poppins',
                    fontSize: '13px'
                }}>
                    Notification settings
                </Typography>
            </Box>
        </Box>
    );
};

export default NotifiPopup;
