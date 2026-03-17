import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Checkbox, FormControlLabel } from '@mui/material';

import loginLogo from '../../assets/login/login.webp';
import appleLogo from '../../assets/logos/apple.webp';
import facebookLogo from '../../assets/logos/facebook.webp';
import googleLogo from '../../assets/logos/google.webp';
import twitterLogo from '../../assets/logos/twitter.webp';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password, rememberMe });
    };

    return (
        // Outer wrapper for full-screen centering
        <Box sx={{
            width: '100vw',
            minHeight: '100vh',
            paddingTop: '75px', // Push content below the fixed 75px navbar
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f1f0ee',
            boxSizing: 'border-box'
        }}>
            {/* Main Card */}
            <Box sx={{
                width: { xs: '90%', sm: 544 },
                minHeight: { xs: 'auto', sm: 604 },
                py: { xs: 4, sm: 0 },
                bgcolor: '#ffffff',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 3,
                boxSizing: 'border-box',
                px: { xs: 2, sm: 0 }
            }}>
                <Box component="img" src={loginLogo} alt="Login Logo" sx={{ width: 77.66, height: 66.89, mt: '23px' }} />

                <Typography sx={{
                    fontFamily: 'Fredoka One',
                    fontWeight: 400,
                    fontStyle: 'regular',
                    fontSize: { xs: '32px', sm: '39.85px' },
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#000000',
                    mt: '6px'
                }}>
                    Welcome
                </Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: '#888888',
                    textAlign: 'center',
                    mt: '10px',
                    width: { xs: '100%', sm: 314 },
                    lineHeight: 1.5
                }}>
                    Lorem ipsum dolor sit amet consectetur. Aenean<br />tellus odio ornare tellus.
                </Typography>

                <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mt: '29px' }}>

                    <TextField
                        placeholder="Enter Email"
                        variant="outlined"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            width: { xs: '100%', sm: 385 },
                            height: 40,
                            bgcolor: '#F3F3F3',
                            borderRadius: '5px',
                            '& fieldset': { border: 'none' },
                            input: { fontFamily: '"Poppins", sans-serif', fontSize: '12px', py: '10px' }
                        }}
                    />

                    <TextField
                        placeholder="Enter Password"
                        type="password"
                        variant="outlined"
                        size="small"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            width: { xs: '100%', sm: 385 },
                            height: 40,
                            mt: '15px',
                            bgcolor: '#F3F3F3',
                            borderRadius: '5px',
                            '& fieldset': { border: 'none' },
                            input: { fontFamily: '"Poppins", sans-serif', fontSize: '12px', py: '10px' }
                        }}
                    />

                    <Box sx={{
                        width: { xs: '100%', sm: 385 },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: '10px'
                    }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    sx={{
                                        color: '#ccc',
                                        '&.Mui-checked': { color: '#00E783' },
                                        p: '5px'
                                    }}
                                />
                            }
                            label={
                                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', color: '#888' }}>
                                    Remember Me
                                </Typography>
                            }
                            sx={{ m: 0 }}
                        />
                        <Link href="#" underline="none" sx={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '12px',
                            color: '#00E783',
                            fontWeight: 400
                        }}>
                            Forgot Password ?
                        </Link>
                    </Box>

                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                            width: { xs: '100%', sm: 385 },
                            height: 45,
                            mt: '30px',
                            bgcolor: '#00E783',
                            color: '#000000',
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 700,
                            fontSize: '15px',
                            borderRadius: '8px',
                            '&:hover': { bgcolor: '#00c670' },
                            textTransform: 'none'
                        }}
                    >
                        LOGIN
                    </Button>

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
                    Don't have an account?{' '}
                    <Link href="/individuals" underline="none" sx={{ color: '#00E783', fontWeight: 500 }}>
                        Sign Up
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default Login;
