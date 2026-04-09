import React from 'react';
import { Box, Typography } from '@mui/material';

// Assets
import t1 from '../../../assets/Service/trending/t1.webp';
import t2 from '../../../assets/Service/trending/t2.webp';
import t3 from '../../../assets/Service/trending/t3.webp';
import t4 from '../../../assets/Service/trending/t4.webp';
import t5 from '../../../assets/Service/trending/t5.webp';
import t6 from '../../../assets/Service/trending/t6.webp';

const TrendingServices = ({ darkMode = false }) => {
    return (
        <Box sx={{
            width: '372px',
            height: '675px',
            bgcolor: darkMode ? '#1e1e2e' : '#fff',
            borderRadius: '15px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
            border: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
            p: '12px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography sx={{
                fontFamily: 'Poppins', fontSize: '18px', fontWeight: 600,
                color: darkMode ? '#fff' : '#111', mb: '15px'
            }}>
                Trending services
            </Typography>

            {/* t1 layout: 348x154 */}
            <Box sx={{
                width: '348px', height: '154px', borderRadius: '11px', overflow: 'hidden', mb: '12px', flexShrink: 0
            }}>
                <Box component="img" src={t1} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>

            {/* Rows for t2-t5 with labels */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {/* Row 2: t2, t3 */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '5px', px: '2px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>
                            Paint
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, color: darkMode ? '#fff' : '#111', width: '163px' }}>
                            Wooden
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '22px' }}>
                        <Box sx={{ width: '163px', height: '154px', borderRadius: '11px', overflow: 'hidden' }}>
                            <Box component="img" src={t2} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                        <Box sx={{ width: '163px', height: '154px', borderRadius: '11px', overflow: 'hidden' }}>
                            <Box component="img" src={t3} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Box>
                </Box>

                {/* Row 3: t4, t5 */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '5px', px: '2px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, color: darkMode ? '#fff' : '#111' }}>
                            Plumbing
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 600, color: darkMode ? '#fff' : '#111', width: '163px' }}>
                            nursing
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '22px' }}>
                        <Box sx={{ width: '163px', height: '154px', borderRadius: '11px', overflow: 'hidden' }}>
                            <Box component="img" src={t4} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                        <Box sx={{ width: '163px', height: '154px', borderRadius: '11px', overflow: 'hidden' }}>
                            <Box component="img" src={t5} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* t6 layout: 348x81 */}
            <Box sx={{
                width: '348px', height: '81px', borderRadius: '11px', overflow: 'hidden', mt: '15px'
            }}>
                <Box component="img" src={t6} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
        </Box>
    );
};

export default TrendingServices;
