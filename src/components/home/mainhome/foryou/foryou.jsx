import React, { useState } from 'react';
import { Box, Typography, Button, Dialog } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LikePopup from '../../popups/likepopup';

// Assets logic:
// Post Images: asset/Home/post/post/post[X].[Y].webp
// Profile Pics: asset/Home/post/post_prof/prof[X].webp
// Buttons: asset/Home/post/post_btn/btn_[name].webp

import prof1 from '../../../../assets/Home/post/post_prof/prof1.webp';
import prof2 from '../../../../assets/Home/post/post_prof/prof2.webp';
import prof3 from '../../../../assets/Home/post/post_prof/prof3.webp';

import post1_0 from '../../../../assets/Home/post/post/post1.0.webp';
import post1_2 from '../../../../assets/Home/post/post/post1.2.webp';
import post1_3 from '../../../../assets/Home/post/post/post1.3.webp';
import post1_4 from '../../../../assets/Home/post/post/post1.4.webp';

import post2_0 from '../../../../assets/Home/post/post/post2.0.webp';
import post2_1 from '../../../../assets/Home/post/post/post2.1.webp';
import post2_2 from '../../../../assets/Home/post/post/post2.2.webp';
import post2_3 from '../../../../assets/Home/post/post/post2.3.webp';

import post3_0 from '../../../../assets/Home/post/post/post3.0.webp';
import post3_1 from '../../../../assets/Home/post/post/post3.1.webp';
import post3_2 from '../../../../assets/Home/post/post/post3.2.webp';
import post3_3 from '../../../../assets/Home/post/post/post3.3.webp';

import btn_like from '../../../../assets/Home/post/post_btn/btn_like.webp';
import btn_comment from '../../../../assets/Home/post/post_btn/btn_comment.webp';
import btn_repost from '../../../../assets/Home/post/post_btn/btn_repost.webp';
import btn_send from '../../../../assets/Home/post/post_btn/btnsend.webp';

import like_black from '../../../../assets/Home/post/reaction_icon/like_black.webp';
import hart_blck from '../../../../assets/Home/post/reaction_icon/hart_blck.webp';

import compic1 from '../../../../assets/Home/post/postcompic/compic1.webp';
import compic2 from '../../../../assets/Home/post/postcompic/compic2.webp';

const postsData = [
    {
        id: 1,
        likedBy: "Anura De Silva & Sanura Liyange liked this post",
        commentBy: "Anura De Silva & Sanura Liyange commented this post",
        name: "Maxi Karunaratne",
        position: "HR/IT Designer",
        profilePic: prof1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor diam id elit facilisis, vitae facilisis mi lacinia. Praesent vulputate libero sit amet purus consequat, vitae vulputate velit tristique. Nam ut sem vitae libero convallis interdum.",
        mainImage: post1_0,
        subImages: [post1_2, post1_3, post1_4],
        likes: 257,
        comments: 15,
        reposts: 100
    },
    {
        id: 2,
        likedBy: "Oliver Smith & 5 others liked this post",
        commentBy: "Oliver Smith liked this post",
        name: "Anuradha De Silva",
        position: "UI/UX Designer",
        profilePic: prof2,
        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor diam id elit facilisis, vitae facilisis mi lacinia. Praesent vulputate libero sit amet purus consequat, vitae vulputate velit tristique. Nam ut sem vitae libero convallis interdum",
        mainImage: post2_0,
        subImages: [post2_1, post2_2, post2_3],
        likes: '1.2K',
        comments: 50,
        reposts: '1.1K'
    },
    {
        id: 3,
        likedBy: "Amal De Silva liked this post",
        commentBy: "Amal De Silva liked this post",
        name: "Nuwini Karunarathna",
        position: "Software Engineer",
        profilePic: prof3,
        desc: "Looking for new opportunities in the tech space. If you know any openings for frontend developers, let me know!",
        mainImage: post3_0,
        subImages: [post3_1, post3_2, post3_3],
        likes: 247,
        comments: 12,
        reposts: 110
    }
];

const PostCard = ({ post, darkMode }) => {
    const navigate = useNavigate();
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
            mb: '-10px',
            boxSizing: 'border-box'
        }}>

            {/* THE CARD */}
            <Box sx={{
                width: '100%',
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: darkMode
                    ? '0px 2px 10px rgba(0,0,0,0.4)'
                    : '0px 2px 10px rgba(0,0,0,0.05)',
                boxSizing: 'border-box',
                pt: '20px',
            }}>
                {/* Header: Profile Row */}
                <Box sx={{
                    width: '100%',
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                        onClick={() => navigate('/userprofile')}
                    >
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
                                    • 15 h
                                </Typography>
                            </Box>
                            <Typography sx={{
                                fontFamily: 'Poppins', fontWeight: 400, fontSize: '11px',
                                color: darkMode ? '#aaa' : '#555',
                                lineHeight: '1'
                            }}>
                                {post.position}
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
                                {expanded ? ' See Less' : ' See More'}
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
                                    objectFit: 'cover',
                                    flexShrink: 0
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
                        {post.comments} comments • {post.reposts} reposts
                    </Typography>
                </Box>

                {/* Post Buttons Row */}
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

                {/* Final Footer Row (Liked/Commented by) */}
                <Box sx={{
                    width: '100%',
                    mt: '5px',
                    pt: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {/* Overlapping Avatars */}
                        <Box sx={{ display: 'flex', position: 'relative', width: '45px', height: '30px' }}>
                            <Box
                                component="img"
                                src={compic1}
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    border: darkMode ? '2px solid #1e1e2e' : '2px solid #fff',
                                    position: 'absolute',
                                    left: 0,
                                    zIndex: 1
                                }}
                            />
                            <Box
                                component="img"
                                src={compic2}
                                sx={{
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    border: darkMode ? '2px solid #1e1e2e' : '2px solid #fff',
                                    position: 'absolute',
                                    left: '16px',
                                    zIndex: 0
                                }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: '11px',
                                color: darkMode ? '#fff' : '#333'
                            }}>
                                "{post.commentBy}"
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: '9px',
                                color: darkMode ? '#888' : '#999'
                            }}>
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </Box>
                    </Box>
                    {/* Three dots menu */}
                    <Box sx={{ color: darkMode ? '#888' : '#666', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                        ⋮
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const ForYou = ({ darkMode }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: '649px',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            mt: '10px',
            boxSizing: 'border-box'
        }}>
            {postsData.map(post => (
                <PostCard key={post.id} post={post} darkMode={darkMode} />
            ))}
        </Box>
    );
};

export default ForYou;
