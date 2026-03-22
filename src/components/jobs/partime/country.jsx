import React from 'react';
import { Box, Typography, InputBase } from '@mui/material';

import france from '../../../assets/jobs/county/france.webp';
import india from '../../../assets/jobs/county/india.webp';
import korea from '../../../assets/jobs/county/korea.webp';

const Country = ({ darkMode, onSelect }) => {
    const countries = [
        { name: 'France', flag: france },
        { name: 'Korea', flag: korea },
        { name: 'India', flag: india },
    ];

    return (
        <Box sx={{
            position: 'absolute',
            top: { xs: '35px', sm: '42px' },
            left: { xs: '-5px', sm: '-20px' },
            width: { xs: '130px', sm: '110px' },
            height: { xs: '120px', sm: '102px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '10px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
            zIndex: 1100,
            boxSizing: 'border-box',
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #f0f0f0',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Search Input Area */}
            <Box sx={{
                position: 'relative',
                top: { xs: '8px', sm: '12px' },
                left: { xs: '10px', sm: '14px' },
                width: { xs: '110px', sm: '79px' },
                height: { xs: '16px', sm: '12px' },
                bgcolor: darkMode ? 'rgba(0,231,131,0.1)' : '#F0F9F4',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                px: '6px',
                mb: { xs: '20px', sm: '24px' } // Added margin to space out the list
            }}>
                <InputBase
                    placeholder="Search Country"
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: { xs: '9px', sm: '7px' },
                        color: darkMode ? '#fff' : '#666',
                        width: '100%',
                        height: '100%',
                        '& input::placeholder': { color: '#888', opacity: 1 }
                    }}
                />
            </Box>

            {/* Country List */}
            <Box sx={{
                flex: 1,
                px: { xs: '10px', sm: '9px' },
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' }
            }}>
                {countries.map((c) => (
                    <Box
                        key={c.name}
                        onClick={() => onSelect(c)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' }
                        }}
                    >
                        <Box
                            component="img"
                            src={c.flag}
                            sx={{
                                width: { xs: '32px', sm: '27px' },
                                height: { xs: '18px', sm: '15px' },
                                borderRadius: '2px',
                                objectFit: 'cover',
                                flexShrink: 0
                            }}
                        />
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: { xs: '12px', sm: '10px' },
                            fontWeight: 500,
                            color: darkMode ? '#fff' : '#222',
                            lineHeight: 1
                        }}>
                            {c.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Country;
