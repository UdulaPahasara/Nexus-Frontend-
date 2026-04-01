import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Assets
import headerImg from '../../assets/Service/Services/header.webp';
import cleaningImg from '../../assets/Service/Services/cleaning.webp';
import laundryImg from '../../assets/Service/Services/laundry.webp';
import babySitterImg from '../../assets/Service/Services/babyster.webp';
import doctorImg from '../../assets/Service/Services/DoctorOnCall.webp';
import partyImg from '../../assets/Service/Services/PartyOrganizer.webp';
import beautyImg from '../../assets/Service/Services/beautyPaulor.webp';
import tailorImg from '../../assets/Service/Services/Tailor.webp';
import saloonImg from '../../assets/Service/Services/saloon.webp';
import hennaImg from '../../assets/Service/Services/Hanna.webp';
import pestImg from '../../assets/Service/Services/pestControll.webp';
import repairImg from '../../assets/Service/Services/Repair&Maintaince.webp';
import packersImg from '../../assets/Service/Services/packersAndMovers.webp';
import spaImg from '../../assets/Service/Services/Frame 1984078001.webp';

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

const categories = [
    { name: 'Cleaning', icon: cleaningImg },
    { name: 'Laundry', icon: laundryImg },
    { name: 'Baby Sitter', icon: babySitterImg },
    { name: 'Doctor on call', icon: doctorImg },
    { name: 'Party Organizer', icon: partyImg },
    { name: 'Beauty Parlour', icon: beautyImg },
    { name: 'Tailor', icon: tailorImg },
    { name: 'Saloon', icon: saloonImg },
    { name: 'Henna', icon: hennaImg },
    { name: 'Pest Control', icon: pestImg },
    { name: 'Repair & Maintenance', icon: repairImg },
    { name: 'Packers & Movers', icon: packersImg },
    { name: 'Spa', icon: spaImg },
];

const SERVICE_DATA = [
    { id: 1, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc1, logo: comp1 },
    { id: 2, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc2, logo: comp2 },
    { id: 3, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc3, logo: comp3 },
    { id: 4, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc4, logo: comp4 },
    { id: 5, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc5, logo: comp5 },
    { id: 6, title: 'AC Repair & AC Installation lorem', provider: 'BrightPath Foundation', rating: 4.2, reviews: 43, location: 'Damman, SA', image: svc6, logo: comp6 },
];

const ServiceCard = ({ darkMode, service, onViewDetails }) => {
    const [liked, setLiked] = useState(false);
    const overlayBtnSx = {
        width: '28px', height: '28px', border: '0.97px solid rgba(255,255,255,0.6)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
        bgcolor: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(4px)', flexShrink: 0,
        '&:hover': { bgcolor: 'rgba(255,255,255,1)' }, boxSizing: 'border-box',
    };
    return (
        <Box sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '220px', md: '205px' }, // Scale up on mobile
            height: { xs: 'auto', md: '288px' }, // Fix button clipping (matches service.jsx)
            minHeight: '261.69px',
            mx: 'auto',
            borderRadius: '8px', bgcolor: darkMode ? '#1e1e2e' : '#fff',
            border: darkMode ? '1px solid #333' : '1px solid #E8E8E8',
            boxShadow: darkMode ? '0px 2px 10px rgba(0,0,0,0.3)' : '0px 2px 10px rgba(0,0,0,0.06)',
            display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0
        }}>
            <Box sx={{ position: 'relative', width: '100%', height: '135px' }}>
                <Box component="img" src={service.image} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </Box>
            <Box sx={{ px: '10px', pt: '8px', pb: '10px', display: 'flex', flexDirection: 'column', gap: '4.83px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Box component="img" src={service.logo} sx={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '9px', color: darkMode ? '#fff' : '#111', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', flex: 1, minWidth: 0 }}>
                        {service.provider}
                    </Typography>
                    <CheckCircleIcon sx={{ fontSize: '11px', color: '#0077B5', flexShrink: 0 }} />
                </Box>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '11px', color: darkMode ? '#fff' : '#111', lineHeight: 1.3 }}>
                    {service.title}
                </Typography>
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
                <Typography sx={{
                    fontFamily: 'Poppins', fontWeight: 400, fontSize: '9px',
                    color: darkMode ? '#bbb' : '#555', lineHeight: 1.5,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    overflow: 'hidden', mb: 'auto'
                }}>
                    Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.
                </Typography>
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

const FILTER_PILLS = ['All', 'Tech', 'Social', 'Operational', 'Personal', 'Others'];

