import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Select,
    FormControl,
    Switch,
    Button,
    Popover,
} from '@mui/material';
import LocationPopup from './popup/Location';
import IndustryPopup from './popup/Company/Industry';
import CompanySizePopup from './popup/Company/CompanySize';
import CompanyTypePopup from './popup/Company/CompanyType';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CompanySearch = ({ darkMode = false, onTabChange, onBack }) => {
    const [hiringNow, setHiringNow] = useState(true);

    const [locationAnchorEl, setLocationAnchorEl] = useState(null);
    const [location, setLocation] = useState('');
    const [industryAnchorEl, setIndustryAnchorEl] = useState(null);
    const [industry, setIndustry] = useState('');
    const [companySizeAnchorEl, setCompanySizeAnchorEl] = useState(null);
    const [companySize, setCompanySize] = useState('');
    const [companyTypeAnchorEl, setCompanyTypeAnchorEl] = useState(null);
    const [companyType, setCompanyType] = useState('');

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

    const handleIndustryClick = (event) => {
        setIndustryAnchorEl(event.currentTarget);
    };

    const handleIndustryClose = () => {
        setIndustryAnchorEl(null);
    };

    const handleIndustrySelect = (selectedOption) => {
        setIndustry(selectedOption);
        handleIndustryClose();
    };

    const handleCompanySizeClick = (event) => {
        setCompanySizeAnchorEl(event.currentTarget);
    };

    const handleCompanySizeClose = () => {
        setCompanySizeAnchorEl(null);
    };

    const handleCompanySizeSelect = (selectedOption) => {
        setCompanySize(selectedOption);
        handleCompanySizeClose();
    };

    const handleCompanyTypeClick = (event) => {
        setCompanyTypeAnchorEl(event.currentTarget);
    };

    const handleCompanyTypeClose = () => {
        setCompanyTypeAnchorEl(null);
    };

    const handleCompanyTypeSelect = (selectedOption) => {
        setCompanyType(selectedOption);
        handleCompanyTypeClose();
    };

    const openLocation = Boolean(locationAnchorEl);
    const openIndustry = Boolean(industryAnchorEl);
    const openCompanySize = Boolean(companySizeAnchorEl);
    const openCompanyType = Boolean(companyTypeAnchorEl);

    const tabs = ['People', 'Companies', 'Services', 'Jobs', 'Posts', 'Products'];
    const activeTab = 'Companies';

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
                        onClick={() => onTabChange && onTabChange(tab)}
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
                Filter Companies By
            </Typography>

            {/* Form Fields */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Company Name */}
                <TextField
                    fullWidth
                    placeholder="Company Name"
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

                {/* Industry Dropdown */}
                {renderDropdown('Industry', handleIndustryClick, industry)}

                {/* Location */}
                <TextField
                    fullWidth
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onClick={handleLocationClick}
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
                    open={openIndustry}
                    anchorEl={industryAnchorEl}
                    onClose={handleIndustryClose}
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
                    <IndustryPopup
                        onSelect={handleIndustrySelect}
                        darkMode={darkMode}
                    />
                </Popover>

                <Popover
                    open={openCompanySize}
                    anchorEl={companySizeAnchorEl}
                    onClose={handleCompanySizeClose}
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
                    <CompanySizePopup
                        onSelect={handleCompanySizeSelect}
                        darkMode={darkMode}
                    />
                </Popover>

                <Popover
                    open={openCompanyType}
                    anchorEl={companyTypeAnchorEl}
                    onClose={handleCompanyTypeClose}
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
                    <CompanyTypePopup
                        onSelect={handleCompanyTypeSelect}
                        darkMode={darkMode}
                    />
                </Popover>

                {/* Company Size Dropdown */}
                {renderDropdown('Company Size', handleCompanySizeClick, companySize)}

                {/* Company Type Dropdown */}
                {renderDropdown('Company Type', handleCompanyTypeClick, companyType)}

                {/* Founded Year */}
                <TextField
                    fullWidth
                    placeholder="Founded Year"
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

            {/* Hiring Now Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: secondaryTextColor }}>
                    Hiring Now ?
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: secondaryTextColor, ml: 2 }}>
                    No
                </Typography>
                <Switch
                    checked={hiringNow}
                    onChange={(e) => setHiringNow(e.target.checked)}
                    sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                            color: '#00E783',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: '#00E783',
                            opacity: 1
                        },
                        '& .MuiSwitch-track': {
                            backgroundColor: darkMode ? '#444' : '#E0E0E0',
                        }
                    }}
                />
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: secondaryTextColor }}>
                    Yes
                </Typography>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: '16px', mt: 'auto', pt: 4 }}>
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

export default CompanySearch;
