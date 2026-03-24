import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

// --- Shared Components for Reusability ---
import DatePosted from '../partime/datePosted';
import Country from '../partime/country';
import UpDownArrowBtn from '../partime/updowArowbtn';
import JobDetail from '../partime/jobdetail/jobdetail'; // Inheriting JobDetail format completely
import JobCard from '../shared/JobCard'; // The newly extracted generic JobCard component

// Company icons matching the exact mockup
import compCNN from '../../../assets/jobs/company1.webp';
import compUpside from '../../../assets/jobs/company2.webp';
import compSpring from '../../../assets/jobs/company3.webp';
import compEdge from '../../../assets/jobs/company4.webp';
import compWord from '../../../assets/jobs/company5.webp';
import compMe from '../../../assets/jobs/company6.webp';
import compHelp from '../../../assets/jobs/company7.webp';
import saudiFlag from '../../../assets/jobs/county/france.webp'; // Placeholder flag

/**
 * FULL-TIME JOBS DATA
 * 
 * Pre-configured list of jobs matching the user's uploaded layout mockups.
 */
const FULLTIME_JOB_DATA = [
    { id: 1, title: 'UI/UX Designer (Full-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: compCNN, type: 'Full-Time', status: 'already-applied' },
    { id: 2, title: 'Graphic Designer (Remote)', company: 'CreativEdge', location: 'Colombo, Sri Lanka | Remote', time: '5 hours ago', icon: compUpside, type: 'Full-Time', status: 'easy-apply' },
    { id: 3, title: 'UI/UX Designer (Full-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: compSpring, type: 'Full-Time', status: 'already-applied' },
    { id: 4, title: 'Junior Frontend Developer', company: 'CreativEdge', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: compEdge, type: 'Full-Time', status: 'already-applied' },
    { id: 5, title: 'Content Writer', company: 'WordNest', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: compWord, type: 'Full-Time', status: 'already-applied' },
    { id: 6, title: 'Customer Support Agent', company: 'BrandNova', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: compMe, type: 'Full-Time', status: 'already-applied' },
    { id: 7, title: 'Video Editor', company: 'HelpConnect Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: compHelp, type: 'Full-Time', status: 'already-applied' },
    { id: 8, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: compCNN, type: 'Part-Time', status: 'already-applied' },
];

/**
 * FullTime Component
 * 
 * Exposes the fully-fleshed out Full-Time Jobs tab layout. 
 * Responsively matches the part-time equivalent with independent data and state context.
 */
const FullTime = ({ darkMode, onBack, onSelectionChange, onApply, selectedJobId }) => {
    const navigate = useNavigate();

    // --- Local State Handling ---
    const [favorites, setFavorites] = useState([2]); // Default filled heart mockup state
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    // Filter Popups State
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showSortPopup, setShowSortPopup] = useState(false);
    const [selectedSort, setSelectedSort] = useState('recent');

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
    };

    const handleJobSelect = (id) => {
        const newId = selectedJobId === id ? null : id;
        if (onSelectionChange) onSelectionChange(newId);
    };

    const currentJob = FULLTIME_JOB_DATA.find(j => j.id === selectedJobId);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: { xs: '100%', md: selectedJobId ? '1100px' : '706px' },
            gap: { xs: '0px', md: selectedJobId ? '20px' : '0px' },
            height: 'auto',
            minHeight: '800px',
            alignItems: 'flex-start',
            transition: 'width 0.3s ease'
        }}>
            {/* --- LEFT (OR FULL-WIDTH) JOBS LIST COLUMN --- */}
            <Box sx={{
                width: { xs: '100%', md: selectedJobId ? '400px' : '100%' },
                display: { xs: selectedJobId ? 'none' : 'flex', md: 'flex' },
                flexDirection: 'column',
                height: 'auto',
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                overflow: 'hidden',
                flexShrink: 0,
                transition: 'width 0.3s ease'
            }}>
                {/* Headers & Complex Context Filters */}
                <Box sx={{ px: '25px', pt: '25px', pb: '10px' }}>

                    {/* Upper Action Bar: Country & Core Sorting */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Box onClick={() => setShowCountryDropdown(!showCountryDropdown)} sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}>
                                <Box component="img" src={selectedCountry?.flag || saudiFlag} sx={{ width: '28px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} />
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                                {showCountryDropdown && (
                                    <Country darkMode={darkMode} onClose={() => setShowCountryDropdown(false)} onSelect={(c) => { setSelectedCountry(c); setShowCountryDropdown(false); }} />
                                )}
                            </Box>

                            <Box onClick={() => setShowDateFilter(!showDateFilter)} sx={{ border: '1px solid #e0e0e0', borderRadius: '20px', px: '15px', py: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#333', fontFamily: 'Poppins' }}>Date Posted</Typography>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </Box>
                        </Box>

                        <Box sx={{ position: 'relative' }}>
                            <svg onClick={() => setShowSortPopup(!showSortPopup)} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" style={{ cursor: 'pointer' }}>
                                <path d="M7 20l-4-4m4 4l4-4M7 20V4M17 4l-4 4m4-4l4 4M17 4v16"></path>
                            </svg>
                            {showSortPopup && (
                                <UpDownArrowBtn darkMode={darkMode} onClose={() => setShowSortPopup(false)} onSelect={(sort) => { setSelectedSort(sort); setShowSortPopup(false); }} selectedSort={selectedSort} />
                            )}
                        </Box>
                    </Box>

                    {/* Highly Responsive Advanced Options Filter Row */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        overflowX: 'auto',
                        width: '100%',
                        pb: '5px',
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none'
                    }}>
                        <Box sx={{ bgcolor: '#f5f5f5', p: '8px', borderRadius: '50%', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                                <path d="M3 6h18M6 12h12M10 18h4"></path>
                            </svg>
                        </Box>
                        <Box onClick={() => setShowOnlyFavorites(!showOnlyFavorites)} sx={{ bgcolor: '#f5f5f5', p: '8px', borderRadius: '50%', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill={showOnlyFavorites ? "#000" : "none"} stroke="#000" strokeWidth="2.5">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </Box>
                        <Box sx={{ bgcolor: '#efefef', px: '15px', py: '6px', borderRadius: '20px', fontSize: '13px', color: '#000', fontWeight: 600, cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
                            All
                        </Box>

                        {['Easy Apply', 'Remote', 'Job type'].map(label => (
                            <Box key={label} sx={{ border: '1px solid #e0e0e0', borderRadius: '20px', px: '12px', py: '6px', cursor: 'pointer', bgcolor: '#fff', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#333', fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>{label}</Typography>
                            </Box>
                        ))}
                    </Box>

                    {selectedJobId && (
                        <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}>Top job picks for you</Typography>
                            <Typography sx={{ fontSize: '11px', color: '#888', cursor: 'pointer', fontFamily: 'Poppins' }}>View All</Typography>
                        </Box>
                    )}
                </Box>

                {!selectedJobId && (
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: darkMode ? '#aaa' : '#666', mt: '10px', px: '25px' }}>
                        43 results found
                    </Typography>
                )}

                <Box sx={{ px: '15px', pb: '20px' }}>
                    {FULLTIME_JOB_DATA.filter(job => !showOnlyFavorites || favorites.includes(job.id)).map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                            jobType={job.type} // Drives FullTime badge dynamically inside shared JobCard
                            darkMode={darkMode}
                            isFavorite={favorites.includes(job.id)}
                            onToggleFavorite={toggleFavorite}
                            onClick={() => handleJobSelect(job.id)}
                            isActive={selectedJobId === job.id}
                            isCompact={!!selectedJobId}
                        />
                    ))}
                </Box>
            </Box>

            {/* --- JOBDETAIL POP-OUT SPLIT VIEW --- */}
            {selectedJobId && (
                <Box sx={{
                    flex: 1,
                    display: { xs: 'flex', md: 'flex' },
                    flexDirection: 'column',
                    bgcolor: '#fff',
                    borderRadius: '15px',
                    boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    height: '800px', // Ensures JobDetail's internal overflow scrolling handles all constraints
                }}>
                    <JobDetail
                        darkMode={darkMode}
                        job={currentJob}
                        onBack={() => handleJobSelect(selectedJobId)}
                        onApply={onApply}
                    />
                </Box>
            )}

            {/* Full-Screen Date Search Modal Rendering Logic */}
            {showDateFilter && (
                <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.4)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', p: '10px' }}>
                    <DatePosted darkMode={darkMode} onClose={() => setShowDateFilter(false)} onNext={() => setShowDateFilter(false)} />
                </Box>
            )}
        </Box>
    );
};

export default FullTime;
