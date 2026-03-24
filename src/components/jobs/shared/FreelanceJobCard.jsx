import React from 'react';
import { Box, Typography } from '@mui/material';
import easyApplyIcon from '../../../assets/login/login.webp';

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
                py: isCompact ? '12px' : '18px',
                px: isCompact ? '10px' : '15px',
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
                        width: isCompact ? '45px' : '64px',
                        height: isCompact ? '45px' : '64px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                        flexShrink: 0,
                    }}
                />

                {/* Content area */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    {/* Company name row + pill + heart */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '4px' }}>
                        {/* Company name + verified */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: 0 }}>
                            <Typography sx={{
                                fontFamily: 'Poppins', fontWeight: 700, fontSize: isCompact ? '12px' : '15px',
                                color: darkMode ? '#fff' : '#111', lineHeight: 1.2,
                                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                            }}>
                                {job.company}
                            </Typography>
                            {/* Verified badge */}
                            <Box sx={{ width: isCompact ? '12px' : '15px', height: isCompact ? '12px' : '15px', bgcolor: '#00A0DC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </Box>
                        </Box>

                        {/* Right side: Freelance pill + heart */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>

                            <Box sx={{
                                bgcolor: '#00EA8E',
                                color: '#000',
                                px: '10px', py: '3px',
                                borderRadius: '20px',
                                fontSize: '11px', fontWeight: 700,
                                fontFamily: 'Poppins',
                                display: 'flex', alignItems: 'center', gap: '4px',
                            }}>
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                Freelance
                            </Box>

                            {/* Heart icon */}
                            <Box
                                onClick={(e) => { e.stopPropagation(); if (onToggleFavorite) onToggleFavorite(job.id); }}
                                sx={{ cursor: 'pointer', color: isFavorite ? '#000' : '#888' }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </Box>
                        </Box>
                    </Box>

                    {/* Description */}
                    <Typography sx={{
                        fontFamily: 'Poppins', fontSize: isCompact ? '10px' : '12px',
                        color: darkMode ? '#aaa' : '#888', lineHeight: 1.4,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        mb: '5px'
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
                            fontFamily: 'Poppins', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                        }}>
                            {job.location}&nbsp;
                            <Box component="span" sx={{ fontStyle: 'italic', fontWeight: 600 }}>Ongoing</Box>
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
            <Box sx={{ mt: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                {/* Left: project title + time + easy apply */}
                <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{
                        fontFamily: 'Poppins', fontWeight: 600,
                        fontSize: isCompact ? '11px' : '13px',
                        color: darkMode ? '#fff' : '#111',
                        mb: '5px',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                    }}>
                        {job.projectTitle || 'Project Freeze Web Application Lorem Lipsum Isom'}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#aaa', fontFamily: 'Poppins', whiteSpace: 'nowrap', flexShrink: 0 }}>
                            {job.time}
                        </Typography>

                        {/* Poster info */}
                        {job.poster && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                                <Box component="img" src={job.poster} sx={{ width: '16px', height: '16px', borderRadius: '50%', objectFit: 'cover' }} />
                                <Typography sx={{ fontSize: isCompact ? '9px' : '10px', color: '#888', fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>
                                    Anuradha Perera <Box component="span" sx={{ fontStyle: 'italic' }}>works here</Box>
                                </Typography>
                            </Box>
                        )}

                        {/* Easy Apply */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                            <Box component="img" src={easyApplyIcon} sx={{ width: isCompact ? '12px' : '16px', height: isCompact ? '12px' : '16px', objectFit: 'contain' }} />
                            <Typography sx={{ fontSize: isCompact ? '9px' : '11px', fontWeight: 600, color: '#333', fontFamily: 'Poppins' }}>
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
                        borderRadius: '8px', px: '10px', py: '5px', flexShrink: 0
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
