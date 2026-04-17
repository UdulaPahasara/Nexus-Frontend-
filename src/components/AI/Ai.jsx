import React from 'react';
import { Box, Typography, InputBase } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';

// Assets
import chatSectionImg from '../../assets/Ai/chatSection.webp';
import micIcon from '../../assets/Ai/mic_button_icon .webp';
import nexsusAiLogo from '../../assets/Ai/NexsusAI.webp';

const Ai = ({ darkMode = false, onBack }) => {

    const pastChats = [
        "Lorem ipsum dolor sit amet cokm ..",
        "Lorem ipsum dolor sit amet cokm ..",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor sit amet cokm ..",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit amet cokm ..",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit amet cokm ..",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit",
        "Lorem ipsum dolor sit amet cokm ..",
        "Lorem ipsum dolor sit amet"
    ];

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            width: '100%',
            height: { xs: '100dvh', md: 'auto' },
            justifyContent: 'center',
            alignItems: { xs: 'stretch', lg: 'flex-start' },
            gap: '30px',
            pt: { xs: 0, lg: '10px' },
            pb: { xs: 0, lg: '30px' },
            boxSizing: 'border-box',
            position: 'relative',
            overflow: { xs: 'hidden', lg: 'visible' },
        }}>

            {/* Left Sidebar (Chat History) - desktop only */}
            <Box sx={{
                width: '288px',
                height: '656px',
                bgcolor: '#0a0a0a',
                borderRadius: '15px',
                p: '25px 20px',
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                boxSizing: 'border-box',
                flexShrink: 0
            }}>
                {/* Header */}
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', mb: '35px', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontFamily: 'Orbitron, Poppins', fontSize: '13px', color: '#fff', letterSpacing: '1px' }}>
                        NEXUS
                    </Typography>
                    <Box sx={{
                        border: '1px solid rgba(255,255,255,0.2)', width: '22px', height: '22px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', cursor: 'pointer'
                    }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
                    </Box>
                </Box>

                {/* Actions */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '20px', cursor: 'pointer' }}>
                    <AddIcon sx={{ color: '#fff', fontSize: '18px' }} />
                    <Typography sx={{ color: '#fff', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>New chat</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '30px', cursor: 'pointer' }}>
                    <SearchIcon sx={{ color: '#aaa', fontSize: '18px' }} />
                    <Typography sx={{ color: '#aaa', fontFamily: 'Poppins', fontSize: '12px', fontWeight: 500 }}>Search chats</Typography>
                </Box>

                {/* Chat History List */}
                <Typography sx={{ color: '#555', fontFamily: 'Poppins', fontSize: '11px', fontWeight: 500, mb: '20px' }}>Chats</Typography>
                <Box sx={{
                    flex: 1, overflowY: 'auto',
                    '&::-webkit-scrollbar': { width: '4px' },
                    '&::-webkit-scrollbar-thumb': { bgcolor: '#333', borderRadius: '4px' },
                    display: 'flex', flexDirection: 'column', gap: '18px', pr: '10px'
                }}>
                    {pastChats.map((text, i) => (
                        <Typography key={i} sx={{
                            color: '#ccc', fontFamily: 'Poppins', fontWeight: 400, fontSize: '13px',
                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                            cursor: 'pointer', '&:hover': { color: '#fff' }
                        }}>
                            {text}
                        </Typography>
                    ))}
                </Box>
            </Box>

            {/* ── CENTER: Chat Card ── */}
            <Box sx={{
                flex: { xs: 1, lg: 'unset' },
                width: { xs: '100%', lg: '744px' },
                maxWidth: '744px',
                height: { xs: '100%', md: '656px' },
                borderRadius: { xs: 0, sm: '15px' },
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#050505',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
            }}>

                {/* Background Image — full cover */}
                <Box
                    component="img"
                    src={chatSectionImg}
                    alt="Nexus AI Chat"
                    sx={{
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                />

                {/* Dark gradient overlay at top for title legibility */}
                <Box sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '80px',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }} />

                {/* Dark gradient overlay at bottom for input legibility */}
                <Box sx={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '180px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }} />

                {/* Top: NEXUS AI Logo */}
                <Box sx={{
                    position: 'absolute',
                    top: '20px',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    pointerEvents: 'none'
                }}>
                    <Box
                        component="img"
                        src={nexsusAiLogo}
                        alt="NEXUS AI"
                        sx={{ height: { xs: '22px', md: '19px' }, width: 'auto', objectFit: 'contain' }}
                    />
                </Box>

                {/* Bottom: Mic + Input */}
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    px: { xs: '16px', sm: '24px', md: '30px' },
                    pb: { xs: '24px', md: '30px' },
                }}>
                    {/* Microphone Button */}
                    <Box
                        component="img"
                        src={micIcon}
                        sx={{
                            width: '48px',
                            height: '54px',
                            borderRadius: '34.41px',
                            border: '0.67px solid rgba(0, 234, 142, 0.4)',
                            objectFit: 'cover',
                            cursor: 'pointer',
                            boxShadow: '0px 0px 15px rgba(0, 234, 142, 0.25)'
                        }}
                    />

                    {/* Type Box */}
                    <Box sx={{
                        width: '100%',
                        maxWidth: { xs: '100%', sm: '480px', md: '520px', lg: '440px' },
                        height: '49px',
                        borderRadius: '9.26px',
                        bgcolor: 'rgba(40, 40, 40, 0.85)',
                        display: 'flex',
                        alignItems: 'center',
                        px: '16px',
                        backdropFilter: 'blur(12px)',
                        boxSizing: 'border-box',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <AddIcon sx={{ color: '#aaa', fontSize: '18px', mr: '10px', cursor: 'pointer', flexShrink: 0 }} />
                        <InputBase
                            placeholder="I Type here ..."
                            sx={{ color: '#ddd', flex: 1, fontSize: '13px', fontFamily: 'Poppins' }}
                        />
                        <Box sx={{
                            width: '30px', height: '30px', borderRadius: '50%',
                            bgcolor: '#00E783', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', cursor: 'pointer', flexShrink: 0, ml: '8px'
                        }}>
                            <SendIcon sx={{ color: '#000', fontSize: '15px', transform: 'rotate(-30deg)', mt: '-2px' }} />
                        </Box>
                    </Box>
                </Box>

                {/* Mobile: Compact Exit button — top-right circle */}
                <Box onClick={onBack} sx={{
                    display: { xs: 'flex', lg: 'none' },
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    zIndex: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    bgcolor: 'rgba(255, 40, 40, 0.18)',
                    border: '1px solid rgba(255, 80, 80, 0.45)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    '&:hover': {
                        bgcolor: 'rgba(255, 40, 40, 0.35)',
                        transform: 'scale(1.05)'
                    },
                    transition: 'all 0.2s'
                }}>
                    <ArrowBackIcon sx={{ color: '#ff4444', fontSize: '16px' }} />
                </Box>
            </Box>

            {/* Right: Settings + Exit — desktop only */}
            <Box sx={{
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                gap: '20px',
                pt: '5px',
                minWidth: '150px'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <SettingsOutlinedIcon sx={{ color: '#fff', fontSize: '18px' }} />
                    <Typography sx={{ color: '#fff', fontFamily: 'Poppins', fontSize: '13px', fontWeight: 500 }}>Settings</Typography>
                </Box>
                <Box onClick={onBack} sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <ArrowBackIcon sx={{ color: '#ff3333', fontSize: '18px' }} />
                    <Typography sx={{ color: '#ff3333', fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600 }}>Exit AI</Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default Ai;
