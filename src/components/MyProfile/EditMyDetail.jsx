import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, TextField, Grid, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profilePic from '../../assets/Home/propffun/profilepic.webp';
import BannerPop from './popup/BannerPop';
import ProfilePop from './popup/ProfilePop';

const EditMyDetail = ({ darkMode, onCancel }) => {
    const [bannerPopOpen, setBannerPopOpen] = useState(false);
    const [profilePopOpen, setProfilePopOpen] = useState(false);
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const inputBg = darkMode ? '#2a2a3c' : '#f5f5f5';
    const accentColor = '#00E87F';

    // Custom input style
    const inputStyle = {
        '& .MuiOutlinedInput-root': {
            bgcolor: inputBg,
            borderRadius: '6px',
            fontSize: '12px',
            fontFamily: 'Poppins',
            color: subTextColor,
            height: '42px',
            '& fieldset': { border: 'none' },
            '& input': { px: '15px' },
        }
    };

    const labelStyle = {
        fontSize: '11px',
        color: subTextColor,
        fontFamily: 'Poppins',
        mb: '6px'
    };

    const sectionTitleStyle = {
        fontSize: '14px',
        fontWeight: 600,
        color: textColor,
        fontFamily: 'Poppins',
        mb: '15px',
        borderBottom: `1px solid ${darkMode ? '#333' : '#eee'}`,
        pb: '8px'
    };

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            bgcolor: boxBg,
            borderRadius: '15px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
        }}>
            {/* ── HEADER COVER ── */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '140px',
                background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59B6 100%)'
            }}>
                {/* Header Edit Icon */}
                <IconButton
                    size="small"
                    onClick={() => setBannerPopOpen(true)}
                    sx={{
                        position: 'absolute', top: '15px', right: '15px',
                        bgcolor: 'rgba(255,255,255,0.2)', color: '#fff',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                    }}
                >
                    <EditIcon sx={{ fontSize: 16 }} />
                </IconButton>

                {/* Profile Picture with Edit Avatar Badge */}
                <Box sx={{ position: 'absolute', top: '80px', left: '35px', zIndex: 2 }}>
                    <Avatar
                        src={profilePic}
                        sx={{
                            width: '110px',
                            height: '110px',
                            border: `6px solid ${boxBg}`,
                            boxSizing: 'content-box',
                        }}
                    />
                    <IconButton
                        size="small"
                        onClick={() => setProfilePopOpen(true)}
                        sx={{
                            position: 'absolute',
                            bottom: '5px',
                            right: '5px',
                            bgcolor: '#888', // Mockup shows grey-ish edit button
                            color: '#fff',
                            width: '28px',
                            height: '28px',
                            border: `2px solid ${boxBg}`,
                            '&:hover': { bgcolor: '#666' }
                        }}
                    >
                        <EditIcon sx={{ fontSize: 14 }} />
                    </IconButton>
                </Box>
            </Box>

            {/* SPACER FOR AVATAR OVERLAP */}
            <Box sx={{ height: '70px' }} />

            {/* ── FORM CONTENT ── */}
            <Box sx={{ px: '35px', pb: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* Edit intro */}
                <Box>
                    <Typography sx={sectionTitleStyle}>Edit intro</Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelStyle}>First Name</Typography>
                            <TextField fullWidth placeholder="Nirmal" defaultValue="Nirmal" sx={inputStyle} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelStyle}>Last Name</Typography>
                            <TextField fullWidth placeholder="Adithya" defaultValue="Adithya" sx={inputStyle} />
                        </Grid>
                    </Grid>
                </Box>

                {/* Current position */}
                <Box>
                    <Typography sx={sectionTitleStyle}>Current position</Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelStyle}>Position</Typography>
                            <Box sx={{ position: 'relative' }}>
                                <TextField fullWidth placeholder="UI/UX Designer" defaultValue="UI/UX Designer" sx={inputStyle} />
                                <KeyboardArrowDownIcon sx={{ position: 'absolute', right: '10px', top: '9px', color: subTextColor, pointerEvents: 'none' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Location */}
                <Box>
                    <Typography sx={sectionTitleStyle}>Location</Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelStyle}>Country / Region</Typography>
                            <Box sx={{ position: 'relative' }}>
                                <TextField fullWidth placeholder="Saudi Arabia" defaultValue="Saudi Arabia" sx={inputStyle} />
                                <KeyboardArrowDownIcon sx={{ position: 'absolute', right: '10px', top: '9px', color: subTextColor, pointerEvents: 'none' }} />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelStyle}>City</Typography>
                            <TextField fullWidth placeholder="Al Khobar" defaultValue="Al Khobar" sx={inputStyle} />
                        </Grid>
                    </Grid>
                </Box>

                {/* Contact info */}
                <Box>
                    <Typography sx={sectionTitleStyle}>Contact info</Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelStyle}>Mobile Number</Typography>
                            <TextField fullWidth placeholder="+966531430977" defaultValue="+966531430977" sx={inputStyle} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography sx={labelStyle}>Email</Typography>
                            <TextField fullWidth placeholder="aanish.azmy2016@gmail.com" defaultValue="aanish.azmy2016@gmail.com" sx={inputStyle} />
                        </Grid>
                    </Grid>
                </Box>

                {/* Head Line */}
                <Box>
                    <Typography sx={sectionTitleStyle}>Head Line</Typography>
                    <Typography sx={labelStyle}>Head line</Typography>
                    <TextField fullWidth placeholder="Al Ghaith Oilfields & Supplies Co. - University Of Gloucestershire" defaultValue="Al Ghaith Oilfields & Supplies Co. - University Of Gloucestershire" sx={inputStyle} />
                </Box>

                {/* ── ACTION BUTTONS ── */}
                <Box sx={{ display: 'flex', gap: '15px', mt: '10px' }}>
                    <Button
                        variant="contained"
                        onClick={onCancel}
                        sx={{
                            bgcolor: accentColor,
                            color: '#000',
                            textTransform: 'none',
                            borderRadius: '4px', // From mockup slightly rounded corners
                            px: 5,
                            height: '40px',
                            fontWeight: 700,
                            fontFamily: 'Poppins',
                            boxShadow: 'none',
                            '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                        }}
                    >
                        SAVE
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={onCancel}
                        sx={{
                            borderColor: accentColor,
                            color: '#000', // Assuming black for visibility, since the button is outlined on white
                            textTransform: 'none',
                            borderRadius: '4px',
                            px: 5,
                            height: '40px',
                            fontWeight: 600,
                            fontFamily: 'Poppins',
                            bgcolor: 'transparent',
                            '&:hover': { borderColor: '#00E87F', bgcolor: 'rgba(0,232,127,0.1)' }
                        }}
                    >
                        Clear
                    </Button>
                </Box>

            </Box>

            <BannerPop open={bannerPopOpen} onClose={() => setBannerPopOpen(false)} darkMode={darkMode} />
            <ProfilePop open={profilePopOpen} onClose={() => setProfilePopOpen(false)} darkMode={darkMode} />
        </Box>
    );
};

export default EditMyDetail;
