import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// Assets
import comp1 from '../../../../assets/jobs/company1.webp';
import comp2 from '../../../../assets/jobs/company2.webp';
import comp3 from '../../../../assets/jobs/company3.webp';

const FEATURED_JOBS = [
    {
        id: 1,
        title: 'UI/UX Designer (Part-Time)',
        company: 'Pixel Studio Pvt Ltd',
        location: 'Colombo, Sri Lanka',
        time: '3 hours ago',
        icon: comp1,
        type: 'Part-Time',
        easyApply: true,
        alreadyApplied: true
    },
    {
        id: 2,
        title: 'Graphic Designer (Remote)',
        company: 'CreativEdge',
        location: 'Colombo, Sri Lanka | Remote',
        time: '5 hours ago',
        icon: comp2,
        type: 'Part-Time',
        easyApply: true,
        alreadyApplied: false
    },
    {
        id: 3,
        title: 'Graphic Designer (Remote)',
        company: 'CreativEdge',
        location: 'Colombo, Sri Lanka | Remote',
        time: '5 hours ago',
        icon: comp3,
        type: 'Part-Time',
        easyApply: true,
        alreadyApplied: false
    },
];

const FeaturedJobItem = ({ job, darkMode, isLast }) => (
    <Box sx={{
        width: '100%',
        display: 'flex',
        gap: '12px',
        pb: isLast ? 0 : '15px',
        mb: isLast ? 0 : '15px',
        borderBottom: isLast ? 'none' : (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef'),
        alignItems: 'flex-start'
    }}>
        <Box
            component="img"
            src={job.icon}
            sx={{
                width: '54px',
                height: '54px',
                borderRadius: '12px',
                objectFit: 'cover',
                flexShrink: 0
            }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* Title and Chip Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', mb: '2px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: darkMode ? '#fff' : '#000',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '180px'
                }}>
                    {job.title}
                </Typography>
                <Box sx={{
                    bgcolor: '#8ED2A4',
                    color: '#000',
                    px: '8px',
                    py: '2px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flexShrink: 0
                }}>
                    <AccessTimeIcon sx={{ fontSize: '10px' }} />
                    <Typography sx={{ fontSize: '9px', fontWeight: 700, fontFamily: 'Poppins' }}>{job.type}</Typography>
                </Box>
            </Box>

            {/* Company and Location Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mb: '4px' }}>
                <Typography sx={{ fontSize: '11px', fontWeight: 700, color: darkMode ? '#fff' : '#333', fontFamily: 'Poppins' }}>
                    {job.company}
                </Typography>
                <CheckCircleIcon sx={{ fontSize: '12px', color: '#0077B5' }} />
                <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                    {job.location}
                </Typography>
            </Box>

            {/* Description Snippet */}
            <Typography sx={{
                fontSize: '11px',
                color: '#888',
                fontFamily: 'Poppins',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                mb: '6px'
            }}>
                Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet...
            </Typography>

            {/* Status Footer Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: '10px', color: '#aaa', fontFamily: 'Poppins', fontWeight: 500 }}>
                    {job.time}
                </Typography>

                {job.easyApply && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#00EA8E' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </Box>
                        <Typography sx={{ fontSize: '10px', color: '#888', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                    </Box>
                )}

                {job.alreadyApplied && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#0077B5' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                            </svg>
                        </Box>
                        <Typography sx={{ fontSize: '10px', color: '#888', fontWeight: 600, fontFamily: 'Poppins' }}>Already Applied</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    </Box>
);

const FeaturedJobs = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '372px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '25px',
            p: '24px',
            boxSizing: 'border-box',
            boxShadow: '0px 4px 30px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Poppins, sans-serif'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: darkMode ? '#fff' : '#000'
                }}>
                    Show featured jobs
                </Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#888',
                    cursor: 'pointer'
                }}>
                    View All
                </Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
                {FEATURED_JOBS.map((job, index) => (
                    <FeaturedJobItem
                        key={job.id}
                        job={job}
                        darkMode={darkMode}
                        isLast={index === FEATURED_JOBS.length - 1}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default FeaturedJobs;
