import React from 'react';
import { Box, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const ServiceTypePop = ({ darkMode = false, onClose, onSelect, selectedType }) => {
    const options = [
        { id: 'all', label: 'All', icon: <GridViewIcon sx={{ fontSize: '18px' }} /> },
        { id: 'repair', label: 'Repair', icon: <BuildIcon sx={{ fontSize: '18px' }} /> },
        { id: 'installation', label: 'Installation', icon: <HandymanIcon sx={{ fontSize: '18px' }} /> },
        { id: 'maintenance', label: 'Maintenance', icon: <SettingsIcon sx={{ fontSize: '18px' }} /> },
        { id: 'inspection', label: 'Inspection', icon: <SearchIcon sx={{ fontSize: '18px' }} /> },
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
                            bgcolor: selectedType === opt.id ? (darkMode ? 'rgba(255,255,255,0.05)' : '#f5f7f5') : 'transparent',
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

export default ServiceTypePop;
