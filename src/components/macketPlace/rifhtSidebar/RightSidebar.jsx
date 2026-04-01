import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Assets
import m1 from '../../../assets/MarcketPlace/RightSidebar/m1.webp';
import m2 from '../../../assets/MarcketPlace/RightSidebar/m2.webp';
import m3 from '../../../assets/MarcketPlace/RightSidebar/m3.webp';
import mechanic from '../../../assets/Home/sevice/mechanic.webp';

// Icons for the bottom section
import iconElectronics from '../../../assets/MarcketPlace/RightSidebar/down section/Frame 758531284.webp'; // Assuming this is electronics
import iconHomeEssential from '../../../assets/MarcketPlace/RightSidebar/down section/HomeEssential.webp';
import iconMachineries from '../../../assets/MarcketPlace/RightSidebar/down section/Machiners.webp';
import iconOfficeSupply from '../../../assets/MarcketPlace/RightSidebar/down section/OfficeSupply.webp';
import iconOfficeTech from '../../../assets/MarcketPlace/RightSidebar/down section/officeTechnoligies.webp';
import iconRentals from '../../../assets/MarcketPlace/RightSidebar/down section/rentals.webp';

const RightSidebar = ({ darkMode = false }) => {
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const bgColor = darkMode ? '#1e1e2e' : '#fff';

    const categories = [
        { name: 'Electronics', icon: iconElectronics },
        { name: 'Office Technologies', icon: iconOfficeTech },
        { name: 'Office Supplies', icon: iconOfficeSupply },
        { name: 'Machineries', icon: iconMachineries },
        { name: 'Home Essentials', icon: iconHomeEssential },
        { name: 'Rentals', icon: iconRentals },
    ];

    return (
        <Box sx={{
            display: { xs: 'none', md: 'flex' },
            width: { md: '300px', lg: '372px' },
            flexShrink: 0,
            flexDirection: 'column',
            gap: '20px',
            boxSizing: 'border-box'
        }}>
            {/* Top Container */}
            <Box sx={{
                width: '100%',
                bgcolor: bgColor,
                borderRadius: '8px',
                py: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                boxSizing: 'border-box'
            }}>
                {/* Trending Brand Offers Header and Content */}
                <Box sx={{ width: '100%', px: '16px', boxSizing: 'border-box' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins', color: textColor, mb: 1.5, ml: '24px' }}>
                        Trending Brand Offers
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, width: '100%' }}>
                        <IconButton size="small" sx={{ p: 0.5, color: textColor }}>
                            <ArrowBackIosNewIcon sx={{ fontSize: '14px', color: textColor }} />
                        </IconButton>

                        <Box sx={{ position: 'relative', width: '298px', maxWidth: 'calc(100% - 40px)', height: '131.87px', borderRadius: '9.42px', overflow: 'hidden' }}>
                            <Box component="img" src={m1} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <Box sx={{
                                position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)',
                                display: 'flex', gap: '4px'
                            }}>
                                <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: '#fff' }} />
                                <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                                <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                            </Box>
                        </Box>

                        <IconButton size="small" sx={{ p: 0.5, color: textColor }}>
                            <ArrowForwardIosIcon sx={{ fontSize: '14px', color: textColor }} />
                        </IconButton>
                    </Box>
                </Box>

                {/* Smart Phones and Laptops */}
                <Box sx={{ width: '100%', px: '16px', boxSizing: 'border-box' }}>
                    <Box sx={{ display: 'flex', paddingLeft: '24px', gap: '15px' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins', color: textColor, mb: 1.5, width: '139.58px' }}>
                            Smart Phones
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Poppins', color: textColor, mb: 1.5 }}>
                            Laptops
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, width: '100%' }}>
                        <IconButton size="small" sx={{ p: 0.5, color: textColor }}>
                            <ArrowBackIosNewIcon sx={{ fontSize: '14px', color: textColor }} />
                        </IconButton>

                        <Box sx={{ display: 'flex', gap: '15px', width: 'calc(100% - 40px)', maxWidth: '294px' }}>
                            <Box sx={{ width: '139.58px', flex: 1, height: '131.87px', borderRadius: '9.42px', overflow: 'hidden' }}>
                                <Box component="img" src={m2} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <Box sx={{
                                    mt: '-20px', display: 'flex', justifyContent: 'center', gap: '4px', position: 'relative', zIndex: 1
                                }}>
                                    <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: '#fff' }} />
                                    <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                                    <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                                </Box>
                            </Box>

                            <Box sx={{ width: '139.58px', flex: 1, height: '131.87px', borderRadius: '9.42px', overflow: 'hidden' }}>
                                <Box component="img" src={m3} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <Box sx={{
                                    mt: '-20px', display: 'flex', justifyContent: 'center', gap: '4px', position: 'relative', zIndex: 1
                                }}>
                                    <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: '#fff' }} />
                                    <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                                    <Box sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                                </Box>
                            </Box>
                        </Box>

                        <IconButton size="small" sx={{ p: 0.5, color: textColor }}>
                            <ArrowForwardIosIcon sx={{ fontSize: '14px', color: textColor }} />
                        </IconButton>
                    </Box>
                </Box>

                {/* Featured Products Button */}
                <Button
                    variant="contained"
                    sx={{
                        width: '100%',
                        maxWidth: '298px',
                        bgcolor: '#000',
                        color: '#fff',
                        textTransform: 'none',
                        borderRadius: '8px',
                        py: '10px',
                        mt: '5px',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: '13px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1.5,
                        '&:hover': { bgcolor: '#222' }
                    }}
                >
                    Featured Products
                    <ArrowForwardIcon sx={{ fontSize: '18px' }} />
                </Button>
            </Box>

            {/* Bottom Container (Categories) */}
            <Box sx={{
                width: '100%',
                bgcolor: bgColor,
                borderRadius: '8px',
                p: '25px',
                boxSizing: 'border-box'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box component="img" src={mechanic} sx={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                        <Typography sx={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Poppins', color: textColor }}>
                            Categories
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '13px', fontFamily: 'Poppins', color: subTextColor, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                        View All
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px 10px', pt: 1 }}>
                    {categories.map((cat, idx) => (
                        <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, cursor: 'pointer', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-2px)' } }}>
                            <Box sx={{ width: '42px', height: '42px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box component="img" src={cat.icon} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                            <Typography sx={{
                                fontSize: '11px',
                                fontFamily: 'Poppins',
                                color: subTextColor,
                                textAlign: 'center',
                                lineHeight: 1.2,
                                px: 0.5
                            }}>
                                {cat.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default RightSidebar;
