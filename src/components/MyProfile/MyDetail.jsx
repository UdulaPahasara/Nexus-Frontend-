import React from 'react';
import { Box, Typography } from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

// Using the same profile picture
import profilePic from '../../assets/Home/propffun/profilepic.webp';

const MyDetail = ({ darkMode }) => {
    // Colors based on UserAboout and MyProfile styles
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#666';
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const listLabelColor = darkMode ? '#ccc' : '#333';

    // Components for small details
    const InfoRow = ({ label, value, icon }) => (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: '14px', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', width: '120px', flexShrink: 0 }}>
                <Typography sx={{ fontSize: '12px', color: listLabelColor, fontFamily: 'Poppins', fontWeight: 500 }}>
                    {label}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: listLabelColor, fontFamily: 'Poppins', fontWeight: 500, ml: 'auto', mr: '10px' }}>
                    :
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: '12px', color: textColor, fontFamily: 'Poppins', fontWeight: 600, wordBreak: 'break-word', mt: '1px' }}>
                    {value}
                </Typography>
            </Box>
            {icon && (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', bgcolor: darkMode ? '#333' : '#e8e8e8', borderRadius: '50%', ml: '8px', flexShrink: 0 }}>
                    {icon}
                </Box>
            )}
        </Box>
    );

    const SocialRow = ({ brandIcon, link }) => (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: '14px', gap: '15px' }}>
            <Box sx={{
                width: '32px', height: '32px', borderRadius: '50%',
                bgcolor: 'rgba(0, 232, 127, 0.3)', // light green theme from image
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#000', flexShrink: 0
            }}>
                {brandIcon}
            </Box>
            <Typography sx={{ fontSize: '11px', color: subTextColor, fontFamily: 'Poppins', flexGrow: 1, textDecoration: 'underline', cursor: 'pointer', wordBreak: 'break-word' }}>
                {link}
            </Typography>
            <Box sx={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <FileCopyOutlinedIcon sx={{ fontSize: '14px', color: '#999', cursor: 'pointer' }} />
                <ShareOutlinedIcon sx={{ fontSize: '14px', color: '#999', cursor: 'pointer' }} />
            </Box>
        </Box>
    );

    return (
        <Box sx={{
            width: '100%',
            bgcolor: boxBg,
            borderRadius: '15px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxSizing: 'border-box',
            pb: '30px'
        }}>
            {/* Header Purple Gradient Cover */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '140px',
                background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59B6 100%)',
                flexShrink: 0
            }} />

            {/* Profile Avatar overlapping */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '-45px',
                px: '20px'
            }}>
                <Box
                    component="img"
                    src={profilePic}
                    alt="Profile"
                    sx={{
                        width: '85px',
                        height: '85px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: `6px solid ${boxBg}`,
                        backgroundColor: boxBg,
                        zIndex: 1
                    }}
                />

                {/* Name & Titles */}
                <Typography sx={{ fontSize: '18px', fontWeight: 700, color: textColor, fontFamily: 'Poppins', mt: '8px' }}>
                    Nirmal Adithya
                </Typography>
                <Typography sx={{ fontSize: '11px', color: subTextColor, fontFamily: 'Poppins', textAlign: 'center', mt: '4px', px: '10px' }}>
                    Web Developer | UI/UX | Scrum Master | IT <br /> Projects Lead | DBMS | Product Designer
                </Typography>
                <Typography sx={{ fontSize: '11px', color: textColor, fontFamily: 'Poppins', fontWeight: 600, mt: '10px', textAlign: 'center' }}>
                    SLT (Sri Lanka Telecom) <span style={{ fontWeight: 400, color: subTextColor }}>- University of Leicester</span>
                </Typography>

                {/* Profile Link Row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '15px', width: '100%', justifyContent: 'center' }}>
                    <Typography sx={{ fontSize: '10.5px', color: subTextColor, fontFamily: 'Poppins', textDecoration: 'underline', cursor: 'pointer', maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        https://www.workwing.com/in/nuwini-karunarathna-a6159327a/
                    </Typography>
                    <FileCopyOutlinedIcon sx={{ fontSize: '14px', color: '#999', cursor: 'pointer' }} />
                    <ShareOutlinedIcon sx={{ fontSize: '14px', color: '#999', cursor: 'pointer' }} />
                </Box>
            </Box>

            {/* Content Details Block */}
            <Box sx={{ px: '28px', mt: '35px' }}>
                <InfoRow
                    label="Email Address"
                    value="nuwinikaru122@gmail.com"
                    icon={<MailOutlineIcon sx={{ fontSize: '12px', color: '#333' }} />}
                />
                <InfoRow
                    label="Phone Number"
                    value="+94 789 987 885"
                    icon={<PhoneOutlinedIcon sx={{ fontSize: '12px', color: '#333' }} />}
                />
                <InfoRow
                    label="Website"
                    value="www.nuwini.com"
                    icon={<LanguageIcon sx={{ fontSize: '12px', color: '#333' }} />}
                />
                <InfoRow
                    label="Address"
                    value="Al Khobar , Saudi Arabia"
                />
                <InfoRow
                    label="Date Of Birth"
                    value="1997.06.22"
                />

                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: listLabelColor, fontFamily: 'Poppins', mt: '30px', mb: '15px' }}>
                    Social
                </Typography>

                <SocialRow
                    brandIcon={<TwitterIcon sx={{ fontSize: '17px' }} />}
                    link="https://www.twitter.com/in/nuwini-karunarathna"
                />
                <SocialRow
                    brandIcon={<Typography sx={{ fontSize: '15px', fontWeight: 700 }}>fi</Typography>}
                    link="https://www.fiverr.com/in/nuwini-karunarathna"
                />
                <SocialRow
                    brandIcon={<LanguageIcon sx={{ fontSize: '17px' }} />}
                    link="https://www.dribbble.com/in/nuwini-karunarathna"
                />
                <SocialRow
                    brandIcon={<Typography sx={{ fontSize: '15px', fontWeight: 700 }}>Bē</Typography>}
                    link="https://www.behance.com/in/nuwini-karunarathna"
                />
            </Box>
        </Box>
    );
};

export default MyDetail;
