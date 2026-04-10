import React from 'react';
import { Box, Typography, IconButton, Dialog } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';

const BannerPop = ({ open, onClose, darkMode }) => {
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const iconBtnBg = darkMode ? '#333' : '#e0e8e4'; // pale green-grey circle
    const iconColor = darkMode ? '#fff' : '#444';

    const ActionButton = ({ icon, label }) => (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <Box sx={{
                width: '36px', height: '36px', borderRadius: '50%', bgcolor: iconBtnBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                '&:hover': { opacity: 0.8 }
            }}>
                {icon}
            </Box>
            <Typography sx={{ fontSize: '10px', color: subTextColor, fontFamily: 'Poppins', fontWeight: 500 }}>
                {label}
            </Typography>
        </Box>
    );

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            disableEnforceFocus
            disableRestoreFocus
            PaperProps={{
                sx: {
                    width: '100%',
                    maxWidth: '597px', // Match requirement
                    height: 'auto',
                    minHeight: '295px', // Match requirement
                    bgcolor: boxBg,
                    borderRadius: '15px', // Match requirement
                    boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                }
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: '20px', py: '12px' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                    Cover Image
                </Typography>
                <IconButton onClick={onClose} size="small" sx={{ color: textColor }}>
                    <CloseIcon sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>

            {/* Banner Image / Gradient Area */}
            <Box sx={{
                width: '100%',
                height: '140px',
                background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59B6 100%)', // Simulating the current cover
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            </Box>

            {/* Footer Action Buttons */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                flexGrow: 1,
                py: '20px'
            }}>
                <ActionButton icon={<EditIcon sx={{ fontSize: '16px', color: iconColor }} />} label="Edit" />
                <ActionButton icon={<DeleteIcon sx={{ fontSize: '16px', color: iconColor }} />} label="Delete" />
                <ActionButton icon={<UploadIcon sx={{ fontSize: '16px', color: iconColor }} />} label="Upload" />
            </Box>
        </Dialog>
    );
};

export default BannerPop;
