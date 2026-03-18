import React from 'react';
import { Box } from '@mui/material';
import reactionAsset from '../../../assets/chats/chatArea/reaction.webp';

const ReactionPopup = ({ position, onClickAway }) => {

    return (
        <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
                width: '180px',
                height: '33px',
                bgcolor: '#FFFFFF',
                borderRadius: '38px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: position?.top || 0,
                left: position?.left || 0,
                zIndex: 1000,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.02)'
                }
            }}
        >
            <Box
                component="img"
                src={reactionAsset}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
            />
        </Box>
    );
};

export default ReactionPopup;
