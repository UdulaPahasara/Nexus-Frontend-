import React from 'react';
import { Box, Typography } from '@mui/material';

// Import local assets
import botWebp from '../../../assets/leaderpage/aisection/bot.webp';
import jobBagWebp from '../../../assets/leaderpage/aisection/job-bag.webp';
import linkindWebp from '../../../assets/leaderpage/aisection/linkind.webp';
import rectangleWebp from '../../../assets/leaderpage/aisection/Rectangle.webp';
import solarUserWebp from '../../../assets/leaderpage/aisection/solar-user.webp';

const AITool = () => {
    // We dynamically calculate height constraints based on Figma values provided
    {/*AI Tool Section */ }
    const cardData = {
        interviewBuddy: {
            title: "INTERVIEW BUDDY",
            desc: "Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis.",
            width: '266px',
            height: '532px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px #00000040',
            hoverAction: true,
            imgBoxSx: {
                background: 'linear-gradient(180deg, #00FF91 0%, #00D378 46.62%, #009152 100%)',
                p: '14.5px', // Exact padding mapping for internal elements
                flexGrow: 1, // Allow this box to fill the height available in the 532px container
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            },
            renderBox: () => (

                <>
                    {/* Top Row: Answer Box & Avatars */}
                    <Box sx={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', marginTop: '20px' }}>
                        {/* Suggested Answer Card */}
                        <Box sx={{
                            height: '142px',
                            width: '180px',
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '12px',
                            p: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxSizing: 'border-box'
                        }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '11px', color: '#454545', mb: '6px', textAlign: 'left' }}>
                                SUGGESTED ANSWER ...
                            </Typography>
                            <Box sx={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '10px', color: '#454545', lineHeight: '13px', textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis
                                </Typography>
                            </Box>
                        </Box>

                        {/* Right side avatars */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '37px' }}>
                            {/*box 1 */}
                            <Box sx={{ width: '37px', height: '46px', bgcolor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(12px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                                {/* User 1 */}
                                <Box sx={{ width: '10px', height: '10px', bgcolor: '#fff', borderRadius: '50%', mb: '6px', position: 'relative', '&::after': { content: '""', position: 'absolute', top: '12px', left: '-3px', width: '16px', height: '8px', bgcolor: '#fff', borderRadius: '5px 5px 0 0' } }} />
                            </Box>
                            {/*box 2 */}
                            <Box sx={{ width: '37px', height: '84px', bgcolor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(12px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box', gap: '16px' }}>
                                {/* User 2 & 3 */}
                                <Box sx={{ width: '10px', height: '10px', bgcolor: '#fff', borderRadius: '50%', mb: '6px', position: 'relative', '&::after': { content: '""', position: 'absolute', top: '12px', left: '-3px', width: '16px', height: '8px', bgcolor: '#fff', borderRadius: '5px 5px 0 0' } }} />
                                <Box sx={{ width: '10px', height: '10px', bgcolor: '#fff', borderRadius: '50%', mb: '6px', position: 'relative', '&::after': { content: '""', position: 'absolute', top: '12px', left: '-3px', width: '16px', height: '8px', bgcolor: '#fff', borderRadius: '5px 5px 0 0' } }} />
                            </Box>
                        </Box>
                    </Box>

                    {/* Bottom Row: Main User Avatar */}
                    {/* Applying exact bounds requested by user: 227x203  */}
                    <Box sx={{
                        width: '227px',
                        height: '203px',
                        flexShrink: 0,
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.4)',
                        paddingTop: '20px',
                        paddingRight: '32px',
                        paddingBottom: '20px',
                        paddingLeft: '32px',
                        marginBottom: '20px',
                        boxSizing: 'border-box',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box component="img" src={solarUserWebp} alt="Solar User" sx={{ width: '162px', height: '162px', objectFit: 'contain' }} />
                    </Box>

                </>
            )
        },
        aiRoadmap: {
            title: "AI ROADMAP",
            desc: "Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis.",
            width: '266px',
            height: '259px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px #00000040',
            imgBoxSx: {
                background: 'linear-gradient(180deg, #00FF91 0%, #00D378 46.62%, #009152 100%)',
                p: '15px'
            },
            renderBox: () => (
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                }}>
                    <Box component="img" src={botWebp} alt="AI Roadmap" sx={{ width: '82px', height: '82px', objectFit: 'contain' }} />
                </Box>
            )
        },
        portfolio: {
            title: "AI POWERD PORTFOLIO WEBSITE",
            desc: "Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis.",
            width: '327px',
            height: '259px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px #00000040',
            imgBoxSx: {
                background: 'linear-gradient(180deg, #00FF91 0%, #00D378 46.62%, #009152 100%)',
                p: '15px'
            },
            renderBox: () => (
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    padding: '12px',
                    boxSizing: 'border-box'
                }}>
                    {/* Top slim bar */}
                    <Box sx={{
                        width: '100%',
                        height: '24px',
                        borderRadius: '6px',
                        bgcolor: 'rgba(255, 255, 255, 0.5)',
                        flexShrink: 0
                    }} />

                    {/* Two bottom panels */}
                    <Box sx={{
                        display: 'flex',
                        gap: '10px',
                        flexGrow: 1,
                        width: '100%'
                    }}>
                        <Box sx={{
                            flex: 1,
                            borderRadius: '8px',
                            bgcolor: 'rgba(255, 255, 255, 0.5)'
                        }} />
                        <Box sx={{
                            flex: 1,
                            borderRadius: '8px',
                            bgcolor: 'rgba(255, 255, 255, 0.5)'
                        }} />
                    </Box>
                </Box>
            )
        },
        autoApply: {
            title: "AUTO APPLY",
            desc: "Lorem ipsum dolor sit amet consectetur. Odio consequa",
            width: '266px',
            height: '259px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px #00000040',
            imgBoxSx: {
                background: 'linear-gradient(180deg, #00FF91 0%, #00D378 46.62%, #009152 100%)',
                p: '15px'
            },
            renderBox: () => (
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '10px',
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '14px',
                    padding: '14px',
                    boxSizing: 'border-box'
                }}>
                    {/* Left dashed box */}
                    <Box sx={{
                        flex: 1,
                        border: '1.5px dashed rgba(255, 255, 255, 0.8)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15V4M12 4L7 9M12 4L17 9M6 15V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V15" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Box>

                    {/* Right content */}
                    <Box sx={{
                        width: '54px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                        {/* User profile icon container */}
                        <Box sx={{
                            height: '60px',
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '4px'
                        }}>
                            {/* Head */}
                            <Box sx={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                bgcolor: 'rgba(255, 255, 255, 0.8)'
                            }} />
                            {/* Body */}
                            <Box sx={{
                                width: '20px',
                                height: '9px',
                                borderRadius: '8px',
                                bgcolor: 'rgba(255, 255, 255, 0.8)'
                            }} />
                        </Box>

                        {/* Lines */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <Box sx={{ width: '20px', height: '5px', borderRadius: '4px', bgcolor: '#fff' }} />
                            <Box sx={{ width: '42px', height: '5px', borderRadius: '4px', bgcolor: '#fff' }} />
                            <Box sx={{ width: '42px', height: '5px', borderRadius: '4px', bgcolor: '#fff' }} />
                        </Box>
                    </Box>
                </Box>
            )
        },
        practice: {
            title: "AI INTERVIEW PRACTICE",
            desc: "Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis",
            width: '266px',
            height: '254px',
            top: '1194px',
            left: '429px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px #00000040',
            imgBoxSx: {
                background: 'linear-gradient(180deg, #00FF91 0%, #00D378 46.62%, #009152 100%)',
                p: '14px'
            },
            renderBox: () => (
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '8px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                }}>
                    {/* Left Box */}
                    <Box sx={{
                        flex: 1,
                        bgcolor: 'rgba(255, 255, 255, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        borderRadius: '8px',
                        p: '10px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '12px', color: '#454545', mb: '8px', textAlign: 'left' }}>
                            Jhene Week
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', mb: '10px' }}>
                            <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                            <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                            <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                            <Box sx={{ width: '70%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', mb: '10px' }}>
                            <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '2px' }}>
                                <Box sx={{ width: '50%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                                <Box sx={{ width: '50%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                            </Box>

                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <Box sx={{ width: '40%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                            <Box sx={{ width: '40%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                        </Box>
                    </Box>

                    {/* Right Column */}
                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        {/* Right Top */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            height: '55px'
                        }}>
                            {/* Lines */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, ml: '4px' }}>
                                <Box sx={{ width: '22px', height: '4px', bgcolor: '#fff', borderRadius: '4px' }} />
                                <Box sx={{ width: '32px', height: '4px', bgcolor: '#fff', borderRadius: '4px' }} />
                                <Box sx={{ width: '16px', height: '4px', bgcolor: '#fff', borderRadius: '4px' }} />
                            </Box>

                            {/* Avatar Box */}
                            <Box sx={{
                                width: '37px',
                                height: '46px',
                                bgcolor: 'rgba(255, 255, 255, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '3px',
                                mr: '2px' // slight adjustment
                            }}>
                                <Box sx={{ width: '8.33px', height: '8.33px', borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.8)' }} />
                                <Box sx={{ width: '16.67px', height: '9.38px', borderRadius: '8px', bgcolor: 'rgba(255, 255, 255, 0.8)' }} />
                            </Box>
                        </Box>

                        {/* Right Bottom */}
                        <Box sx={{
                            flex: 1,
                            bgcolor: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            py: '10px'
                        }}>
                            {/* Avatar 1 */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                                <Box sx={{ width: '8.33px', height: '8.33px', borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.8)' }} />
                                <Box sx={{ width: '16.67px', height: '9.38px', borderRadius: '5px', bgcolor: 'rgba(255, 255, 255, 0.8)' }} />
                                <Box sx={{ width: '16px', height: '5px', borderRadius: '100px', bgcolor: '#fff', mt: '2px' }} />
                            </Box>

                            {/* Avatar 2 */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                                <Box sx={{ width: '8.33px', height: '8.33px', borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.8)' }} />
                                <Box sx={{ width: '16.67px', height: '9.38px', borderRadius: '8px', bgcolor: 'rgba(255, 255, 255, 0.8)' }} />
                                <Box sx={{ width: '16px', height: '5px', borderRadius: '100px', bgcolor: '#fff', mt: '2px' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )
        },
        linkedin: {
            title: "LINKEDIN PROFILE AGENT",
            desc: "Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis.",
            width: '266px',
            height: '254px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px #00000040',
            imgBoxSx: {
                background: 'linear-gradient(180deg, #00FF91 0%, #00D378 46.62%, #009152 100%)',
                p: '15px'
            },
            renderBox: () => (
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '8px',
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: '16px',
                    gap: '14px',
                    boxSizing: 'border-box'
                }}>
                    {/* Logo Box */}
                    <Box sx={{
                        width: '58px',
                        height: '58px',
                        borderRadius: '12px',
                        bgcolor: '#A3F5CA', // Light mint green
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0
                    }}>
                        <Typography sx={{
                            color: '#34CA83', // Darker green for text
                            fontSize: '34px',
                            fontWeight: 800,
                            fontFamily: 'Poppins',
                            letterSpacing: '-1.5px',
                            lineHeight: 1,
                            mt: '2px' // slight adjustment for visual centering
                        }}>
                            in
                        </Typography>
                    </Box>

                    {/* Lines Column */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '100%'
                    }}>
                        <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px', mb: '5px' }} />
                        <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px', mb: '5px' }} />
                        <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px', mb: '5px' }} />
                        <Box sx={{ width: '60%', height: '5px', bgcolor: '#fff', borderRadius: '100px', mb: '12px' }} />
                        <Box sx={{ width: '100%', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                    </Box>
                </Box>
            )
        },
        jobReady: {
            title: "JOB READY BUNDLE",
            desc: "Lorem ipsum dolor sit amet consectetur. Odio consequat faucibus et convallis.",
            width: '266px',
            height: '254px',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px 0px #00000040',
            imgBoxSx: {
                background: 'linear-gradient(180deg, #00FF91 0%, #00D378 46.62%, #009152 100%)',
                p: '15px'
            },
            renderBox: () => (
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '25px',
                    boxSizing: 'border-box'
                }}>
                    {/* Left Icon (Briefcase + Magnifying Glass) */}
                    <Box sx={{
                        width: '86px',
                        height: '86px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0
                    }}>
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52 30V24C52 19.5817 48.4183 16 44 16H34C29.5817 16 26 19.5817 26 24V30" stroke="#A3F5CA" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M64 42V36C64 30.4772 59.5228 26 54 26H24C18.4772 26 14 30.4772 14 36V54C14 59.5228 18.4772 64 24 64H44" stroke="#A3F5CA" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="58" cy="58" r="14" stroke="#A3F5CA" strokeWidth="4.5" />
                            <path d="M68 68L78 78" stroke="#A3F5CA" strokeWidth="4.5" strokeLinecap="round" />
                        </svg>
                    </Box>

                    {/* Right Columns */}
                    <Box sx={{ display: 'flex', gap: '12px' }}>
                        {[1, 2].map((i) => (
                            <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                {/* Avatar Card */}
                                <Box sx={{
                                    width: '38px',
                                    height: '52px',
                                    bgcolor: 'rgba(255, 255, 255, 0.25)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}>
                                    <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.9)' }} />
                                    <Box sx={{ width: '18px', height: '10px', borderRadius: '8px', bgcolor: 'rgba(255, 255, 255, 0.9)' }} />
                                </Box>
                                {/* Lines */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center' }}>
                                    <Box sx={{ width: '18px', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                                    <Box sx={{ width: '36px', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                                    <Box sx={{ width: '36px', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                                    <Box sx={{ width: '36px', height: '5px', bgcolor: '#fff', borderRadius: '100px' }} />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )
        }
    };

    const renderCard = (data) => (
        <Box sx={{
            width: { xs: '100%', md: data.width },
            height: data.height,
            bgcolor: data.background || '#F9F9F9',
            borderRadius: data.borderRadius,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: '15px',
            boxShadow: data.boxShadow || '0px 2px 10px rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
            transition: 'all 0ms linear', // Instant animation duration per request
            cursor: data.hoverAction ? 'pointer' : 'default',
            '&:hover': data.hoverAction ? {
                filter: 'brightness(1.05)'
            } : {}
        }}>
            <Box sx={{
                width: '100%',
                flexGrow: 1,
                background: data.imgBoxSx?.background || 'linear-gradient(180deg, #00FF85 0%, #009950 100%)',
                borderRadius: '6px',
                mb: 1.5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                boxSizing: 'border-box',
                p: data.imgBoxSx?.p || '15px', // Pass dynamic padding if requested 
                ...(data.imgBoxSx || {})
            }}>
                {data.renderBox ? (
                    data.renderBox()
                ) : data.img ? (
                    <Box component="img" src={data.img} alt={data.title} sx={{
                        width: data.imgSx?.width || '100%',
                        height: data.imgSx?.height || '100%',
                        objectFit: 'contain'
                    }} />
                ) : (
                    <Typography sx={{ color: '#fff', fontSize: '10px', fontWeight: 600 }}>[Graphic Placeholder]</Typography>
                )}
            </Box>
            <Typography sx={{
                width: data.title === "INTERVIEW BUDDY" ? '148px' : data.title === "AI ROADMAP" ? '121px' : 'auto',
                maxWidth: '100%',
                fontFamily: 'Poppins',
                fontWeight: (data.title === "AUTO APPLY" || data.title === "AI INTERVIEW PRACTICE") ? 700 : 600,
                fontSize: data.title === "AI ROADMAP" ? '16px' : (data.title === "AUTO APPLY" || data.title === "AI INTERVIEW PRACTICE") ? '18px' : '16px',
                color: '#000',
                mb: 0.5,
                textAlign: 'center',
                lineHeight: data.title === "AI ROADMAP" ? '30px' : (data.title === "AUTO APPLY" || data.title === "AI INTERVIEW PRACTICE") ? '1.2' : '30px',
                letterSpacing: '0%'
            }}>
                {data.title}
            </Typography>
            <Typography sx={{
                width: '100%',
                maxWidth: data.title === "AI POWERD PORTFOLIO WEBSITE" ? '280px' : '236px',
                height: data.title === "INTERVIEW BUDDY" ? 'auto' : 'auto',
                minHeight: data.title === "INTERVIEW BUDDY" ? '56px' : 'auto',
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '15px',
                color: '#000',
                textAlign: 'center',
                lineHeight: 1.2,
                letterSpacing: '0%'
            }}>
                {data.desc}
            </Typography>
        </Box>
    );

    return (
        <Box sx={{
            width: '100%',
            py: { xs: 4, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: '#ffffff'
        }}>
            {/* AI Tools Badge Header */}
            <Box sx={{
                width: '88px',
                height: '25px',
                borderRadius: '1000px',
                bgcolor: '#EBEBEB',
                border: '1px solid rgba(255, 255, 255, 0.25)', // #FFFFFF40
                backdropFilter: 'blur(19.2px)',
                paddingTop: '3px',
                paddingRight: '32px',
                paddingBottom: '3px',
                paddingLeft: '17px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxSizing: 'border-box',
                mb: '20px', // Spacing below badge before main title
                position: 'relative' // To allow placing the chevron icon perfectly
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins', // Using default sans-serif to match mockup
                    fontWeight: 600,
                    fontSize: '11px',
                    color: '#888',
                    letterSpacing: '0.5px',
                    whiteSpace: 'nowrap'
                }}>
                    AI TOOLS
                </Typography>

                {/* Arrow icon > */}
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '14px' }}>
                    <path d="M1 9L5 5L1 1" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Box>

            {/* Header section matching 691x30 dimensions from screen */}
            <Box sx={{
                width: '691px',
                maxWidth: '90%',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: '40px'
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: '20px',
                    color: '#000',
                    letterSpacing: '1px'
                }}>
                    LOREM IPSUM LOREM LIP
                </Typography>
            </Box>

            {/* CSS Grid Flexbox Implementation */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row', // Force row to match screenshot
                flexWrap: 'wrap',
                gap: { xs: '20px', lg: '18px' },
                width: '100%',
                maxWidth: '1225px', // 1185px content
                mx: 'auto',
                justifyContent: 'center',
                alignItems: 'flex-start', // Align cards to the top
                px: '20px',
                boxSizing: 'border-box'
            }}>

                {/* Column 1 - Tall Card */}
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {renderCard(cardData.interviewBuddy)}
                </Box>

                {/* Column 2 */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {renderCard(cardData.aiRoadmap)}
                    {renderCard(cardData.practice)}
                </Box>

                {/* Column 3 */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {renderCard(cardData.portfolio)}
                    {renderCard(cardData.linkedin)}
                </Box>

                {/* Column 4 */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {renderCard(cardData.autoApply)}
                    <Box sx={{ ml: { xs: 0, lg: 0 } }}> {/* Removing the negative margin that was causing issues on laptop */}
                        {renderCard(cardData.jobReady)}
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default AITool;
