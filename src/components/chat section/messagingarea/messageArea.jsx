import React from 'react';
import { Box, Typography, InputBase, Avatar, IconButton, Divider, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MicIcon from '@mui/icons-material/Mic';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import CallPopup from '../chatPopup/callPopup';
import OptionPopup from '../chatPopup/optionpopup';

// Assets
import profilePic from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import receiveAsset from '../../../assets/chats/chatArea/resive1.webp';
import sentAsset from '../../../assets/chats/chatArea/sent1.webp';
import myProfilePic from '../../../assets/Home/propffun/profilepic.webp';

const MessageArea = ({ darkMode = false }) => {
    const [showCallPopup, setShowCallPopup] = React.useState(false);
    const [showOptionPopup, setShowOptionPopup] = React.useState(false);
    const quickReplies = ["Thank You", "Thanks", "Good Bye", "Nice", "Nice Try"];

    return (
        <Box
            sx={{
                width: '767px',
                height: '580px',
                bgcolor: darkMode ? '#1a1a2e' : '#FFFFFF',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
                position: 'relative',
                transition: 'all 0.3s ease',
                boxShadow: darkMode
                    ? '0px 4px 20px rgba(0,0,0,0.5)'
                    : '0px 4px 20px rgba(0,0,0,0.05)',
                overflow: 'hidden'
            }}
        >
            {/* --- HEADER (STATIC) --- */}
            <Box sx={{ flexShrink: 0 }}>
                <Box sx={{ p: '15px 25px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Avatar src={profilePic} sx={{ width: '40px', height: '40px' }} />
                        <Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px', color: darkMode ? '#fff' : '#000', lineHeight: 1.2 }}>
                                Nilantha Jayasuriya
                            </Typography>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', color: '#A9A9A9' }}>
                                UI/UX Engineer
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <IconButton
                            size="small"
                            sx={{ color: '#00E783' }}
                            onClick={() => setShowOptionPopup(!showOptionPopup)}
                        >
                            <MoreVertIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                        <IconButton size="small" sx={{ color: '#00E783' }}><CalendarMonthIcon sx={{ fontSize: '20px' }} /></IconButton>
                        <IconButton
                            size="small"
                            sx={{ color: '#00E783' }}
                            onClick={() => setShowCallPopup(!showCallPopup)}
                        >
                            <LocalPhoneIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                    </Box>
                </Box>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '11px',
                    color: '#A9A9A9',
                    textAlign: 'center',
                    mt: -1,
                    mb: '10px'
                }}>
                    Last seen 12:00 AM today
                </Typography>

                <Divider sx={{ mx: '25px', borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }} />
            </Box>

            {/* --- SCROLLABLE THREAD --- */}
            <Box sx={{
                flex: 1,
                p: '25px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                overflowY: 'auto',
                overflowX: 'hidden',
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }
            }}>
                {/* Received Bubble */}
                <Box sx={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Avatar src={profilePic} sx={{ width: '32px', height: '32px' }} />
                    <Box>
                        <Box sx={{
                            p: '10px 18px',
                            bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5',
                            borderRadius: '0px 15px 15px 15px',
                            maxWidth: '300px'
                        }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: darkMode ? '#fff' : '#333' }}>
                                Hello !
                            </Typography>
                        </Box>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#A9A9A9', mt: '4px' }}>11:30 pm</Typography>
                    </Box>
                </Box>

                {/* Sent Bubble with Reply Asset (if provided) or Quoted Style */}
                <Box sx={{ alignSelf: 'flex-end', maxWidth: '350px' }}>
                    <Box sx={{
                        p: '12px 18px',
                        bgcolor: darkMode ? 'rgba(0, 231, 131, 0.08)' : '#E8FBF3',
                        borderRadius: '15px 15px 0px 15px',
                        borderLeft: '3px solid #00E783',
                    }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '12px', color: '#01B96A', mb: '2px' }}>
                            Nilantha Jayasuriya
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#888', mb: '6px' }}>
                            Hello !
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: darkMode ? '#fff' : '#000' }}>
                            Lorem ipsum dolor sit amet conse
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', mt: '4px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#A9A9A9' }}>11:33 pm</Typography>
                        <DoneAllIcon sx={{ fontSize: '14px', color: '#01B96A' }} />
                    </Box>
                </Box>

                {/* Received Image Message with Reaction Asset */}
                <Box sx={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <Avatar src={profilePic} sx={{ width: '32px', height: '32px' }} />
                    <Box sx={{ position: 'relative', width: '240px' }}>
                        <Box
                            component="img"
                            src={receiveAsset}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                                display: 'block'
                            }}
                        />
                        {/* Reaction Asset Overlay/Row */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '6px' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <Typography sx={{ fontSize: '12px' }}>😊❤️👍</Typography>
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#A9A9A9' }}>11:55 pm</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Last Sent Message (Asset) */}
                <Box sx={{ alignSelf: 'flex-end', maxWidth: '300px' }}>
                    <Box
                        component="img"
                        src={sentAsset}
                        sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            display: 'block'
                        }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', mt: '4px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#A9A9A9' }}>11:58 pm</Typography>
                        <DoneAllIcon sx={{ fontSize: '14px', color: '#01B96A' }} />
                    </Box>
                </Box>
            </Box>

            {/* --- STATIC FOOTER (MESSAGE TYPE AREA) --- */}
            <Box sx={{ flexShrink: 0, bgcolor: darkMode ? '#1a1a2e' : '#fff', zIndex: 10 }}>
                <Box sx={{ px: '25px', mb: '15px', display: 'flex', gap: '8px', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                    {quickReplies.map((reply) => (
                        <Button
                            key={reply}
                            variant="outlined"
                            sx={{
                                borderRadius: '20px',
                                textTransform: 'none',
                                fontFamily: 'Poppins',
                                fontSize: '11px',
                                color: darkMode ? '#ccc' : '#444',
                                borderColor: darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                                whiteSpace: 'nowrap',
                                p: '3px 14px',
                                minWidth: 0,
                                '&:hover': { borderColor: '#00E783', bgcolor: 'transparent' }
                            }}
                        >
                            {reply}
                        </Button>
                    ))}
                </Box>

                <Box sx={{
                    p: '0 25px 20px 25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <IconButton sx={{ p: 0, color: '#00E783' }}>
                        <AddCircleIcon sx={{ fontSize: '42px' }} />
                    </IconButton>

                    <Box sx={{
                        flex: 1,
                        height: '46px',
                        bgcolor: darkMode ? 'rgba(255,255,255,0.06)' : '#F5F5F5',
                        borderRadius: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        px: '18px',
                        gap: '12px'
                    }}>
                        <InputBase
                            placeholder="Type Message"
                            sx={{
                                flex: 1,
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                color: darkMode ? '#fff' : '#000',
                                '& .MuiInputBase-input::placeholder': { color: '#B0B0B0', opacity: 1 }
                            }}
                        />
                        <IconButton size="small" sx={{ color: '#B0B0B0' }}><PhotoCameraIcon sx={{ fontSize: '20px' }} /></IconButton>
                        <IconButton size="small" sx={{ color: '#B0B0B0' }}><MicIcon sx={{ fontSize: '20px' }} /></IconButton>
                    </Box>
                </Box>
            </Box>

            {showCallPopup && <CallPopup onClose={() => setShowCallPopup(false)} />}
            {showOptionPopup && <OptionPopup onClose={() => setShowOptionPopup(false)} />}
        </Box>
    );
};

export default MessageArea;
