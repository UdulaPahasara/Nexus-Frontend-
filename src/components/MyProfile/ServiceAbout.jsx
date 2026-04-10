import React from 'react';
import { Box, Typography, Button, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const ServiceAbout = ({ darkMode, onCancel }) => {
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const accentColor = '#00E87F';
    const borderColor = darkMode ? '#333' : '#eee';

    const sectionTitleStyle = {
        fontSize: '14px',
        fontWeight: 600,
        color: textColor,
        fontFamily: 'Poppins',
        mb: '4px'
    };

    const sectionSubStyle = {
        fontSize: '11px',
        color: subTextColor,
        fontFamily: 'Poppins',
        mb: '12px'
    };

    const Pill = ({ text }) => (
        <Box sx={{
            border: `1px solid ${accentColor}`,
            px: '12px',
            py: '4px',
            borderRadius: '20px',
            fontSize: '11px',
            fontFamily: 'Poppins',
            fontWeight: 500,
            color: textColor,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            {text}
            <CloseIcon sx={{ fontSize: '12px', cursor: 'pointer' }} />
        </Box>
    );

    const AddBtn = ({ text, icon = <AddIcon sx={{ fontSize: '14px' }} /> }) => (
        <Button
            variant="contained"
            startIcon={icon}
            sx={{
                bgcolor: accentColor,
                color: '#000',
                textTransform: 'none',
                borderRadius: '8px',
                px: 2,
                height: '26px',
                fontSize: '11px',
                fontWeight: 600,
                fontFamily: 'Poppins',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
            }}
        >
            {text}
        </Button>
    );

    const CustomCheckbox = ({ label }) => (
        <FormControlLabel
            control={
                <Checkbox
                    size="small"
                    sx={{
                        color: subTextColor,
                        '&.Mui-checked': { color: accentColor },
                        '& .MuiSvgIcon-root': { fontSize: '20px' }
                    }}
                />
            }
            label={<Typography sx={{ fontSize: '12px', color: textColor, fontFamily: 'Poppins' }}>{label}</Typography>}
            sx={{ m: 0, '& .MuiFormControlLabel-label': { ml: '8px' } }}
        />
    );

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
            {/* ── HEADER ── */}
            <Box sx={{ p: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <IconButton size="small" onClick={onCancel} sx={{ color: textColor }}>
                    <CloseIcon sx={{ fontSize: '20px' }} />
                </IconButton>
                <Typography sx={{ fontSize: '12px', color: subTextColor, fontFamily: 'Poppins' }}>
                    Services edit
                </Typography>
            </Box>

            <Box sx={{ px: '35px', pb: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* Services Section */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Services</Typography>
                    <Typography sx={sectionSubStyle}>Add up to 10 services</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                        <Pill text="Software Engineer" />
                        <Pill text="Product Manager" />
                        <Pill text="Data Analyst" />
                        <Pill text="Quality Assurance" />
                        <Pill text="Web Developer" />
                        <AddBtn text="Add services" />
                    </Box>
                </Box>

                {/* Work location Section */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Work location</Typography>
                    <Typography sx={sectionSubStyle}>Select all that apply</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <CustomCheckbox label="Al Khobar, Eastern" />
                        <CustomCheckbox label="I am available to work remotely" />
                    </Box>
                </Box>

                {/* Media Section */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Media</Typography>
                    <Typography sx={sectionSubStyle}>
                        Add or link to external documents, photos, sites, videos and presentations. <span style={{ color: '#3A82F6', cursor: 'pointer' }}>Learn more</span>
                    </Typography>
                    <AddBtn text="Add Media" />
                </Box>

                {/* Messages Section */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Messages</Typography>
                    <Typography sx={sectionSubStyle}>
                        This will update your Open Profile and InMail settings <span style={{ color: '#3A82F6', cursor: 'pointer' }}>Learn more</span>
                    </Typography>
                    <CustomCheckbox label="Allow Workwing members you're not connected with to message you for free through Open Profile." />
                </Box>

                {/* ── ACTION BUTTONS ── */}
                <Box sx={{ display: 'flex', gap: '15px', pt: '10px' }}>
                    <Button
                        variant="contained"
                        onClick={onCancel}
                        sx={{
                            bgcolor: accentColor,
                            color: '#000',
                            textTransform: 'none',
                            borderRadius: '4px',
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
                            color: '#000',
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
        </Box>
    );
};

export default ServiceAbout;
