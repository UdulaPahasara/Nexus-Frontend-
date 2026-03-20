import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Reusing some assets if available, otherwise placeholders
import comp1 from '../../../../assets/jobs/company1.webp';
import comp2 from '../../../../assets/jobs/company2.webp';
import comp3 from '../../../../assets/jobs/company3.webp';

const FEATURED_JOBS = [
    { id: 1, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp1, type: 'Part-Time' },
    { id: 2, title: 'Graphic Designer (Remote)', company: 'CreativEdge', location: 'Colombo, Sri Lanka | Remote', time: '5 hours ago', icon: comp2, type: 'Part-Time' },
    { id: 3, title: 'Graphic Designer (Remote)', company: 'CreativEdge', location: 'Colombo, Sri Lanka | Remote', time: '5 hours ago', icon: comp3, type: 'Part-Time' },
];

const FeaturedJobItem = ({ job, darkMode }) => (
    <Box sx={{
        display: 'flex',
        gap: '10px',
        width: '100%',
        height: '71px',
        alignItems: 'flex-start',
        mb: '12px'
    }}>
        <Box
            component="img"
            src={job.icon}
            sx={{
                width: '50px',
                height: '50px',
                borderRadius: '10px',
                objectFit: 'cover',
                flexShrink: 0
            }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: darkMode ? '#fff' : '#000',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {job.title}
                </Typography>
                <Box sx={{
                    bgcolor: '#8ED2A4',
                    color: '#000',
                    px: '6px',
                    py: '1px',
                    borderRadius: '10px',
                    fontSize: '9px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px'
                }}>
                    <AccessTimeIcon sx={{ fontSize: '10px' }} />
                    {job.type}
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mt: '1px' }}>
                <Typography sx={{ fontSize: '11px', fontWeight: 500, color: darkMode ? '#888' : '#666', fontFamily: 'Poppins' }}>
                    {job.company}
                </Typography>
                <CheckCircleIcon sx={{ fontSize: '12px', color: '#0077B5' }} />
                <Typography sx={{ fontSize: '11px', color: '#aaa', fontFamily: 'Poppins' }}>
                    {job.location}
                </Typography>
            </Box>

            <Typography sx={{
                fontSize: '10px',
                color: '#aaa',
                fontFamily: 'Poppins',
                mt: '1px',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet...
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '2px' }}>
                <Typography sx={{ fontSize: '10px', color: '#aaa', fontFamily: 'Poppins' }}>{job.time}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Box sx={{ color: '#00E783', display: 'flex' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </Box>
                    <Typography sx={{ fontSize: '10px', color: '#888', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
);

const FeaturedJobs = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '372px',
            height: '311px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '25px',
            p: '22px',
            boxSizing: 'border-box',
            boxShadow: '0px 4px 30px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '18px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: darkMode ? '#fff' : '#000'
                }}>
                    Show featured jobs
                </Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    color: '#888',
                    cursor: 'pointer'
                }}>
                    View All
                </Typography>
            </Box>

            <Box sx={{ flex: 1, overflowY: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                {FEATURED_JOBS.map(job => (
                    <FeaturedJobItem key={job.id} job={job} darkMode={darkMode} />
                ))}
            </Box>
        </Box>
    );
};

export default FeaturedJobs;
