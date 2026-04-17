import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const sortOptions = [
    'Relevance',
    'Recently Active',
    'Name A—Z'
];

const SortBy = ({ onSelect, darkMode = false }) => {
    const textColor = darkMode ? '#FFFFFF' : '#666666';
    const dividerColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : '#F3F4F6';
    const hoverBg = darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)';

    return (
        <Box
            sx={{
                width: { xs: '95vw', sm: '620px' },
                height: '80px',
                bgcolor: darkMode ? '#1E1E1E' : '#FFFFFF',
                borderRadius: '10px',
                pt: '10px',
                pr: '7px',
                pb: '10px',
                pl: '7px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                overflowY: 'auto',
                overflowX: 'hidden',
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: darkMode ? '#444' : '#E0E0E0',
                    borderRadius: '10px',
                },
            }}
        >
            {sortOptions.map((option, index) => (
                <React.Fragment key={option}>
                    <Box
                        onClick={() => onSelect && onSelect(option)}
                        sx={{
                            width: '100%',
                            minHeight: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            px: '10px',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            transition: 'background 0.2s',
                            '&:hover': {
                                bgcolor: hoverBg,
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                fontWeight: 400,
                                color: textColor,
                                flex: 1,
                                gap: '8px',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {option}
                        </Typography>
                    </Box>
                    {index < sortOptions.length - 1 && (
                        <Divider sx={{ borderColor: dividerColor, mx: '10px' }} />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default SortBy;
