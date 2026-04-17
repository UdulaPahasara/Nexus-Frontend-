import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Checkbox, FormControlLabel, TextField, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const MAX_SERVICES = 10;

const ServiceAbout = ({ darkMode, onCancel }) => {
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const accentColor = '#00E87F';
    const borderColor = darkMode ? '#333' : '#eee';
    const inputBg = darkMode ? '#2a2a3e' : '#f9f9f9';

    const sectionTitleStyle = {
        fontSize: '14px', fontWeight: 600, color: textColor, fontFamily: 'Poppins', mb: '4px'
    };
    const sectionSubStyle = {
        fontSize: '11px', color: subTextColor, fontFamily: 'Poppins', mb: '12px'
    };

    // ── Services State ──
    const [services, setServices] = useState([
        'Software Engineer', 'Product Manager', 'Data Analyst', 'Quality Assurance', 'Web Developer'
    ]);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleRemove = (index) => {
        setServices(prev => prev.filter((_, i) => i !== index));
    };

    const handleAdd = () => {
        const trimmed = inputValue.trim();
        if (!trimmed) return;
        if (services.length >= MAX_SERVICES) return;
        if (!services.includes(trimmed)) {
            setServices(prev => [...prev, trimmed]);
        }
        setInputValue('');
        setShowInput(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleAdd();
        if (e.key === 'Escape') { setShowInput(false); setInputValue(''); }
    };

    // ── Work Location State ──
    const [workLocations, setWorkLocations] = useState({
        local: false,
        remote: false,
    });
    const toggleLocation = (key) => setWorkLocations(prev => ({ ...prev, [key]: !prev[key] }));

    // ── Messages State ──
    const [openProfile, setOpenProfile] = useState(false);

    const CustomCheckbox = ({ label, checked, onChange }) => (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
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

                {/* ── Services Section ── */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Services</Typography>
                    <Typography sx={sectionSubStyle}>
                        Add up to {MAX_SERVICES} services ({services.length}/{MAX_SERVICES} added)
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                        {services.map((service, i) => (
                            <Chip
                                key={i}
                                label={service}
                                onDelete={() => handleRemove(i)}
                                deleteIcon={<CloseIcon sx={{ fontSize: '12px !important' }} />}
                                sx={{
                                    border: `1px solid ${accentColor}`,
                                    bgcolor: 'transparent',
                                    color: textColor,
                                    fontFamily: 'Poppins',
                                    fontSize: '11px',
                                    fontWeight: 500,
                                    borderRadius: '20px',
                                    height: '30px',
                                    '& .MuiChip-deleteIcon': {
                                        color: textColor,
                                        '&:hover': { color: '#ff4444' }
                                    }
                                }}
                            />
                        ))}

                        {/* Add Input or Button */}
                        {showInput ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <TextField
                                    autoFocus
                                    size="small"
                                    placeholder="e.g. UX Designer"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: inputBg,
                                            borderRadius: '8px',
                                            fontSize: '12px',
                                            fontFamily: 'Poppins',
                                            color: textColor,
                                            height: '32px',
                                            '& fieldset': { borderColor: accentColor },
                                            '&:hover fieldset': { borderColor: accentColor },
                                            '&.Mui-focused fieldset': { borderColor: accentColor },
                                        },
                                        '& .MuiOutlinedInput-input': { py: '6px', px: '10px' }
                                    }}
                                    inputProps={{ maxLength: 40 }}
                                />
                                <Button
                                    onClick={handleAdd}
                                    disabled={!inputValue.trim() || services.length >= MAX_SERVICES}
                                    size="small"
                                    sx={{
                                        bgcolor: accentColor,
                                        color: '#000',
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        px: 2,
                                        height: '32px',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        fontFamily: 'Poppins',
                                        boxShadow: 'none',
                                        '&:hover': { bgcolor: '#00d072', boxShadow: 'none' },
                                        '&.Mui-disabled': { bgcolor: '#ccc', color: '#666' }
                                    }}
                                >
                                    Add
                                </Button>
                                <IconButton
                                    size="small"
                                    onClick={() => { setShowInput(false); setInputValue(''); }}
                                    sx={{ color: subTextColor }}
                                >
                                    <CloseIcon sx={{ fontSize: '16px' }} />
                                </IconButton>
                            </Box>
                        ) : (
                            services.length < MAX_SERVICES && (
                                <Button
                                    variant="contained"
                                    startIcon={<AddIcon sx={{ fontSize: '14px' }} />}
                                    onClick={() => setShowInput(true)}
                                    sx={{
                                        bgcolor: accentColor,
                                        color: '#000',
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        px: 2,
                                        height: '30px',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        fontFamily: 'Poppins',
                                        boxShadow: 'none',
                                        '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                                    }}
                                >
                                    Add services
                                </Button>
                            )
                        )}

                        {/* Max reached notice */}
                        {services.length >= MAX_SERVICES && !showInput && (
                            <Typography sx={{ fontSize: '11px', color: '#ff7700', fontFamily: 'Poppins' }}>
                                Maximum {MAX_SERVICES} services reached
                            </Typography>
                        )}
                    </Box>
                </Box>

                {/* ── Work Location Section ── */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Work location</Typography>
                    <Typography sx={sectionSubStyle}>Select all that apply</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <CustomCheckbox
                            label="Al Khobar, Eastern"
                            checked={workLocations.local}
                            onChange={() => toggleLocation('local')}
                        />
                        <CustomCheckbox
                            label="I am available to work remotely"
                            checked={workLocations.remote}
                            onChange={() => toggleLocation('remote')}
                        />
                    </Box>
                </Box>

                {/* ── Media Section ── */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Media</Typography>
                    <Typography sx={sectionSubStyle}>
                        Add or link to external documents, photos, sites, videos and presentations.{' '}
                        <span style={{ color: '#3A82F6', cursor: 'pointer' }}>Learn more</span>
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon sx={{ fontSize: '14px' }} />}
                        sx={{
                            bgcolor: accentColor, color: '#000', textTransform: 'none',
                            borderRadius: '8px', px: 2, height: '26px', fontSize: '11px',
                            fontWeight: 600, fontFamily: 'Poppins', boxShadow: 'none',
                            '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                        }}
                    >
                        Add Media
                    </Button>
                </Box>

                {/* ── Messages Section ── */}
                <Box sx={{ borderBottom: `1px solid ${borderColor}`, pb: '20px' }}>
                    <Typography sx={sectionTitleStyle}>Messages</Typography>
                    <Typography sx={sectionSubStyle}>
                        This will update your Open Profile and InMail settings{' '}
                        <span style={{ color: '#3A82F6', cursor: 'pointer' }}>Learn more</span>
                    </Typography>
                    <CustomCheckbox
                        label="Allow Workwing members you're not connected with to message you for free through Open Profile."
                        checked={openProfile}
                        onChange={() => setOpenProfile(prev => !prev)}
                    />
                </Box>

                {/* ── ACTION BUTTONS ── */}
                <Box sx={{ display: 'flex', gap: '15px', pt: '10px' }}>
                    <Button
                        variant="contained"
                        onClick={onCancel}
                        sx={{
                            bgcolor: accentColor, color: '#000', textTransform: 'none',
                            borderRadius: '4px', px: 5, height: '40px', fontWeight: 700,
                            fontFamily: 'Poppins', boxShadow: 'none',
                            '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                        }}
                    >
                        SAVE
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setServices(['Software Engineer', 'Product Manager', 'Data Analyst', 'Quality Assurance', 'Web Developer']);
                            setWorkLocations({ local: false, remote: false });
                            setOpenProfile(false);
                            setShowInput(false);
                            setInputValue('');
                        }}
                        sx={{
                            borderColor: accentColor, color: textColor, textTransform: 'none',
                            borderRadius: '4px', px: 5, height: '40px', fontWeight: 600,
                            fontFamily: 'Poppins', bgcolor: 'transparent',
                            '&:hover': { borderColor: '#00E87F', bgcolor: 'rgba(0,232,127,0.08)' }
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
