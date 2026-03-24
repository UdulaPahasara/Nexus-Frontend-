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

// ── Section header ─────────────────────────────────────────────────────────────
const SectionTitle = ({ children, darkMode }) => (
    <Typography sx={{ fontSize: '15px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins', mb: '12px' }}>
        {children}
    </Typography>
);

// ── Key-value row used in Project Overview ─────────────────────────────────────
const InfoRow = ({ label, children, darkMode }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '8px' }}>
        <Typography sx={{ fontSize: '12px', fontWeight: 600, color: darkMode ? '#888' : '#444', fontFamily: 'Poppins', minWidth: '100px' }}>
            {label}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {children}
        </Box>
    </Box>
);

// ── Previous project card ──────────────────────────────────────────────────────
const PrevProjectCard = ({ title, darkMode, thumbs }) => (
    <Box sx={{
        border: darkMode ? '1px solid rgba(255,255,255,0.07)' : '1px solid #efefef',
        borderRadius: '12px',
        overflow: 'hidden',
        mb: '16px',
    }}>
        {/* Thumbnail strip */}
        <Box sx={{ display: 'flex', height: '80px', overflow: 'hidden' }}>
            {thumbs.map((src, i) => (
                <Box key={i} component="img" src={src}
                    sx={{ flex: 1, objectFit: 'cover', borderRight: i < thumbs.length - 1 ? '2px solid #fff' : 'none' }} />
            ))}
        </Box>
        {/* Info */}
        <Box sx={{ p: '10px 14px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '4px' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '13px', color: darkMode ? '#fff' : '#111' }}>
                    {title}
                </Typography>
                <Box sx={{ bgcolor: '#00EA8E', color: '#000', px: '8px', py: '1px', borderRadius: '20px', fontSize: '9px', fontWeight: 700, fontFamily: 'Poppins' }}>
                    Completed
                </Box>
            </Box>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#888', lineHeight: 1.5 }}>
                Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id.
                Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est sodales tortor sit nulla.
            </Typography>
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', mb: '8px', flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        startIcon={<BookmarkBorderIcon sx={{ fontSize: '15px !important' }} />}
                        sx={{
                            bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                            color: darkMode ? '#fff' : '#000',
                            borderRadius: '10px', fontWeight: 600, fontSize: '11px',
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
                            borderRadius: '100px', fontWeight: 700, fontSize: '13px',
                            textTransform: 'none', px: '28px', py: '5px',
                            boxShadow: 'none', fontFamily: 'Poppins', whiteSpace: 'nowrap',
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)', boxShadow: 'none' }
                        }}>
                        APPLY NOW
                    </Button>

                    <Typography sx={{ fontSize: '11px', color: '#00EA8E', fontFamily: 'Poppins', fontWeight: 600, whiteSpace: 'nowrap', ml: 'auto' }}>
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

                    {/* Budget badge */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '4px' }}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', gap: '6px',
                            bgcolor: darkMode ? 'rgba(255,255,255,0.06)' : '#F5F5F5',
                            borderRadius: '8px', px: '12px', py: '6px',
                        }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                                <rect x="1" y="4" width="22" height="16" rx="2" />
                                <line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                            <Typography sx={{ fontSize: '12px', fontWeight: 700, color: darkMode ? '#ccc' : '#333', fontFamily: 'Poppins' }}>
                                Via liya bond
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* ── ABOUT THE ROLE ────────────────────────────────────────── */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>About the Role</SectionTitle>
                    <Typography sx={{ fontSize: '12px', color: '#888', lineHeight: 1.6, mb: '16px', fontFamily: 'Poppins' }}>
                        Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna hendrerit mauris id.
                        Dignissim sit justo velit id. Lorem ipsum dolor sit amet consectetur. Non vitae nisl fringilla magna
                        hendrerit mauris id. Dignissim sit justo velit id mauris mollis. Quisque tortor blandit mattis est
                        sodales tortor sit nulla.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', mb: '10px' }}>
                        {[
                            ['Requirements', ['2+ years experience', 'Figma / Adobe XD', 'React / Next.js']],
                            ['Nice to have', ['1. Agile/Scrum experience', '2. Headless CMS', '3. UI Component libraries', '4. Client Management']],
                        ].map(([heading, items]) => (
                            <Box key={heading} sx={{ flex: 1, minWidth: '140px' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins', mb: '6px' }}>
                                    {heading}
                                </Typography>
                                {items.map((item, i) => (
                                    <Typography key={i} sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins', mb: '3px' }}>
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        ))}
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
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                        <Box sx={{
                            flex: 1,
                            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0e0e0',
                            borderRadius: '12px', overflow: 'hidden',
                        }}>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="So you want to talk about..."
                                rows={3}
                                style={{
                                    width: '100%', border: 'none', outline: 'none', resize: 'none',
                                    padding: '12px 14px', fontFamily: 'Poppins', fontSize: '12px',
                                    color: darkMode ? '#ccc' : '#333',
                                    background: darkMode ? 'rgba(255,255,255,0.03)' : '#fafafa',
                                    boxSizing: 'border-box',
                                }}
                            />
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#000', color: '#fff',
                                borderRadius: '10px', px: '18px', py: '10px',
                                fontWeight: 700, fontSize: '11px', textTransform: 'none',
                                fontFamily: 'Poppins', boxShadow: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                                '&:hover': { bgcolor: '#222', boxShadow: 'none' }
                            }}>
                            SEND MESSAGE
                        </Button>
                    </Box>

                    {/* Phone number hint */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '8px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', bgcolor: darkMode ? 'rgba(255,255,255,0.04)' : '#F5F5F5', borderRadius: '8px', px: '10px', py: '5px' }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <Typography sx={{ fontSize: '11px', color: '#666', fontFamily: 'Poppins' }}>+94 761 213 310</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* ── PREVIOUS PROJECTS ────────────────────────────────────── */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px' }}>
                    <SectionTitle darkMode={darkMode}>Previous projects</SectionTitle>

                    <PrevProjectCard
                        title="Spa Ceylon Website Design"
                        darkMode={darkMode}
                        thumbs={[mp1, mp5, mp6, mp1]}
                    />

                    <PrevProjectCard
                        title="Cool Planet Website Design and Development"
                        darkMode={darkMode}
                        thumbs={[mp5, mp6, mp1, mp5]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default FreelanceJobDetail;
