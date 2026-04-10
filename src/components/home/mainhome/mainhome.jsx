import React, { useState, useEffect } from 'react';
import { Box, Drawer } from '@mui/material';
import SearchBar from '../searchbar/searchbar';
import ProfileSidebar from '../proffun/profile';
import Post from '../post/post';
import Feed from '../feed/feed';
import ServiceWidget from '../service/service';
import ServicePage from '../../Service/service';
import ServicesRoot from '../../Service/Services';
import ServiceInfo from '../../Service/servicesinfo/info';
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
import ServicesRightSidebar from '../../Service/rightSideBar/Rightsidebar';
import Notification from '../../notification/notification';
import MainSetting from '../../mainsetting/mainsetting';
import SettingsRightSideBar from '../../mainsetting/rightsidebar/rightSideBar';
import MarketPlace from '../../macketPlace/marcketPlace';
import UserProfile from '../../UserProfile/UserProfile';
import UserDeatil from '../../UserProfile/UserDeatil';
import MyProfile from '../../MyProfile/MyProfile';
import MyDetail from '../../MyProfile/MyDetail';
import ServiceRightSidebar from '../../MyProfile/ServiceRightSidebar';
import CompanyViewAll from '../../MyProfile/CompanyViewAll';

const MainHome = ({ initialTab = 'Home' }) => {
    // darkMode lives here — controls the entire page
    const [darkMode, setDarkMode] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(initialTab); // Start at initialTab
    const [selectedChat, setSelectedChat] = useState(null);
    const [servicesView, setServicesView] = useState('root');
    const [jobsView, setJobsView] = useState('main');
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [showDetailSidebar, setShowDetailSidebar] = useState(false);
    const [currentProfileView, setCurrentProfileView] = useState('profile');

    // Scroll to top whenever the user switches an internal "tab" or "view"
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [activeTab, jobsView, servicesView, selectedJobId, selectedChat]);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleTabChange = (tab) => {
        console.log("Tab changed to:", tab);
        if (tab === 'Jobs') {
            setJobsView('main');
        }
        if (tab === 'Services') {
            setServicesView('root');
        }
        setActiveTab(tab);
        setDrawerOpen(false); // Close drawer on selection (good for mobile)
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
                onTabChange={handleTabChange}
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
                justifyContent: activeTab === 'UserProfilePage' && currentProfileView !== 'profile' ? 'flex-start' : 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                pl: activeTab === 'UserProfilePage' && currentProfileView !== 'profile' ? { md: '40px', lg: '70px' } : { xs: '0', md: '0' }
            }}>

                {/* ── LEFT: Desktop Sidebar ── */}
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    width: { md: '200px', lg: '230px' },
                    flexShrink: 0,
                    position: { md: 'sticky' },
                    top: '20px',
                    zIndex: 10
                }}>
                    <ProfileSidebar
                        darkMode={darkMode}
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                    />
                </Box>

                {/* ── MOBILE DRAWER for Sidebar ── */}
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    disableEnforceFocus
                    disableRestoreFocus
                    sx={{ '& .MuiDrawer-paper': { width: '250px', bgcolor: darkMode ? '#1e1e2e' : '#fff' } }}
                >
                    <ProfileSidebar
                        darkMode={darkMode}
                        isMobile={true}
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                        onTabClick={() => setDrawerOpen(false)}
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
                ) : (activeTab === 'Settings' || activeTab === 'Setting') ? (
                    <Box sx={{
                        display: 'flex',
                        gap: '30px',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <MainSetting darkMode={darkMode} onToggle={() => setDarkMode(prev => !prev)} />
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            gap: '20px',
                            width: { md: '300px', lg: '372px' },
                            flexShrink: 0,
                        }}>
                            <SettingsRightSideBar darkMode={darkMode} />
                        </Box>
                    </Box>
                ) : activeTab === 'My Network' ? (
                    <Box sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '10px', md: '20px', lg: '20px' },
                        alignItems: 'flex-start',
                        width: '100%',
                    }}>
                        <Box sx={{
                            flex: 1,
                            minWidth: 0,
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
                            minWidth: { md: '260px', lg: '300px' },
                            flexShrink: 0,
                            position: 'sticky',
                            top: '20px'
                        }}>
                            <Feed darkMode={darkMode} />
                            <CatchUp darkMode={darkMode} />
                        </Box>
                    </Box>
                ) : activeTab === 'Services' ? (
                    <Box sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        display: 'flex',
                        width: '100%',
                        gap: '20px',
                    }}>
                        <Box sx={{
                            flexGrow: 1,
                            minWidth: 0,
                            maxWidth: '100%',
                            display: 'flex',
                            flexDirection: servicesView === 'info' ? { xs: 'column', md: 'row' } : 'row',
                            gap: servicesView === 'info' ? { xs: '15px', md: '20px' } : '0px',
                            transition: 'all 0.3s ease'
                        }}>
                            {(() => {
                                switch (servicesView) {
                                    case 'root':
                                        return (
                                            <Box sx={{ maxWidth: { xs: '100%', md: '706px' }, width: '100%' }}>
                                                <ServicesRoot
                                                    darkMode={darkMode}
                                                    onCategoryClick={() => setServicesView('detail')}
                                                    onViewDetails={() => setServicesView('info')}
                                                    onBack={() => setActiveTab('Home')}
                                                />
                                            </Box>
                                        );
                                    case 'detail':
                                        return (
                                            <Box sx={{ maxWidth: { xs: '100%', md: '706px' }, width: '100%' }}>
                                                <ServicePage
                                                    darkMode={darkMode}
                                                    onBack={() => setServicesView('root')}
                                                    onViewDetails={() => setServicesView('info')}
                                                />
                                            </Box>
                                        );
                                    case 'info':
                                        return (
                                            <>
                                                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                                    <ServicePage
                                                        darkMode={darkMode}
                                                        onBack={() => setServicesView('root')}
                                                        onViewDetails={() => setServicesView('info')}
                                                        isSplit={true}
                                                    />
                                                </Box>
                                                <ServiceInfo
                                                    darkMode={darkMode}
                                                    onBack={() => setServicesView('detail')}
                                                />
                                            </>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </Box>

                        {/* ── RIGHT SIDEBAR ── */}
                        {servicesView !== 'info' && (
                            <Box sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                gap: '20px',
                                width: { md: '300px', lg: '372px' },
                                flexShrink: 0,
                            }}>
                                <ServicesRightSidebar darkMode={darkMode} />
                            </Box>
                        )}
                    </Box>
                ) : activeTab === 'Marketplace' ? (
                    <Box sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '20px',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                        overflow: 'hidden',
                    }}>
                        <MarketPlace darkMode={darkMode} onTabChange={setActiveTab} />
                    </Box>
                ) : activeTab === 'Jobs' ? (
                    <Box sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '20px',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                        overflow: 'hidden',
                    }}>
                        <Jobs
                            darkMode={darkMode}
                            onViewChange={setJobsView}
                            forceView={jobsView}
                            onSelectionChange={setSelectedJobId}
                            selectedJobId={selectedJobId}
                            onBack={() => setActiveTab('Home')}
                        />

                        {activeTab === 'Jobs' && jobsView !== 'apply' && jobsView !== 'apply-internship' && jobsView !== 'company_profile' && !selectedJobId && (
                            <Box sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                gap: '20px',
                                width: { md: '300px', lg: '372px' },
                                flexShrink: 0,
                            }}>
                                {jobsView === 'main' ? (
                                    <>
                                        <Feed darkMode={darkMode} />
                                        <ServiceWidget darkMode={darkMode} />
                                    </>
                                ) : (
                                    <>
                                        <FeaturedJobs darkMode={darkMode} />
                                        <TopRecruits darkMode={darkMode} />
                                    </>
                                )}
                            </Box>
                        )}
                    </Box>
                ) : activeTab === 'Notifications' ? (
                    <Box sx={{
                        display: 'flex',
                        gap: '30px',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        <Notification darkMode={darkMode} />
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            gap: '20px',
                            width: { md: '300px', lg: '372px' },
                            flexShrink: 0,
                        }}>
                            <Feed darkMode={darkMode} />
                            <ServiceWidget darkMode={darkMode} />
                        </Box>
                    </Box>
                ) : activeTab === 'Profile' ? (
                    <>
                        {/* ── CENTER: My Profile ── */}
                        <Box sx={{
                            width: '100%',
                            maxWidth: { xs: '100%', md: '580px', lg: '706px' },
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            transition: 'all 0.3s ease'
                        }}>
                            <MyProfile darkMode={darkMode} onBack={() => setActiveTab('Home')} onViewChange={setCurrentProfileView} />
                        </Box>

                        {/* ── RIGHT Side ── */}
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            gap: '20px',
                            width: currentProfileView === 'company-view-all' ? { md: '580px', lg: '706px' } : { md: '300px', lg: '372px' },
                            flexShrink: 0,
                            position: { md: 'sticky' },
                            top: '20px'
                        }}>
                            {currentProfileView === 'company-view-all' ? (
                                <CompanyViewAll darkMode={darkMode} onCancel={() => setCurrentProfileView('profile')} />
                            ) : currentProfileView === 'service-about' || currentProfileView === 'activity-section' ? (
                                <ServiceRightSidebar darkMode={darkMode} />
                            ) : (
                                <MyDetail darkMode={darkMode} />
                            )}
                        </Box>
                    </>
                ) : activeTab === 'UserProfilePage' ? (
                    <>
                        {/* ── CENTER: User Profile ── */}
                        <Box sx={{
                            width: '100%',
                            maxWidth: currentProfileView === 'profile' ? { xs: '100%', md: '580px', lg: '706px' } : '701px',
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            transition: 'all 0.3s ease'
                        }}>
                            <UserProfile
                                darkMode={darkMode}
                                onNameClick={() => setShowDetailSidebar(!showDetailSidebar)}
                                onViewChange={setCurrentProfileView}
                            />
                        </Box>

                        {/* ── RIGHT: Feed & Service (or UserDetail) — Hidden in social views ── */}
                        {currentProfileView === 'profile' && (
                            <Box sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                gap: '20px',
                                width: { md: '300px', lg: '372px' },
                                flexShrink: 0,
                                position: { md: 'sticky' },
                                top: '20px'
                            }}>
                                {showDetailSidebar ? (
                                    <UserDeatil darkMode={darkMode} />
                                ) : (
                                    <>
                                        <Feed darkMode={darkMode} />
                                        <ServiceWidget darkMode={darkMode} />
                                    </>
                                )}
                            </Box>
                        )}
                    </>
                ) : (

                    <>
                        {/* ── CENTER: Main Content Feed ── */}
                        <Box sx={{
                            width: '100%',
                            maxWidth: { xs: '100%', md: '580px', lg: '706px' },
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
                            <ServiceWidget darkMode={darkMode} />
                        </Box>
                    </>
                )}

            </Box>
        </Box >
    );
};

export default MainHome;

