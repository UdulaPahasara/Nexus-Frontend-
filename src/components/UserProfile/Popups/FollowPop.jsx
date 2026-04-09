import React from 'react';
import { Box, Typography, Divider, MenuItem, MenuList } from '@mui/material';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import CloseIcon from '@mui/icons-material/Close';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

const FollowPop = ({ darkMode, onClose }) => {
    const textColor = darkMode ? '#fff' : '#444';
    const hoverBg = darkMode ? 'rgba(255,255,255,0.05)' : '#f5f5f5';
    const borderColor = darkMode ? '#333' : '#eee';

    return (
        <Box sx={{
            width: '99px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            border: `1px solid ${borderColor}`,
            py: '4px'
        }}>
            <MenuList sx={{ p: 0 }}>
                {/* Unfollow */}
                <MenuItem onClick={onClose} sx={{ py: '6px', px: '10px', gap: '8px', '&:hover': { bgcolor: hoverBg } }}>
                    <PersonRemoveOutlinedIcon sx={{ fontSize: '16px', color: darkMode ? '#aaa' : '#666' }} />
                    <Typography sx={{ fontSize: '11px', color: textColor, fontFamily: 'Poppins', fontWeight: 500 }}>
                        Unfollow
                    </Typography>
                </MenuItem>
                <Divider sx={{ mx: '8px', opacity: 0.5, borderColor: borderColor }} />

                {/* Mute */}
                <MenuItem onClick={onClose} sx={{ py: '6px', px: '10px', gap: '8px', '&:hover': { bgcolor: hoverBg } }}>
                    <CloseIcon sx={{ fontSize: '16px', color: darkMode ? '#aaa' : '#666' }} />
                    <Typography sx={{ fontSize: '11px', color: textColor, fontFamily: 'Poppins', fontWeight: 500 }}>
                        Mute
                    </Typography>
                </MenuItem>
                <Divider sx={{ mx: '8px', opacity: 0.5, borderColor: borderColor }} />

                {/* Block */}
                <MenuItem onClick={onClose} sx={{ py: '6px', px: '10px', gap: '8px', '&:hover': { bgcolor: hoverBg } }}>
                    <BlockOutlinedIcon sx={{ fontSize: '16px', color: '#ff4d4d' }} />
                    <Typography sx={{ fontSize: '11px', color: '#ff4d4d', fontFamily: 'Poppins', fontWeight: 600 }}>
                        Block
                    </Typography>
                </MenuItem>
            </MenuList>
        </Box>
    );
};

export default FollowPop;
