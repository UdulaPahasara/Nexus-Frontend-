import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SearchBarPopup from '../../chat section/searchbarpop/searchbarpop';

// Assets from the searchbar asset folder
import nexusLogo from '../../../assets/Home/searchbar/nexus.png';
import bellIcon from '../../../assets/Home/searchbar/bell.png';
import messageIcon from '../../../assets/Home/searchbar/iconmessage.png';

// Search icon SVG component
const SearchIcon = ({ color = '#888' }) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="2" />
        <path d="M14 14L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const SearchBar = ({ darkMode = false, onToggle, onMenuClick, activeTab, onTabChange, onAdvanceSearch }) => {
    const [showSearch, setShowSearch] = useState(false);
    const isAiMode = activeTab === 'AI';
    const isDark = darkMode || isAiMode;

    return (
        <>
            <Box sx={{
                width: '100%',
                bgcolor: isDark ? '#0a0a0a' : '#fff',
                borderBottom: isDark ? '1px solid #1a1a1a' : '1px solid #e8e8e8',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxSizing: 'border-box',
                transition: 'background 0.2s',
            }}>

                {/* ── ROW 1: Logo + Search + Icons ── */}
                <Box sx={{
                    width: '100%',
                    maxWidth: '1440px',
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: '8px', sm: '15px', md: '20px', lg: '40px' },
                    justifyContent: 'space-between',
                    px: { xs: '12px', sm: '20px', md: '30px' },
                    height: { xs: '48px', md: '55px' },
                    boxSizing: 'border-box',
                }}>

                    {/* LEFT: Hamburger + Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: '8px' }}>
                        <Box
                            onClick={() => onMenuClick && onMenuClick()}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                alignItems: 'center',
                                cursor: 'pointer',
                                color: darkMode ? '#fff' : '#000',
                                flexShrink: 0
                            }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Box>

                        <Box
                            component="img"
                            src={nexusLogo}
                            alt="Nexus"
                            sx={{
                                width: { xs: '80px', sm: '110px', md: '151px' },
                                height: { xs: 'auto', md: '38px' },
                                objectFit: 'contain',
                                flexShrink: 0
                            }}
                        />
                    </Box>

                    {/* CENTER: Search Field (hidden on mobile) */}
                    <Box
                        onClick={() => setShowSearch(true)}
                        sx={{
                            flex: '1 1 auto',
                            maxWidth: { sm: '300px', md: '463px' },
                            minWidth: { sm: '140px', md: '200px' },
                            height: '31px',
                            bgcolor: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(235, 245, 241, 1)',
                            borderRadius: '10px',
                            display: { xs: 'none', sm: 'flex' },
                            alignItems: 'center',
                            px: '12px',
                            gap: '8px',
                            boxSizing: 'border-box',
                            cursor: 'text',
                            border: isDark ? '1px solid rgba(255,255,255,0.08)' : 'none',
                            '&:hover': { bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(220, 240, 233, 1)' }
                        }}
                    >
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                            <circle cx="9" cy="9" r="7" stroke={isDark ? '#666' : '#888'} strokeWidth="2" />
                            <path d="M14 14L18 18" stroke={isDark ? '#666' : '#888'} strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: isDark ? '#555' : '#aaa', userSelect: 'none', lineHeight: 1 }}>
                            Search here
                        </Typography>
                    </Box>

                    {/* RIGHT: Desktop Tabs + Toggle + Icons */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '10px', sm: '14px', md: '24px', lg: '30px' },
                        flexShrink: 0,
                        justifyContent: 'flex-end',
                    }}>

                        {/* For You / News — desktop only */}
                        {!isAiMode && (
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '28px' }}>
                                {['forYou', 'news'].map((tab) => (
                                    <Typography
                                        key={tab}
                                        onClick={() => onTabChange && onTabChange(tab)}
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                            fontWeight: activeTab === tab ? 700 : 500,
                                            color: darkMode ? (activeTab === tab ? '#fff' : '#aaa') : (activeTab === tab ? '#000' : '#888'),
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
                        )}

                        {/* Light/Dark Toggle — desktop only */}
                        {!isAiMode && (
                            <Box
                                onClick={() => onToggle && onToggle()}
                                sx={{
                                    display: { xs: 'none', sm: 'flex' },
                                    alignItems: 'center',
                                    gap: '6px',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    flexShrink: 0
                                }}
                            >
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: !darkMode ? 700 : 400, color: darkMode ? '#aaa' : '#000', transition: 'all 0.2s', lineHeight: 1 }}>Light</Typography>
                                <Box sx={{ width: '42px', height: '22px', borderRadius: '11px', bgcolor: darkMode ? '#444' : '#d4f5e6', position: 'relative', transition: 'background 0.25s', flexShrink: 0 }}>
                                    <Box sx={{ width: '16px', height: '16px', borderRadius: '50%', bgcolor: '#00E783', position: 'absolute', top: '3px', left: darkMode ? '23px' : '3px', transition: 'left 0.25s ease', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
                                </Box>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: darkMode ? 700 : 400, color: darkMode ? '#fff' : '#aaa', transition: 'all 0.2s', lineHeight: 1 }}>Dark</Typography>
                            </Box>
                        )}

                        {/* Icons: Mobile Search + Message + Bell */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '12px', md: '16px' } }}>
                            {/* Mobile search icon */}
                            <Box
                                onClick={() => setShowSearch(true)}
                                sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', cursor: 'pointer', opacity: 0.75, '&:hover': { opacity: 1 } }}
                            >
                                <SearchIcon color={isDark ? '#aaa' : '#444'} />
                            </Box>

                            <Box component="img" src={messageIcon} alt="Messages"
                                sx={{ width: '15px', height: '15px', objectFit: 'contain', cursor: 'pointer', filter: isDark ? 'invert(1)' : 'none', opacity: 0.75, '&:hover': { opacity: 1 } }}
                            />
                            <Box component="img" src={bellIcon} alt="Notifications"
                                onClick={() => onTabChange && onTabChange('Notifications')}
                                sx={{ width: '22px', height: '22px', objectFit: 'contain', cursor: 'pointer', filter: isDark ? 'invert(1)' : 'none', opacity: 0.75, '&:hover': { opacity: 1 } }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* ── ROW 2: For You / News + Light/Dark Toggle (mobile only) ── */}
                {!isAiMode && (
                    <Box sx={{
                        display: { xs: 'flex', sm: 'none' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: '16px',
                        pb: '8px',
                        gap: '12px',
                        borderTop: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f0f0f0',
                    }}>
                        {/* Tabs */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            {['forYou', 'news'].map((tab) => (
                                <Typography
                                    key={tab}
                                    onClick={() => onTabChange && onTabChange(tab)}
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '13px',
                                        fontWeight: activeTab === tab ? 700 : 500,
                                        color: darkMode ? (activeTab === tab ? '#fff' : '#aaa') : (activeTab === tab ? '#000' : '#888'),
                                        cursor: 'pointer',
                                        borderBottom: activeTab === tab ? '2px solid #00E783' : '2px solid transparent',
                                        pb: '2px',
                                        transition: 'all 0.15s',
                                        pt: '6px',
                                    }}>
                                    {tab === 'forYou' ? 'For You' : 'News'}
                                </Typography>
                            ))}
                        </Box>

                        {/* Light/Dark Toggle */}
                        <Box
                            onClick={() => onToggle && onToggle()}
                            sx={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', userSelect: 'none', pt: '4px' }}
                        >
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: !darkMode ? 700 : 400, color: darkMode ? '#aaa' : '#000', lineHeight: 1 }}>Light</Typography>
                            <Box sx={{ width: '36px', height: '19px', borderRadius: '10px', bgcolor: darkMode ? '#444' : '#d4f5e6', position: 'relative', transition: 'background 0.25s', flexShrink: 0 }}>
                                <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', bgcolor: '#00E783', position: 'absolute', top: '3px', left: darkMode ? '19px' : '3px', transition: 'left 0.25s ease', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: darkMode ? 700 : 400, color: darkMode ? '#fff' : '#aaa', lineHeight: 1 }}>Dark</Typography>
                        </Box>
                    </Box>
                )}
            </Box>

            {/* Search Popup */}
            {showSearch && (
                <SearchBarPopup
                    darkMode={darkMode}
                    onClose={() => setShowSearch(false)}
                    onAdvanceSearch={onAdvanceSearch}
                />
            )}
        </>
    );
};

export default SearchBar;
