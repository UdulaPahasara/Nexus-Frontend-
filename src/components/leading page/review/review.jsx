import React from 'react';
import { Box, Typography } from '@mui/material';

import fiveStar from '../../../assets/leaderpage/review/fiveStar.webp';
import hn1 from '../../../assets/leaderpage/review/hn1.webp';
import hn2 from '../../../assets/leaderpage/review/hn2.webp';
import hn3 from '../../../assets/leaderpage/review/hn3.webp';
import hn4 from '../../../assets/leaderpage/review/hn4.webp';
import hn5 from '../../../assets/leaderpage/review/hn5.webp';
import hn6 from '../../../assets/leaderpage/review/hn6.webp';
import hn7 from '../../../assets/leaderpage/review/hn7.webp';
import hn8 from '../../../assets/leaderpage/review/hn8.webp';
import worldImg from '../../../assets/leaderpage/review/word.webp';

const ReviewCard = ({ name, role, date, description, image, rating = 5 }) => {
    return (
        <Box sx={{
            width: '281px',
            height: '277px',
            bgcolor: '#F5F5F5', // Light grey background seen in reference
            borderRadius: '12px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box',
            p: '20px'
        }}>

            {/* Date */}
            <Typography sx={{
                position: 'absolute',
                top: '20px', // Adjusted relative to container (3468 - 3460 = ~8px, usually padding is ~20px)
                right: '20px', // Adjusted relative to container (314px right side)
                width: '84px',
                height: '19px',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '19px',
                color: '#A0A0A0', // Defaulting to gray color
                textAlign: 'right',
            }}>
                {date}
            </Typography>

            {/* Profile Image - positioned below the date roughly */}
            <Box
                component="img"
                src={image}
                alt={name}
                sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mt: '20px', // Rough estimate visual spacing
                    mb: '12px'
                }}
            />

            {/* Name */}
            <Typography sx={{
                width: '191px',
                height: '22px',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '22px',
                color: '#000000',
                textAlign: 'center',
                mb: '0px'
            }}>
                {name}
            </Typography>

            {/* Role / CEO desc */}
            <Typography sx={{
                width: '192px',
                height: '19px',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '19px',
                color: '#666', // Adjust based on specific design
                textAlign: 'center',
                mb: '8px'
            }}>
                {role}
            </Typography>

            {/* Star Rating Placeholder - 5 stars */}
            <Box sx={{ mb: '16px', display: 'flex', justifyContent: 'center' }}>
                <img src={fiveStar} alt="5 stars" style={{ height: '15px', objectFit: 'contain' }} />
            </Box>

            {/* Description Text */}
            <Typography sx={{
                width: '235px',
                height: '80px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#333',
                textAlign: 'center',
            }}>
                {description}
            </Typography>

        </Box>
    );
};

