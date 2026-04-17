import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Typography, Avatar, Divider, Button } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

// Profile pics
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp2 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp2.webp';
import mp3 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp3.webp';
import mp4 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp4.webp';
import mp5 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';

// Browse by Category icons
import fulltimeIcon from '../../../assets/Home/sevice/fulltime.webp';
import parttimeIcon from '../../../assets/Home/sevice/parttime.webp';
import volunteerIcon from '../../../assets/Home/sevice/volunteer.webp';
import internshipIcon from '../../../assets/Home/sevice/internship.webp';
import freelanceIcon from '../../../assets/Home/sevice/freelance.webp';
import servicesIcon from '../../../assets/Home/sevice/services.webp';
import cvIcon from '../../../assets/Home/sevice/cv.webp';
import companiesIcon from '../../../assets/Home/sevice/companies.webp';

// ─── Data ──────────────────────────────────────────────────────────────────

const recentProfiles = [
    { name: 'Nilantha\nJayasur...', avatar: mp1, online: true },
    { name: 'Adithya\nDe Silva', avatar: mp2, online: false },
    { name: 'Senuk\nKamas...', avatar: mp3, online: false },
    { name: 'Nimal\nJayasinghe', avatar: mp4, online: true },
    { name: 'Asela\nSampath', avatar: mp5, online: false },
    { name: 'Ranjith\nFernando', avatar: mp6, online: false },
];

const recentSearches = [
    'UI/UX Intern Jobs',
    'Intern Jobs',
];

const categories = [
    { icon: fulltimeIcon, label: 'Full Time' },
    { icon: parttimeIcon, label: 'Part Time' },
    { icon: volunteerIcon, label: 'Volunteer' },
    { icon: internshipIcon, label: 'Internship' },
    { icon: freelanceIcon, label: 'Freelance' },
    { icon: servicesIcon, label: 'Services' },
    { icon: cvIcon, label: 'CV' },
    { icon: companiesIcon, label: 'Companies' },
];

// ─── Component ─────────────────────────────────────────────────────────────

