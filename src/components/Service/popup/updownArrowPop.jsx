import React from 'react';
import { Box, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const UpDownArrowPop = ({ darkMode = false, onClose, onSelect, selectedSort }) => {
    const options = [
        { id: 'availability', label: 'Availability', icon: <AccessTimeIcon sx={{ fontSize: '18px' }} /> },
        { id: 'ratings', label: 'Ratings', icon: <StarBorderIcon sx={{ fontSize: '18px' }} /> },
        { id: 'relevance', label: 'Relevance', icon: <TrackChangesIcon sx={{ fontSize: '18px' }} /> },
        { id: 'distance', label: 'Distance', icon: <LocationOnIcon sx={{ fontSize: '18px' }} /> },
    ];

    return (
        <Box sx={{
            width: '160px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '12px',
            boxShadow: '0px 8px 24px rgba(0,0,0,0.12)',
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #efefef',
            overflow: 'hidden',
            p: '6px'
        }}>
            {options.map((opt, i) => (
                <React.Fragment key={opt.id}>
                    <Box
                        onClick={() => { onSelect(opt.id); onClose(); }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            px: '12px',
                            py: '10px',
                            cursor: 'pointer',
                            borderRadius: '8px',
                            transition: 'all 0.2s',
                            bgcolor: selectedSort === opt.id ? (darkMode ? 'rgba(255,255,255,0.05)' : '#f5f7f5') : 'transparent',
                            '&:hover': {
                                bgcolor: darkMode ? 'rgba(255,255,255,0.08)' : '#f9f9f9'
                            },
                        }}
                    >
                        <Box sx={{ color: darkMode ? '#999' : '#666', display: 'flex' }}>
                            {opt.icon}
                        </Box>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: darkMode ? '#eee' : '#444'
                        }}>
                            {opt.label}
                        </Typography>
                    </Box>
                    {i < options.length - 1 && (
                        <Box sx={{ height: '1px', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f2f2f2', mx: '12px' }} />
                    )}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default UpDownArrowPop;
