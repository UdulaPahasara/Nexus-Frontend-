import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VerifiedIcon from '@mui/icons-material/Verified';

// Reusable Components
import JobCard from '../jobs/shared/JobCard';
import VolunteerJobCard from '../jobs/shared/VolunteerJobCard';
import FreelanceJobCard from '../jobs/shared/FreelanceJobCard';
import ForYou from '../home/mainhome/foryou/foryou';
import { SERVICE_DATA, ServiceCard } from '../Service/service';
import ProductCard from '../macketPlace/ProductCard';

// Avatar assets for People section
import mp1 from '../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp2 from '../../assets/Home/sevice/chats/messegeprofilepic/mp2.webp';
import mp3 from '../../assets/Home/sevice/chats/messegeprofilepic/mp3.webp';

// Dummy Assets for Placeholders (using existing job images)
import comp1 from '../../assets/jobs/company1.webp';
import comp2 from '../../assets/jobs/company2.webp';
import comp3 from '../../assets/jobs/company3.webp';

// Company Icons
import codeLabIcon from '../../assets/CompanyProfile/CodeLab.webp';
import waveNetIcon from '../../assets/CompanyProfile/WaveNet.webp';
import pixelCodeIcon from '../../assets/CompanyProfile/PixelCode.webp';

// Product dummy images
import product1 from '../../assets/Home/post/post/post1.0.webp';
import product2 from '../../assets/Home/post/post/post2.0.webp';
import product3 from '../../assets/Home/post/post/post3.0.webp';
import product4 from '../../assets/Home/post/post/post1.2.webp';

const PILL_FILTERS = [
    'All', 'People', 'Companies', 'Groups', 'Posts', 'Jobs', 'Products', 'Services'
];

const dummyPartTimeJob = {
    id: 1,
    title: 'UI/UX Designer (Part-Time)',
    company: 'Pixel Studio Pvt Ltd',
    location: 'Colombo, Sri Lanka',
    time: '3 hours ago',
    icon: comp1,
    type: 'Part-Time',
    status: 'already-applied'
};

const dummyVolunteerJob = {
    id: 2,
    title: 'Eco Campaign Organizer',
    company: 'GreenSpark Initiative',
    location: 'Vancouver, Canada | Remote',
    backgroundImg: comp2,
    companyLogo: comp3,
    postedByAvatar: comp1
};

const dummyFreelanceJob = {
    id: 3,
    projectTitle: 'Project Freeze Web Application Lorem Lipsum Isom',
    company: 'Roadwave Pvt Ltd',
    location: 'Colombo, Sri Lanka | Onsite',
    rating: 5,
    ratingCount: '30K+',
    budget: '550,000',
    time: '2 hours ago',
    icon: comp3,
    type: 'Freelance'
};

const dummyPeople = [
    { id: 1, name: 'Anura Deshan Jayathilaka', subtitle: 'Full Stack Developer | IoT Enthusiast | Software Engineer', avatar: mp1 },
    { id: 2, name: 'Anura Deshan Jayathilaka', subtitle: 'Full Stack Developer | Graphic Designer | Software Engineer', avatar: mp2 },
    { id: 3, name: 'Anura Deshan Jayathilaka', subtitle: 'IoT Enthusiast | Graphic Designer | Software Engineer | UI/UX Designer', avatar: mp3 },
];

const dummyCompanies = [
    { id: 1, name: 'CodeLeap', followers: '5,123 followers', industry: 'IT Services and IT Consulting', location: 'Colombo, Western', employees: '10-50 employees', icon: codeLabIcon, verified: true },
    { id: 2, name: 'Roodwave Pvt Ltd', followers: '5,123 followers', industry: 'IT Services and IT Consulting', location: 'Colombo, Western', employees: '10-50 employees', icon: waveNetIcon, verified: true },
    { id: 3, name: 'TestifyTech', followers: '5,123 followers', industry: 'IT Services and IT Consulting', location: 'Colombo, Western', employees: '10-50 employees', icon: pixelCodeIcon, verified: true },
];

