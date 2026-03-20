import React from 'react';
import { Box, Typography, IconButton, Button, Checkbox, InputBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const DatePosted = ({ darkMode, onClose, onNext }) => {
    return (
        <Box sx={{
            position: 'relative', // Changed from absolute since parent centers it
            width: '95%',
            maxWidth: '494px',
            height: 'auto',
            maxHeight: '90vh',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '25px',
            boxShadow: '0px 8px 40px rgba(0,0,0,0.12)',
            boxSizing: 'border-box',
            px: { xs: '15px', sm: '21px' },
            py: '24px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #f0f0f0',
            overflowY: 'auto'
        }}>
            {/* Header: Height 29px */}
            <Box sx={{
                width: '100%',
                height: '29px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '14px'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: darkMode ? '#fff' : '#222'
                }}>
                    Date Posted
                </Typography>
                <IconButton onClick={onClose} size="small" sx={{ p: 0, color: darkMode ? '#fff' : '#000' }}>
                    <CloseIcon sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>

            {/* Date Block: Height 56px, Gap 6px */}
            <Box sx={{
                width: '100%',
                height: '56px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                mb: '14px'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: darkMode ? '#888' : '#888',
                    ml: '2px'
                }}>
                    Date
                </Typography>
                <Box sx={{
                    width: '100%',
                    height: '39px',
                    border: '1.5px solid #eee',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    px: '14px',
                    bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#fff',
                    boxSizing: 'border-box'
                }}>
                    <InputBase
                        placeholder="07/04/2025"
                        fullWidth
                        sx={{
                            color: darkMode ? '#fff' : '#222',
                            fontSize: '13px',
                            fontFamily: 'Poppins',
                            '& input::placeholder': { color: '#bbb', opacity: 1 }
                        }}
                    />
                    <CalendarMonthIcon sx={{ color: '#888', fontSize: '18px' }} />
                </Box>
            </Box>

            {/* Time Block: Height 56px, Gap 6px */}
            <Box sx={{
                width: '100%',
                height: '56px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                mb: '14px'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: darkMode ? '#888' : '#888',
                    ml: '2px'
                }}>
                    Time
                </Typography>
                <Box sx={{
                    width: '100%',
                    height: '39px',
                    border: '1.5px solid #eee',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    px: '14px',
                    bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#fff',
                    boxSizing: 'border-box'
                }}>
                    <InputBase
                        placeholder="10:00 PM"
                        fullWidth
                        sx={{
                            color: darkMode ? '#fff' : '#222',
                            fontSize: '13px',
                            fontFamily: 'Poppins',
                            '& input::placeholder': { color: '#bbb', opacity: 1 }
                        }}
                    />
                    <AccessTimeIcon sx={{ color: '#888', fontSize: '18px' }} />
                </Box>
            </Box>

            {/* Job Type Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', sm: '9px' }, mb: '14px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: darkMode ? '#fff' : '#000',
                    lineHeight: 1
                }}>
                    Job Type
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: { xs: '10px', sm: '15px' },
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }}>
                    {['Fulltime', 'Parttime', 'Internship', 'Freelance'].map((type) => (
                        <Box key={type} sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 500, color: '#888' }}>
                                {type}
                            </Typography>
                            <Checkbox
                                size="small"
                                sx={{ p: 0, color: '#ddd', '&.Mui-checked': { color: '#00E783' }, '& .MuiSvgIcon-root': { fontSize: { xs: 14, sm: 16 } } }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Remote Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '6px', sm: '9px' }, mb: '14px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: darkMode ? '#fff' : '#000',
                    lineHeight: 1
                }}>
                    Remote
                </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: { xs: '10px', sm: '15px' },
                    flexWrap: 'wrap',
                    alignItems: 'center'
                }}>
                    {['On-Site', 'Remote', 'Hybrid'].map((option) => (
                        <Box key={option} sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 500, color: '#888' }}>
                                {option}
                            </Typography>
                            <Checkbox
                                size="small"
                                sx={{ p: 0, color: '#ddd', '&.Mui-checked': { color: '#00E783' }, '& .MuiSvgIcon-root': { fontSize: { xs: 14, sm: 16 } } }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Button
                onClick={onNext}
                fullWidth
                sx={{
                    height: '40px',
                    bgcolor: '#00E783',
                    color: '#000',
                    borderRadius: '5px',
                    textTransform: 'uppercase',
                    fontFamily: 'Poppins',
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    mt: '20px',
                    flexShrink: 0,
                    '&:hover': { bgcolor: '#00d578' }
                }}
            >
                Next
            </Button>
        </Box>
    );
};

export default DatePosted;
