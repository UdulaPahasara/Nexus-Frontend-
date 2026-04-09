import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';

import profile1 from '../../assets/Home/feed/profile1.webp';
import profile2 from '../../assets/Home/feed/profile2.webp';
import profile3 from '../../assets/Home/feed/profile3.webp';
import profile4 from '../../assets/Home/feed/profile4.webp';
import profile5 from '../../assets/Home/feed/profile5.webp';
import profile6 from '../../assets/Home/feed/profile6.webp';
import profile7 from '../../assets/Home/feed/profile7.webp';

const connectionsData = [
    { id: 1, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile1, followBack: true },
    { id: 2, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer | Software Engineer', pic: profile2, followBack: false },
    { id: 3, name: 'Anura Deshan Jayathilaka', bio: 'IOT Enthusiast | Graphic Designer | Software Engineer | UI/UX Designer', pic: profile3, followBack: true },
    { id: 4, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile4, followBack: false },
    { id: 5, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile5, followBack: true },
    { id: 6, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile6, followBack: true },
    { id: 7, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer', pic: profile7, followBack: true },
    { id: 8, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer', pic: profile1, followBack: true },
    { id: 9, name: 'Anura Deshan Jayathilaka', bio: 'Graphic Designer | Software Engineer', pic: profile2, followBack: false },
    { id: 10, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer | Software Engineer', pic: profile3, followBack: true },
];

// Reusable Connection card with Follow Back / Message button
const ConnectionCard = ({ name, bio, pic, followBack, darkMode }) => {
    const textColor = darkMode ? '#fff' : '#000';
    const subColor = darkMode ? '#aaa' : '#555';
    const btnBg = darkMode ? '#2a2a3c' : '#f0f0f0';

    return (
        <Box sx={{
            width: '100%',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '6px', sm: '9px' },
            mb: '16px',
        }}>
            <Avatar src={pic} sx={{ width: '35px', height: '35px', flexShrink: 0 }} />
            <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                <Typography sx={{
                    fontSize: '13px', fontWeight: 600, color: textColor,
                    fontFamily: 'Poppins', lineHeight: 1.2,
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {name}
                </Typography>
                <Typography sx={{
                    fontSize: '10px', color: subColor, fontFamily: 'Poppins',
                    lineHeight: 1.2,
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {bio}
                </Typography>
            </Box>
            {followBack ? (
                <Button variant="contained" disableElevation sx={{
                    height: '28px', px: { xs: '10px', sm: '16px' }, fontSize: '11px',
                    textTransform: 'none', fontFamily: 'Poppins', fontWeight: 600,
                    bgcolor: '#00E87F', color: '#000', borderRadius: '6px', flexShrink: 0,
                    '&:hover': { bgcolor: '#00c96f' }
                }}>Follow Back</Button>
            ) : (
                <Button variant="contained" disableElevation sx={{
                    height: '28px', px: { xs: '10px', sm: '16px' }, fontSize: '11px',
                    textTransform: 'none', fontFamily: 'Poppins', fontWeight: 500,
                    bgcolor: btnBg, color: textColor, borderRadius: '6px', flexShrink: 0,
                    '&:hover': { bgcolor: darkMode ? '#3a3a55' : '#e0e0e0' }
                }}>Message</Button>
            )}
            <IconButton size="small" sx={{ color: subColor, flexShrink: 0, p: { xs: '2px', sm: '4px' } }}>
                <MoreVertIcon sx={{ fontSize: '18px' }} />
            </IconButton>
        </Box>
    );
};

// Full Connections page component
const Connection = ({ darkMode, onClose }) => {
    const [activeTab, setActiveTab] = useState('Connections');
    const bg = darkMode ? '#1e1e2e' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';
    const subColor = darkMode ? '#aaa' : '#777';
    const tabBorder = '2px solid #00E87F';

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '701px',
            bgcolor: bg,
            borderRadius: '15px',
            p: { xs: '16px', sm: '24px' },
            boxSizing: 'border-box',
            boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '661px'
        }}>
            {/* Header Tabs */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '24px', flexShrink: 0 }}>
                <Box sx={{ display: 'flex', gap: { xs: '15px', sm: '30px' }, flexGrow: 1, overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                    {['Connections', 'Pending'].map((tab) => (
                        <Box
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            sx={{
                                cursor: 'pointer',
                                pb: '4px',
                                borderBottom: activeTab === tab ? tabBorder : '2px solid transparent',
                                whiteSpace: 'nowrap'
                            }}>
                            <Typography sx={{
                                fontSize: { xs: '12px', sm: '14px' },
                                fontWeight: activeTab === tab ? 700 : 500,
                                color: activeTab === tab ? textColor : subColor,
                                fontFamily: 'Poppins',
                            }}>
                                {tab === 'Connections' ? '1,456 Connections' : '12 Pending'}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                {onClose && (
                    <IconButton onClick={onClose} size="small" sx={{ color: subColor }}>
                        <CloseIcon />
                    </IconButton>
                )}
            </Box>

            {/* Scrollable list */}
            <Box sx={{
                flexGrow: 1,
                width: '100%',
                maxWidth: '500px', // cap width on tablet
                alignSelf: 'center', // center the list content
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}>
                {connectionsData.map((user) => (
                    <ConnectionCard
                        key={user.id}
                        name={user.name}
                        bio={user.bio}
                        pic={user.pic}
                        followBack={user.followBack}
                        darkMode={darkMode}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Connection;
