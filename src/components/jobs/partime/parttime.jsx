import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import DatePosted from './datePosted';
import Country from './country';
import UpDownArrowBtn from './updowArowbtn';
import JobDetail from './jobdetail/jobdetail';


// Company icons (reusing from jobs assets context)
import comp1 from '../../../assets/jobs/company1.webp';
import comp2 from '../../../assets/jobs/company2.webp';
import comp3 from '../../../assets/jobs/company3.webp';
import comp4 from '../../../assets/jobs/company4.webp';
import comp5 from '../../../assets/jobs/company5.webp';
import comp6 from '../../../assets/jobs/company6.webp';
import comp7 from '../../../assets/jobs/company7.webp';

// Reuse job data structure
const JOB_DATA = [
    { id: 1, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp1, type: 'Part-Time', status: 'already-applied' },
    { id: 2, title: 'Graphic Designer (Remote)', company: 'CreativEdge', location: 'Colombo, Sri Lanka | Remote', time: '5 hours ago', icon: comp2, type: 'Part-Time', status: 'easy-apply' },
    { id: 3, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp3, type: 'Part-Time', status: 'easy-apply' },
    { id: 4, title: 'Junior Frontend Developer', company: 'CreativEdge', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp4, type: 'Part-Time', status: 'already-applied' },
    { id: 5, title: 'Content Writer', company: 'WordNest', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp5, type: 'Part-Time', status: 'easy-apply' },
    { id: 6, title: 'Customer Support Agent', company: 'BrandNova', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp6, type: 'Part-Time', status: 'easy-apply' },
    { id: 7, title: 'Video Editor', company: 'HelpConnect Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp7, type: 'Part-Time', status: 'already-applied' },
    { id: 8, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp1, type: 'Part-Time', status: 'easy-apply' },
];

const JobCard = ({ job, darkMode, isFavorite, onToggleFavorite, onClick, isActive }) => (
    <Box
        onClick={onClick}
        sx={{
            width: '100%',
            cursor: 'pointer',
            display: 'flex',
            gap: '15px',
            py: '15px',
            px: '15px',
            borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
            position: 'relative',
            bgcolor: isActive ? (darkMode ? 'rgba(255,255,255,0.05)' : '#f0f7f4') : 'transparent',
            borderRadius: '12px',
            transition: 'all 0.2s',
            mb: '5px',
            '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.08)' : '#f9f9f9' }
        }}>
        {/* Close Button on Card */}
        <Box sx={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', color: '#888', '&:hover': { color: '#000' } }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </Box>

        <Box
            component="img"
            src={job.icon}
            sx={{
                width: '64px',
                height: '64px',
                borderRadius: '12px',
                objectFit: 'cover',
                flexShrink: 0
            }}
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* Title and Chip Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '2px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: darkMode ? '#fff' : '#000',
                    lineHeight: 1.2
                }}>
                    {job.title}
                </Typography>
                <Box sx={{
                    bgcolor: '#8ED2A4',
                    color: '#000',
                    px: '8px',
                    py: '2px',
                    borderRadius: '12px',
                    fontSize: '9px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flexShrink: 0
                }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {job.type}
                </Box>
            </Box>

            {/* Company and Location Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '4px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '11px',
                    color: darkMode ? '#888' : '#777',
                    lineHeight: 1.2
                }}>
                    {job.company}
                </Typography>
                <Box sx={{ width: '12px', height: '12px', bgcolor: '#0077B5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '8px' }}>
                    ✓
                </Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: darkMode ? '#666' : '#999',
                    lineHeight: 1.2
                }}>
                    • {job.location}
                </Typography>
            </Box>

            {/* Description Fragment - Compact */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '10px',
                color: darkMode ? '#888' : '#777',
                mb: '6px',
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet...
            </Typography>

            {/* Footer Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Typography sx={{ fontSize: '10px', color: '#aaa', fontFamily: 'Poppins' }}>{job.time}</Typography>

                {job.status === 'easy-apply' && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#00EA8E' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </Box>
                        <Typography sx={{ fontSize: '10px', color: '#888', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                    </Box>
                )}

                {job.status === 'already-applied' && (
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

const PartTime = ({ darkMode, onBack }) => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showSortPopup, setShowSortPopup] = useState(false);
    const [selectedSort, setSelectedSort] = useState('recent');
    const [selectedJobId, setSelectedJobId] = useState(1);
    const [showMobileDetail, setShowMobileDetail] = useState(false);



    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: '20px',
            width: '100%',
            p: { xs: 0, lg: '20px' },
            boxSizing: 'border-box',
            height: '100vh',
            bgcolor: darkMode ? '#13131d' : '#f8f9fa'
        }}>
            {/* LEFT COLUMN: Master List */}
            <Box sx={{
                width: { xs: '100%', lg: '400px' },
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                overflow: 'hidden',
                display: { xs: showMobileDetail ? 'none' : 'flex', lg: 'flex' },
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                flexShrink: 0
            }}>
                {/* Master List Header */}
                <Box sx={{ px: '25px', pt: '25px', pb: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: 700,
                        color: darkMode ? '#fff' : '#000'
                    }}>
                        Top job picks for you
                    </Typography>
                    <Typography sx={{ fontSize: '11px', color: '#888', cursor: 'pointer', fontFamily: 'Poppins', fontWeight: 500 }}>
                        View All
                    </Typography>
                </Box>

                <Typography sx={{
                    px: '25px',
                    pb: '15px',
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#888'
                }}>
                    43 results found
                </Typography>





                {/* Job List Container */}
                <Box sx={{
                    flex: 1,
                    overflowY: 'auto',
                    px: '30px',
                    pb: '20px',
                    '&::-webkit-scrollbar': { display: 'none' }
                }}>
                    {JOB_DATA
                        .filter(job => !showOnlyFavorites || favorites.includes(job.id))
                        .map(job => (
                            <JobCard
                                key={job.id}
                                job={job}
                                darkMode={darkMode}
                                isFavorite={favorites.includes(job.id)}
                                onToggleFavorite={toggleFavorite}
                                onClick={() => {
                                    setSelectedJobId(job.id);
                                    setShowMobileDetail(true);
                                }}
                                isActive={selectedJobId === job.id}
                            />
                        ))}

                </Box>
            </Box>

            {/* RIGHT COLUMN: Detail View (Desktop only or conditional) */}
            <Box sx={{
                flex: 1,
                display: { xs: showMobileDetail ? 'block' : 'none', lg: 'block' },
                height: '100%',
                overflow: 'hidden'
            }}>
                <JobDetail
                    darkMode={darkMode}
                    job={JOB_DATA.find(j => j.id === selectedJobId)}
                    onBack={() => setShowMobileDetail(false)}
                />

            </Box>


            {/* Date Filter Popup Overlay */}
            {showDateFilter && (
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.4)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: '10px'
                }}>
                    <DatePosted
                        darkMode={darkMode}
                        onClose={() => setShowDateFilter(false)}
                        onNext={() => setShowDateFilter(false)}
                    />
                </Box>
            )}
        </Box>
    );
};

export default PartTime;
