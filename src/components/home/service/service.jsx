import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Avatar } from '@mui/material';
import ChatPopup from '../popups/chatpopup';

// Import Assets - Services
import mechanic from '../../../assets/Home/sevice/mechanic.webp';
import fulltime from '../../../assets/Home/sevice/fulltime.webp';
import parttime from '../../../assets/Home/sevice/parttime.webp';
import volunteer from '../../../assets/Home/sevice/volunteer.webp';
import internship from '../../../assets/Home/sevice/internship.webp';
import freelance from '../../../assets/Home/sevice/freelance.webp';
import services from '../../../assets/Home/sevice/services.webp';
import cv from '../../../assets/Home/sevice/cv.webp';
import companies from '../../../assets/Home/sevice/companies.webp';

// Import Assets - Chats
import chatProfilePic from '../../../assets/Home/sevice/chats/cahtprofile.webp';
import iconThreeDots from '../../../assets/Home/sevice/chats/chats_vec/threedots.webp';
import iconWrite from '../../../assets/Home/sevice/chats/chats_vec/write.webp';
import iconUp from '../../../assets/Home/sevice/chats/chats_vec/upvector.webp';

const serviceData = [
    { id: 1, name: 'Full Time', icon: fulltime },
    { id: 2, name: 'Part Time', icon: parttime },
    { id: 3, name: 'Volunteer', icon: volunteer },
    { id: 4, name: 'Internship', icon: internship },
    { id: 5, name: 'Freelance', icon: freelance },
    { id: 6, name: 'Services', icon: services },
    { id: 7, name: 'CV', icon: cv },
    { id: 8, name: 'Companies', icon: companies },
];

const Service = ({ darkMode }) => {
    const [chatOpen, setChatOpen] = useState(false);
    const [showNewMessage, setShowNewMessage] = useState(false);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '372px' }}>

            {/* ── OUR SERVICES CARD ── */}
            <Box
                sx={{
                    width: '100%',
                    bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
                    borderRadius: '25px',
                    p: '20px',
                    boxShadow: darkMode ? '0px 4px 10px rgba(0, 0, 0, 0.4)' : '0px 4px 10px rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                }}
            >
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '25px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Box component="img" src={mechanic} sx={{ width: '28px', height: '28px' }} />
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '18px',
                                color: darkMode ? '#fff' : '#000',
                            }}
                        >
                            Our Services
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: '14px',
                            color: darkMode ? '#aaa' : '#757575',
                            cursor: 'pointer'
                        }}
                    >
                        View All
                    </Typography>
                </Box>

                {/* Grid of Services */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '20px 10px',
                    width: '100%'
                }}>
                    {serviceData.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '8px',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.05)' }
                            }}
                        >
                            <Box
                                component="img"
                                src={item.icon}
                                sx={{ width: '45px', height: '45px', objectFit: 'contain' }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: '11px',
                                    color: darkMode ? '#bbb' : '#757575',
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* ── CHATS BAR ── */}
            <Box sx={{ position: 'relative', width: '100%' }}>
                {/* Chat Popup with Animation */}
                <Box sx={{
                    position: 'absolute',
                    bottom: '100%',
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    pointerEvents: chatOpen ? 'auto' : 'none',
                    opacity: chatOpen ? 1 : 0,
                    transform: chatOpen ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    visibility: chatOpen ? 'visible' : 'hidden'
                }}>
                    <ChatPopup
                        darkMode={darkMode}
                        showNewMessage={showNewMessage}
                        setShowNewMessage={setShowNewMessage}
                    />
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        height: '75px',
                        bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
                        borderRadius: '25px',
                        px: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: darkMode ? '0px 4px 10px rgba(0, 0, 0, 0.4)' : '0px 4px 10px rgba(0, 0, 0, 0.05)',
                        boxSizing: 'border-box',
                        position: 'relative',
                        zIndex: 1001,
                        cursor: 'pointer'
                    }}
                    onClick={() => setChatOpen(!chatOpen)} // Make the whole bar clickable as well
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Box sx={{ position: 'relative' }}>
                            <Avatar
                                src={chatProfilePic}
                                sx={{ width: '48px', height: '48px', border: '2px solid #fff' }}
                            />
                            <Box sx={{
                                position: 'absolute',
                                bottom: 2,
                                right: 2,
                                width: '12px',
                                height: '12px',
                                bgcolor: '#00e783',
                                borderRadius: '50%',
                                border: '2px solid #fff'
                            }} />
                        </Box>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '18px',
                                color: darkMode ? '#fff' : '#000',
                            }}
                        >
                            Chats
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <Box component="img" src={iconThreeDots} sx={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                        <Box component="img" src={iconWrite} sx={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                        <Box
                            component="img"
                            src={iconUp}
                            sx={{
                                width: '10px',
                                height: '10px',
                                cursor: 'pointer',
                                transform: chatOpen ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.3s'
                            }}
                            onClick={() => setChatOpen(!chatOpen)}
                        />
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Service;
