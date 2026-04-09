import React from 'react';
import { Box, Typography, Button, List, ListItem, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

// Import profile images from assets
import profile1 from '../../../assets/Home/feed/profile1.webp';
import profile2 from '../../../assets/Home/feed/profile2.webp';
import profile3 from '../../../assets/Home/feed/profile3.webp';
import profile4 from '../../../assets/Home/feed/profile4.webp';
import profile5 from '../../../assets/Home/feed/profile5.webp';
import profile6 from '../../../assets/Home/feed/profile6.webp';
import profile7 from '../../../assets/Home/feed/profile7.webp';

const feedData = [
    { id: 1, name: 'Oliver Smith', position: 'HR Manager', avatar: profile1, buttonType: 'Follow' },
    { id: 2, name: 'Nuwini Karunarathna', position: 'UI/UX Designer', avatar: profile2, buttonType: 'Follow' },
    { id: 3, name: 'Amal De Silva', position: 'Software Engineer', avatar: profile3, buttonType: 'Follow' },
    { id: 4, name: 'Oliver Smith', position: 'HR Manager', avatar: profile4, buttonType: 'Follow' },
    { id: 5, name: 'Nuwini Karunarathna', position: 'UI/UX Designer', avatar: profile5, buttonType: 'Follow' },
    { id: 6, name: 'Amal De Silva', position: 'Software Engineer', avatar: profile6, buttonType: 'Follow' },
    { id: 7, name: 'Oliver Smith', position: 'HR Manager', avatar: profile7, buttonType: 'Message' },
];

const Feed = ({ darkMode }) => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '372px',
                bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
                borderRadius: '15px',
                p: '16px',
                boxShadow: darkMode ? '0px 4px 10px rgba(0, 0, 0, 0.4)' : '0px 4px 10px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
            }}
        >
            {/* Header section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: '12px',
                    width: '100%',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AddIcon sx={{ width: '24px', height: '24px', color: darkMode ? '#fff' : '#000' }} />
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '18px',
                            color: darkMode ? '#fff' : '#000',
                        }}
                    >
                        Add to your feed
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: darkMode ? '#aaa' : 'rgba(117, 117, 117, 1)',
                        cursor: 'pointer',
                        textAlign: 'right',
                    }}
                >
                    View All
                </Typography>
            </Box>

            {/* Profile list section */}
            <Box sx={{ flexGrow: 1 }}>
                <List sx={{ p: 0 }}>
                    {feedData.map((item) => (
                        <ListItem
                            key={item.id}
                            sx={{
                                p: 0,
                                mb: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{ display: 'flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}
                                onClick={() => navigate('/userprofile')}
                            >
                                <Avatar
                                    src={item.avatar}
                                    sx={{ width: '35px', height: '35px', borderRadius: '50%' }}
                                />
                                <Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            fontSize: '13px',
                                            color: darkMode ? '#fff' : '#000',
                                            lineHeight: '1.2',
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 400,
                                            fontSize: '11px',
                                            color: darkMode ? '#aaa' : '#757575',
                                            lineHeight: '1.2',
                                        }}
                                    >
                                        {item.position}
                                    </Typography>
                                </Box>
                            </Box>

                            <Button
                                variant="contained"
                                sx={{
                                    width: '73px',
                                    height: '24px',
                                    bgcolor: item.buttonType === 'Follow' ? 'rgba(0, 231, 131, 1)' : (darkMode ? 'rgba(255,255,255,0.1)' : '#F0F2F5'),
                                    color: item.buttonType === 'Follow' ? '#FFFFFF' : (darkMode ? '#fff' : '#000000'),
                                    borderRadius: '5px',
                                    textTransform: 'none',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    fontFamily: 'Poppins',
                                    p: 0,
                                    boxShadow: 'none',
                                    '&:hover': {
                                        bgcolor: item.buttonType === 'Follow' ? 'rgba(0, 200, 110, 1)' : (darkMode ? 'rgba(255,255,255,0.2)' : '#E4E6E9'),
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                {item.buttonType}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Feed;
