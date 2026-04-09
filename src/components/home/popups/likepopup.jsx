import React from 'react';
import { Box, Typography, Button, Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

// Import profile images from assets/Home/popups/likepopup
import profile1 from '../../../assets/Home/popups/likepopup/profile1.webp';
import profile2 from '../../../assets/Home/popups/likepopup/profile2.webp';
import profile3 from '../../../assets/Home/popups/likepopup/profile3.webp';
import profile4 from '../../../assets/Home/popups/likepopup/profile4.webp';
import profile5 from '../../../assets/Home/popups/likepopup/profile5.webp';

const likeData = [
    { id: 1, name: 'Oliver Smith', position: 'HR Manager', avatar: profile1, status: 'Follow' },
    { id: 2, name: 'Amelia Clarke', position: 'UI/UX Designer', avatar: profile2, status: 'Following' },
    { id: 3, name: 'Emily Johnson', position: 'HR Manager', avatar: profile3, status: 'Follow' },
    { id: 4, name: 'James Brown', position: 'Software Engineer', avatar: profile4, status: 'Following' },
    { id: 5, name: 'William Taylor', position: 'Financial Analyst', avatar: profile5, status: 'Follow' },
];

const LikePopup = ({ onClose }) => {
    return (
        <Box
            sx={{
                width: '494px',
                height: '371px',
                bgcolor: '#FFFFFF',
                borderRadius: '25px',
                pt: '24px',
                pr: '21px',
                pb: '24px',
                pl: '21px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                boxSizing: 'border-box',
                position: 'relative',
                opacity: 1,
                // angle: 0 deg
                transform: 'rotate(0deg)',
            }}
        >
            {/* Header section (like by content layout) */}
            <Box
                sx={{
                    width: '452px',
                    height: '29px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '9px',
                    opacity: 1,
                }}
            >
                <Typography
                    sx={{
                        width: '61px',
                        height: '12px',
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '12px',
                        color: 'rgba(0, 0, 0, 1)',
                        opacity: 1,
                        whiteSpace: 'nowrap',
                        letterSpacing: '0%',
                    }}
                >
                    Liked By
                </Typography>
                <IconButton
                    onClick={onClose}
                    sx={{
                        p: 0,
                        color: '#000',
                        '&:hover': { bgcolor: 'transparent' }
                    }}
                >
                    <CloseIcon sx={{ fontSize: '20px' }} />
                </IconButton>
            </Box>

            {/* Divider */}
            <Box sx={{ width: '452px', height: '1px', bgcolor: 'rgba(0,0,0,0.05)', mb: '10px' }} />

            {/* Users List */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    overflow: 'hidden', // Disable all scrolling
                }}
            >
                {likeData.slice(0, 5).map((user) => (
                    <Box
                        key={user.id}
                        sx={{
                            width: '452px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: '12px',
                            opacity: 1,
                        }}
                    >
                        {/* Profile Pic */}
                        <Avatar
                            src={user.avatar}
                            sx={{
                                width: '40px',
                                height: '40px',
                                opacity: 1,
                                borderRadius: '50%',
                            }}
                        />

                        {/* User Info (profile lay out) */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between', 
                            flex: 1,
                            width: '100%',
                            maxWidth: '400px'
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '15px',
                                        lineHeight: '12px', 
                                        color: 'rgba(0, 0, 0, 1)',
                                        mb: '4px'
                                    }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        width: '179px',
                                        height: '12px',
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '12px',
                                        lineHeight: '12px', 
                                        color: 'rgba(169, 169, 169, 1)',
                                        opacity: 1,
                                    }}
                                >
                                    {user.position}
                                </Typography>
                            </Box>

                            <Box sx={{ ml: '115px' }}> {/* Exact profile lay out gap */}
                                <Button
                                    variant={user.status === 'Follow' ? 'contained' : 'outlined'}
                                    sx={{
                                        width: '106px',
                                        height: '30px',
                                        bgcolor: user.status === 'Follow' ? '#00E783' : '#FFFFFF',
                                        borderColor: user.status === 'Following' ? '#00E783' : 'transparent',
                                        color: user.status === 'Follow' ? '#000000' : 'rgba(169, 169, 169, 1)',
                                        borderRadius: '10px',
                                        textTransform: 'none',
                                        fontFamily: 'Poppins',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '4px',
                                        boxShadow: 'none',
                                        flexShrink: 0,
                                        '&:hover': {
                                            bgcolor: user.status === 'Follow' ? '#00d67a' : '#f9f9f9',
                                            borderColor: '#00E783',
                                            boxShadow: 'none',
                                        },
                                    }}
                                >
                                    {user.status}
                                    {user.status === 'Follow' && (
                                        <AddIcon sx={{ fontSize: '18px', fontWeight: 700 }} />
                                    )}
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default LikePopup;
