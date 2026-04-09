import React, { useState } from 'react';
import { Box, Typography, Checkbox } from '@mui/material';

const EXP_LEVELS = [
    'All',
    'Less than 1 Year',
    '1-2 Years',
    '3-5 years',
    '5+ Years'
];

const ExPop = ({ darkMode, onClose }) => {
    const [selected, setSelected] = useState(['All']);

    const handleToggle = (level) => {
        if (level === 'All') {
            setSelected(['All']);
            return;
        }

        setSelected(prev => {
            const newSelection = prev.filter(l => l !== 'All'); // Remove 'All' if selecting something else
            return prev.includes(level)
                ? newSelection.filter(l => l !== level)
                : [...newSelection, level];
        });
    };

    return (
        <Box sx={{
            width: '180px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '16px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            p: '8px 12px',
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0e0e0',
            boxSizing: 'border-box'
        }}>
            {EXP_LEVELS.map((level) => (
                <Box key={level} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: '8px',
                    cursor: 'pointer'
                }} onClick={() => handleToggle(level)}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '13px',
                        color: darkMode ? '#fff' : '#111',
                        fontWeight: 400
                    }}>
                        {level}
                    </Typography>
                    <Checkbox
                        checked={selected.includes(level)}
                        onChange={() => handleToggle(level)}
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            p: 0,
                            '& .MuiSvgIcon-root': { fontSize: '20px' },
                            color: darkMode ? '#666' : '#999',
                            '&.Mui-checked': {
                                color: 'rgba(0, 231, 131, 1)'
                            }
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default ExPop;
