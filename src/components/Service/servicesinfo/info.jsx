import React from 'react';
import { Box, Typography, Button, IconButton, TextField, Rating, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import VerifiedIcon from '@mui/icons-material/Verified';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';

// Assets
import service1 from '../../../assets/Service/service/service1.webp';
import attachment1 from '../../../assets/Service/attachment1.webp';
import attachment2 from '../../../assets/Service/attachment2.webp';
import attachment3 from '../../../assets/Service/attachment3.webp';
import mp1 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp1.webp';
import mp5 from '../../../assets/Home/sevice/chats/messegeprofilepic/mp5.webp';

const ServiceInfo = ({ darkMode = false, onBack }) => {
    return (
        <Box sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '706px' },
            height: '100%',
            maxHeight: { xs: 'none', md: '1097px' },
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
            overflowY: 'auto',
            '&::-webkit-scrollbar': { display: 'none' },
            position: 'relative'
        }}>
            {/* --- HEADER CONTROLS --- */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: '15px', sm: '20px' },
                py: '12px',
                position: 'sticky',
                top: 0,
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                zIndex: 10,
                borderBottom: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid #efefef'
            }}>
                <IconButton onClick={onBack} sx={{ color: darkMode ? '#fff' : '#000' }}>
                    <CloseIcon sx={{ fontSize: '20px' }} />
                </IconButton>
                <IconButton sx={{ color: darkMode ? '#fff' : '#000' }}>
                    <MoreHorizIcon />
                </IconButton>
            </Box>

            <Box sx={{ p: { xs: '15px', sm: '13px' } }}>
                {/* --- HERO IMAGE BOX --- */}
                <Box sx={{
                    width: '100%',
                    height: { xs: '180px', sm: '262px' },
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative',
                    mb: '20px'
                }}>
                    <Box component="img" src={service1} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <Box sx={{
                        position: 'absolute', top: '15px', left: '15px',
                        bgcolor: '#00EA8E', color: '#fff', fontSize: '12px', fontWeight: 600,
                        px: '12px', py: '4px', borderRadius: '50px'
                    }}>
                        New
                    </Box>
                    {/* Carousel Dots */}
                    <Box sx={{
                        position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)',
                        display: 'flex', gap: '6px'
                    }}>
                        <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: '#fff' }} />
                        <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.5)' }} />
                        <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.5)' }} />
                    </Box>
                </Box>

                {/* --- TITLE & ACTIONS --- */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'flex-start' },
                    gap: { xs: '15px', sm: '0px' },
                    mb: '10px'
                }}>
                    <Box>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Poppins', color: darkMode ? '#fff' : '#111' }}>
                            Zamil AC Repair & AC Installation,<br />Duct Cleaning.
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mt: '8px' }}>
                            <Typography sx={{ fontSize: '13px', color: '#666', fontWeight: 500 }}>Warranty Offered</Typography>
                            <VerifiedIcon sx={{ fontSize: '16px', color: '#00EA8E' }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <IconButton size="small" sx={{ border: '1px solid #efefef' }}>
                            <FavoriteBorderIcon sx={{ fontSize: '18px' }} />
                        </IconButton>
                        <IconButton size="small" sx={{ border: '1px solid #efefef' }}>
                            <ShareIcon sx={{ fontSize: '18px' }} />
                        </IconButton>
                    </Box>
                </Box>

                {/* --- SERVICES OFFERED --- */}
                <Box sx={{ mb: '25px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '10px', color: darkMode ? '#fff' : '#111' }}>
                        services Offered
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: '#888', lineHeight: 1.6 }}>
                        AC Installation • Heating System Repair • Ductwork Cleaning<br />
                        Energy Efficiency Consulting<br />
                        Regular Maintenance Plans
                    </Typography>
                </Box>

                {/* --- DETAILS TABLE --- */}
                <Box sx={{ mb: '30px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '12px', color: darkMode ? '#fff' : '#111' }}>
                        details
                    </Typography>
                    <Box sx={{
                        display: 'flex', flexDirection: 'column', gap: '12px',
                        bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#F9FBF9',
                        p: '15px', borderRadius: '8px'
                    }}>
                        {[
                            { label: 'Email Address', val: 'musthakmushthi@gmail.com', icon: <EmailIcon sx={{ fontSize: '16px' }} />, link: 'mailto:musthakmushthi@gmail.com' },
                            { label: 'Phone Number', val: '+94 786 385 885', icon: <PhoneIcon sx={{ fontSize: '16px' }} />, link: 'tel:+94786385885' },
                            { label: 'Website', val: 'www.musthakmushthi.com', icon: <LanguageIcon sx={{ fontSize: '16px' }} /> },
                            { label: 'Address', val: '43 Al Khobar , Saudi Arabia', icon: <LocationOnIcon sx={{ fontSize: '16px' }} /> },
                            { label: 'Date Of Birth', val: '1997.04.23', icon: <CakeIcon sx={{ fontSize: '16px' }} /> },
                        ].map((row, i) => (
                            <Box key={i} sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: { xs: 'flex-start', sm: 'center' },
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: { xs: '4px', sm: '0px' }
                            }}>
                                <Typography sx={{ fontSize: '13px', fontWeight: 600, color: darkMode ? '#ccc' : '#444', width: { xs: '100%', sm: '120px' } }}>
                                    {row.label}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'space-between' }, flex: 1, width: '100%', gap: '8px' }}>
                                    <Typography sx={{ fontSize: '13px', color: '#888', textAlign: 'left' }}>
                                        {row.link ? (
                                            <Box component="a" href={row.link} sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                                {row.val}
                                            </Box>
                                        ) : (
                                            row.val
                                        )}
                                    </Typography>

                                    <Box sx={{ color: '#888', display: 'flex', alignItems: 'center' }}>
                                        {row.link ? (
                                            <IconButton
                                                component="a"
                                                href={row.link}
                                                size="small"
                                                sx={{
                                                    color: 'inherit',
                                                    p: 0,
                                                    minWidth: 'auto',
                                                    '&:hover': { color: darkMode ? '#fff' : '#111' }
                                                }}
                                            >
                                                {row.icon}
                                            </IconButton>
                                        ) : (
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    color: 'inherit',
                                                    p: 0,
                                                    minWidth: 'auto',
                                                }}
                                            >
                                                {row.icon}
                                            </IconButton>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* --- PRICING --- */}
                <Box sx={{ mb: '30px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '10px', color: darkMode ? '#fff' : '#111' }}>
                        Pricing
                    </Typography>
                    <Typography sx={{ fontSize: '12px', color: '#888', mb: '12px' }}>Prices increase for outside service but fix with appointments.</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>Service Charges :</Typography>
                            <Typography sx={{ fontSize: '13px', color: '#2C7A7B' }}>50 $</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>Maintenance Packages :</Typography>
                            <Typography sx={{ fontSize: '13px', color: '#2C7A7B' }}>20 $</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* --- AVAILABILITY --- */}
                <Box sx={{ mb: '30px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '10px', color: darkMode ? '#fff' : '#111' }}>
                        Availability
                    </Typography>
                    <Typography sx={{ fontSize: '13px', color: '#888' }}>Working hours : &nbsp; 8.00 AM - 10.00 PM</Typography>
                </Box>

                {/* --- SERVICE AREAS COVERED (MAP) --- */}
                <Box sx={{ mb: '30px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '12px', color: darkMode ? '#fff' : '#111' }}>
                        Service Areas Covered
                    </Typography>
                    <Box sx={{ width: '100%', height: '203px', borderRadius: '15px', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps?q=6.6843,80.1139&hl=en&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </Box>
                </Box>

                {/* --- PHOTOS --- */}
                <Box sx={{ mb: '35px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '15px', color: darkMode ? '#fff' : '#111' }}>
                        Photos
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: '15px',
                        overflowX: 'auto',
                        pb: '10px',
                        '&::-webkit-scrollbar': { height: '4px' },
                        '&::-webkit-scrollbar-thumb': { bgcolor: darkMode ? '#444' : '#ddd', borderRadius: '4px' }
                    }}>
                        {[attachment1, attachment2, attachment3].map((img, i) => (
                            <Box key={i} sx={{
                                width: { xs: '160px', sm: '200px' },
                                height: { xs: '120px', sm: '150px' },
                                borderRadius: '15px',
                                overflow: 'hidden',
                                flexShrink: 0
                            }}>
                                <Box component="img" src={img} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* --- RATE US (INPUT) --- */}
                <Box sx={{ mb: '35px', textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '13px', textAlign: 'left', color: darkMode ? '#fff' : '#111' }}>
                        Rate us
                    </Typography>
                    <Rating name="service-rating" defaultValue={0} precision={0.5} sx={{ mb: '15px' }} />
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="Rate your feedback here"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '10px',
                                bgcolor: darkMode ? 'rgba(255,255,255,0.03)' : '#fff'
                            }
                        }}
                    />
                </Box>

                {/* --- RATE US (REVIEWS) --- */}
                <Box sx={{ mb: '35px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '15px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700, color: darkMode ? '#fff' : '#111' }}>Rate us</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#888', cursor: 'pointer' }}>View All</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[
                            { name: 'Musthak mushthi', img: mp1, text: 'Lorem ipsum dolor sit amet consectetur. Neque odio sem nunc elementum elementum proin purus consequat. Ut amet molestie mattis commodo eget nulla leo.' },
                            { name: 'Adnan Ashly', img: mp5, text: 'Lorem ipsum dolor sit amet consectetur. Neque odio sem nunc elementum elementum proin purus consequat. Ut amet molestie mattis commodo eget nulla leo.' },
                        ].map((rev, i) => (
                            <Box key={i} sx={{ borderBottom: '1px solid #efefef', pb: '15px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mb: '8px' }}>
                                    <Box component="img" src={rev.img} sx={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                                    <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>{rev.name}</Typography>
                                    <VerifiedIcon sx={{ fontSize: '14px', color: '#1877F2' }} />
                                </Box>
                                <Typography sx={{ fontSize: '12px', color: '#666', lineHeight: 1.5 }}>{rev.text}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* --- FAQs --- */}
                <Box sx={{ mb: '40px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 700, mb: '11px', color: darkMode ? '#fff' : '#111' }}>
                        FAQs
                    </Typography>
                    {[
                        'Lorem Ipsum dolor sit amet consectetur ?',
                        'Lorem Ipsum dolor sit amet consectetur dolor sit ?',
                        'Lorem Ipsum dolor sit amet dolor sit ?',
                        'Lorem Ipsum dolor sit amet consectetur adispicing ?',
                    ].map((q, i) => (
                        <Accordion key={i} elevation={0} sx={{
                            bgcolor: 'transparent',
                            '&:before': { display: 'none' },
                            borderBottom: '1px solid #efefef'
                        }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography sx={{ fontSize: '13px', fontWeight: 500 }}>{q}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography sx={{ fontSize: '12px', color: '#888' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ServiceInfo;
