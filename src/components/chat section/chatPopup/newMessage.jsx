import React, { useState } from 'react';
import { Box, Typography, IconButton, InputBase, Avatar, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import GroupIcon from '@mui/icons-material/Group';

// Profile Assets
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp2 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp2.webp';
import mp4 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp4.webp';
import mp6 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import mp7 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp7.webp';
import mp8 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp8.webp';

const frequentlyContacted = [
    { name: 'Nilantha Jayasuriya', avatar: mp1, online: true },
    { name: 'Adithya De Silva', avatar: mp2, online: false },
    { name: 'Jobs & Updates', avatar: mp4, online: true },
    { name: 'Adithya Waliwaththa', avatar: mp8, online: true },
];

const suggested = [
    { name: 'Nilantha Jayasuriya', position: 'Software Engineer', avatar: mp1, online: true },
    { name: 'Udaya De Silva', position: 'Software Engineer', avatar: mp6, online: false },
    { name: 'Adithya Waliwaththa', position: 'UI/UX Engineer', avatar: mp7, online: true },
    { name: 'T.N.D Rajapaksha', position: 'UI/UX Engineer', avatar: mp7, online: true },
    { name: 'Udaya De Silva', position: 'UI/UX Engineer', avatar: mp7, online: true },
];

const NewMessage = ({ onClose, darkMode }) => {

    const [selected, setSelected] = useState([]);

    const toggleSelect = (idx) => {
        setSelected((prev) =>
            prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
        );
    };

    return (
        <Box
            sx={{
                width: '305px',
                minWidth: '305px',
                height: '625px',
                bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: darkMode
                    ? '0px 4px 30px rgba(0,0,0,0.6)'
                    : '0px 4px 30px rgba(0,0,0,0.12)',
            }}
        >

            {/* Header Section */}
            <Box sx={{ p: '21px 20px 10px 20px', position: 'relative' }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '16px',
                        color: darkMode ? '#fff' : '#000',
                    }}
                >
                    New Message
                </Typography>

                <IconButton
                    onClick={onClose}
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: '24px',
                        height: '24px',
                        p: 0,
                        color: darkMode ? '#fff' : '#000',
                        '&:hover': { bgcolor: 'transparent', opacity: 0.6 },
                    }}
                >
                    <CloseIcon sx={{ fontSize: '18px' }} />
                </IconButton>
            </Box>

            <Divider sx={{ opacity: 0.12 }} />

            {/* To Section */}
            <Box sx={{ p: '13px 15px' }}>
                <Box
                    sx={{
                        height: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '13px',
                            color: darkMode ? '#fff' : '#333',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        To :
                    </Typography>
                    <InputBase
                        placeholder="Type A Name Or Group"
                        sx={{
                            flex: 1,
                            fontFamily: 'Poppins',
                            fontSize: '12px',
                            color: darkMode ? '#fff' : '#000',
                            '& .MuiInputBase-input::placeholder': {
                                color: '#A9A9A9',
                                opacity: 1,
                                fontFamily: 'Poppins',
                                fontSize: '12px',
                            },
                        }}
                    />
                </Box>
                <Divider sx={{ mt: '3px', opacity: 0.12 }} />
            </Box>

            {/* Create New Group Chat */}
            <Box sx={{ px: '15px', mb: '12px' }}>
                <Box
                    sx={{
                        height: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                    }}
                >
                    <Box
                        sx={{
                            width: '25px',
                            height: '25px',
                            borderRadius: '50%',
                            bgcolor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <GroupIcon sx={{ fontSize: '15px', color: darkMode ? '#ccc' : '#555' }} />
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '12px',
                            color: darkMode ? '#fff' : '#000',
                        }}
                    >
                        Create A New Group Chat
                    </Typography>
                </Box>
                <Divider sx={{ mt: '12px', opacity: 0.12 }} />
            </Box>

            {/* Frequently Contacted */}
            <Box sx={{ px: '15px', mb: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '10px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '12px', color: darkMode ? '#fff' : '#000' }}>
                        Frequently Contacted
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '10px',
                            color: '#777',
                            cursor: 'pointer',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        View All
                    </Typography>
                </Box>

                {/* Avatar row */}
                <Box sx={{ display: 'flex', gap: '10px', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                    {frequentlyContacted.map((user, idx) => (
                        <Box
                            key={idx}
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '55px', cursor: 'pointer' }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <Avatar src={user.avatar} sx={{ width: '40px', height: '40px', border: '1px solid #E0E0E0' }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: '1px',
                                        right: '1px',
                                        width: '9px',
                                        height: '9px',
                                        bgcolor: user.online ? '#00E783' : '#BDBDBD',
                                        borderRadius: '50%',
                                        border: '1.5px solid #fff',
                                    }}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '9px',
                                    fontWeight: 500,
                                    textAlign: 'center',
                                    mt: '4px',
                                    color: darkMode ? '#ccc' : '#444',
                                    lineHeight: 1.2,
                                    wordBreak: 'break-word',
                                }}
                            >
                                {user.name.split(' ')[0]}
                                <br />
                                {user.name.split(' ')[1] || ''}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Suggested Section */}
            <Box
                sx={{
                    px: '15px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    overflow: 'hidden',
                    pb: '15px'
                }}
            >
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '12px', color: darkMode ? '#fff' : '#000', flexShrink: 0 }}>
                    Suggested
                </Typography>

                {/* Scrollable list */}
                <Box
                    sx={{
                        flex: 1,
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        pr: '4px',
                        '&::-webkit-scrollbar': { width: '3px' },
                        '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.15)', borderRadius: '10px' },
                    }}
                >
                    {suggested.map((user, idx) => {
                        const isSelected = selected.includes(idx);
                        return (
                            <Box
                                key={idx}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    cursor: 'pointer',
                                }}
                                onClick={() => toggleSelect(idx)}
                            >
                                {/* Avatar + name/position */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Box sx={{ position: 'relative', flexShrink: 0 }}>
                                        <Avatar src={user.avatar} sx={{ width: '40px', height: '40px' }} />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: '1px',
                                                right: '1px',
                                                width: '9px',
                                                height: '9px',
                                                bgcolor: user.online ? '#00E783' : '#BDBDBD',
                                                borderRadius: '50%',
                                                border: '1.5px solid #fff',
                                            }}
                                        />
                                    </Box>

                                    {/* Name + position */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '12px', color: darkMode ? '#fff' : '#000', lineHeight: 1, whiteSpace: 'nowrap', maxWidth: '160px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {user.name}
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '10px', color: '#A9A9A9', lineHeight: 1, mt: '3px' }}>
                                            {user.position}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Tic-mark checkbox */}
                                <Box
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '5px',
                                        border: isSelected ? '2px solid #00E783' : '1.5px solid #D0D0D0',
                                        bgcolor: isSelected ? '#00E783' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        transition: 'all 0.15s ease',
                                        '&:hover': {
                                            borderColor: '#00E783',
                                        },
                                    }}
                                >
                                    {isSelected && (
                                        <CheckIcon sx={{ fontSize: '13px', color: '#fff' }} />
                                    )}
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default NewMessage;
