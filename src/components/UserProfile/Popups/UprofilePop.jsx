import React from 'react';
import { Box, Typography, Divider, MenuItem, MenuList } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

const UprofilePop = ({ darkMode, onClose }) => {
    const textColor = darkMode ? '#fff' : '#444';
    const hoverBg = darkMode ? 'rgba(255,255,255,0.05)' : '#f5f5f5';
    const borderColor = darkMode ? '#333' : '#eee';

    const menuItems = [
        { icon: <SendOutlinedIcon sx={{ fontSize: '18px' }} />, text: 'Share in message' },
        { icon: <ShareOutlinedIcon sx={{ fontSize: '18px' }} />, text: 'Share via' },
        { icon: <AccountBoxOutlinedIcon sx={{ fontSize: '18px' }} />, text: 'Contact info' },
        { icon: <DescriptionOutlinedIcon sx={{ fontSize: '18px' }} />, text: 'Connect' },
        { icon: <BlockOutlinedIcon sx={{ fontSize: '18px' }} />, text: 'Report/Block' },
        { icon: <SaveOutlinedIcon sx={{ fontSize: '18px' }} />, text: 'save profile as pdf' },
    ];

    return (
        <Box sx={{
            width: '162px',
            height: 'auto', // Adjusting from 181px to be dynamic but capping content
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            border: `1px solid ${borderColor}`,
            py: '5px'
        }}>
            <MenuList sx={{ p: 0 }}>
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <MenuItem
                            onClick={onClose}
                            sx={{
                                py: '8px',
                                px: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                '&:hover': { bgcolor: hoverBg }
                            }}
                        >
                            <Box sx={{ color: darkMode ? '#aaa' : '#666', display: 'flex' }}>
                                {item.icon}
                            </Box>
                            <Typography sx={{
                                fontSize: '12px',
                                color: textColor,
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                textTransform: 'none'
                            }}>
                                {item.text}
                            </Typography>
                        </MenuItem>
                        {index < menuItems.length - 1 && (
                            <Divider sx={{ mx: '10px', borderColor: borderColor, opacity: 0.5 }} />
                        )}
                    </React.Fragment>
                ))}
            </MenuList>
        </Box>
    );
};

export default UprofilePop;
