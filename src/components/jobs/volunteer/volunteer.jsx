import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import VolunteerJobCard from '../shared/VolunteerJobCard';
import Country from '../partime/country';
import saudiFlag from '../../../assets/jobs/county/france.webp';

// Assets
import volback1 from '../../../assets/jobs/volenteer/volback1.webp';
import volback2 from '../../../assets/jobs/volenteer/volback2.webp';
import volback3 from '../../../assets/jobs/volenteer/volback3.webp';

import comp1 from '../../../assets/jobs/company1.webp';
import comp2 from '../../../assets/jobs/company2.webp';
import comp3 from '../../../assets/jobs/company3.webp';

const VOLUNTEER_JOB_DATA = [
    {
        id: 1,
        title: 'Eco Campaign Organizer',
        company: 'GreenSpark Initiative',
        location: 'Vancouver, Canada | Remote',
        time: '5 day ago',
        backgroundImage: volback1,
        icon: comp1,
        logoBg: '#2E3192',
        startsIn: '5 Days',
        category: 'Environment',
        duration: '3 Months',
        price: 'SAR. 90/ Per Person',
        description: 'Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit Lorem ipsum dolor sit amet consectetur ipsum kfdke orem ipsum dolor sit amet consectetur ipsum'
    },
    {
        id: 2,
        title: 'Community Outreach Coordinator',
        company: 'Helping Hands',
        location: 'Colombo, Sri Lanka',
        time: '3 day ago',
        backgroundImage: volback2,
        icon: comp2,
        logoBg: '#000',
        startsIn: '10 Days',
        category: 'Social Work',
        duration: '6 Months',
        price: 'Free',
        description: 'Engage with local communities to organize outreach programs and provide support to families in need.'
    },
    {
        id: 3,
        title: 'Senior News Media Volunteer',
        company: 'CNN News Network',
        location: 'Remote | USA',
        time: '1 day ago',
        backgroundImage: volback3,
        icon: comp3,
        logoBg: '#CC0000',
        startsIn: 'Immediate',
        category: 'Media',
        duration: '12 Months',
        price: 'Stipend Provided',
        description: 'Volunteer with CNN to assist in news gathering and digital content curation for international headlines.'
    }
];

const Volunteer = ({ darkMode, onBack }) => {
    const [favorites, setFavorites] = useState([2]);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
    };

    return (
        <Box sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '580px', lg: '780px' },
            mx: 'auto',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            minHeight: '800px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        }}>
            {/* Header / Filter Section */}
            <Box sx={{ px: { xs: '15px', sm: '25px' }, pt: { xs: '20px', sm: '25px' }, pb: '15px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {/* Country Selector */}
                        <Box onClick={() => setShowCountryDropdown(!showCountryDropdown)} sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative', zIndex: 100 }}>
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

                        <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '20px', px: '15px', py: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Typography sx={{ fontSize: '11px', fontWeight: 600, color: '#333', fontFamily: 'Poppins' }}>Date Posted</Typography>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </Box>
                    </Box>

                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" style={{ cursor: 'pointer' }}>
                        <path d="M7 20l-4-4m4 4l4-4M7 20V4M17 4l-4 4m4-4l4 4M17 4v16"></path>
                    </svg>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '20px', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none', px: { xs: '2px', sm: 0 }, mx: { xs: '-15px', sm: 0 }, pb: '5px' }}>
                    <Box sx={{ bgcolor: '#f5f5f5', p: '8px', borderRadius: '50%', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', ml: { xs: '15px', sm: 0 } }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
                            <path d="M3 6h18M6 12h12M10 18h4"></path>
                        </svg>
                    </Box>
                    <Box sx={{ bgcolor: '#f5f5f5', p: '8px', borderRadius: '50%', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </Box>
                    <Box sx={{ bgcolor: '#efefef', px: '15px', py: '6px', borderRadius: '20px', fontSize: '13px', color: '#000', fontWeight: 600, cursor: 'pointer', flexShrink: 0 }}>
                        All
                    </Box>
                    {['Easy Apply', 'Remote', 'Job type'].map(label => (
                        <Box key={label} sx={{ border: '1px solid #e0e0e0', borderRadius: '20px', px: '12px', py: '6px', cursor: 'pointer', bgcolor: '#fff', flexShrink: 0 }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#333', fontFamily: 'Poppins' }}>{label}</Typography>
                        </Box>
                    ))}
                </Box>

                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, color: '#111' }}>
                    101 results found
                </Typography>
            </Box>

            {/* List Section */}
            <Box sx={{ px: '20px', pb: '30px', flex: 1, overflowY: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
                {VOLUNTEER_JOB_DATA.map(job => (
                    <VolunteerJobCard
                        key={job.id}
                        job={job}
                        darkMode={darkMode}
                        isFavorite={favorites.includes(job.id)}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Volunteer;
