import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import PartTime from './partime/parttime';

// Header icons
import fulltimeIcon from '../../assets/Home/sevice/fulltime.webp';
import parttimeIcon from '../../assets/Home/sevice/parttime.webp';
import freelanceIcon from '../../assets/Home/sevice/freelance.webp';
import cvIcon from '../../assets/Home/sevice/cv.webp';
import internshipIcon from '../../assets/Home/sevice/internship.webp';
import volunteerIcon from '../../assets/Home/sevice/volunteer.webp';

// Company icons
import comp1 from '../../assets/jobs/company1.webp';
import comp2 from '../../assets/jobs/company2.webp';
import comp3 from '../../assets/jobs/company3.webp';
import comp4 from '../../assets/jobs/company4.webp';
import comp5 from '../../assets/jobs/company5.webp';
import comp6 from '../../assets/jobs/company6.webp';
import comp7 from '../../assets/jobs/company7.webp';
import ApplyJob from './applyjob/applyjob';
import FullTime from './fulltimejob/fulltime';
import Freelance from './freelance/freelance';

// Reaction icon for heart
import heartIcon from '../../assets/Home/post/reaction_icon/hart_blck.webp';

const HEADER_BUTTONS = [
    { label: 'Fulltime', icon: fulltimeIcon },
    { label: 'PartTime', icon: parttimeIcon },
    { label: 'Freelance', icon: freelanceIcon },
    { label: 'CV', icon: cvIcon },
    { label: 'Internship', icon: internshipIcon },
    { label: 'Volunteer', icon: volunteerIcon },
];

const PILL_FILTERS = [
    'All', 'Favorites', 'Full time', 'Part time', 'Internship', 'Volunteers', 'Freelance'
];

const JOB_DATA = [
    { id: 1, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '2 hours ago', icon: comp1, type: 'Part-Time' },
    { id: 2, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp2, type: 'Part-Time' },
    { id: 3, title: 'UI/UX Designer (Part-Time)', company: 'Pixel Studio Pvt Ltd', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp3, type: 'Part-Time' },
    { id: 4, title: 'Junior Frontend Developer', company: 'CreativeEdge', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp4, type: 'Part-Time' },
    { id: 5, title: 'Content Writer', company: 'WordNest', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp5, type: 'Part-Time' },
    { id: 6, title: 'Content Writer', company: 'WordNest', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp6, type: 'Part-Time' },
    { id: 7, title: 'Content Writer', company: 'WordNest', location: 'Colombo, Sri Lanka', time: '3 hours ago', icon: comp7, type: 'Part-Time' },
];

