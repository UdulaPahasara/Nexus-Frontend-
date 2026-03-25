import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Assets
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp5 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import easyApplyIcon from '../../../assets/login/login.webp';
import ShareJob from '../partime/sharejob';

// Tool Icons
import figmaIcon from '../../../assets/jobs/freelance/figma.webp';
import xdIcon from '../../../assets/jobs/freelance/xd.webp';
import adobeIcon from '../../../assets/jobs/freelance/adob.webp';

// Previous Project Images
import post1 from '../../../assets/Home/post/post/post1.0.webp';
import post1_2 from '../../../assets/Home/post/post/post1.2.webp';
import post1_3 from '../../../assets/Home/post/post/post1.3.webp';
import post2 from '../../../assets/Home/post/post/post2.0.webp';
import post2_1 from '../../../assets/Home/post/post/post2.1.webp';
import post2_2 from '../../../assets/Home/post/post/post2.2.webp';
import post2_3 from '../../../assets/Home/post/post/post2.3.webp';


// ── Small helper: star row ─────────────────────────────────────────────────────
const StarRow = ({ rating = 4, ratingCount = '20k+', size = 12, darkMode }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map(s => (
            <svg key={s} width={size} height={size} viewBox="0 0 24 24"
                fill={s <= rating ? (darkMode ? '#fff' : '#111') : 'none'}
                stroke={s <= rating ? (darkMode ? '#fff' : '#111') : '#D1D5DB'}
                strokeWidth="2">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ))}
        <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: darkMode ? '#aaa' : '#555', ml: '5px' }}>
            {ratingCount}
        </Typography>
    </Box>
);

// ── Section header 
const SectionTitle = ({ children, darkMode }) => (
    <Typography sx={{ fontSize: '15px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins', mb: '12px' }}>
        {children}
    </Typography>
);

// ── Key-value row used in Project Overview 
const InfoRow = ({ label, children, darkMode }) => (
    <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '4px', sm: '8px' }, mb: '12px' }}>
        <Typography sx={{ fontSize: '12px', fontWeight: 600, color: darkMode ? '#888' : '#444', fontFamily: 'Poppins', minWidth: { xs: 'auto', sm: '100px' } }}>
            {label}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {children}
        </Box>
    </Box>
);

// ── Previous project card ──────────────────────────────────────────────────────
const PrevProjectCard = ({ title, role, location, date, desc, darkMode, thumbs, logo }) => (
    <Box sx={{
        bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#F5F5F5',
        borderRadius: '20px',
        p: '20px',
        mb: '20px',
    }}>
        {/* Header Row */}
        <Box sx={{ display: 'flex', gap: '15px', mb: '10px', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center', flex: 1, width: '100%' }}>
                <Box component="img" src={logo}
                    sx={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: { xs: '16px', sm: '18px' }, color: darkMode ? '#fff' : '#111', lineHeight: 1.2 }}>
                        {title}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888', mt: '2px' }}>
                        Role: {role}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'column' }, alignItems: { xs: 'center', sm: 'flex-end' }, justifyContent: 'space-between', width: { xs: '100%', sm: 'auto' }, gap: '5px' }}>
                <Box sx={{ bgcolor: '#00EA8E', color: '#000', px: '15px', py: '5px', borderRadius: '20px', fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,234,142,0.3)', '&:hover': { bgcolor: '#00d682' } }}>
                    Visit Site
                </Box>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#aaa' }}>
                    {location}
                </Typography>
            </Box>
        </Box>

        {/* Description */}
        <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: darkMode ? '#bbb' : '#666', lineHeight: 1.6, mb: '8px' }}>
            {desc}
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#aaa', mb: '15px' }}>
            {date}
        </Typography>

        {/* Separate Thumbnails */}
        <Box sx={{
            display: 'flex', gap: '12px', flexWrap: 'nowrap', overflowX: 'auto',
            pb: '10px',
            '&::-webkit-scrollbar': { height: '4px' },
            '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.1)', borderRadius: '10px' }
        }}>
            {thumbs.map((src, i) => (
                <Box key={i} component="img" src={src}
                    sx={{ width: { xs: '130px', sm: '150px' }, height: { xs: '130px', sm: '150px' }, borderRadius: '15px', objectFit: 'cover', flexShrink: 0 }} />
            ))}
        </Box>
    </Box>
);

