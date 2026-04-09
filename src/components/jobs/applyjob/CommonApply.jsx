import React, { useRef } from 'react';
import { Box, Typography, Switch, IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DescriptionIcon from '@mui/icons-material/Description';
import CancelIcon from '@mui/icons-material/Cancel';

export const GreenCheck = () => (
    <Box sx={{
        width: '16px', height: '16px', bgcolor: '#00EA8E', borderRadius: '3px',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
        <DoneIcon sx={{ color: '#fff', fontSize: '13px', strokeWidth: 1 }} />
    </Box>
);

export const CustomField = ({ label, value, onChange, type = "text", placeholder }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
            {label}
        </Typography>
        <Box sx={{
            display: 'flex', alignItems: 'center', bgcolor: '#F5F5F5',
            borderRadius: '6px', px: '15px', py: '10px'
        }}>
            <Box
                component="input"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder || `Enter ${label}`}
                sx={{
                    flex: 1, border: 'none', outline: 'none', bgcolor: 'transparent',
                    fontFamily: 'Poppins', fontSize: '13px', color: '#111', fontWeight: 500,
                    width: '100%'
                }}
            />
            {value && value.trim() !== '' && <GreenCheck />}
        </Box>
    </Box>
);

export const FileUploadField = ({ label, file, onFileSelect, onRemoveFile, buttonText, noteText, showDefaultSwitch, defaultSwitchValue, onSwitchChange, onClickButton }) => {
    const fileInputRef = useRef(null);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mt: '10px' }}>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                {label}
            </Typography>
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                bgcolor: '#F5F5F5', borderRadius: '6px', px: '15px', py: '10px',
                flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '10px', sm: '0' }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', width: { xs: '100%', sm: 'auto' }, overflow: 'hidden' }}>
                    {file ? (
                        <>
                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                <DescriptionIcon sx={{ color: '#999', fontSize: '28px' }} />
                                <CancelIcon
                                    onClick={onRemoveFile}
                                    sx={{
                                        position: 'absolute', top: -4, right: -4, cursor: 'pointer',
                                        color: '#FF4D4D', fontSize: '14px', bgcolor: '#fff', borderRadius: '50%'
                                    }}
                                />
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: '#333', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: { xs: '180px', sm: '200px' } }}>
                                {file.name}
                            </Typography>
                        </>
                    ) : (
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
                            No file chosen
                        </Typography>
                    )}
                </Box>

                <input
                    type="file"
                    hidden
                    ref={fileInputRef}
                    onChange={onFileSelect}
                    accept=".pdf,.doc,.docx,.rtf,.txt"
                />
                <Box
                    onClick={onClickButton || (() => fileInputRef.current?.click())}
                    sx={{
                        border: '1px solid #00EA8E', borderRadius: '20px',
                        px: '12px', py: '4px', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: { xs: '100%', sm: 'auto' }, boxSizing: 'border-box'
                    }}
                >
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#111', fontWeight: 500, whiteSpace: 'nowrap' }}>
                        {buttonText}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#FF4D4D', mt: '2px' }}>
                * {noteText}
            </Typography>
            {showDefaultSwitch && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '5px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#333', fontWeight: 500 }}>
                        Use My Default Cover Letter
                    </Typography>
                    <Switch
                        checked={defaultSwitchValue}
                        onChange={onSwitchChange}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#00EA8E' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#00EA8E' },
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};
