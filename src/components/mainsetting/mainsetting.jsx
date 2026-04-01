"use no memo";
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccPreferance from './accpreferance/accPreferance.jsx';

// Icons from assets/MainSetting
import accountPrefIcon from '../../assets/MainSetting/Account Preferences.webp';
import dataPrivacyIcon from '../../assets/MainSetting/Data Privacy.webp';
import helpCenterIcon from '../../assets/MainSetting/HelpCenter.webp';
import languageIcon from '../../assets/MainSetting/Language.webp';
import locationIcon from '../../assets/MainSetting/Location & Region.webp';
import notificationIcon from '../../assets/MainSetting/Notification.webp';
import serviceSettingIcon from '../../assets/MainSetting/ServicSetting.webp';
import signOutIcon from '../../assets/MainSetting/Sign Out.webp';
import securityIcon from '../../assets/MainSetting/Sign&Security.webp';
import visibilityIcon from '../../assets/MainSetting/Visibility.webp';

// Profile icons for the top bar (reusing from ProfileSidebar if possible, or using placeholders)
import eyeIcon from '../../assets/Home/propffun/solar_eye-bold.webp';
import chartIcon from '../../assets/Home/propffun/chart-line.webp';
import searchIcon from '../../assets/Home/propffun/search.webp';
import profilePic from '../../assets/Home/propffun/profilepic.webp';

const MainSetting = ({ darkMode = false, onToggle }) => {
    const [view, setView] = useState('main'); // 'main' or 'accPreferance'

    const navigate = useNavigate();

    const handleSettingClick = (label) => {
        console.log("Setting clicked from MainSetting:", label);
        if (label === 'Account Preferences') {
            setView('accPreferance');
        } else if (label === 'Sign Out') {
            navigate('/login');
        }
    };

    const handleBack = () => {
        setView('main');
    };

    if (view === 'accPreferance') {
        return <AccPreferance onBack={handleBack} darkMode={darkMode} onToggle={onToggle} />;
    }

    const settings = [
        { label: 'Account Preferences', icon: accountPrefIcon },
        { label: 'Services Settings', icon: serviceSettingIcon },
        { label: 'Visibility', icon: visibilityIcon },
        { label: 'Location & Region', icon: locationIcon },
        { label: 'Sign & Security', icon: securityIcon },
        { label: 'Help Center', icon: helpCenterIcon },
        { label: 'Notification', icon: notificationIcon },
        { label: 'Language', icon: languageIcon, isDropdown: true },
        { label: 'Data Privacy', icon: dataPrivacyIcon },
        { label: 'Sign Out', icon: signOutIcon, isRed: true },
    ];

    const stats = [
        { count: '23', label: 'profile views', icon: eyeIcon },
        { count: '05', label: 'post impression', icon: chartIcon },
        { count: '25', label: 'search appearance', icon: searchIcon },
    ];

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            minHeight: { xs: 'auto', md: '656px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            position: 'relative',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'background 0.3s ease',
            pb: '20px'
        }}>
            {/* Profile Header section */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                px: '13px',
                pt: '30px',
                width: '100%',
                boxSizing: 'border-box',
                gap: { xs: '20px', sm: 0 }
            }}>
                {/* Profile info left side */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    width: { xs: '100%', sm: '244px' },
                    height: '55px'
                }}>
                    <Box component="img" src={profilePic} sx={{ width: '55px', height: '55px', borderRadius: '50%' }} />
                    <Box>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: 700, color: darkMode ? '#fff' : '#111', lineHeight: 1.2 }}>
                            Nirmal Adithya
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, color: darkMode ? '#aaa' : '#888' }}>
                            UI/UX Designer
                        </Typography>
                    </Box>
                </Box>

                {/* Profile view section (stats) */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: '10px', sm: '26px' },
                    width: { xs: '100%', sm: '398px' },
                    height: '43px',
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': { display: 'none' }
                }}>
                    {stats.map((stat, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                            <Box component="img" src={stat.icon} sx={{ width: '20px', height: '20px', opacity: 0.8, filter: darkMode ? 'invert(1)' : 'none' }} />
                            <Box>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 700, color: darkMode ? '#fff' : '#111', lineHeight: 1 }}>
                                    {stat.count}
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: darkMode ? '#aaa' : '#888', whiteSpace: 'nowrap' }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                            {idx < stats.length - 1 && (
                                <Box sx={{ width: '1px', height: '30px', bgcolor: darkMode ? '#333' : '#eee', ml: { xs: '5px', sm: '15px' } }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Separator */}
            <Box sx={{ width: 'calc(100% - 26px)', height: '1px', bgcolor: darkMode ? '#333' : '#eee', mx: '13px', mt: '25px' }} />

            {/* Setting section */}
            <Box sx={{
                width: 'calc(100% - 26px)',
                mt: '24px',
                mx: '13px',
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(1, 100%)',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 216px)'
                },
                gap: '15px',
                boxSizing: 'border-box'
            }}>
                {settings.map((item, index) => (
                    <Box key={index}
                        onClick={() => handleSettingClick(item.label)}
                        sx={{
                            width: '100%',
                            maxWidth: '216px',
                            height: '65px',
                            borderRadius: '8px',
                            border: '1px solid',
                            borderColor: darkMode ? '#333' : '#eee',
                            p: '15px 13px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            justifySelf: 'center',
                            '&:hover': {
                                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f9f9f9',
                                borderColor: '#7B2FBE'
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', height: '35px' }}>
                            <Box sx={{ width: '25px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                                <Box component="img" src={item.icon} sx={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    filter: item.isRed ? 'none' : (darkMode ? 'invert(0.6)' : 'none')
                                }} />
                            </Box>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: item.isRed ? '#E02424' : (darkMode ? '#ddd' : '#555'),
                                flexGrow: 1,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                                {item.label}
                            </Typography>
                            {item.isDropdown && (
                                <Box component="span" sx={{ fontSize: '12px', color: darkMode ? '#aaa' : '#888', flexShrink: 0 }}>▼</Box>
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default MainSetting;
