import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Tab, Tabs, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

// Assets
import appleCover from '../../assets/CompanyProfile/Company/apple_cover.webp';
import appleLogo from '../../assets/CompanyProfile/Company/apple_logo.webp';
import postImage1 from '../../assets/CompanyProfile/Company/post1.webp';
import postImage2 from '../../assets/CompanyProfile/Company/post2.webp';
import like_black from '../../assets/Home/post/reaction_icon/like_black.webp';
import hart_blck from '../../assets/Home/post/reaction_icon/hart_blck.webp';
import RightSidebar from './RightSidebar/RightSidebar';
import About from './About/About';

const CompanyProfile = ({ darkMode, onBack, companyName }) => {
    const [tabValue, setTabValue] = useState(1); // Default to 'Posts'

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: darkMode ? '#121212' : '#f4f4f4',
            overflowY: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: { xs: 'center', lg: 'flex-start' },
                justifyContent: 'center',
                width: '100%',
                maxWidth: '1092px',
                gap: '14px',
                px: { xs: 0, sm: 2 },
                py: { xs: 0, sm: 2 },
            }}>
                {/* Main Profile Column */}
                <Box sx={{
                    width: { xs: '100%', sm: '706px' },
                    minHeight: '1406px',
                    bgcolor: darkMode ? '#1e1e2e' : '#fff',
                    borderRadius: '15px',
                    boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    // overflow: 'hidden', // Removed to avoid clipping long About content
                }}>
                    {/* Back Button */}
                    <IconButton
                        onClick={onBack}
                        sx={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            zIndex: 10,
                            bgcolor: 'rgba(0,0,0,0.3)',
                            color: '#fff',
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    {/* Cover Image */}
                    <Box sx={{
                        width: '100%',
                        height: '160px',
                        position: 'relative'
                    }}>
                        <Box
                            component="img"
                            src={appleCover}
                            sx={{
                                width: '100%',
                                height: '160px',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    {/* Logo Layout */}
                    <Box sx={{
                        width: { xs: '80px', sm: '100px' },
                        height: { xs: '80px', sm: '100px' },
                        bgcolor: '#fff',
                        borderRadius: '50%',
                        border: '5px solid #fff',
                        position: 'absolute',
                        top: { xs: '100px', sm: '110px' },
                        left: { xs: '20px', sm: '38px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                        zIndex: 2
                    }}>
                        <Box
                            component="img"
                            src={appleLogo}
                            sx={{ width: { xs: '50px', sm: '60px' }, height: { xs: '50px', sm: '60px' }, objectFit: 'contain' }}
                        />
                    </Box>

                    {/* Info Section */}
                    <Box sx={{ mt: { xs: '45px', sm: '60px' }, px: { xs: '20px', sm: '38px' }, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'Poppins', color: darkMode ? '#fff' : '#000', fontSize: { xs: '20px', sm: '24px' } }}>
                                {companyName || 'Apple'}
                            </Typography>
                            <CheckCircleIcon sx={{ color: '#00A0DC', fontSize: '18px' }} />
                        </Box>
                        <Typography sx={{ fontSize: '12px', color: '#888', mb: 1, fontFamily: 'Poppins' }}>
                            IT Services and IT Consulting | Colombo, Western
                        </Typography>
                        <Typography sx={{ fontSize: '13px', color: darkMode ? '#ccc' : '#555', mb: 1, fontFamily: 'Poppins', lineHeight: 1.4 }}>
                            Lorem ipsum dolor sit amet consectetur. Mi blandit enim egestas rhoncus vulputate scelerisque. Integer.
                        </Typography>
                        <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#888', fontFamily: 'Poppins' }}>
                            551 followers | 11-50 employees
                        </Typography>
                    </Box>

                    {/* Follow and Message Box */}
                    <Box sx={{
                        px: { xs: '20px', sm: '38px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 2
                    }}>
                        <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, width: '100%', flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                sx={{
                                    bgcolor: '#00EA8E',
                                    color: '#000',
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    fontWeight: 700,
                                    px: { xs: 2, sm: 3 },
                                    height: '32px',
                                    fontSize: { xs: '12px', sm: '13px' },
                                    '&:hover': { bgcolor: '#00c97a' }
                                }}
                            >
                                Follow
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#ddd',
                                    color: darkMode ? '#fff' : '#000',
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    fontWeight: 700,
                                    px: { xs: 2, sm: 3 },
                                    height: '32px',
                                    fontSize: { xs: '12px', sm: '13px' },
                                    '&:hover': { borderColor: '#bbb' }
                                }}
                            >
                                Message
                            </Button>
                            <Box sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }} />
                            <IconButton size="small" sx={{ ml: 'auto' }}>
                                <MoreHorizIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    {/* Mutual Connection Section */}
                    <Box sx={{ px: { xs: '20px', sm: '38px' }, display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Avatar sx={{ width: 24, height: 24 }} src="https://i.pravatar.cc/150?u=1" />
                        <Avatar sx={{ width: 24, height: 24, ml: -1.5 }} src="https://i.pravatar.cc/150?u=2" />
                        <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins' }}>
                            Followed by <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>Malaka Anjana</span> and <span style={{ fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>9 others</span>
                        </Typography>
                    </Box>

                    {/* Tabs */}
                    <Box sx={{ px: '20px', borderBottom: '1px solid #eee' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            sx={{
                                '& .MuiTabs-indicator': { bgcolor: '#00EA8E' },
                                '& .MuiTab-root': {
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    minWidth: 'auto',
                                    px: 2,
                                    color: '#888'
                                },
                                '& .Mui-selected': { color: darkMode ? '#fff' : '#000 !important' }
                            }}
                        >
                            <Tab label="About" />
                            <Tab label="Posts" />
                            <Tab label="Jobs" />
                            <Tab label="Employees" />
                        </Tabs>
                    </Box>

                    {/* Content Section (About / Posts / etc.) */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {tabValue === 0 && <About darkMode={darkMode} />}

                        {tabValue === 1 && (
                            <Box sx={{ p: '20px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                                {[postImage1, postImage2].map((postImg, index) => (
                                    <Box key={index} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                        <Typography sx={{ fontSize: '13px', color: darkMode ? '#ccc' : '#333', fontFamily: 'Poppins', lineHeight: 1.4 }}>
                                            Lorem ipsum dolor sit amet consectetur. Amet semper porttitor erat elit in elementum viverra dolor sit amet consectetur. Amat semper porttitor elit in elementum viverra
                                        </Typography>
                                        <Typography sx={{ fontSize: '10px', color: '#888', mb: 0.5 }}>
                                            2024 February 01 | 12:45 PM
                                        </Typography>

                                        {/* Post Main Container */}
                                        <Box sx={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '12px',
                                            overflow: 'hidden'
                                        }}>
                                            <Box
                                                component="img"
                                                src={postImg}
                                                sx={{ width: '100%', objectFit: 'cover', display: 'block' }}
                                            />
                                        </Box>

                                        {/* Like and Heart reactions button layout */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1, px: '10px' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '19px', cursor: 'pointer' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '32px' }}>
                                                    <Box component="img" src={like_black} sx={{ width: '12px', height: '12px', position: 'absolute', left: '0px', zIndex: 1 }} />
                                                    <Box component="img" src={hart_blck} sx={{ width: '12px', height: '12px', position: 'absolute', left: '19px', zIndex: 0 }} />
                                                </Box>
                                                <Typography sx={{ fontSize: '11px', color: '#888', fontWeight: 500, ml: '4px', fontFamily: 'Poppins' }}>
                                                    256
                                                </Typography>
                                            </Box>
                                            <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins' }}>
                                                18 comments | 102 reposts
                                            </Typography>
                                        </Box>

                                        {index === 0 && <Box sx={{ height: '1px', bgcolor: '#eee', mt: 2 }} />}
                                    </Box>
                                ))}
                            </Box>
                        )}

                        {/* Fallback for empty tabs */}
                        {(tabValue === 2 || tabValue === 3) && (
                            <Box sx={{ p: 4, textAlign: 'center' }}>
                                <Typography sx={{ color: '#888', fontFamily: 'Poppins' }}>
                                    No content available for this tab yet.
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>

                {/* Right Sidebar */}
                <Box sx={{
                    display: { xs: 'none', lg: 'block' },
                    width: '372px',
                    flexShrink: 0
                }}>
                    <RightSidebar darkMode={darkMode} />
                </Box>
            </Box>
        </Box>
    );
};

export default CompanyProfile;
