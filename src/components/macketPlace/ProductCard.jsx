import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const ProductCard = ({ darkMode, product, onClick, isCompact = false }) => {
    const [liked, setLiked] = useState(false);

    const res = (mobile, desktop) => isCompact ? desktop : { xs: mobile, sm: desktop };

    return (
        <Box
            onClick={() => onClick && onClick(product)}
            sx={{
                width: '100%',
                height: res('380px', 'auto'),
                aspectRatio: isCompact ? '155 / 180' : { xs: 'auto', sm: '155 / 180' },
                borderRadius: res('14px', '9.07px'),
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                bgcolor: 'transparent',
                border: 'none',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                transition: 'transform 0.2s',
                cursor: onClick ? 'pointer' : 'default',
                '&:hover': { transform: 'translateY(-4px)' }
            }}
        >
            {/* Full Height Image Section */}
            <Box sx={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, borderRadius: 'inherit', overflow: 'hidden', zIndex: 0 }}>
                <Box component="img" src={product.image} sx={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </Box>

            {/* Heart Reaction */}
            <Box
                onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                }}
                sx={{
                    position: 'absolute',
                    top: res('14px', '8px'),
                    right: res('14px', '8px'),
                    width: res('36px', '24px'),
                    height: res('36px', '24px'),
                    borderRadius: '50%',
                    bgcolor: 'rgba(255,255,255,0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s',
                    '&:hover': { transform: 'scale(1.1)' }
                }}
            >
                {liked ? (
                    <FavoriteIcon sx={{ fontSize: res('20px', '14px'), color: '#000000ff' }} />
                ) : (
                    <FavoriteBorderIcon sx={{ fontSize: res('20px', '14px'), color: '#000' }} />
                )}
            </Box>

            {/* Left Logo (32px) */}
            <Box sx={{
                position: 'absolute',
                top: res('14px', '8px'),
                left: res('14px', '8px'),
                width: res('44px', '32px'),
                height: res('44px', '32px'),
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
            }}>
                <Box component="img" src={product.compLogo} sx={{ width: '18px', height: '18px', objectFit: 'contain' }} />
            </Box>

            {/* New Tag - Positioned just above the detail box */}
            <Box sx={{
                position: 'absolute',
                bottom: res('100px', '64px'),
                right: res('14px', '8px'),
                bgcolor: '#059F1B',
                color: '#fff',
                px: res('14px', '12px'),
                py: res('6px', '4px'),
                borderRadius: '50px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 2px 6px rgba(0,0,0,0.2)'
            }}>
                <Typography sx={{ fontSize: res('13px', '10px'), fontWeight: 600, fontFamily: 'Poppins' }}>New</Typography>
            </Box>

            {/* Detail Section (58px height) - Absolute bottom overlay */}
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: res('90px', '58px'),
                width: '100%',
                background: darkMode ? 'rgba(0,0,0,0.45)' : 'linear-gradient(to bottom, rgba(232, 232, 232, 0.75), rgba(200, 200, 200, 0.85))',
                backdropFilter: 'blur(8px)',
                px: res('16px', '8px'),
                py: res('12px', '6px'),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                borderBottomLeftRadius: 'inherit',
                borderBottomRightRadius: 'inherit'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: res('17px', '10.5px'),
                    color: darkMode ? '#fff' : '#111',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: 1.2
                }}>
                    {product.title}
                </Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: res('12px', '7.5px'),
                    color: darkMode ? '#ccc' : '#444',
                    lineHeight: 1.1,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    Lorem ipsum dolor sit amet consjkh<br />
                    Euipsum dolor dolor ... See more
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} sx={{ fontSize: res('15px', '10px'), color: '#000', ml: -0.2 }} />
                        ))}
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: res('14px', '9px'), color: '#111', ml: '2px' }}>
                        {product.rating ? product.rating.split(' ')[1] : '26k+'}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductCard;
