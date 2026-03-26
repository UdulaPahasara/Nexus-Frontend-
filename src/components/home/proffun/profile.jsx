import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Profile picture uploaded by user
import profilePic from '../../../assets/Home/propffun/profilepic.webp';

// Nav icons 
import homeIcon from '../../../assets/Home/propffun/home.webp';
import messageIcon from '../../../assets/Home/propffun/message.webp';
import myNetworkIcon from '../../../assets/Home/propffun/mynetwork.webp';
import aiIcon from '../../../assets/Home/propffun/AI.webp';
import jobIcon from '../../../assets/Home/propffun/job.webp';
import marketIcon from '../../../assets/Home/propffun/market.webp';
import servicesIcon from '../../../assets/Home/propffun/services.webp';
import profileNavIcon from '../../../assets/Home/propffun/profile.webp';
import settingIcon from '../../../assets/Home/propffun/setting.webp';

// Stats section icons 
import eyeIcon from '../../../assets/Home/propffun/solar_eye-bold.webp';
import chartIcon from '../../../assets/Home/propffun/chart-line.webp';
import searchIcon from '../../../assets/Home/propffun/search.webp';

// nav order
const NAV_ITEMS = [
    { label: 'Home', icon: homeIcon },
    { label: 'Messages', icon: messageIcon },
    { label: 'My Network', icon: myNetworkIcon },
    { label: 'AI', icon: aiIcon },
    { label: 'Jobs', icon: jobIcon },
    { label: 'Marketplace', icon: marketIcon },
    { label: 'Services', icon: servicesIcon },
    { label: 'Profile', icon: profileNavIcon },
    { label: 'Settings', icon: settingIcon },
];

// Stats shown below the nav list
const STATS = [
    { count: '23', label: 'profile views', icon: eyeIcon },
    { count: '05', label: 'post impression', icon: chartIcon },
    { count: '25', label: 'search appearance', icon: searchIcon },
];

const ProfileSidebar = ({ darkMode = false, isMobile = false, activeTab, onTabChange }) => {
    // We synchronize the internal state with the prop if provided
    const displayActive = activeTab || 'Home';

    return (
        <Box sx={{
            width: '100%',
            minHeight: isMobile ? '100vh' : { xs: 'auto', md: '1990px' },
            borderRadius: isMobile ? 0 : { xs: 0, md: '15px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            boxSizing: 'border-box',
            boxShadow: isMobile ? 'none' : '0px 2px 12px rgba(0,0,0,0.07)',
            overflow: 'hidden'
        }}>

            {/* PROFILE SECTION */}
            <Box sx={{
                width: '100%',
                height: '165px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                flexShrink: 0,
                pb: '18px'
            }}>
                {/* Purple gradient banner */}
                <Box sx={{
                    width: '100%',
                    height: '81px',
                    background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59B6 100%)',
                    borderTopLeftRadius: isMobile ? 0 : { xs: 0, md: '15px' },
                    borderTopRightRadius: isMobile ? 0 : { xs: 0, md: '15px' },
                    flexShrink: 0
                }} />

                {/* Profile Pic */}
                <Box
                    component="img"
                    src={profilePic}
                    alt="Profile"
                    sx={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '46px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1,
                        boxSizing: 'border-box',
                        border: '3px solid #fff'
                    }}
                />

                {/* Name & Role */}
                <Box sx={{
                    mt: '43px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '138px'
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: darkMode ? '#fff' : '#111',
                        textAlign: 'center',
                        lineHeight: 1.3,
                        whiteSpace: 'nowrap'
                    }}>
                        Nirmal Adithya
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '11px',
                        color: darkMode ? '#aaa' : '#888',
                        textAlign: 'center',
                        mt: '4px',
                        lineHeight: 1.3
                    }}>
                        UI/UX Designer
                    </Typography>
                </Box>
            </Box>

            {/* FUNCTION BUTTONS (Nav) */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                px: '32px',
                pt: '18px',
                boxSizing: 'border-box'
            }}>
                {NAV_ITEMS.map((item) => {
                    const isActive = displayActive === item.label;
                    return (
                        <Box
                            key={item.label}
                            onClick={() => {
                                if (onTabChange) {
                                    onTabChange(item.label);
                                }
                            }}
                            sx={{
                                width: '170px',
                                height: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                bgcolor: isActive ? 'rgba(123, 47, 190, 0.08)' : 'transparent',
                                borderRadius: '6px',
                                px: '6px',
                                mx: '-6px',
                                '&:hover .nav-label': { color: '#7B2FBE' },
                                '&:hover .nav-icon': {
                                    filter: 'invert(20%) sepia(80%) saturate(600%) hue-rotate(250deg)'
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={item.icon}
                                alt={item.label}
                                className="nav-icon"
                                sx={{
                                    width: '15px',
                                    height: '15px',
                                    objectFit: 'contain',
                                    flexShrink: 0,
                                    filter: isActive
                                        ? 'invert(20%) sepia(80%) saturate(600%) hue-rotate(250deg)'
                                        : (darkMode ? 'invert(0.8)' : 'none'),
                                    transition: 'filter 0.15s'
                                }}
                            />
                            <Typography
                                className="nav-label"
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '13px',
                                    fontWeight: isActive ? 700 : 500,
                                    color: isActive ? '#7B2FBE' : (darkMode ? '#ccc' : '#333'),
                                    lineHeight: 1,
                                    transition: 'all 0.15s',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            {/* STATS SECTION */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                px: '32px',
                pt: '28px',
                pb: '20px',
                mt: '10px',
                borderTop: darkMode ? '1px solid #333' : '1px solid #f0f0f0'
            }}>
                {STATS.map((stat) => (
                    <Box
                        key={stat.label}
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                        <Box
                            component="img"
                            src={stat.icon}
                            alt={stat.label}
                            sx={{
                                width: '18px',
                                height: '18px',
                                objectFit: 'contain',
                                flexShrink: 0,
                                opacity: 0.7,
                                filter: darkMode ? 'invert(0.8)' : 'none'
                            }}
                        />
                        <Box>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                fontWeight: 700,
                                color: darkMode ? '#fff' : '#111',
                                lineHeight: 1.1
                            }}>
                                {stat.count}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '11px',
                                color: darkMode ? '#aaa' : '#888',
                                lineHeight: 1.2
                            }}>
                                {stat.label}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ProfileSidebar;
