import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Rating, Badge } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

// Assets
import headerImg from '../../assets/Service/Services/header.webp';
import product1 from '../../assets/Home/post/post/post1.0.webp';
import product2 from '../../assets/Home/post/post/post2.0.webp';
import product3 from '../../assets/Home/post/post/post3.0.webp';
import product4 from '../../assets/Home/post/post/post1.2.webp';
import product5 from '../../assets/Home/post/post/post1.3.webp';
import product6 from '../../assets/Home/post/post/post1.4.webp';
import product7 from '../../assets/Home/post/post/post2.1.webp';
import product8 from '../../assets/Home/post/post/post2.2.webp';

import heartIcon from '../../assets/Home/post/reaction_icon/hart_blck.webp';

import compCodeLab from '../../assets/CompanyProfile/CodeLab.webp';
import compPaypal from '../../assets/CompanyProfile/Paypal.webp';
import compDiscord from '../../assets/CompanyProfile/Discord.webp';
import compNvidia from '../../assets/CompanyProfile/Nvidia.webp';
import compPixelCode from '../../assets/CompanyProfile/PixelCode.webp';
import compPixelStudio from '../../assets/CompanyProfile/PixelStudio.webp';
import compReddit from '../../assets/CompanyProfile/Reddit.webp';
import compSlack from '../../assets/CompanyProfile/Slack.webp';

import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail/ProductDetail';
import RightSidebar from './rifhtSidebar/RightSidebar';
import CategoryPopup from './Popup/Category';
import SortPopup from './Popup/sort';

