import React from 'react';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Common MUI Icons replicating the reference image layout
import EmailIcon from '@mui/icons-material/EmailOutlined';
import CallIcon from '@mui/icons-material/CallOutlined';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopyOutlined';

// Generic assets reused from layout
import coverImg from '../../assets/UseProfile/attachment.webp';
import profilePic from '../../assets/Home/feed/profile3.webp';

// Social Media Icons
import twitterIcon from '../../assets/UseProfile/Social/Twiter.webp';
import fiverrIcon from '../../assets/UseProfile/Social/Fiver.webp';
import dribbbleIcon from '../../assets/UseProfile/Social/icon-park-outline_dribble.webp';
import behanceIcon from '../../assets/UseProfile/Social/Behance.webp';

const ContactRow = ({ label, value, Icon, darkMode }) => (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: '12px', gap: '4px' }}>
        <Typography sx={{
            width: '95px',
            minWidth: '95px',
            fontSize: '10px',
            color: darkMode ? '#aaa' : '#555',
            fontFamily: 'Poppins',
            lineHeight: 1.5,
            pt: '1px',
        }}>
            {label}
        </Typography>
        <Typography sx={{ fontSize: '10px', color: darkMode ? '#aaa' : '#555', fontFamily: 'Poppins', pt: '1px', flexShrink: 0 }}>:</Typography>
        <Typography sx={{
            flexGrow: 1,
            fontSize: '10px',
            fontWeight: 600,
            color: darkMode ? '#fff' : '#000',
            fontFamily: 'Poppins',
            ml: '4px',
            overflowWrap: 'anywhere',
            lineHeight: 1.5,
        }}>
            {value}
        </Typography>
        {Icon && (
            <Box sx={{
                bgcolor: darkMode ? '#333' : '#e0e0e0',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                minWidth: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: '1px',
                flexShrink: 0,
            }}>
                <Icon sx={{ fontSize: '10px', color: darkMode ? '#fff' : '#000' }} />
            </Box>
        )}
    </Box>
);

const SOCIAL_ICONS = {
    Twitter: twitterIcon,
    Fiverr: fiverrIcon,
    Dribbble: dribbbleIcon,
    Behance: behanceIcon,
};

const SocialRow = ({ name, url, darkMode }) => {
    const icon = SOCIAL_ICONS[name];

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '12px', gap: '10px' }}>
            <Box sx={{
                width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
            }}>
                <img src={icon} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography sx={{
                flexGrow: 1, fontSize: '9px', color: darkMode ? '#888' : '#777', fontFamily: 'Poppins',
                textDecoration: 'underline', cursor: 'pointer'
            }}>
                {url}
            </Typography>
            <Box sx={{ display: 'flex', gap: '4px' }}>
                <ContentCopyIcon sx={{ fontSize: '12px', color: darkMode ? '#666' : '#999', cursor: 'pointer' }} />
                <Typography sx={{ fontSize: '12px', color: darkMode ? '#666' : '#999', cursor: 'pointer' }}>{'<'}</Typography>
            </Box>
        </Box>
    );
};

