import React, { useRef, useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// Custom PDF Icon based exactly on the Figma screenshot
const CustomPdfIcon = () => (
    <Box sx={{
        width: '32px', height: '42px', bgcolor: '#FF4D4D', borderRadius: '4px',
        position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
        borderTopRightRadius: '10px', overflow: 'visible', mt: '5px'
    }}>
        {/* Folded corner illusion */}
        <Box sx={{
            position: 'absolute', top: 0, right: 0,
            width: 0, height: 0,
            borderBottom: '10px solid #ffb3b3', borderRight: '10px solid #fff',
            borderBottomLeftRadius: '4px'
        }} />
        <Box sx={{
            bgcolor: '#fff', color: '#FF4D4D', fontSize: '9px', fontWeight: 900, fontFamily: 'Arial',
            px: '3px', py: '1px', borderRadius: '3px', position: 'relative', left: '-4px', bottom: '6px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
            PDF
        </Box>
    </Box>
);

const ChooseLetterPopup = ({ isOpen, onClose, onSave }) => {
    const fileInputRef = useRef(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setUploadedFiles(prev => [...prev, ...files]);
        }
        e.target.value = null; // reset input
    };

    const handleRemoveFile = (indexToRemove) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== indexToRemove));
    };

    if (!isOpen) return null;

    return (
        <Box sx={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            bgcolor: 'rgba(0,0,0,0.4)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Box sx={{
                width: { xs: '92%', sm: '494px' },
                height: { xs: 'auto', sm: '363px' },
                bgcolor: '#fff',
                borderRadius: '25px',
                pt: { xs: '20px', sm: '24px' },
                pr: { xs: '15px', sm: '21px' },
                pb: { xs: '20px', sm: '24px' },
                pl: { xs: '15px', sm: '21px' },
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Poppins',
                position: 'relative',
                m: 'auto'
            }}>
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: '8px', sm: '10px' } }}>
                    <Typography sx={{ fontSize: { xs: '16px', sm: '18px' }, fontWeight: 700, color: '#000' }}>
                        Choose Cover letter
                    </Typography>
                    <IconButton onClick={onClose} sx={{ p: 0 }}>
                        <CloseIcon sx={{ color: '#000', fontSize: { xs: '16px', sm: '18px' } }} />
                    </IconButton>
                </Box>

                {/* Upload Area */}
                <Box sx={{
                    border: '1px dashed #aaa',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: { xs: '12px', sm: '15px' },
                    gap: '8px',
                    mb: { xs: '10px', sm: '12px' }
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '-2px' }}>
                        <ArrowUpwardIcon sx={{ fontSize: { xs: '22px', sm: '24px' }, color: '#555', mb: '-4px' }} />
                        <Box sx={{ width: '22px', borderBottom: '2px solid #555' }} />
                    </Box>
                    <Typography sx={{ fontSize: { xs: '11px', sm: '12px' }, color: '#111', fontWeight: 500, fontFamily: 'Poppins' }}>
                        Upload Your File From Your Device.
                    </Typography>
                    <input type="file" hidden ref={fileInputRef} accept=".pdf,.doc,.docx" onChange={handleFileUpload} multiple />
                    <Button
                        onClick={() => fileInputRef.current.click()}
                        sx={{
                            bgcolor: '#00EA8E', color: '#000', textTransform: 'none',
                            borderRadius: '8px', px: '22px', py: '5px', fontSize: '12px',
                            fontWeight: 600, boxShadow: 'none', fontFamily: 'Poppins',
                            '&:hover': { bgcolor: '#00d682', boxShadow: 'none' }
                        }}
                    >
                        Choose File
                    </Button>
                </Box>

                {/* Recent Uploaded */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {uploadedFiles.length > 0 ? (
                        <>
                            <Typography sx={{ fontSize: { xs: '13px', sm: '14px' }, fontWeight: 600, color: '#000', fontFamily: 'Poppins', mt: '5px' }}>
                                Recent Uploaded
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap', overflowY: 'auto', maxHeight: '120px', pt: '10px', px: '5px' }}>
                                {uploadedFiles.map((file, idx) => (
                                    <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', position: 'relative', width: '65px' }}>
                                        <IconButton
                                            onClick={() => handleRemoveFile(idx)}
                                            sx={{ position: 'absolute', top: '-8px', right: '-8px', bgcolor: '#fff', p: '3px', border: '1px solid #eee', boxShadow: '0 2px 6px rgba(0,0,0,0.15)', '&:hover': { bgcolor: '#ffe6e6' }, zIndex: 10 }}
                                        >
                                            <CloseIcon sx={{ fontSize: '12px', color: '#ff4d4d' }} />
                                        </IconButton>
                                        <CustomPdfIcon />
                                        <Typography sx={{ fontSize: '10px', color: '#888', fontFamily: 'Poppins', textAlign: 'center', lineHeight: 1.2, wordBreak: 'break-word', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                            {file.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </>
                    ) : (
                        <Box sx={{ flex: 1 }} />
                    )}
                </Box>

                {/* Footer Buttons */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, justifyContent: 'space-between', gap: { xs: '10px', sm: '15px' }, mt: { xs: '15px', sm: 'auto' } }}>
                    <Button
                        fullWidth
                        onClick={onClose}
                        sx={{
                            bgcolor: 'transparent', color: '#000', textTransform: 'none',
                            border: '1px solid #00EA8E',
                            borderRadius: '8px', py: { xs: '6px', sm: '8px' }, fontSize: '13px',
                            fontWeight: 600, boxShadow: 'none', fontFamily: 'Poppins',
                            order: { xs: 2, sm: 1 },
                            '&:hover': { bgcolor: '#f5f5f5' }
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        fullWidth
                        onClick={() => { onSave(); onClose(); }}
                        sx={{
                            bgcolor: '#00EA8E', color: '#000', textTransform: 'none',
                            borderRadius: '8px', py: { xs: '6px', sm: '8px' }, fontSize: '13px',
                            fontWeight: 600, boxShadow: 'none', fontFamily: 'Poppins',
                            order: { xs: 1, sm: 2 },
                            '&:hover': { bgcolor: '#00d682', boxShadow: 'none' }
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ChooseLetterPopup;
