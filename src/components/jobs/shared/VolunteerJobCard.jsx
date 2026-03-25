import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareIcon from '@mui/icons-material/Share';

// Connection picture (placeholder)
import connPic from '../../../assets/Home/sevice/chats/messegeprofilepic/mp3.webp';

const VolunteerJobCard = ({ job, darkMode, isFavorite, onToggleFavorite, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                width: '100%',
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                overflow: 'hidden',
                mb: '20px',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                '&:hover': { transform: 'translateY(-2px)', boxShadow: '0px 4px 20px rgba(0,0,0,0.1)' }
            }}
        >
            {/* Visual Header: Background Image + Overlays */}
            <Box sx={{ position: 'relative', width: '100%', height: '220px' }}>
                <Box
                    component="img"
                    src={job.backgroundImage}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Company Logo Overlay */}
                <Box sx={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box component="img" src={job.icon} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Box>

                {/* Top Right Action Icons */}
                <Box sx={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '8px' }}>
                    <IconButton size="small" sx={{ bgcolor: 'rgba(255,255,255,0.9)', '&:hover': { bgcolor: '#fff' } }}>
                        <ShareIcon sx={{ fontSize: '16px', color: '#333' }} />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={(e) => { e.stopPropagation(); onToggleFavorite(job.id); }}
                        sx={{ bgcolor: 'rgba(255,255,255,0.9)', '&:hover': { bgcolor: '#fff' } }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? "#FF4D4D" : "none"} stroke={isFavorite ? "#FF4D4D" : "#333"} strokeWidth="2.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </IconButton>
                </Box>
            </Box>

            {/* Content Area */}
            <Box sx={{ p: { xs: '15px', sm: '20px' } }}>
                {/* Title & Badges Row */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    mb: '12px',
                    gap: '10px'
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: { xs: '16px', sm: '18px' },
                        color: darkMode ? '#fff' : '#111',
                        lineHeight: 1.2
                    }}>
                        {job.title}
                    </Typography>

                    {/* Status Badges */}
                    <Box sx={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {[
                            `Starts In ${job.startsIn || '5 Days'}`,
                            job.category || 'Environment',
                            'Volunteer'
                        ].map((label, idx) => (
                            <Box key={idx} sx={{
                                bgcolor: '#8ED2A4',
                                px: '10px',
                                py: '4px',
                                borderRadius: '12px',
                                fontSize: '10px',
                                fontWeight: 600,
                                color: '#000',
                                whiteSpace: 'nowrap'
                            }}>
                                {label}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Company & Info Row */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    mb: '10px',
                    gap: { xs: '4px', sm: '10px' }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '12px', color: darkMode ? '#ccc' : '#555' }}>
                            {job.company}
                        </Typography>
                        <CheckCircleIcon sx={{ fontSize: '14px', color: '#0077B5' }} />
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            • {job.location}
                        </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', color: darkMode ? '#fff' : '#000' }}>
                        Duration: <span style={{ fontWeight: 400 }}>{job.duration || '3 Months'}</span>
                    </Typography>
                </Box>

                {/* Description & Price Row */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'flex-end' },
                    mb: '15px',
                    gap: '10px'
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        color: darkMode ? '#aaa' : '#666',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        maxWidth: { xs: '100%', sm: '75%' },
                        lineHeight: 1.5,
                        display: { xs: 'none', sm: '-webkit-box' } // Hide description on mobile to reduce clutter
                    }}>
                        {job.description || "Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit Lorem ipsum dolor sit amet consectetur."}
                    </Typography>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: '13px',
                        color: darkMode ? '#fff' : '#000',
                        width: { xs: '100%', sm: 'auto' },
                        textAlign: { xs: 'left', sm: 'right' }
                    }}>
                        Price: <span style={{ fontWeight: 400, color: '#888' }}>{job.price || 'SAR. 90/ Per Person'}</span>
                    </Typography>
                </Box>

                {/* Footer Section */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    pt: '12px',
                    borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #eee',
                    gap: { xs: '15px', sm: 0 }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography sx={{ fontSize: '10px', color: '#999', fontFamily: 'Poppins' }}>{job.time}</Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '6px' }}>
                            <Box sx={{ height: '3px', width: '3px', bgcolor: '#888', borderRadius: '50%' }} />
                            <Box
                                component="img"
                                src={connPic}
                                sx={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                            <Typography sx={{ fontSize: '10px', color: '#888', fontFamily: 'Poppins' }}>
                                <span style={{ fontWeight: 600 }}>Arunodsha</span> works here
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', width: { xs: '100%', sm: 'auto' }, justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Box sx={{ width: '16px', height: '16px', bgcolor: 'rgba(0, 234, 142, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CheckCircleIcon sx={{ fontSize: '11px', color: '#00EA8E' }} />
                            </Box>
                            <Typography sx={{ fontSize: '12px', color: '#00EA8E', fontWeight: 600, fontFamily: 'Poppins' }}>Easy Apply</Typography>
                        </Box>

                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: '#00EA8E',
                                color: '#fff',
                                borderRadius: '20px',
                                textTransform: 'none',
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                fontWeight: 600,
                                px: '20px',
                                height: '32px',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#00c779', boxShadow: 'none' }
                            }}
                        >
                            Apply
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default VolunteerJobCard;
