import React from 'react';
import { Box, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import CheckIcon from '@mui/icons-material/Check';

const UpDownArrowBtn = ({ darkMode, onSelect, selectedSort }) => {
    const options = [
        { id: 'recent', label: 'Most recent', icon: <HistoryIcon sx={{ fontSize: '18px' }} /> },
        { id: 'relevant', label: 'Most relevant', icon: <CheckIcon sx={{ fontSize: '18px' }} /> },
    ];

    return (
        <Box sx={{
            position: 'absolute',
            top: { xs: '35px', sm: '42px' },
            right: { xs: '0', sm: '0' },
            width: '131px',
            height: '54px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '10px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            zIndex: 1100,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #f0f0f0',
        }}>
            {options.map((option, index) => (
                <Box
                    key={option.id}
                    onClick={() => onSelect(option.id)}
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        px: '10px',
                        gap: '6px',
                        cursor: 'pointer',
                        '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' },
                        borderBottom: index === 0 ? (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f5f5f5') : 'none'
                    }}
                >
                    <Box sx={{ color: darkMode ? '#888' : '#888', display: 'flex', alignItems: 'center' }}>
                        {option.icon}
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '12px',
                        color: darkMode ? '#fff' : '#222',
                        flex: 1,
                        whiteSpace: 'nowrap'
                    }}>
                        {option.label}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default UpDownArrowBtn;
