import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// We'll use these dummy images from assets as requested or placeholders
import post1 from '../../assets/Home/post/post/post1.0.webp';
import post2 from '../../assets/Home/post/post/post2.0.webp';
import post3 from '../../assets/Home/post/post/post3.0.webp';

// Icons for roles/companies (reused from MyAbout)
import icon1 from '../../assets/jobs/company1.webp';
import icon2 from '../../assets/jobs/company2.webp';
import icon3 from '../../assets/jobs/company3.webp';

const projects = [
    {
        title: 'Spa Ceylon Website Design',
        role: 'UI/UX Designer',
        location: 'Colombo, Western',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Eget Amet Elit Massa Sodales At Consequat. Varius Mi Tristique Sapien Et Aenean Magna. Mus Enim Nunc Vestibulum Suspendisse.',
        date: 'Jan 2022-Sep 2023',
        icon: icon1, // Dark icon for Spa Ceylon
        images: [post1, post2, post3]
    },
    {
        title: 'Cool Planet Website Design and Development',
        role: 'UI/UX Designer',
        location: 'Colombo, Western',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Eget Amet Elit Massa Sodales At Consequat. Varius Mi Tristique Sapien Et Aenean Magna. Mus Enim Nunc Vestibulum Suspendisse.',
        date: 'Jan 2022-Sep 2022',
        icon: icon2, // Blue icon for Cool Planet
        images: [post1, post2, post3, post1]
    },
    {
        title: 'Pick me Mobile App Design',
        role: 'UI/UX Designer',
        location: 'Colombo, Western',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Eget Amet Elit Massa Sodales At Consequat. Varius Mi Tristique Sapien Et Aenean Magna. Mus Enim Nunc Vestibulum Suspendisse.',
        date: 'Jan 2022-Sep 2022',
        icon: icon3, // Dark icon for Pick me
        images: [post1, post2, post3, post1, post2]
    }
];

const CompanyViewAll = ({ darkMode, onCancel }) => {
    const boxBg = darkMode ? '#1e1e2e' : '#f5f5f5';
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#888';

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            borderRadius: '15px',
            bgcolor: darkMode ? '#121212' : '#fff', // outer container matching layout if needed, though they said bg #f5f5f5 for cards
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            pt: '28px',
            pr: '12px',
            pb: '28px',
            pl: '12px',
            boxSizing: 'border-box'
        }}>
            {/* Header if needed, but mockup just shows cards. Let's add a back button for navigation safety */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: '5px' }}>
                <Typography sx={{ cursor: 'pointer', fontSize: '13px', color: subTextColor, '&:hover': { color: textColor } }} onClick={onCancel}>
                    ← Back to Profile
                </Typography>
            </Box>

            {projects.map((proj, idx) => (
                <Box key={idx} sx={{
                    bgcolor: boxBg,
                    borderRadius: '15px',
                    p: '20px',
                    boxShadow: darkMode ? 'none' : '0px 2px 10px rgba(0,0,0,0.02)'
                }}>
                    {/* Top Row: Icon, Title, Role, Visit Site, Location */}
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'flex-start', width: '100%' }}>
                        <Box
                            component="img"
                            src={proj.icon}
                            sx={{ width: '45px', height: '45px', borderRadius: '8px', objectFit: 'cover' }}
                        />

                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Typography sx={{ fontSize: '15px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                                    {proj.title}
                                </Typography>
                                <Button variant="contained" sx={{
                                    bgcolor: '#00E87F',
                                    color: '#000',
                                    textTransform: 'none',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    height: '20px',
                                    borderRadius: '10px',
                                    px: 2,
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                                }}>
                                    Visit Site
                                </Button>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2px' }}>
                                <Typography sx={{ fontSize: '11px', color: subTextColor, fontFamily: 'Poppins' }}>
                                    Role: {proj.role}
                                </Typography>
                                <Typography sx={{ fontSize: '10px', color: subTextColor, fontFamily: 'Poppins' }}>
                                    {proj.location}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Description */}
                    <Typography sx={{ fontSize: '11px', color: textColor, fontFamily: 'Poppins', mt: '15px', lineHeight: 1.5 }}>
                        {proj.description}
                    </Typography>

                    {/* Date */}
                    <Typography sx={{ fontSize: '9px', color: subTextColor, fontFamily: 'Poppins', mb: '15px', mt: '5px' }}>
                        {proj.date}
                    </Typography>

                    {/* Image Thumbnails */}
                    <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {proj.images.map((imgSrc, imgIdx) => (
                            <Box
                                key={imgIdx}
                                component="img"
                                src={imgSrc}
                                sx={{
                                    width: { xs: '80px', sm: '120px' },
                                    height: { xs: '80px', sm: '120px' },
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                    bgcolor: '#000'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default CompanyViewAll;
