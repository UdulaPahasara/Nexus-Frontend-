import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Chip,
    MenuItem,
    Select,
    FormControl,
    Switch,
    Button,
    Popover,
} from '@mui/material';
import LocationPopup from './popup/Location';
import ExpPopup from './popup/Exp';
import SortByPopup from './popup/SortBy';
import ProfileTypePopup from './popup/ProfileType';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PeopleSearch = ({ darkMode = false, onBack, onTabChange, onFilterClick }) => {
    const [skills, setSkills] = useState([
        'Software Engineer',
        'Product Manager',
        'Data Analyst',
        'Quality Assurance',
        'Web Developer'
    ]);

    const [openToWork, setOpenToWork] = useState(true);

    const handleDeleteSkill = (skillToDelete) => {
        setSkills((prev) => prev.filter((skill) => skill !== skillToDelete));
    };

    const tabs = ['People', 'Companies', 'Services', 'Jobs', 'Posts', 'Products'];
    const [activeTab, setActiveTab] = useState('People');

    const [locationAnchorEl, setLocationAnchorEl] = useState(null);
    const [location, setLocation] = useState('');
    const [expAnchorEl, setExpAnchorEl] = useState(null);
    const [experienceLevel, setExperienceLevel] = useState('');
    const [sortByAnchorEl, setSortByAnchorEl] = useState(null);
    const [sortBy, setSortBy] = useState('');
    const [profileTypeAnchorEl, setProfileTypeAnchorEl] = useState(null);
    const [profileType, setProfileType] = useState('');

    const handleLocationClick = (event) => {
        setLocationAnchorEl(event.currentTarget);
    };

    const handleLocationClose = () => {
        setLocationAnchorEl(null);
    };

    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation);
        handleLocationClose();
    };

    const handleExpClick = (event) => {
        setExpAnchorEl(event.currentTarget);
    };

    const handleExpClose = () => {
        setExpAnchorEl(null);
    };

    const handleExpSelect = (selectedLevel) => {
        setExperienceLevel(selectedLevel);
        handleExpClose();
    };

    const handleSortByClick = (event) => {
        setSortByAnchorEl(event.currentTarget);
    };

    const handleSortByClose = () => {
        setSortByAnchorEl(null);
    };

    const handleSortBySelect = (selectedOption) => {
        setSortBy(selectedOption);
        handleSortByClose();
    };

    const handleProfileTypeClick = (event) => {
        setProfileTypeAnchorEl(event.currentTarget);
    };

    const handleProfileTypeClose = () => {
        setProfileTypeAnchorEl(null);
    };

    const handleProfileTypeSelect = (selectedOption) => {
        setProfileType(selectedOption);
        handleProfileTypeClose();
    };

    const openLocation = Boolean(locationAnchorEl);
    const openExp = Boolean(expAnchorEl);
    const openSortBy = Boolean(sortByAnchorEl);
    const openProfileType = Boolean(profileTypeAnchorEl);

    const inputBg = darkMode ? 'rgba(255, 255, 255, 0.05)' : '#F3F4F6';
    const textColor = darkMode ? '#FFFFFF' : '#000000';
    const secondaryTextColor = darkMode ? '#AAAAAA' : '#666666';

    const renderDropdown = (label, onClick, value) => (
        <Box sx={{ width: '100%' }}>
            <FormControl fullWidth size="small">
                <Select
                    displayEmpty
                    value={value || ""}
                    onClick={onClick}
                    IconComponent={KeyboardArrowDownIcon}
                    readOnly={!!onClick}
                    MenuProps={onClick ? { sx: { display: 'none' } } : undefined}
                    sx={{
                        bgcolor: inputBg,
                        borderRadius: '8px',
                        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '& .MuiSelect-select': {
                            py: '12px',
                            px: '16px',
                            color: (value || !label) ? textColor : secondaryTextColor,
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        '& .MuiSvgIcon-root': { color: secondaryTextColor }
                    }}
                >
                    <MenuItem value="" disabled>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px' }}>{label}</Typography>
                    </MenuItem>
                    {!onClick && <MenuItem value="1">Option 1</MenuItem>}
                </Select>
            </FormControl>
        </Box>
    );

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            minHeight: '733px',
            bgcolor: darkMode ? '#1E1E1E' : '#FFFFFF',
            borderRadius: '15px',
            p: { xs: '16px', md: '30px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.4)' : '0px 4px 20px rgba(0,0,0,0.05)',
            position: 'relative'
        }}>
            {/* Tabs */}
            <Box sx={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                pb: '4px',
                '&::-webkit-scrollbar': { display: 'none' }
            }}>
                {tabs.map((tab) => (
                    <Box
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            if (tab !== 'People' && onTabChange) {
                                onTabChange(tab);
                            }
                        }}
                        sx={{
                            px: '24px',
                            py: '8px',
                            borderRadius: '20px',
                            border: activeTab === tab ? 'none' : `1px solid ${darkMode ? '#444' : '#E0E0E0'}`,
                            bgcolor: activeTab === tab ? '#000000' : 'transparent',
                            color: activeTab === tab ? '#FFFFFF' : textColor,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: 500,
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: activeTab === tab ? '#000000' : (darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')
                            }
                        }}
                    >
                        {tab}
                    </Box>
                ))}
            </Box>

            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 600,
                color: textColor,
                mt: '10px'
            }}>
                Filter People By
            </Typography>

            {/* Inputs */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Name', 'Job Title', 'Location', 'Skills'].map((placeholder) => (
                    <TextField
                        key={placeholder}
                        fullWidth
                        placeholder={placeholder}
                        value={placeholder === 'Location' ? location : undefined}
                        onChange={placeholder === 'Location' ? (e) => setLocation(e.target.value) : undefined}
                        onClick={placeholder === 'Location' ? handleLocationClick : undefined}
                        variant="outlined"
                        size="small"
                        autoComplete="off"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                bgcolor: inputBg,
                                borderRadius: '8px',
                                '& fieldset': { border: 'none' },
                                '& input': {
                                    py: '12px',
                                    px: '16px',
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    color: textColor
                                }
                            }
                        }}
                    />
                ))}
            </Box>

            <Popover
                open={openLocation}
                anchorEl={locationAnchorEl}
                onClose={handleLocationClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    sx: {
                        mt: '8px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        bgcolor: 'transparent',
                        border: 'none',
                        '& .MuiPaper-root': {
                            bgcolor: 'transparent'
                        }
                    }
                }}
            >
                <LocationPopup
                    onSelect={handleLocationSelect}
                    darkMode={darkMode}
                />
            </Popover>

            <Popover
                open={openExp}
                anchorEl={expAnchorEl}
                onClose={handleExpClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    sx: {
                        mt: '8px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        bgcolor: 'transparent',
                        border: 'none',
                    }
                }}
            >
                <ExpPopup
                    onSelect={handleExpSelect}
                    darkMode={darkMode}
                />
            </Popover>

            <Popover
                open={openSortBy}
                anchorEl={sortByAnchorEl}
                onClose={handleSortByClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    sx: {
                        mt: '8px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        bgcolor: 'transparent',
                        border: 'none',
                    }
                }}
            >
                <SortByPopup
                    onSelect={handleSortBySelect}
                    darkMode={darkMode}
                />
            </Popover>

            <Popover
                open={openProfileType}
                anchorEl={profileTypeAnchorEl}
                onClose={handleProfileTypeClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    sx: {
                        mt: '8px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        bgcolor: 'transparent',
                        border: 'none',
                    }
                }}
            >
                <ProfileTypePopup
                    onSelect={handleProfileTypeSelect}
                    darkMode={darkMode}
                />
            </Popover>

            {/* Skills Chips */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill) => (
                    <Chip
                        key={skill}
                        label={skill}
                        onDelete={() => handleDeleteSkill(skill)}
                        deleteIcon={<CloseIcon sx={{ fontSize: '14px !important' }} />}
                        sx={{
                            bgcolor: 'transparent',
                            border: '1px solid #00E783',
                            borderRadius: '8px',
                            color: textColor,
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            '& .MuiChip-label': { px: '10px' },
                            '& .MuiChip-deleteIcon': {
                                color: textColor,
                                '&:hover': { color: '#00E783' }
                            }
                        }}
                    />
                ))}
            </Box>

            {/* Dropdowns */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {renderDropdown('Experience Level', handleExpClick, experienceLevel)}

                {/* Education - as a TextField to match the screenshot showing no arrow */}
                <Box sx={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        placeholder="Education"
                        variant="outlined"
                        size="small"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                bgcolor: inputBg,
                                borderRadius: '8px',
                                '& fieldset': { border: 'none' },
                                '& input': {
                                    py: '12px',
                                    px: '16px',
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    color: textColor
                                }
                            }
                        }}
                    />
                </Box>

                {renderDropdown('Sort By', handleSortByClick, sortBy)}
                {renderDropdown('Profile Type', handleProfileTypeClick, profileType)}
            </Box>

            {/* Availability Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mt: 'auto' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: secondaryTextColor }}>
                    Availability
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: secondaryTextColor }}>
                    Open To Work
                </Typography>
                <Switch
                    checked={openToWork}
                    onChange={(e) => setOpenToWork(e.target.checked)}
                    sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                            color: '#00E783',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: '#00E783',
                        },
                    }}
                />
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: '16px', mt: '10px' }}>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        borderRadius: '20px',
                        border: '1px solid #00E783',
                        color: '#00E783',
                        textTransform: 'none',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        py: '10px',
                        '&:hover': {
                            border: '1px solid #00D175',
                            bgcolor: 'transparent'
                        }
                    }}
                >
                    Clear Filter
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={() => {
                        if (onFilterClick) onFilterClick();
                    }}
                    sx={{
                        borderRadius: '20px',
                        bgcolor: '#00E783',
                        color: '#000000',
                        textTransform: 'none',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        py: '10px',
                        boxShadow: 'none',
                        '&:hover': {
                            bgcolor: '#00D175',
                            boxShadow: 'none'
                        }
                    }}
                >
                    Filter
                </Button>
            </Box>
        </Box>
    );
};

export default PeopleSearch;
