import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import DatePosted from './datePosted';
import Country from './country';
import UpDownArrowBtn from './updowArowbtn';

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
    { id: 1, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp1, type: 'Part-Time' },
    { id: 2, title: 'Graphic Designer (Remote)', company: 'CreativEdge', location: 'Colombo, Sri Lanka | Remote', time: '5 hours ago', icon: comp2, type: 'Part-Time' },
    { id: 3, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp3, type: 'Part-Time' },
    { id: 4, title: 'Junior Frontend Developer', company: 'CreativEdge', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp4, type: 'Part-Time' },
    { id: 5, title: 'Content Writer', company: 'WordNest', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp5, type: 'Part-Time' },
    { id: 6, title: 'Customer Support Agent', company: 'BrandNova', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp6, type: 'Part-Time' },
    { id: 7, title: 'Video Editor', company: 'HelpConnect Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp7, type: 'Part-Time' },
    { id: 8, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp1, type: 'Part-Time' },
];

const JobCard = ({ job, darkMode, isFavorite, onToggleFavorite }) => (
    <Box sx={{
        width: '100%',
        display: 'flex',
        gap: '15px',
        py: '20px',
        borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
        position: 'relative'
    }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '16px',
                        color: darkMode ? '#fff' : '#000',
                    }}>
                        {job.title}
                    </Typography>
                    <Box sx={{
                        bgcolor: '#8ED2A4',
                        color: '#000',
                        px: '8px',
                        py: '2px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {job.type}
                    </Box>
                </Box>
                <Box onClick={() => onToggleFavorite(job.id)} sx={{ cursor: 'pointer' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24"
                        fill={isFavorite ? (darkMode ? "#fff" : "#000") : "none"}
                        stroke={isFavorite ? (darkMode ? "#fff" : "#000") : (darkMode ? "#888" : "#333")}
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transition: 'all 0.2s' }}
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mt: '2px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '13px',
                    color: darkMode ? '#888' : '#666',
                }}>
                    {job.company}
                </Typography>
                <Box sx={{ width: '14px', height: '14px', bgcolor: '#0077B5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '9px' }}>
                    ✓
                </Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '13px',
                    color: darkMode ? '#666' : '#999',
                }}>
                    • {job.location}
                </Typography>
            </Box>

            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '12px',
                color: darkMode ? '#aaa' : '#777',
                mt: '4px',
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
            }}>
                Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', mt: '10px', flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: '11px', color: '#999', fontFamily: 'Poppins' }}>{job.time}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00E783' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <polyline points="17 11 19 13 23 9"></polyline>
                        </svg>
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: '#888', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Box sx={{ width: '14px', height: '14px', bgcolor: '#00E783', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>✓</Box>
                    <Typography sx={{ fontSize: '11px', color: '#888', fontWeight: 600, fontFamily: 'Poppins' }}>Already Applied</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
);

const PartTime = ({ darkMode, onBack }) => {
    const [favorites, setFavorites] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showSortPopup, setShowSortPopup] = useState(false);
    const [selectedSort, setSelectedSort] = useState('recent');

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
    };

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            {/* Top Bar - Header Row */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: '15px', sm: '30px' },
                pt: '25px',
                pb: '10px',
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {/* Flag and dropdown */}
                    <Box sx={{ position: 'relative' }}>
                        <Box
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', p: '4px', borderRadius: '4px', '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' } }}
                        >
                            <Box sx={{
                                width: '32px',
                                height: '24px',
                                bgcolor: '#31764A',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Simple Saudi flag representation or selected country flag */}
                                {selectedCountry ? (
                                    <Box component="img" src={selectedCountry.flag} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <>
                                        <Box sx={{ width: '100%', height: '100%', bgcolor: '#006C35' }} />
                                        <Box sx={{ position: 'absolute', color: '#fff', fontSize: '6px', fontWeight: 700 }}>NEXUS</Box>
                                    </>
                                )}
                            </Box>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#fff" : "#333"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showCountryDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                                <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </Box>

                        {showCountryDropdown && (
                            <Country
                                darkMode={darkMode}
                                onSelect={(country) => {
                                    setSelectedCountry(country);
                                    setShowCountryDropdown(false);
                                }}
                            />
                        )}
                    </Box>

                    <Button
                        onClick={() => setShowDateFilter(true)}
                        sx={{
                            textTransform: 'none',
                            color: darkMode ? '#fff' : '#000',
                            fontFamily: 'Poppins',
                            fontSize: '14px',
                            fontWeight: 600,
                            border: '1px solid #eee',
                            borderRadius: '25px',
                            px: '20px',
                            height: '38px',
                            '&:hover': { border: '1px solid #ddd' }
                        }}>
                        Date Posted
                    </Button>
                </Box>

                <Box sx={{ position: 'relative' }}>
                    <Box
                        onClick={() => setShowSortPopup(!showSortPopup)}
                        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#fff" : "#000"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            {/* Down Arrow */}
                            <path d="M6 5v14"></path>
                            <path d="M3 16l3 3 3-3"></path>

                            {/* Up Arrow */}
                            <path d="M18 19V5"></path>
                            <path d="M15 8l3-3 3 3"></path>
                        </svg>
                    </Box>

                    {showSortPopup && (
                        <UpDownArrowBtn
                            darkMode={darkMode}
                            selectedSort={selectedSort}
                            onSelect={(sort) => {
                                setSelectedSort(sort);
                                setShowSortPopup(false);
                            }}
                        />
                    )}
                </Box>
            </Box>

            {/* Filter Buttons Section - Second Row */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: '15px', sm: '30px' },
                py: '10px',
                gap: '10px',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* Left side icons - Scrollable on mobile if needed */}
                <Box sx={{
                    display: 'flex',
                    gap: { xs: '8px', sm: '12px' },
                    alignItems: 'center',
                    flexShrink: 0
                }}>
                    <Box sx={{
                        width: { xs: '24px', sm: '27px' },
                        height: { xs: '20px', sm: '23px' },
                        bgcolor: darkMode ? '#333' : '#eee',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#fff" : "#000"} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="7" x2="20" y2="7"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                            <line x1="11" y1="17" x2="13" y2="17"></line>
                        </svg>
                    </Box>
                    <Box
                        onClick={() => setShowOnlyFavorites(prev => !prev)}
                        sx={{
                            width: { xs: '32px', sm: '38px' },
                            height: { xs: '32px', sm: '38px' },
                            bgcolor: showOnlyFavorites ? (darkMode ? '#fff' : '#000') : (darkMode ? '#333' : '#eee'),
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            flexShrink: 0
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24"
                            fill={showOnlyFavorites ? (darkMode ? '#000' : '#fff') : "none"}
                            stroke={showOnlyFavorites ? (darkMode ? '#000' : '#fff') : (darkMode ? "#fff" : "#333")}
                            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </Box>
                    <Box sx={{
                        bgcolor: darkMode ? '#333' : '#eee',
                        px: { xs: '16px', sm: '24px' },
                        height: { xs: '32px', sm: '40px' },
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        flexShrink: 0
                    }}>
                        <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, fontWeight: 600, color: darkMode ? '#fff' : '#333', fontFamily: 'Poppins' }}>All</Typography>
                    </Box>
                </Box>

                {/* Right side filter buttons - Scrollable */}
                <Box sx={{
                    display: 'flex',
                    gap: '8px',
                    overflowX: 'auto',
                    flex: 1,
                    justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                    ml: '10px',
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch' // Smooth scroll for iOS
                }}>
                    {['Easy Apply', 'Remote', 'Job type'].map((filter) => (
                        <Button key={filter} sx={{
                            textTransform: 'none',
                            color: darkMode ? '#fff' : '#000',
                            fontFamily: 'Poppins',
                            fontSize: { xs: '11px', sm: '13px' },
                            fontWeight: 600,
                            border: '1px solid #eee',
                            borderRadius: '25px',
                            px: { xs: '12px', sm: '18px' },
                            height: { xs: '30px', sm: '36px' },
                            flexShrink: 0,
                            whiteSpace: 'nowrap',
                            '&:hover': { border: '1px solid #ddd' }
                        }}>
                            {filter}
                        </Button>
                    ))}
                </Box>
            </Box>

            {/* Result Count */}
            <Typography sx={{
                px: '30px',
                pt: '25px',
                pb: '10px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                fontWeight: 600,
                color: darkMode ? '#666' : '#333'
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
                        />
                    ))}
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
