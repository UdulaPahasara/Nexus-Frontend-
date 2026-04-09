import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';
import FollowPop from './Popups/FollowPop';

import profile1 from '../../assets/Home/feed/profile1.webp';
import profile2 from '../../assets/Home/feed/profile2.webp';
import profile3 from '../../assets/Home/feed/profile3.webp';
import profile4 from '../../assets/Home/feed/profile4.webp';
import profile5 from '../../assets/Home/feed/profile5.webp';
import profile6 from '../../assets/Home/feed/profile6.webp';
import profile7 from '../../assets/Home/feed/profile7.webp';

const followersData = [
    { id: 1, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile1 },
    { id: 2, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer | Software Engineer', pic: profile2 },
    { id: 3, name: 'Anura Deshan Jayathilaka', bio: 'IOT Enthusiast | Graphic Designer | Software Engineer | UI/UX Designer', pic: profile3 },
    { id: 4, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile4 },
    { id: 5, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile5 },
    { id: 6, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | IOT Enthusiast | Graphic Designer | Software Engineer', pic: profile6 },
    { id: 7, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer', pic: profile7 },
    { id: 8, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer', pic: profile1 },
    { id: 9, name: 'Anura Deshan Jayathilaka', bio: 'Graphic Designer | Software Engineer', pic: profile2 },
    { id: 10, name: 'Anura Deshan Jayathilaka', bio: 'Full Stack Developer | Graphic Designer | Software Engineer', pic: profile3 },
];

// Reusable single follower/following row card
export const FollowerCard = ({ name, bio, pic, darkMode, onMenuOpen }) => {
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
                    fontSize: '13px',
                    fontWeight: 600,
                    color: textColor,
                    fontFamily: 'Poppins',
                    lineHeight: 1.2,
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {name}
                </Typography>
                <Typography sx={{
                    fontSize: '10px',
                    color: subColor,
                    fontFamily: 'Poppins',
                    lineHeight: 1.2,
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {bio}
                </Typography>
            </Box>
            <Button variant="contained" disableElevation sx={{
                height: '28px',
                px: { xs: '10px', sm: '16px' },
                fontSize: '11px',
                textTransform: 'none',
                fontFamily: 'Poppins',
                fontWeight: 500,
                bgcolor: btnBg,
                color: textColor,
                borderRadius: '6px',
                flexShrink: 0,
                '&:hover': { bgcolor: darkMode ? '#3a3a55' : '#e0e0e0' }
            }}>Message</Button>
            <IconButton
                size="small"
                onClick={(e) => onMenuOpen(e.currentTarget)}
                sx={{ color: subColor, flexShrink: 0, p: { xs: '2px', sm: '4px' } }}
            >
                <MoreVertIcon sx={{ fontSize: '18px' }} />
            </IconButton>
        </Box>
    );
};

// Full Followers page component
const Followers = ({ darkMode, onClose }) => {
    const [activeTab, setActiveTab] = useState('Followers');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (element) => setAnchorEl(element);
    const handleCloseMenu = () => setAnchorEl(null);
    const isMenuOpen = Boolean(anchorEl);
    const bg = darkMode ? '#1e1e2e' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';
    const subColor = darkMode ? '#aaa' : '#777';
    const tabBorder = darkMode ? '2px solid #00E87F' : '2px solid #00C265';

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
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '24px' }}>
                {/* Tabs */}
                <Box sx={{ display: 'flex', gap: { xs: '15px', sm: '30px' }, flexGrow: 1, overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                    {['Followers', 'Following'].map((tab) => (
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
                                {tab === 'Followers' ? '1,656 Followers' : '550 Following'}
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

            {/* Follower Options Popover */}
            <Popover
                open={isMenuOpen}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                slotProps={{ paper: { sx: { borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } } }}
            >
                <FollowPop darkMode={darkMode} onClose={handleCloseMenu} />
            </Popover>

            {/* Follower List */}
            <Box sx={{
                flexGrow: 1,
                width: '100%',
                maxWidth: '500px', // cap width on tablet
                alignSelf: 'center', // center the list
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}>
                {followersData.map((user) => (
                    <FollowerCard
                        key={user.id}
                        name={user.name}
                        bio={user.bio}
                        pic={user.pic}
                        darkMode={darkMode}
                        onMenuOpen={handleOpenMenu}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Followers;
