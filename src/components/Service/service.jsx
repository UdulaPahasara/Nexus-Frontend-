import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

// Reused header popups from parttime
import DatePosted from '../jobs/partime/datePosted';
import Country from '../jobs/partime/country';
import UpDownArrowBtn from '../jobs/partime/updowArowbtn';

// Service card images
import svc1 from '../../assets/Service/service/service1.webp';
import svc2 from '../../assets/Service/service/service2.webp';
import svc3 from '../../assets/Service/service/service3.webp';
import svc4 from '../../assets/Service/service/service4.webp';
import svc5 from '../../assets/Service/service/service5.webp';
import svc6 from '../../assets/Service/service/service6.webp';

// Company / provider logos
import comp1 from '../../assets/jobs/company1.webp';
import comp2 from '../../assets/jobs/company2.webp';
import comp3 from '../../assets/jobs/company3.webp';
import comp4 from '../../assets/jobs/company4.webp';
import comp5 from '../../assets/jobs/company5.webp';
import comp6 from '../../assets/jobs/company6.webp';

// Country flag placeholder
import saudiFlag from '../../assets/jobs/county/france.webp';

const SERVICE_DATA = [
    { id: 1, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc1, logo: comp1 },
    { id: 2, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc2, logo: comp2 },
    { id: 3, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc3, logo: comp3 },
    { id: 4, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc4, logo: comp4 },
    { id: 5, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc5, logo: comp5 },
    { id: 6, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc6, logo: comp6 },
];

// ── Service Card ──────────────────────────────────────────
const ServiceCard = ({ darkMode, service, onViewDetails, isSplit = false }) => {
    const [liked, setLiked] = useState(false);

    const overlayBtnSx = {
        width: '28px',
        height: '28px',
        border: '0.97px solid rgba(255,255,255,0.6)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        bgcolor: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(4px)',
        flexShrink: 0,
        '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
        boxSizing: 'border-box',
    };

    return (
        <Box sx={{
            width: '100%',
            maxWidth: isSplit ? '100%' : { xs: '100%', sm: '220px', md: '205px' },
            height: { xs: 'auto', md: '288px' },
            minHeight: '261.69px',
            mx: 'auto',
            borderRadius: '8px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            border: darkMode ? '1px solid #333' : '1px solid #E8E8E8',
            boxShadow: darkMode ? '0px 2px 10px rgba(0,0,0,0.3)' : '0px 2px 10px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            flexShrink: 0
        }}>
            {/* ── Large image with overlaid action icons ── */}
            <Box sx={{ position: 'relative', width: '100%', height: '135px' }}>
                <Box
                    component="img"
                    src={service.image}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

            </Box>

            {/* ── Card body ── */}
            <Box sx={{ px: '10px', pt: '8px', pb: '10px', display: 'flex', flexDirection: 'column', gap: '4.83px' }}>
                {/* Provider row: logo + name + verified */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Box component="img" src={service.logo}
                        sx={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '9px', color: darkMode ? '#fff' : '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1, minWidth: 0 }}>
                        {service.provider}
                    </Typography>
                    <CheckCircleIcon sx={{ fontSize: '11px', color: '#0077B5', flexShrink: 0 }} />
                </Box>

                {/* Bold title */}
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '11px', color: darkMode ? '#fff' : '#111', lineHeight: 1.3 }}>
                    {service.title}
                </Typography>

                {/* Stars + location */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {[1, 2, 3, 4, 5].map(i => (
                            <StarIcon key={i} sx={{ fontSize: '9px', color: i <= Math.round(service.rating) ? '#FFB800' : '#ddd' }} />
                        ))}
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '9px', color: darkMode ? '#ddd' : '#333' }}>
                        {service.rating}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1px', ml: '2px' }}>
                        <LocationOnIcon sx={{ fontSize: '9px', color: '#888' }} />
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '9px', color: '#888', whiteSpace: 'nowrap' }}>
                            {service.location}
                        </Typography>
                    </Box>
                </Box>

                {/* 2-line description */}
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '9px', color: darkMode ? '#bbb' : '#555', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.
                </Typography>

                {/* View Full Details button */}
                <Box
                    onClick={onViewDetails}
                    sx={{ mt: '5px', height: '29.54px', width: '100%', borderRadius: '4.75px', border: darkMode ? '0.79px solid #555' : '0.79px solid #D0D0D0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', bgcolor: 'transparent', boxSizing: 'border-box', '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f8f8f8' } }}
                >
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '10px', color: darkMode ? '#ccc' : '#333', whiteSpace: 'nowrap' }}>
                        View Full Details
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};


