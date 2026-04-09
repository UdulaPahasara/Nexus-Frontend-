import React, { useState } from 'react';
import { Box, Typography, Popover } from '@mui/material';

// Standard icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

// Imported modular popups (reusing existing part-time files but wrapped in Popover for safety)
import Country from '../partime/country';
import DatePosted from '../partime/datePosted';
import UpDownArrowBtn from '../partime/updowArowbtn';
import JobLevelPop from './popup/joblevel';
import SkillPopup from './popup/skillpopup';
import ExPop from './popup/expop';
import PriceRangePop from './popup/price';
import CVDetail from './cvdetail/cvdetail';

// Dummy flag
import saudiFlag from '../../../assets/jobs/county/france.webp'; // Placeholder flag

// Shared UI Assets
import cvback1 from '../../../assets/jobs/cv/cvback1.webp';
import cvback2 from '../../../assets/jobs/cv/cvback2.webp';
import cvback3 from '../../../assets/jobs/cv/cvback3.webp';
import cvback4 from '../../../assets/jobs/cv/cvback4.webp';

import profile1 from '../../../assets/Home/feed/profile1.webp';
import profile2 from '../../../assets/Home/feed/profile2.webp';
import profile3 from '../../../assets/Home/feed/profile3.webp';
import profile4 from '../../../assets/Home/feed/profile4.webp';

const CV_DATA = [
    {
        id: 1,
        name: 'Omar El-Sayed',
        title: 'Graphic Designer',
        experience: '5+ Years',
        location: 'Manchester, UK',
        desc: 'Lorem ipsum dolor sit amet consectetur ipsum Lorem ipsum dolor sit amet consectetur ipsum kfdke',
        skills: 'UI/UX Design | Wireframing | Wireframing | Wireframing',
        availability: ['Part-Time', 'Full-Time', 'Freelance'],
        bg: cvback1,
        pic: profile1
    },
    {
        id: 2,
        name: 'Jack Thompson',
        title: 'Graphic Designer',
        experience: '5+ Years',
        location: 'Manchester, UK',
        desc: 'Lorem ipsum dolor sit amet consectetur ipsum Lorem ipsum dolor sit amet consectetur ipsum kfdke',
        skills: 'UI/UX Design | Wireframing | Wireframing | Wireframing',
        availability: ['Part-Time', 'Full-Time', 'Freelance'],
        bg: cvback2,
        pic: profile2
    },
    {
        id: 3,
        name: 'Emily Carter',
        title: 'Graphic Designer',
        experience: '5+ Years',
        location: 'Manchester, UK',
        desc: 'Lorem ipsum dolor sit amet consectetur ipsum Lorem ipsum dolor sit amet consectetur ipsum kfdke',
        skills: 'UI/UX Design | Wireframing | Wireframing | Wireframing',
        availability: ['Part-Time', 'Full-Time', 'Freelance'],
        bg: cvback3,
        pic: profile3
    },
    {
        id: 4,
        name: 'Ayesha Mutairi',
        title: 'Graphic Designer',
        experience: '5+ Years',
        location: 'Manchester, UK',
        desc: 'Lorem ipsum dolor sit amet consectetur ipsum Lorem ipsum dolor sit amet consectetur ipsum kfdke',
        skills: 'UI/UX Design | Wireframing | Wireframing | Wireframing',
        availability: ['Part-Time', 'Full-Time', 'Freelance'],
        bg: cvback4,
        pic: profile4
    }
];

