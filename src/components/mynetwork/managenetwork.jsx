import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';

import newslettersIcon from '../../assets/mynetwork/vectors/newsletters.webp';
import followingIcon from '../../assets/mynetwork/vectors/followingAndfollowers.webp';
import connectionsIcon from '../../assets/mynetwork/vectors/connection.webp';
import contactsIcon from '../../assets/mynetwork/vectors/contacts.webp';
import pageIcon from '../../assets/mynetwork/vectors/page.webp';
import groupsIcon from '../../assets/mynetwork/vectors/groups.webp';
import eventsIcon from '../../assets/mynetwork/vectors/event.webp';

const networkItems = [
    { label: 'Newsletters', count: 21, icon: newslettersIcon },
    { label: 'Following & followers', count: null, icon: followingIcon },
    { label: 'Connections', count: 3654, icon: connectionsIcon },
    { label: 'Contacts', count: 561, icon: contactsIcon },
    { label: 'Page', count: 68, icon: pageIcon },
    { label: 'Groups', count: 13, icon: groupsIcon },
    { label: 'Events', count: 3, icon: eventsIcon },
];

const ManageNetwork = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '701px',
            bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
            borderRadius: '15px',
            border: darkMode ? '1px solid #333' : 'none',
            boxShadow: darkMode ? '0px 4px 15px rgba(0,0,0,0.3)' : '0px 2px 10px rgba(0,0,0,0.05)',
            p: { xs: '15px 20px', sm: '15px 26px' },
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '100%',
                maxWidth: '649px',
                minHeight: '90px'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: darkMode ? '#fff' : '#111',
                    lineHeight: 1.2
                }}>
                    Manage My Network
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    width: '100%',
                    maxWidth: '649px',
                }}>
                    {networkItems.map((item, index) => (
                        <ButtonBase
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '28px',
                                boxSizing: 'border-box',
                                borderRadius: '121px',
                                border: darkMode ? '1px solid #444' : '1px solid #E0E0E0',
                                px: '14px',
                                py: '4px',
                                gap: { xs: '15px', sm: '35px' },
                                bgcolor: 'transparent',
                                transition: 'all 0.2s',
                                '&:hover': {
                                    bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', }}>
                                <Box
                                    component="img"
                                    src={item.icon}
                                    sx={{
                                        width: '16px',
                                        height: '16px',
                                        objectFit: 'contain',
                                        filter: darkMode ? 'invert(0.8)' : 'none'
                                    }}
                                />
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    color: darkMode ? '#eee' : '#333'
                                }}>
                                    {item.label}
                                </Typography>
                            </Box>
                            {item.count !== null && (
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: darkMode ? '#eee' : '#333'
                                }}>
                                    {item.count}
                                </Typography>
                            )}
                        </ButtonBase>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ManageNetwork;
