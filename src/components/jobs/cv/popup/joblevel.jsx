import React, { useState } from 'react';
import { Box, Typography, Checkbox } from '@mui/material';

const JOB_LEVELS = [
    'Entry level',
    'Mid Level',
    'Senior level',
    'Management'
];

const JobLevelPop = ({ darkMode, onClose }) => {
    const [selected, setSelected] = useState([]);

    const handleToggle = (level) => {
        setSelected(prev =>
            prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
        );
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
            {JOB_LEVELS.map((level, index) => (
                <Box key={level} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: '8px',
                    borderBottom: index < JOB_LEVELS.length - 1 ? (darkMode ? '1px dashed rgba(255,255,255,0.2)' : '1px dashed #ccc') : 'none',
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

export default JobLevelPop;