const CVPage = ({ darkMode = false, onSelectionChange }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedSort, setSelectedSort] = useState('recent');
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [selectedCV, setSelectedCV] = useState(null);

    const currentCV = selectedCV;

    const handleSelect = (cv) => {
        setSelectedCV(cv);
        if (onSelectionChange) onSelectionChange(cv.id);
    };

    const handleDeselect = () => {
        setSelectedCV(null);
        if (onSelectionChange) onSelectionChange(null);
    };

    // Popout Anchors
    const [countryAnchorEl, setCountryAnchorEl] = useState(null);
    const [showDateFilter, setShowDateFilter] = useState(false);
    const [sortAnchorEl, setSortAnchorEl] = useState(null);
    const [jobLevelAnchorEl, setJobLevelAnchorEl] = useState(null);
    const [skillAnchorEl, setSkillAnchorEl] = useState(null);
    const [expAnchorEl, setExpAnchorEl] = useState(null);
    const [priceAnchorEl, setPriceAnchorEl] = useState(null);

    // Heart Reaction Logic
    const [favorites, setFavorites] = useState([2]); // Mock ID 2 is pre-liked

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
    };

    // Common pill styling
    const pillSx = {
        border: '1px solid #e0e0e0',
        borderRadius: '25px',
        px: '14px',
        py: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.02)',
        flexShrink: 0
    };

    const pillTextSx = {
        fontSize: '12px',
        fontWeight: 600,
        color: darkMode ? '#ddd' : '#333',
        fontFamily: 'Poppins'
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: { xs: '100%', md: currentCV ? '100%' : '706px', lg: currentCV ? '1300px' : '706px' },
            gap: { xs: '0px', md: currentCV ? '20px' : '0px' },
            height: 'auto',
            minHeight: '800px',
            alignItems: 'flex-start',
            transition: 'width 0.3s ease'
        }}>
            {/* List column */}
            <Box sx={{
                width: { xs: '100%', md: currentCV ? '380px' : '100%', lg: currentCV ? '500px' : '100%' },
                display: { xs: currentCV ? 'none' : 'flex', md: 'flex' },
                flexDirection: 'column',
                height: { xs: 'auto', md: '874px' },
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                overflow: 'hidden',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                boxSizing: 'border-box'
            }}>
                {/* ── HEADER AREA ── */}
                <Box sx={{ px: '25px', pt: '25px', pb: '10px' }}>
                    {/* Row 1: Left (Flag + standard pills) ... Right (Sort) */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '18px' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            {/* Country Dropdown Component */}
                            <Box onClick={(e) => setCountryAnchorEl(countryAnchorEl ? null : e.currentTarget)} sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', position: 'relative' }}>
                                <Box component="img" src={selectedCountry?.flag || saudiFlag} sx={{ width: '28px', height: '18px', borderRadius: '2px', objectFit: 'cover' }} />
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#ccc" : "#666"} strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                                {Boolean(countryAnchorEl) && (
                                    <Country darkMode={darkMode} onClose={() => setCountryAnchorEl(null)} onSelect={(c) => { setSelectedCountry(c); setCountryAnchorEl(null); }} />
                                )}
                            </Box>

                            {/* Date Posted */}
                            <Box onClick={() => setShowDateFilter(!showDateFilter)} sx={{ ...pillSx }}>
                                <Typography sx={{ ...pillTextSx }}>Date Posted</Typography>
                            </Box>
                        </Box>

                        {/* SORT COMPONENT */}
                        <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0, position: 'relative' }}>
                            <svg onClick={(e) => setSortAnchorEl(sortAnchorEl ? null : e.currentTarget)} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#fff" : "#222"} strokeWidth="3" style={{ cursor: 'pointer' }}>
                                <path d="M7 20l-4-4m4 4l4-4M7 20V4M17 4l-4 4m4-4l4 4M17 4v16"></path>
                            </svg>
                            {Boolean(sortAnchorEl) && (
                                <UpDownArrowBtn darkMode={darkMode} onClose={() => setSortAnchorEl(null)} onSelect={(s) => { setSelectedSort(s); setSortAnchorEl(null); }} selectedSort={selectedSort} />
                            )}
                        </Box>
                    </Box>

                    {/* Row 2: Left (Icons + All) ... Right (Pills) */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: '10px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {/* Filter icon */}
                            <Box onClick={(e) => setPriceAnchorEl(e.currentTarget)} sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#f0f0f0', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#fff" : "#222"} strokeWidth="2.5">
                                    <path d="M3 6h18M6 12h12M10 18h4"></path>
                                </svg>
                            </Box>
                            {/* Heart icon */}
                            <Box onClick={() => setShowOnlyFavorites(!showOnlyFavorites)} sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#f0f0f0', width: '34px', height: '34px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                {showOnlyFavorites ? (
                                    <FavoriteIcon sx={{ fontSize: '18px', color: darkMode ? '#fff' : 'rgba(0, 0, 0, 1)' }} />
                                ) : (
                                    <FavoriteBorderIcon sx={{ fontSize: '18px', color: darkMode ? '#fff' : '#000' }} />
                                )}
                            </Box>
                            {/* All */}
                            <Box sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.2)' : '#efefef', px: '16px', py: '6px', borderRadius: '20px', fontSize: '13px', color: darkMode ? '#fff' : '#000', fontWeight: 800, cursor: 'pointer', fontFamily: 'Poppins', flexShrink: 0 }}>
                                All
                            </Box>
                        </Box>

                        {/* Right pills */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                            {['Easy Apply', 'Availability'].map(label => (
                                <Box key={label} sx={{ border: '1px solid #E0E0E0', borderRadius: '25px', px: '14px', py: '5px', cursor: 'pointer', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    <Typography sx={{ fontSize: '11px', fontWeight: 600, color: darkMode ? '#ccc' : '#444', fontFamily: 'Poppins' }}>
                                        {label}
                                    </Typography>
                                </Box>
                            ))}

                            {/* Experiences Pill */}
                            <Box onClick={(e) => setExpAnchorEl(e.currentTarget)} sx={{ border: '1px solid #E0E0E0', borderRadius: '25px', px: '14px', py: '5px', cursor: 'pointer', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                <Typography sx={{ fontSize: '11px', fontWeight: 600, color: darkMode ? '#ccc' : '#444', fontFamily: 'Poppins' }}>
                                    Experiences
                                </Typography>
                            </Box>

                            {/* Skills Pill */}
                            <Box onClick={(e) => setSkillAnchorEl(e.currentTarget)} sx={{ border: '1px solid #E0E0E0', borderRadius: '25px', px: '14px', py: '5px', cursor: 'pointer', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                <Typography sx={{ fontSize: '11px', fontWeight: 600, color: darkMode ? '#ccc' : '#444', fontFamily: 'Poppins' }}>
                                    Skills
                                </Typography>
                            </Box>

                            {/* Job Level Pill */}
                            <Box onClick={(e) => setJobLevelAnchorEl(e.currentTarget)} sx={{ border: '1px solid #E0E0E0', borderRadius: '25px', px: '14px', py: '5px', cursor: 'pointer', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fff', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                <Typography sx={{ fontSize: '11px', fontWeight: 600, color: darkMode ? '#ccc' : '#444', fontFamily: 'Poppins' }}>
                                    Job Level
                                </Typography>
                            </Box>

                            {/* Experiences Popover */}
                            <Popover open={Boolean(expAnchorEl)} anchorEl={expAnchorEl} onClose={() => setExpAnchorEl(null)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                                style={{ zIndex: 1300 }}
                                PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible', mt: '12px' } }}>
                                <ExPop darkMode={darkMode} onClose={() => setExpAnchorEl(null)} />
                            </Popover>

                            {/* Skills Popover */}
                            <Popover open={Boolean(skillAnchorEl)} anchorEl={skillAnchorEl} onClose={() => setSkillAnchorEl(null)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                                style={{ zIndex: 1300 }}
                                PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible', mt: '12px' } }}>
                                <SkillPopup darkMode={darkMode} onClose={() => setSkillAnchorEl(null)} />
                            </Popover>

                            {/* Job Level Popover */}
                            <Popover open={Boolean(jobLevelAnchorEl)} anchorEl={jobLevelAnchorEl} onClose={() => setJobLevelAnchorEl(null)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                style={{ zIndex: 1300 }}
                                PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible', mt: '8px' } }}>
                                <JobLevelPop darkMode={darkMode} onClose={() => setJobLevelAnchorEl(null)} />
                            </Popover>

                            {/* Price Range Popover */}
                            <Popover open={Boolean(priceAnchorEl)} anchorEl={priceAnchorEl} onClose={() => setPriceAnchorEl(null)}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                style={{ zIndex: 1300 }}
                                PaperProps={{ sx: { bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible', mt: '12px', ml: '-10px' } }}>
                                <PriceRangePop darkMode={darkMode} onClose={() => setPriceAnchorEl(null)} />
                            </Popover>
                        </Box>
                    </Box>
                </Box>

                {/* ── CV LIST AREA ── */}
                <Box sx={{
                    flex: 1,
                    overflowY: 'auto',
                    px: '22px',
                    pb: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    '&::-webkit-scrollbar': { display: 'none' }
                }}>
                    {CV_DATA.filter(cv => !showOnlyFavorites || favorites.includes(cv.id)).map((cv) => (
                        <Box key={cv.id} onClick={(e) => { e.stopPropagation(); handleSelect(cv); }} sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '662px',
                            minHeight: '115px',
                            bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#fff',
                            borderRadius: '12px',
                            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #ECECEC',
                            display: 'flex',
                            overflow: 'hidden',
                            boxShadow: '0px 2px 10px rgba(0,0,0,0.02)',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: darkMode ? '0px 4px 15px rgba(0,0,0,0.4)' : '0px 4px 15px rgba(0,0,0,0.05)'
                            }
                        }}>
                            {/* Left edge background abstract */}
                            <Box
                                component="img"
                                src={cv.bg}
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: '69px',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />

                            {/* Profile Picture Overlay */}
                            <Box
                                component="img"
                                src={cv.pic}
                                sx={{
                                    position: 'absolute',
                                    left: '10px',
                                    top: '26px',
                                    width: '50px',
                                    height: '51px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2px solid #fff',
                                    zIndex: 1
                                }}
                            />

                            {/* Right Content Area */}
                            <Box sx={{
                                flex: 1,
                                pl: { xs: '75px', sm: '85px' },
                                pr: { xs: '10px', sm: '15px' },
                                pt: '15px',
                                pb: '15px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                position: 'relative',
                                minWidth: 0
                            }}>
                                {/* Actions (Share, Heart) top right */}
                                <Box sx={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '8px' }}>
                                    <ShareIcon sx={{ fontSize: '15px', color: '#666', cursor: 'pointer', '&:hover': { color: '#000' } }} />
                                    {favorites.includes(cv.id) ? (
                                        <FavoriteIcon onClick={() => toggleFavorite(cv.id)} sx={{ fontSize: '15px', color: darkMode ? '#fff' : 'rgba(0, 0, 0, 1)', cursor: 'pointer', transition: 'all 0.2s', transform: 'scale(1.1)' }} />
                                    ) : (
                                        <FavoriteBorderIcon onClick={() => toggleFavorite(cv.id)} sx={{ fontSize: '15px', color: '#666', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { color: darkMode ? '#fff' : 'rgba(0, 0, 0, 1)' } }} />
                                    )}
                                </Box>

                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '13px', color: darkMode ? '#fff' : '#111', lineHeight: 1.2, pr: '50px' }}>
                                    {cv.name}
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '6px', sm: '15px' }, mt: '4px', flexWrap: 'wrap' }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '10px', color: darkMode ? '#bbb' : '#444' }}>
                                        {cv.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '9px', color: '#333' }}>
                                            {cv.experience}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '9px', color: '#333' }}>
                                            {cv.location}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#888', mt: '6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {cv.desc}
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', mt: '6px', width: '100%' }}>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '10px',
                                        color: darkMode ? '#bbb' : '#444',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        width: '100%'
                                    }}>
                                        <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>Skills : </span> {cv.skills}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, gap: '6px', mt: '6px', flexDirection: { xs: 'column', sm: 'row' } }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '10px', color: darkMode ? '#fff' : '#111', flexShrink: 0 }}>
                                        Availability :
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                        {cv.availability.map(status => (
                                            <Box key={status} sx={{
                                                bgcolor: 'rgba(92, 184, 92, 0.65)',
                                                px: '6px', py: '2px', borderRadius: '12px',
                                                display: 'flex', alignItems: 'center', gap: '4px',
                                                border: '0.5px solid #4cae4c'
                                            }}>
                                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                <Typography sx={{ fontSize: '8px', fontWeight: 600, color: '#000', fontFamily: 'Poppins' }}>{status}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    ))}
                </Box>
                {/* Full-Screen Date Search Modal Rendering Logic */}
                {showDateFilter && (
                    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(0,0,0,0.4)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', p: '10px' }}>
                        <DatePosted darkMode={darkMode} onClose={() => setShowDateFilter(false)} onNext={() => setShowDateFilter(false)} />
                    </Box>
                )}
            </Box>

            {/* Detail Column */}
            {currentCV && (
                <Box sx={{
                    flex: 1,
                    display: { xs: 'flex', md: 'flex' },
                    flexDirection: 'column',
                    bgcolor: darkMode ? '#1e1e2e' : '#fff',
                    borderRadius: '15px',
                    boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                    border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                    overflowY: 'auto',
                    height: { xs: 'auto', md: '874px' },
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none',
                }}>
                    <CVDetail darkMode={darkMode} cvData={currentCV} onBack={handleDeselect} />
                </Box>
            )}
        </Box>
    );
};

export default CVPage;
