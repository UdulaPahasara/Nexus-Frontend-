import React from 'react';
import { Box, Typography, IconButton, Dialog, Avatar, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';

// Re-using the profile pic
import profilePic from '../../../assets/Home/propffun/profilepic.webp';

const ProfilePop = ({ open, onClose, darkMode }) => {
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const iconBtnBg = darkMode ? '#333' : '#e0e8e4'; // pale green-grey circle
    const iconColor = darkMode ? '#fff' : '#444';
    const borderColor = darkMode ? '#333' : '#f0f0f0';

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
                    maxWidth: '597px', // Requested width
                    height: 'auto',
                    minHeight: '295px', // Requested height
                    bgcolor: boxBg,
                    borderRadius: '15px',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: '20px', py: '15px' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                    Profile Image
                </Typography>
                <IconButton onClick={onClose} size="small" sx={{ color: textColor }}>
                    <CloseIcon sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>

            <Divider sx={{ borderColor: borderColor }} />

            {/* Profile Avatar Area */}
            <Box sx={{
                width: '100%',
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: '20px'
            }}>
                <Avatar
                    src={profilePic}
                    sx={{
                        width: '140px',
                        height: '140px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                />
            </Box>

            <Divider sx={{ borderColor: borderColor }} />

            {/* Footer Action Buttons */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                py: '20px'
            }}>
                <ActionButton icon={<EditIcon sx={{ fontSize: '16px', color: iconColor }} />} label="Edit" />
                <ActionButton icon={<DeleteIcon sx={{ fontSize: '16px', color: iconColor }} />} label="Delete" />
                <ActionButton icon={<UploadIcon sx={{ fontSize: '16px', color: iconColor }} />} label="Upload" />
            </Box>
        </Dialog>
    );
};

export default ProfilePop;
