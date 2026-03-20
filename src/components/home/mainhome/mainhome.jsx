import React, { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import SearchBar from '../searchbar/searchbar';
import ProfileSidebar from '../proffun/profile';
import Post from '../post/post';
import Feed from '../feed/feed';
import Service from '../service/service';
import ForYou from './foryou/foryou';
import News from './news/news';
import FilterBar from '../../chat section/chatfilterbar/filterbar';
import NoChat from '../../chat section/chatfilterbar/nochat';
import MessageArea from '../../chat section/messagingarea/messageArea';
import Invitation from '../../mynetwork/invitation';
import ManageNetwork from '../../mynetwork/managenetwork';
import Follow from '../../mynetwork/follow';
import CatchUp from '../../mynetwork/chatup';
import Jobs from '../../jobs/jobs';
import FeaturedJobs from '../../jobs/partime/rightsidebar/featuredjob';
import TopRecruits from '../../jobs/partime/rightsidebar/toprecruiers';



const MainHome = () => {
    // darkMode lives here — controls the entire page
    const [darkMode, setDarkMode] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home'); // Start at Home
    const [selectedChat, setSelectedChat] = useState(null);

    const toggleDrawer = (open) => (event) => {
        // ... (lines 15-31 omitted for brevity but they are same)
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            bgcolor: darkMode ? '#121212' : '#f5f5f5',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box',
            transition: 'background 0.25s'
        }}>
            {/* ── TOP: Search Bar ── */}
            <SearchBar
                darkMode={darkMode}
                onToggle={() => setDarkMode(prev => !prev)}
                onMenuClick={() => setDrawerOpen(true)}
                activeTab={activeTab === 'forYou' || activeTab === 'news' ? activeTab : 'forYou'}
                onTabChange={setActiveTab}
            />

            {/* ── BODY: Responsive Container ── */}

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flex: 1,
                width: '100%',
                maxWidth: '1440px',
                mx: 'auto',
                gap: { xs: '15px', md: '20px', lg: '30px' },
                px: { xs: '10px', sm: '15px', md: '20px' },
                pt: '20px',
                pb: '30px',
                boxSizing: 'border-box',
                position: 'relative',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' }
            }}>

                {/* ── LEFT: Desktop Sidebar ── */}
                <Box sx={{
                    display: { xs: 'none', lg: 'block' },
                    width: '230px',
                    flexShrink: 0,
                    position: { lg: 'sticky' },
                    top: '20px'
                }}>
                    <ProfileSidebar
                        darkMode={darkMode}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                </Box>

                {/* ── MOBILE DRAWER for Sidebar ── */}
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    sx={{ '& .MuiDrawer-paper': { width: '250px', bgcolor: darkMode ? '#1e1e2e' : '#fff' } }}
                >
                    <ProfileSidebar
                        darkMode={darkMode}
                        isMobile
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                </Drawer>

                {/* ── CENTER & RIGHT Content ── */}
                {activeTab === 'Messages' ? (
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '0px', md: '12px' },
                        alignItems: 'flex-start',
                        width: '100%',
                        overflow: 'hidden',
                    }}>
                        {/* Chat list — full width on mobile, fixed width on desktop */}
                        {/* On mobile: show only if no chat selected, hide when chat is open */}
                        <Box sx={{
                            display: { xs: selectedChat ? 'none' : 'flex', md: 'flex' },
                            flexDirection: 'column',
                            width: { xs: '100%', md: 'auto' },
                            flexShrink: 0,
                        }}>
                            <FilterBar darkMode={darkMode} onChatSelect={() => setSelectedChat(true)} />
                        </Box>

                        {/* Chat area — full width on mobile, fills remaining space on desktop */}
                        {selectedChat ? (
                            <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' }, display: 'flex', flexDirection: 'column' }}>
                                {/* Back button — mobile only */}
                                <Box
                                    sx={{
                                        display: { xs: 'flex', md: 'none' },
                                        alignItems: 'center',
                                        gap: '8px',
                                        p: '10px 14px',
                                        cursor: 'pointer',
                                        bgcolor: darkMode ? '#1e1e2e' : '#fff',
                                        borderRadius: '12px',
                                        mb: '8px',
                                        boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                                    }}
                                    onClick={() => setSelectedChat(null)}
                                >
                                    <Box sx={{ fontSize: '18px', lineHeight: 1 }}>←</Box>
                                    <Box sx={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 500, color: darkMode ? '#fff' : '#333' }}>
                                        Back to Chats
                                    </Box>
                                </Box>
                                <MessageArea darkMode={darkMode} />
                            </Box>
                        ) : (
                            <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}>
                                <NoChat darkMode={darkMode} />
                            </Box>
                        )}
                    </Box>
                ) : activeTab === 'My Network' ? (
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '10px', md: '10px', lg: '10px' },
                        alignItems: 'flex-start',
                        width: '100%',
                    }}>
                        <Box sx={{
                            width: '100%',
                            maxWidth: { xs: '100%', md: '650px', lg: '701px' },
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}>
                            <Invitation darkMode={darkMode} />
                            <ManageNetwork darkMode={darkMode} />
                            <Follow darkMode={darkMode} />
                        </Box>

                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            gap: '10px',
                            width: { md: '300px', lg: '372px' },
                            flexShrink: 0,
                            position: { md: 'sticky' },
                            top: '20px'
                        }}>
                            <Feed darkMode={darkMode} />
                            <CatchUp darkMode={darkMode} />
                        </Box>
                    </Box>
                ) : activeTab === 'Jobs' ? (
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '20px',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <Jobs darkMode={darkMode} />
                        {/* ── RIGHT: Feed & Service for Jobs view ── */}
                        <Box sx={{
                            display: { xs: 'none', lg: 'flex' },
                            flexDirection: 'column',
                            gap: '20px',
                            width: '372px',
                            flexShrink: 0,
                        }}>
                            <FeaturedJobs darkMode={darkMode} />
                            <TopRecruits darkMode={darkMode} />
                        </Box>
                    </Box>
                ) : (
                    <>
                        {/* ── CENTER: Main Content Feed ── */}
                        <Box sx={{
                            width: '100%',
                            maxWidth: { xs: '100%', md: '650px', lg: '706px' },
                            flexGrow: 1,
                            bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#fff',
                            borderRadius: '15px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                            pt: '20px',
                            pb: '20px',
                            boxSizing: 'border-box',
                            transition: 'all 0.3s ease',
                            overflowY: 'auto',
                            minHeight: { xs: 'auto', md: '1990px' },
                            maxHeight: { xs: 'none', md: '1990px' },
                            '&::-webkit-scrollbar': { display: 'none' },
                            'msOverflowStyle': 'none',
                            'scrollbarWidth': 'none',
                            boxShadow: darkMode
                                ? '0px 4px 20px rgba(0,0,0,0.5)'
                                : '0px 4px 20px rgba(0,0,0,0.05)'
                        }}>
                            <Post darkMode={darkMode} />
                            {activeTab === 'news' ? (
                                <News darkMode={darkMode} />
                            ) : (
                                <ForYou darkMode={darkMode} />
                            )}
                        </Box>

                        {/* ── RIGHT: Feed & Service ── */}
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            gap: '20px',
                            width: { md: '300px', lg: '372px' },
                            flexShrink: 0,
                            position: { md: 'sticky' },
                            top: '20px'
                        }}>
                            <Feed darkMode={darkMode} />
                            <Service darkMode={darkMode} />
                        </Box>
                    </>
                )}

            </Box>
        </Box>
    );
};

export default MainHome;

