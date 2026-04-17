import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const INITIAL_SUGGESTIONS = [
    { text: 'Add a profile summary', checked: false },
    { text: 'Add your skills', checked: true },
    { text: 'Upload your resume/CV', checked: true },
    { text: 'Add tools & technologies', checked: false },
    { text: 'Request a recommendation', checked: false },
    { text: 'Add a publication or article', checked: false },
    { text: 'Create 1 post', checked: true },
    { text: 'Add a publication or article', checked: true },
];

const ServiceRightSidebar = ({ darkMode }) => {
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const accentColor = '#00E87F';

    const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);

    const toggleSuggestion = (index) => {
        setSuggestions(prev =>
            prev.map((item, i) => i === index ? { ...item, checked: !item.checked } : item)
        );
    };

    const checkedCount = suggestions.filter(s => s.checked).length;
    const progressPct = Math.round((checkedCount / suggestions.length) * 100);

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '372px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
            {/* Boost Your Profile Block */}
            <Box sx={{
                width: '100%',
                bgcolor: boxBg,
                borderRadius: '15px',
                p: '20px',
                boxSizing: 'border-box',
                boxShadow: darkMode ? 'none' : '0px 2px 12px rgba(0,0,0,0.05)',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '15px' }}>
                    <RocketLaunchIcon sx={{ fontSize: '18px', color: textColor }} />
                    <Typography sx={{ fontSize: '15px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                        Boost Your Profile
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '8px', bgcolor: darkMode ? '#333' : '#E8E8E8', borderRadius: '4px', mb: '8px', overflow: 'hidden' }}>
                    <Box sx={{ width: `${progressPct}%`, height: '100%', bgcolor: '#1FB141', borderRadius: '4px', transition: 'width 0.3s ease' }} />
                </Box>

                <Typography sx={{ fontSize: '12px', color: subTextColor, fontFamily: 'Poppins', mb: '12px' }}>
                    {progressPct}% Complete
                </Typography>

                <Typography sx={{ fontSize: '12px', color: textColor, fontFamily: 'Poppins', lineHeight: 1.4 }}>
                    Complete your profile to stand out and attract more opportunities .
                </Typography>
            </Box>

            {/* Suggestions Block */}
            <Box sx={{
                width: '100%',
                bgcolor: boxBg,
                borderRadius: '15px',
                p: '20px',
                boxSizing: 'border-box',
                boxShadow: darkMode ? 'none' : '0px 2px 12px rgba(0,0,0,0.05)',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '20px' }}>
                    <AddIcon sx={{ fontSize: '18px', color: textColor }} />
                    <Typography sx={{ fontSize: '15px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                        Suggestions
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {suggestions.map((item, index) => (
                        <Box
                            key={index}
                            onClick={() => toggleSuggestion(index)}
                            sx={{
                                display: 'flex', alignItems: 'center', gap: '10px',
                                cursor: 'pointer',
                                borderRadius: '6px',
                                px: '4px', py: '3px',
                                transition: 'background 0.15s',
                                '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)' }
                            }}
                        >
                            {item.checked ? (
                                <Box sx={{
                                    width: '18px', height: '18px', bgcolor: accentColor, borderRadius: '4px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                    transition: 'background 0.2s'
                                }}>
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Box>
                            ) : (
                                <Box sx={{
                                    width: '18px', height: '18px',
                                    bgcolor: darkMode ? '#333' : '#E0E0E0',
                                    borderRadius: '4px', flexShrink: 0,
                                    transition: 'background 0.2s'
                                }} />
                            )}
                            <Typography sx={{
                                fontSize: '13px', color: item.checked ? subTextColor : textColor,
                                fontFamily: 'Poppins', fontWeight: 500,
                                textDecoration: item.checked ? 'line-through' : 'none',
                                transition: 'all 0.2s'
                            }}>
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ServiceRightSidebar;
