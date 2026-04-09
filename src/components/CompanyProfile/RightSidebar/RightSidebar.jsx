import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Assets
import pixelStudio from '../../../assets/CompanyProfile/PixelStudio.webp';
import codeLab from '../../../assets/CompanyProfile/CodeLab.webp';
import waveNet from '../../../assets/CompanyProfile/WaveNet.webp';
import pixelCode from '../../../assets/CompanyProfile/PixelCode.webp';
import discord from '../../../assets/CompanyProfile/Discord.webp';
import reddit from '../../../assets/CompanyProfile/Reddit.webp';
import nvidia from '../../../assets/CompanyProfile/Nvidia.webp';
import paypal from '../../../assets/CompanyProfile/Paypal.webp';
import slack from '../../../assets/CompanyProfile/Slack.webp';

const featuredCompanies = [
    { id: 1, name: 'Pixel Studio Pvt Ltd', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: pixelStudio },
    { id: 2, name: 'CODE LAB', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: codeLab },
    { id: 3, name: 'Wave Net pvt ltd', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: waveNet },
    { id: 4, name: 'PixelCode', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: pixelCode },
    { id: 5, name: 'Studio.SS', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: discord },
    { id: 6, name: 'Apple', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: reddit },
    { id: 7, name: 'nvidia', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: nvidia },
    { id: 8, name: 'Rockstar', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: paypal },
    { id: 9, name: 'CCN News', location: 'Colombo , Sri Lanka', desc: 'Lorem ipsum dolor sit amet consectetur ipsum dolor ...', icon: slack },
];

const RightSidebar = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '372px',
            minHeight: '707px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            p: '20px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            boxSizing: 'border-box'
        }}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '18px',
                color: darkMode ? '#fff' : '#333',
                mb: 1
            }}>
                Featured companies
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {featuredCompanies.map((comp) => (
                    <Box key={comp.id} sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        width: '344px',
                        height: 'auto',
                        py: '6px'
                    }}>
                        {/* Company Icon Box */}
                        <Box sx={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#f9f9f9',
                            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #eee'
                        }}>
                            <Box
                                component="img"
                                src={comp.icon}
                                sx={{ width: '40px', height: '40px', objectFit: 'contain' }}
                            />
                        </Box>

                        {/* Company Detail Box */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 600,
                                    fontSize: '13px',
                                    color: darkMode ? '#fff' : '#000',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}>
                                    {comp.name}
                                </Typography>
                                <CheckCircleIcon sx={{ color: '#00A0DC', fontSize: '14px' }} />
                            </Box>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: '10px',
                                color: '#888',
                                mb: '2px'
                            }}>
                                {comp.location}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: '10px',
                                color: darkMode ? '#aaa' : '#757575',
                                lineHeight: 1.2,
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>
                                {comp.desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default RightSidebar;
