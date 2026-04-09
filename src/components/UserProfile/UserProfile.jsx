import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Avatar, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RepeatIcon from '@mui/icons-material/Repeat';
import CropSquareIcon from '@mui/icons-material/CropSquare';
// Assets
import coverImg from '../../assets/UseProfile/attachment.webp';
import profilePic from '../../assets/Home/feed/profile3.webp';
import followerProf1 from '../../assets/Home/feed/profile1.webp';
import followerProf2 from '../../assets/Home/feed/profile2.webp';

import post1 from '../../assets/Home/post/post/post1.0.webp';
import post2 from '../../assets/Home/post/post/post2.0.webp';
import post3 from '../../assets/Home/post/post/post3.0.webp';
import post4 from '../../assets/Home/post/post/post1.2.webp';
import post5 from '../../assets/Home/post/post/post2.2.webp';
import post6 from '../../assets/Home/post/post/post3.2.webp';

import UserAboout from './UserAboout';
import Followers from './Followers';
import Connection from './Connection';
import UserDeatil from './UserDeatil';
import Modal from '@mui/material/Modal';

const UserProfile = ({ darkMode, onNameClick }) => {
    const [currentTab, setCurrentTab] = useState('Activity');
    const [showFollowers, setShowFollowers] = useState(false);
    const [showConnections, setShowConnections] = useState(false);
    const [showUserDetail, setShowUserDetail] = useState(false);

    const handleNameClick = () => {
        // On mobile: open as modal; on desktop: delegate to parent
        if (window.innerWidth < 900) {
            setShowUserDetail(true);
        } else if (onNameClick) {
            onNameClick();
        }
    };

    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const infoBg = darkMode ? '#2a2a3c' : '#f9f9f9';

    const activityImages = [
        post1, post2, post3, post4, post5, post6
    ];

    return (
        <>
            {/* Followers Modal */}
            <Modal
                open={showFollowers}
                onClose={() => setShowFollowers(false)}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 0, sm: 2 } }}
            >
                <Box sx={{ outline: 'none', width: '100%', maxWidth: '656px', height: { xs: '100%', sm: 'auto' } }}>
                    <Followers darkMode={darkMode} onClose={() => setShowFollowers(false)} />
                </Box>
            </Modal>

            {/* Connections Modal */}
            <Modal
                open={showConnections}
                onClose={() => setShowConnections(false)}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 0, sm: 2 } }}
            >
                <Box sx={{ outline: 'none', width: '100%', maxWidth: '701px', height: { xs: '100%', sm: 'auto' } }}>
                    <Connection darkMode={darkMode} onClose={() => setShowConnections(false)} />
                </Box>
            </Modal>

            {/* UserDeatil Modal — mobile only */}
            <Modal
                open={showUserDetail}
                onClose={() => setShowUserDetail(false)}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 0 // removed padding for full screen
                }}
            >
                <Box sx={{ outline: 'none', width: '100%', height: '100%' }}>
                    <UserDeatil darkMode={darkMode} onClose={() => setShowUserDetail(false)} />
                </Box>
            </Modal>

            <Box sx={{
                width: '100%',
                maxWidth: '706px',
                bgcolor: boxBg,
                borderRadius: '15px',
                boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxSizing: 'border-box'
            }}>
                {/* ── HEADER COVER & PROFILE PICTURE ── */}
                <Box sx={{ position: 'relative', width: '100%', height: '156px' }}>
                    <img src={coverImg} alt="Cover" style={{ width: '100%', height: '156px', objectFit: 'cover' }} />

                    {/* Profile Picture overlapping — responsive positioning */}
                    <Avatar
                        src={profilePic}
                        sx={{
                            width: { xs: '80px', sm: '100px' },
                            height: { xs: '80px', sm: '100px' },
                            position: 'absolute',
                            top: { xs: '56px', sm: '98px' },
                            left: { xs: '50%', sm: '35px' },
                            transform: { xs: 'translateX(-50%)', sm: 'none' },
                            border: `10px solid ${boxBg}`,
                            boxSizing: 'content-box'
                        }}
                    />
                </Box>

                {/* ── LOCATION, STATS, ACTIONS ── */}
                {/* Desktop: single row with left-pad for avatar */}
                <Box sx={{
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '21px 23px 0 152px',
                    flexWrap: 'wrap',
                    gap: '10px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <LocationOnIcon sx={{ fontSize: '18px', color: subTextColor }} />
                        <Typography sx={{ fontSize: '13px', color: subTextColor, fontWeight: 500, fontFamily: 'Poppins' }}>
                            Al Khobar , Saudi Arabia
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <Box onClick={() => setShowFollowers(true)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 700, color: textColor, lineHeight: 1 }}>1,576</Typography>
                            <Typography sx={{ fontSize: '12px', color: subTextColor }}>Followers</Typography>
                        </Box>
                        <Box onClick={() => setShowConnections(true)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 700, color: textColor, lineHeight: 1 }}>1,456</Typography>
                            <Typography sx={{ fontSize: '12px', color: subTextColor }}>Connections</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex', gap: '6px' }}>
                            <IconButton size="small" sx={{ bgcolor: infoBg, borderRadius: '8px' }}>
                                <MailOutlineIcon sx={{ fontSize: '20px', color: textColor }} />
                            </IconButton>
                            <IconButton size="small" sx={{ bgcolor: infoBg, borderRadius: '8px' }}>
                                <PhoneIcon sx={{ fontSize: '20px', color: textColor }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Mobile: centered column layout below avatar */}
                <Box sx={{
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: '52px', // pushes down below the avatar overlap
                    px: '16px',
                    gap: '10px',
                    width: '100%'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <LocationOnIcon sx={{ fontSize: '14px', color: subTextColor }} />
                        <Typography sx={{ fontSize: '12px', color: subTextColor, fontWeight: 500, fontFamily: 'Poppins' }}>
                            Al Khobar , Saudi Arabia
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <Box onClick={() => setShowFollowers(true)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 700, color: textColor, lineHeight: 1 }}>1,576</Typography>
                            <Typography sx={{ fontSize: '11px', color: subTextColor }}>Followers</Typography>
                        </Box>
                        <Box onClick={() => setShowConnections(true)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 700, color: textColor, lineHeight: 1 }}>1,456</Typography>
                            <Typography sx={{ fontSize: '11px', color: subTextColor }}>Connections</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '6px' }}>
                            <IconButton size="small" sx={{ bgcolor: infoBg, borderRadius: '8px' }}>
                                <MailOutlineIcon sx={{ fontSize: '18px', color: textColor }} />
                            </IconButton>
                            <IconButton size="small" sx={{ bgcolor: infoBg, borderRadius: '8px' }}>
                                <PhoneIcon sx={{ fontSize: '18px', color: textColor }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* ── PROFILE DETAILS ── */}
                <Box sx={{ px: '23px', mt: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography
                        onClick={handleNameClick}
                        sx={{ fontSize: '22px', fontWeight: 700, color: textColor, fontFamily: 'Poppins', lineHeight: 1.2, cursor: 'pointer', display: 'inline-block', width: 'fit-content' }}>
                        Sophia Martinez
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: subTextColor, fontFamily: 'Poppins', fontWeight: 500, mb: '2px' }}>
                        Web Developer | UI/UX | Scrum Master | IT Projects Lead | DBMS | Product Designer
                    </Typography>
                    <Typography sx={{ fontSize: '12.5px', color: textColor, fontFamily: 'Poppins', fontWeight: 600 }}>
                        SLT (Sri Lanka Telecom) <span style={{ fontWeight: 400 }}> - University of Leicester</span>
                    </Typography>

                    {/* Followed By Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mt: '5px' }}>
                        <Box sx={{ display: 'flex', '.MuiAvatar-root': { border: `2px solid ${boxBg}`, ml: '-8px' }, '& > :first-of-type': { ml: 0 } }}>
                            <Avatar src={followerProf1} sx={{ width: 20, height: 20 }} />
                            <Avatar src={followerProf2} sx={{ width: 20, height: 20 }} />
                        </Box>
                        <Typography sx={{ fontSize: '11px', color: subTextColor, fontFamily: 'Poppins' }}>
                            Followed By <strong style={{ color: textColor }}>Thisara, Anil</strong> And <strong style={{ color: textColor }}>5 Others</strong>
                        </Typography>
                    </Box>
                </Box>

                {/* ── ACTION BUTTONS AND TABS ── */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'stretch', sm: 'center' },
                    gap: '15px',
                    px: '23px',
                    mt: '30px',
                    mb: '20px',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{
                                bgcolor: '#00E87F',
                                color: '#000',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: '25px',
                                px: 3,
                                py: 0.8,
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                            }}>
                            Follow
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: darkMode ? '#333' : '#E8E8E8',
                                color: textColor,
                                textTransform: 'none',
                                fontWeight: 600,
                                borderRadius: '25px',
                                px: 3,
                                py: 0.8,
                                boxShadow: 'none',
                                '&:hover': { bgcolor: darkMode ? '#444' : '#ddd', boxShadow: 'none' }
                            }}>
                            Message
                        </Button>
                        <IconButton sx={{ color: textColor }}>
                            <MoreVertIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box
                            onClick={() => setCurrentTab('Activity')}
                            sx={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                borderBottom: currentTab === 'Activity' ? '2px solid #00E87F' : 'none',
                                pb: '5px', cursor: 'pointer',
                                opacity: currentTab === 'Activity' ? 1 : 0.6
                            }}>
                            <GridViewIcon sx={{ fontSize: 20, color: currentTab === 'Activity' ? textColor : subTextColor }} />
                            <Typography sx={{ color: currentTab === 'Activity' ? textColor : subTextColor, fontWeight: currentTab === 'Activity' ? 600 : 500, fontSize: '14px', fontFamily: 'Poppins' }}>Activity</Typography>
                        </Box>
                        <Box
                            onClick={() => setCurrentTab('About')}
                            sx={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                borderBottom: currentTab === 'About' ? '2px solid #00E87F' : 'none',
                                pb: '5px', cursor: 'pointer',
                                opacity: currentTab === 'About' ? 1 : 0.6
                            }}>
                            <PersonOutlineIcon sx={{ fontSize: 20, color: currentTab === 'About' ? textColor : subTextColor }} />
                            <Typography sx={{ color: currentTab === 'About' ? textColor : subTextColor, fontWeight: currentTab === 'About' ? 600 : 500, fontSize: '14px', fontFamily: 'Poppins' }}>About</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* ── CONDITIONAL RENDER ── */}
                {currentTab === 'Activity' ? (
                    <Box sx={{ px: '23px', pb: '30px' }}>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: { xs: '12px', sm: '15px', md: '20px' }
                        }}>
                            {activityImages.map((imgSrc, index) => (
                                <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{
                                        width: '100%',
                                        aspectRatio: '1 / 1',
                                        position: 'relative',
                                        borderRadius: '11.62px',
                                        overflow: 'hidden',
                                        bgcolor: boxBg
                                    }}>
                                        <img src={imgSrc} alt={`Activity \${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                                        {/* Top-Left Icon Tag */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            bgcolor: 'rgba(0, 0, 0, 0.6)',
                                            borderRadius: '4px',
                                            width: '18px',
                                            height: '18px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            {index % 2 === 0 ? (
                                                <CropSquareIcon sx={{ color: '#fff', fontSize: '10px' }} />
                                            ) : (
                                                <Typography sx={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>"</Typography>
                                            )}
                                        </Box>

                                        {/* Top-Right Repost Button */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            bgcolor: 'rgba(25, 45, 65, 0.75)',
                                            color: '#fff',
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            px: '8px',
                                            py: '3px',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        }}>
                                            <Typography sx={{ fontSize: '10px', fontWeight: 500, fontFamily: 'Poppins' }}>Repost</Typography>
                                            <RepeatIcon sx={{ fontSize: '12px' }} />
                                        </Box>

                                        {/* Bottom label overlay matching the design precisely */}
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '39.49px',
                                            bgcolor: 'rgba(120, 120, 120, 0.75)', // Creates the hazy effect observed
                                            color: '#fff',
                                            paddingTop: '6.97px',
                                            paddingRight: '11.62px',
                                            paddingBottom: '6.97px',
                                            paddingLeft: '11.62px',
                                            borderBottomLeftRadius: '11.62px',
                                            borderBottomRightRadius: '11.62px',
                                            backdropFilter: 'blur(8px)',
                                            boxSizing: 'border-box'
                                        }}>
                                            <Typography sx={{ fontSize: '8px', lineHeight: 1.3, opacity: 0.9, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontFamily: 'Poppins' }}>
                                                Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ) : (
                    <UserAboout darkMode={darkMode} />
                )}

            </Box>
        </>
    );
};

export default UserProfile;
