import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

// Import icons from assets/chats/optionVectors
import viewProfileIcon from '../../../assets/chats/optionVectors/viewProfile.webp';
import moveChatIcon from '../../../assets/chats/optionVectors/moveChat.webp';
import addToFriendIcon from '../../../assets/chats/optionVectors/addToFriend.webp';
import createGroupChatIcon from '../../../assets/chats/optionVectors/createGroupChat.webp';
import muteChatIcon from '../../../assets/chats/optionVectors/muteChat.webp';
import blockChatIcon from '../../../assets/chats/optionVectors/blockChat.webp';
import deleteConversationIcon from '../../../assets/chats/optionVectors/deleteConversation.webp';

const OptionPopup = ({ onClose }) => {
    const options = [
        { icon: viewProfileIcon, label: 'View Profile' },
        { icon: moveChatIcon, label: 'Move chat' },
        { icon: addToFriendIcon, label: 'Add to friends' },
        { icon: createGroupChatIcon, label: 'Create Group Chat' },
        { icon: muteChatIcon, label: 'Mute Chat' },
        { icon: blockChatIcon, label: 'Report/Block' },
        { icon: deleteConversationIcon, label: 'Delete Conversation', color: '#B91C1C' },
    ];

    return (
        <Box
            sx={{
                width: '176px',
                height: '233px',
                bgcolor: 'rgba(255, 255, 255, 1)',
                borderRadius: '10px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                p: '12px 7px',
                boxSizing: 'border-box',
                position: 'absolute',
                top: '55px',
                right: '65px', // Adjusted to appear below the three-dot icon
                zIndex: 100,
                opacity: 1
            }}
        >
            {options.map((option, index) => (
                <React.Fragment key={option.label}>
                    <Box
                        sx={{
                            width: '156px',
                            height: '23px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            cursor: 'pointer',
                            '&:hover': { opacity: 0.7 },
                            opacity: 1
                        }}
                    >
                        <Box
                            component="img"
                            src={option.icon}
                            sx={{
                                width: '18px',
                                height: '18px',
                                objectFit: 'contain'
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: option.color || '#666666',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {option.label}
                        </Typography>
                    </Box>
                    {index < options.length - 1 && (
                        <Divider sx={{ my: '3px', width: '100%', borderColor: 'rgba(0,0,0,0.03)' }} />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default OptionPopup;
