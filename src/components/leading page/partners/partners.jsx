import React from 'react';
import { Box, Typography } from '@mui/material';

// Import all 8 partner logo assets
import img9 from '../../../assets/leaderpage/partners/images9.webp';
import img10 from '../../../assets/leaderpage/partners/images10.webp';
import img11 from '../../../assets/leaderpage/partners/images11.webp';
import img12 from '../../../assets/leaderpage/partners/images12.webp';
import img13 from '../../../assets/leaderpage/partners/images13.webp';
import img14 from '../../../assets/leaderpage/partners/images14.webp';
import img15 from '../../../assets/leaderpage/partners/images15.webp';
import img16 from '../../../assets/leaderpage/partners/images16.webp';

const partnerLogos = [img9, img10, img11, img12, img13, img14, img15, img16];

const Partners = () => {
    return (
        <Box sx={{
            width: '100%',
            py: { xs: 4, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#ffffff'
        }}>

            {/* OUR PARTNERS Pill Badge */}
            <Box sx={{
                height: '25px',
                borderRadius: '1000px',
                bgcolor: '#EBEBEB',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '3px 17px',
                display: 'flex',
                alignItems: 'center',
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
                    OUR PARTNERS
                </Typography>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L4 4L1 1" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Box>

            {/* Section Title */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: '22px',
                color: '#000',
                textAlign: 'center',
                mb: '40px'
            }}>
                LOREM LIPSUM LORERM
            </Typography>

            {/* Partners Logo Grid — 4 columns x 2 rows */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, // Explicitly force 4 columns on tablets and up
                columnGap: { xs: '30px', md: '60px', lg: '90px' },
                rowGap: { xs: '30px', md: '50px' },
                maxWidth: '1225px', // Exact bounding box limit
                width: '100%',
                mx: 'auto',
                px: { xs: '20px', md: '40px' },
                boxSizing: 'border-box',
                alignItems: 'center',
                justifyItems: 'center'
            }}>
                {partnerLogos.map((logo, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '52px'
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt={`Partner ${idx + 9}`}
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                opacity: 1,
                            }}
                        />
                    </Box>
                ))}
            </Box>

        </Box>
    );
};

export default Partners;
