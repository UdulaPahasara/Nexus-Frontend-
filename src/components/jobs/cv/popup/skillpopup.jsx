import React, { useState } from 'react';
import { Box, Typography, Checkbox, InputBase } from '@mui/material';

// Import assets from freelance
import figmaIcon from '../../../../assets/jobs/freelance/figma.webp';
import vsIcon from '../../../../assets/jobs/freelance/xd.webp'; // Used for Visual Studio based on folder contents
import psIcon from '../../../../assets/jobs/freelance/adob.webp';

const SKILLS_DATA = [
    { id: '1', name: 'Figma', icon: figmaIcon },
    { id: '2', name: 'Visual Studio', icon: vsIcon },
    { id: '3', name: 'Photoshop', icon: psIcon }
];

const SkillPopup = ({ darkMode, onClose }) => {
    const [selected, setSelected] = useState([]);

    const handleToggle = (name) => {
        setSelected(prev =>
            prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
        );
    };

    return (
        <Box sx={{
            width: '200px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '16px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
            p: '15px',
            border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0e0e0',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
            {/* Search Input Area */}
            <Box sx={{
                width: '100%',
                height: '32px',
                bgcolor: darkMode ? 'rgba(0,231,131,0.1)' : '#F0F9F4',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                px: '10px',
                boxSizing: 'border-box'
            }}>
                <InputBase
                    placeholder="Search Skills"
                    sx={{
                        fontFamily: 'Poppins',
                        fontSize: '13px',
                        color: darkMode ? '#fff' : '#444',
                        width: '100%',
                        fontWeight: 400,
                        '& input::placeholder': { color: '#888', opacity: 1 }
                    }}
                />
            </Box>

            {/* Skills List */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {SKILLS_DATA.map((skill) => (
                    <Box key={skill.id} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer'
                    }} onClick={() => handleToggle(skill.name)}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Box
                                component="img"
                                src={skill.icon}
                                sx={{
                                    width: '22px',
                                    height: '22px',
                                    objectFit: 'contain',
                                    borderRadius: '50%'
                                }}
                            />
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '13px',
                                color: darkMode ? '#fff' : '#222',
                                fontWeight: 500
                            }}>
                                {skill.name}
                            </Typography>
                        </Box>

                        <Checkbox
                            checked={selected.includes(skill.name)}
                            onChange={() => handleToggle(skill.name)}
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                                p: 0,
                                '& .MuiSvgIcon-root': { fontSize: '20px' },
                                color: darkMode ? '#555' : '#999',
                                '&.Mui-checked': {
                                    color: 'rgba(0, 231, 131, 1)'
                                }
                            }}
                        />
                    </Box>
                ))}
            </Box>

            {/* Filter Button */}
            <Box onClick={onClose} sx={{
                width: '100%',
                py: '8px',
                bgcolor: '#A5D6A7', // Light green matching mockup
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                '&:hover': { bgcolor: '#81C784' }
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    color: '#111',
                    fontWeight: 600
                }}>
                    Filter
                </Typography>
            </Box>
        </Box>
    );
};

export default SkillPopup;