const JobCard = ({ job, darkMode }) => (
    <Box sx={{
        width: '100%',
        maxWidth: '661px',
        height: 'auto',
        minHeight: '85px',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: 'space-between',
        gap: { xs: '12px', sm: '10px' },
        py: '16px',
        borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
        boxSizing: 'border-box'
    }}>
        <Box sx={{ display: 'flex', gap: { xs: '10px', sm: '15px' }, alignItems: 'flex-start', width: '100%' }}>
            <Box
                component="img"
                src={job.icon}
                sx={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                    mt: '2px',
                    flexShrink: 0
                }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '15px',
                        color: darkMode ? '#fff' : '#000',
                        lineHeight: 1.2
                    }}>
                        {job.title}
                    </Typography>
                    <Box sx={{
                        bgcolor: '#8ED2A4', // Matching the muted green background
                        color: '#000',      // Dark text
                        px: '8px',
                        py: '2px',
                        borderRadius: '12px',
                        fontSize: '10px',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {job.type}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '12px',
                        color: darkMode ? '#888' : '#777',
                        lineHeight: 1.2
                    }}>
                        {job.company}
                    </Typography>
                    <Box sx={{ width: '14px', height: '14px', bgcolor: '#0077B5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>
                        ✓
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: darkMode ? '#888' : '#777',
                        lineHeight: 1.2
                    }}>
                        • {job.location}
                    </Typography>
                </Box>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: darkMode ? '#aaa' : '#999',
                    mt: '2px',
                    lineHeight: 1.3
                }}>
                    Lorem ipsum dolor sit amet consectetur ipsum dolor sit
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', sm: '15px' }, mt: '6px', flexWrap: 'wrap' }}>
                    <Typography sx={{ fontSize: '11px', color: '#999', fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>{job.time}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ width: '14px', height: '14px', bgcolor: 'rgba(0, 231, 131, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 231, 131, 1)', fontSize: '10px' }}>✓</Box>
                        <Typography sx={{ fontSize: '11px', color: '#888', fontWeight: 500, fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>Easy Apply</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Box sx={{ width: '14px', height: '14px', bgcolor: 'rgba(0, 231, 131, 1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>✓</Box>
                        <Typography sx={{ fontSize: '11px', color: '#888', fontWeight: 500, fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>Already Applied</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'space-between', sm: 'flex-end' }, gap: '15px', mt: { xs: '8px', sm: '10px' }, width: { xs: '100%', sm: 'auto' }, flexShrink: 0 }}>
            <Button sx={{
                flex: { xs: 1, sm: 'none' },
                minWidth: '70px',
                height: '30px',
                bgcolor: 'rgba(0, 231, 131, 1)',
                color: '#fff',
                borderRadius: '20px',
                textTransform: 'none',
                fontFamily: 'Poppins',
                fontSize: '13px',
                fontWeight: 600,
                px: '16px',
                boxShadow: 'none',
                '&:hover': { bgcolor: 'rgba(0, 201, 111, 1)', boxShadow: 'none' }
            }}>
                Apply
            </Button>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "#ddd" : "#111"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer', transition: 'all 0.2s', marginLeft: '4px', marginTop: '2px' }}>
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </Box>
    </Box>
);

const Jobs = ({ darkMode, onViewChange, forceView, onSelectionChange, selectedJobId }) => {
    const [activePill, setActivePill] = useState('All');
    const [view, setViewState] = useState('main');

    useEffect(() => {
        if (forceView) {
            setViewState(forceView);
        }
    }, [forceView]);

    const setView = (newView) => {
        setViewState(newView);
        if (onViewChange) onViewChange(newView);
        // Reset selection if going away from parttime view
        if (newView !== 'parttime' && onSelectionChange) onSelectionChange(null);
    };

    if (view === 'parttime') {
        return <PartTime
            darkMode={darkMode}
            onBack={() => setView('main')}
            onSelectionChange={onSelectionChange}
            onApply={() => setView('apply')}
            selectedJobId={selectedJobId}
        />;
    }

    if (view === 'fulltime') {
        return <FullTime
            darkMode={darkMode}
            onBack={() => setView('main')}
            onSelectionChange={onSelectionChange}
            onApply={() => setView('apply')}
            selectedJobId={selectedJobId}
        />;
    }

    if (view === 'freelance') {
        return <Freelance
            darkMode={darkMode}
            onBack={() => setView('main')}
            onSelectionChange={onSelectionChange}
            onApply={() => setView('apply')}
            selectedJobId={selectedJobId}
        />;
    }

    if (view === 'apply') {
        return <ApplyJob darkMode={darkMode} onBack={() => setView('parttime')} />;
    }

    return (
        <Box sx={{
            width: '100%',
            maxWidth: '706px',
            minHeight: { xs: '100vh', md: '812px' },
            height: { xs: 'auto', md: '812px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            overflow: { xs: 'visible', md: 'hidden' },
            position: 'relative',
            boxShadow: darkMode
                ? '0px 4px 20px rgba(0,0,0,0.5)'
                : '0px 4px 20px rgba(0,0,0,0.05)',
            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)'
        }}>
            {/* Header Buttons Section */}
            <Box sx={{
                width: '100%',
                mt: '28px',
                px: { xs: '10px', sm: '30px', md: '40px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'flex-start', sm: 'space-between' },
                gap: { xs: '15px', sm: '49px' },
                overflowX: 'auto',
                boxSizing: 'border-box',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none'
            }}>

                {HEADER_BUTTONS.map((btn) => (
                    <Box
                        key={btn.label}
                        onClick={() => {
                            if (btn.label === 'PartTime') setView('parttime');
                            if (btn.label === 'Fulltime') setView('fulltime');
                            if (btn.label === 'Freelance') setView('freelance');
                        }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            flexShrink: 0
                        }}
                    >
                        <Box
                            component="img"
                            src={btn.icon}
                            sx={{ width: '40px', height: '40px', objectFit: 'contain' }}
                        />
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '11px',
                            fontWeight: 500,
                            color: darkMode ? '#ccc' : '#333'
                        }}>
                            {btn.label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Pill Filters Section */}
            <Box sx={{
                width: '100%',
                mt: '35px',
                px: { xs: '10px', sm: '30px' },
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                overflowX: 'auto',
                boxSizing: 'border-box',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none'
            }}>
                {PILL_FILTERS.map((pill) => (
                    <Box
                        key={pill}
                        onClick={() => {
                            setActivePill(pill);
                            if (pill === 'Part time') setView('parttime');
                            if (pill === 'Full time') setView('fulltime');
                            if (pill === 'Freelance') setView('freelance');
                        }}
                        sx={{
                            px: '15px',
                            py: '4px',
                            borderRadius: '20px',
                            border: '1px solid #333',
                            bgcolor: activePill === pill ? '#000' : 'transparent',
                            color: activePill === pill ? '#fff' : (darkMode ? '#ccc' : '#000'),
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            transition: 'all 0.2s',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                            '&:hover': { bgcolor: activePill === pill ? '#000' : 'rgba(0,0,0,0.05)' }
                        }}
                    >
                        {pill}
                    </Box>
                ))}
            </Box>

            {/* Featured Postings Title */}
            <Typography sx={{
                mt: '30px',
                ml: { xs: '15px', sm: '33px' },
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '20px',
                color: darkMode ? '#fff' : '#000',
                mb: '16px',
                whiteSpace: 'nowrap'
            }}>
                Featured postings
            </Typography>

            {/* Job Listings List */}
            <Box sx={{
                flex: 1,
                overflowY: { xs: 'visible', md: 'auto' },
                px: { xs: '10px', sm: '22.5px' },
                pb: '20px',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none'
            }}>
                {JOB_DATA.map(job => (
                    <JobCard key={job.id} job={job} darkMode={darkMode} />
                ))}
            </Box>
        </Box>
    );
};

export default Jobs;
