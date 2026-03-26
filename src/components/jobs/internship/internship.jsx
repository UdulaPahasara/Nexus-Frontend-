import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton } from '@mui/material';
import DatePosted from '../partime/datePosted';
import Country from '../partime/country';
import UpDownArrowBtn from '../partime/updowArowbtn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InternshipDetail from './InternshipDetail';
import CloseIcon from '@mui/icons-material/Close';
import saudiFlag from '../../../assets/jobs/county/france.webp';
import InternshipJobCard from '../shared/InternshipJobCard';

// Company icons
import comp1 from '../../../assets/jobs/company1.webp';
import comp2 from '../../../assets/jobs/company2.webp';
import comp3 from '../../../assets/jobs/company3.webp';
import comp4 from '../../../assets/jobs/company4.webp';
import comp5 from '../../../assets/jobs/company5.webp';
import comp6 from '../../../assets/jobs/company6.webp';
import comp7 from '../../../assets/jobs/company7.webp';

const INTERNSHIP_JOB_DATA = [
    { id: 1, title: 'Frontend Developer Intern', company: 'CodeLeap', location: 'Galle, Sri Lanka', time: '1 day ago', icon: comp1, type: 'Internship', duration: '6 Months', isPaid: false, status: 'easy-apply' },
    { id: 2, title: 'Marketing Intern', company: 'BuzzUp Agency', location: 'Colombo, Sri Lanka | Remote', time: '5 hours ago', icon: comp2, type: 'Internship', duration: '6 Months', isPaid: true, status: 'already-applied' },
    { id: 3, title: 'UI/UX Intern', company: 'PixelNest Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp3, type: 'Internship', duration: '3 Months', isPaid: false, status: 'easy-apply' },
    { id: 4, title: 'Content Writing Intern', company: 'WordNest', location: 'Galle, Sri Lanka', time: '2 days ago', icon: comp4, type: 'Internship', duration: '6 Months', isPaid: false, status: 'easy-apply' },
    { id: 5, title: 'Finance Intern', company: 'MoneyMatters Pvt Ltd', location: 'Colombo, Sri Lanka', time: '1 day ago', icon: comp5, type: 'Internship', duration: '6 Months', isPaid: false, status: 'easy-apply' },
    { id: 6, title: 'Software QA Intern', company: 'TestifyTech', location: 'Remote', time: '3 hours ago', icon: comp6, type: 'Internship', duration: '3 Months', isPaid: false, status: 'easy-apply' },
    { id: 7, title: 'Video Editor', company: 'HelpConnect Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp7, type: 'Internship', duration: '6 Months', isPaid: false, status: 'already-applied' },
    { id: 8, title: 'Social Media Intern', company: 'ClickBoost', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp1, type: 'Internship', duration: '6 Months', isPaid: false, status: 'easy-apply' },
];

const Internship = ({ darkMode, onBack, onSelectionChange, onApply, selectedJobId }) => {
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

    const currentJob = INTERNSHIP_JOB_DATA.find(j => j.id === selectedJobId);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: { xs: '100%', md: selectedJobId ? '100%' : '700px', lg: selectedJobId ? '1200px' : '850px' },
            gap: { xs: '0px', md: selectedJobId ? '20px' : '0px' },
            height: 'auto',
            minHeight: '800px',
            alignItems: 'flex-start',
            transition: 'all 0.3s ease'
        }}>
            {/* List column */}
            <Box sx={{
                width: { xs: '100%', md: selectedJobId ? '340px' : '100%', lg: selectedJobId ? '420px' : '100%' },
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
                    {/* Row 1: Left (Flag + Date) ... Right (Sort) */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: '18px'
                    }}>
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

                        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <svg onClick={() => setShowSortPopup(!showSortPopup)} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="3" style={{ cursor: 'pointer' }}>
                                <path d="M7 20l-4-4m4 4l4-4M7 20V4M17 4l-4 4m4-4l4 4M17 4v16"></path>
                            </svg>
                            {showSortPopup && (
                                <UpDownArrowBtn darkMode={darkMode} onClose={() => setShowSortPopup(false)} onSelect={(sort) => { setSelectedSort(sort); setShowSortPopup(false); }} selectedSort={selectedSort} />
                            )}
                        </Box>
                    </Box>

                    {/* Row 2: Left (Icons + All) ... Right (Pills) */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}>
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
                                <svg width="18" height="18" viewBox="0 0 24 24" fill={showOnlyFavorites ? "#000" : "none"} stroke="#000" strokeWidth="2.5">
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
                                flexShrink: 0,
                                whiteSpace: 'nowrap',
                                fontFamily: 'Poppins',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                All
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            overflowX: 'auto',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' }
                        }}>
                            {['Easy Apply', 'Remote', 'Job type'].map(label => (
                                <Box key={label} sx={{
                                    border: '1px solid #E0E0E0',
                                    borderRadius: '25px',
                                    px: '14px',
                                    py: '5px',
                                    cursor: 'pointer',
                                    bgcolor: '#fff',
                                    whiteSpace: 'nowrap'
                                }}>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#333', fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>{label}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {!selectedJobId && (
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: '#888', mt: '10px', px: '25px' }}>
                        43 results found
                    </Typography>
                )}

                <Box sx={{ px: '15px', pb: '20px' }}>
                    {INTERNSHIP_JOB_DATA
                        .filter(job => !showOnlyFavorites || favorites.includes(job.id))
                        .map(job => (
                            <InternshipJobCard
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
                    <InternshipDetail
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

export default Internship;
