import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

// Fallback assets
import cvback1 from '../../../../assets/jobs/cv/cvback1.webp';
import profile1 from '../../../../assets/Home/feed/profile1.webp';

// Detail assets
import educationIcon from '../../../../assets/jobs/cv/detail/education.webp';
import projectIcon from '../../../../assets/jobs/cv/detail/project.webp';
import cvImage from '../../../../assets/jobs/cv/detail/cv.webp';

// ── Section title helper (matches FreelanceJobDetail pattern)
const SectionTitle = ({ children, darkMode }) => (
    <Typography sx={{ fontSize: '15px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins', mb: '12px' }}>
        {children}
    </Typography>
);

// ── Info grid box (Experience / Education / etc.)
const InfoBox = ({ icon, title, company, sub, date, darkMode }) => (
    <Box sx={{
        bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#F9F9F9',
        borderRadius: '10px',
        p: '12px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        border: darkMode ? '1px solid rgba(255,255,255,0.05)' : 'none'
    }}>
        <Box component="img" src={icon} sx={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'contain', flexShrink: 0 }} />
        <Box>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '12px', color: darkMode ? '#fff' : '#111', mb: '2px' }}>{title}</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 600, color: darkMode ? '#eee' : '#222' }}>{company}</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '9px', color: '#888' }}>{sub}</Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '9px', color: '#999' }}>{date}</Typography>
        </Box>
    </Box>
);

