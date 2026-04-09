import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ProductCard from '../ProductCard';

import post1_0 from '../../../assets/Home/post/post/post1.0.webp';
import post1_2 from '../../../assets/Home/post/post/post1.2.webp';
import post1_3 from '../../../assets/Home/post/post/post1.3.webp';
import post1_4 from '../../../assets/Home/post/post/post1.4.webp';

// Reuse company logos for similar products
import compCodeLab from '../../../assets/CompanyProfile/CodeLab.webp';
import compDiscord from '../../../assets/CompanyProfile/Discord.webp';
import compReddit from '../../../assets/CompanyProfile/Reddit.webp';
import compSlack from '../../../assets/CompanyProfile/Slack.webp';

const ProductDetail = ({ darkMode, product, onBack }) => {
    // Similar products placeholder
    const similarProducts = [
        { id: 101, image: post1_0, compLogo: compCodeLab, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 26k+' },
        { id: 102, image: post1_2, compLogo: compDiscord, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 26k+' },
        { id: 103, image: post1_3, compLogo: compReddit, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 26k+' },
        { id: 104, image: post1_4, compLogo: compSlack, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 26k+' },
    ];

    return (
        <Box sx={{
            flex: 1,
            width: '100%',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            border: darkMode ? '1px solid #333' : '1px solid #eee',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        }}>
            {/* Top Navigation */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: '15px 20px',
                borderBottom: darkMode ? '1px solid #333' : '1px solid #eee'
            }}>
                <IconButton onClick={onBack} sx={{ color: darkMode ? '#fff' : '#000' }}>
                    <CloseIcon />
                </IconButton>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton sx={{ color: darkMode ? '#fff' : '#000' }}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton sx={{ color: darkMode ? '#fff' : '#000' }}>
                        <MoreHorizIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Scrollable Content */}
            <Box sx={{
                flex: 1,
                overflowY: 'auto',
                p: { xs: '15px', sm: '25px' },
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none'
            }}>
                {/* Image Gallery */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '15px',
                    width: '100%',
                    height: { xs: 'auto', sm: '380px' }
                }}>
                    <Box sx={{
                        flex: 1,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        height: { xs: '250px', sm: '100%' }
                    }}>
                        <Box component="img" src={product?.image || post1_0} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'row', sm: 'column' },
                        gap: '12px',
                        width: { xs: '100%', sm: '120px' },
                        height: { xs: '80px', sm: '100%' }
                    }}>
                        <Box component="img" src={post1_2} sx={{ width: '100%', height: { xs: '100%', sm: 'calc(33.3% - 8px)' }, objectFit: 'cover', borderRadius: '8px' }} />
                        <Box component="img" src={post1_3} sx={{ width: '100%', height: { xs: '100%', sm: 'calc(33.3% - 8px)' }, objectFit: 'cover', borderRadius: '8px' }} />
                        <Box component="img" src={post1_4} sx={{ width: '100%', height: { xs: '100%', sm: 'calc(33.3% - 8px)' }, objectFit: 'cover', borderRadius: '8px' }} />
                    </Box>
                </Box>

                {/* Title & Actions */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '18px', sm: '22px' }, color: darkMode ? '#fff' : '#111', flex: 1, pr: 2 }}>
                        {product?.title || 'Brand New Rtx 3060 MSI i7 10th Laptop with fullest box'}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f5f5f5' }}>
                            <FavoriteBorderIcon sx={{ fontSize: '20px', color: darkMode ? '#ccc' : '#555' }} />
                        </IconButton>
                        <IconButton sx={{ bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f5f5f5' }}>
                            <ShareIcon sx={{ fontSize: '20px', color: darkMode ? '#ccc' : '#555' }} />
                        </IconButton>
                    </Box>
                </Box>

                {/* Seller Profile Array (611 x 192.5) */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    width: '100%',
                    maxWidth: '611px'
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '1px solid #ddd'
                            }}>
                                <Box component="img" src={product?.compLogo || post1_2} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '15px', color: darkMode ? '#fff' : '#111' }}>
                                    Nuwini Karunarathna
                                </Typography>
                                <VerifiedIcon sx={{ color: '#00B2FF', fontSize: '16px' }} />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Box sx={{ display: 'flex' }}>
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} sx={{ fontSize: '14px', color: '#FFC107' }} />
                                ))}
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '13px', color: '#888' }}>(26k+)</Typography>
                        </Box>
                    </Box>

                    {/* Description */}
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '13px',
                        color: darkMode ? '#bbb' : '#666',
                        lineHeight: 1.6
                    }}>
                        Lorem ipsum dolor sit amet consectetur. Tincidunt adipiscing sollicitudin ut faucibus pharetra vitae tellus. Lorem ipsum dolor sit amet consectetur. Tincidunt adipiscing sollicitudin ut faucibus pharetra vitae tellus. Lorem
                    </Typography>

                    <Box sx={{ borderBottom: darkMode ? '1px solid #333' : '1px solid #eee', width: '100%' }} />

                    {/* Messaging Input */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', color: darkMode ? '#fff' : '#111' }}>
                            Send Message to Seller
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '15px', flexDirection: { xs: 'column', sm: 'row' } }}>
                            <TextField
                                variant="outlined"
                                placeholder="Hi! I would like to know more about..."
                                fullWidth
                                size="small"
                                sx={{
                                    bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : '#fff',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '8px',
                                        fontSize: '13px',
                                        fontFamily: 'Poppins',
                                        '& fieldset': { borderColor: darkMode ? '#444' : '#ddd' }
                                    }
                                }}
                            />
                            <Button sx={{
                                bgcolor: '#00EA8E',
                                color: '#000',
                                fontWeight: 700,
                                fontFamily: 'Poppins',
                                fontSize: '12px',
                                py: '8px',
                                px: '24px',
                                borderRadius: '8px',
                                '&:hover': { bgcolor: '#00c778' },
                                whiteSpace: 'nowrap'
                            }}>
                                SEND MESSAGE
                            </Button>
                        </Box>
                    </Box>

                    {/* Contact Rows */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, flexWrap: 'wrap', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ p: '6px', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f5f5f5', borderRadius: '50%', display: 'flex' }}>
                                <EmailIcon sx={{ fontSize: '14px', color: darkMode ? '#ccc' : '#555' }} />
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>nuwinikaruna123@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box sx={{ p: '6px', bgcolor: darkMode ? 'rgba(255,255,255,0.05)' : '#f5f5f5', borderRadius: '50%', display: 'flex' }}>
                                <PhoneIcon sx={{ fontSize: '14px', color: darkMode ? '#ccc' : '#555' }} />
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>+94 768 867 898</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Seller Location (611 x 136) */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    width: '100%',
                    maxWidth: '611px',
                    mt: 1
                }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', color: darkMode ? '#fff' : '#111' }}>
                        Seller Location
                    </Typography>
                    <Box sx={{
                        width: '100%',
                        height: '136px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        border: darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #efefef'
                    }}>
                        <iframe
                            title="Seller Location"
                            src="https://www.google.com/maps?q=6.9271,79.8612&hl=en&z=14&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#888' }}>
                        Colombo, Sri Lanka
                    </Typography>
                </Box>

                <Box sx={{ borderBottom: darkMode ? '1px solid #333' : '1px solid #eee', width: '100%', my: 2 }} />

                {/* Similar Products Grid */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: darkMode ? '#fff' : '#111' }}>
                        Similar Products
                    </Typography>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)'
                        },
                        gap: '15px'
                    }}>
                        {similarProducts.map((prod) => (
                            <ProductCard key={prod.id} darkMode={darkMode} product={prod} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetail;
