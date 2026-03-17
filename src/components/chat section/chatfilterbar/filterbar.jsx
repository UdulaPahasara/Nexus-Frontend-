import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ChatPopup from '../../home/popups/chatpopup';

const FilterBar = ({ darkMode = false, onChatSelect }) => {
    const filters = [
        { label: 'All', active: true },
        { label: 'Unread', active: false },
        { label: 'Drafts', active: false },
        { label: 'Friends', active: false },
    ];

    return (
        <Box
            sx={{
                width: '305px',
                height: '656px',
                bgcolor: darkMode ? '#1e1e2e' : 'rgba(255, 255, 255, 1)',
                borderRadius: '15px',
                pt: '22px',
                pb: '22px',
                pl: '12px',
                pr: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                boxSizing: 'border-box',
                // Positioned naturally within its parent container
                position: 'relative',
            }}
        >
            {/* Filter Buttons Row (width: 277, height: 23, gap: 12) */}
            <Box
                sx={{
                    width: '277px',
                    height: '23px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxSizing: 'border-box',
                }}
            >
                {filters.map((filter) => (
                    <Button
                        key={filter.label}
                        disableRipple
                        sx={{
                            width: filter.label === 'All' ? '40px' : 'auto',
                            height: '23px',
                            minWidth: filter.label === 'All' ? '40px' : '0',
                            borderRadius: '100px',
                            p: '3px 10px',
                            textTransform: 'none',
                            fontFamily: 'Poppins',
                            fontSize: '11px',
                            fontWeight: 500,
                            bgcolor: filter.active ? 'rgba(0, 0, 0, 1)' : 'transparent',
                            color: filter.active ? '#FFFFFF' : '#000000',
                            border: filter.active ? 'none' : '1px solid #E0E0E0',
                            '&:hover': {
                                bgcolor: filter.active ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0,0,0,0.05)',
                                border: filter.active ? 'none' : '1px solid #BDBDBD',
                            }
                        }}
                    >
                        {filter.label}
                    </Button>
                ))}
            </Box>

            {/* Chat Content */}
            <Box sx={{
                flex: 1,
                mt: '10px',
                overflow: 'hidden',
                '& > div': { // Target the ChatPopup container
                    width: '100% !important',
                    boxShadow: 'none !important',
                    border: 'none !important',
                    borderRadius: '0 !important',
                    height: '100%',
                    bgcolor: 'transparent !important'
                }
            }}>
                <ChatPopup darkMode={darkMode} onChatSelect={onChatSelect} />
            </Box>
        </Box>
    );
};

export default FilterBar;
