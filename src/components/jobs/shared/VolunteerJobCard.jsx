import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import easyApplyIcon from '../../../assets/login/login.webp';

const VolunteerJobCard = ({ job, darkMode, isCompact, isActive, onClick }) => {
    // "Starts in X Days" — use job.startsInDays if provided, else default to 5
    const startsInDays = job?.startsInDays ?? 5;

    // Badge definitions
    const tags = [
        { label: `Starts in ${startsInDays} Days`, isTimer: true },
        { label: job?.category ?? 'Environment' },
        { label: 'Volunteer', isVolunteer: true },
    ];

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
            {/* Top Section: Background Image */}
            <Box sx={{
                width: '100%',
                height: isCompact ? '120px' : { xs: '150px', sm: '180px' },
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src={job.backgroundImg}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Company Logo (Top Left) */}
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
                            width: '32px', height: '32px',
                            bgcolor: 'rgba(255,255,255,0.9)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer'
                        }}>
                            <ShareIcon sx={{ fontSize: '18px', color: '#333' }} />
                        </Box>
                        <Box sx={{
                            width: '32px', height: '32px',
                            bgcolor: 'rgba(255,255,255,0.9)',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
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

                {/* Title Row: Title | Badges (inline) | Duration & Price */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    mb: isCompact ? '6px' : '8px',
                    gap: '8px',
                    flexWrap: 'wrap'
                }}>
                    {/* Title and Badges Container */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexWrap: 'wrap',
                        flex: 1,
                        minWidth: '200px'
                    }}>
                        {/* Title */}
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: isCompact ? '14px' : '16px',
                            color: darkMode ? '#fff' : '#111',
                            lineHeight: 1.2,
                            whiteSpace: 'normal',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {job.title}
                        </Typography>

                        {/* Badges Container */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            flexWrap: 'wrap'
                        }}>
                            {tags.map((tag, idx) => (
                                <Box key={idx} sx={{
                                    bgcolor: tag.isTimer
                                        ? (darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)')
                                        : (darkMode ? '#2E7D32' : '#3DAA5C'),
                                    color: tag.isTimer
                                        ? (darkMode ? '#ccc' : '#444')
                                        : '#fff',
                                    px: '7px',
                                    py: '2px',
                                    borderRadius: '50px',
                                    fontSize: '9px',
                                    fontWeight: 600,
                                    fontFamily: 'Poppins',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '3px',
                                    border: tag.isTimer
                                        ? `0.6px solid ${darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`
                                        : 'none',
                                    whiteSpace: 'nowrap',
                                    lineHeight: 1.4,
                                }}>
                                    {tag.isTimer && (
                                        <AccessTimeIcon sx={{ fontSize: '9px', color: darkMode ? '#ccc' : '#444' }} />
                                    )}
                                    {!tag.isTimer && (
                                        <Box sx={{ width: '4px', height: '4px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.8)', flexShrink: 0 }} />
                                    )}
                                    {tag.label}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Duration & Price */}
                    {!isCompact && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1px', flexShrink: 0, mt: '2px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11.5px', fontWeight: 700, color: darkMode ? '#eee' : '#111', whiteSpace: 'nowrap' }}>
                                Duration: <span style={{ fontWeight: 800 }}>3 Months</span>
                            </Typography>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '10.5px', color: darkMode ? '#aaa' : '#555', whiteSpace: 'nowrap' }}>
                                Price: <span style={{ fontWeight: 600 }}>SAR. 90/ Per Person</span>
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Subtitle: Company | Verified | Location */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: isCompact ? '8px' : '10px' }}>
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

                {/* Footer: Time + Avatar + Easy Apply — all in one left-aligned row */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderTop: isCompact ? 'none' : (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #F0F0F0'),
                    pt: isCompact ? '8px' : '15px',
                    mt: isCompact ? '8px' : '0px',
                    flexWrap: 'wrap',
                }}>
                    {/* Time ago */}
                    <Typography sx={{ fontSize: isCompact ? '10px' : '11px', color: '#aaa', fontFamily: 'Poppins', flexShrink: 0 }}>5d ago</Typography>

                    {/* Avatar + name (non-compact) */}
                    {!isCompact && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Box component="img" src={job.postedByAvatar} sx={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                            <Typography sx={{ fontSize: '11px', color: '#888', fontWeight: 500, fontFamily: 'Poppins' }}>
                                Anuruddha Perera <span style={{ color: '#aaa', fontWeight: 400 }}>works here</span>
                            </Typography>
                        </Box>
                    )}

                    {/* Easy Apply — inline, right after "works here" */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1px', flexShrink: 0 }}>
                        <Box
                            component="img"
                            src={easyApplyIcon}
                            sx={{
                                width: isCompact ? '12px' : '14px',
                                height: isCompact ? '12px' : '14px',
                                objectFit: 'contain',
                            }}
                        />
                        <Typography sx={{
                            fontSize: isCompact ? '9.5px' : '11px',
                            fontWeight: 600,
                            color: darkMode ? '#ccc' : '#333',
                            fontFamily: 'Poppins',
                            whiteSpace: 'nowrap',
                            lineHeight: 1,
                        }}>
                            Easy Apply
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default VolunteerJobCard;