const GlobalScale = () => {
    return (
        <Box sx={{
            width: '100%',
            position: 'relative',
            mt: '0', // Removed large top margin to allow the clipPath to tuck under the cards visually
            pt: { xs: '60px', md: '108px' }, // Start content below the clip angle
            pb: { xs: '60px', md: '80px' },
            background: '#111111', // Solid dark background from screenshot
            clipPath: { xs: 'none', md: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)' }, // Gentle slope matching Screenshot 1
            overflow: 'hidden',
            fontFamily: 'Poppins',
        }}>
            {/* World Image */}
            <Box
                component="img"
                src={worldImg}
                alt="World Map"
                sx={{
                    position: 'absolute',
                    width: { xs: '800px', md: '1100px' },
                    height: { xs: 'auto', md: '1100px' },
                    top: { xs: '20%', md: '-140px' }, // Adjust to match screenshot 1
                    right: { xs: '-50%', md: '-240px' },
                    transform: 'rotate(-11.89deg)',
                    opacity: { xs: 0.3, md: 0.8 }, // Kept slightly faded so it looks like screenshot 1 lines
                    pointerEvents: 'none',
                    zIndex: 1,
                    objectFit: 'contain'
                }}
            />

            {/* Content Container (Perfectly aligned with cards) */}
            <Box sx={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '1225px', // Same bounding box as the rest of the page
                mx: 'auto',
                px: '20px',
                display: 'flex',
                boxSizing: 'border-box'
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '65%' }, // 65% width provides room for 3 stats safely
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start' // All text perfectly left-aligned to the 1225px edge
                }}>
                    {/* Global Scale Pill */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        border: '1px solid rgba(255,255,255,0.4)', // Faint border, no bgcolor
                        borderRadius: '1000px',
                        px: 2,
                        py: '4px',
                        mb: 3
                    }}>
                        <Typography sx={{ color: '#fff', fontSize: '11px', fontWeight: 500 }}>Global scale &gt;</Typography>
                    </Box>

                    {/* Heading */}
                    <Typography sx={{
                        color: '#fff',
                        fontSize: { xs: '24px', md: '32px' },
                        fontWeight: 800,
                        lineHeight: 1.2,
                        mb: 3
                    }}>
                        LOREM LIPSUM LORERM LOREM<br />LIPSUM LORERM
                    </Typography>

                    {/* Descriptions */}
                    <Typography sx={{ color: '#ccc', fontSize: '14px', lineHeight: 1.6, mb: 2, maxWidth: '550px' }}>
                        Lorem ipsum dolor sit amet consectetur. Odio consequat nibh faucibus et convallis ac proin.Lorem ipsum dolor sit amet consectetur. Odio consequat nibh Lorem ipsum dolor sit amet consectetur.
                    </Typography>
                    <Typography sx={{ color: '#ccc', fontSize: '14px', lineHeight: 1.6, mb: 5, maxWidth: '550px' }}>
                        Odio consequat nibh Lorem ipsum dolor sit amet consectetur. Odio consequat nibh Lorem ipsum dolor sit amet consur. Odio consequat nibh Lorem ipsum dolor sit amet Odio consequat nibh
                    </Typography>

                    {/* Stats Row */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: '30px', md: '45px' }, // Shrunk gap to guarantee 3 fit on 1 line
                        flexWrap: { xs: 'wrap', md: 'nowrap' } // Force nowrap on laptop so it doesn't break
                    }}>
                        {[
                            { value: '500M +', label: 'Lorem ipsum dolor sit amet cons\nconsequat nibh' },
                            { value: '100K +', label: 'Lorem ipsum dolor sit amet cons\nconsequat nibh' },
                            { value: '5.6M +', label: 'Lorem ipsum dolor sit amet cons\nconsequat nibh' }
                        ].map((stat, i) => (
                            <Box key={i} sx={{ display: 'flex', gap: '10px' }}>
                                {/* Green line */}
                                <Box sx={{ width: '3px', height: '40px', bgcolor: '#05C168', mt: 1 }} />
                                <Box>
                                    <Typography sx={{ color: '#fff', fontSize: '20px', fontWeight: 600, mb: 0.5 }}>{stat.value}</Typography>
                                    <Typography sx={{ color: '#999', fontSize: '12px', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{stat.label}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

// Main Review Component framing it
const Reviews = () => {
    const reviewsData = [
        { name: "Mr. Tim Kayagi", role: "CEO of Lorem lipsum", image: hn1 },
        { name: "Mr. Aiden Carter", role: "CEO of Lorem lipsum", image: hn2 },
        { name: "Mr. Mateo Rodríguez", role: "CEO of Lorem lipsum", image: hn3 },
        { name: "Miss Priya Senanayake", role: "CEO of Lorem lipsum", image: hn4 },
        { name: "Mr. Jamal Hassan", role: "CEO of Lorem lipsum", image: hn5 },
        { name: "Miss Elina Petrov", role: "CEO of Lorem lipsum", image: hn6 },
        { name: "Mr. Tobias Müller", role: "CEO of Lorem lipsum", image: hn7 },
        { name: "Mr. John Snow", role: "CEO of Lorem lipsum", image: hn8 },
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: { xs: 4, md: 8 } }}>
            {/* Reviews Header */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: '40px',
                textAlign: 'center',
                px: '20px',
                width: '100%',
                maxWidth: '1225px',
                mx: 'auto'
            }}>
                {/* Pill */}
                <Box sx={{
                    height: '25px',
                    borderRadius: '1000px',
                    bgcolor: '#EBEBEB',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '3px 17px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    mb: '12px'
                }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '10px', color: '#888', letterSpacing: '0.5px' }}>
                        REVIEWS
                    </Typography>
                    <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 7L4 4L1 1" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>

                {/* Title */}
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 800,
                    fontSize: { xs: '20px', md: '24px' },
                    color: '#000',
                    maxWidth: '800px',
                    mb: '8px'
                }}>
                    LOREM LIPSUM LORERM LOREM LIPSUM LORERM
                </Typography>

                {/* Subtitle */}
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#666',
                    maxWidth: '430px',
                    lineHeight: '22px',
                    mb: '24px'
                }}>
                    Lorem ipsum dolor sit amet consectetur. Odio consequat nibh faucibus et convallis ac proin.
                </Typography>

                {/* Tabs */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#00F08B', // Match the green in screenshot
                    borderRadius: '1000px',
                    p: '3px 6px',
                    gap: '8px'
                }}>
                    <Box sx={{
                        bgcolor: '#fff',
                        borderRadius: '1000px',
                        px: '16px',
                        py: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '11px', color: '#000' }}>
                            ALL
                        </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '11px', color: '#000', px: '8px', cursor: 'pointer' }}>
                        COMPANIES
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '11px', color: '#000', px: '8px', pr: '16px', cursor: 'pointer' }}>
                        INDIVIDUALS
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                gap: '15px', // Reduce gap to fit 4 across (4 * 281) + (3 * 15) = 1124 + 45 = 1169px < 1185px
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '1225px',
                mx: 'auto',
                px: '20px',
                boxSizing: 'border-box'
            }}>
                {reviewsData.map((review, index) => (
                    <ReviewCard
                        key={index}
                        name={review.name}
                        role={review.role}
                        date="Sep 17, 2024"
                        description="Lorem ipsum dolor sit amet consectetur. Ultrices nulla arcu purus odio. Commodo ac massa fringilla molestie. Interdum aliquam ultrices semper consequat."
                        image={review.image}
                    />
                ))}
            </Box>

            {/* Global Scale Section */}
            <GlobalScale />
        </Box>
    );
};

export default Reviews;
