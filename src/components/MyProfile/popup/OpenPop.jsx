import React from 'react';
import { Box, Typography, IconButton, Dialog, Checkbox, Button, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const OpenItem = ({ title, subtitle, darkMode }) => {
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#aaa';

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            py: '12px'
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', paddingRight: '20px' }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: '11px', color: subTextColor, fontFamily: 'Poppins' }}>
                    {subtitle}
                </Typography>
            </Box>
            <Checkbox
                sx={{
                    color: '#ccc',
                    '&.Mui-checked': {
                        color: '#00E87F',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 24, borderRadius: '4px' }
                }}
            />
        </Box>
    );
};

const OpenPop = ({ open, onClose, darkMode }) => {
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';
    const borderColor = darkMode ? '#333' : '#f0f0f0';

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            disableEnforceFocus
            PaperProps={{
                sx: {
                    width: '100%',
                    maxWidth: '494px',
                    height: 'auto',
                    minHeight: '255px',
                    bgcolor: boxBg,
                    borderRadius: '25px',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    p: '24px 21px', // padding top/bottom 24, right/left 21
                    boxSizing: 'border-box',
                    gap: '10px'
                }
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '5px' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                    Open to
                </Typography>
                <IconButton onClick={onClose} size="small" sx={{ color: textColor }}>
                    <CloseIcon sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>

            <Divider sx={{ borderColor: borderColor }} />

            {/* Content List */}
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <OpenItem
                    title="Work"
                    subtitle="Let employers know that you're open to work and grab their attention."
                    darkMode={darkMode}
                />
                <Divider sx={{ borderColor: borderColor }} />
                <OpenItem
                    title="Hiring"
                    subtitle="Share that you're hiring and attract qualified candidates."
                    darkMode={darkMode}
                />
            </Box>

            {/* Next Button */}
            <Button
                fullWidth
                variant="contained"
                sx={{
                    bgcolor: '#00E87F', // The classic vibrant green
                    color: '#000',
                    textTransform: 'none',
                    borderRadius: '8px',
                    height: '42px',
                    fontWeight: 700,
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    boxShadow: 'none',
                    mt: 'auto',
                    '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                }}
            >
                NEXT
            </Button>
        </Dialog>
    );
};

export default OpenPop;