const ServicesRoot = ({ darkMode = false, onCategoryClick, onViewDetails }) => {
    const [activeType, setActiveType] = useState('Services');
    const [activeFilter, setActiveFilter] = useState('All');

    return (
        <Box sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '706px' },
            height: { xs: 'auto', md: '1097px' },
            maxHeight: { xs: 'none', md: '1097px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
            mb: '20px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        }}>
            {/* Scrollable Content wrapper */}
            <Box sx={{
                flex: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none'
            }}>
                {/* ── HEADER BANNER ── */}
                <Box sx={{ width: '100%', height: { xs: '150px', sm: '227px' }, flexShrink: 0 }}>
                    <Box component="img" src={headerImg} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                {/* ── TOGGLE PILLS ── */}
                <Box sx={{ px: { xs: '15px', sm: '28px' }, pt: '20px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {['Products', 'Services'].map((type) => (
                        <Box
                            key={type}
                            onClick={() => setActiveType(type)}
                            sx={{
                                px: '18px', py: '6px',
                                borderRadius: '20px',
                                border: darkMode ? '1px solid #444' : '1px solid #ddd',
                                bgcolor: activeType === type ? (darkMode ? '#fff' : '#000') : 'transparent',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.2s'
                            }}
                        >
                            <Typography sx={{
                                fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600,
                                color: activeType === type ? (darkMode ? '#000' : '#fff') : (darkMode ? '#ccc' : '#444')
                            }}>
                                {type}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* ── CATEGORY ICON GRID ── */}
                <Box sx={{
                    px: { xs: '15px', sm: '28px' }, pt: '25px',
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(4, 1fr)',
                        sm: 'repeat(4, 72px)',
                        md: 'repeat(5, 72px)'
                    },
                    rowGap: '18px',
                    columnGap: { xs: '10px', sm: '30px', md: '48px' },
                    justifyContent: 'center',
                    mx: 'auto'
                }}>
                    {categories.map((cat, idx) => (
                        <Box
                            key={idx}
                            onClick={() => cat.name === 'Cleaning' && onCategoryClick()}
                            sx={{
                                width: '100%',
                                maxWidth: '72px',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
                                gap: '9px', cursor: 'pointer',
                                '&:hover': { opacity: 0.8 },
                                mx: 'auto'
                            }}
                        >
                            {/* Icon Container */}
                            <Box sx={{
                                width: '100%',
                                aspectRatio: '1/1',
                                borderRadius: '8px',
                                border: darkMode ? '1px solid #333' : '1px solid #A4CBFA',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                overflow: 'hidden',
                                bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : 'transparent'
                            }}>
                                <Box component="img" src={cat.icon} sx={{ width: '65%', height: '65%', objectFit: 'contain' }} />
                            </Box>
                            {/* Title text */}
                            <Typography sx={{
                                fontFamily: 'Poppins', fontSize: { xs: '9px', sm: '10px' }, fontWeight: 500,
                                color: darkMode ? '#bbb' : '#444', textAlign: 'center', lineHeight: 1.1,
                                width: '100%', wordBreak: 'break-word', hyphens: 'auto'
                            }}>
                                {cat.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                {/* ── FEATURED SERVICES SECTION ── */}
                <Box sx={{ px: { xs: '15px', sm: '13px' }, pt: '35px', pb: '40px' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600,
                        color: darkMode ? '#fff' : '#111', mb: '12px'
                    }}>
                        Featured Services
                    </Typography>

                    {/* Filter Pills */}
                    <Box sx={{
                        display: 'flex', gap: '8px', flexWrap: 'nowrap', mb: '20px',
                        overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                        maxWidth: '100%',
                        px: { xs: '2px', sm: '0px' }
                    }}>
                        {FILTER_PILLS.map((pill) => (
                            <Box
                                key={pill}
                                onClick={() => setActiveFilter(pill)}
                                sx={{
                                    px: '18px', py: '6px',
                                    borderRadius: '50px',
                                    border: activeFilter === pill
                                        ? (darkMode ? '1px solid #fff' : '1px solid #000')
                                        : (darkMode ? '1px solid #ddd' : '1px solid #ddd'),
                                    bgcolor: activeFilter === pill ? (darkMode ? '#fff' : '#000') : 'transparent',
                                    cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'all 0.2s',
                                    flexShrink: 0
                                }}
                            >
                                <Typography sx={{
                                    fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500,
                                    color: activeFilter === pill ? (darkMode ? '#000' : '#fff') : (darkMode ? '#333' : '#333')
                                }}>
                                    {pill}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Featured Service Card Grid - Responsive: 3 -> 2 -> 1 columns */}
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)'
                        },
                        alignItems: 'start',
                        alignContent: 'start',
                        columnGap: '21px',
                        rowGap: '21px',
                        width: '100%',
                        maxWidth: '680px',
                        mx: 'auto'
                    }}>
                        {SERVICE_DATA.slice(0, 3).map(service => (
                            <ServiceCard key={service.id} darkMode={darkMode} service={service} onViewDetails={onViewDetails} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ServicesRoot;
