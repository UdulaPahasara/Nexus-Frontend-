import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './components/login/login'
import Individuals from './components/signup/individual/inviduals'
import Company from './components/signup/company/compny'
import AITool from './components/leading page/ai tool/aitool'
import CVSection from './components/leading page/cvsection/cvsection'
import Partners from './components/leading page/partners/partners'
import ChooseUs from './components/leading page/chooseus/chooswus'
import Reviews from './components/leading page/review/review'
import PriceForU from './components/leading page/priceforu/priceforu'
import QAndA from './components/leading page/q&a/q&a'
import Hero from './components/leading page/hero/hero'
import SearchBar from './components/home/searchbar/searchbar'
import ProfileSidebar from './components/home/proffun/profile'
import MainHome from './components/home/mainhome/mainhome'
import Post from './components/home/post/post'
import ForYou from './components/home/mainhome/foryou/foryou'
import Feed from './components/home/feed/feed'
import Service from './components/home/service/service'
import ChatPopup from './components/home/popups/chatpopup'
import FilterBar from './components/chat section/chatfilterbar/filterbar'
import MessageArea from './components/chat section/messagingarea/messageArea'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/hero" replace />} />

        {/* Login route */}
        <Route path="/login" element={<Login />} />

        {/* Signup Routes */}
        <Route path="/individuals" element={<Individuals />} />
        <Route path="/company" element={<Company />} />

        {/* landder Component Route */}
        <Route path="/tools" element={<AITool />} />
        <Route path="/cv" element={<CVSection />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/chooseus" element={<ChooseUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/pricing" element={<PriceForU />} />
        <Route path="/qa" element={<QAndA />} />
        <Route path="/hero" element={<Hero />} />

        {/* Home Routes */}
        <Route path="/home" element={<MainHome />} />
        <Route path="/profile" element={<ProfileSidebar />} />
        <Route path="/searchbar" element={<SearchBar />} />
        <Route path="/post" element={<Post />} />
        <Route path="/foryou" element={<ForYou />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/service" element={<Service />} />
        <Route path="/chat" element={<Navigate to="/home" replace />} /> {/* Redirecting since it's a popup now, but keeping for reference if needed */}
        <Route path="/filterbar" element={<FilterBar />} />
        <Route path="/messagearea" element={<MessageArea />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
