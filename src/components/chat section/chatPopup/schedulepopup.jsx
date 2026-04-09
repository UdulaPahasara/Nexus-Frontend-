import React from 'react';
import { Box, Typography, IconButton, TextField, Button, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SchedulePopup = ({ onClose, darkMode = false }) => {
    return (
        <Box
            sx={{
                width: { xs: 'calc(100% - 30px)', sm: '494px' },
                maxWidth: '494px',
                bgcolor: darkMode ? '#1a1a2e' : '#FFFFFF',
                borderRadius: '25px',
                p: { xs: '18px 16px', sm: '24px 21px' },
                boxSizing: 'border-box',
                boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                opacity: 1
            }}
        >
            {/* Header */}
            <Box sx={{
                width: '100%',
                height: '29px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '10px'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: darkMode ? '#fff' : '#000'
                }}>
                    Schedule
                </Typography>
                <IconButton size="small" onClick={onClose} sx={{ color: darkMode ? '#fff' : '#000' }}>
                    <CloseIcon sx={{ fontSize: '20px' }} />
                </IconButton>
            </Box>

            {/* Date Input */}
            <Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#888',
                    mb: '5px'
                }}>
                    Date
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="07/04/2025"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <CalendarMonthIcon sx={{ color: '#888', fontSize: '20px' }} />
                            </InputAdornment>
                        ),
                        sx: {
                            height: '40px',
                            borderRadius: '5px',
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E0E0E0' }
                        }
                    }}
                />
            </Box>

            {/* Time Input */}
            <Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#888',
                    mb: '5px'
                }}>
                    Time
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="10:00 PM"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AccessTimeIcon sx={{ color: '#888', fontSize: '20px' }} />
                            </InputAdornment>
                        ),
                        sx: {
                            height: '40px',
                            borderRadius: '5px',
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E0E0E0' }
                        }
                    }}
                />
            </Box>

            {/* Next Button */}
            <Button
                fullWidth
                sx={{
                    height: '40px',
                    borderRadius: '5px',
                    bgcolor: 'rgba(0, 231, 131, 1)',
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '14px',
                    mt: 'auto',
                    '&:hover': { bgcolor: 'rgba(0, 211, 121, 1)' },
                    textTransform: 'none'
                }}
            >
                NEXT
            </Button>
        </Box>
    );
};

export default SchedulePopup;
