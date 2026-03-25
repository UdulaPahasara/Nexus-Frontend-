import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

// --- Shared Components for Reusability ---
import DatePosted from '../partime/datePosted';
import Country from '../partime/country';
import UpDownArrowBtn from '../partime/updowArowbtn';
import FreelanceJobDetail from './freelancejobdetail';
import FreelanceJobCard from '../shared/FreelanceJobCard';

// Company icons
import compCNN from '../../../assets/jobs/company1.webp';
import compUpside from '../../../assets/jobs/company2.webp';
import compSpring from '../../../assets/jobs/company3.webp';
import compEdge from '../../../assets/jobs/company4.webp';
import compWord from '../../../assets/jobs/company5.webp';
import compMe from '../../../assets/jobs/company6.webp';
import compHelp from '../../../assets/jobs/company7.webp';
import saudiFlag from '../../../assets/jobs/county/france.webp';
import posterPic from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';

/**
 * FREELANCE JOBS DATA
 */
const FREELANCE_JOB_DATA = [
    { id: 1, title: 'UI/UX Design for Web App', company: 'Roodwave Pvt Ltd', location: 'Colombo, Sri Lanka | Onsite', time: '2 hours ago', icon: compCNN, type: 'Freelance', status: 'easy-apply', rating: 4, ratingCount: '20k+', budget: '550,000', projectTitle: 'Project Freeze Web Application Lorem Lipsum Isom', poster: posterPic },
    { id: 2, title: 'Brand Identity & Logo Design', company: 'Anura De Silva', location: 'Colombo, Sri Lanka | Onsite', time: '2 hours ago', icon: compUpside, type: 'Freelance', status: 'easy-apply', rating: 5, ratingCount: '10k+', budget: '550,000', projectTitle: 'Design Brand Identity Package for E-commerce', poster: posterPic },
    { id: 3, title: 'Mobile App UI Redesign', company: 'Pixelcraft Studios', location: 'Colombo, Sri Lanka | Onsite', time: '2 hours ago', icon: compSpring, type: 'Freelance', status: 'easy-apply', rating: 3, ratingCount: '5k+', budget: '550,000', projectTitle: 'Redesign Mobile App UI for iOS Platform', poster: posterPic },
    { id: 4, title: 'E-commerce Website Front-End', company: 'Skylance Digital', location: 'Colombo, Sri Lanka | Onsite', time: '2 hours ago', icon: compEdge, type: 'Freelance', status: 'easy-apply', rating: 4, ratingCount: '8k+', budget: '550,000', projectTitle: 'Build E-commerce Front-End with React', poster: posterPic },
    { id: 5, title: 'Social Media Creative Assets', company: 'Craftly Media', location: 'Colombo, Sri Lanka | Onsite', time: '2 hours ago', icon: compWord, type: 'Freelance', status: 'easy-apply', rating: 4, ratingCount: '12k+', budget: '550,000', projectTitle: 'Create Monthly Social Media Creative Pack', poster: posterPic },
    { id: 6, title: 'Dashboard UI Design', company: 'CodeNest Labs', location: 'Colombo, Sri Lanka | Onsite', time: '2 hours ago', icon: compMe, type: 'Freelance', status: 'easy-apply', rating: 5, ratingCount: '30k+', budget: '550,000', projectTitle: 'Admin Dashboard Full UI Design', poster: posterPic },
    { id: 7, title: 'WordPress Theme Customization', company: 'HelpConnect Pvt Ltd', location: 'Colombo, Sri Lanka | Onsite', time: '2 hours ago', icon: compHelp, type: 'Freelance', status: 'easy-apply', rating: 3, ratingCount: '2k+', budget: '550,000', projectTitle: 'Customize WordPress Theme for Client Blog', poster: posterPic },
];

/**
 * Freelance Component
 */
