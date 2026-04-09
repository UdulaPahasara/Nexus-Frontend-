import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const QAItem = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            onClick={() => setIsOpen(!isOpen)}
            sx={{
                width: '100%',
                bgcolor: '#F5F5F5',
                borderRadius: '8px',
                px: '24px',
                py: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxSizing: 'border-box',
                transition: 'background-color 0.2s',
                '&:hover': {
                    bgcolor: '#EAEAEA'
                }
            }}
        >
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: { xs: '14px', sm: '16px', md: '20px' },
                lineHeight: { xs: '1.4', md: '20px' },
                color: '#000'
            }}>
                {question}
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
            }}>
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L9 9L16 2" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Box>
        </Box>
    );
};

const QAndA = () => {
    const questions = [
        "Lorem ipsum dolor sit amet consectetur Tellus malesuada ?",
        "Lorem ipsum dolor sit amet consectetur Tellus malesuada ?",
        "Lorem ipsum dolor sit amet consectetur Tellus malesuada ?",
        "Lorem ipsum dolor sit amet consectetur Tellus malesuada ?",
        "Lorem ipsum dolor sit amet consectetur Tellus malesuada ?"
    ];

    return (
        <Box sx={{
            width: '100%',
            py: { xs: 4, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#ffffff'
        }}>
            {/* Header */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '20px', md: '24px' },
                color: '#000',
                mb: '40px',
                textAlign: 'center',
                letterSpacing: '0.5px'
            }}>
                FREQUENTLY ASKED QUESTIONS
            </Typography>

            {/* Q&A List Container */}
            <Box sx={{
                width: '100%',
                maxWidth: '1225px',
                mx: 'auto',
                px: '20px',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                pb: '3px'
            }}>
                {questions.map((q, index) => (
                    <QAItem key={index} question={q} />
                ))}
            </Box>
        </Box>
    );
};

export default QAndA;
