import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import NotifiPopup from './notifipopup/notifipopup';

// Assets for profile pictures
import profile1 from '../../assets/Home/feed/profile1.webp';
import profile2 from '../../assets/Home/feed/profile2.webp';
import profile3 from '../../assets/Home/feed/profile3.webp';
import profile4 from '../../assets/Home/feed/profile4.webp';
import profile5 from '../../assets/Home/feed/profile5.webp';
import profile6 from '../../assets/Home/feed/profile6.webp';
import profile7 from '../../assets/Home/feed/profile7.webp';

const NOTIFICATIONS_DATA = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur. lorem lkiposikodanasda",
        description: "Lorem ipsum dolor sit amet consectetur. Habitasse faucibus dui suspendisse amet turpis dictum pellentesque.",
        time: "1h",
        image: profile1,
        unread: true,
        type: 'all'
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit am consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur. Habitasse faucibus dui suspendisse amet turpis dictum pellentesque.",
        time: "5h",
        image: profile2,
        unread: false,
        type: 'all'
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit am consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur. Habitasse faucibus dui suspendisse amet turpis dictum pellentesque.",
        time: "5h",
        image: profile3,
        unread: false,
        type: 'all'
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit  consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur. Habitasse faucibus dui suspendisse amet turpis dictum pellentesque.",
        time: "6h",
        image: profile4,
        unread: true,
        type: 'all',
        contentImage: profile5
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit am consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur. Habitasse faucibus dui suspendisse amet turpis dictum pellentesque.",
        time: "5h",
        image: profile6,
        unread: false,
        type: 'all'
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit am consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur. Habitasse faucibus dui suspendisse amet turpis dictum pellentesque.",
        time: "5h",
        image: profile7,
        unread: false,
        type: 'all',
        tag: 'News'
    },
];

const NotificationCard = ({ notification, darkMode, isPopupOpen, onTogglePopup }) => (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        width: '100%',
        maxWidth: '640px',
        mx: 'auto',
        position: 'relative',
        mb: '2px'
    }}>
        {/* Red dot outside the card */}
        <Box sx={{
            width: '8px',
            height: '8px',
            bgcolor: notification.unread ? '#ff4d4d' : 'transparent',
            borderRadius: '50%',
            flexShrink: 0,
            visibility: notification.unread ? 'visible' : 'hidden'
        }} />

        <Box sx={{
            flex: 1,
            height: { xs: 'auto', md: '78px' },
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            p: '12px 10px 10px 10px',
            borderRadius: '5px',
            bgcolor: notification.unread ? (darkMode ? 'rgba(0, 231, 131, 0.05)' : 'rgba(235, 245, 241, 1)') : 'transparent',
            borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.02)',
            transition: 'background 0.2s',
            cursor: 'pointer',
            '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)' }
        }}>
            <Box
                component="img"
                src={notification.image}
                sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    flexShrink: 0
                }}
            />

            <Box sx={{ flex: 1, minWidth: 0, mt: '-2px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: darkMode ? '#fff' : '#111',
                        lineHeight: 1.2,
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {notification.title}
                    </Typography>
                    {notification.tag && (
                        <Box sx={{
                            bgcolor: '#d4f5e6',
                            color: '#00E783',
                            px: '6px',
                            py: '2px',
                            borderRadius: '4px',
                            fontSize: '10px',
                            fontWeight: 600
                        }}>
                            {notification.tag}
                        </Box>
                    )}
                </Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    color: darkMode ? '#aaa' : '#666',
                    lineHeight: 1.3,
                    mt: '2px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {notification.description}
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                height: '100%',
                flexShrink: 0,
                minWidth: '30px',
                position: 'relative' // Anchor for the popup
            }}>
                <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins', mt: '-2px' }}>
                    {notification.time}
                </Typography>

                {notification.contentImage && (
                    <Box
                        component="img"
                        src={notification.contentImage}
                        sx={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover', mb: 'auto', mt: '4px' }}
                    />
                )}

                <IconButton
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        onTogglePopup();
                    }}
                    sx={{ p: 0, color: darkMode ? '#ccc' : '#888', mt: 'auto' }}
                >
                    <MoreVertIcon sx={{ fontSize: '18px' }} />
                </IconButton>

                {/* The Action Popup */}
                {isPopupOpen && (
                    <NotifiPopup
                        darkMode={darkMode}
                        onDelete={() => { onTogglePopup(); }}
                        onMute={() => { onTogglePopup(); }}
                        onSettings={() => { onTogglePopup(); }}
                    />
                )}
            </Box>
        </Box>
    </Box>
);

const Notification = ({ darkMode = false }) => {
    const [activePill, setActivePill] = useState('All');
    const [openPopupId, setOpenPopupId] = useState(null);
    const pills = ['All', 'Unread', 'Jobs', 'Services'];

    return (
        <Box
            onClick={() => setOpenPopupId(null)}
            sx={{
                width: '100%',
                maxWidth: '701px',
                minHeight: '661px',
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                p: { xs: '15px', md: '20px' },
                boxSizing: 'border-box',
                position: 'relative'
            }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '25px',
                flexWrap: 'wrap',
                gap: '15px'
            }}>
                <Box sx={{ display: 'flex', gap: '8px', overflowX: 'auto', pb: '5px', '&::-webkit-scrollbar': { display: 'none' } }}>
                    {pills.map((pill) => (
                        <Box
                            key={pill}
                            onClick={() => setActivePill(pill)}
                            sx={{
                                px: '18px',
                                py: '6px',
                                borderRadius: '20px',
                                border: activePill === pill ? 'none' : (darkMode ? '1px solid #444' : '1px solid #ddd'),
                                bgcolor: activePill === pill ? (darkMode ? '#fff' : '#000') : 'transparent',
                                color: activePill === pill ? (darkMode ? '#000' : '#fff') : (darkMode ? '#ccc' : '#555'),
                                cursor: 'pointer',
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s'
                            }}
                        >
                            {pill}
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', opacity: 0.7, '&:hover': { opacity: 1 } }}>
                        <SettingsIcon sx={{ fontSize: '16px', color: darkMode ? '#ccc' : '#666' }} />
                        <Typography sx={{ fontSize: '12px', fontFamily: 'Poppins', color: darkMode ? '#ccc' : '#666' }}>Notification settings</Typography>
                    </Box>
                    <Typography sx={{
                        fontSize: '13px',
                        fontFamily: 'Poppins',
                        color: '#22c55e',
                        fontWeight: 600,
                        cursor: 'pointer',
                        '&:hover': { textDecoration: 'underline' }
                    }}>
                        Mark As Read
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                flex: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' }
            }}>
                {NOTIFICATIONS_DATA.map((note) => (
                    <NotificationCard
                        key={note.id}
                        notification={note}
                        darkMode={darkMode}
                        isPopupOpen={openPopupId === note.id}
                        onTogglePopup={() => setOpenPopupId(openPopupId === note.id ? null : note.id)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Notification;