const SearchBarPopup = ({ darkMode = false, onClose, onAdvanceSearch }) => {
    const bg = darkMode ? '#1e1e2e' : '#FFFFFF';
    const textPrimary = darkMode ? '#fff' : '#000';
    const textSecondary = darkMode ? '#aaa' : '#444';

    return ReactDOM.createPortal(
        // Overlay backdrop — click outside to close
        <Box
            onClick={onClose}
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 200,
                bgcolor: 'transparent',
            }}
        >
            {/* Popup card — stop propagation so clicking inside doesn't close */}
            <Box
                onClick={(e) => e.stopPropagation()}
                sx={{
                    position: 'absolute',
                    top: { xs: '60px', md: '55px' },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: 'calc(100vw - 24px)', sm: '463px' },
                    maxWidth: '463px',
                    bgcolor: bg,
                    borderRadius: '10px',
                    boxShadow: darkMode
                        ? '0px 8px 40px rgba(0,0,0,0.7)'
                        : '0px 8px 40px rgba(0,0,0,0.15)',
                    overflow: 'hidden',
                    pb: '16px',
                }}
            >
                {/* ── RECENT PROFILES ───────────────────────────────── */}
                {/* Row header: "Recent" + "View All" */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pt: '26px',
                    px: '11px',
                    mb: '10px',
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: '13px',
                        lineHeight: '16px',
                        color: textPrimary,
                    }}>
                        Recent
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '12px',
                        color: darkMode ? '#ccc' : '#111',
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' },
                    }}>
                        View All
                    </Typography>
                </Box>

                {/* Profile circle row — top:50 left:11 width:441 height:80 */}
                <Box sx={{
                    px: '11px',
                    display: 'flex',
                    gap: { xs: '8px', sm: '12px' },
                    overflowX: 'auto',
                    pb: '6px',
                    '&::-webkit-scrollbar': { display: 'none' },
                }}>
                    {recentProfiles.map((p, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '4px',
                                minWidth: '60px',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Profile pic: width:40 height:40 border-width:1px */}
                            <Box sx={{ position: 'relative', flexShrink: 0 }}>
                                <Avatar
                                    src={p.avatar}
                                    sx={{
                                        width: '40px',
                                        height: '40px',
                                        border: '1px solid #E0E0E0',
                                    }}
                                />
                                {/* Online dot */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: '1px',
                                    right: '1px',
                                    width: '9px',
                                    height: '9px',
                                    bgcolor: p.online ? '#00E783' : '#BDBDBD',
                                    borderRadius: '50%',
                                    border: `1.5px solid ${bg}`,
                                }} />
                            </Box>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '9px',
                                fontWeight: 500,
                                textAlign: 'center',
                                color: textSecondary,
                                lineHeight: 1.3,
                                whiteSpace: 'pre-line',
                            }}>
                                {p.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Divider sx={{ mx: '11px', my: '12px', borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }} />

                {/* ── RECENT SEARCHES ───────────────────────────────── */}
                <Box sx={{ px: '11px', display: 'flex', flexDirection: 'column', gap: '10px', mb: '4px' }}>
                    {recentSearches.map((term, idx) => (
                        <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <HistoryIcon sx={{ fontSize: '16px', color: '#A9A9A9' }} />
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: textPrimary,
                                }}>
                                    {term}
                                </Typography>
                            </Box>
                            {/* Only first search item has "View All" — matches Figma */}
                            {idx === 0 && (
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '11px',
                                    color: darkMode ? '#ccc' : '#111',
                                    cursor: 'pointer',
                                    '&:hover': { textDecoration: 'underline' },
                                }}>
                                    View All
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>

                <Divider sx={{ mx: '11px', my: '12px', borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }} />

                {/* ── BROWSE BY CATEGORY ─────────────────────────────── */}
                {/* Header */}
                <Box sx={{ px: '11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '14px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '13px', color: textPrimary }}>
                        Browse by Category
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500, color: darkMode ? '#ccc' : '#111', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                        View All
                    </Typography>
                </Box>

                {/* Category grid — 2 rows × up to 5 icons, scroll if narrow */}
                {/* width:441 height:191 gap:27 */}
                <Box sx={{ px: '12px' }}>
                    {/* Row 1 */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: { xs: '8px', sm: '0px' },
                        mb: '16px',
                        overflowX: { xs: 'auto', sm: 'visible' },
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}>
                        {categories.slice(0, 5).map((cat, idx) => (
                            <CategoryItem key={idx} icon={cat.icon} label={cat.label} darkMode={darkMode} />
                        ))}
                    </Box>
                    {/* Row 2 */}
                    <Box sx={{
                        display: 'flex',
                        gap: { xs: '8px', sm: '27px' },
                        mb: '8px',
                    }}>
                        {categories.slice(5).map((cat, idx) => (
                            <CategoryItem key={idx} icon={cat.icon} label={cat.label} darkMode={darkMode} />
                        ))}
                    </Box>
                </Box>

                {/* ── Advance Search CTA ──────────────────────────────── */}
                <Box sx={{ px: '12px', display: 'flex', justifyContent: 'flex-end', mt: '12px' }}>
                    <Button
                        onClick={() => {
                            onAdvanceSearch && onAdvanceSearch();
                            onClose && onClose();
                        }}
                        disableRipple
                        sx={{
                            bgcolor: '#00E783',
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '12px',
                            borderRadius: '20px',
                            px: '18px',
                            py: '7px',
                            textTransform: 'none',
                            '&:hover': { bgcolor: '#00d175' },
                        }}
                    >
                        Advance Search
                    </Button>
                </Box>
            </Box>
        </Box>
        , document.body);
};

// ─── Sub-component: Category Icon + Label ──────────────────────────────────

const CategoryItem = ({ icon, label, darkMode }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
        minWidth: '60px',
        '&:hover': { opacity: 0.8 },
    }}>
        <Box
            component="img"
            src={icon}
            alt={label}
            sx={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
            }}
        />
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: '10px',
            fontWeight: 500,
            color: darkMode ? '#ccc' : '#333',
            textAlign: 'center',
            lineHeight: 1.2,
        }}>
            {label}
        </Typography>
    </Box>
);

export default SearchBarPopup;
