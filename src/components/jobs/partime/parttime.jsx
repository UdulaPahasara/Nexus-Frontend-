import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import DatePosted from './datePosted';
import Country from './country';
import UpDownArrowBtn from './updowArowbtn';
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

const JobCard = ({ job, darkMode, isFavorite, onToggleFavorite, onClick, isActive }) => (
    <Box
        onClick={onClick}
        sx={{
            width: '100%',
            cursor: 'pointer',
            display: 'flex',
            gap: '12px',
            py: '20px',
            px: '15px',
            borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f0f0f0',
            position: 'relative',
            bgcolor: isActive ? (darkMode ? 'rgba(255,255,255,0.05)' : '#fff') : '#fff',
            transition: 'all 0.2s',
            '&:hover': { bgcolor: '#f9f9f9' }
        }}>

        {/* Heart Icon (Top Right) */}
        <Box
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(job.id); }}
            sx={{ position: 'absolute', top: '22px', right: '20px', cursor: 'pointer', color: isFavorite ? '#000' : '#888' }}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
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
            {/* Title Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '4px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#333',
                    lineHeight: 1
                }}>
                    {job.title}
                </Typography>
                <Box sx={{
                    bgcolor: '#8ED2A4',
                    color: '#004a1e',
                    px: '8px',
                    py: '2px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Part-time
                </Box>
            </Box>

            {/* Company Info Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '4px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '13px',
                    color: '#333'
                }}>
                    {job.company}
                </Typography>
                <Box sx={{ width: '14px', height: '14px', bgcolor: '#00A0DC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '13px',
                    color: '#aaa'
                }}>
                    {job.location}
                </Typography>
            </Box>

            {/* Description Snippet */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '12px',
                color: '#888',
                mb: '8px',
                lineHeight: 1.2
            }}>
                Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit
            </Typography>

            {/* Footer Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Typography sx={{ fontSize: '11px', color: '#aaa', fontFamily: 'Poppins' }}>{job.time}</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Box sx={{ color: '#8ED2A4', display: 'flex', alignItems: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: '#555', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                </Box>

                {job.status === 'already-applied' && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Box sx={{
                            bgcolor: '#00EA8E',
                            color: '#fff',
                            borderRadius: '3px',
                            width: '14px',
                            height: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </Box>
                        <Typography sx={{ fontSize: '11px', color: '#555', fontWeight: 600, fontFamily: 'Poppins' }}>Already Applied</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    </Box>
);


const PartTime = ({ darkMode, onBack }) => {
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

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '706px',
            minHeight: 'auto',
            height: 'auto',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: darkMode
                ? '0px 4px 20px rgba(0,0,0,0.5)'
                : '0px 4px 20px rgba(0,0,0,0.05)',
            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)'
        }}>
            {/* List column only */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                flexShrink: 0
            }}>
                {/* Master List Header */}
                <Box sx={{ px: '25px', pt: '25px', pb: '10px' }}>
                    {/* Row 1: Country, Date Posted, Sort */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            {/* Country Trigger */}
                            <Box
                                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}
                            >
                                <Box
                                    component="img"
                                    src={selectedCountry?.flag || saudiFlag}
                                    sx={{ width: '28px', height: '18px', borderRadius: '2px', objectFit: 'cover' }}
                                />
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

                            {/* Date Posted Trigger */}
                            <Box
                                onClick={() => setShowDateFilter(!showDateFilter)}
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '20px',
                                    px: '12px',
                                    py: '4px',
                                    cursor: 'pointer',
                                    bgcolor: '#fff'
                                }}
                            >
                                <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#333', fontFamily: 'Poppins' }}>Date Posted</Typography>
                            </Box>
                        </Box>

                        {/* Sort Trigger */}
                        <Box sx={{ position: 'relative' }}>
                            <svg
                                onClick={() => setShowSortPopup(!showSortPopup)}
                                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" style={{ cursor: 'pointer' }}
                            >
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

                    {/* Row 2: Filter, Heart, All, etc. */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {/* Filter Icon */}
                            <Box sx={{ width: '32px', height: '32px', borderRadius: '50%', bgcolor: '#efefef', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                                    <path d="M3 6h18M6 12h12M10 18h4"></path>
                                </svg>
                            </Box>

                            {/* Heart Icon */}
                            <Box
                                onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                                sx={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    bgcolor: showOnlyFavorites ? '#efefef' : '#efefef',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill={showOnlyFavorites ? "#000" : "none"} stroke="#000" strokeWidth="2.5">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </Box>

                            {/* All Pill */}
                            <Box sx={{ bgcolor: '#efefef', px: '15px', py: '6px', borderRadius: '20px', fontSize: '12px', color: '#000', fontWeight: 600, cursor: 'pointer' }}>
                                All
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            {['Easy Apply', 'Remote', 'Job type'].map(label => (
                                <Box key={label} sx={{ border: '1px solid #e0e0e0', borderRadius: '20px', px: '12px', py: '6px', cursor: 'pointer', bgcolor: '#fff' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 500, color: '#333', fontFamily: 'Poppins' }}>{label}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#888',
                    mt: '10px',
                    px: '25px'
                }}>
                    43 results found
                </Typography>

                {/* Job List Container */}
                <Box sx={{
                    px: '15px',
                    pb: '20px'
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
                                onClick={() => setSelectedJobId(job.id)}
                                isActive={selectedJobId === job.id}
                            />
                        ))}
                </Box>
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