// ══════════════════════════════════════════════════════════════════
// Main Component
// ══════════════════════════════════════════════════════════════════
const CVDetail = ({ darkMode = false, cvData, onBack }) => {
    const [message, setMessage] = useState('');

    const name = cvData?.name || 'Sophia Martinez';
    const title = cvData?.title || 'Graphic Designer';
    const pic = cvData?.pic || profile1;
    const bg = cvData?.bg || cvback1;
    const experience = cvData?.experience || '5+ Years';
    const location = cvData?.location || 'Manchester, UK';

    return (
        <Box sx={{
            width: '100%',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100%',
            fontFamily: 'Poppins, sans-serif',
        }}>
            {/* ── TOP NAV BAR (matches FreelanceJobDetail exactly) */}
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                px: '20px', py: '12px',
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef',
                flexShrink: 0,
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Box onClick={onBack} sx={{ cursor: 'pointer', color: darkMode ? '#fff' : '#000', display: 'flex', alignItems: 'center' }}>
                        <ArrowBackIosNewIcon sx={{ fontSize: '18px', display: { xs: 'block', md: 'none' } }} />
                        <CloseIcon sx={{ fontSize: '18px', display: { xs: 'none', md: 'block' } }} />
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: '#888', fontFamily: 'Poppins', fontWeight: 500 }}>
                        Jobs / CV
                    </Typography>
                </Box>
                <Box sx={{ color: darkMode ? '#fff' : '#000', cursor: 'pointer' }}>
                    <MoreHorizIcon sx={{ fontSize: '20px' }} />
                </Box>
            </Box>

            {/* ── SCROLLABLE CONTENT (matches FreelanceJobDetail exactly) */}
            <Box sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', p: '20px', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>

                {/* ── CV PROFILE HEADER ── */}
                <Box sx={{
                    width: '100%',
                    height: '110px',
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px',
                    position: 'relative',
                    mb: '60px',
                    flexShrink: 0
                }}>
                    <Box component="img" src={pic} sx={{
                        position: 'absolute',
                        bottom: '-45px',
                        left: '20px',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: darkMode ? '5px solid #1e1e2e' : '5px solid #fff',
                        objectFit: 'cover',
                        boxSizing: 'border-box',
                    }} />
                </Box>

                {/* ── NAME + TITLE + CONTACT BUTTON */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '6px', flexWrap: 'wrap', gap: '10px' }}>
                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', mb: '2px' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: 700, color: darkMode ? '#fff' : '#111', fontFamily: 'Poppins' }}>
                                {name}
                            </Typography>
                            <CheckCircleIcon sx={{ fontSize: '16px', color: '#0077B5' }} />
                        </Box>
                        <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins' }}>
                            {title} · {experience} · {location}
                        </Typography>
                    </Box>
                    <Button variant="contained" sx={{
                        bgcolor: '#000', color: '#fff',
                        borderRadius: '100px', fontWeight: 700, fontSize: '12px',
                        textTransform: 'none', px: '24px', py: '5px',
                        boxShadow: 'none', fontFamily: 'Poppins', whiteSpace: 'nowrap',
                        '&:hover': { bgcolor: 'rgba(0,0,0,0.8)', boxShadow: 'none' }
                    }}>
                        CONTACT
                    </Button>
                </Box>

                {/* Description */}
                <Typography sx={{ fontSize: '12px', color: '#888', lineHeight: 1.6, mb: '12px', fontFamily: 'Poppins' }}>
                    Talented and ambitious Design Specialist with six years of experience working closely with local and international clients across various industries. Proficient in multiple design languages, Becky brings fresh and innovative design solutions for new landscapes.
                </Typography>

                {/* Save button */}
                <Box sx={{ display: 'flex', gap: '10px', mb: '20px', flexWrap: 'wrap' }}>
                    <Button variant="contained" startIcon={<BookmarkBorderIcon sx={{ fontSize: '15px !important' }} />} sx={{
                        bgcolor: darkMode ? 'rgba(255,255,255,0.1)' : '#E8E8E8',
                        color: darkMode ? '#fff' : '#000',
                        borderRadius: '10px', fontWeight: 600, fontSize: '11px',
                        textTransform: 'none', px: '14px', py: '5px',
                        boxShadow: 'none', fontFamily: 'Poppins',
                        '&:hover': { bgcolor: '#ddd', boxShadow: 'none' }
                    }}>
                        SAVE CV
                    </Button>
                </Box>

                {/* ── EXPERIENCE, EDUCATION, LICENSES & PROJECTS */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>Overview</SectionTitle>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '12px' }}>
                        <InfoBox icon={educationIcon} title="Experience" company="Al Ghaith Oilfields & Services Co." sub="Member of Design" date="Issued - Feb 2023" darkMode={darkMode} />
                        <InfoBox icon={educationIcon} title="Education" company="University of Leicester" sub="Bachelor in Information Systems" date="2020 - Present" darkMode={darkMode} />
                        <InfoBox icon={educationIcon} title="Licenses & Certifications" company="Microsoft" sub="Member of Design" date="Issued - Feb 2023" darkMode={darkMode} />
                        <InfoBox icon={projectIcon} title="Projects" company="ABC Company Website" sub="Member of Design" date="Lorem ipsum dolor sit amet." darkMode={darkMode} />
                    </Box>
                </Box>

                {/* ── CV IMAGE */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>CV Document</SectionTitle>
                    <Box component="img" src={cvImage} sx={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '8px' }} />
                </Box>

                {/* ── SEND MESSAGE */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', mb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>Send Message to Client</SectionTitle>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: { xs: 'stretch', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Box sx={{
                            flex: 1,
                            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0e0e0',
                            borderRadius: '12px', overflow: 'hidden',
                        }}>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Hi! I would like to know more about..."
                                rows={2}
                                style={{
                                    width: '100%', border: 'none', outline: 'none', resize: 'none',
                                    padding: '12px 14px', fontFamily: 'Poppins', fontSize: '13px',
                                    color: darkMode ? '#ccc' : '#333',
                                    background: 'transparent',
                                    boxSizing: 'border-box',
                                }}
                            />
                        </Box>
                        <Button variant="contained" sx={{
                            bgcolor: '#00EA8E', color: '#fff',
                            borderRadius: '10px', px: '20px', py: { xs: '10px', sm: '12px' },
                            fontWeight: 700, fontSize: '14px', textTransform: 'none',
                            fontFamily: 'Poppins', boxShadow: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                            '&:hover': { bgcolor: '#00d682', boxShadow: 'none' }
                        }}>
                            SEND MESSAGE
                        </Button>
                    </Box>

                    {/* Contact info */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '15px', flexWrap: 'wrap', gap: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <Box sx={{ width: '28px', height: '28px', bgcolor: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <MailOutlineIcon sx={{ fontSize: '14px', color: '#fff' }} />
                            </Box>
                            <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins' }}>ruweidaryman01@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                            <Typography sx={{ fontSize: '12px', color: '#888', fontFamily: 'Poppins' }}>+44 750 901 818</Typography>
                            <Box sx={{ width: '28px', height: '28px', bgcolor: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <PhoneOutlinedIcon sx={{ fontSize: '14px', color: '#fff' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* ── SKILLS */}
                <Box sx={{ borderTop: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef', pt: '20px', pb: '20px' }}>
                    <SectionTitle darkMode={darkMode}>Skills</SectionTitle>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {['Photoshop', 'Graphic Design', 'Animation', 'Prototyping', 'Wire Design', 'Web Development'].map((skill) => (
                            <Box key={skill} sx={{
                                bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#F5F5F5',
                                px: '14px', py: '6px',
                                borderRadius: '4px',
                                fontFamily: 'Poppins',
                                fontSize: '11px',
                                fontWeight: 600,
                                color: darkMode ? '#ddd' : '#444'
                            }}>
                                {skill}
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default CVDetail;
