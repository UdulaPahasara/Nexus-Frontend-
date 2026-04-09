import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PricingCard = ({ title, price, isPro = false }) => {
    // Shared inner styling
    const innerCard = (
        <Box sx={{
            width: { xs: '100%', sm: '350px' }, // Scale down from 379px to safely fit 3 across
            maxWidth: '350px',
            height: '400px',
            bgcolor: '#F5F5F5',
            borderRadius: '40px',
            p: { xs: '30px', md: '40px' },
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        }}>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', color: '#888', textTransform: 'uppercase', mb: 1 }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'baseline', mb: '10px' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '48px', color: '#000', lineHeight: 1 }}>
                    ${price}
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px', color: '#888' }}>
                    / month
                </Typography>
            </Box>

            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '13.72px', color: '#000', mb: '6px' }}>
                Lorem Ipsum
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', mb: 'auto' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '13.72px', color: '#000', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#000' }}>✓</span> Lorem ipsum lorem
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '13.72px', color: '#000', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#000' }}>✓</span> Lorem ipsum lorem
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '13.72px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#aaa' }}>✕</span> lorem lipsum loremmm
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '13.72px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#aaa' }}>✕</span> lorem lipsum loremmm
                </Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '13.72px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#aaa' }}>✕</span> lorem lipsum loremmm loremn
                </Typography>
            </Box>

            <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#aaa', mb: 3, mt: 2 }}>
                Sales tax and VAT may apply
            </Typography>

            <Button sx={{
                width: '100%',
                height: '46px',
                borderRadius: '8px',
                bgcolor: isPro ? '#00FF8B' : '#A5D6A7',
                color: '#000',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                    bgcolor: isPro ? '#00E67E' : '#90C692',
                    boxShadow: 'none',
                }
            }}>
                {title === 'ORGANIZATION' ? 'LET\'S TALK' : 'GET STARTED'} <span style={{ marginLeft: '8px' }}>→</span>
            </Button>
        </Box>
    );

    // If it's the PRO card, wrap it in the gradient container
    if (isPro) {
        return (
            <Box sx={{
                width: { xs: '100%', sm: '375px' }, // Scale down from 402px
                maxWidth: '375px',
                height: { xs: '416px', sm: '420px', md: 'auto' },
                minHeight: '394px',
                background: 'linear-gradient(180deg, #00E783 0%, #ADC90B 48.58%, #17AA03 100%)',
                borderRadius: '40px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: '30px', md: '40px' },
                pb: { xs: '16px', md: '0px' },
                px: { xs: '16px', sm: '0px' },
                boxSizing: 'border-box'
            }}>
                <Typography sx={{
                    position: 'absolute',
                    top: '12px',
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '11px',
                    color: '#fff',
                    letterSpacing: '0.5px'
                }}>
                    BEST VALUE TO PRICE
                </Typography>

                {innerCard}
            </Box>
        );
    }

    // Standard card
    return innerCard;
};


const PriceForU = () => {
    return (
        <Box sx={{ width: '100%', py: { xs: 4, md: 8 }, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#fff' }}>

            {/* Header Pill */}
            <Box sx={{
                bgcolor: '#E8F5E9',
                borderRadius: '1000px',
                px: 2,
                py: 0.5,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '12px', color: '#2E7D32' }}>
                    PRICING FOR YOU &gt;
                </Typography>
            </Box>

            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '32px', color: '#000', mb: 3 }}>
                IOREM IIPSUM LOREM
            </Typography>

            {/* Toggle Switch Area */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', mb: 6 }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '15px', color: '#888', fontWeight: 500 }}>Monthly</Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '15px', color: '#000', fontWeight: 600 }}>Yearly</Typography>
                <Box sx={{
                    bgcolor: '#00E783',
                    borderRadius: '1000px',
                    px: 1.5,
                    py: 0.5
                }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 600, color: '#000' }}>
                        50 % off
                    </Typography>
                </Box>
            </Box>

            {/* Pricing Cards Grid */}
            <Box sx={{
                display: 'flex',
                gap: '20px', // Standardize gap
                alignItems: 'center', // Center vertically
                justifyContent: 'center', // Center horizontally
                flexWrap: { xs: 'wrap', md: 'nowrap' }, // Force single row on laptop
                px: '20px',
                mx: 'auto',
                boxSizing: 'border-box',
                width: '100%',
                maxWidth: '1225px'
            }}>
                <PricingCard title="FREE" price="0" />
                <PricingCard title="PRO" price="20" isPro={true} />
                <PricingCard title="ORGANIZATION" price="80" />
            </Box>

        </Box>
    );
};

export default PriceForU;
