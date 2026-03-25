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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';

// Assets
import companyLogo from '../../../assets/jobs/company1.webp';
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp5 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import easyApplyIcon from '../../../assets/login/login.webp';
import ShareJob from '../partime/sharejob';

const InternshipDetail = ({ darkMode, onBack, job, onApply }) => {
    const [shareAnchorEl, setShareAnchorEl] = useState(null);

    const currentJob = job || {
        id: 1,
        title: 'Frontend Developer Intern',
        company: 'CodeLeap',
        location: 'Galle, Sri Lanka',
        time: '1 day ago',
        icon: companyLogo,
        type: 'Internship',
        duration: '6 Months',
        isPaid: false,
        status: 'easy-apply'
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
            {/* --- TOP HEADER (Breadcrumbs) --- */}
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
                        Jobs / Internship
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
                <Box sx={{ mb: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={currentJob.icon}
                            sx={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '14px',
                                objectFit: 'cover',
                            }}
                        />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography sx={{ fontSize: '22px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>
                                    {currentJob.company}
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '18px', color: '#00A0DC' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Typography sx={{ fontSize: '15px', color: '#888', fontFamily: 'Poppins' }}>
                                    {currentJob.location}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Box component="img" src={easyApplyIcon} sx={{ width: '14px', height: '14px', objectFit: 'contain' }} />
                                    <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#555', fontFamily: 'Poppins' }}>Easy Apply</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <IconButton sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5', p: '10px' }}>
                        <NotificationsNoneIcon sx={{ fontSize: '24px', color: '#666' }} />
                    </IconButton>
                </Box>

                {/* --- TITLE & SAVE ROW --- */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '16px', flexWrap: 'wrap' }}>
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
                        SAVE JOB
                    </Button>
                    <Typography sx={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: darkMode ? '#fff' : '#111',
                        fontFamily: 'Poppins',
                        flex: 1
                    }}>
                        {currentJob.title}
                    </Typography>
                    <Typography sx={{
                        fontSize: '12px',
                        color: '#aaa',
                        fontFamily: 'Poppins',
                        fontWeight: 500
                    }}>
                        {currentJob.time}
                    </Typography>
                </Box>

                <Typography sx={{ fontSize: '13px', color: '#888', mb: '16px', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                    {currentJob.description || "Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit"}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                    <Typography sx={{ fontSize: '11px', color: '#aaa', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Over 50 people clicked apply
                    </Typography>
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        color: '#FF0000', 
                    }}>
                        <Typography sx={{ fontSize: '15px', color: '#FF0000', fontWeight: 700 }}>⌛</Typography>
                        <Typography sx={{ fontSize: '11px', fontWeight: 700, fontFamily: 'Poppins' }}>
                            Apply within 6 days
                        </Typography>
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    onClick={onApply}
                    startIcon={<Box component="img" src={easyApplyIcon} sx={{ width: '24px', height: '22px' }} />}
                    sx={{
                        width: '260px',
                        height: '35px',
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
                    EASY APPLY
                </Button>

                {/* --- ABOUT JOB SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '24px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '20px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>About Job</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Position :</Typography>
                            <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>{currentJob.title}</Typography>
                            <Box sx={{ bgcolor: '#8ED2A4', color: '#000', px: '10px', py: '2px', borderRadius: '12px', fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>Intern</Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Job Type :</Typography>
                            <Box sx={{ bgcolor: '#8ED2A4', color: '#000', px: '10px', py: '2px', borderRadius: '12px', fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>On-Site</Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Location :</Typography>
                            <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>Colombo Sri Lanka</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Duration :</Typography>
                            <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>{currentJob.duration || '6 Months'}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1.5px solid #000', px: '10px', py: '2px', borderRadius: '5px' }}>
                                <WorkOutlineIcon sx={{ fontSize: '14px' }} />
                                <Typography sx={{ fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>Unpaid Internship</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Working Hours :</Typography>
                            <Typography sx={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>9:00 AM – 1:00 PM (Monday, Wednesday, Friday)</Typography>
                        </Box>
                    </Box>

                    {/* Visa Sponsored badge */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '12px' }}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            bgcolor: '#E8F5E9',
                            borderRadius: '20px', px: '16px', py: '8px',
                        }}>
                            <InfoIcon sx={{ fontSize: '16px', color: '#2E7D32' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: 700, color: '#2E7D32', fontFamily: 'Poppins' }}>
                                Visa Sponsored
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* --- ABOUT THE ROLE SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '24px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '16px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>About the role</Typography>
                    <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666', lineHeight: 1.6, mb: '20px', fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                    </Typography>
                </Box>

                {/* --- SKILLS YOU'LL GAIN SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '24px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '16px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Skills You'll Gain</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                            'HTML/CSS, JavaScript basics',
                            'Agile development exposure',
                            'Soft skills: teamwork, time management'
                        ].map((skill, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Typography sx={{ fontSize: '14px', color: '#888', fontFamily: 'Poppins' }}>• {skill}</Typography>
                                <TaskAltIcon sx={{ fontSize: '18px', color: '#00EA8E' }} />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* --- PERKS & BENEFITS SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '32px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '16px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Perks & Benefits</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <WifiIcon sx={{ fontSize: '20px', color: '#666' }} />
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>Wi-Fi Provided</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <RestaurantIcon sx={{ fontSize: '20px', color: '#666' }} />
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>Free Lunch</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <DirectionsCarIcon sx={{ fontSize: '20px', color: '#666' }} />
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>Travel Allowance</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* --- POSTED BY & COMPANY PROFILE BTN --- */}
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
                        <Typography sx={{ fontSize: '12px', color: '#888', fontWeight: 500, fontFamily: 'Poppins' }}>Job Posted by</Typography>
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
                        View company profile
                    </Button>
                </Box>

                {/* --- ABOUT COMPANY SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', pb: '10px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '20px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>About Company</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <Box component="img" src={currentJob.icon} sx={{ width: '56px', height: '56px', borderRadius: '14px', objectFit: 'cover' }} />
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Typography sx={{ fontWeight: 700, fontSize: '18px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>{currentJob.company}</Typography>
                                    <CheckCircleIcon sx={{ fontSize: '18px', color: '#00A0DC' }} />
                                </Box>
                                <Typography sx={{ fontSize: '14px', color: '#888', fontFamily: 'Poppins' }}>5,123 followers</Typography>
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
                            Follow
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '20px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box component="img" src={mp1} sx={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #fff' }} />
                            <Box component="img" src={mp6} sx={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #fff', ml: '-10px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins' }}>
                            <span style={{ fontWeight: 700, color: darkMode ? '#fff' : '#111' }}>Anuradha</span> and <span style={{ fontWeight: 700, color: darkMode ? '#fff' : '#111' }}>Kasun</span> works here
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '12px', color: '#aaa', mb: '16px', fontFamily: 'Poppins', lineHeight: 1.5 }}>
                        IT Services and IT Consulting • Colombo, Western<br />
                        10-50 employees
                    </Typography>

                    <Typography sx={{ fontSize: '14px', color: '#888', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default InternshipDetail;