const dummyProducts = [
    { id: 1, image: product1, compLogo: codeLabIcon, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
    { id: 2, image: product2, compLogo: waveNetIcon, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
    { id: 3, image: product3, compLogo: pixelCodeIcon, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
    { id: 4, image: product4, compLogo: comp1, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
];

const Filter = ({ darkMode = false, onBack }) => {
    const [activePill, setActivePill] = useState('All');

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            minHeight: '100vh',
            bgcolor: darkMode ? '#1E1E1E' : '#FFFFFF',
            borderRadius: '15px',
            p: { xs: '16px', md: '30px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.4)' : '0px 4px 20px rgba(0,0,0,0.05)',
            position: 'relative'
        }}>

            {/* Pill Bar */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                pb: '16px',
                mb: '20px'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    overflowX: 'auto',
                    flex: 1,
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none'
                }}>
                    {PILL_FILTERS.map((pill) => (
                        <Box
                            key={pill}
                            onClick={() => setActivePill(pill)}
                            sx={{
                                px: '16px',
                                py: '6px',
                                borderRadius: '20px',
                                border: activePill === pill ? '1px solid #000' : (darkMode ? '1px solid #444' : '1px solid #E0E0E0'),
                                bgcolor: activePill === pill ? '#000000' : 'transparent',
                                color: activePill === pill ? '#FFFFFF' : (darkMode ? '#FFFFFF' : '#000000'),
                                cursor: 'pointer',
                                fontSize: '13px',
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s',
                                '&:hover': {
                                    bgcolor: activePill === pill ? '#000000' : (darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')
                                }
                            }}
                        >
                            {pill}
                        </Box>
                    ))}
                </Box>

                <IconButton sx={{ ml: 2, color: darkMode ? '#fff' : '#000' }}>
                    <ImportExportIcon />
                </IconButton>
            </Box>

            {/* Jobs Header */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 600,
                color: darkMode ? '#fff' : '#000',
                mb: '20px'
            }}>
                Jobs
            </Typography>

            {/* Job Cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <JobCard
                    job={dummyPartTimeJob}
                    darkMode={darkMode}
                    isCompact={false}
                    forcedType="Part-Time"
                />

                <VolunteerJobCard
                    job={dummyVolunteerJob}
                    darkMode={darkMode}
                    isCompact={false}
                />

                <FreelanceJobCard
                    job={dummyFreelanceJob}
                    darkMode={darkMode}
                    isCompact={false}
                />
            </Box>

            {/* ── PEOPLE SECTION ── */}

            {/* View All Jobs link */}
            <Box sx={{ mt: '30px', mb: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: darkMode ? '#aaa' : '#555',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}
                >
                    View All Jobs
                </Typography>
            </Box>

            {/* Divider */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', mb: '20px' }} />

            {/* People Heading */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 600,
                color: darkMode ? '#fff' : '#000',
                mb: '16px'
            }}>
                People
            </Typography>

            {/* Person Rows */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {dummyPeople.map((person, idx) => (
                    <Box
                        key={person.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            py: '14px',
                            borderBottom: idx < dummyPeople.length - 1
                                ? (darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)')
                                : 'none',
                        }}
                    >
                        {/* Avatar */}
                        <Box
                            component="img"
                            src={person.avatar}
                            sx={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                flexShrink: 0,
                            }}
                        />

                        {/* Name + Subtitle */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '13px',
                                color: darkMode ? '#fff' : '#111',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {person.name}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '11px',
                                color: darkMode ? '#aaa' : '#777',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {person.subtitle}
                            </Typography>
                        </Box>

                        {/* Message Button */}
                        <Box
                            sx={{
                                px: '18px',
                                py: '6px',
                                borderRadius: '20px',
                                border: darkMode ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.15)',
                                cursor: 'pointer',
                                flexShrink: 0,
                                '&:hover': {
                                    bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
                                }
                            }}
                        >
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '12px',
                                fontWeight: 500,
                                color: darkMode ? '#fff' : '#111',
                                whiteSpace: 'nowrap',
                            }}>
                                Message
                            </Typography>
                        </Box>

                        {/* Kebab Menu */}
                        <MoreVertIcon
                            sx={{
                                fontSize: '20px',
                                color: darkMode ? '#aaa' : '#555',
                                cursor: 'pointer',
                                flexShrink: 0,
                                '&:hover': { color: darkMode ? '#fff' : '#111' }
                            }}
                        />
                    </Box>
                ))}
            </Box>

            {/* ── COMPANIES SECTION ── */}

            {/* View All People link */}
            <Box sx={{ mt: '30px', mb: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: darkMode ? '#fff' : '#111',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}
                >
                    View All People
                </Typography>
            </Box>

            {/* Divider */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', mb: '20px' }} />

            {/* Companies Heading */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 600,
                color: darkMode ? '#fff' : '#000',
                mb: '16px'
            }}>
                Companies
            </Typography>

            {/* Company Rows */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {dummyCompanies.map((company, idx) => (
                    <Box
                        key={company.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            py: '14px',
                            borderBottom: idx < dummyCompanies.length - 1
                                ? (darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)')
                                : 'none',
                        }}
                    >
                        {/* Company Avatar */}
                        <Box
                            component="img"
                            src={company.icon}
                            sx={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                flexShrink: 0,
                            }}
                        />

                        {/* Company Details */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: '13px',
                                    color: darkMode ? '#fff' : '#111',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}>
                                    {company.name}
                                </Typography>
                                {company.verified && (
                                    <VerifiedIcon sx={{ fontSize: '14px', color: '#1da1f2' }} />
                                )}
                            </Box>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '11px',
                                color: darkMode ? '#aaa' : '#777',
                                mt: '2px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {company.followers}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '11px',
                                color: darkMode ? '#9e9e9e' : '#9e9e9e',
                                mt: '2px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {company.industry} | {company.location}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '11px',
                                color: darkMode ? '#9e9e9e' : '#9e9e9e',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {company.employees}
                            </Typography>
                        </Box>

                        {/* Follow Button */}
                        <Box
                            sx={{
                                px: '16px',
                                py: '6px',
                                borderRadius: '20px',
                                border: '1px solid #4CAF50',
                                bgcolor: 'transparent',
                                cursor: 'pointer',
                                flexShrink: 0,
                                transition: 'all 0.2s',
                                '&:hover': {
                                    bgcolor: darkMode ? 'rgba(76,175,80,0.1)' : 'rgba(76,175,80,0.05)'
                                }
                            }}
                        >
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '12px',
                                fontWeight: 500,
                                color: '#4CAF50',
                            }}>
                                Follow
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* View All Companies link */}
            <Box sx={{ mt: '10px', pt: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: darkMode ? '#fff' : '#111',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}
                >
                    View All Companies
                </Typography>
            </Box>

            {/* ── POSTS SECTION ── */}

            {/* Divider */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', mb: '20px', mt: '20px' }} />

            {/* Posts Heading */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 600,
                color: darkMode ? '#fff' : '#000',
                mb: '16px'
            }}>
                Posts
            </Typography>

            {/* Reuse ForYou component for Posts */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <ForYou darkMode={darkMode} limit={2} hideFooter={true} />
            </Box>

            {/* View All Posts link */}
            <Box sx={{ mt: '10px', pt: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: darkMode ? '#fff' : '#111',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}
                >
                    View All Posts
                </Typography>
            </Box>

            {/* ── SERVICES SECTION ── */}

            {/* Divider */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', mb: '20px', mt: '20px' }} />

            {/* Services Heading */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 600,
                color: darkMode ? '#fff' : '#000',
                mb: '16px'
            }}>
                Services
            </Typography>

            {/* Services Horizontal List */}
            <Box sx={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                pb: '10px',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
            }}>
                {SERVICE_DATA.slice(0, 3).map(service => (
                    <ServiceCard key={service.id} service={service} darkMode={darkMode} />
                ))}
            </Box>

            {/* View All Services link */}
            <Box sx={{ mt: '10px', pt: '20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: darkMode ? '#fff' : '#111',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}
                >
                    View All Services
                </Typography>
            </Box>

            {/* ── PRODUCTS SECTION ── */}

            {/* Divider */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)', mb: '20px', mt: '20px' }} />

            {/* Products Heading */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: 600,
                color: darkMode ? '#fff' : '#000',
                mb: '16px'
            }}>
                Products
            </Typography>

            {/* Products Horizontal List */}
            <Box sx={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                pb: '10px',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
            }}>
                {dummyProducts.map((product) => (
                    <Box key={product.id} sx={{ width: { xs: '155px', sm: '155px' }, flexShrink: 0 }}>
                        <ProductCard darkMode={darkMode} product={product} isCompact={true} />
                    </Box>
                ))}
            </Box>

            {/* View All Products link */}
            <Box sx={{ mt: '10px', pt: '20px', borderTop: darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: darkMode ? '#fff' : '#111',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}
                >
                    View All Products
                </Typography>
            </Box>
        </Box>
    );
};

export default Filter;
