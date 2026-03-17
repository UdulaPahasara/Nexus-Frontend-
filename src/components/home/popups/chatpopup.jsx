import React from 'react';
import { Box, Typography, InputBase, Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Import Assets - Profiles
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp2 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp2.webp';
import mp3 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp3.webp';
import mp4 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp4.webp';
import mp5 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import mp7 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp7.webp';
import mp8 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp8.webp';

// Import Assets - Icons
import threedots from '../../../assets/Home/sevice/chats/chats_vec/threedots.webp';
import iconWrite from '../../../assets/Home/sevice/chats/chats_vec/write.webp';

const chatData = [
    { id: 1, name: 'Nilantha Jayasuriya', message: 'Nilantha sent a post', time: '17:22 pm', avatar: mp1, online: true },
    { id: 2, name: 'Udaya De Silva', message: 'Nilantha sent a post', time: '17:22 pm', avatar: mp2, online: false },
    { id: 3, name: 'Adithya Waliwaththa', message: 'https://workwinkprofilelva .....', time: 'Yesterday', avatar: mp3, online: true },
    { id: 4, name: 'Adithya Waliwaththa', message: 'https://workwinkprofilelva .....', time: 'Sunday', avatar: mp4, online: true },
    { id: 5, name: 'Udaya De Silva', message: 'Nilantha sent a post', time: 'Sunday', avatar: mp5, online: false },
    { id: 6, name: 'T.N.D Rajapaksha', message: 'This is my project can you ...', time: 'Wednesday', avatar: mp6, online: false },
    { id: 7, name: 'Adithya Waliwaththa', message: 'https://workwinkprofilelva .....', time: 'Wednesday', avatar: mp7, online: true },
    { id: 8, name: 'Adithya Waliwaththa', message: 'https://workwinkprofilelva .....', time: 'Yesterday', avatar: mp8, online: true },
];

const ChatPopup = ({ darkMode, onClose, onChatSelect }) => {
    const [showNewMessage, setShowNewMessage] = React.useState(false);

    if (showNewMessage) {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
                    position: 'relative'
                }}
            >
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>
                    New Messages
                </Typography>
                <IconButton
                    onClick={() => setShowNewMessage(false)}
                    sx={{ position: 'absolute', top: 10, right: 10, color: darkMode ? '#fff' : '#000' }}
                >
                    <Typography sx={{ fontSize: '10px' }}>Back</Typography>
                </IconButton>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
                borderRadius: '25px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: darkMode ? '0px 0px 30px rgba(0,0,0,0.6)' : '0px 0px 30px rgba(0,0,0,0.1)',
                maxHeight: '520px',
                overflow: 'hidden',
                border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                mb: '10px' // Space between popup and bar
            }}
        >
            {/* Search Bar Row */}
            <Box sx={{ p: '12px 9px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Box
                    sx={{
                        flex: 1,
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5',
                        borderRadius: '5px',
                        py: '5px',
                        px: '6px',
                        boxSizing: 'border-box',
                        minWidth: 0
                    }}
                >
                    <SearchIcon sx={{ fontSize: '16px', color: '#999' }} />
                    <InputBase
                        placeholder="Search messages"
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: '11px',
                            flex: 1,
                            color: darkMode ? '#fff' : '#000',
                            '& .MuiInputBase-input::placeholder': {
                                color: '#999',
                                opacity: 1,
                            },
                        }}
                    />
                </Box>
                <Box
                    component="img"
                    src={iconWrite}
                    sx={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer',
                        filter: darkMode ? 'invert(1)' : 'none'
                    }}
                    onClick={() => setShowNewMessage(true)}
                />
            </Box>

            {/* Chat List */}
            <Box sx={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                px: '9px',
                pb: '10px',
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.1)', borderRadius: '10px' }
            }}>
                {chatData.map((chat) => (
                    <Box
                        key={chat.id}
                        onClick={() => onChatSelect && onChatSelect(chat)}
                        sx={{
                            width: '100%',
                            height: '52px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            '&:hover': { bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' },
                            mb: '8px'
                        }}
                    >
                        {/* Profile Pic with Indicator */}
                        <Box sx={{ position: 'relative', width: '40px', height: '40px' }}>
                            <Avatar
                                src={chat.avatar}
                                sx={{ width: '40px', height: '40px', borderRadius: '100px' }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '31px',
                                    left: '29px',
                                    width: '8px',
                                    height: '8px',
                                    bgcolor: chat.online ? '#00E783' : '#A9A9A9',
                                    borderRadius: '50%',
                                    border: '1px solid #fff'
                                }}
                            />
                        </Box>

                        {/* Content */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        color: darkMode ? '#fff' : '#000',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    {chat.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: '10px',
                                        color: '#A9A9A9'
                                    }}
                                >
                                    {chat.time}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: '11px',
                                        color: '#A9A9A9',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    {chat.message}
                                </Typography>
                                <Box component="img" src={threedots} sx={{ width: '18px', height: '18px', filter: darkMode ? 'invert(1)' : 'none', cursor: 'pointer' }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ChatPopup;
