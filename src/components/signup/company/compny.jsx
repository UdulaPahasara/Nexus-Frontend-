import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, IconButton, InputAdornment, MenuItem, Select, FormControl } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import loginLogo from '../../../assets/login/login.webp';
import appleLogo from '../../../assets/logos/apple.webp';
import facebookLogo from '../../../assets/logos/facebook.webp';
import googleLogo from '../../../assets/logos/google.webp';
import twitterLogo from '../../../assets/logos/twitter.webp';

function Company() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        companyEmail: '',
        password: '',
        companyType: '',
        industry: '',
        sellerType: '',
        companyPhone: '',
        country: '',
        city: '',
        taxId: '',
        website: '',
        employees: '',
        repName: '',
        repTitle: '',
        companyLogo: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log('Company Signup attempt:', formData);

        try {
            // We map the React form fields to the exact keys expected by our backend RegisterRequest.java
            const response = await axios.post("http://localhost:8080/auth/register", {
                username: formData.companyName,
                email: formData.companyEmail,
                password: formData.password,
                role: "ROLE_COMPANY"
            });
            console.log("Registration successful", response.data);
            alert("Registration successful! You can now log in.");
            navigate('/login');
        } catch (error) {
            console.error("Registration failed", error);
            alert("Registration failed: " + JSON.stringify(error.response?.data || error.message));
        }
    };

    const textFieldStyles = {
        bgcolor: '#F3F3F3',
        borderRadius: '5px',
        '& fieldset': { border: 'none' },
        input: { fontFamily: 'Poppins', fontSize: '13px', py: '10px' }
    };

    // Specific styles for the Select dropdown to match TextField padding
    const selectStyles = {
        bgcolor: '#F3F3F3',
        borderRadius: '5px',
        fontFamily: 'Poppins',
        fontSize: '13px',
        '.MuiSelect-select': {
            py: '10px',
            color: formData.sellerType ? '#000' : '#a0a0a0'
        },
        '& fieldset': { border: 'none' }
    };

    const UploadBox = ({ title, label, buttonText, name, accept }) => {
        const fileInputRef = React.useRef(null);

        const handleFileChange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
                setFormData(prev => ({ ...prev, [name]: e.target.files[0] }));
            }
        };

        const currentFile = formData[name];

        return (
            <Box sx={{ width: '100%', bgcolor: '#F3F3F3', borderRadius: '8px', p: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888', alignSelf: 'flex-start', mb: '10px' }}>
                    {title}
                </Typography>
                <Box sx={{
                    width: '100%',
                    border: '1px dashed #ccc',
                    borderRadius: '8px',
                    bgcolor: '#fff',
                    p: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    {/*file upload inner content */}
                    <FileUploadOutlinedIcon sx={{ color: '#00000080' }} />
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#0B0B0B', textAlign: 'center' }}>
                        {currentFile ? currentFile.name : label}
                    </Typography>

                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept={accept}
                        onChange={handleFileChange}
                    />

                    <Button
                        onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        sx={{
                            bgcolor: '#00E783',
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '11px',
                            textTransform: 'none',
                            borderRadius: '4px',
                            px: '20px',
                            py: '4px',
                            '&:hover': { bgcolor: '#00c670' }
                        }}>
                        {buttonText}
                    </Button>
                </Box>
            </Box>
        );
    };

    return (
        <Box sx={{
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f1f0ee',
            pt: '75px', // Push below fixed 75px navbar
            pb: 4,
            boxSizing: 'border-box'
        }}>
            <Box sx={{
                width: { xs: '90%', md: 750 },
                maxWidth: 750,
                bgcolor: '#ffffff',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 3,
                boxSizing: 'border-box',
                p: { xs: '20px', sm: '40px' }
            }}>

                {/* Toggle Switch */}
                <Box sx={{ display: 'flex', border: '1px solid #000', borderRadius: '20px', overflow: 'hidden', mb: '30px' }}>
                    <Button sx={{
                        color: '#fff',
                        bgcolor: '#000',
                        borderRadius: '20px',
                        px: '20px', py: '5px',
                        textTransform: 'none',
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        '&:hover': { bgcolor: '#333' }
                    }}>
                        Companies
                    </Button>
                    <Button
                        onClick={() => navigate('/individuals')}
                        sx={{
                            color: '#000',
                            bgcolor: '#fff',
                            borderRadius: '20px',
                            px: '20px', py: '5px',
                            textTransform: 'none',
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                            '&:hover': { bgcolor: '#f0f0f0' }
                        }}>
                        Individuals
                    </Button>
                </Box>

                <Box component="img" src={loginLogo} alt="Logo" sx={{ width: 77.66, height: 66.89, mb: '15px' }} />

                <Typography sx={{
                    fontFamily: 'Fredoka One',
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    fontSize: { xs: '24px', sm: '32px' },
                    color: '#000000',
                    textAlign: 'center',
                    lineHeight: 1,
                    mb: '10px'
                }}>
                    Create Your Account
                </Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: '#888888',
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: 400,
                    lineHeight: 1.5,
                    mb: '30px'
                }}>
                    Lorem ipsum dolor sit amet consectetur. Aenean tellus odio ornare tellus.
                </Typography>

                <Box component="form" onSubmit={handleSignup} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', color: '#000', mb: '-10px' }}>
                        Basic Information
                    </Typography>

                    {/* Grid Layout for Form Fields */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '15px' }}>
                        <TextField placeholder="Company Name *" name="companyName" value={formData.companyName} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Company Email *" name="companyEmail" value={formData.companyEmail} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Password *" name="password" type="password" value={formData.password} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Company Type *" name="companyType" value={formData.companyType} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Industry *" name="industry" value={formData.industry} onChange={handleChange} size="small" sx={textFieldStyles} />

                        {/* Seller Type Dropdown Selector */}
                        <FormControl size="small" sx={{ width: '100%' }}>
                            <Select
                                name="sellerType"
                                value={formData.sellerType}
                                onChange={handleChange}
                                displayEmpty
                                sx={selectStyles}
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem value="" disabled sx={{ display: 'none' }}>Seller Type *</MenuItem>
                                <MenuItem value="Type A" sx={{ fontFamily: 'Poppins', fontSize: '13px' }}>Type A</MenuItem>
                                <MenuItem value="Type B" sx={{ fontFamily: 'Poppins', fontSize: '13px' }}>Type B</MenuItem>
                                <MenuItem value="Type C" sx={{ fontFamily: 'Poppins', fontSize: '13px' }}>Type C</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField placeholder="Company Phone *" name="companyPhone" value={formData.companyPhone} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Country *" name="country" value={formData.country} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="City" name="city" value={formData.city} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Tax/Registration ID" name="taxId" value={formData.taxId} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Company Website URL" name="website" value={formData.website} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Number of employees" name="employees" value={formData.employees} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Representative Name" name="repName" value={formData.repName} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Representative Title" name="repTitle" value={formData.repTitle} onChange={handleChange} size="small" sx={textFieldStyles} />
                    </Box>

                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', color: '#000000', mt: '10px', mb: '-10px' }}>
                        Upload Section
                    </Typography>

                    {/* Single Full-Width Upload Box */}
                    <Box sx={{ display: 'flex' }}>
                        <UploadBox
                            title="Upload Company Logo"
                            label="Upload Your Logo From Your Device."
                            buttonText="Choose Logo"
                            name="companyLogo"
                            accept="image/*"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
                        <Button
                            type="submit"
                            sx={{
                                width: { xs: '100%', sm: 385 },
                                height: 45,
                                bgcolor: '#00E783',
                                color: '#000000',
                                fontFamily: 'Poppins',
                                fontWeight: 700,
                                fontSize: '15px',
                                borderRadius: '8px',
                                '&:hover': { bgcolor: '#00c670' },
                                textTransform: 'none'
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>

                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 250,
                    mt: '25px',
                    '&::before, &::after': {
                        content: '""',
                        flex: 1,
                        borderBottom: '1px solid #e0e0e0'
                    }
                }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888', px: '10px' }}>
                        or continue with
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: '20px', mt: '20px' }}>
                    {[appleLogo, facebookLogo, googleLogo, twitterLogo].map((logo, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={logo}
                            sx={{
                                width: 35,
                                height: 35,
                                objectFit: 'contain',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.1)' }
                            }}
                        />
                    ))}
                </Box>

                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', fontStyle: 'regular', color: '#00000080', mt: '30px' }}>
                    Already have an account?{' '}
                    <Link href="/login" underline="none" sx={{ color: '#00E783', fontWeight: 500 }}>
                        Login
                    </Link>
                </Typography>

            </Box>
        </Box>
    );
}

export default Company;
