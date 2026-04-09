import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import heroRobot from '../../../assets/hero/herorobot.webp';
import nexusText from '../../../assets/hero/nexus.webp';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import AITool from '../ai tool/aitool';
import CVSection from '../cvsection/cvsection';
import Partners from '../partners/partners';
import ChooseUs from '../chooseus/chooswus';
import Reviews from '../review/review';
import PriceForU from '../priceforu/priceforu';
import QAndA from '../q&a/q&a';

const Hero = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Box sx={{
                width: '100%',
                minHeight: { xs: 'auto', md: '650px' },
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#050505',
                background: {
                    xs: 'radial-gradient(circle at 50% 80%, rgba(0, 231, 131, 0.5) 0%, rgba(0,0,0,0) 60%), #050505',
                    md: 'radial-gradient(circle at 60% 40%, rgba(0, 231, 131, 0.8) 0%, rgba(0,0,0,0) 40%), #050505'
                },
                overflow: 'hidden',
                pt: { xs: '75px', md: '0px' }, // Push content below 75px fixed navbar on mobile
                pb: { xs: '60px', md: '0px' },
                boxSizing: 'border-box'
            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1225px',
                    px: '20px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    boxSizing: 'border-box'
                }}>

                    {/* Background Nexus Text */}
                    <Box
                        component="img"
                        src={nexusText}
                        sx={{
                            position: 'absolute',
                            top: { xs: '50%', md: '280px' },
                            left: { xs: '50%', md: '450px' }, // Dynamic left for laptop
                            transform: { xs: 'translate(-50%, -50%)', md: 'none' },
                            width: { xs: '90%', sm: '400px', md: '500px', lg: '578px' }, // Scale down on laptops
                            height: 'auto',
                            opacity: { xs: 0.15, md: 0.3 },
                            pointerEvents: 'none',
                            zIndex: 1
                        }}
                    />

                    {/* Left Content */}
                    <Box sx={{
                        position: 'relative',
                        zIndex: 2,
                        maxWidth: { xs: '100%', md: '500px', lg: '635px' }, // Content width
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' }
                    }}>

                        {/* Top Pill label */}
                        <Box sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: { xs: 'auto', sm: '237px' },
                            height: '25px',
                            borderRadius: '1000px',
                            gap: '10px',
                            pt: '3px',
                            pr: '32px',
                            pb: '3px',
                            pl: '32px',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.23) 0%, rgba(153, 153, 153, 0.23) 100%)',
                            backdropFilter: 'blur(19.2px)',
                            WebkitBackdropFilter: 'blur(19.2px)',
                            mb: '30px',
                            boxSizing: 'border-box'
                        }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#ccc', fontWeight: 500 }}>
                                Lorem lipsum 2025 . Lorem &gt;
                            </Typography>
                        </Box>

                        {/* Main Heading */}
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: { xs: '32px', sm: '38px', md: '36px', lg: '43.85px' }, // Scale down for 1366px laptops
                            color: '#fff',
                            lineHeight: { xs: '1.2', md: '1.2', lg: '50.12px' },
                            letterSpacing: '0%',
                            textTransform: 'uppercase',
                            width: '100%',
                            mb: '24px'
                        }}>
                            LOREM IPSUM DOLOR<br />
                            CONSEC <span style={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: 'inherit',
                                lineHeight: 'inherit',
                                textTransform: 'uppercase',
                                color: 'rgba(255, 255, 255, 1)'
                            }}>TETURV</span> MALLASTER
                        </Typography>

                        {/* Body Text */}
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: { xs: '14px', md: '16px' },
                            color: 'rgba(255, 255, 255, 1)',
                            lineHeight: { xs: '1.4', md: '19px' },
                            letterSpacing: '0%',
                            width: { xs: '100%', md: '467px' },
                            maxWidth: '100%',
                            height: { xs: 'auto', md: '86px' },
                            mb: '40px'
                        }}>
                            Lorem ipsum dolor sit amet consectetur. Odio consequat nibh faucibus et convallis ac proin. Lorem ipsum dolor sit amet consectetur. Odio consequat nibh faucibus et convallis ac proin.
                        </Typography>

                        {/* CTA Button */}
                        <Button sx={{
                            bgcolor: 'rgba(2, 255, 145, 1)',
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: '16px',
                            width: '147px',
                            height: '45px',
                            borderRadius: '20px',
                            pt: '15px',
                            pr: '20px',
                            pb: '15px',
                            pl: '17px',
                            gap: '3px',
                            textTransform: 'none',
                            minWidth: 'unset',
                            boxSizing: 'border-box',
                            '&:hover': {
                                bgcolor: '#00E67E'
                            }
                        }}>
                            Join Now
                        </Button>
                    </Box>

                    {/* Right Side Robot Image */}
                    <Box
                        component="img"
                        src={heroRobot}
                        alt="Robot"
                        sx={{
                            position: { xs: 'relative', md: 'absolute' },
                            right: { xs: 'auto', md: '0px' }, // Aligns to the right of the 1225px wrapper
                            top: { xs: 'auto', md: '50%' },
                            transform: { xs: 'none', md: 'translateY(-50%)' },
                            mt: { xs: '40px', md: '0px' },
                            width: { xs: '80%', sm: '400px', md: '450px', lg: '574px' }, // Scale down on laptops
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            zIndex: 2,
                            pointerEvents: 'none'
                        }}
                    />
                </Box>
            </Box>
            <AITool />
            <CVSection />
            <Partners />
            <ChooseUs />
            <Reviews />
            <PriceForU />
            <QAndA />
            <Footer />
        </Box>
    );
};

export default Hero;
