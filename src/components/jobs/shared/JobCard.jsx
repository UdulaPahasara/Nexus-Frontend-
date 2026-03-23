import React from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/**
 * JobCard Component
 * 
 * A highly reusable, responsive job listing card component utilized across multiple tabs (e.g., Part-Time, Full-Time).
 * It elegantly adapts its inner layout and typography scaling based on the `isCompact` flag (for narrow/mobile views).
 * 
 * @param {Object} job - The structured job data object (title, company, location, time, icon, type, status).
 * @param {boolean} darkMode - State flag to adjust visual semantics for dark mode.
 * @param {boolean} isFavorite - Status flag indicating if the specific job has been favorited by the user.
 * @param {function} onToggleFavorite - Callback function executed when the user toggles the favorite state.
 * @param {function} onClick - Callback function triggered when the user selects the card to view its details.
 * @param {boolean} isActive - Flag indicating if this specific job card is currently active/viewed in the split panel.
 * @param {boolean} isCompact - Responsive boolean to condense the card's styling matrix for smaller container widths.
 * @param {string} forcedType - Optional override to explicitly set the job type rendering metric (e.g., 'Full-Time').
 */
const JobCard = ({ job, darkMode, isFavorite, onToggleFavorite, onClick, isActive, isCompact, forcedType }) => {
    const jobTypeLabel = forcedType || job.type || 'Part-Time';
    const isFullTime = jobTypeLabel === 'Full-Time';

    return (
        <Box
            onClick={onClick}
            sx={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                gap: isCompact ? '8px' : '12px',
                py: isCompact ? '12px' : '20px',
                px: isCompact ? '10px' : '15px',
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f0f0f0',
                position: 'relative',
                bgcolor: isActive ? (darkMode ? 'rgba(0, 234, 142, 0.05)' : '#F5F5F5') : 'transparent',
                transition: 'all 0.2s',
                borderLeft: isActive ? '3px solid #00EA8E' : '3px solid transparent',
                '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#fcfcfc' }
            }}>

            {/* --- ACTION ICONS (Top Right: Heart / Close) --- */}
            <Box
                onClick={(e) => {
                    e.stopPropagation();
                    if (!isCompact) onToggleFavorite(job.id);
                }}
                sx={{ position: 'absolute', top: isCompact ? '12px' : '22px', right: isCompact ? '12px' : '20px', cursor: 'pointer', color: isFavorite && !isCompact ? '#000' : '#888' }}
            >
                {isCompact ? (
                    !isActive && <CloseIcon sx={{ fontSize: '16px', color: '#666' }} />
                ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                )}
            </Box>

            {/* --- COMPANY BRANDING ICON --- */}
            <Box
                component="img"
                src={job.icon}
                sx={{
                    width: isCompact ? '45px' : '64px',
                    height: isCompact ? '45px' : '64px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                    mt: '2px',
                    flexShrink: 0
                }}
            />

            {/* --- CARD METADATA CONTENT --- */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0, pr: isCompact ? '20px' : '30px' }}>

                {/* Title & Type Badge Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: isCompact ? '13px' : '18px',
                        color: darkMode ? '#fff' : '#333',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {job.title}
                    </Typography>

                    {/* Dynamic Job Type Badge */}
                    <Box sx={{
                        bgcolor: '#8ED2A4',
                        color: '#000',
                        px: '6px',
                        py: '2px',
                        borderRadius: '12px',
                        fontSize: '9px',
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px',
                        flexShrink: 0
                    }}>
                        {isFullTime ? (
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                        ) : (
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        )}
                        {jobTypeLabel}
                    </Box>
                </Box>

                {/* Company & Location Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexWrap: 'nowrap' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: isCompact ? '10px' : '13px',
                        color: darkMode ? '#888' : '#333',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {job.company}
                    </Typography>
                    <Box sx={{ width: isCompact ? '10px' : '14px', height: isCompact ? '10px' : '14px', bgcolor: '#00A0DC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width={isCompact ? "6" : "8"} height={isCompact ? "6" : "8"} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: isCompact ? '10px' : '13px',
                        color: '#888',
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>
                        {isCompact ? job.location.split(',')[0] : job.location}
                    </Typography>
                </Box>

                {/* Description Snippet */}
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: isCompact ? '10px' : '12px',
                    color: '#888',
                    mb: isCompact ? '4px' : '8px',
                    lineHeight: 1.2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
                </Typography>

                {/* Footer Metrics (Time & Tags) */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: isCompact ? '8px' : '15px', flexWrap: 'nowrap' }}>
                    <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#aaa', fontFamily: 'Poppins' }}>{job.time}</Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0 }}>
                        <Box sx={{ color: '#8ED2A4', display: 'flex', alignItems: 'center' }}>
                            <svg width={isCompact ? "10" : "14"} height={isCompact ? "10" : "14"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </Box>
                        <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#555', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                    </Box>

                    {job.status === 'already-applied' && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', flexShrink: 0 }}>
                            <Box sx={{
                                bgcolor: '#00EA8E',
                                color: '#fff',
                                borderRadius: '3px',
                                width: isCompact ? '10px' : '14px',
                                height: isCompact ? '10px' : '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width={isCompact ? "6" : "10"} height={isCompact ? "6" : "10"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </Box>
                            <Typography sx={{ fontSize: isCompact ? '9px' : '11px', color: '#555', fontWeight: 600, fontFamily: 'Poppins' }}>Already Applied</Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default JobCard;
