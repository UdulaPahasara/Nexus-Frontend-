import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, IconButton, InputAdornment } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


import loginLogo from '../../../assets/login/login.webp';
import appleLogo from '../../../assets/logos/apple.webp';
import facebookLogo from '../../../assets/logos/facebook.webp';
import googleLogo from '../../../assets/logos/google.webp';
import twitterLogo from '../../../assets/logos/twitter.webp';
import calendarIcon from '../../../assets/calender/uil_calender.webp';

// ── Password rules ────────────────────────────────────────────────────────
const PASSWORD_RULES = [
    { label: 'At least 8 characters', regex: /.{8,}/ },
    { label: 'One uppercase letter (A–Z)', regex: /[A-Z]/ },
    { label: 'One lowercase letter (a–z)', regex: /[a-z]/ },
    { label: 'One number (0–9)', regex: /[0-9]/ },
    { label: 'One special character (@$!%*?&)', regex: /[@$!%*?&]/ },
];

const isPasswordValid = (pw) => PASSWORD_RULES.every(r => r.regex.test(pw));

function Individuals() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        dob: '',
        country: '',
        city: '',
        jobRole: '',
        company: '',
        profilePhoto: null,
        resume: null
    });
    const [passwordTouched, setPasswordTouched] = useState(false);

    // Reference to the hidden native date input
    const dateInputRef = React.useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!isPasswordValid(formData.password)) {
            setPasswordTouched(true);
            return;
        }

        console.log('Signup attempt:', formData);

        try {
            const response = await axios.post("http://localhost:8080/auth/register", {
                username: formData.fullName,
                email: formData.email,
                password: formData.password,
                role: "ROLE_INDIVIDUAL",
                phone: formData.phone,
                dob: formData.dob,
                country: formData.country,
                city: formData.city,
                jobRole: formData.jobRole,
                company: formData.company
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

    const UploadBox = ({ title, label, buttonText, name, accept }) => {
        const fileInputRef = React.useRef(null);

        const handleFileChange = (e) => {
            if (e.target.files && e.target.files.length > 0) {
                setFormData(prev => ({ ...prev, [name]: e.target.files[0] }));
            }
        };

        const currentFile = formData[name];

        return (
            <Box sx={{ flex: 1, bgcolor: '#F3F3F3', borderRadius: '8px', p: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                    <Button
                        onClick={() => navigate('/company')}
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
                        Companies
                    </Button>
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
                        <TextField placeholder="Full Name *" name="fullName" value={formData.fullName} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Email *" name="email" value={formData.email} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <TextField
                                placeholder="Password *"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => { handleChange(e); setPasswordTouched(true); }}
                                size="small"
                                sx={{
                                    ...textFieldStyles,
                                    '& fieldset': {
                                        border: passwordTouched && !isPasswordValid(formData.password)
                                            ? '1.5px solid #f44336'
                                            : 'none'
                                    }
                                }}
                            />
                            {/* Live password rules checklist */}
                            {passwordTouched && (
                                <Box sx={{ pl: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                    {PASSWORD_RULES.map((rule) => {
                                        const passed = rule.regex.test(formData.password);
                                        return (
                                            <Typography
                                                key={rule.label}
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontSize: '10px',
                                                    color: passed ? '#00b85e' : '#f44336',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px'
                                                }}
                                            >
                                                {passed ? '✓' : '✗'} {rule.label}
                                            </Typography>
                                        );
                                    })}
                                </Box>
                            )}
                        </Box>
                        <TextField placeholder="Phone *" name="phone" value={formData.phone} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField
                            placeholder="Date of Birth *"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            size="small"
                            sx={textFieldStyles}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => dateInputRef.current && dateInputRef.current.showPicker()} edge="end" sx={{ p: '5px' }}>
                                            <Box
                                                component="img"
                                                src={calendarIcon}
                                                alt="calendar"
                                                sx={{ width: 18, height: 18, opacity: 1 }}
                                            />
                                        </IconButton>
                                        <input
                                            type="date"
                                            ref={dateInputRef}
                                            style={{ visibility: 'hidden', position: 'absolute', width: 0, height: 0 }}
                                            onChange={(e) => {
                                                if (e.target.value) {
                                                    setFormData(prev => ({ ...prev, dob: e.target.value }));
                                                }
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField placeholder="Country *" name="country" value={formData.country} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="City" name="city" value={formData.city} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Job Role" name="jobRole" value={formData.jobRole} onChange={handleChange} size="small" sx={textFieldStyles} />
                        <TextField placeholder="Current Company" name="company" value={formData.company} onChange={handleChange} size="small" sx={textFieldStyles} />
                    </Box>

                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', color: '#000000', mt: '10px', mb: '-10px' }}>
                        Upload Section
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <UploadBox title="Upload Profile Photo" label="Upload Your Profile Photo From Your Device." buttonText="Choose Profile" name="profilePhoto" accept="image/*" />
                        <UploadBox title="Upload Resume" label="Upload Your Resume From Your Device." buttonText="Choose Resume" name="resume" accept=".pdf,.doc,.docx" />
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

export default Individuals;
