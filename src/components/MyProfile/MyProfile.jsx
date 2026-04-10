import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Avatar, Grid, Popover } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AddIcon from '@mui/icons-material/Add';
import RepeatIcon from '@mui/icons-material/Repeat';

// Assets
import profilePic from '../../assets/Home/propffun/profilepic.webp';
import post1 from '../../assets/Home/post/post/post1.0.webp';
import post2 from '../../assets/Home/post/post/post2.0.webp';
import post3 from '../../assets/Home/post/post/post3.0.webp';

import UserAboout from '../UserProfile/UserAboout';
import MyAbout from './MyAbout';
import Followers from '../UserProfile/Followers';
import Connection from '../UserProfile/Connection';
import EditMyDetail from './EditMyDetail';
import ServiceAbout from './ServiceAbout';
import ActivitySection from './ActivitySection';
import CompanyViewAll from './CompanyViewAll';
import UprofilePop from '../UserProfile/Popups/UprofilePop';
import OpenPop from './popup/OpenPop';

const MyProfile = ({ darkMode, onBack, onViewChange }) => {
    const [currentTab, setCurrentTab] = useState('Activity');
    const [view, setView] = useState('profile');
    const [openPopOpen, setOpenPopOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const infoBg = darkMode ? '#2a2a3c' : '#f9f9f9';
    const accentColor = '#00E87F';

    const handleViewChange = (newView) => {
        setView(newView);
        if (onViewChange) {
            onViewChange(newView);
        }
    };

    if (view === 'followers') {
        return (
            <Box sx={{ width: '100%', maxWidth: '706px', height: '100%' }}>
                <Followers darkMode={darkMode} onClose={() => handleViewChange('profile')} />
            </Box>
        );
    }

    if (view === 'connections') {
        return (
            <Box sx={{ width: '100%', maxWidth: '706px', height: '100%' }}>
                <Connection darkMode={darkMode} onClose={() => handleViewChange('profile')} />
            </Box>
        );
    }

    if (view === 'edit-detail') {
        return (
            <Box sx={{ width: '100%', maxWidth: '706px', height: '100%' }}>
                <EditMyDetail darkMode={darkMode} onCancel={() => handleViewChange('profile')} />
            </Box>
        );
    }

    if (view === 'service-about') {
        return (
            <Box sx={{ width: '100%', maxWidth: '706px', height: '100%' }}>
                <ServiceAbout darkMode={darkMode} onCancel={() => handleViewChange('profile')} />
            </Box>
        );
    }

    if (view === 'activity-section') {
        return (
            <Box sx={{ width: '100%', maxWidth: '706px', height: '100%' }}>
                <ActivitySection darkMode={darkMode} onCancel={() => handleViewChange('profile')} />
            </Box>
        );
    }


    const statsRow = [
        { label: 'profile views', value: '23', icon: <VisibilityIcon sx={{ fontSize: 18, color: accentColor }} /> },
        { label: 'Search Appearance', value: '25', icon: <SearchIcon sx={{ fontSize: 18, color: accentColor }} /> },
        { label: 'Post Impression', value: '05', icon: <TrendingUpIcon sx={{ fontSize: 18, color: accentColor }} /> }
    ];

    const postData = [
        { id: 1, img: post1, type: 'Repost', desc: 'Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo', bgColor: 'rgba(255, 126, 82, 0.7)' },
        { id: 2, img: post2, type: 'Own Post', desc: 'Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo', bgColor: 'rgba(107, 169, 94, 0.7)' },
        { id: 3, img: post3, type: 'Looking For', isJob: true, desc: 'Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo', bgColor: 'rgba(133, 133, 133, 0.7)' },
        { id: 4, img: post1, type: 'Repost', desc: 'Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo', bgColor: 'rgba(255, 126, 82, 0.7)' },
        { id: 5, img: post2, type: 'Own Post', desc: 'Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo', bgColor: 'rgba(107, 169, 94, 0.7)' },
        { id: 6, img: post3, type: 'Looking For', isJob: true, desc: 'Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo', bgColor: 'rgba(133, 133, 133, 0.7)' },
    ];

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
            boxSizing: 'border-box',
            position: 'relative',
            mb: '30px'
        }}>
            {/* ── HEADER COVER ── */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '156px',
                background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59B6 100%)'
            }}>
                {/* Settings & Edit atop cover */}
                <Box sx={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: '#fff', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}>
                        <SettingsIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: '#fff', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }} onClick={() => handleViewChange('edit-detail')}>
                        <EditIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Box>

                {/* Profile Picture */}
                <Avatar
                    src={profilePic}
                    sx={{
                        width: '120px',
                        height: '120px',
                        position: 'absolute',
                        top: '80px',
                        left: '35px',
                        border: `10px solid ${boxBg}`,
                        boxSizing: 'content-box',
                        zIndex: 2
                    }}
                />
            </Box>

            {/* ── INFO SECTION ── */}
            <Box sx={{ px: '35px', pt: '10px', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '80px',
                    pl: { xs: 0, sm: '155px' }, // Offset to the right of the 120px avatar
                    flexWrap: 'wrap',
                    gap: '15px'
                }}>
                    {/* Location & Stats in a row */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        {/* Location */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <LocationOnIcon sx={{ fontSize: '15px', color: textColor }} />
                            <Typography sx={{ fontSize: '13px', color: textColor, fontWeight: 500, fontFamily: 'Poppins' }}>Al Khobar , Saudi Arabia</Typography>
                        </Box>

                        {/* Social Stats */}
                        <Box sx={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                            <Box
                                sx={{ textAlign: 'center', cursor: 'pointer' }}
                                onClick={() => handleViewChange('connections')}
                            >
                                <Typography sx={{ fontSize: '16px', fontWeight: 700, color: textColor }}>3,000</Typography>
                                <Typography sx={{ fontSize: '11px', color: subTextColor }}>Followers</Typography>
                            </Box>
                            <Box
                                sx={{ textAlign: 'center', cursor: 'pointer' }}
                                onClick={() => handleViewChange('followers')}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 700, color: textColor }}>3K+</Typography>
                                    <Typography sx={{ bgcolor: accentColor, color: '#000', fontSize: '9px', fontWeight: 700, px: '4px', borderRadius: '3px' }}>1,250</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '11px', color: subTextColor }}>Connections</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>

            {/* Right Side Floating Icons & Status */}
            <Box sx={{
                position: 'absolute',
                top: '170px',
                right: '23px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                zIndex: 2
            }}>
                {/* Contact Icons */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <IconButton size="small" sx={{ bgcolor: infoBg, borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} component="a" href="mailto:nuwinikaru122@gmail.com">
                        <MailOutlineIcon sx={{ fontSize: '18px', color: textColor }} />
                    </IconButton>
                    <IconButton size="small" sx={{ bgcolor: infoBg, borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }} component="a" href="tel:+94789987885">
                        <PhoneIcon sx={{ fontSize: '18px', color: textColor }} />
                    </IconButton>
                </Box>

                {/* Circular Status */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 54,
                    height: 54,
                }}>
                    {/* The Progress Ring */}
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: `conic-gradient(from 0deg, ${accentColor} 0deg, ${accentColor} 150deg, #e0e0e0 150deg, #e0e0e0 360deg)`,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: '50px',
                            height: '50px',
                            bgcolor: boxBg,
                            borderRadius: '50%'
                        }
                    }}>
                        <Box sx={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                            <Typography sx={{ fontSize: '7.5px', color: '#888', lineHeight: 1, fontFamily: 'Poppins', fontWeight: 500 }}>Status</Typography>
                            <Typography sx={{ fontSize: '9px', fontWeight: 700, color: accentColor, lineHeight: 1.1, fontFamily: 'Poppins' }}>Good</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Identity Block */}
            <Box sx={{ mt: '5px', mb: '20px', pl: '35px', pr: '80px' }}>
                <Typography sx={{ fontSize: '26px', fontWeight: 700, color: textColor, fontFamily: 'Poppins', lineHeight: 1.1 }}>Nirmal Adithya</Typography>
                <Typography sx={{ fontSize: '14px', color: subTextColor, fontFamily: 'Poppins', fontWeight: 500, mb: '8px' }}>UI/UX Designer</Typography>
                <Typography sx={{ fontSize: '13px', color: textColor, fontWeight: 500, fontFamily: 'Poppins' }}>
                    Al Ghaith Oilfields & Supplies Co. <span style={{ opacity: 0.7 }}> - University of Gloucestershire</span>
                </Typography>
            </Box>

            {/* ── STATS ROW ── */}
            <Box sx={{
                mx: '23px', mb: '25px', px: { xs: '10px', sm: '20px' }, py: '14px',
                bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#fcfcfc',
                border: darkMode ? '1px solid #333' : '1px solid #f0f0f0',
                borderRadius: '12px', display: 'flex', justifyContent: 'space-around',
                alignItems: 'center', flexWrap: 'wrap', gap: '10px'
            }}>
                {statsRow.map((item, i) => (
                    <React.Fragment key={i}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', sm: '12px' } }}>
                            <Box sx={{ bgcolor: darkMode ? '#2a2a3c' : '#f0f0f0', p: '10px', borderRadius: '10px', display: 'flex' }}>
                                {item.icon}
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: { xs: '13px', sm: '16px' }, fontWeight: 700, color: textColor, lineHeight: 1 }}>{item.value}</Typography>
                                <Typography sx={{ fontSize: { xs: '10px', sm: '12px' }, color: subTextColor }}>{item.label}</Typography>
                            </Box>
                        </Box>
                        {i < 2 && <Box sx={{ width: '1px', height: '30px', bgcolor: darkMode ? '#444' : '#eee' }} />}
                    </React.Fragment>
                ))}
            </Box>

            {/* ── TABS & ACTIONS ── */}
            <Box sx={{ px: '23px', mt: '15px', mb: '15px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: '12px' }}>
                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
                    <Button
                        variant="contained"
                        onClick={() => setOpenPopOpen(true)}
                        startIcon={<EditIcon sx={{ fontSize: 13 }} />}
                        sx={{
                            bgcolor: accentColor, color: '#000', textTransform: 'none',
                            borderRadius: '8px', px: 1.5, height: '30px', fontWeight: 600,
                            fontSize: '12px', whiteSpace: 'nowrap',
                            '&:hover': { bgcolor: '#00d072' }
                        }}
                    >Open To</Button>
                    <Button
                        variant="contained"
                        onClick={() => handleViewChange('edit-detail')}
                        sx={{
                            bgcolor: darkMode ? '#333' : '#E8E8E8', color: textColor,
                            textTransform: 'none', borderRadius: '8px', px: 1.5, height: '30px',
                            fontWeight: 600, fontSize: '12px', whiteSpace: 'nowrap',
                            boxShadow: 'none', '&:hover': { bgcolor: darkMode ? '#444' : '#ddd' }
                        }}
                    >Edit Details</Button>
                    <IconButton size="small" sx={{ color: textColor, flexShrink: 0 }} onClick={handleMenuClick}><MoreVertIcon /></IconButton>

                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', mt: 1 } }}
                    >
                        <UprofilePop darkMode={darkMode} onClose={handleMenuClose} />
                    </Popover>
                </Box>

                {/* Tabs */}
                <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', flexShrink: 0 }}>
                    <Box onClick={() => setCurrentTab('Activity')} sx={{
                        display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
                        borderBottom: currentTab === 'Activity' ? `2px solid ${accentColor}` : 'none', pb: '4px',
                        opacity: currentTab === 'Activity' ? 1 : 0.6
                    }}>
                        <GridViewIcon sx={{ fontSize: 17 }} />
                        <Typography sx={{ fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>Activity</Typography>
                    </Box>
                    <Box onClick={() => setCurrentTab('About')} sx={{
                        display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
                        borderBottom: currentTab === 'About' ? `2px solid ${accentColor}` : 'none', pb: '4px',
                        opacity: currentTab === 'About' ? 1 : 0.6
                    }}>
                        <PersonOutlineIcon sx={{ fontSize: 17 }} />
                        <Typography sx={{ fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>About</Typography>
                    </Box>
                    <IconButton size="small" sx={{ color: accentColor, flexShrink: 0 }}><EditIcon sx={{ fontSize: 18 }} /></IconButton>
                </Box>
            </Box>

            {/* ── MANAGE ACTIVITY ── */}
            <Box sx={{ px: '23px', mb: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: textColor }}>
                    Total Posts : <span style={{ color: accentColor }}>284</span>
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<EditIcon sx={{ fontSize: 14 }} />}
                    onClick={onBack}
                    sx={{
                        bgcolor: darkMode ? '#333' : '#E8E8E8', color: textColor, textTransform: 'none', borderRadius: '100px', fontSize: '11px', px: 2, height: '28px',
                        boxShadow: 'none', '&:hover': { bgcolor: darkMode ? '#444' : '#ddd' }
                    }}
                >
                    Manage My Activity
                </Button>
            </Box>

            {/* ── CONTENT FEED ── */}
            {currentTab === 'Activity' ? (
                <Box sx={{ px: '23px', pb: '40px' }}>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '12px',
                    }}>
                        {postData.map((post) => (
                            <Box key={post.id} sx={{
                                position: 'relative',
                                borderRadius: '12.23px',
                                overflow: 'hidden',
                                width: '100%',
                                height: { xs: '150px', sm: '209.1px' },
                                bgcolor: '#000'
                            }}>
                                <img src={post.img} alt="post" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />

                                {/* Type Tag */}
                                <Box sx={{
                                    position: 'absolute', top: '10px', right: '10px', bgcolor: 'rgba(0,0,0,0.6)', color: '#fff',
                                    borderRadius: '12.23px', px: '10px', py: '3px', display: 'flex', alignItems: 'center', gap: '5px'
                                }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 500 }}>{post.type}</Typography>
                                    <RepeatIcon sx={{ fontSize: 12 }} />
                                </Box>

                                {/* Description Overlay with Avatar */}
                                <Box sx={{
                                    position: 'absolute', bottom: 0, left: 0, width: '100%', p: '12px',
                                    bgcolor: post.bgColor,
                                    backdropFilter: 'blur(6px)', display: 'flex', gap: '8px', alignItems: 'flex-start'
                                }}>
                                    <Avatar src={profilePic} sx={{ width: 24, height: 24, border: '1.5px solid #fff' }} />
                                    <Typography sx={{ fontSize: '9px', color: '#fff', fontWeight: 500, lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                        {post.desc}
                                    </Typography>
                                </Box>

                                {/* Add Icon (Optional Job UI) */}
                                {post.isJob && (
                                    <IconButton sx={{
                                        position: 'absolute', top: '55%', right: '10px',
                                        bgcolor: accentColor, borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                        border: '3px solid #fff',
                                        '&:hover': { bgcolor: '#00d072' }
                                    }}>
                                        <AddIcon sx={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }} />
                                    </IconButton>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ pb: '40px' }}>
                    <MyAbout
                        darkMode={darkMode}
                        onEditServices={() => handleViewChange('service-about')}
                        onAddActivity={() => handleViewChange('activity-section')}
                        onViewAllProjects={() => handleViewChange('company-view-all')}
                    />
                </Box>
            )}

            <OpenPop open={openPopOpen} onClose={() => setOpenPopOpen(false)} darkMode={darkMode} />
        </Box>
    );
};

export default MyProfile;
