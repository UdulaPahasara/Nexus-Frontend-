import React from 'react';
import { Box, Typography, ButtonBase, Avatar, Divider, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import mp1 from '../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp2 from '../../assets/Home/sevice/chats/messegeprofilepic/mp2.webp';
import mp3 from '../../assets/Home/sevice/chats/messegeprofilepic/mp3.webp';
import mp4 from '../../assets/Home/sevice/chats/messegeprofilepic/mp4.webp';

const catchUpItems = [
    {
        name: 'Nilantha Jayasuriya',
        message: "Celebrate Nilantha's birthday today",
        buttonText: 'Wishing you a very happy birthday!',
        avatar: mp1,
        statusType: 'birthday' // implies green dot
    },
    {
        name: 'Udaya De Silva',
        message: 'Completed 1 year at Roodwave',
        buttonText: 'Congratulation',
        avatar: mp2,
        statusType: 'work' // implies grey dot
    },
    {
        name: 'Nilantha Jayasuriya',
        message: "Celebrate Nilantha's birthday today",
        buttonText: 'Wishing you a very happy birthday!',
        avatar: mp3,
        statusType: 'birthday'
    },
    {
        name: 'Adithya Waliwaththa',
        message: "Celebrate Adithya's birthday today",
        buttonText: 'Wishing you a very happy birthday!',
        avatar: mp4,
        statusType: 'birthday'
    },
    {
        name: 'T.N.D Rajapaksha',
        message: 'Completed 1 year at Roodwave',
        buttonText: 'Congratulation',
        avatar: mp2,
        statusType: 'work'
    },
    {
        name: 'Nilantha Jayasuriya',
        message: "Celebrate Nilantha's birthday today",
        buttonText: 'Wishing you a very happy birthday!',
        avatar: mp1,
        statusType: 'birthday'
    }
];

const filters = ['All', 'Job Changes', 'Birthdays', 'Work anniversaries'];

const CatchUp = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '371px',
            height: { xs: 'auto', md: '605px' }, // Responsive height
            bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
            borderRadius: '15px',
            pt: '17px',
            pb: '17px',
            pl: '7px',
            pr: '7px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
            boxShadow: darkMode ? '0px 4px 15px rgba(0,0,0,0.3)' : '0px 2px 10px rgba(0,0,0,0.05)'
        }}>
            {/* Header */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '15px',
                color: darkMode ? '#ffffff' : '#111111',
                ml: '8px'
            }}>
                Catch Up
            </Typography>

            {/* Filter Pills */}
            <Box sx={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                pb: '4px',
                px: '4px',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}>
                {filters.map((filter) => (
                    <ButtonBase
                        key={filter}
                        sx={{
                            flexShrink: 0,
                            borderRadius: '20px',
                            border: darkMode ? '1px solid #444' : '1px solid #E0E0E0',
                            bgcolor: filter === 'All' ? '#e0e0e0' : 'transparent',
                            px: '12px',
                            py: '4px',
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                            }
                        }}
                    >
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: '12px',
                            color: darkMode ? '#fff' : '#333'
                        }}>
                            {filter}
                        </Typography>
                    </ButtonBase>
                ))}
            </Box>

            {/* List Items */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                flexGrow: 1,
                px: '4px',
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': { bgcolor: '#ccc', borderRadius: '4px' }
            }}>
                {catchUpItems.map((item, index) => (
                    <Box key={index}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            py: '12px',
                            gap: '12px',
                            position: 'relative'
                        }}>
                            {/* Avatar & Status Dot */}
                            <Box sx={{ position: 'relative' }}>
                                <Avatar
                                    src={item.avatar}
                                    sx={{ width: 45, height: 45 }}
                                />
                                <Box sx={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    bgcolor: item.statusType === 'birthday' ? '#00e676' : '#bdbdbd',
                                    border: '2px solid #fff',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0
                                }} />
                            </Box>

                            {/* Content */}
                            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', pr: '4px' }}>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 600,
                                        fontSize: '13px',
                                        color: darkMode ? '#fff' : '#111'
                                    }}>
                                        {item.name}
                                    </Typography>
                                    <IconButton size="small" sx={{ p: 0, mt: '-2px' }}>
                                        <MoreHorizIcon sx={{ color: darkMode ? '#aaa' : '#999', fontSize: '18px' }} />
                                    </IconButton>
                                </Box>

                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: '11px',
                                    color: darkMode ? '#bbb' : '#777',
                                    lineHeight: 1.2
                                }}>
                                    {item.message}
                                </Typography>

                                {/* Action Button */}
                                <ButtonBase sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    alignSelf: 'flex-start',
                                    mt: '4px',
                                    border: darkMode ? '1px solid #444' : '1px solid #E0E0E0',
                                    borderRadius: '20px',
                                    px: '12px',
                                    py: '4px',
                                    bgcolor: 'transparent',
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
                                    }
                                }}>
                                    <SendIcon sx={{
                                        fontSize: '12px',
                                        color: darkMode ? '#fff' : '#333',
                                        transform: 'rotate(-45deg)', // Often send icons are slightly angled in social media UI
                                        mb: '2px'
                                    }} />
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 600,
                                        fontSize: '10px',
                                        color: darkMode ? '#ddd' : '#111'
                                    }}>
                                        {item.buttonText}
                                    </Typography>
                                </ButtonBase>
                            </Box>
                        </Box>
                        {index < catchUpItems.length - 1 && (
                            <Divider sx={{ mx: '8px', mt: '4px', mb: '4px', borderColor: darkMode ? '#333' : '#f0f0f0' }} />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CatchUp;
