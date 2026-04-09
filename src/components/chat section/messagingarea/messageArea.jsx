import React from 'react';
import { Box, Typography, InputBase, Avatar, IconButton, Divider, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import MicIcon from '@mui/icons-material/Mic';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SendIcon from '@mui/icons-material/Send';

import CallPopup from '../chatPopup/callPopup';
import OptionPopup from '../chatPopup/optionpopup';
import SchedulePopup from '../chatPopup/schedulepopup';
import ReactionPopup from '../chatPopup/reactionpopup';
import FilePopup from '../chatPopup/filepopups';

// Assets
import profilePic from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import receiveAsset from '../../../assets/chats/chatArea/resive1.webp';
import sentAsset from '../../../assets/chats/chatArea/sent1.webp';
import myProfilePic from '../../../assets/Home/propffun/profilepic.webp';

const MessageArea = ({ darkMode = false }) => {
    const [showCallPopup, setShowCallPopup] = React.useState(false);
    const [showOptionPopup, setShowOptionPopup] = React.useState(false);
    const [showSchedulePopup, setShowSchedulePopup] = React.useState(false);
    const [showFilePopup, setShowFilePopup] = React.useState(false);
    const [reactionPopup, setReactionPopup] = React.useState({ show: false, position: { top: 0, left: 0 } });
    const [messages, setMessages] = React.useState([
        { id: 1, type: 'received', text: 'Hello !', time: '11:30 pm' },
        { id: 2, type: 'sent', text: 'Lorem ipsum dolor sit amet conse', time: '11:33 pm', replyTo: 'Hello !' },
        { id: 3, type: 'received', image: receiveAsset, reactions: '😊❤️👍', time: '11:55 pm' },
        { id: 4, type: 'sent', image: sentAsset, time: '11:58 pm' }
    ]);
    const [inputValue, setInputValue] = React.useState('');
    const scrollRef = React.useRef(null);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                id: Date.now(),
                type: 'sent',
                text: inputValue,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()
            };
            setMessages([...messages, newMessage]);
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const handleMessageClick = (e) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        // Use the MessageArea Box's bounding rect as reference
        const parentElement = e.currentTarget.closest('.message-area-container');
        const parentRect = parentElement.getBoundingClientRect();

        // Calculate position relative to MessageArea container
        const top = rect.top - parentRect.top + rect.height + 5;
        const left = rect.left - parentRect.left + (rect.width / 2) - 90; // Center 180px popup

        setReactionPopup({
            show: true,
            position: { top, left }
        });
    };

    const handleCloseAllPopups = () => {
        setShowCallPopup(false);
        setShowOptionPopup(false);
        setShowSchedulePopup(false);
        setShowFilePopup(false);
        setReactionPopup({ ...reactionPopup, show: false });
    };

    const quickReplies = ["Thank You", "Thanks", "Good Bye", "Nice", "Nice Try"];

    return (
        <Box
            className="message-area-container"
            onClick={handleCloseAllPopups}
            sx={{
                width: '100%',
                height: { xs: 'calc(100vh - 180px)', sm: '580px' },
                minHeight: { xs: '400px', sm: '580px' },
                bgcolor: darkMode ? '#1a1a2e' : '#FFFFFF',
                borderRadius: { xs: '12px', sm: '15px' },
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
                <Box sx={{ p: { xs: '10px 14px', sm: '15px 25px' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                            onClick={(e) => { e.stopPropagation(); setShowOptionPopup(!showOptionPopup); }}
                        >
                            <MoreVertIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                        <IconButton
                            size="small"
                            sx={{ color: '#00E783' }}
                            onClick={(e) => { e.stopPropagation(); setShowSchedulePopup(!showSchedulePopup); }}
                        >
                            <CalendarMonthIcon sx={{ fontSize: '20px' }} />
                        </IconButton>
                        <IconButton
                            size="small"
                            sx={{ color: '#00E783' }}
                            onClick={(e) => { e.stopPropagation(); setShowCallPopup(!showCallPopup); }}
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

                <Divider sx={{ mx: { xs: '14px', sm: '25px' }, borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }} />
            </Box>

            {/* --- SCROLLABLE THREAD --- */}
            <Box
                ref={scrollRef}
                sx={{
                    flex: 1,
                    p: { xs: '14px', sm: '25px' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.05)', borderRadius: '10px' }
                }}
            >
                {messages.map((msg) => (
                    <Box key={msg.id}>
                        {msg.type === 'received' ? (
                            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                <Avatar src={profilePic} sx={{ width: '32px', height: '32px' }} />
                                <Box>
                                    {msg.text && (
                                        <Box
                                            onClick={handleMessageClick}
                                            sx={{
                                                p: '10px 18px',
                                                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5',
                                                borderRadius: '0px 15px 15px 15px',
                                                maxWidth: { xs: '75vw', sm: '300px' },
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: darkMode ? '#fff' : '#333' }}>
                                                {msg.text}
                                            </Typography>
                                        </Box>
                                    )}
                                    {msg.image && (
                                        <Box sx={{ position: 'relative', width: { xs: '55vw', sm: '240px' }, maxWidth: '240px' }}>
                                            <Box
                                                onClick={handleMessageClick}
                                                component="img"
                                                src={msg.image}
                                                sx={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    borderRadius: '12px',
                                                    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                                                    display: 'block',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                            {msg.reactions && (
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mt: '6px' }}>
                                                    <Typography sx={{ fontSize: '12px' }}>{msg.reactions}</Typography>
                                                </Box>
                                            )}
                                        </Box>
                                    )}
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#A9A9A9', mt: '4px' }}>{msg.time}</Typography>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ alignSelf: 'flex-end', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                {msg.replyTo ? (
                                    <Box sx={{ maxWidth: { xs: '80vw', sm: '350px' } }}>
                                        <Box
                                            onClick={handleMessageClick}
                                            sx={{
                                                p: '12px 18px',
                                                bgcolor: darkMode ? 'rgba(0, 231, 131, 0.08)' : '#E8FBF3',
                                                borderRadius: '15px 15px 0px 15px',
                                                borderLeft: '3px solid #00E783',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '12px', color: '#01B96A', mb: '2px' }}>
                                                Nilantha Jayasuriya
                                            </Typography>
                                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#888', mb: '6px' }}>
                                                {msg.replyTo}
                                            </Typography>
                                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: darkMode ? '#fff' : '#000' }}>
                                                {msg.text}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ) : msg.image ? (
                                    <Box sx={{ maxWidth: { xs: '75vw', sm: '300px' } }}>
                                        <Box
                                            onClick={handleMessageClick}
                                            component="img"
                                            src={msg.image}
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '12px',
                                                display: 'block',
                                                cursor: 'pointer'
                                            }}
                                        />
                                    </Box>
                                ) : (
                                    <Box
                                        onClick={handleMessageClick}
                                        sx={{
                                            p: '10px 18px',
                                            bgcolor: '#00E783',
                                            color: '#fff',
                                            borderRadius: '15px 15px 0px 15px',
                                            maxWidth: { xs: '75vw', sm: '300px' },
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: '#fff' }}>
                                            {msg.text}
                                        </Typography>
                                    </Box>
                                )}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', mt: '4px' }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#A9A9A9' }}>{msg.time}</Typography>
                                    <DoneAllIcon sx={{ fontSize: '14px', color: '#01B96A' }} />
                                </Box>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>

            {/* --- STATIC FOOTER (MESSAGE TYPE AREA) --- */}
            <Box sx={{ flexShrink: 0, bgcolor: darkMode ? '#1a1a2e' : '#fff', zIndex: 10 }}>
                <Box sx={{ px: { xs: '14px', sm: '25px' }, mb: '15px', display: 'flex', gap: '8px', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                    {quickReplies.map((reply) => (
                        <Button
                            key={reply}
                            variant="outlined"
                            sx={{
                                borderRadius: '30px',
                                textTransform: 'none',
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: '11px',
                                color: darkMode ? '#ccc' : '#444',
                                borderColor: darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                                whiteSpace: 'nowrap',
                                px: '16px',
                                py: '6px',
                                minWidth: 'auto',
                                height: 'auto',
                                '&:hover': { borderColor: '#00E783', bgcolor: 'transparent' }
                            }}
                        >
                            {reply}
                        </Button>
                    ))}
                </Box>

                <Box sx={{
                    p: { xs: '0 14px 16px 14px', sm: '0 25px 20px 25px' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <IconButton
                        sx={{ p: 0, color: '#00E783' }}
                        onClick={(e) => { e.stopPropagation(); setShowFilePopup(!showFilePopup); }}
                    >
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
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            sx={{
                                flex: 1,
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                color: darkMode ? '#fff' : '#000',
                                '& .MuiInputBase-input::placeholder': { color: '#B0B0B0', opacity: 1 }
                            }}
                        />
                        <IconButton size="small" sx={{ color: '#B0B0B0' }}><PhotoCameraIcon sx={{ fontSize: '20px' }} /></IconButton>
                        <IconButton size="small" sx={{ color: '#00E783' }} onClick={handleSendMessage}><SendIcon sx={{ fontSize: '20px' }} /></IconButton>
                    </Box>
                </Box>
            </Box>

            {showCallPopup && <CallPopup onClose={() => setShowCallPopup(false)} />}
            {showOptionPopup && <OptionPopup onClose={() => setShowOptionPopup(false)} />}
            {showSchedulePopup && <SchedulePopup onClose={() => setShowSchedulePopup(false)} darkMode={darkMode} />}
            {reactionPopup.show && <ReactionPopup position={reactionPopup.position} />}
            {showFilePopup && <FilePopup onClose={() => setShowFilePopup(false)} />}
        </Box>
    );
};

export default MessageArea;
