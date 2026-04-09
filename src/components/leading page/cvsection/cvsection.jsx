import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// Import local assets based on what we found in the folder
import cvImg1 from '../../../assets/leaderpage/cvsection/cv1.webp';
import cvImg2 from '../../../assets/leaderpage/cvsection/cv2.webp';
import cvImg3 from '../../../assets/leaderpage/cvsection/cv3.webp';


const CVSection = () => {
    // Array for the 3 main cards
    const cvCards = [
        {
            title: "AI JOB SPECIFIC RESUME",
            imgSrc: cvImg1,
            overlay: null
        },
        {
            title: "RESUME TRANSLATOR",
            imgSrc: cvImg2,
            overlay: null
        },
        {
            title: "AI RESUME SCANNER",
            imgSrc: cvImg3,
            selectedOffset: true,
            overlay: null
        }
    ];

    return (
        <Box sx={{
            width: '100%',
            py: { xs: 4, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#ffffff'
        }}>

            {/* Top Container for Header and Pill */}
            <Box sx={{ position: 'relative', width: '100%', maxWidth: '1159px', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '50px' }}>

                {/* Resume Tools Pill */}
                <Box sx={{
                    height: '25px',
                    borderRadius: '1000px',
                    bgcolor: '#EBEBEB',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '3px 17px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    mb: '12px'
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: '10px',
                        color: '#888',
                        letterSpacing: '0.5px'
                    }}>
                        RESUME TOOLS
                    </Typography>
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7L4 4L1 1" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>

                {/* Main Heading & Button Row */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'relative',
                    minHeight: '40px',
                    gap: { xs: '20px', md: '0px' },
                    px: { xs: '20px', md: '0px' },
                    boxSizing: 'border-box'
                }}>
                    {/* Main Heading */}
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 800,
                        fontSize: { xs: '20px', md: '24px' },
                        color: '#000',
                        textAlign: 'center'
                    }}>
                        LOREM IPSUM LOREM LIP
                    </Typography>

                    {/* Upload Button overlayed on the right */}
                    <Button sx={{
                        position: { xs: 'relative', md: 'absolute' },
                        right: { xs: 'auto', md: 0 },
                        top: { xs: 'auto', md: '50%' },
                        transform: { xs: 'none', md: 'translateY(-50%)' },
                        bgcolor: '#00F076', // Bright mint green
                        color: '#000',
                        borderRadius: '100px',
                        px: 3,
                        py: 1,
                        textTransform: 'none',
                        fontWeight: 700,
                        fontFamily: 'Poppins',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0px 4px 10px rgba(0, 240, 118, 0.3)',
                        '&:hover': {
                            bgcolor: '#00D86A'
                        }
                    }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 11.6667V2.33333M7 2.33333L2.91667 6.41667M7 2.33333L11.0833 6.41667M12.8333 11.6667H1.16667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        UPLOAD YOUR RESUME
                    </Button>
                </Box>
            </Box>

            {/* Grid of 3 Cards */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '24px',
                width: '100%',
                maxWidth: '1225px',
                mx: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                px: '20px',
                boxSizing: 'border-box'
            }}>
                {cvCards.map((card, idx) => (
                    <Box key={idx} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        {/* Image Container with Grey Background */}
                        <Box sx={{
                            width: { xs: '100%', sm: '379px' },
                            maxWidth: '379px',
                            height: { xs: 'auto', sm: '400px' },
                            aspectRatio: { xs: '379/400', sm: 'auto' },
                            bgcolor: '#EAEAEA', // Light grey background like mockup
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            overflow: 'visible', // allow shadow to break container
                            border: card.selectedOffset ? '2px solid #8A2BE2' : 'none', // Purple border for the 3rd one
                            boxSizing: 'border-box'
                        }}>
                            <Box
                                component="img"
                                src={card.imgSrc} // We keep this generic so it maps correctly; Component 1 is default
                                alt={card.title}
                                sx={{
                                    width: '85%',
                                    height: '85%',
                                    objectFit: 'contain',
                                    // Heavy dark shadow skewed to the left side
                                    filter: 'drop-shadow(-20px 15px 25px rgba(0,0,0,0.5))'
                                }}
                            />
                            {/* Overlay items (Dropdown or Scan button) */}
                            {card.overlay}
                        </Box>

                        {/* Gradient Button below image */}
                        <Button sx={{
                            width: { xs: '100%', sm: '320px' },
                            maxWidth: '320px',
                            height: '52px', // Slightly taller for the bold text
                            borderRadius: '100px',
                            padding: 0,
                            overflow: 'hidden',
                            display: 'flex',
                            position: 'relative',
                            textTransform: 'none',
                            cursor: 'pointer',
                            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
                            // New gradient: Neon Green (#00E659) to Dark Forest Green (#003A00) left to right
                            background: 'linear-gradient(90deg, #00E659 0%, #009923 45%, #002D05 100%)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover': { filter: 'brightness(1.05)' }
                        }}>
                            <Typography sx={{
                                color: '#fff',
                                fontFamily: 'Poppins',
                                fontWeight: 800, // Extra bold like the screenshot
                                fontSize: '13px',
                                letterSpacing: '0.5px'
                            }}>
                                {card.title}
                            </Typography>
                        </Button>
                    </Box>
                ))}
            </Box>

        </Box>
    );
};

export default CVSection;