// ══════════════════════════════════════════════════════════════════════════════
// Main Component
// ══════════════════════════════════════════════════════════════════════════════
const FreelanceJobDetail = ({ darkMode, onBack, job }) => {
    const [shareAnchorEl, setShareAnchorEl] = useState(null);
    const [message, setMessage] = useState('');

    const currentJob = job || {
        company: 'Anura De Silva',
        location: 'Colombo, Sri Lanka | Onsite',
        time: '2 hours ago',
        icon: mp1,
        rating: 4,
        ratingCount: '20k+',
        budget: '550,000',
        projectTitle: 'Project Freeze Web Application Lorem Lipsum Isom',
        poster: mp5,
    };

    return (
        <Box sx={{
            width: '100%',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100%',
            fontFamily: 'Poppins, sans-serif',
        }}>
            {/* ── TOP NAV BAR ─────────────────────────────────────────────── */}
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                px: '20px', py: '12px',
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef',
                flexShrink: 0,
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Box onClick={onBack} sx={{ cursor: 'pointer', color: darkMode ? '#fff' : '#000', display: 'flex' }}>
                        <CloseIcon sx={{ fontSize: '18px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Jobs / Freelance
                    </Typography>
                </Box>
                <Box onClick={(e) => setShareAnchorEl(e.currentTarget)} sx={{ color: darkMode ? '#fff' : '#000', cursor: 'pointer' }}>
                    <MoreHorizIcon sx={{ fontSize: '20px' }} />
                </Box>
            </Box>

            <ShareJob anchorEl={shareAnchorEl} open={Boolean(shareAnchorEl)} onClose={() => setShareAnchorEl(null)} darkMode={darkMode} />

            {/* ── SCROLLABLE CONTENT ──────────────────────────────────────── */}
            <Box sx={{ flex: 1, overflowY: 'auto', p: '20px', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>

                {/* ── CLIENT PROFILE CARD ──────────────────────────────────── */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '6px' }}>
                    <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <Box component="img" src={currentJob.icon}
                            sx={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }} />
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mb: '2px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>
                                    {currentJob.company}
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '16px', color: '#0077B5' }} />
                            </Box>
                            <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins', mb: '4px' }}>
                                {currentJob.time}
                            </Typography>
                            <StarRow rating={currentJob.rating} ratingCount={currentJob.ratingCount} size={12} darkMode={darkMode} />
                        </Box>
                    </Box>
                    <IconButton sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5', p: '8px', flexShrink: 0 }}>
                        <NotificationsNoneIcon sx={{ fontSize: '20px', color: '#666' }} />
                    </IconButton>
                </Box>

                {/* Description */}
                <Typography sx={{ fontSize: '12px', color: '#888', lineHeight: 1.6, mb: '12px', fontFamily: 'Poppins' }}>
                    Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit amet consectetur.
                    Accumsan mi vulputate ut lorem non vivamus sit
                </Typography>

                {/* Connection info */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '20px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box component="img" src={mp1} sx={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #fff' }} />
                        <Box component="img" src={mp6} sx={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid #fff', ml: '-8px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins' }}>
                        <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>Can jeo</span> and{' '}
                        <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>5 others</span> are contact
                    </Typography>
                </Box>

                {/* Save + Apply Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '12px', flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                    <Button
                        variant="contained"
                        startIcon={<BookmarkBorderIcon sx={{ fontSize: '15px !important' }} />}
                        sx={{
                            bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                            color: darkMode ? '#fff' : '#000',
                            borderRadius: '10px', fontWeight: 600, fontSize: { xs: '10px', sm: '11px' },
                            textTransform: 'none', px: '14px', py: '5px',
                            boxShadow: 'none', fontFamily: 'Poppins', whiteSpace: 'nowrap',
                            '&:hover': { bgcolor: '#ddd', boxShadow: 'none' }
                        }}>
                        SAVE JOB
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={<Box component="img" src={easyApplyIcon} sx={{ width: '20px', height: '17px' }} />}
                        sx={{
                            bgcolor: '#000', color: '#fff',
                            borderRadius: '100px', fontWeight: 700, fontSize: { xs: '11px', sm: '13px' },
                            textTransform: 'none', px: { xs: '20px', sm: '28px' }, py: '5px',
                            boxShadow: 'none', fontFamily: 'Poppins', whiteSpace: 'nowrap',
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)', boxShadow: 'none' }
                        }}>
                        APPLY NOW
                    </Button>

                    <Typography sx={{ fontSize: '11px', color: '#00EA8E', fontFamily: 'Poppins', fontWeight: 600, whiteSpace: 'nowrap', ml: { xs: '0', sm: 'auto' }, width: { xs: '100%', sm: 'auto' }, textAlign: { xs: 'center', sm: 'left' }, mt: { xs: '5px', sm: '0' } }}>
                        ✦ Apply within 8 days
                    </Typography>
                </Box>

                {/* ── PROJECT OVERVIEW ─────────────────────────────────────── */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mt: '16px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>Project Overview</SectionTitle>

                    <InfoRow label="Position :" darkMode={darkMode}>
                        <Typography sx={{ fontSize: '12px', color: darkMode ? '#aaa' : '#555', fontFamily: 'Poppins' }}>
                            Frontend Developer Intern
                        </Typography>
                        <Box sx={{ bgcolor: '#00EA8E', color: '#000', px: '7px', py: '1px', borderRadius: '12px', fontSize: '9px', fontWeight: 700, fontFamily: 'Poppins' }}>
                            HIRED
                        </Box>
                    </InfoRow>

                    <InfoRow label="Category :" darkMode={darkMode}>
                        <Typography sx={{ fontSize: '12px', color: darkMode ? '#aaa' : '#555', fontFamily: 'Poppins' }}>
                            Frontend Develop
                        </Typography>
                    </InfoRow>

                    <InfoRow label="Duration :" darkMode={darkMode}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Box sx={{ border: '1px solid #aaa', borderRadius: '4px', px: '7px', py: '1px', fontSize: '9px', fontWeight: 600, fontFamily: 'Poppins', color: '#888' }}>
                                6 Months
                            </Box>
                            <Box sx={{ border: '1px solid #00EA8E', borderRadius: '4px', px: '7px', py: '1px', fontSize: '9px', fontWeight: 600, fontFamily: 'Poppins', color: '#00EA8E' }}>
                                Unpaid Internship
                            </Box>
                        </Box>
                    </InfoRow>

                    <InfoRow label="Location :" darkMode={darkMode}>
                        <Typography sx={{ fontSize: '12px', color: darkMode ? '#aaa' : '#555', fontFamily: 'Poppins' }}>
                            Colombo Sri Lanka
                        </Typography>
                    </InfoRow>

                    <InfoRow label="Working Hours :" darkMode={darkMode}>
                        <Typography sx={{ fontSize: '12px', color: darkMode ? '#aaa' : '#555', fontFamily: 'Poppins' }}>
                            9:00 AM – 1:00 PM (Monday, Wednesday, Friday)
                        </Typography>
                    </InfoRow>

                    {/* Visa Sponsored badge */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '4px' }}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            bgcolor: '#E8F5E9',
                            borderRadius: '20px', px: '15px', py: '6px',
                        }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#2E7D32', fontFamily: 'Poppins' }}>
                                Visa Sponsored
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* ── ABOUT THE PROJECT ─────────────────────────────────────── */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>About the Project</SectionTitle>
                    <Typography sx={{ fontSize: '13px', color: '#888', lineHeight: 1.6, mb: '20px', fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id.
                        Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: { xs: '20px', sm: '40px' }, flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row' } }}>
                        {/* Tools list */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'Figma', icon: figmaIcon },
                                { name: 'AdobeXD', icon: xdIcon },
                                { name: 'Photoshop', icon: adobeIcon }
                            ].map((tool) => (
                                <Box key={tool.name} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Box component="img" src={tool.icon}
                                        sx={{ width: '22px', height: '22px', borderRadius: '4px', objectFit: 'contain' }} />
                                    <Typography sx={{ fontSize: '13px', color: '#aaa', fontFamily: 'Poppins' }}>{tool.name}</Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Deliverables list */}
                        <Box>
                            <Typography sx={{ fontSize: '13px', color: '#888', fontWeight: 600, mb: '8px', fontFamily: 'Poppins' }}>
                                Deliverables
                            </Typography>
                            {[
                                '1. Landing page UI in Figma',
                                '2. Mobile + Web version',
                                '3. Developer Handoff Files',
                                '4. Office Infrastructure Setup'
                            ].map((item, i) => (
                                <Typography key={i} sx={{ fontSize: '13px', color: '#aaa', fontFamily: 'Poppins', mb: '4px' }}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* ── ABOUT CLIENT ─────────────────────────────────────────── */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>About Client</SectionTitle>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '12px' }}>
                        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <Box component="img" src={currentJob.poster || mp5}
                                sx={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }} />
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', mb: '2px' }}>
                                    <Typography sx={{ fontWeight: 700, fontSize: '14px', color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>
                                        {currentJob.company}
                                    </Typography>
                                    <CheckCircleIcon sx={{ fontSize: '14px', color: '#0077B5' }} />
                                </Box>
                                <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins' }}>
                                    NEXUS Connect
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#00EA8E', color: '#00EA8E',
                                textTransform: 'none', borderRadius: '100px',
                                fontWeight: 700, px: '20px', py: '4px', fontSize: '12px',
                                fontFamily: 'Poppins',
                                '&:hover': { bgcolor: 'rgba(0,234,142,0.05)', borderColor: '#00EA8E' }
                            }}>
                            Follow
                        </Button>
                    </Box>

                    {/* Mutual connection */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '14px' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box component="img" src={mp1} sx={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #fff' }} />
                            <Box component="img" src={mp6} sx={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #fff', ml: '-7px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins' }}>
                            <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>Anuradha</span> and{' '}
                            <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>Kasun</span> works here
                        </Typography>
                    </Box>

                    <Typography sx={{ fontSize: '12px', color: '#888', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id.
                        Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl. Dignissim sit justo velit id mauris mollis.
                        Quisque tortor blandit est sodales nulla.
                    </Typography>
                </Box>

                {/* ── SEND MESSAGE ─────────────────────────────────────────── */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>Send Message to Client</SectionTitle>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: { xs: 'stretch', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Box sx={{
                            flex: 1,
                            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0e0e0',
                            borderRadius: '12px', overflow: 'hidden',
                        }}>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Hi! I would like to know more about..."
                                rows={2}
                                style={{
                                    width: '100%', border: 'none', outline: 'none', resize: 'none',
                                    padding: '12px 14px', fontFamily: 'Poppins', fontSize: '13px',
                                    color: darkMode ? '#ccc' : '#333',
                                    background: 'transparent',
                                    boxSizing: 'border-box',
                                }}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#00EA8E', color: '#fff',
                                borderRadius: '10px', px: '20px', py: { xs: '10px', sm: '12px' },
                                fontWeight: 700, fontSize: '14px', textTransform: 'none',
                                fontFamily: 'Poppins', boxShadow: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                                '&:hover': { bgcolor: '#00d682', boxShadow: 'none' }
                            }}>
                            SEND MASSAGE
                        </Button>
                    </Box>

                    {/* Contact info row */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '15px', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '15px', sm: '0' } }}>
                        {/* Email box */}
                        <Box
                            onClick={() => window.location.href = 'mailto:anuradesilva@gmail.com'}
                            sx={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                        >
                            <Box sx={{ width: '28px', height: '28px', bgcolor: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </Box>
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins', wordBreak: 'break-all' }}>anuradesilva@gmail.com</Typography>
                        </Box>

                        {/* Phone box */}
                        <Box
                            onClick={() => window.location.href = 'tel:+94768867895'}
                            sx={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', '&:hover': { opacity: 0.8 }, alignSelf: { xs: 'flex-start', sm: 'auto' } }}
                        >
                            <Typography sx={{ fontSize: '13px', color: '#888', fontFamily: 'Poppins' }}>+94 768 867 89...</Typography>
                            <Box sx={{ width: '28px', height: '28px', bgcolor: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.02c-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.72 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* ── PREVIOUS PROJECTS ────────────────────────────────────── */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px' }}>
                    <SectionTitle darkMode={darkMode}>Previous projects</SectionTitle>

                    <PrevProjectCard
                        title="Spa Ceylon Website Design"
                        role="UI/UX Designer"
                        location="Colombo, Western"
                        date="Jan 2022 - Sep 2022"
                        desc="Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Eget Amet Elit Massa Sodales At Consequat. Varius Mi Tristique Sapien Et Aenean Magna. Mus Enim Nunc Vestibulum Suspendisse."
                        darkMode={darkMode}
                        thumbs={[post1, post1_2, post1_3]}
                        logo={mp1}
                    />

                    <PrevProjectCard
                        title="Cool Planet Website Design and Development"
                        role="UI/UX Designer"
                        location="Colombo, Western"
                        date="Jan 2022 - Sep 2022"
                        desc="Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Eget Amet Elit Massa Sodales At Consequat. Varius Mi Tristique Sapien Et Aenean Magna. Mus Enim Nunc Vestibulum Suspendisse."
                        darkMode={darkMode}
                        thumbs={[post2, post2_1, post2_2, post2_3]}
                        logo={mp5}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default FreelanceJobDetail;
