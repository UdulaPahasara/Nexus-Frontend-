import React, { useState } from 'react';
import { Box, Typography, Button, Dialog } from '@mui/material';
import LikePopup from '../../popups/likepopup';

// Assets logic:
// Buttons: asset/Home/post/post_btn/btn_[name].webp

import bbcLogo from '../../../../assets/Home/post/post_prof/news/Frame 758531116.webp';
import prof2 from '../../../../assets/Home/post/post_prof/prof2.webp';

// News assets from the dedicated news folder
import p1_0 from '../../../../assets/Home/post/post/news/p1.0.webp';
import p1_1 from '../../../../assets/Home/post/post/news/p1.1.webp';
import p1_2 from '../../../../assets/Home/post/post/news/p1.2.webp';
import p1_3 from '../../../../assets/Home/post/post/news/p1.3.webp';

import p2_0 from '../../../../assets/Home/post/post/news/p2.0.webp';
import p2_1 from '../../../../assets/Home/post/post/news/p2.1.webp';
import p2_2 from '../../../../assets/Home/post/post/news/p2.2.webp';
import p2_3 from '../../../../assets/Home/post/post/news/p2.3.webp';

import btn_like from '../../../../assets/Home/post/post_btn/btn_like.webp';
import btn_comment from '../../../../assets/Home/post/post_btn/btn_comment.webp';
import btn_repost from '../../../../assets/Home/post/post_btn/btn_repost.webp';
import btn_send from '../../../../assets/Home/post/post_btn/btnsend.webp';

import like_black from '../../../../assets/Home/post/reaction_icon/like_black.webp';
import hart_blck from '../../../../assets/Home/post/reaction_icon/hart_blck.webp';

const newsPostsData = [
    {
        id: 1,
        name: "BBC News",
        category: "News",
        time: "15 h",
        profilePic: bbcLogo,
        desc: "Lorem ipsum dolor sit amet consectetur. Amet semper parturient elit in elementum viverraorem ipsum dolor sit amet consectetur. Amet semper parturient elit in elementum viverraorem ipsum dolor sit amet consectetur. Amet semper parturient elit in elementum viverra",
        mainImage: p1_0,
        subImages: [p1_1, p1_2, p1_3],
        likes: 251,
        comments: 10,
        reposts: "1,100"
    },
    {
        id: 2,
        name: "Anuradha De Silva",
        category: "UI/UX Designer",
        time: "10 h",
        profilePic: prof2,
        desc: "Lorem ipsum dolor sit amet consectetur. Amet semper parturient elit in elementum viverraorem ipsum dolor sit amet consectetur. Amet semper parturient elit in elementum viverraorem ipsum dolor sit amet consectetur. Amet semper parturient elit in elementum viverra",
        mainImage: p2_0,
        subImages: [p2_1, p2_2, p2_3],
        likes: 560,
        comments: 88,
        reposts: "1,100"
    }
];