const Freelance = ({ darkMode, onBack, onSelectionChange, onApply, selectedJobId }) => {
    const [favorites, setFavorites] = useState([2]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showSortPopup, setShowSortPopup] = useState(false);
    const [selectedSort, setSelectedSort] = useState('recent');
    const [rateMode, setRateMode] = useState('fixed'); // 'fixed' or 'hourly'

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
    };

    const handleJobSelect = (id) => {
        const newId = selectedJobId === id ? null : id;
        if (onSelectionChange) onSelectionChange(newId);
    };

    const currentJob = FREELANCE_JOB_DATA.find(j => j.id === selectedJobId);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: { xs: '100%', md: '580px', lg: selectedJobId ? '1100px' : '780px' },
            gap: { xs: '0px', md: selectedJobId ? '20px' : '0px' },
            height: 'auto',
            minHeight: '800px',
            alignItems: 'flex-start',
            transition: 'width 0.3s ease'
        }}>
            {/* --- LEFT JOBS LIST COLUMN --- */}
            <Box sx={{
                width: { xs: '100%', md: selectedJobId ? '250px' : '100%', lg: selectedJobId ? '400px' : '100%' },
                display: { xs: selectedJobId ? 'none' : 'flex', md: 'flex' },
                flexDirection: 'column',
                height: 'auto',
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                overflow: 'hidden',
                flexShrink: 0,
                transition: 'all 0.3s ease'
            }}>
                {/* ---- HEADER ---- */}
                <Box sx={{ px: '25px', pt: '25px', pb: '10px' }}>
                    {/* Upper Bar (Row 1): Switch-based layout */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: '18px',
                        width: '100%',
                    }}>
                        {/* Row 1 Left: Flag + Date Posted */}
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

                            <Box onClick={() => setShowDateFilter(!showDateFilter)} sx={{
                                border: '1px solid #e0e0e0',
                                borderRadius: '25px',
                                px: '14px',
                                py: '5px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                boxShadow: '0px 1px 3px rgba(0,0,0,0.02)'
                            }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#333', fontFamily: 'Poppins' }}>Date Posted</Typography>
                            </Box>
                        </Box>

                        {/* Row 1 Right: Fixed [Switch] Hourly + Sort */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: rateMode === 'fixed' ? '#333' : '#aaa', fontFamily: 'Poppins' }}>Fixed</Typography>
                                <Box
                                    onClick={() => setRateMode(rateMode === 'fixed' ? 'hourly' : 'fixed')}
                                    sx={{
                                        width: '44px',
                                        height: '24px',
                                        bgcolor: rateMode === 'hourly' ? '#00EA8E' : '#E0E0E0',
                                        borderRadius: '15px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '3px',
                                        left: rateMode === 'hourly' ? '23px' : '3px',
                                        width: '18px',
                                        height: '18px',
                                        bgcolor: '#fff',
                                        borderRadius: '50%',
                                        transition: 'left 0.3s ease',
                                        boxShadow: '0px 1px 3px rgba(0,0,0,0.2)'
                                    }} />
                                </Box>
                                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: rateMode === 'hourly' ? '#333' : '#aaa', fontFamily: 'Poppins' }}>Hourly</Typography>
                            </Box>

                            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <svg onClick={() => setShowSortPopup(!showSortPopup)} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="3" style={{ cursor: 'pointer' }}>
                                    <path d="M7 20l-4-4m4 4l4-4M7 20V4M17 4l-4 4m4-4l4 4M17 4v16"></path>
                                </svg>
                                {showSortPopup && (
                                    <UpDownArrowBtn darkMode={darkMode} onClose={() => setShowSortPopup(false)} onSelect={(sort) => { setSelectedSort(sort); setShowSortPopup(false); }} selectedSort={selectedSort} />
                                )}
                            </Box>
                        </Box>
                    </Box>

                    {/* Lower Bar (Row 2): Filter, Heart, All [LEFT] ... Easy/Remote/Duration [RIGHT] */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
                        {/* Row 2 Left: Icons and All pill */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Box sx={{
                                bgcolor: '#f0f0f0',
                                width: '34px', height: '34px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.5">
                                    <path d="M3 6h18M6 12h12M10 18h4"></path>
                                </svg>
                            </Box>
                            <Box onClick={() => setShowOnlyFavorites(!showOnlyFavorites)} sx={{
                                bgcolor: '#f0f0f0',
                                width: '34px', height: '34px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill={showOnlyFavorites ? '#000' : 'none'} stroke="#000" strokeWidth="2.5">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </Box>
                            <Box sx={{
                                bgcolor: '#efefef',
                                px: '16px', py: '6px',
                                borderRadius: '20px',
                                fontSize: '13px',
                                color: '#000',
                                fontWeight: 800,
                                cursor: 'pointer',
                                fontFamily: 'Poppins',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                All
                            </Box>
                        </Box>

                        {/* Row 2 Right: Easy Apply, Remote, Duration */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            overflowX: 'auto',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' }
                        }}>
                            {['Easy Apply', 'Remote', 'Duration'].map(label => (
                                <Box key={label} sx={{
                                    border: '1px solid #E0E0E0',
                                    borderRadius: '25px',
                                    px: '14px',
                                    py: '5px',
                                    cursor: 'pointer',
                                    bgcolor: '#fff',
                                    whiteSpace: 'nowrap'
                                }}>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#333', fontFamily: 'Poppins' }}>{label}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {selectedJobId && (
                        <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px' }}>Top freelance picks for you</Typography>
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
                    {FREELANCE_JOB_DATA.filter(job => !showOnlyFavorites || favorites.includes(job.id)).map((job) => (
                        <FreelanceJobCard
                            key={job.id}
                            job={job}
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

            {/* --- JOB DETAIL SPLIT VIEW --- */}
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
                    height: { xs: 'auto', md: '800px' },
                }}>
                    <FreelanceJobDetail
                        darkMode={darkMode}
                        job={currentJob}
                        onBack={() => handleJobSelect(selectedJobId)}
                    />
                </Box>
            )}

            {/* Date Filter Modal */}
            {showDateFilter && (
                <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.4)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', p: '10px' }}>
                    <DatePosted darkMode={darkMode} onClose={() => setShowDateFilter(false)} onNext={() => setShowDateFilter(false)} />
                </Box>
            )}
        </Box>
    );
};

export default Freelance;
