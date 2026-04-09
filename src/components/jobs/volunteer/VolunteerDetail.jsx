import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

// Icons for Perks & Benefits
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GroupsIcon from '@mui/icons-material/Groups';

// Assets
import easyApplyIcon from '../../../assets/login/login.webp';
import mp5 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import ShareJob from '../partime/sharejob';

// Attachment Assets
import post1 from '../../../assets/Home/post/post/post1.0.webp';
import post2 from '../../../assets/Home/post/post/post2.0.webp';
import post3 from '../../../assets/Home/post/post/post3.0.webp';
import post4 from '../../../assets/Home/post/post/post1.2.webp';
import post5 from '../../../assets/Home/post/post/post2.2.webp';

const VolunteerDetail = ({ darkMode, onBack, job, onApply }) => {
    const [shareAnchorEl, setShareAnchorEl] = useState(null);

    const currentJob = job || {
        id: 1,
        title: 'Eco Campaign Organizer',
        company: 'GreenSpark Initiative',
        location: 'Vancouver, Canada | Remote',
        time: '3 hours ago',
        companyLogo: post1, // Placeholder if none
    };

    const attachments = [post1, post2, post3, post4, post5];

    const responsibilities = [
        'Monitor and report campaign progress',
        'Create engaging content',
        'Collaborate with volunteers, NGOs, and local partners',
        'Plan and execute environmental awareness campaigns'
    ];

    const skills = [
        'Project Management',
        'Communication Skills',
        'Creativity and Content Creation',
        'Passion For Environmental Issues'
    ];

    const perks = [
        { icon: <CardMembershipIcon sx={{ fontSize: '18px' }} />, label: 'Certificate' },
        { icon: <RestaurantIcon sx={{ fontSize: '18px' }} />, label: 'Meals' },
        { icon: <AutoGraphIcon sx={{ fontSize: '18px' }} />, label: 'Experience' },
        { icon: <GroupsIcon sx={{ fontSize: '18px' }} />, label: 'Networking' },
    ];

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
                        <ArrowBackIosNewIcon sx={{ fontSize: { xs: '18px', md: '18px' }, display: { xs: 'block', md: 'none' } }} />
                        <CloseIcon sx={{ fontSize: '18px', display: { xs: 'none', md: 'block' } }} />
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
                                width: { xs: '56px', sm: '64px' },
                                height: { xs: '56px', sm: '64px' },
                                borderRadius: '14px',
                                objectFit: 'cover',
                            }}
                        />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography sx={{ fontSize: { xs: '18px', sm: '22px' }, fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>
                                    {currentJob.company}
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '18px', color: '#1B95E0' }} />
                            </Box>
                            <Typography sx={{ fontSize: '14px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                                {currentJob.location}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5', p: '10px', display: { xs: 'none', sm: 'inline-flex' } }}>
                        <NotificationsNoneIcon sx={{ fontSize: '24px', color: '#666' }} />
                    </IconButton>
                </Box>

                {/* --- TITLE & SAVE ROW --- */}
                <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, gap: '15px', mb: '16px', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                    <Button
                        variant="contained"
                        startIcon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>}
                        sx={{
                            bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                            color: darkMode ? '#fff' : '#000',
                            borderRadius: '10px',
                            fontWeight: 700,
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            px: '14px',
                            py: '6px',
                            boxShadow: 'none',
                            fontFamily: 'Poppins',
                            '&:hover': { bgcolor: '#ddd', boxShadow: 'none' }
                        }}
                    >
                        SAVE JOB
                    </Button>
                    <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                            <Typography sx={{
                                fontSize: { xs: '18px', sm: '20px' },
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
                                flexShrink: 0,
                                mt: '4px'
                            }}>
                                {currentJob.time}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Typography sx={{ fontSize: '13px', color: '#888', mb: '16px', lineHeight: 1.6, fontFamily: 'Poppins' }}>
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
                    sx={{
                        width: { xs: '100%', sm: '260px' },
                        height: '40px',
                        bgcolor: '#00EA8E',
                        color: '#000',
                        borderRadius: '100px',
                        fontWeight: 700,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        fontFamily: 'Poppins',
                        boxShadow: 'none',
                        mb: '40px',
                        mx: 'auto',
                        display: 'block',
                        '&:hover': { bgcolor: '#00d682', boxShadow: 'none' }
                    }}
                >
                    APPLY NOW
                </Button>

                {/* --- ABOUT JOB SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '24px', mb: '32px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>About Job</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{ fontSize: '11px', color: '#555', fontWeight: 700, fontFamily: 'Poppins' }}>Job Posted by</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f9f9f9', px: '8px', py: '4px', borderRadius: '8px' }}>
                                <Box component="img" src={mp5} sx={{ width: '22px', height: '22px', borderRadius: '50%' }} />
                                <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#000', fontFamily: 'Poppins' }}>Anuradha Perera</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                            { label: 'Opportunity', value: 'Eco Campaign Organizer', tag: 'Volunteer' },
                            { label: 'Job Type', value: '', tag: 'Remote' },
                            { label: 'Location', value: 'Vancouver, Canada' },
                            { label: 'Duration', value: '6 Month' },
                            { label: 'Start Date', value: '2025 March 05' },
                            { label: 'Hours Per Week', value: '20 hours' },
                        ].map((item, idx) => (
                            <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: darkMode ? '#888' : '#333', fontFamily: 'Poppins', minWidth: '150px' }}>{item.label} :</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    {item.value && <Typography sx={{ fontSize: '14px', color: '#666', fontFamily: 'Poppins' }}>{item.value}</Typography>}
                                    {item.tag && (
                                        <Box sx={{
                                            bgcolor: item.tag === 'Volunteer' ? 'rgba(0, 234, 142, 0.2)' : 'rgba(0, 234, 142, 0.4)',
                                            color: item.tag === 'Volunteer' ? '#00EA8E' : '#000',
                                            px: '10px',
                                            py: '2px',
                                            borderRadius: '12px',
                                            fontSize: '10px',
                                            fontWeight: 700,
                                            fontFamily: 'Poppins'
                                        }}>
                                            {item.tag}
                                        </Box>
                                    )}
                                </Box>
                                {item.label === 'Job Type' && <InfoIcon sx={{ fontSize: '14px', color: '#888', ml: '6px' }} />}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* --- ATTACHMENTS SECTION --- */}
                <Box sx={{ mb: '32px' }}>
                    <Typography sx={{ fontSize: '15px', fontWeight: 700, mb: '16px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Attachments</Typography>
                    <Box sx={{ display: 'flex', gap: '12px', overflowX: 'auto', pb: '10px', '&::-webkit-scrollbar': { display: 'none' } }}>
                        {attachments.map((img, idx) => (
                            <Box key={idx} sx={{ position: 'relative', width: '130px', height: '110px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                                <Box component="img" src={img} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                {idx === 2 && (
                                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <PlayArrowIcon sx={{ fontSize: '40px', color: '#fff' }} />
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* --- RESPONSIBILITIES & SKILLS SECTION --- */}
                <Grid container spacing={4} sx={{ mb: '32px' }}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontSize: '15px', fontWeight: 700, mb: '12px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Responsibilities</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {responsibilities.map((text, idx) => (
                                <Typography key={idx} sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins', lineHeight: 1.5 }}>
                                    • {text}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontSize: '15px', fontWeight: 700, mb: '12px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Skills</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {skills.map((text, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '200px' }}>
                                    <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins' }}>• {text}</Typography>
                                    <Box sx={{ bgcolor: '#00EA8E', borderRadius: '2px', width: '14px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* --- PERKS & BENEFITS --- */}
                <Box sx={{ mb: '32px' }}>
                    <Typography sx={{ fontSize: '15px', fontWeight: 700, mb: '16px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Perks & Benefits</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {perks.map((perks, idx) => (
                            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Box sx={{ color: '#666' }}>{perks.icon}</Box>
                                <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>{perks.label}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* --- ABOUT ORGANIZATION SECTION --- */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '32px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: '20px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>About Organization</Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <Box sx={{ width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                <Box component="img" src={easyApplyIcon} sx={{ width: '70%', height: '70%', objectFit: 'contain' }} />
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Typography sx={{ fontWeight: 700, fontSize: '18px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>Pixel Studio Pvt Ltd</Typography>
                                    <CheckCircleIcon sx={{ fontSize: '18px', color: '#1B95E0' }} />
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
                                borderWeight: '2.5px',
                                '&:hover': { bgcolor: 'rgba(0, 234, 142, 0.05)', borderColor: '#00EA8E' }
                            }}
                        >
                            Follow
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '20px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box component="img" src={mp1} sx={{ width: '28px', height: '28px', borderRadius: '50%', border: '2.5px solid #fff' }} />
                            <Box component="img" src={mp6} sx={{ width: '28px', height: '28px', borderRadius: '50%', border: '2.5px solid #fff', ml: '-12px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>
                            <span style={{ fontWeight: 700, color: darkMode ? '#fff' : '#111' }}>Anuradha</span> and <span style={{ fontWeight: 700, color: darkMode ? '#fff' : '#111' }}>Kasun</span> works here
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '13px', color: '#aaa', mb: '16px', fontFamily: 'Poppins', lineHeight: 1.6 }}>
                        IT Services and IT Consulting | Colombo, Western<br />
                        10-50 employees
                    </Typography>

                    <Typography sx={{ fontSize: '14px', color: '#888', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default VolunteerDetail;
