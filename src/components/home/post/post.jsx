import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

// Profile pic from propffun folder
import profilePic from '../../../assets/Home/propffun/profilepic.webp';

/* ─── inline styles for the native input ─── */
const inputStyle = (darkMode) => ({
    flex: 1,
    height: '35px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '13px',
    color: darkMode ? '#ccc' : '#333',
    caretColor: '#00E783',
    minWidth: 0,    // prevent overflow in flex
});

const placeholderStyle = `
    input.post-input::placeholder {
        color: #aaa;
        font-family: Poppins, sans-serif;
    }
`;

const Post = ({ darkMode = false }) => {
    const [text, setText] = useState('');

    return (
        <>
            {/* inject placeholder colour once */}
            <style>{placeholderStyle}</style>

            {/* Main layout */}
            <Box sx={{
                width: '100%',
                maxWidth: '643px',
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '12px',
                px: '20px',
                py: '15px',
                boxSizing: 'border-box',
                boxShadow: darkMode
                    ? '0px 2px 10px rgba(0,0,0,0.4)'
                    : '0px 2px 10px rgba(0,0,0,0.07)',
                transition: 'background 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',

            }}>

                {/* ─── ROW 1: Profile pic + text input + POST button ─── */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        flex: '1 1 auto',
                        minWidth: 0,
                    }}>
                        {/* Profile Picture — 35×35 circle */}
                        <Box
                            component="img"
                            src={profilePic}
                            alt="Profile"
                            sx={{
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                flexShrink: 0
                            }}
                        />

                        {/* Native input */}
                        <input
                            className="post-input"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Type Anything ?"
                            style={inputStyle(darkMode)}
                        />
                    </Box>

                    {/* POST button */}
                    <Box
                        component="button"
                        onClick={() => {
                            if (text.trim()) {
                                setText('');
                            }
                        }}
                        sx={{
                            width: '81px',
                            height: '36px',
                            minWidth: '81px',
                            borderRadius: '100px',
                            bgcolor: '#00E783', // Solid green from design
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            boxSizing: 'border-box',
                            p: 0,
                            transition: 'opacity 0.15s, transform 0.1s',
                            '&:hover': { opacity: 0.88, transform: 'scale(1.03)' },
                            '&:active': { transform: 'scale(0.97)' }
                        }}
                    >
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: '13px',
                            color: '#000',
                            lineHeight: 1,
                            userSelect: 'none',
                            pointerEvents: 'none'
                        }}>
                            POST
                        </Typography>
                    </Box>
                </Box>

                {/* ─── ROW 2: Media icon buttons ─── */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    pl: '0px'
                }}>
                    {/* Gallery Icon */}
                    <Box sx={{ cursor: 'pointer', opacity: 0.6, display: 'flex' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#ccc' : '#555'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </Box>

                    {/* Plus Icon */}
                    <Box sx={{ cursor: 'pointer', opacity: 0.6, display: 'flex' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#ccc' : '#555'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </Box>

                    {/* More Menu Icon */}
                    <Box sx={{ cursor: 'pointer', opacity: 0.6, display: 'flex' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#ccc' : '#555'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="6" r="1.5" fill="currentColor" stroke="none"></circle>
                            <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"></circle>
                            <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none"></circle>
                        </svg>
                    </Box>

                    {/* Eye Icon */}
                    <Box sx={{ cursor: 'pointer', opacity: 0.6, display: 'flex' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={darkMode ? '#ccc' : '#555'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Post;