const NewsPostCard = ({ post, darkMode }) => {
    const [expanded, setExpanded] = useState(false);
    const [openLikes, setOpenLikes] = useState(false);
    const maxLength = 210;
    const isTruncated = post.desc.length > maxLength;
    const displayDesc = expanded ? post.desc : (isTruncated ? post.desc.slice(0, maxLength) : post.desc);

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '649px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            bgcolor: 'transparent',
            mb: '25px',
            boxSizing: 'border-box'
        }}>
            {/* Header: Profile Row */}
            <Box sx={{
                width: '100%',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Box
                        component="img"
                        src={post.profilePic}
                        sx={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography sx={{
                                fontFamily: 'Poppins', fontWeight: 600, fontSize: '13.5px',
                                color: darkMode ? '#fff' : '#000',
                                lineHeight: '1.2'
                            }}>
                                {post.name}
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins', fontWeight: 400, fontSize: '10px',
                                color: darkMode ? '#aaa' : '#888'
                            }}>
                                {post.time}
                            </Typography>
                        </Box>
                        <Typography sx={{
                            fontFamily: 'Poppins', fontWeight: 400, fontSize: '11px',
                            color: darkMode ? '#aaa' : '#555',
                            lineHeight: '1'
                        }}>
                            {post.category}
                        </Typography>
                    </Box>
                </Box>
                <Button sx={{
                    width: '74px',
                    height: '22px',
                    minWidth: '74px',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 231, 131, 1)',
                    color: 'rgba(0, 231, 131, 1)',
                    textTransform: 'none',
                    fontFamily: 'Poppins',
                    fontSize: '11px',
                    fontWeight: 500,
                    p: 0,
                    '&:hover': { bgcolor: 'rgba(0, 231, 131, 0.1)', border: '1px solid rgba(0, 231, 131, 1)' }
                }}>
                    + Follow
                </Button>
            </Box>

            {/* Post Description */}
            <Box sx={{ width: '100%', mt: '4px' }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '11.5px',
                    lineHeight: '1.4',
                    fontWeight: 400,
                    color: darkMode ? '#ccc' : '#333',
                }}>
                    {displayDesc}
                    {isTruncated && (
                        <Typography
                            component="span"
                            onClick={() => setExpanded(!expanded)}
                            sx={{
                                color: 'rgba(0, 231, 131, 1)',
                                cursor: 'pointer',
                                ml: '4px',
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: '11.5px',
                                '&:hover': { textDecoration: 'underline' }
                            }}
                        >
                            {expanded ? '...See Less' : '...See More'}
                        </Typography>
                    )}
                </Typography>
            </Box>

            {/* Media Grid: 1 large, 3 small */}
            <Box sx={{ display: 'flex', gap: '8px', pt: '8px', width: '100%', boxSizing: 'border-box' }}>
                {/* Large Image */}
                <Box
                    component="img"
                    src={post.mainImage}
                    sx={{
                        flex: { xs: 3, sm: 4, md: 5 },
                        width: '0', // Allow flex to dictate width
                        maxHeight: { xs: '200px', sm: '300px', md: '348px' },
                        borderRadius: '5px',
                        objectFit: 'cover'
                    }}
                />
                {/* Small Vertical Stack */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6.0px',
                    flex: 1,
                    width: '0' // Allow flex to dictate width
                }}>
                    {post.subImages.map((img, idx) => (
                        <Box
                            key={idx}
                            component="img"
                            src={img}
                            sx={{
                                width: '100%',
                                height: { xs: '62px', sm: '96px', md: '110px' },
                                borderRadius: '5px',
                                objectFit: 'cover'
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Reaction Summary Row */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mt: '6px',
                px: '10px'
            }}>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '19px', cursor: 'pointer' }}
                    onClick={() => setOpenLikes(true)}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        width: '32px', // Slightly wider to accommodate button area
                    }}>
                        <Box component="img" src={like_black} sx={{ width: '12px', height: '12px', position: 'absolute', left: '0px', zIndex: 1 }} />
                        <Box component="img" src={hart_blck} sx={{ width: '12px', height: '12px', position: 'absolute', left: '19px', zIndex: 0 }} />
                    </Box>
                    <Typography sx={{ fontSize: '11px', color: darkMode ? '#888' : '#666', fontFamily: 'Poppins', ml: '4px' }}>
                        {post.likes}
                    </Typography>
                </Box>

                {/* LIKES POPUP DIALOG */}
                <Dialog
                    open={openLikes}
                    onClose={() => setOpenLikes(false)}
                    PaperProps={{
                        sx: {
                            borderRadius: '25px',
                            maxWidth: 'none',
                            p: 0,
                            m: 0,
                        }
                    }}
                >
                    <LikePopup onClose={() => setOpenLikes(false)} />
                </Dialog>
                <Typography sx={{ fontSize: '11px', color: darkMode ? '#888' : '#666', fontFamily: 'Poppins' }}>
                    {post.comments} comments | {post.reposts} reposts
                </Typography>
            </Box>

            {/* Action Buttons Row */}
            <Box sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                boxSizing: 'border-box',
                mt: '10px',
                gap: { xs: '10px', sm: '100px' },
                px: { xs: '5px', sm: '50px' }
            }}>
                {[
                    { icon: btn_like, label: 'Like' },
                    { icon: btn_comment, label: 'Comment' },
                    { icon: btn_repost, label: 'Repost' },
                    { icon: btn_send, label: 'Send' }
                ].map((btn, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: { xs: '4px', sm: '8px' }, cursor: 'pointer' }}>
                        <Box component="img" src={btn.icon} sx={{ width: '15px', height: '15px' }} />
                        <Typography sx={{
                            fontSize: { xs: '10px', sm: '12px' },
                            fontWeight: 500,
                            color: darkMode ? '#aaa' : '#555',
                            fontFamily: 'Poppins'
                        }}>
                            {btn.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const News = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '649px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxSizing: 'border-box'
        }}>
            {newsPostsData.map(post => (
                <NewsPostCard key={post.id} post={post} darkMode={darkMode} />
            ))}
        </Box>
    );
};

export default News;
