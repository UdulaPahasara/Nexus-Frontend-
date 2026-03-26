import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import VolunteerJobCard from '../shared/VolunteerJobCard';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FilterListIcon from '@mui/icons-material/FilterList';

// --- Shared Components for Reusability ---
import DatePosted from '../partime/datePosted';
import Country from '../partime/country';
import UpDownArrowBtn from '../partime/updowArowbtn';
import VolunteerDetail from './VolunteerDetail';

// Backgrounds
import volBack1 from '../../../assets/jobs/volenteer/volback1.webp';
import volBack2 from '../../../assets/jobs/volenteer/volback2.webp';
import volBack3 from '../../../assets/jobs/volenteer/volback3.webp';

// Logos
import company1 from '../../../assets/jobs/company1.webp';
import company2 from '../../../assets/jobs/company2.webp';
import company4 from '../../../assets/jobs/company4.webp';

// Avatar & Other Assets
import avatar from '../../../assets/Home/propffun/profilepic.webp';
import saudiFlag from '../../../assets/jobs/county/france.webp';

const VOLUNTEER_DATA = [
    { id: 1, title: 'Eco Campaign Organizer', company: 'GreenSpark Initiative', location: 'Vancouver, Canada | Remote', backgroundImg: volBack1, companyLogo: company1, logoBg: '#2151FF', postedByAvatar: avatar, time: '1 day ago' },
    { id: 2, title: 'Community Outreach', company: 'Help Hands', location: 'New York, USA | Remote', backgroundImg: volBack2, companyLogo: company2, logoBg: '#000000', postedByAvatar: avatar, time: '5 hours ago' },
    { id: 3, title: 'Educational Tutor', company: 'Teach Now', location: 'London, UK | Hybrid', backgroundImg: volBack3, companyLogo: company4, logoBg: '#EB1414', postedByAvatar: avatar, time: '3 hours ago' }
];

const Volunteer = ({ darkMode, onBack, onSelectionChange, onApply, selectedJobId }) => {
    const [favorites, setFavorites] = useState([2]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
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

    const currentJob = VOLUNTEER_DATA.find(j => j.id === selectedJobId);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: { xs: '100%', md: selectedJobId ? '950px' : '700px', lg: selectedJobId ? '1300px' : '850px' },
            gap: { xs: '0px', md: selectedJobId ? '20px' : '0px' },
            height: 'auto',
            minHeight: '800px',
            alignItems: 'flex-start',
            transition: 'all 0.3s ease'
        }}>
            {/* List column */}
            <Box sx={{
                width: { xs: '100%', md: selectedJobId ? '380px' : '100%', lg: selectedJobId ? '500px' : '100%' },
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
                {/* Header Row */}
                <Box sx={{ px: '25px', pt: '25px', pb: '10px' }}>
                    {/* Row 1: Back Button & Context [Left] ... Sort [Right] */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '18px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <ArrowBackIosNewIcon onClick={onBack} sx={{ fontSize: '18px', cursor: 'pointer', color: darkMode ? '#fff' : '#333' }} />
                            <Box onClick={() => setShowCountryDropdown(!showCountryDropdown)} sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}>
                                <Box component="img" src={selectedCountry?.flag || saudiFlag} sx={{ width: '28px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} />
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                                {showCountryDropdown && (
                                    <Country darkMode={darkMode} onClose={() => setShowCountryDropdown(false)} onSelect={(c) => { setSelectedCountry(c); setShowCountryDropdown(false); }} />
                                )}
                            </Box>

                            <Box onClick={() => setShowDateFilter(!showDateFilter)} sx={{ border: '1px solid #e0e0e0', borderRadius: '25px', px: '14px', py: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#333', fontFamily: 'Poppins' }}>Date Posted</Typography>
                            </Box>
                        </Box>

                        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <svg onClick={() => setShowSortPopup(!showSortPopup)} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#fff" : "#222"} strokeWidth="3" style={{ cursor: 'pointer' }}>
                                <path d="M7 20l-4-4m4 4l4-4M7 20V4M17 4l-4 4m4-4l4 4M17 4v16"></path>
                            </svg>
                            {showSortPopup && (
                                <UpDownArrowBtn darkMode={darkMode} onClose={() => setShowSortPopup(false)} onSelect={(sort) => { setSelectedSort(sort); setShowSortPopup(false); }} selectedSort={selectedSort} />
                            )}
                        </Box>
                    </Box>

                    {/* Row 2: Icons + All [Left] ... Pills [Right] */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Box sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f0f0f0', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <FilterListIcon sx={{ fontSize: '18px', color: darkMode ? '#aaa' : '#222' }} />
                            </Box>
                            <Box onClick={() => setShowOnlyFavorites(!showOnlyFavorites)} sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f0f0f0', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill={showOnlyFavorites ? "#000" : "none"} stroke={darkMode ? "#fff" : "#000"} strokeWidth="2.5">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </Box>
                            <Box sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#efefef', px: '16px', py: '6px', borderRadius: '20px', fontSize: '13px', color: darkMode ? '#fff' : '#000', fontWeight: 800, cursor: 'pointer', fontFamily: 'Poppins' }}>
                                All
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
                            {['Easy Apply', 'Remote', 'Job type'].map(f => (
                                <Box key={f} sx={{ border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E0E0E0', borderRadius: '25px', px: '14px', py: '5px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#aaa' : '#333', fontFamily: 'Poppins' }}>{f}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {!selectedJobId && (
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: '#888', mt: '10px', px: '25px' }}>
                        101 results found
                    </Typography>
                )}

                <Box sx={{ px: '15px', pb: '20px', flex: 1, overflowY: 'auto', mt: '10px', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
                    {VOLUNTEER_DATA
                        .filter(job => !showOnlyFavorites || favorites.includes(job.id))
                        .map(job => (
                            <VolunteerJobCard
                                key={job.id}
                                job={job}
                                darkMode={darkMode}
                                isActive={selectedJobId === job.id}
                                isCompact={!!selectedJobId}
                                onClick={() => handleJobSelect(job.id)}
                            />
                        ))}
                </Box>
            </Box>

            {selectedJobId && (
                <Box sx={{
                    flex: 1,
                    bgcolor: '#fff',
                    borderRadius: '15px',
                    boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    minHeight: '800px',
                    height: { xs: 'auto', md: '800px' },
                }}>
                    <VolunteerDetail
                        darkMode={darkMode}
                        job={currentJob}
                        onBack={() => handleJobSelect(selectedJobId)}
                        onApply={onApply}
                    />
                </Box>
            )}

            {showDateFilter && (
                <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.4)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', p: '10px' }}>
                    <DatePosted darkMode={darkMode} onClose={() => setShowDateFilter(false)} onNext={() => setShowDateFilter(false)} />
                </Box>
            )}
        </Box>
    );
};

export default Volunteer;
