import React from 'react';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';

const data = [
    {
        category: 'Core',
        items: [
            { title: 'Skills & Endorsements', description: 'skills & optionally enable endorsements' },
            { title: 'Languages', description: 'Language and proficiency level' },
            { title: 'Awards & Recognition', description: 'Award title, institution, year, brief description', info: true },
            { title: 'Publications / Articles /Patents', description: 'Blog or research title, platform, date, link', info: true },
            { title: 'Speaking Engagements / Events', description: 'Role (speaker, host), topic, event name, date, link' },
            { title: 'Volunteer Experience', description: 'Organization, role, cause, timeline, description' },
        ]
    },
    {
        category: 'Personal Branding',
        items: [
            { title: 'Testimonials / Recommendations', description: 'From clients, colleagues, managers', info: true },
            { title: 'Resume/CV Upload', description: 'Role (speaker, host), topic, event name, date, link' },
            { title: 'Volunteer Experience', description: 'Organization, role, cause, timeline, description' },
        ]
    },
    {
        category: 'Additional',
        items: [
            { title: 'Tools & Technologies', description: "Software, frameworks, or platforms they're skilled with", info: true },
            { title: 'Hobbies / Personal Interests', description: 'Can humanize the profile a bit' },
        ]
    }
];

const ActivitySection = ({ darkMode, onCancel }) => {
    const boxBg = darkMode ? '#1e1e2e' : '#fff';
    const textColor = darkMode ? '#fff' : '#000';
    const subTextColor = darkMode ? '#aaa' : '#888';

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            bgcolor: boxBg,
            borderRadius: '15px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            mb: '30px',
            p: '30px'
        }}>
            {/* Header / Actions if needed, user didn't mention a back button but convention implies one */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <IconButton onClick={onCancel} sx={{ color: textColor }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            {data.map((section, idx) => (
                <Box key={idx} sx={{ mb: '15px' }}>
                    <Typography sx={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: textColor,
                        fontFamily: 'Poppins',
                        mb: '15px',
                        pl: '20px'
                    }}>
                        {section.category}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {section.items.map((item, itemIdx) => (
                            <Box key={itemIdx} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                                pl: '20px',
                                borderBottom: itemIdx < section.items.length - 1 ? (darkMode ? '1px solid #333' : '1px solid #f5f5f5') : 'none',
                                pb: itemIdx < section.items.length - 1 ? '15px' : '0'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Typography sx={{ fontSize: '13px', fontWeight: 600, color: textColor, fontFamily: 'Poppins' }}>
                                        {item.title}
                                    </Typography>
                                    {item.info && <InfoOutlinedIcon sx={{ fontSize: '14px', color: textColor }} />}
                                </Box>
                                <Typography sx={{ fontSize: '11px', color: subTextColor, fontFamily: 'Poppins' }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {idx < data.length - 1 && (
                        <Divider sx={{ my: '25px', borderColor: darkMode ? '#444' : '#E8E8E8' }} />
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default ActivitySection;
