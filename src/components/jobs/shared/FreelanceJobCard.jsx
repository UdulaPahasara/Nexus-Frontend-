import React from 'react';
import { Box, Typography } from '@mui/material';
import easyApplyIcon from '../../../assets/login/login.webp';
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';

const FreelanceJobCard = ({ job, darkMode, isFavorite, onToggleFavorite, onClick, isActive, isCompact }) => {
    const rating = job.rating ?? 4;
    const ratingCount = job.ratingCount ?? '20k+';

    return (
        <Box
            onClick={onClick}
            sx={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                py: isCompact ? '12px' : { xs: '14px', sm: '18px' },
                px: isCompact ? '10px' : { xs: '12px', sm: '15px' },
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f0f0f0',
                bgcolor: isActive ? (darkMode ? 'rgba(0, 234, 142, 0.05)' : '#F5F5F5') : 'transparent',
                transition: 'all 0.2s',
                borderLeft: isActive ? '3px solid #00EA8E' : '3px solid transparent',
                boxSizing: 'border-box',
                '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#fcfcfc' }
            }}
        >
            {/* ── TOP ROW: Logo + Company + Pill + Heart ── */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                {/* Company Logo */}
                <Box
                    component="img"
                    src={job.icon}
                    sx={{
                        width: isCompact ? '45px' : { xs: '50px', sm: '64px' },
                        height: isCompact ? '45px' : { xs: '50px', sm: '64px' },
                        borderRadius: '10px',
                        objectFit: 'cover',
                        flexShrink: 0,
                    }}
                />

                {/* Content area */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    {/* Company name row + pill + heart */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '2px', gap: '8px' }}>
                        {/* Company name + verified */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: 0 }}>
                            <Typography sx={{
                                fontFamily: 'Poppins', fontWeight: 700, fontSize: isCompact ? '12px' : { xs: '13px', sm: '15px' },
                                color: darkMode ? '#fff' : '#111', lineHeight: 1.2,
                                display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                            }}>
                                {job.company}
                            </Typography>
                            <Box sx={{ width: '12px', height: '12px', bgcolor: '#00A0DC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ bgcolor: '#00EA8E', color: '#000', px: '8px', py: '1px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <Typography sx={{ fontSize: '9px', fontWeight: 600, fontFamily: 'Poppins' }}>Freelance</Typography>
                            </Box>
                            {!isCompact && (
                                <Box
                                    onClick={(e) => { e.stopPropagation(); if (onToggleFavorite) onToggleFavorite(job.id); }}
                                    sx={{ cursor: 'pointer', color: isFavorite ? '#000' : '#888' }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </Box>
                            )}
                        </Box>
                    </Box>

                    {/* Description */}
                    <Typography sx={{
                        fontFamily: 'Poppins', fontSize: isCompact ? '10px' : '12px',
                        color: darkMode ? '#aaa' : '#888', lineHeight: 1.4, mb: '5px',
                        display: { xs: 'none', sm: '-webkit-box' }, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                    }}>
                        Lorem ipsum dolor sit amet consectetur ipsum kdfke ipsum dolor sit amet consectetur ipsum kdfke
                    </Typography>

                    {/* Location + Work mode */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'nowrap', overflow: 'hidden' }}>
                        <svg width={isCompact ? '10' : '12'} height={isCompact ? '10' : '12'} viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#aaa' : '#777'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <Typography sx={{
                            fontSize: isCompact ? '9px' : '11px', color: darkMode ? '#aaa' : '#777',
                            fontFamily: 'Poppins'
                        }}>
                            {job.location} | <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 600 }}>Ongoing</Box>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* ── STAR RATING ROW — below logo+content block ── */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px', mt: '6px' }}>
                {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} width={isCompact ? '11' : '14'} height={isCompact ? '11' : '14'} viewBox="0 0 24 24" fill={star <= rating ? (darkMode ? '#fff' : '#111') : 'none'} stroke={star <= rating ? (darkMode ? '#fff' : '#111') : '#D1D5DB'} strokeWidth="2">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
                <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: darkMode ? '#aaa' : '#555', fontFamily: 'Poppins', ml: '4px' }}>
                    {ratingCount}
                </Typography>
            </Box>

            {/* ── BOTTOM SECTION: Project Title + Budget ── */}
            <Box sx={{ mt: '10px', display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'flex-start' }, flexDirection: { xs: 'column', sm: 'row' }, gap: '10px' }}>
                {/* Left: project title + time + easy apply */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{
                        fontFamily: 'Poppins', fontWeight: 600,
                        fontSize: isCompact ? '11px' : '13px',
                        color: darkMode ? '#fff' : '#111',
                        mb: '5px', lineHeight: 1.3,
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                    }}>
                        {job.projectTitle || 'Project Freeze Web Application Lorem Lipsum Isom'}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '6px', sm: '10px' }, flexWrap: 'wrap' }}>
                        <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#aaa', fontFamily: 'Poppins', whiteSpace: 'nowrap', flexShrink: 0 }}>
                            {job.time}
                        </Typography>

                        {/* Connections Row - Hidden on mobile */}
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '8px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component="img" src={mp1} sx={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #fff' }} />
                                <Box component="img" src={mp6} sx={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #fff', ml: '-7px' }} />
                            </Box>
                            <Typography sx={{ fontSize: '10px', color: '#888', fontFamily: 'Poppins' }}>
                                Anuradha Perera <Box component="span" sx={{ fontStyle: 'italic' }}>works here</Box>
                            </Typography>
                        </Box>

                        {/* Easy Apply */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                            <Box component="img" src={easyApplyIcon} sx={{ width: '13px', height: '13px', objectFit: 'contain' }} />
                            <Typography sx={{ fontSize: isCompact ? '9px' : '11px', fontWeight: 600, color: '#555', fontFamily: 'Poppins' }}>
                                Easy Apply
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Right: Budget */}
                {job.budget && (
                    <Box sx={{
                        display: 'flex', alignItems: 'center', gap: '5px',
                        bgcolor: darkMode ? 'rgba(255,255,255,0.06)' : '#F5F5F5',
                        borderRadius: '8px', px: '10px', py: '5px', flexShrink: 0,
                        width: { xs: 'fit-content', sm: 'auto' }
                    }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                            <rect x="1" y="4" width="22" height="16" rx="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                        <Typography sx={{ fontSize: isCompact ? '9px' : '11px', fontWeight: 600, color: darkMode ? '#ccc' : '#444', fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>
                            Budget  LKR {job.budget}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default FreelanceJobCard;
