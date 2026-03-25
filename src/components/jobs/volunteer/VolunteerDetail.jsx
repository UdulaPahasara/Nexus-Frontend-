import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WifiIcon from '@mui/icons-material/Wifi';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import InfoIcon from '@mui/icons-material/Info';

// Assets
import easyApplyIcon from '../../../assets/login/login.webp';
import mp5 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import ShareJob from '../partime/sharejob';

const VolunteerDetail = ({ darkMode, onBack, job, onApply }) => {
    const [shareAnchorEl, setShareAnchorEl] = useState(null);

    const currentJob = job || {
        id: 1,
        title: 'Eco Campaign Organizer',
        company: 'GreenSpark Initiative',
        location: 'Vancouver, Canada',
        time: '1 day ago',
        companyLogo: '',
        backgroundImg: '',
    };

    return (
        <Box sx={{
            width: '100%',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
            fontFamily: 'Poppins, sans-serif',
            height: '100%'
        }}>
            {/* --- TOP HEADER --- */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '20px',
                py: '12px',
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef',
                flexShrink: 0
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Box onClick={onBack} sx={{ cursor: 'pointer', color: darkMode ? '#fff' : '#000', display: 'flex', alignItems: 'center' }}>
                        <CloseIcon sx={{ fontSize: '18px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Jobs / Volunteer
                    </Typography>
                </Box>
                <Box onClick={(e) => setShareAnchorEl(e.currentTarget)} sx={{ color: darkMode ? '#fff' : '#000', cursor: 'pointer' }}>
                    <MoreHorizIcon sx={{ fontSize: '20px' }} />
                </Box>
            </Box>

            <ShareJob
                anchorEl={shareAnchorEl}
                open={Boolean(shareAnchorEl)}
                onClose={() => setShareAnchorEl(null)}
                darkMode={darkMode}
            />

            <Box sx={{ flex: 1, overflowY: 'auto', p: '24px', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
                {/* --- COMPANY BRANDING HEADER --- */}
                <Box sx={{ mb: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
                    <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={currentJob.companyLogo}
                            sx={{
                                width: { xs: '50px', sm: '64px' },
                                height: { xs: '50px', sm: '64px' },
                                borderRadius: '14px',
                                objectFit: 'cover',
                            }}
                        />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography sx={{ fontSize: { xs: '18px', sm: '22px' }, fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>
                                    {currentJob.company}
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '18px', color: '#00A0DC' }} />
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1.5px solid #00EA8E', px: '8px', py: '1px', borderRadius: '5px' }}>
                                    <Typography sx={{ fontSize: '9px', fontWeight: 700, color: '#00EA8E', fontFamily: 'Poppins' }}>NGO</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>
                                    {currentJob.location}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Box component="img" src={easyApplyIcon} sx={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                                    <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#555', fontFamily: 'Poppins' }}>Volunteer Apply</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <IconButton sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5', p: '10px', display: { xs: 'none', sm: 'inline-flex' } }}>
                        <NotificationsNoneIcon sx={{ fontSize: '24px', color: '#666' }} />
                    </IconButton>
                </Box>

                {/* --- TITLE & SAVE ROW --- */}
                <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, gap: '12px', mb: '16px', flexWrap: 'wrap', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                    <Button
                        variant="contained"
                        startIcon={<BookmarkBorderIcon sx={{ fontSize: '18px' }} />}
                        sx={{
                            bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                            color: darkMode ? '#fff' : '#000',
                            borderRadius: '10px',
                            fontWeight: 700,
                            fontSize: '11px',
                            textTransform: 'none',
                            px: '14px',
                            py: '6px',
                            boxShadow: 'none',
                            fontFamily: 'Poppins',
                            '&:hover': { bgcolor: '#ddd', boxShadow: 'none' }
                        }}
                    >
                        SAVE FOR LATER
                    </Button>
                    <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                            <Typography sx={{
                                fontSize: { xs: '18px', sm: '22px' },
                                fontWeight: 700,
                                color: darkMode ? '#fff' : '#111',
                                fontFamily: 'Poppins',
                                lineHeight: 1.2
                            }}>
                                {currentJob.title}
                            </Typography>
                            <Typography sx={{
                                fontSize: '11px',
                                color: '#aaa',
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                mt: '6px'
                            }}>
                                {currentJob.time || 'Posted 5h ago'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Typography sx={{ fontSize: '13px', color: '#888', mb: '16px', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                    Join us in making a real difference in the community. We are looking for passionate individuals to help us organize our upcoming Eco Campaign. You will be working directly with our team to coordinate logistics and raise awareness.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                    <Typography sx={{ fontSize: '11px', color: '#aaa', fontFamily: 'Poppins', fontWeight: 500 }}>
                        24 volunteers already joined
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#00EA8E',
                    }}>
                        <Typography sx={{ fontSize: '15px', color: '#00EA8E', fontWeight: 700 }}>🌱</Typography>
                        <Typography sx={{ fontSize: '11px', fontWeight: 700, fontFamily: 'Poppins' }}>
                            Starts in 5 days
                        </Typography>
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    onClick={onApply}
                    startIcon={<VolunteerActivismIcon sx={{ fontSize: '20px' }} />}
                    sx={{
                        width: { xs: '100%', sm: '260px' },
                        height: '40px',
                        bgcolor: '#000',
                        color: '#fff',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '14px',
                        textTransform: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        fontFamily: 'Poppins',
                        boxShadow: 'none',
                        mb: '25px',
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)', boxShadow: 'none' }
                    }}
                >
                    APPLY TO VOLUNTEER
                </Button>

                {/* --- ABOUT ROLE SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '24px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '20px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Role Details</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '6px', sm: '12px' } }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: { xs: 'auto', sm: '140px' } }}>Category :</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>Environment Protection</Typography>
                                <Box sx={{ bgcolor: 'rgba(0, 234, 142, 0.15)', color: '#00EA8E', px: '10px', py: '2px', borderRadius: '12px', fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>Volunteer</Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '6px', sm: '12px' } }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: { xs: 'auto', sm: '140px' } }}>Commitment :</Typography>
                            <Box sx={{ bgcolor: '#8ED2A4', color: '#000', px: '10px', py: '2px', borderRadius: '12px', fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>Part-time</Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '6px', sm: '12px' } }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: { xs: 'auto', sm: '140px' } }}>Duration :</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>3 Months</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1.5px solid #000', px: '10px', py: '2px', borderRadius: '5px' }}>
                                    <VolunteerActivismIcon sx={{ fontSize: '14px' }} />
                                    <Typography sx={{ fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>Community Service</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '6px', sm: '12px' } }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: { xs: 'auto', sm: '140px' } }}>Working Hours :</Typography>
                            <Typography sx={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>Sat & Sun (10:00 AM – 2:00 PM)</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* --- IMPACT SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '24px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '16px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Your Impact</Typography>
                    <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666', lineHeight: 1.6, mb: '20px', fontFamily: 'Poppins' }}>
                        By joining this campaign, you help us reduce plastic waste in the coastlines and educate over 500 local students on sustainable living. Your contribution directly affects the local ecosystem preservation efforts.
                    </Typography>
                </Box>

                {/* --- BENEFITS FOR VOLUNTEERS SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '32px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '16px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Perks for Volunteers</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <TaskAltIcon sx={{ fontSize: '20px', color: '#00EA8E' }} />
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>Certificate of Participation</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <RestaurantIcon sx={{ fontSize: '20px', color: '#666' }} />
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>Meals & Refreshments</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <DirectionsCarIcon sx={{ fontSize: '20px', color: '#666' }} />
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>Transportation Support</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* --- POSTED BY --- */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#F9F9F9',
                    p: '12px 16px',
                    borderRadius: '12px',
                    flexWrap: 'wrap',
                    gap: '12px',
                    mb: '32px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Typography sx={{ fontSize: '12px', color: '#888', fontWeight: 500, fontFamily: 'Poppins' }}>Organizer</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box component="img" src={mp5} sx={{ width: '22px', height: '22px', borderRadius: '50%' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: 600, fontFamily: 'Poppins', color: '#111' }}>Anuradha Perera</Typography>
                        </Box>
                    </Box>
                    <Button sx={{
                        textTransform: 'none',
                        color: '#111',
                        fontSize: '11px',
                        fontWeight: 600,
                        bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                        borderRadius: '20px',
                        px: '16px',
                        py: '6px',
                        fontFamily: 'Poppins',
                        boxShadow: 'none',
                        '&:hover': { bgcolor: '#ddd' }
                    }}>
                        View NGO profile
                    </Button>
                </Box>

                {/* --- ABOUT COMPANY SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', pb: '10px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '20px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>About NGO</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <Box component="img" src={currentJob.companyLogo} sx={{ width: '56px', height: '56px', borderRadius: '14px', objectFit: 'cover' }} />
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Typography sx={{ fontWeight: 700, fontSize: '18px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>{currentJob.company}</Typography>
                                    <CheckCircleIcon sx={{ fontSize: '18px', color: '#00A0DC' }} />
                                </Box>
                                <Typography sx={{ fontSize: '14px', color: '#888', fontFamily: 'Poppins' }}>Non-Profit Organization • 12k supporters</Typography>
                            </Box>
                        </Box>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#00EA8E',
                                color: '#00EA8E',
                                textTransform: 'none',
                                borderRadius: '100px',
                                fontWeight: 700,
                                px: '24px',
                                py: '6px',
                                fontSize: '14px',
                                fontFamily: 'Poppins',
                                borderWeight: '2px',
                                '&:hover': { bgcolor: 'rgba(0, 234, 142, 0.05)', borderColor: '#00EA8E' }
                            }}
                        >
                            Support
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '20px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box component="img" src={mp1} sx={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #fff' }} />
                            <Box component="img" src={mp6} sx={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #fff', ml: '-10px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins' }}>
                            <span style={{ fontWeight: 700, color: darkMode ? '#fff' : '#111' }}>Anuradha</span> and <span style={{ fontWeight: 700, color: darkMode ? '#fff' : '#111' }}>Kasun</span> supports this NGO
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '14px', color: '#888', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                        {currentJob.company} is a leading non-profit focused on environmental conservation and community education. Founded in 2015, we have completed over 200 successful campaigns across the globe.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default VolunteerDetail;
