import React from 'react';
import { Popover, Box, Typography } from '@mui/material';

import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const SortPopup = ({ anchorEl, onClose, darkMode }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'sort-popover' : undefined;

    const sorts = [
        { name: 'All', icon: <ViewSidebarOutlinedIcon sx={{ width: '16px', height: '16px' }} /> },
        { name: 'New', icon: <ClassOutlinedIcon sx={{ width: '16px', height: '16px' }} /> },
        { name: 'Used', icon: <LocalMallOutlinedIcon sx={{ width: '16px', height: '16px' }} /> },
        { name: 'Rental', icon: <GroupOutlinedIcon sx={{ width: '16px', height: '16px' }} /> }
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
                    width: '99px',
                    height: '110px',
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
                {sorts.map((sortItem, idx) => (
                    <Box
                        key={sortItem.name}
                        onClick={onClose}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            px: '10px',
                            py: '5px',
                            cursor: 'pointer',
                            color: darkMode ? '#ccc' : '#666',
                            borderBottom: idx !== sorts.length - 1 ? (darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.04)') : 'none',
                            '&:hover': {
                                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#fafafa',
                                color: darkMode ? '#fff' : '#222'
                            },
                            transition: 'all 0.2s'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}>
                            {sortItem.icon}
                        </Box>
                        <Typography sx={{
                            fontSize: '11px',
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                        }}>
                            {sortItem.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Popover>
    );
};

export default SortPopup;
