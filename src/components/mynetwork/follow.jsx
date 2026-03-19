import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Profile Assets
import mp1 from '../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp2 from '../../assets/Home/sevice/chats/messegeprofilepic/mp2.webp';
import mp3 from '../../assets/Home/sevice/chats/messegeprofilepic/mp3.webp';
import mp4 from '../../assets/Home/sevice/chats/messegeprofilepic/mp4.webp';
import mp5 from '../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp6 from '../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import mp7 from '../../assets/Home/sevice/chats/messegeprofilepic/mp7.webp';
import mp8 from '../../assets/Home/sevice/chats/messegeprofilepic/mp8.webp';

// Background Assets
import back1 from '../../assets/mynetwork/profileback/back1.webp';
import back2 from '../../assets/mynetwork/profileback/back2.webp';
import back3 from '../../assets/mynetwork/profileback/back3.webp';
import back4 from '../../assets/mynetwork/profileback/back4.webp';
import back5 from '../../assets/mynetwork/profileback/back5.webp';
import back6 from '../../assets/mynetwork/profileback/back6.webp';
import back7 from '../../assets/mynetwork/profileback/back7.webp';
import back9 from '../../assets/mynetwork/profileback/back9.webp';
import back10 from '../../assets/mynetwork/profileback/back10.webp';
import back11 from '../../assets/mynetwork/profileback/back11.webp';
import back12 from '../../assets/mynetwork/profileback/back12.webp';

const followSections = [
    {
        title: "People you may know from University of Gloucestershire",
        users: [
            { name: "Anuradha Perera", role: "UI/UX Designer | Graphic Designer", profilePic: mp1, bgPic: back1 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp2, bgPic: back2 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp3, bgPic: back3 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp4, bgPic: back4 }
        ]
    },
    {
        title: "People you may know from Al Ghaith Oilfields Supplies",
        users: [
            { name: "Anuradha Perera", role: "UI/UX Designer | Graphic Designer", profilePic: mp5, bgPic: back5 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp6, bgPic: back6 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp7, bgPic: back7 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp8, bgPic: back9 }
        ]
    },
    {
        title: "People you may know based on your recent activity",
        users: [
            { name: "Anuradha Perera", role: "UI/UX Designer | Graphic Designer", profilePic: mp1, bgPic: back10 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp2, bgPic: back11 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp3, bgPic: back12 },
            { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp4, bgPic: back1 }
        ]
    }
];

const Follow = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '701px',
            bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
            borderRadius: '15px',
            border: darkMode ? '1px solid #333' : 'none',
            boxShadow: darkMode ? '0px 4px 15px rgba(0,0,0,0.3)' : '0px 2px 10px rgba(0,0,0,0.05)',
            pt: '20px',
            pb: '20px',
            pl: '19px',
            pr: '19px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        }}>
            {/* Inner Layout Box matching Figma container width */}
            <Box sx={{
                width: '100%',
                maxWidth: '663px',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '23px'
            }}>
                {followSections.map((section, secIdx) => (
                    <Box key={secIdx} sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px'
                    }}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '15px',
                            color: darkMode ? '#fff' : '#111',
                            ml: '4px'
                        }}>
                            {section.title}
                        </Typography>

                        {/* Card Row wrapper (horizontal scroll on small screens) */}
                        <Box sx={{
                            display: 'flex',
                            gap: '18px',
                            overflowX: 'auto',
                            pb: '4px',
                            '&::-webkit-scrollbar': { height: '6px' },
                            '&::-webkit-scrollbar-thumb': { bgcolor: '#ccc', borderRadius: '4px' }
                        }}>
                            {section.users.map((user, idx) => (
                                <Box key={idx} sx={{
                                    width: '175px',
                                    height: '196px',
                                    flexShrink: 0,
                                    borderRadius: '10px',
                                    position: 'relative',
                                    bgcolor: darkMode ? '#2a2a3c' : '#ffffff',
                                    border: darkMode ? '1px solid #444' : '1px solid #E0E0E0',
                                    boxSizing: 'border-box',
                                    overflow: 'hidden',
                                    boxShadow: darkMode ? 'none' : '0px 2px 5px rgba(0,0,0,0.02)'
                                }}>
                                    {/* Abstract Close Button overlaying the Background */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '8px',
                                        right: '8px',
                                        width: '20px',
                                        height: '20px',
                                        bgcolor: 'rgba(0,0,0,0.5)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 2,
                                        cursor: 'pointer',
                                        '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' }
                                    }}>
                                        <CloseIcon sx={{ color: '#fff', fontSize: '14px' }} />
                                    </Box>

                                    {/* Profile Background Layer */}
                                    <Box
                                        component="img"
                                        src={user.bgPic}
                                        sx={{
                                            width: '175px',
                                            height: '65px',
                                            objectFit: 'cover',
                                            borderTopLeftRadius: '10px',
                                            borderTopRightRadius: '10px',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            zIndex: 0
                                        }}
                                    />

                                    {/* Circular Profile Picture Layer */}
                                    <Box
                                        component="img"
                                        src={user.profilePic}
                                        sx={{
                                            width: '55px',
                                            height: '55px',
                                            borderRadius: '50%',
                                            border: '4px solid #ffffff',
                                            boxSizing: 'border-box',
                                            objectFit: 'cover',
                                            position: 'absolute',
                                            top: '37px',
                                            left: '60px',
                                            zIndex: 1,
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}
                                    />

                                    {/* User Details Layer */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '100px',
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        px: '10px',
                                        boxSizing: 'border-box',
                                        zIndex: 1
                                    }}>
                                        <Typography sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            fontSize: '13px',
                                            color: darkMode ? '#fff' : '#111',
                                            textAlign: 'center',
                                            width: '100%',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}>
                                            {user.name}
                                        </Typography>
                                        <Typography sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 500,
                                            fontSize: '10px',
                                            color: darkMode ? '#aaa' : '#777',
                                            textAlign: 'center',
                                            lineHeight: 1.2,
                                            mt: '3px',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            height: '24px' // Restrict height to 2 lines
                                        }}>
                                            {user.role}
                                        </Typography>
                                    </Box>

                                    {/* Follow Button Layer */}
                                    <ButtonBase sx={{
                                        position: 'absolute',
                                        bottom: '8px',
                                        left: '8px', // Since width 160 left should be ~7 or 8. (175 - 160)/2 = 7.5. Left 8px is accurate to specs.
                                        width: '160px',
                                        height: '25px',
                                        bgcolor: '#00e676', // Vivid green matching the asset
                                        borderRadius: '5px',
                                        border: '1px solid #00c853',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'background 0.2s',
                                        '&:hover': {
                                            bgcolor: '#00c853'
                                        }
                                    }}>
                                        <Typography sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            fontSize: '12px',
                                            color: '#000'
                                        }}>
                                            + Follow
                                        </Typography>
                                    </ButtonBase>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Follow;
