import React from 'react';
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Assets for Certifications
import ISOIcon from '../../../assets/CompanyProfile/Certification/ISO.webp';
import SUDTUVIcon from '../../../assets/CompanyProfile/Certification/SUDTUV.webp';

// Assets for Projects
import CodeLabIcon from '../../../assets/CompanyProfile/CodeLab.webp';
import PaypalIcon from '../../../assets/CompanyProfile/Paypal.webp';

import post1_0 from '../../../assets/Home/post/post/post1.0.webp';
import post1_2 from '../../../assets/Home/post/post/post1.2.webp';
import post1_3 from '../../../assets/Home/post/post/post1.3.webp';

import post2_0 from '../../../assets/Home/post/post/post2.0.webp';
import post2_1 from '../../../assets/Home/post/post/post2.1.webp';
import post2_2 from '../../../assets/Home/post/post/post2.2.webp';
import post2_3 from '../../../assets/Home/post/post/post2.3.webp';

const About = ({ darkMode }) => {
    return (
        <Box sx={{ flex: 1, px: { xs: '15px', sm: '35px' }, py: '24px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'flex-start' }}>
            {/* Description Text */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: { xs: '12px', sm: '13px' },
                color: darkMode ? '#ccc' : '#555',
                lineHeight: 1.6
            }}>
                Lorem ipsum dolor sit amet consectetur. Amet semper ksj parturient elit in elementum viverra Lorem ipsum dolor sit amet consectetur. Amet semper ksj parturient elit in dffd elementum viverra
            </Typography>

            {/* Certifications Row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 4 }, flexWrap: 'wrap', width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box component="img" src={ISOIcon} sx={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', color: darkMode ? '#fff' : '#000' }}>
                        ISO 9001
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box component="img" src={SUDTUVIcon} sx={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', color: darkMode ? '#fff' : '#000' }}>
                        SUD TUV
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }} />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    cursor: 'pointer',
                    px: '12px',
                    py: '6px',
                    borderRadius: '8px',
                    bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5'
                }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '13px', color: darkMode ? '#fff' : '#000' }}>
                        Certified
                    </Typography>
                    <KeyboardArrowDownIcon sx={{ fontSize: '18px', color: darkMode ? '#888' : '#666' }} />
                </Box>
            </Box>

            {/* Projects Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', alignItems: 'flex-start', ml: { xs: 0, sm: "-20px" } }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', color: darkMode ? '#fff' : '#000' }}>
                    Projects
                </Typography>

                {/* Project 1 */}
                <Box sx={{
                    width: '100%',
                    maxWidth: '100%',
                    bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#F5F5F5',
                    borderRadius: '15px',
                    p: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'flex-start' },
                        gap: { xs: 2, sm: 0 }
                    }}>
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Box sx={{
                                width: '45px',
                                height: '45px',
                                bgcolor: '#1E1E1E',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                flexShrink: 0
                            }}>
                                <Box component="img" src={CodeLabIcon} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '16px', sm: '18px' }, color: darkMode ? '#fff' : '#000', lineHeight: 1.2 }}>
                                    CodeLab
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888', fontWeight: 500 }}>
                                    Role: UI/UX Designer
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            textAlign: { xs: 'left', sm: 'right' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'flex-start', sm: 'flex-end' },
                            gap: 0.5,
                            pl: { xs: '60px', sm: 0 }
                        }}>
                            <Box sx={{
                                bgcolor: '#00EA8E',
                                color: '#000',
                                px: '12px',
                                py: '4px',
                                borderRadius: '50px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography sx={{ fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>Visit Site</Typography>
                            </Box>
                            <Typography sx={{ fontSize: '12px', color: '#AAA', fontFamily: 'Poppins' }}>Colombo, Western</Typography>
                        </Box>
                    </Box>

                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        color: darkMode ? '#AAA' : '#666',
                        lineHeight: 1.5,
                        mt: 1
                    }}>
                        Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Eget Amet Elit Massa Sodales At Consequat. Varius Mi Tristique Sapien Et Aenean Magno. Mus Enim Nunc Vestibulum Suspendisse.
                    </Typography>

                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '11px',
                        color: '#AAA',
                        mb: 1
                    }}>
                        Jan 2022-Sep 2022
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <Box component="img" src={post1_0} sx={{ width: '101px', height: '101px', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box component="img" src={post1_2} sx={{ width: '101px', height: '101px', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box component="img" src={post1_3} sx={{ width: '101px', height: '101px', objectFit: 'cover', borderRadius: '10px' }} />
                    </Box>
                </Box>

                {/* Project 2 */}
                <Box sx={{
                    width: '100%',
                    maxWidth: '100%',
                    bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#F5F5F5',
                    borderRadius: '15px',
                    p: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'flex-start' },
                        gap: { xs: 2, sm: 0 }
                    }}>
                        <Box sx={{ display: 'flex', gap: 1.5 }}>
                            <Box sx={{
                                width: '45px',
                                height: '45px',
                                bgcolor: '#fff',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '1px solid #eee',
                                flexShrink: 0
                            }}>
                                <Box component="img" src={PaypalIcon} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <Box>
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '16px', sm: '18px' }, color: darkMode ? '#fff' : '#000', lineHeight: 1.2 }}>
                                    Paypal
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888', fontWeight: 500 }}>
                                    Role: UI/UX Designer
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            textAlign: { xs: 'left', sm: 'right' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'flex-start', sm: 'flex-end' },
                            gap: 0.5,
                            pl: { xs: '60px', sm: 0 }
                        }}>
                            <Box sx={{
                                bgcolor: '#00EA8E',
                                color: '#000',
                                px: '12px',
                                py: '4px',
                                borderRadius: '50px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography sx={{ fontSize: '10px', fontWeight: 700, fontFamily: 'Poppins' }}>Visit Site</Typography>
                            </Box>
                            <Typography sx={{ fontSize: '12px', color: '#AAA', fontFamily: 'Poppins' }}>Colombo, Western</Typography>
                        </Box>
                    </Box>

                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        color: darkMode ? '#AAA' : '#666',
                        lineHeight: 1.5,
                        mt: 1
                    }}>
                        Lorem Ipsum Dolor Sit Amet Consectetur. Gravida Eget Amet Elit Massa Sodales At Consequat. Varius Mi Tristique Sapien Et Aenean Magno. Mus Enim Nunc Vestibulum Suspendisse.
                    </Typography>

                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '11px',
                        color: '#AAA',
                        mb: 1
                    }}>
                        Jan 2022-Sep 2022
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <Box component="img" src={post2_0} sx={{ width: '101px', height: '101px', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box component="img" src={post2_1} sx={{ width: '101px', height: '101px', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box component="img" src={post2_2} sx={{ width: '101px', height: '101px', objectFit: 'cover', borderRadius: '10px' }} />
                        <Box component="img" src={post2_3} sx={{ width: '101px', height: '101px', objectFit: 'cover', borderRadius: '10px' }} />
                    </Box>
                </Box>
            </Box>

            {/* Contact Box */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', alignItems: 'flex-start', ml: { xs: 0, sm: "-20px" } }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '100%',
                    bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#F5F5F5',
                    borderRadius: '15px',
                    p: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5
                }}>
                    {[
                        { label: 'Address', val: ': Al Khobar , Saudi Arabia', icon: <LocationOnIcon sx={{ fontSize: '14px' }} /> },
                        { label: 'Email', val: ': nuvinikoarular22@gmail.com', icon: <EmailIcon sx={{ fontSize: '14px' }} /> },
                        { label: 'Website', val: ': www.nuwini.com', icon: <LanguageIcon sx={{ fontSize: '14px' }} /> },
                        { label: 'Phone Number', val: ': +94 786 387 885', icon: <PhoneIcon sx={{ fontSize: '14px' }} /> },
                        { label: 'Birthday', val: ': 1997.04.23', icon: <CakeIcon sx={{ fontSize: '14px' }} /> },
                    ].map((row, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 0.5, sm: 2 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ width: '24px', display: 'flex', color: '#555' }}>
                                    {row.icon}
                                </Box>
                                <Typography sx={{ width: '100px', fontSize: '12px', fontWeight: 600, color: darkMode ? '#ccc' : '#444' }}>
                                    {row.label}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: '12px', color: '#888', ml: { xs: '40px', sm: 0 } }}>
                                {row.val}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Location Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', alignItems: 'flex-start', ml: { xs: 0, sm: "-20px" } }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', color: darkMode ? '#fff' : '#000' }}>
                    Location
                </Typography>
                <Box sx={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #efefef'
                }}>
                    <iframe
                        title="Company Location"
                        src="https://www.google.com/maps?q=6.9271,79.8612&hl=en&z=14&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
