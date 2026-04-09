import React from 'react';
import { Box, Typography, Link, IconButton, Select, MenuItem, FormControl } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import nexusLogoDark from '../../assets/nexus/nexus.webp'; // Update with proper dark logo path if differnet

function Footer() {
    return (
        <Box sx={{
            width: '1440px',
            maxWidth: '100%',
            height: { xs: 'auto', md: '362px' }, // allow height to grow organically on mobile
            bgcolor: '#ffffff',
            borderTop: '1px solid #E5E5E5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: '40px',
            pb: '20px',
            boxSizing: 'border-box'
        }}>
            <Box sx={{
                width: '1437px',
                maxWidth: '100%',
                px: { xs: 3, md: 5 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                gap: { xs: 4, md: 0 },
                boxSizing: 'border-box'
            }}>

                {/* Logo & Language Section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '200px' }}>
                    <Box
                        component="img"
                        src={nexusLogoDark}
                        alt="Nexus Logo"
                        sx={{
                            width: 169,
                            height: 24,
                            filter: 'invert(1)' // Since nexus.webp is white text, invert it for the white footer background. Remove this if you have a black version.
                        }}
                    />

                    <FormControl size="small" sx={{ width: 168 }}>
                        <Select
                            value="US English"
                            displayEmpty
                            sx={{
                                height: 30,
                                borderRadius: '100px',
                                bgcolor: '#000000',
                                color: '#ffffff',
                                fontFamily: 'Poppins',
                                fontSize: '12px',
                                fontWeight: 500,
                                '& .MuiSelect-icon': { color: '#ffffff' },
                                '& fieldset': { border: 'none' }
                            }}
                            IconComponent={KeyboardArrowDownIcon}
                        >
                            <MenuItem value="US English" sx={{ fontFamily: 'Poppins', fontSize: '12px' }}>US English</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Company Links */}
                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', color: '#000', mb: 2 }}>
                            COMPANY
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['Privacy Policy', 'Terms of Service', 'Contact Us', 'Our Team'].map((item) => (
                                <Link key={item} href="#" underline="hover" sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500, // Medium 
                                    fontSize: '12px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#000'
                                }}>
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Tools Links */}
                <Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', color: '#000', mb: 2 }}>
                        TOOLS
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {[
                            'Auto Apply To Jobs',
                            'AI Cover Letter',
                            'AI Resume Builder',
                            'Interview Buddy',
                            'Resume Translator',
                            'Job Board',
                            'LinkedIn Agent',
                            'AI Resume Scanner'
                        ].map((item) => (
                            <Link key={item} href="#" underline="hover" sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 500, // Medium 
                                fontSize: '12px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                color: '#000'
                            }}>
                                {item}
                            </Link>
                        ))}
                    </Box>
                </Box>

                {/* Packages & Resume Columns Container */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Box>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', color: '#000', mb: 2 }}>
                            OUR PACKAGES
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['FREE PACKAGE', 'PRO PACKAGE', 'ORGANIZATION PACKAGE'].map((item) => (
                                <Link key={item} href="#" underline="hover" sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500, // Medium 
                                    fontSize: '12px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#000'
                                }}>
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Box>

                    <Box>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', color: '#000', mb: 2 }}>
                            RESUME
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {['AI Job Specific Resume', 'Resume Translator', 'AI Resume Scanner'].map((item) => (
                                <Link key={item} href="#" underline="hover" sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500, 
                                    fontSize: '12px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#000'
                                }}>
                                    {item}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Contact Us & Socials */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600, // SemiBold per request
                        fontSize: '15px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#000',
                        mb: 2,
                        width: '98px',
                        height: '23px',
                        textAlign: { xs: 'left', md: 'right' }
                    }}>
                        CONTACT US
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        bgcolor: '#000',
                        borderRadius: '10000px', 
                        px: 1.5, 
                        width: '202px', 
                        height: '32px', 
                        mb: 3,
                        boxSizing: 'border-box'
                    }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#fff', ml: 1 }}>
                            Send Email to Us
                        </Typography>
                        <Box sx={{
                            bgcolor: '#fff',
                            borderRadius: '50%',
                            width: 24, // keep inner circle size same or slightly larger if needed
                            height: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <MailOutlineIcon sx={{ color: '#000', fontSize: 16 }} />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Link href="#" color="inherit">
                            <FacebookIcon sx={{ color: '#000', fontSize: 20 }} />
                        </Link>
                        <Link href="#" color="inherit">
                            <InstagramIcon sx={{ color: '#000', fontSize: 20 }} />
                        </Link>
                        <Link href="#" color="inherit">
                            <MailOutlineIcon sx={{ color: '#000', fontSize: 20 }} />
                        </Link>
                    </Box>
                </Box>

            </Box>

            {/* Copyright Strip */}
            <Box sx={{
                width: '1437px',
                maxWidth: '100%',
                px: { xs: 3, md: 5 },
                mt: 4,
                pt: 2,
                borderTop: '1px solid #E5E5E5',
                boxSizing: 'border-box'
            }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#888' }}>
                    © Copyright 2025 NEXUS. All Right Reserved by NEXUS
                </Typography>
            </Box>

        </Box>
    );
}

export default Footer;
