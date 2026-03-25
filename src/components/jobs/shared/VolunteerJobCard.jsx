import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareIcon from '@mui/icons-material/Share';

const VolunteerJobCard = ({ job, darkMode, isCompact, isActive, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: '100%',
                bgcolor: darkMode ? (isActive ? '#3d3d4d' : '#2d2d3d') : (isActive ? '#F5F7F9' : '#fff'),
                borderRadius: '15px',
                overflow: 'hidden',
                mb: isCompact ? '15px' : '25px',
                boxShadow: isActive ? '0px 4px 20px rgba(0,0,0,0.15)' : (darkMode ? '0px 4px 15px rgba(0,0,0,0.3)' : '0px 2px 10px rgba(0,0,0,0.05)'),
                border: isActive ? '2px solid #00EA8E' : (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.03)'),
                transition: 'all 0.2s',
                cursor: 'pointer',
                '&:hover': { transform: isCompact ? 'none' : 'translateY(-2px)', bgcolor: darkMode ? '#3d3d4d' : '#f9f9f9' }
            }}
        >
            {/* Top Section: Background Image with Overlay */}
            <Box sx={{
                width: '100%',
                height: isCompact ? '120px' : { xs: '150px', sm: '180px' },
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src={job.backgroundImg}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />

                {/* Company Logo Overlay (Top Left) */}
                <Box sx={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    width: isCompact ? '45px' : '60px',
                    height: isCompact ? '45px' : '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box
                        component="img"
                        src={job.companyLogo}
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </Box>

                {/* Action Icons (Top Right) */}
                {!isCompact && (
                    <Box sx={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        display: 'flex',
                        gap: '10px'
                    }}>
                        <Box sx={{
                            width: '32px',
                            height: '32px',
                            bgcolor: 'rgba(255,255,255,0.9)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}>
                            <ShareIcon sx={{ fontSize: '18px', color: '#333' }} />
                        </Box>
                        <Box sx={{
                            width: '32px',
                            height: '32px',
                            bgcolor: 'rgba(255,255,255,0.9)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </Box>
                    </Box>
                )}
            </Box>

            {/* Bottom Section: Content */}
            <Box sx={{ p: isCompact ? '12px 15px' : '20px' }}>
                {/* Title and Tags Row */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: isCompact ? '8px' : '12px', flexWrap: isCompact ? 'nowrap' : 'wrap', gap: '10px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: isCompact ? '4px' : '6px' }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: isCompact ? '15px' : '18px',
                            color: darkMode ? '#fff' : '#111',
                            lineHeight: 1.2
                        }}>
                            {job.title}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {['Environment', 'Volunteer'].map((tag, idx) => (
                                <Box key={idx} sx={{
                                    bgcolor: idx === 1 ? 'rgba(0, 234, 142, 0.15)' : (darkMode ? 'rgba(255,255,255,0.05)' : '#F5F7F9'),
                                    color: idx === 1 ? '#00EA8E' : (darkMode ? '#aaa' : '#666'),
                                    px: '8px',
                                    py: '2px',
                                    borderRadius: '10px',
                                    fontSize: isCompact ? '9px' : '10px',
                                    fontWeight: 600,
                                    fontFamily: 'Poppins',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}>
                                    {idx === 1 && <Box sx={{ width: '5px', height: '5px', borderRadius: '50%', bgcolor: '#00EA8E' }} />}
                                    {tag}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {!isCompact && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, color: darkMode ? '#eee' : '#111' }}>
                                Duration: <span style={{ fontWeight: 700 }}>3 Months</span>
                            </Typography>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: darkMode ? '#aaa' : '#666' }}>
                                Price: <span style={{ fontWeight: 600 }}>SAR. 90/ Per Person</span>
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Company & Info Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: isCompact ? '0px' : '12px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: isCompact ? '12px' : '13px', fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>
                        {job.company}
                    </Typography>
                    <CheckCircleIcon sx={{ fontSize: isCompact ? '14px' : '16px', color: '#00A0DC' }} />
                    {!isCompact && (
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: darkMode ? '#aaa' : '#888' }}>
                            • {job.location}
                        </Typography>
                    )}
                </Box>

                {/* Description Snippet (Hidden in Compact) */}
                {!isCompact && (
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        color: darkMode ? '#ccc' : '#444',
                        lineHeight: 1.6,
                        mb: '15px'
                    }}>
                        Lorem ipsum dolor sit amet consectetur ipsum kfdke orem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum kfdke orem ipsum dolor sit amet consectetur ipsum.
                    </Typography>
                )}

                {/* Footer: Time, Profile, Easy Apply */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: isCompact ? 'none' : (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #F0F0F0'),
                    pt: isCompact ? '8px' : '15px',
                    mt: isCompact ? '8px' : '0px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Typography sx={{ fontSize: isCompact ? '10px' : '11px', color: '#aaa', fontFamily: 'Poppins' }}>5d ago</Typography>
                        {!isCompact && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Box component="img" src={job.postedByAvatar} sx={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                                <Typography sx={{ fontSize: '11px', color: '#888', fontWeight: 500, fontFamily: 'Poppins' }}>Anuruddha Perera</Typography>
                            </Box>
                        )}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircleIcon sx={{ fontSize: '14px', color: '#00EA8E' }} />
                        <Typography sx={{ fontSize: isCompact ? '11px' : '12px', color: '#00EA8E', fontWeight: 700, fontFamily: 'Poppins' }}>Volunteer</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default VolunteerJobCard;
