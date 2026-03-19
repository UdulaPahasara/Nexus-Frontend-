import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

import inv1 from '../../assets/mynetwork/invitation/invitation1.webp';
import inv2 from '../../assets/mynetwork/invitation/invitation2.webp';

const invitationsData = [
    {
        id: 1,
        name: 'Kamal Gunathilaka',
        job: 'Software Engineer | Employer Engagement | Technical Recruiter | Branding Man ...',
        info: '6 mutual connections • 2 weeks ago',
        image: inv1
    },
    {
        id: 2,
        name: 'Anuri Jayathilaka',
        job: 'Software Engineer | Employer Engagement | Technical Recruiter | Branding Man ...',
        info: '6 mutual connections • 2 weeks ago',
        image: inv2
    }
];

const Invitation = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '701px',
            bgcolor: darkMode ? '#1e1e2e' : '#FFFFFF',
            borderRadius: '15px',
            p: '20px',
            boxSizing: 'border-box',
            mb: '-10px'

        }}>
            {/* Header */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: '15px',
                mb: '20px'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#A9A9A9' }}>Chats</Typography>
                    <Typography sx={{ color: '#E0E0E0' }}>|</Typography>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, color: darkMode ? '#fff' : '#000' }}>All Network</Typography>
                </Box>
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: '20px',
                        borderColor: '#00E783',
                        color: '#00E783',
                        fontFamily: 'Poppins',
                        textTransform: 'none',
                        fontSize: '12px',
                        px: '15px',
                        py: '2px',
                        whiteSpace: 'nowrap',
                        '&:hover': { borderColor: '#00b368', bgcolor: 'rgba(0,231,131,0.05)' }
                    }}
                >
                    View Past Invitations
                </Button>
            </Box>

            <Box sx={{ display: 'inline-block', pb: '2px', mb: '15px' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: darkMode ? '#fff' : '#000' }}>
                    Invitations
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {invitationsData.map((invitation, index) => (
                    <Box key={invitation.id}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'flex-start' },
                            justifyContent: 'space-between',
                            gap: '15px'
                        }}>
                            <Box sx={{ display: 'flex', gap: '15px', flex: 1, minWidth: 0, width: '100%' }}>
                                <Box
                                    component="img"
                                    src={invitation.image}
                                    sx={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '5px',
                                        objectFit: 'cover',
                                        flexShrink: 0
                                    }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', color: darkMode ? '#fff' : '#000' }}>
                                        {invitation.name}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#A9A9A9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {invitation.job}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#A9A9A9', mt: '3px' }}>
                                        {invitation.info}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Action buttons */}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flexShrink: 0,
                                pt: '5px',
                                ml: { xs: '65px', sm: 0 } // Align with text on mobile
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                                    <Box sx={{
                                        width: '32px', height: '32px',
                                        border: '1px solid #FF5C5C',
                                        borderRadius: '6px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <CloseIcon sx={{ color: '#FF5C5C', fontSize: '18px' }} />
                                    </Box>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#FF5C5C', mt: '2px' }}>Reject</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                                    <Box sx={{
                                        width: '32px', height: '32px',
                                        border: '1px solid #00E783',
                                        borderRadius: '6px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <CheckIcon sx={{ color: '#00E783', fontSize: '18px' }} />
                                    </Box>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '10px', color: '#00E783', mt: '2px' }}>Accept</Typography>
                                </Box>
                            </Box>
                        </Box>
                        {index < invitationsData.length - 1 && (
                            <Box sx={{ width: '100%', height: '1px', bgcolor: '#E0E0E0', my: '15px', opacity: 0.5 }} />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Invitation;
