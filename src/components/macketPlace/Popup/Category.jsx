import React from 'react';
import { Popover, Box, Typography } from '@mui/material';

import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const CategoryPopup = ({ anchorEl, onClose, darkMode }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'category-popover' : undefined;

    const categories = [
        { name: 'Electronics', icon: <DesktopWindowsOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Office Technologies', icon: <LaptopMacOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Office Supplies', icon: <ChairOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Machineries', icon: <PrecisionManufacturingOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Industrial Equipments', icon: <HandymanOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Rentals', icon: <DirectionsCarOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Transports', icon: <DirectionsBusOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Home Essentials', icon: <CleaningServicesOutlinedIcon sx={{ width: '18px', height: '18px' }} /> },
        { name: 'Books', icon: <MenuBookOutlinedIcon sx={{ width: '18px', height: '18px' }} /> }
    ];

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            PaperProps={{
                sx: {
                    width: '176px',
                    height: '295px',
                    borderRadius: '10px',
                    bgcolor: darkMode ? '#1e1e2e' : '#fff',
                    boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.06)',
                    mt: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            <Box sx={{
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
                py: '4px'
            }}>
                {categories.map((cat, idx) => (
                    <Box
                        key={cat.name}
                        onClick={onClose}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            px: '14px',
                            py: '7px',
                            cursor: 'pointer',
                            color: darkMode ? '#ccc' : '#666',
                            borderBottom: idx !== categories.length - 1 ? (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.04)') : 'none',
                            '&:hover': {
                                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fafafa',
                                color: darkMode ? '#fff' : '#222'
                            },
                            transition: 'all 0.2s'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}>
                            {cat.icon}
                        </Box>
                        <Typography sx={{
                            fontSize: '12px',
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {cat.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Popover>
    );
};

export default CategoryPopup;