const MarketPlace = ({ darkMode = false, onTabChange }) => {
    const [activeTab, setActiveTab] = useState('Products');
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
    const [sortAnchorEl, setSortAnchorEl] = useState(null);

    const products = [
        { id: 1, image: product1, compLogo: compCodeLab, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
        { id: 2, image: product2, compLogo: compPaypal, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
        { id: 3, image: product3, compLogo: compDiscord, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
        { id: 4, image: product4, compLogo: compNvidia, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
        { id: 5, image: product5, compLogo: compPixelCode, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
        { id: 6, image: product6, compLogo: compPixelStudio, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
        { id: 7, image: product7, compLogo: compReddit, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
        { id: 8, image: product8, compLogo: compSlack, title: 'Rtx 3060 Dell Laptop with ....', desc: 'Lorem ipsum dolor sit amet consjkh', rating: '5.0 20k+' },
    ];

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            gap: '20px',
            boxSizing: 'border-box'
        }}>
            {/* Main Marketplace Content */}
            <Box sx={{
                flex: selectedProduct ? 'none' : 1,
                minWidth: 0,
                width: selectedProduct ? { xs: '100%', md: '350px', lg: '400px' } : '100%',
                maxWidth: selectedProduct ? { xs: '100%', md: '350px', lg: '400px' } : { xs: '100%', md: '706px' },
                minHeight: { xs: '100vh', md: '839px' },
                height: { xs: 'auto', md: '839px' },
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                boxSizing: 'border-box',
                display: selectedProduct ? { xs: 'none', md: 'flex' } : 'flex',
                flexDirection: 'column',
                overflow: { xs: 'visible', md: 'hidden' },
                border: darkMode ? '1px solid #333' : '1px solid #eee'
            }}>
                {/* Scrollable Container */}
                <Box sx={{
                    flex: 1,
                    overflowY: { xs: 'visible', md: 'auto' },
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none'
                }}>
                    {/* Header Actions */}
                    <Box sx={{
                        p: { xs: '15px', sm: '20px' },
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none'
                    }}>
                        <Box sx={{ display: 'flex', gap: { xs: '8px', sm: '15px' } }}>
                            {['Products', 'Services'].map((tab) => (
                                <Box
                                    key={tab}
                                    onClick={() => {
                                        if (tab === 'Services' && onTabChange) {
                                            onTabChange('Services');
                                        } else {
                                            setActiveTab(tab);
                                        }
                                    }}
                                    sx={{
                                        px: { xs: '14px', sm: '20px' },
                                        py: { xs: '6px', sm: '8px' },
                                        borderRadius: '50px',
                                        bgcolor: activeTab === tab ? '#000' : 'transparent',
                                        color: activeTab === tab ? '#fff' : '#000',
                                        cursor: 'pointer',
                                        border: activeTab === tab ? 'none' : '1px solid #ddd',
                                        fontWeight: 700,
                                        fontSize: { xs: '12px', sm: '14px' },
                                        fontFamily: 'Poppins',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {tab}
                                </Box>
                            ))}
                        </Box>
                        <Box
                            onClick={(e) => setCategoryAnchorEl(e.currentTarget)}
                            sx={{
                                px: { xs: '12px', sm: '15px' },
                                py: { xs: '6px', sm: '8px' },
                                borderRadius: '10px',
                                border: '1.5px solid #000',
                                display: 'flex',
                                alignItems: 'center',
                                gap: { xs: 0.5, sm: 1 },
                                cursor: 'pointer',
                                ml: { xs: '8px', sm: 0 },
                                flexShrink: 0
                            }}>
                            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, fontWeight: 600, fontFamily: 'Poppins' }}>Categories</Typography>
                            <KeyboardArrowDownIcon sx={{ fontSize: { xs: '16px', sm: '20px' } }} />
                        </Box>

                        <CategoryPopup
                            anchorEl={categoryAnchorEl}
                            onClose={() => setCategoryAnchorEl(null)}
                            darkMode={darkMode}
                        />
                    </Box>

                    {/* Banner Section */}
                    <Box sx={{ width: '100%', height: '240px', position: 'relative', overflow: 'hidden' }}>
                        <Box component="img" src={headerImg} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        {/* Dots indicator */}
                        <Box sx={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
                            <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: '#fff' }} />
                            <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                            <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.4)' }} />
                        </Box>
                    </Box>

                    {/* Sort and Filters */}
                    <Box sx={{ px: '20px', py: '15px', display: 'flex', alignItems: 'center' }}>
                        <Box
                            onClick={(e) => setSortAnchorEl(e.currentTarget)}
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', mr: '25px' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Poppins', color: '#000' }}>Sort</Typography>
                            <SwapVertIcon sx={{ fontSize: '16px', color: '#000' }} />
                        </Box>

                        <SortPopup
                            anchorEl={sortAnchorEl}
                            onClose={() => setSortAnchorEl(null)}
                            darkMode={darkMode}
                        />
                        <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'nowrap', overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}>
                            {['All', 'Recent', 'Favorites', 'Technologies', 'Machineries'].map((filter) => (
                                <Box
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    sx={{
                                        px: '16px',
                                        py: '4px',
                                        borderRadius: '50px',
                                        bgcolor: activeFilter === filter ? '#000' : 'transparent',
                                        color: activeFilter === filter ? '#fff' : '#000',
                                        cursor: 'pointer',
                                        border: activeFilter === filter ? 'none' : '1px solid #ddd',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        fontFamily: 'Poppins',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {filter}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {/* Title Section */}
                    <Box sx={{ px: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 600, fontFamily: 'Poppins' }}>Lorem Ipsum</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon sx={{ fontSize: '16px', color: '#555' }} />
                            <Typography sx={{ fontSize: '13px', color: '#555', fontFamily: 'Poppins' }}>Colombo</Typography>
                        </Box>
                    </Box>

                    {/* Product Grid */}
                    <Box sx={{
                        px: '12px',
                        display: 'grid',
                        gridTemplateColumns: selectedProduct ? {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)'
                        } : {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(4, 1fr)'
                        },
                        gap: '15px',
                        pb: '30px'
                    }}>
                        {products.map((product) => (
                            <ProductCard key={product.id} darkMode={darkMode} product={product} onClick={() => setSelectedProduct(product)} />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Right Panel */}
            {selectedProduct ? (
                <Box sx={{ flex: 1, minWidth: 0, display: { xs: 'flex', md: 'block' } }}>
                    <ProductDetail darkMode={darkMode} product={selectedProduct} onBack={() => setSelectedProduct(null)} />
                </Box>
            ) : (
                <RightSidebar darkMode={darkMode} />
            )}
        </Box>
    );
};

export default MarketPlace;
