import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

// Import icons from assets/chats/messageVec
import galleryIcon from '../../../assets/chats/messageVec/gallery.webp';
import documentIcon from '../../../assets/chats/messageVec/doc.webp';
import contactIcon from '../../../assets/chats/messageVec/contact.webp';
import profileCardIcon from '../../../assets/chats/messageVec/profilecard.webp';
import locationIcon from '../../../assets/chats/messageVec/location.webp';
import eventIcon from '../../../assets/chats/messageVec/event.webp';

const FilePopup = ({ onClose }) => {
    const options = [
        { icon: galleryIcon, label: 'Gallery' },
        { icon: documentIcon, label: 'Document' },
        { icon: contactIcon, label: 'Contact' },
        { icon: profileCardIcon, label: 'Profile card' },
        { icon: locationIcon, label: 'Location' },
        { icon: eventIcon, label: 'Event' },
    ];

    return (
        <Box
            sx={{
                width: '122px',
                bgcolor: '#FFFFFF',
                borderRadius: '10px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                p: '8px 9px',
                boxSizing: 'border-box',
                position: 'absolute',
                bottom: { xs: '60px', sm: '70px' },
                left: { xs: '10px', sm: '25px' },
                zIndex: 100,
                opacity: 1
            }}
        >
            {options.map((option, index) => (
                <React.Fragment key={option.label}>
                    <Box
                        sx={{
                            width: '104px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.7 },
                            mb: index < options.length - 1 ? '6px' : 0
                        }}
                    >
                        <Box
                            component="img"
                            src={option.icon}
                            sx={{
                                width: '15px',
                                height: '15px',
                                objectFit: 'contain'
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: '12px',
                                fontWeight: 500,
                                color: '#666666',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {option.label}
                        </Typography>
                    </Box>
                    {index < options.length - 1 && (
                        <Divider sx={{ my: '2px', width: '100%', borderColor: 'rgba(0,0,0,0.03)' }} />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default FilePopup;
