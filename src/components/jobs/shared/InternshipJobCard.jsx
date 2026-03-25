import React from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import easyApplyIcon from '../../../assets/login/login.webp';
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';

//InternshipJobCard Component
const InternshipJobCard = ({ job, darkMode, isFavorite, onToggleFavorite, onClick, isActive, isCompact }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                gap: '12px',
                py: '16px',
                px: '15px',
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #f0f0f0',
                position: 'relative',
                bgcolor: isActive ? (darkMode ? 'rgba(0, 234, 142, 0.05)' : '#F5F5F5') : 'transparent',
                borderLeft: isActive ? '3px solid #00EA8E' : '3px solid transparent',
            }}>

            {/* Favorite / Action Icon */}
            <Box
                onClick={(e) => {
                    e.stopPropagation();
                    if (!isCompact) onToggleFavorite(job.id);
                }}
                sx={{ position: 'absolute', top: '16px', right: '25px', color: isFavorite && !isCompact ? '#000' : '#888' }}
            >
                {isCompact ? (
                    !isActive && <CloseIcon sx={{ fontSize: '16px' }} />
                ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                )}
            </Box>

            {/* Company Logo */}
            <Box component="img" src={job.icon} sx={{ width: isCompact ? '48px' : '64px', height: isCompact ? '48px' : '64px', borderRadius: '12px', flexShrink: 0 }} />

            {/* Info */}
            <Box sx={{ flex: 1, minWidth: 0, pr: { xs: '35px', sm: '45px' } }}>
                {/* Title & Pills Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', mb: '6px' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins', fontWeight: 700, fontSize: isCompact ? '15px' : '18px', color: '#111', lineHeight: 1.2,
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                        flexGrow: 1, minWidth: '100px'
                    }}>
                        {job.title}
                    </Typography>

                    {/* Pills */}
                    <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', bgcolor: '#8ED2A4', px: '8px', py: '1px', borderRadius: '12px' }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M22 10L12 5l-10 5l10 5l10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                            <Typography sx={{ fontSize: '10px', fontWeight: 600, fontFamily: 'Poppins' }}>Intern</Typography>
                        </Box>
                        {job.duration && (
                            <Box sx={{ bgcolor: '#8ED2A4', px: '8px', py: '1px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Poppins' }}>
                                {job.duration}
                            </Box>
                        )}
                        {job.isPaid && (
                            <Box sx={{ bgcolor: '#8ED2A4', px: '8px', py: '1px', borderRadius: '12px', fontSize: '10px', fontWeight: 600, fontFamily: 'Poppins' }}>
                                Paid
                            </Box>
                        )}
                    </Box>
                </Box>

                {/* Company & Location */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '6px', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Typography sx={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Poppins', color: '#333' }}>
                            {job.company}
                        </Typography>
                        <Box sx={{ width: '12px', height: '12px', bgcolor: '#00A0DC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </Box>
                    </Box>
                    <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins', display: 'flex', alignItems: 'center' }}>
                        {!isCompact && <span style={{ marginRight: '6px', color: '#ccc', display: 'var(--bullet-display, inline)' }}>•</span>}
                        {job.location}
                    </Typography>
                </Box>

                {/* Description snippet */}
                <Typography sx={{
                    fontSize: '11px', color: '#888', mb: '8px', fontFamily: 'Poppins', lineHeight: 1.4,
                    display: { xs: 'none', sm: '-webkit-box' }, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                    {job.description || "Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit..."}
                </Typography>

                {/* Connections Row - Hidden on mobile */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '8px', mb: '8px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box component="img" src={mp1} sx={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #fff' }} />
                        <Box component="img" src={mp6} sx={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px solid #fff', ml: '-7px' }} />
                    </Box>
                    <Typography sx={{ fontSize: '10px', color: '#888', fontFamily: 'Poppins' }}>
                        Anuradha Perera works here
                    </Typography>
                </Box>

                {/* Footer tags */}
                <Box sx={{ display: 'flex', gap: '15px', columnGap: '15px', rowGap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Typography sx={{ fontSize: '10px', color: '#888', fontFamily: 'Poppins' }}>{job.time}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                        <Box component="img" src={easyApplyIcon} sx={{ width: '12px', height: '12px', objectFit: 'contain' }} />
                        <Typography sx={{ fontSize: '10px', fontWeight: 600, color: '#555', fontFamily: 'Poppins' }}>Easy Apply</Typography>
                    </Box>
                    {job.status === 'already-applied' && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                            <Box sx={{ bgcolor: '#00EA8E', color: '#fff', borderRadius: '3px', p: '2px', display: 'flex' }}>
                                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </Box>
                            <Typography sx={{ fontSize: '10px', fontWeight: 600, color: '#555', fontFamily: 'Poppins' }}>Already Applied</Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default InternshipJobCard;