const UserDeatil = ({ darkMode, onClose }) => {
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';

    return (
        <Box sx={{
            width: { xs: '100vw', md: '372px' },
            height: { xs: '100vh', md: '657px' },
            bgcolor: boxBg,
            borderRadius: { xs: 0, md: '15px' },
            boxSizing: 'border-box',
            border: { xs: 'none', md: darkMode ? '1px solid #333' : '1px solid #eee' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: 'auto',
            overflowX: 'hidden',
            position: 'relative', // for close button
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            pb: { xs: '40px', md: 0 }
        }}>

            {/* Close button for mobile */}
            {onClose && (
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        zIndex: 10,
                        color: textColor,
                        display: { xs: 'flex', md: 'none' },
                        bgcolor: 'rgba(0,0,0,0.1)'
                    }}
                >
                    <CloseIcon />
                </IconButton>
            )}

            {/* ── HEADER COVER & AVATAR ── */}
            <Box sx={{ position: 'relative', width: '100%', mb: '60px' }}>
                <Box sx={{ width: '100%', height: '114px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden' }}>
                    <img src={coverImg} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>

                <Box sx={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: `4px solid ${boxBg}`,
                    bgcolor: '#fff',
                    overflow: 'hidden'
                }}>
                    <img src={profilePic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>

            {/* ── HEADER TITLES ── */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                px: '20px',
                textAlign: 'center',
                maxWidth: '500px', // cap title width on tablet
                width: '100%'
            }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: textColor, fontFamily: 'Poppins' }}>
                    Nirmal Adithya
                </Typography>
                <Typography sx={{ fontSize: '10px', color: darkMode ? '#aaa' : '#777', mt: '4px', fontFamily: 'Poppins', lineHeight: 1.3 }}>
                    Web Developer | UI/UX | Scrum Master | IT <br /> Projects Lead | DBMS | Product Designer
                </Typography>
                <Typography sx={{ fontSize: '10px', fontWeight: 600, color: textColor, mt: '6px', fontFamily: 'Poppins' }}>
                    SLT (Sri Lanka Telecom) - University of Leicester
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mt: '12px' }}>
                    <Typography sx={{ fontSize: '9px', color: darkMode ? '#888' : '#777', textDecoration: 'underline', fontFamily: 'Poppins', cursor: 'pointer' }}>
                        https://www.linkedin.com/in/nirmal-adithya
                    </Typography>
                    <ContentCopyIcon sx={{ fontSize: '12px', color: darkMode ? '#666' : '#999', cursor: 'pointer', ml: '4px' }} />
                    <Typography sx={{ fontSize: '12px', color: darkMode ? '#666' : '#999', cursor: 'pointer' }}>{"<"}</Typography>
                </Box>
            </Box>

            <Divider sx={{ width: '85%', my: '20px', borderColor: darkMode ? '#333' : '#eee' }} />

            {/* ── CONTACT DETAILS BLOCK ── */}
            <Box sx={{
                width: { xs: 'calc(100% - 24px)', md: '325.8px' },
                maxWidth: '450px', // cap width on tablet
                bgcolor: darkMode ? '#222' : '#fcfcfc',
                border: darkMode ? '1px solid #333' : '1px solid #f0f0f0',
                borderRadius: '9px',
                p: { xs: '12px', md: '15px' },
                boxSizing: 'border-box'
            }}>
                <ContactRow label="Email Address" value="nuwinikaru122@gmail.com" Icon={EmailIcon} darkMode={darkMode} />
                <ContactRow label="Phone Number" value="+94 789 987 885" Icon={CallIcon} darkMode={darkMode} />
                <ContactRow label="Website" value="www.nuwini.com" Icon={LanguageIcon} darkMode={darkMode} />
                <ContactRow label="Address" value="Al Khobar , Saudi Arabia" darkMode={darkMode} />
                <ContactRow label="Date Of Birth" value="1997.06.22" darkMode={darkMode} />
            </Box>

            {/* ── SOCIAL SECTION ── */}
            <Box sx={{
                width: '100%',
                maxWidth: '450px', // cap width on tablet
                px: '24px',
                mt: '20px',
                boxSizing: 'border-box'
            }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 500, color: textColor, fontFamily: 'Poppins', mb: '15px' }}>
                    Social
                </Typography>
                <SocialRow name="Twitter" url="https://www.twitter.com/in/nuwini-karunarathna" darkMode={darkMode} />
                <SocialRow name="Fiverr" url="https://www.fiverr.com/in/nuwini-karunarathna" darkMode={darkMode} />
                <SocialRow name="Dribbble" url="https://www.dribbble.com/in/nuwini-karunarathna" darkMode={darkMode} />
                <SocialRow name="Behance" url="https://www.behance.com/in/nuwini-karunarathna" darkMode={darkMode} />
            </Box>

        </Box>
    );
};

export default UserDeatil;
