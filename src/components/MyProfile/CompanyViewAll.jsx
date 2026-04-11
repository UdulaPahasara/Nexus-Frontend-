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
    const boxBg = darkMode ? 'rgba(255,255,255,0.03)' : '#f5f5f5';
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const accentColor = '#00E87F';

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '640px',
            minHeight: '877px',
            borderRadius: '15px',
            bgcolor: darkMode ? '#121212' : '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            pt: '28px',
            pr: '12px',
            pb: '28px',
            pl: '12px',
            boxSizing: 'border-box',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 2px 12px rgba(0,0,0,0.03)',
            overflow: 'visible'
        }}>
            {/* Header / Back Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: '5px', px: '10px' }}>
                <Typography
                    sx={{
                        cursor: 'pointer',
                        fontSize: '13px',
                        color: subTextColor,
                        fontFamily: 'Poppins',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        '&:hover': { color: accentColor }
                    }}
                    onClick={onCancel}
                >
                    ← Back to Profile
                </Typography>
            </Box>

            {projects.map((proj, idx) => (
                <Box key={idx} sx={{
                    bgcolor: boxBg,
                    borderRadius: '15px',
                    p: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'translateY(-2px)' }
                }}>
                    {/* Top Row: Icon, Title & Role, Visit Site */}
                    <Box sx={{ display: 'flex', gap: '15px', alignItems: 'flex-start', width: '100%' }}>
                        <Box
                            component="img"
                            src={proj.icon}
                            sx={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                                flexShrink: 0,
                                bgcolor: '#000'
                            }}
                        />

                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                                <Typography sx={{
                                    fontSize: { xs: '15px', md: '17px', lg: '18px' },
                                    fontWeight: 700,
                                    color: textColor,
                                    fontFamily: 'Poppins',
                                    lineHeight: 1.2,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    minWidth: 0,
                                    flex: 1
                                }}>
                                    {proj.title}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: accentColor,
                                        color: '#000',
                                        textTransform: 'none',
                                        fontSize: '10px',
                                        fontWeight: 700,
                                        height: '24px',
                                        borderRadius: '12px',
                                        px: 2.5,
                                        boxShadow: 'none',
                                        flexShrink: 0,
                                        '&:hover': { bgcolor: '#00d072', boxShadow: 'none' }
                                    }}
                                >
                                    Visit Site
                                </Button>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '4px', gap: '10px' }}>
                                <Typography sx={{
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: subTextColor,
                                    fontFamily: 'Poppins',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    minWidth: 0,
                                    flex: 1
                                }}>
                                    Role: {proj.role}
                                </Typography>
                                <Typography sx={{ fontSize: '11px', color: subTextColor, fontFamily: 'Poppins', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    {proj.location}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Description */}
                    <Typography sx={{
                        fontSize: '13px',
                        color: darkMode ? '#ccc' : '#444',
                        fontFamily: 'Poppins',
                        mt: '18px',
                        lineHeight: 1.6,
                        opacity: 0.9,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {proj.description}
                    </Typography>

                    {/* Date */}
                    <Typography sx={{
                        fontSize: '11px',
                        color: subTextColor,
                        fontFamily: 'Poppins',
                        mt: '8px',
                        mb: '20px'
                    }}>
                        {proj.date}
                    </Typography>

                    {/* Image Gallery */}
                    <Box sx={{
                        display: 'flex',
                        gap: '12px',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start'
                    }}>
                        {proj.images.map((imgSrc, imgIdx) => (
                            <Box
                                key={imgIdx}
                                component="img"
                                src={imgSrc}
                                sx={{
                                    width: { xs: '80px', sm: '124px' },
                                    height: { xs: '80px', sm: '124px' },
                                    borderRadius: '12px',
                                    objectFit: 'cover',
                                    bgcolor: '#000',
                                    border: darkMode ? '1px solid #333' : '1px solid #eee'
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
