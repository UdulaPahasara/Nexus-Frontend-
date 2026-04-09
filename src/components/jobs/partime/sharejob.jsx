import React from 'react';
import { Menu, MenuItem, Typography, Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const ShareJob = ({ anchorEl, open, onClose, darkMode }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    minWidth: { xs: '200px', sm: '240px' },
                    maxWidth: '90vw',
                    width: 'auto',
                    borderRadius: '15px',
                    boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.08)',
                    mt: '5px',
                    bgcolor: darkMode ? '#2a2a3c' : '#fff',
                    border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f0f0f0',
                    '& .MuiList-root': { padding: 0 }
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            disableScrollLock={true}
        >
            {[
                { icon: <ShareIcon sx={{ fontSize: '18px', color: darkMode ? '#aaa' : '#666' }} />, text: 'Share in message' },
                { icon: <WorkOutlineIcon sx={{ fontSize: '18px', color: darkMode ? '#aaa' : '#666' }} />, text: 'Share Job Via' },
                { icon: <ErrorOutlineIcon sx={{ fontSize: '18px', color: darkMode ? '#aaa' : '#666' }} />, text: 'Report Job' },
                { icon: <UnfoldMoreIcon sx={{ fontSize: '20px', color: darkMode ? '#aaa' : '#666' }} />, text: 'Suggest less from this company' }
            ].map((item, index, arr) => (
                <MenuItem
                    key={item.text}
                    onClick={onClose}
                    sx={{
                        py: { xs: '10px', sm: '12px' },
                        px: { xs: '12px', sm: '15px' },
                        gap: '12px',
                        borderBottom: index === arr.length - 1 ? 'none' : (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f2f2f2'),
                        alignItems: 'center',
                        '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f9f9f9' }
                    }}
                >
                    <Box sx={{ width: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                        {item.icon}
                    </Box>
                    <Typography sx={{
                        fontSize: { xs: '12px', sm: '13px' },
                        fontWeight: 500,
                        color: darkMode ? '#fff' : '#555',
                        fontFamily: 'Poppins',
                        whiteSpace: { xs: 'normal', sm: 'nowrap' },
                        lineHeight: 1.3
                    }}>
                        {item.text}
                    </Typography>
                </MenuItem>
            ))}
        </Menu>
    );
};

export default ShareJob;
