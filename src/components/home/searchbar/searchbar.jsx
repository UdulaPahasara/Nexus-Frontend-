import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

// Assets from the searchbar asset folder
import nexusLogo from '../../../assets/Home/searchbar/nexus.png';
import bellIcon from '../../../assets/Home/searchbar/bell.png';
import messageIcon from '../../../assets/Home/searchbar/iconmessage.png';

// darkMode and onToggle are lifted to mainhome.jsx
const SearchBar = ({ darkMode = false, onToggle, onMenuClick, activeTab, onTabChange }) => {

    return (
        <Box sx={{
            width: '100%',
            height: { xs: 'auto', md: '55px' },
            minHeight: '10px',
            bgcolor: darkMode ? '#1a1a1a' : '#fff',
            borderBottom: darkMode ? '1px solid #333' : '1px solid #e8e8e8',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            boxSizing: 'border-box',
            px: { xs: '16px', md: '24px' },
            py: { xs: '10px', md: 0 },
            transition: 'background 0.2s',
        }}>
            <Box sx={{
                width: '100%',
                maxWidth: '1440px',
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                gap: { xs: '10px', md: '14px' },
                justifyContent: 'space-between'
            }}>

                {/* === LEFT: Menu (Mobile) + Nexus Logo === */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: '10px' }}>
                    {/* Hamburger Menu Icon (Visible only on mobile) */}
                    <Box
                        onClick={() => onMenuClick && onMenuClick()}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            alignItems: 'center',
                            cursor: 'pointer',
                            color: darkMode ? '#fff' : '#000'
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Box>

                    <Box
                        component="img"
                        src={nexusLogo}
                        alt="Nexus"
                        sx={{
                            width: { xs: '100px', md: '151px' },
                            height: { xs: 'auto', md: '38px' },
                            objectFit: 'contain'
                        }}
                    />
                </Box>

                {/* === CENTER: Search Field === */}
                <Box sx={{
                    flex: '1 1 auto',
                    maxWidth: { xs: '100%', md: '463px' },
                    minWidth: { xs: '120px', sm: '200px' },
                    height: '31px',
                    bgcolor: 'rgba(235, 245, 241, 1)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    px: '12px',
                    gap: '8px',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'rgba(220, 240, 233, 1)' }
                }}>
                    {/* Search Icon */}
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                        <circle cx="9" cy="9" r="7" stroke="#888" strokeWidth="2" />
                        <path d="M14 14L18 18" stroke="#888" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#aaa', userSelect: 'none', lineHeight: 1 }}>
                        Search here
                    </Typography>
                </Box>

                {/* === RIGHT SIDE: Tabs + Toggle + Icons === */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '16px', md: '28px' }, flexShrink: 0 }}>

                    {/* For You / News Tabs */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '15px', sm: '28px' } }}>
                        {['forYou', 'news'].map((tab) => (
                            <Typography
                                key={tab}
                                onClick={() => onTabChange && onTabChange(tab)}
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: { xs: '13px', md: '14px' },
                                    fontWeight: activeTab === tab ? 700 : 500,
                                    color: darkMode
                                        ? (activeTab === tab ? '#fff' : '#aaa')
                                        : (activeTab === tab ? '#000' : '#888'),
                                    cursor: 'pointer',
                                    borderBottom: activeTab === tab ? '2px solid #00E783' : '2px solid transparent',
                                    pb: '2px',
                                    transition: 'all 0.15s',
                                    whiteSpace: 'nowrap'
                                }}>
                                {tab === 'forYou' ? 'For You' : 'News'}
                            </Typography>
                        ))}
                    </Box>

                    {/* === Light / Dark Toggle (proper sliding pill) === */}
                    <Box
                        onClick={() => onToggle && onToggle()}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            flexShrink: 0
                        }}
                    >
                        {/* "Light" label */}
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            fontWeight: !darkMode ? 700 : 400,
                            color: darkMode ? '#aaa' : '#000',
                            transition: 'all 0.2s',
                            lineHeight: 1
                        }}>
                            Light
                        </Typography>

                        {/* Pill track */}
                        <Box sx={{
                            width: '42px',
                            height: '22px',
                            borderRadius: '11px',
                            bgcolor: darkMode ? '#444' : '#d4f5e6',
                            position: 'relative',
                            transition: 'background 0.25s',
                            flexShrink: 0
                        }}>
                            {/* Sliding dot */}
                            <Box sx={{
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                bgcolor: '#00E783',
                                position: 'absolute',
                                top: '3px',
                                left: darkMode ? '23px' : '3px',
                                transition: 'left 0.25s ease',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
                            }} />
                        </Box>

                        {/* "Dark" label */}
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            fontWeight: darkMode ? 700 : 400,
                            color: darkMode ? '#fff' : '#aaa',
                            transition: 'all 0.2s',
                            lineHeight: 1
                        }}>
                            Dark
                        </Typography>
                    </Box>

                    {/* === Message & Bell Icons — equal size === */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <Box
                            component="img"
                            src={messageIcon}
                            alt="Messages"
                            sx={{
                                width: '15px',  // Same size as bell
                                height: '15px',
                                objectFit: 'contain',
                                cursor: 'pointer',
                                filter: darkMode ? 'invert(1)' : 'none',
                                opacity: 0.75,
                                '&:hover': { opacity: 1 }
                            }}
                        />
                        <Box
                            component="img"
                            src={bellIcon}
                            alt="Notifications"
                            sx={{
                                width: '22px',  // Same size as message
                                height: '22px',
                                objectFit: 'contain',
                                cursor: 'pointer',
                                filter: darkMode ? 'invert(1)' : 'none',
                                opacity: 0.75,
                                '&:hover': { opacity: 1 }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SearchBar;
