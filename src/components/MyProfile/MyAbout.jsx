import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddIcon from '@mui/icons-material/Add';

// Asset imports using fallback logos based on the available directory
import icon1 from '../../assets/jobs/company1.webp';
import icon2 from '../../assets/jobs/company2.webp';
import icon3 from '../../assets/jobs/company3.webp';
import icon4 from '../../assets/jobs/company4.webp';
import icon5 from '../../assets/jobs/company5.webp';
import icon6 from '../../assets/jobs/company6.webp';

const Pill = ({ text, darkMode }) => (
    <Box sx={{
        bgcolor: darkMode ? '#333' : '#fff',
        px: '14px',
        py: '6px',
        borderRadius: '20px',
        fontSize: '11px',
        fontFamily: 'Poppins',
        fontWeight: 500,
        color: darkMode ? '#ddd' : '#333',
        boxShadow: darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.05)'
    }}>
        {text}
    </Box>
);

const ListItem = ({ icon, title, subtitle, date, description, darkMode, actionBtn }) => (
    <Box sx={{ display: 'flex', gap: '15px', mb: '20px', alignItems: 'flex-start', width: '100%' }}>
        <Box
            component="img"
            src={icon}
            sx={{ width: '45px', height: '45px', borderRadius: '5px', objectFit: 'cover', bgcolor: darkMode ? '#333' : '#fff', flexShrink: 0 }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '2px', minWidth: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, minWidth: 0 }}>
                    {title}
                </Typography>
                {actionBtn && <Box sx={{ flexShrink: 0 }}>{actionBtn}</Box>}
            </Box>
            <Typography sx={{ fontSize: '11px', color: darkMode ? '#888' : '#666', fontFamily: 'Poppins' }}>
                {subtitle}
            </Typography>
            <Typography sx={{ fontSize: '10px', color: darkMode ? '#888' : '#999', fontFamily: 'Poppins' }}>
                {date}
            </Typography>
            {description && (
                <Typography sx={{ fontSize: '10px', color: darkMode ? '#aaa' : '#888', mt: '4px', fontFamily: 'Poppins', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {description}
                </Typography>
            )}
        </Box>
    </Box>
);

const MyAbout = ({ darkMode, onEditServices, onAddActivity, onViewAllProjects }) => {
    const textColor = darkMode ? '#ccc' : '#666';
    const bgBlock = darkMode ? '#2a2a3c' : '#f5f5f5';
    const iconColor = darkMode ? '#fff' : '#333';

    const SubSection = ({ title, headerRight, footerRight, children }) => (
        <Box sx={{
            width: '100%',
            bgcolor: bgBlock,
            borderRadius: '10px',
            p: '20px',
            boxSizing: 'border-box',
            mb: '12px'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '12px' }}>
                <Typography sx={{ fontSize: '15px', fontWeight: 600, color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }}>
                    {title}
                </Typography>
                {headerRight}
            </Box>
            {children}
            {footerRight && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '10px' }}>
                    {footerRight}
                </Box>
            )}
        </Box>
    );

    const EditIconBtn = ({ onClick }) => (
        <EditOutlinedIcon sx={{ fontSize: '18px', color: iconColor, cursor: 'pointer' }} onClick={onClick} />
    );

    const AddSectionBtn = ({ onClick }) => (
        <Button variant="contained" size="small" onClick={onClick} startIcon={<AddIcon sx={{ fontSize: '14px' }} />} sx={{
            height: '24px', fontSize: '10px', borderRadius: '15px',
            bgcolor: darkMode ? '#444' : '#e0e0e0', color: darkMode ? '#fff' : '#333',
            textTransform: 'none', fontFamily: 'Poppins', px: 1.5,
            fontWeight: 500, boxShadow: 'none',
            '&:hover': { bgcolor: darkMode ? '#555' : '#ccc', boxShadow: 'none' }
        }}>
            Add Section
        </Button>
    );

    const AddIconBtn = () => (
        <AddIcon sx={{ fontSize: '22px', color: iconColor, cursor: 'pointer' }} />
    );

    return (
        <Box sx={{ width: '100%', px: '23px', pb: '30px', boxSizing: 'border-box', pt: '10px' }}>

            {/* About */}
            <SubSection title="About" headerRight={<EditIconBtn />}>
                <Typography sx={{ fontSize: '11px', color: textColor, fontFamily: 'Poppins', lineHeight: 1.5 }}>
                    I am an UI/UX Designer based in Sri Lanka passionate about creating result oriented user exper...
                    I am an UI/UX Designer based in Sri Lanka passionate about creating result oriented user exper...
                    <span style={{ color: '#00E87F', fontWeight: 600, cursor: 'pointer', marginLeft: '4px', fontSize: '12px' }}>See More</span>
                </Typography>
            </SubSection>

            {/* Services */}
            <SubSection
                title="Services"
                headerRight={<EditIconBtn onClick={onEditServices} />}
                footerRight={
                    <Typography sx={{ fontSize: '10px', fontWeight: 600, color: '#00E87F', cursor: 'pointer', fontFamily: 'Poppins' }}>
                        View All
                    </Typography>
                }
            >
                <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Pill text="UI/UX Designing" darkMode={darkMode} />
                    <Pill text="Web Development" darkMode={darkMode} />
                    <Pill text="Web Design" darkMode={darkMode} />
                </Box>
            </SubSection>

            {/* Activities */}
            <SubSection title="Activities" headerRight={<AddSectionBtn onClick={onAddActivity} />}>
                <Typography sx={{ fontSize: '11px', color: textColor, fontFamily: 'Poppins', lineHeight: 1.5 }}>
                    Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo
                </Typography>
            </SubSection>

            {/* Experience */}
            <SubSection title="Experience" headerRight={<AddIconBtn />}>
                <Box sx={{ mt: '15px' }}>
                    <ListItem
                        icon={icon1}
                        title="Al Ghaith Oilfields & Services Co."
                        subtitle="UI/UX Team Lead"
                        date="2024 - Present"
                        darkMode={darkMode}
                        actionBtn={<EditIconBtn />}
                    />
                    <ListItem
                        icon={icon2}
                        title="SaDo"
                        subtitle="UI/UX Designer"
                        date="2020 - 2024"
                        darkMode={darkMode}
                        actionBtn={<EditIconBtn />}
                    />
                </Box>
            </SubSection>

            {/* Education */}
            <SubSection title="Education" headerRight={<AddIconBtn />}>
                <Box sx={{ mt: '15px' }}>
                    <ListItem
                        icon={icon3}
                        title="University of Leicester"
                        subtitle="MSc Hons in Advance Computer Science"
                        date="2024 - Present"
                        darkMode={darkMode}
                        actionBtn={<EditIconBtn />}
                    />
                    <ListItem
                        icon={icon4}
                        title="University of Gloucestershire"
                        subtitle="BSc Hons in Information Systems"
                        date="2020 - 2024"
                        darkMode={darkMode}
                        actionBtn={<EditIconBtn />}
                    />
                </Box>
            </SubSection>

            {/* Licenses & Certifications */}
            <SubSection title="Licenses & Certifications" headerRight={<EditIconBtn />}>
                <Box sx={{ mt: '15px' }}>
                    <ListItem
                        icon={icon5}
                        title="Microsoft"
                        subtitle="Microsoft UX Design"
                        date="Issued - Feb 2023"
                        darkMode={darkMode}
                        actionBtn={
                            <Button variant="outlined" sx={{
                                height: '24px', fontSize: '10px', borderRadius: '20px',
                                color: darkMode ? '#fff' : '#000',
                                borderColor: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                                textTransform: 'none', fontFamily: 'Poppins', px: 2,
                                fontWeight: 500,
                                '&:hover': { borderColor: '#00E87F', color: '#00E87F' }
                            }}>Show Credentials</Button>
                        }
                    />
                    <ListItem
                        icon={icon6}
                        title="Google"
                        subtitle="IC Project Management Professional"
                        date="Issued - Jan 2023"
                        darkMode={darkMode}
                        actionBtn={
                            <Button variant="outlined" sx={{
                                height: '24px', fontSize: '10px', borderRadius: '20px',
                                color: darkMode ? '#fff' : '#000',
                                borderColor: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                                textTransform: 'none', fontFamily: 'Poppins', px: 2,
                                fontWeight: 500,
                                '&:hover': { borderColor: '#00E87F', color: '#00E87F' }
                            }}>Show Credentials</Button>
                        }
                    />
                </Box>
            </SubSection>

            {/* Projects */}
            <SubSection title="Projects" headerRight={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={onViewAllProjects}>
                    <Typography sx={{ fontSize: '11px', fontWeight: 600, color: darkMode ? '#fff' : '#000', fontFamily: 'Poppins' }} onClick={onViewAllProjects}>
                        View All
                    </Typography>
                    <EditIconBtn onClick={onViewAllProjects} />
                </Box>
            }>
                <Box sx={{ mt: '15px' }}>
                    <ListItem
                        icon={icon1}
                        title="ABC Company Website"
                        subtitle="Role: UI/UX Designer"
                        date="Feb 2022 - Dec 2022"
                        description="Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo."
                        darkMode={darkMode}
                    />
                    <ListItem
                        icon={icon2}
                        title="ABC Mobile App Design"
                        subtitle="Role: App Development"
                        date="Jan 2021 - Jun 2022"
                        description="Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo."
                        darkMode={darkMode}
                    />
                    <ListItem
                        icon={icon3}
                        title="ABC Company Website"
                        subtitle="Role: SiteMap & Research"
                        date="Sep 2020 - Nov 2020"
                        description="Lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo lorem ipsum dolor sit amet consectetur. Sit sit tincidunt nunc platea commodo."
                        darkMode={darkMode}
                    />
                </Box>
            </SubSection>

        </Box>
    );
};

export default MyAbout;
