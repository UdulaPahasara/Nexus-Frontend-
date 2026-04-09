import React, { useState } from 'react';
import { Box, Typography, IconButton, Slider, Popover } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PriceRangePop = ({ darkMode, onClose }) => {
    const [priceRange, setPriceRange] = useState([0, 100000]);

    const handleSliderChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleMinChange = (e) => {
        const val = e.target.value === '' ? '' : Number(e.target.value);
        if (val === '' || (val >= 0 && val <= priceRange[1])) {
            setPriceRange([val, priceRange[1]]);
        }
    };

    const handleMaxChange = (e) => {
        const val = e.target.value === '' ? '' : Number(e.target.value);
        if (val === '' || (val >= priceRange[0] && val <= 100000)) {
            setPriceRange([priceRange[0], val]);
        }
    };

    return (
        <Box sx={{
            width: { xs: '90vw', sm: '494px' },
            maxWidth: '100%',
            height: 'auto',
            minHeight: '237.62px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '25px',
            p: '24px 21px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
        }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', color: darkMode ? '#fff' : '#000' }}>
                    Price Range
                </Typography>
                <IconButton onClick={onClose} sx={{ color: darkMode ? '#ccc' : '#000', p: 0 }}>
                    <CloseIcon sx={{ fontSize: '20px' }} />
                </IconButton>
            </Box>

            {/* Inputs */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '8px' }}>
                <Box
                    component="input"
                    type="number"
                    value={priceRange[0]}
                    onChange={handleMinChange}
                    placeholder="Min"
                    sx={{
                        flex: 1,
                        bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5',
                        border: 'none',
                        borderRadius: '6px',
                        py: '10px',
                        px: '12px',
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        color: darkMode ? '#fff' : '#333',
                        outline: 'none',
                        '&::placeholder': { color: '#999' }
                    }}
                />
                <Typography sx={{ color: darkMode ? '#fff' : '#000', fontWeight: 600 }}>-</Typography>
                <Box
                    component="input"
                    type="number"
                    value={priceRange[1]}
                    onChange={handleMaxChange}
                    placeholder="Max"
                    sx={{
                        flex: 1,
                        bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5',
                        border: 'none',
                        borderRadius: '6px',
                        py: '10px',
                        px: '12px',
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        color: darkMode ? '#fff' : '#333',
                        outline: 'none',
                        '&::placeholder': { color: '#999' }
                    }}
                />
            </Box>

            {/* Slider area */}
            <Box sx={{ mt: '12px', px: '4px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '4px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', color: '#999' }}>$0</Typography>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', color: '#999' }}>$100000</Typography>
                </Box>
                <Slider
                    value={priceRange}
                    onChange={handleSliderChange}
                    min={0}
                    max={100000}
                    disableSwap
                    sx={{
                        color: '#00E573',
                        height: 6,
                        padding: '13px 0',
                        '& .MuiSlider-thumb': {
                            width: 16,
                            height: 16,
                            bgcolor: '#00E573',
                            border: '2px solid #fff',
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: '0px 0px 0px 8px rgba(0, 229, 115, 0.16)',
                            },
                        },
                        '& .MuiSlider-rail': {
                            bgcolor: darkMode ? 'rgba(255,255,255,0.2)' : '#E0E0E0',
                            opacity: 1,
                            height: 6,
                        },
                        '& .MuiSlider-track': {
                            height: 6,
                            border: 'none',
                        }
                    }}
                />
            </Box>

            {/* Next Button */}
            <Box sx={{ mt: 'auto', pt: '8px' }}>
                <Box
                    onClick={onClose}
                    sx={{
                        width: '100%',
                        bgcolor: '#0AE979',
                        color: '#000',
                        textAlign: 'center',
                        py: '12px',
                        borderRadius: '8px',
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s',
                        '&:hover': {
                            opacity: 0.9
                        }
                    }}
                >
                    NEXT
                </Box>
            </Box>
        </Box>
    );
};

export default PriceRangePop;
