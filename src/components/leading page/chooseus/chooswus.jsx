import React from 'react';
import { Box, Typography } from '@mui/material';

import robot1 from '../../../assets/leaderpage/chooseus/robo1.webp';
import robot2 from '../../../assets/leaderpage/chooseus/robo2.webp';

const GRADIENT = 'linear-gradient(180deg, #02FF91 0%, #9AD80B 45.98%, #17AA03 100%)';

const CheckItem = ({ text }) => (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', mb: '10px' }}>
        <Box sx={{
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            bgcolor: '#05C168',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            mt: '1px'
        }}>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                <path d="M1 4L3.8 7L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Box>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: '13.5px', color: '#1a1a1a', lineHeight: 1.5 }}>
            {text}
        </Typography>
    </Box>
);

const ArrowButton = () => (
    <Box sx={{
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        bgcolor: '#1DB954',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
    }}>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    </Box>
);

const ChooseUs = () => {
    return (
        <Box sx={{
            width: '100%',
            py: { xs: 4, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#ffffff'
        }}>

            {/* WHY NEXUS Pill */}
            <Box sx={{
                height: '25px',
                borderRadius: '1000px',
                bgcolor: '#EBEBEB',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '3px 17px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                mb: '14px'
            }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '10px', color: '#888', letterSpacing: '0.5px' }}>
                    WHY NEXUS
                </Typography>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none">
                    <path d="M1 7L4 4L1 1" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Box>

            {/* Heading */}
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '22px', color: '#000', mb: '8px' }}>
                WHY CHOSSE US ?
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#666', mb: '44px', textAlign: 'center' }}>
                All in one career platform from branding to sourcing to hiring
            </Typography>

            {/* Two Cards Row */}
            <Box sx={{
                display: 'flex',
                gap: '22px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '100%',
                maxWidth: '1225px',
                px: '20px',
                mx: 'auto',
                boxSizing: 'border-box'
            }}>

                {/* ─── LEFT CARD — FOR EMPLOYERS ─── */}
                <Box sx={{
                    width: { xs: '100%', md: '579px' },
                    maxWidth: '579px',
                    height: { xs: 'auto', md: '447px' },
                    borderRadius: '30px',
                    background: GRADIENT,
                    position: 'relative',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: '16px',
                    pb: { xs: '80px', md: '0px' }, // Extra padding for the robot on mobile
                    boxSizing: 'border-box'
                }}>
                    {/* Inner White Box — 548x416, concave notch at bottom-left for robot */}
                    <Box sx={{
                        width: { xs: 'calc(100% - 32px)', md: '548px' }, // Account for padding
                        height: { xs: 'auto', md: '416px' },
                        bgcolor: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        p: { xs: '20px', md: '28px 28px 24px 28px' },
                        position: 'relative',
                        zIndex: 1,
                        boxSizing: 'border-box',
                        borderRadius: '15px',
                        clipPath: { xs: 'none', md: 'polygon(0 0, 100% 0, 100% 100%, 0 77%)' }
                    }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '20px', lineHeight: '30px', color: '#000', mb: '4px', textAlign: 'center', pt: '28px' }}>
                            FOR EMPLOYERS
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', color: '#666', mb: '16px', textAlign: 'center' }}>
                            HireOS by Talenlio Smarter hiring. Simplified
                        </Typography>

                        <Box sx={{
                            position: { xs: 'relative', md: 'absolute' },
                            width: { xs: '100%', md: '245px' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            left: { xs: 'auto', md: '230px' },
                            top: { xs: 'auto', md: '140px' },
                            mb: { xs: '20px', md: '0px' }
                        }}>
                            <CheckItem text="Built in ATS + AI Screening" />
                            <CheckItem text="One click job posting & filtering" />
                            <CheckItem text="Talent pipeline automation" />
                            <CheckItem text="Ideal for startups, agencies & global HR teams" />

                        </Box>

                        {/* Explore Link — indented past the notch */}
                        <Box component="button" sx={{ display: 'flex', alignItems: 'center', gap: '10px', pt: { xs: '10px', md: '190px' }, pl: { xs: '0px', md: '208px' }, cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left', position: 'relative', zIndex: 10 }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', color: '#000' }}>
                                Explore HireOS
                            </Typography>
                            <ArrowButton />
                        </Box>
                    </Box>

                    {/* Robot 1 — outside bottom-left of card */}
                    <Box
                        component="img"
                        src={robot1}
                        alt="Robot Employer"
                        sx={{
                            position: 'absolute',
                            bottom: { xs: '-10px', md: '10px' },
                            left: { xs: '10px', md: '-36px' },
                            width: { xs: '120px', md: '165px' },
                            height: 'auto',
                            objectFit: 'contain',
                            pointerEvents: 'none',
                            zIndex: 3
                        }}
                    />
                </Box>

                {/* ─── RIGHT CARD — FOR INSTITUTIONS ─── */}
                <Box sx={{
                    width: { xs: '100%', md: '579px' },
                    maxWidth: '579px',
                    height: { xs: 'auto', md: '447px' },
                    borderRadius: '30px',
                    background: GRADIENT,
                    position: 'relative',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: '16px',
                    pb: { xs: '80px', md: '0px' }, // Extra padding for the robot on mobile
                    boxSizing: 'border-box',
                    mt: { xs: '20px', md: '0px' }
                }}>
                    {/* Inner White Box — 548x416, concave notch at bottom-right for robot */}
                    <Box sx={{
                        width: { xs: 'calc(100% - 32px)', md: '548px' }, // Account for padding
                        height: { xs: 'auto', md: '416px' },
                        bgcolor: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        p: { xs: '20px', md: '28px 28px 24px 28px' },
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '15px',
                        boxSizing: 'border-box',
                        // Straight-edge mirrored slant to match blue trace
                        clipPath: { xs: 'none', md: 'polygon(0 0, 100% 0, 100% 77%, 0 100%)' }
                    }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '20px', lineHeight: '30px', color: '#000', mb: '4px', textAlign: 'center', pt: '28px' }}>
                            FOR INSTITUTIONS
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', lineHeight: '23px', color: '#666', mb: '16px', textAlign: 'center' }}>
                            Organiza by Talenlio Empower your students.<br />Enable their success.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <CheckItem text="Centralized dashboard for career services" />
                            <CheckItem text="Resume & LinkedIn workshops" />
                            <CheckItem text="Outcome analytics & cohort tracking" />
                            <CheckItem text="Ideal for Universities, EdTechs, NGOs, Bootcamps" />
                        </Box>

                        {/* Partner Link — indented away from the notch */}
                        <Box component="button" sx={{ display: 'flex', alignItems: 'center', gap: '10px', pt: { xs: '10px', md: '25px' }, cursor: 'pointer', pr: { xs: '0px', md: '90px' }, background: 'none', border: 'none', textAlign: 'left', position: 'relative', zIndex: 10 }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '14px', color: '#000' }}>
                                Partner with Organiza
                            </Typography>
                            <ArrowButton />
                        </Box>
                    </Box>

                    {/* Robot 2 — outside bottom-right of card */}
                    <Box
                        component="img"
                        src={robot2}
                        alt="Robot Institution"
                        sx={{
                            position: 'absolute',
                            bottom: { xs: '-5px', md: '-5px' },
                            right: { xs: '10px', md: '-70px' }, // Inbound slightly on mobile
                            width: { xs: '120px', md: '165px' },
                            height: 'auto',
                            objectFit: 'contain',
                            pointerEvents: 'none',
                            zIndex: 3
                        }}
                    />
                </Box>

            </Box>
        </Box>
    );
};

export default ChooseUs;
