import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Reusing assets from follow.jsx
import mp1 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp2 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp2.webp';
import mp3 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp3.webp';
import mp5 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';
import mp6 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp6.webp';
import mp8 from '../../../../assets/Home/sevice/chats/messegeprofilepic/mp8.webp';

import back1 from '../../../../assets/mynetwork/profileback/back1.webp';
import back2 from '../../../../assets/mynetwork/profileback/back2.webp';
import back3 from '../../../../assets/mynetwork/profileback/back3.webp';
import back5 from '../../../../assets/mynetwork/profileback/back5.webp';
import back6 from '../../../../assets/mynetwork/profileback/back6.webp';
import back10 from '../../../../assets/mynetwork/profileback/back10.webp';

const RECRUITERS = [
    { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp1, bgPic: back1 },
    { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp2, bgPic: back2 },
    { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp3, bgPic: back3 },
    { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp5, bgPic: back5 },
    { name: "Anuradha Perera", role: "UI/UX Designer | Graphic Designer", profilePic: mp6, bgPic: back6 },
    { name: "Dewmi De Silva", role: "Business Developer | Marketing", profilePic: mp8, bgPic: back10 }
];

const RecruiterCard = ({ user, darkMode }) => (
    <Box sx={{
        width: '115px',
        height: '128.8px',
        flexShrink: 0,
        borderRadius: '10px',
        position: 'relative',
        bgcolor: darkMode ? '#1e1e2e' : '#fff',
        border: darkMode ? '1px solid #333' : '1px solid #E0E0E0',
        boxSizing: 'border-box',
        overflow: 'hidden',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.02)'
    }}>
        {/* Close Button overlay */}
        <Box sx={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            width: '14px',
            height: '14px',
            bgcolor: 'rgba(255,255,255,0.7)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            cursor: 'pointer'
        }}>
            <CloseIcon sx={{ color: '#000', fontSize: '10px' }} />
        </Box>

        {/* Background Pic */}
        <Box
            component="img"
            src={user.bgPic}
            sx={{
                width: '100%',
                height: '45px',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0
            }}
        />

        {/* Profile Pic */}
        <Box
            component="img"
            src={user.profilePic}
            sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid #fff',
                objectFit: 'cover',
                position: 'absolute',
                top: '25px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1
            }}
        />

        {/* Details */}
        <Box sx={{
            position: 'absolute',
            top: '68px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: '5px',
            boxSizing: 'border-box',
            zIndex: 1
        }}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '9px',
                color: darkMode ? '#fff' : '#000',
                textAlign: 'center',
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}>
                {user.name}
            </Typography>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '7px',
                color: '#aaa',
                textAlign: 'center',
                lineHeight: 1.1,
                mt: '1px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                height: '16px'
            }}>
                {user.role}
            </Typography>
        </Box>

        {/* Follow Button */}
        <ButtonBase sx={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '95px',
            height: '24px',
            bgcolor: '#00EA8E',
            borderRadius: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'none'
        }}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '10px',
                color: '#000'
            }}>
                + Follow
            </Typography>
        </ButtonBase>
    </Box>
);

const TopRecruits = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '372px',
            height: '338px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '25px',
            p: '20px',
            boxSizing: 'border-box',
            boxShadow: '0px 4px 30px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: darkMode ? '#fff' : '#000'
                }}>
                    Top recruiters
                </Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '12px',
                    color: '#888',
                    cursor: 'pointer'
                }}>
                    View All
                </Typography>
            </Box>

            <Box sx={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                justifyItems: 'center',
                overflowY: 'auto',
                '&::-webkit-scrollbar': { display: 'none' }
            }}>
                {RECRUITERS.map((user, idx) => (
                    <RecruiterCard key={idx} user={user} darkMode={darkMode} />
                ))}
            </Box>
        </Box>
    );
};

export default TopRecruits;
