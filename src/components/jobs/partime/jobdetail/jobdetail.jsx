import React from 'react';
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

const JobDetail = ({ darkMode, onBack, job }) => {
    const navigate = useNavigate();

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
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
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
                py: '15px',
                borderBottom: '1px solid #efefef'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Box onClick={handleBack} sx={{ cursor: 'pointer', color: '#000' }}>
                        <CloseIcon sx={{ fontSize: '20px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Jobs / Part time
                    </Typography>
                </Box>
                <Box sx={{ color: '#000', cursor: 'pointer' }}>
                    <MoreHorizIcon sx={{ fontSize: '24px' }} />
                </Box>
            </Box>

            <Box sx={{ flex: 1, overflowY: 'auto', p: '24px', '&::-webkit-scrollbar': { display: 'none' } }}>
                {/* --- COMPANY BRANDING --- */}
                <Box sx={{ mb: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={currentJob.icon}
                            sx={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '15px',
                                objectFit: 'cover',
                            }}
                        />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Typography sx={{ fontSize: '24px', fontWeight: 600, color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>
                                    {currentJob.company}
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '20px', color: '#0077B5' }} />
                            </Box>
                            <Typography sx={{ fontSize: '18px', color: '#888', mt: '2px', fontFamily: 'Poppins' }}>
                                {currentJob.location}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton sx={{ bgcolor: '#F5F5F5', borderRadius: '50%', p: '10px' }}>
                        <NotificationsNoneIcon sx={{ fontSize: '24px', color: '#666' }} />
                    </IconButton>
                </Box>

                {/* --- TITLE & SAVE ROW --- */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', mb: '20px' }}>
                    <Button
                        variant="contained"
                        startIcon={<BookmarkBorderIcon sx={{ fontSize: '18px !important' }} />}
                        sx={{
                            bgcolor: '#E8E8E8',
                            color: '#000',
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: '13px',
                            textTransform: 'none',
                            px: '20px',
                            boxShadow: 'none',
                            fontFamily: 'Poppins',
                            '&:hover': { bgcolor: '#ddd', boxShadow: 'none' }
                        }}
                    >
                        SAVE JOB
                    </Button>
                    <Typography sx={{ fontSize: '18px', fontWeight: 600, color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>
                        {currentJob.title}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: '#aaa', fontFamily: 'Poppins' }}>
                        {currentJob.time}
                    </Typography>
                </Box>

                <Typography sx={{ fontSize: '14px', color: '#888', mb: '15px', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                    Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '25px' }}>
                    <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Over 50 people clicked apply
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Application Deadline 2025.04.29
                    </Typography>
                </Box>

                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        bgcolor: '#00EA8E',
                        color: '#000',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '16px',
                        textTransform: 'none',
                        py: '12px',
                        mb: '40px',
                        fontFamily: 'Poppins',
                        '&:hover': { bgcolor: '#00d682' }
                    }}
                >
                    APPLY NOW
                </Button>

                {/* --- ABOUT JOB SECTION --- */}
                <Box sx={{ borderTop: '1px solid #efefef', pt: '30px', mb: '30px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 600, mb: '20px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>About Job</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Position :</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#666', fontFamily: 'Poppins' }}>UI/UX Designer</Typography>
                            <Box sx={{ bgcolor: '#8ED2A4', color: '#000', px: '8px', py: '2px', borderRadius: '100px', fontSize: '10px', fontWeight: 600, fontFamily: 'Poppins' }}>Part-Time</Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Job Type:</Typography>
                            <Box sx={{ border: '1px solid #00EA8E', color: '#00EA8E', px: '8px', py: '2px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, fontFamily: 'Poppins' }}>On-Site</Box>
                            <Box sx={{ border: '1px solid #aaa', color: '#888', px: '8px', py: '2px', borderRadius: '4px', fontSize: '10px', fontWeight: 600, fontFamily: 'Poppins' }}>Hybrid</Box>
                            <Typography sx={{ fontSize: '14px', color: '#888' }}>ⓘ</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Location :</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#666', fontFamily: 'Poppins' }}>Colombo Sri Lanka</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Experience :</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#666', fontFamily: 'Poppins' }}>5 Years</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#333', fontFamily: 'Poppins', minWidth: '120px' }}>Working Hours :</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#666', fontFamily: 'Poppins' }}>9:00 AM – 1:00 PM (Monday, Wednesday, Friday)</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* --- ABOUT THE ROLE SECTION --- */}
                <Box sx={{ borderTop: '1px solid #efefef', pt: '30px', mb: '40px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 600, mb: '20px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>About the role</Typography>
                    <Typography sx={{ fontSize: '14px', color: '#666', lineHeight: 1.6, mb: '20px', fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F9F9F9', p: '12px 20px', borderRadius: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Typography sx={{ fontSize: '12px', color: '#888', fontWeight: 600, fontFamily: 'Poppins' }}>Job Posted by</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px dashed #0077B5', p: '2px 8px', borderRadius: '4px' }}>
                                <Box component="img" src={mp5} sx={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                                <Typography sx={{ fontSize: '12px', color: '#0077B5', fontWeight: 600, fontFamily: 'Poppins' }}>Anuradha Perera</Typography>
                            </Box>
                        </Box>
                        <Button sx={{ textTransform: 'none', color: '#666', fontSize: '12px', fontWeight: 600, bgcolor: '#E8E8E8', borderRadius: '8px', px: '15px', fontFamily: 'Poppins' }}>
                            View company profile
                        </Button>
                    </Box>
                </Box>

                {/* --- ABOUT COMPANY SECTION --- */}
                <Box sx={{ borderTop: '1px solid #efefef', pt: '30px', pb: '20px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 600, mb: '20px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>About Company</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                        <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <Box component="img" src={currentJob.icon} sx={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }} />
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '18px', color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>{currentJob.company}</Typography>
                                    <CheckCircleIcon sx={{ fontSize: '18px', color: '#0077B5' }} />
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
                                fontWeight: 600,
                                px: '25px',
                                fontFamily: 'Poppins',
                                '&:hover': { bgcolor: 'rgba(0, 234, 142, 0.05)', borderColor: '#00EA8E' }
                            }}
                        >
                            Follow
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '20px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box component="img" src={mp1} sx={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #fff' }} />
                            <Box component="img" src={mp6} sx={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #fff', ml: '-8px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>
                            <span style={{ fontWeight: 600, color: '#000' }}>Anuradha</span> and <span style={{ fontWeight: 600, color: '#000' }}>Kasun</span> works here
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '13px', color: '#aaa', mb: '15px', fontFamily: 'Poppins' }}>
                        IT Services and IT Consulting • Colombo, Western<br />
                        10-50 employees
                    </Typography>

                    <Typography sx={{ fontSize: '13px', color: '#888', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default JobDetail;

