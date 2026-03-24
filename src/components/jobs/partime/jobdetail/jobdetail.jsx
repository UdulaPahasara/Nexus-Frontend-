import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Assets
import companyLogo from '../../../../assets/jobs/company1.webp';
import mp1 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp5 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp6 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';

import { useNavigate } from 'react-router-dom';
import ShareJob from '../sharejob';
import easyApplyIcon from '../../../../assets/login/login.webp';

const JobDetail = ({ darkMode, onBack, job, onApply }) => {
    const navigate = useNavigate();
    const [shareAnchorEl, setShareAnchorEl] = useState(null);

    const currentJob = job || {
        id: 1,
        title: 'UI/UX Designer (Part-Time)',
        company: 'Pixel Studio Pvt Ltd',
        location: 'Colombo, Sri Lanka',
        time: '3 hours ago',
        icon: companyLogo
    };

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
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
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Box onClick={handleBack} sx={{ cursor: 'pointer', color: darkMode ? '#fff' : '#000', display: 'flex', alignItems: 'center' }}>
                        <CloseIcon sx={{ fontSize: '18px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Jobs / Part time
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

            <Box sx={{ flex: 1, overflowY: 'auto', p: '20px', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
                {/* --- COMPANY BRANDING --- */}
                <Box sx={{ mb: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={currentJob.icon}
                            sx={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '12px',
                                objectFit: 'cover',
                            }}
                        />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: 600, color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>
                                    {currentJob.company}
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '18px', color: '#0077B5' }} />
                            </Box>
                            <Typography sx={{ fontSize: '16px', color: '#888', mt: '0px', fontFamily: 'Poppins' }}>
                                {currentJob.location}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5', p: '8px' }}>
                        <NotificationsNoneIcon sx={{ fontSize: '22px', color: '#666' }} />
                    </IconButton>
                </Box>

                {/* --- TITLE & SAVE ROW --- */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', sm: '12px' }, mb: '15px', flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        startIcon={<BookmarkBorderIcon sx={{ fontSize: '16px !important' }} />}
                        sx={{
                            bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                            color: darkMode ? '#fff' : '#000',
                            borderRadius: '10px',
                            fontWeight: 600,
                            fontSize: '11px',
                            textTransform: 'none',
                            px: '12px',
                            py: '4px',
                            boxShadow: 'none',
                            fontFamily: 'Poppins',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            order: 1,
                            '&:hover': { bgcolor: '#ddd', boxShadow: 'none' }
                        }}
                    >
                        SAVE JOB
                    </Button>
                    <Typography sx={{
                        fontSize: { xs: '16px', sm: '15px' },
                        fontWeight: 600,
                        color: darkMode ? '#fff' : '#000',
                        fontFamily: 'Poppins',
                        flex: { xs: '1 1 100%', sm: 1 },
                        order: { xs: 3, sm: 2 }
                    }}>
                        {currentJob.title}
                    </Typography>
                    <Typography sx={{
                        fontSize: '12px',
                        color: '#aaa',
                        fontFamily: 'Poppins',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        order: { xs: 2, sm: 3 },
                        marginLeft: { xs: 'auto', sm: 0 }
                    }}>
                        {currentJob.time}
                    </Typography>
                </Box>

                <Typography sx={{ fontSize: '12px', color: '#888', mb: '15px', lineHeight: 1.5, fontFamily: 'Poppins' }}>
                    Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                    <Typography sx={{ fontSize: '11px', color: '#aaa', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Over 50 people clicked apply
                    </Typography>
                    <Typography sx={{ fontSize: '11px', color: '#aaa', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Application Deadline 2025.04.29
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    onClick={onApply}
                    startIcon={currentJob.type === 'Full-Time' ? <Box component="img" src={easyApplyIcon} sx={{ width: '23px', height: '20px' }} /> : null}
                    sx={{
                        width: '224px',
                        height: '30px',
                        bgcolor: currentJob.type === 'Full-Time' ? '#000' : '#00EA8E',
                        color: currentJob.type === 'Full-Time' ? '#fff' : '#000',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '14px',
                        textTransform: 'none',
                        p: '7px 37px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        opacity: 1,
                        fontFamily: 'Poppins',
                        boxShadow: 'none',
                        mb: '30px',
                        alignSelf: 'center',
                        '&:hover': { bgcolor: currentJob.type === 'Full-Time' ? 'rgba(0,0,0,0.8)' : '#00d682', boxShadow: 'none' }
                    }}
                >
                    {currentJob.type === 'Full-Time' ? 'EASY APPLY' : 'APPLY NOW'}
                </Button>

                {/* --- ABOUT JOB SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '25px', mb: '25px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: '15px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>About Job</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '110px' }}>Position :</Typography>
                            <Typography sx={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>UI/UX Designer</Typography>
                            <Box sx={{ bgcolor: '#8ED2A4', color: '#000', px: '6px', py: '1px', borderRadius: '12px', fontSize: '9px', fontWeight: 600, fontFamily: 'Poppins' }}>Part-time</Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '110px' }}>Job Type:</Typography>
                            <Box sx={{ border: '1px solid #00EA8E', color: '#00EA8E', px: '6px', py: '1px', borderRadius: '4px', fontSize: '9px', fontWeight: 600, fontFamily: 'Poppins' }}>On-Site</Box>
                            <Box sx={{ border: '1px solid #aaa', color: '#888', px: '6px', py: '1px', borderRadius: '4px', fontSize: '9px', fontWeight: 600, fontFamily: 'Poppins' }}>Hybrid</Box>
                            <Typography sx={{ fontSize: '13px', color: '#888' }}>ⓘ</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '110px' }}>Location :</Typography>
                            <Typography sx={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>Colombo Sri Lanka</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '110px' }}>Experience :</Typography>
                            <Typography sx={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>5 Years</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '110px' }}>Working Hours :</Typography>
                            <Typography sx={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', fontFamily: 'Poppins' }}>9:00 AM – 1:00 PM (Monday, Wednesday, Friday)</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* --- ABOUT THE ROLE SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '25px', mb: '35px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: '15px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>About the role</Typography>
                    <Typography sx={{ fontSize: '13px', color: darkMode ? '#aaa' : '#666', lineHeight: 1.5, mb: '15px', fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#F9F9F9',
                        p: '10px 15px',
                        borderRadius: '12px',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <Typography sx={{ fontSize: '11px', color: 'rgba(0, 0, 0, 1)', fontWeight: 400, fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>Job Posted by</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', p: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                                <Box component="img" src={mp5} sx={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                                <Typography sx={{ fontSize: '11px', fontWeight: 500, fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>Anuradha Perera</Typography>
                            </Box>
                        </Box>
                        <Button sx={{
                            textTransform: 'none', color: 'rgba(0, 0, 0, 1)', fontSize: '11px', fontWeight: 400,
                            bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                            borderRadius: '8px', px: '12px', fontFamily: 'Poppins', whiteSpace: 'nowrap',
                            width: { xs: '100%', sm: 'auto' }
                        }}>
                            View company profile
                        </Button>
                    </Box>
                </Box>

                {/* --- ABOUT COMPANY SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '25px', pb: '10px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: '15px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>About Company</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <Box component="img" src={currentJob.icon} sx={{ width: '45px', height: '45px', borderRadius: '10px', objectFit: 'cover' }} />
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '15px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>{currentJob.company}</Typography>
                                    <CheckCircleIcon sx={{ fontSize: '16px', color: '#0077B5' }} />
                                </Box>
                                <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins' }}>5,123 followers</Typography>
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
                                px: '20px',
                                py: '4px',
                                fontSize: '13px',
                                fontFamily: 'Poppins',
                                '&:hover': { bgcolor: 'rgba(0, 234, 142, 0.05)', borderColor: '#00EA8E' }
                            }}
                        >
                            Follow
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '15px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box component="img" src={mp1} sx={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #fff' }} />
                            <Box component="img" src={mp6} sx={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #fff', ml: '-8px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins' }}>
                            <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>Anuradha</span> and <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>Kasun</span> works here
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '11px', color: '#aaa', mb: '12px', fontFamily: 'Poppins' }}>
                        IT Services and IT Consulting • Colombo, Western<br />
                        10-50 employees
                    </Typography>

                    <Typography sx={{ fontSize: '12px', color: '#888', lineHeight: 1.5, fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default JobDetail;

