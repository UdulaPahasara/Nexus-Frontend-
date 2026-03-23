import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, IconButton } from '@mui/material';
import DatePosted from './datePosted';
import Country from './country';
import UpDownArrowBtn from './updowArowbtn';
import JobDetail from './jobdetail/jobdetail';
import CloseIcon from '@mui/icons-material/Close';
import saudiFlag from '../../../assets/jobs/county/france.webp'; // Placeholder


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

const JobCard = ({ job, darkMode, isFavorite, onToggleFavorite, onClick, isActive, isCompact }) => (
    <Box
        onClick={onClick}
        sx={{
            width: '100%',
            cursor: 'pointer',
            display: 'flex',
            gap: isCompact ? '8px' : '12px',
            py: isCompact ? '12px' : '20px',
            px: isCompact ? '10px' : '15px',
            borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f0f0f0',
            position: 'relative',
            bgcolor: isActive ? (darkMode ? 'rgba(0, 234, 142, 0.05)' : '#F5F5F5') : 'transparent',
            transition: 'all 0.2s',
            // The active state in user image seems to have a faint border-left or just a grey background. 
            // We use '#F5F5F5' here for lightmode which looks slightly grey like in image.
            borderLeft: isActive ? '3px solid #00EA8E' : '3px solid transparent',
            '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#fcfcfc' }
        }}>

        {/* Heart Icon (Top Right) or Close Icon if active in split view */}
        <Box
            onClick={(e) => {
                e.stopPropagation();
                if (!isCompact) onToggleFavorite(job.id);
            }}
            sx={{ position: 'absolute', top: isCompact ? '12px' : '22px', right: isCompact ? '12px' : '20px', cursor: 'pointer', color: isFavorite && !isCompact ? '#000' : '#888' }}
        >
            {isCompact ? (
                // In compact view, show CloseIcon on INACTIVE cards, nothing on active card.
                !isActive && <CloseIcon sx={{ fontSize: '16px', color: '#666' }} />
            ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            )}
        </Box>

        <Box
            component="img"
            src={job.icon}
            sx={{
                width: isCompact ? '45px' : '64px',
                height: isCompact ? '45px' : '64px',
                borderRadius: '8px',
                objectFit: 'cover',
                mt: '2px',
                flexShrink: 0
            }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0, pr: isCompact ? '20px' : '30px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: isCompact ? '13px' : '18px',
                    color: darkMode ? '#fff' : '#333',
                    lineHeight: 1.2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    {job.title}
                </Typography>
                <Box sx={{
                    bgcolor: '#8ED2A4',
                    color: '#000',
                    px: '6px',
                    py: '2px',
                    borderRadius: '12px',
                    fontSize: '9px',
                    fontWeight: 600,
                    fontFamily: 'Poppins',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                    flexShrink: 0
                }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Part-time
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'nowrap' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: isCompact ? '10px' : '13px',
                    color: darkMode ? '#888' : '#333',
                    lineHeight: 1.2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    {job.company}
                </Typography>
                <Box sx={{ width: isCompact ? '10px' : '14px', height: isCompact ? '10px' : '14px', bgcolor: '#00A0DC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width={isCompact ? "6" : "8"} height={isCompact ? "6" : "8"} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: isCompact ? '10px' : '13px',
                    color: '#888',
                    lineHeight: 1.2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    {isCompact ? job.location.split(',')[0] : job.location}
                </Typography>
            </Box>

            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: isCompact ? '10px' : '12px',
                color: '#888',
                mb: isCompact ? '4px' : '8px',
                lineHeight: 1.2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            }}>
                Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
            </Typography>

            {/* Footer Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: isCompact ? '8px' : '15px', flexWrap: 'nowrap' }}>
                <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#aaa', fontFamily: 'Poppins' }}>{job.time}</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0 }}>
                    <Box sx={{ color: '#8ED2A4', display: 'flex', alignItems: 'center' }}>
                        <svg width={isCompact ? "10" : "14"} height={isCompact ? "10" : "14"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                    </Box>
                    <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#555', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                </Box>

                {job.status === 'already-applied' && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0 }}>
                        <Box sx={{
                            bgcolor: '#00EA8E',
                            color: '#fff',
                            borderRadius: '3px',
                            width: isCompact ? '10px' : '14px',
                            height: isCompact ? '10px' : '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg width={isCompact ? "6" : "10"} height={isCompact ? "6" : "10"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </Box>
                        <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#555', fontWeight: 600, fontFamily: 'Poppins' }}>Already Applied</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    </Box>
);


const PartTime = ({ darkMode, onBack, onSelectionChange, onApply }) => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([2]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showSortPopup, setShowSortPopup] = useState(false);
    const [selectedSort, setSelectedSort] = useState('recent');
    const [selectedJobId, setSelectedJobId] = useState(null);

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
    };

    const handleJobSelect = (id) => {
        const newId = selectedJobId === id ? null : id;
        setSelectedJobId(newId);
        if (onSelectionChange) onSelectionChange(newId);
    };

    const currentJob = JOB_DATA.find(j => j.id === selectedJobId);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: { xs: '100%', md: selectedJobId ? '1100px' : '706px' },
            gap: { xs: '0px', md: selectedJobId ? '20px' : '0px' },
            height: 'auto',
            minHeight: '800px', // Allow full height layout to expand correctly
            alignItems: 'flex-start',
            transition: 'width 0.3s ease'
        }}>
            {/* List column */}
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
                {/* Master List Header */}
                <Box sx={{ px: '25px', pt: '25px', pb: '10px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Box onClick={() => setShowCountryDropdown(!showCountryDropdown)} sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}>
                                <Box component="img" src={selectedCountry?.flag || saudiFlag} sx={{ width: '28px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} />
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                                {showCountryDropdown && (
                                    <Country
                                        darkMode={darkMode}
                                        onClose={() => setShowCountryDropdown(false)}
                                        onSelect={(c) => { setSelectedCountry(c); setShowCountryDropdown(false); }}
                                    />
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
                                <UpDownArrowBtn
                                    darkMode={darkMode}
                                    onClose={() => setShowSortPopup(false)}
                                    onSelect={(sort) => { setSelectedSort(sort); setShowSortPopup(false); }}
                                    selectedSort={selectedSort}
                                />
                            )}
                        </Box>
                    </Box>

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
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: '#888', mt: '10px', px: '25px' }}>
                        43 results found
                    </Typography>
                )}

                <Box sx={{ px: '15px', pb: '20px' }}>
                    {JOB_DATA
                        .filter(job => !showOnlyFavorites || favorites.includes(job.id))
                        .map(job => (
                            <JobCard
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
                    display: { xs: 'flex', md: 'flex' },
                    flexDirection: 'column',
                    bgcolor: '#fff',
                    borderRadius: '15px',
                    boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                    overflow: 'hidden',
                    height: '800px', // Define fixed height so the JobDetail internal scroll works
                }}>
                    <JobDetail
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

export default PartTime;