// ── Main Service Component ─────────────────────────────────
const ServicePage = ({ darkMode = false, onBack, onViewDetails, isSplit = false }) => {
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [showSortPopup, setShowSortPopup] = useState(false);
    const [selectedSort, setSelectedSort] = useState('recent');
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [emergencyOnly, setEmergencyOnly] = useState(false);

    return (
        <Box sx={{
            width: isSplit ? { md: '380px', lg: '400px' } : '100%',
            maxWidth: isSplit ? '100%' : { xs: '100%', md: '706px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
            height: isSplit ? '1097px' : { xs: 'auto', md: '1097px' },
            maxHeight: { xs: 'none', md: '1097px' },
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'width 0.3s ease'
        }}>
            {/* ── HEADER ── */}
            <Box sx={{ px: { xs: '15px', sm: '25px' }, pt: '25px', pb: '10px' }}>
                {/* Row 1: Back arrow + Country + Date Posted + Service Type | Sort icon */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: isSplit ? '0px' : { xs: '12px', sm: '18px' },
                    gap: '10px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '10px', sm: '15px' }, flexGrow: 1 }}>
                        <ArrowBackIosNewIcon
                            onClick={onBack}
                            sx={{ fontSize: '18px', cursor: 'pointer', color: darkMode ? '#fff' : '#333' }}
                        />

                        {!isSplit && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '6px', sm: '12px' }, flexWrap: 'nowrap' }}>
                                {/* Country dropdown */}
                                <Box onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                    sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}>
                                    <Box component="img" src={selectedCountry?.flag || saudiFlag}
                                        sx={{ width: '28px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} />
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                    {showCountryDropdown && (
                                        <Country
                                            darkMode={darkMode}
                                            onClose={() => setShowCountryDropdown(false)}
                                            onSelect={(c) => { setSelectedCountry(c); setShowCountryDropdown(false); }}
                                        />
                                    )}
                                </Box>

                                {/* Service Type pill */}
                                <Box sx={{
                                    border: darkMode ? '1px solid #444' : '1px solid #e0e0e0',
                                    borderRadius: '50px', px: { xs: '10px', sm: '14px' }, py: '5px',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                                    bgcolor: darkMode ? 'transparent' : '#fff'
                                }}>
                                    <Typography sx={{ fontSize: '11px', fontWeight: 600, color: darkMode ? '#ccc' : '#333', fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>
                                        Service Type
                                    </Typography>
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="3">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </Box>
                            </Box>
                        )}
                        {isSplit && (
                            <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Poppins', color: darkMode ? '#fff' : '#000' }}>
                                Our Services
                            </Typography>
                        )}
                    </Box>

                    {/* Sort icon / View All */}
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        {isSplit ? (
                            <Typography sx={{ fontSize: '14px', color: darkMode ? '#aaa' : '#757575', cursor: 'pointer' }}>
                                View All
                            </Typography>
                        ) : (
                            <>
                                <svg onClick={() => setShowSortPopup(!showSortPopup)} width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke={darkMode ? '#ccc' : '#222'} strokeWidth="3" style={{ cursor: 'pointer' }}>
                                    <path d="M7 20l-4-4m4 4l4-4M7 20V4M17 4l-4 4m4-4l4 4M17 4v16" />
                                </svg>
                                {showSortPopup && (
                                    <UpDownArrowBtn
                                        darkMode={darkMode}
                                        onClose={() => setShowSortPopup(false)}
                                        onSelect={(sort) => { setSelectedSort(sort); setShowSortPopup(false); }}
                                        selectedSort={selectedSort}
                                    />
                                )}
                            </>
                        )}
                    </Box>
                </Box>

                {/* Row 2: Filter icons + All pill | Emergency Availability */}
                {!isSplit && (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': { display: 'none' },
                        gap: '12px'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                            {/* Filter icon */}
                            <Box sx={{
                                bgcolor: darkMode ? '#2a2a3e' : '#f0f0f0',
                                width: '32px', height: '32px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#ccc' : '#222'} strokeWidth="2.5">
                                    <path d="M3 6h18M6 12h12M10 18h4" />
                                </svg>
                            </Box>

                            {/* Favorites icon */}
                            <Box onClick={() => setShowOnlyFavorites(!showOnlyFavorites)} sx={{
                                bgcolor: darkMode ? '#2a2a3e' : '#f0f0f0',
                                width: '32px', height: '32px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24"
                                    fill={showOnlyFavorites ? '#000' : 'none'} stroke={darkMode ? '#ccc' : '#000'} strokeWidth="2.5">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </Box>

                            {/* All pill */}
                            <Box sx={{
                                bgcolor: darkMode ? '#333' : '#efefef', px: '16px', py: '5px',
                                borderRadius: '20px', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: 800, color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>
                                    All
                                </Typography>
                            </Box>
                        </Box>

                        {/* Emergency Availability toggle */}
                        <Box onClick={() => setEmergencyOnly(!emergencyOnly)} sx={{
                            border: emergencyOnly ? '1px solid #00EA8E' : (darkMode ? '1px solid #444' : '1px solid #E0E0E0'),
                            borderRadius: '25px', px: '12px', py: '5px', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: '6px',
                            bgcolor: emergencyOnly ? 'rgba(0,234,142,0.1)' : 'transparent',
                            transition: 'all 0.2s',
                            flexShrink: 0
                        }}>
                            <ElectricBoltIcon sx={{ fontSize: '12px', color: emergencyOnly ? '#00EA8E' : (darkMode ? '#aaa' : '#555') }} />
                            <Typography sx={{
                                fontSize: '11px', fontWeight: 600, fontFamily: 'Poppins',
                                color: emergencyOnly ? '#00EA8E' : (darkMode ? '#ccc' : '#333'),
                                whiteSpace: 'nowrap'
                            }}>
                                Emergency Availability
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>

            {/* ── CARD GRID ── */}
            <Box sx={{
                width: isSplit ? '100%' : { xs: '100%', md: '680px' },
                maxWidth: '100%',
                margin: '0 auto',
                pb: '24px',
                pt: '8px',
                px: isSplit ? { xs: '15px', sm: '25px' } : { xs: '15px', sm: '0px' },
                display: 'grid',
                gridTemplateColumns: isSplit
                    ? '1fr'
                    : {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)'
                    },
                alignContent: 'start',
                rowGap: '21px',
                columnGap: '21px',
                overflowY: 'auto',
                height: { xs: 'auto', md: '100%' },
                '&::-webkit-scrollbar': { display: 'none' }
            }}>
                {SERVICE_DATA.map(service => (
                    <ServiceCard key={service.id} darkMode={darkMode} service={service} onViewDetails={onViewDetails} isSplit={isSplit} />
                ))}
            </Box>

            {/* Date Posted modal */}
            {showDateFilter && (
                <Box sx={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.4)', zIndex: 2000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', p: '10px'
                }}>
                    <DatePosted darkMode={darkMode} onClose={() => setShowDateFilter(false)} onNext={() => setShowDateFilter(false)} />
                </Box>
            )}
        </Box>
    );
};

export default ServicePage;
