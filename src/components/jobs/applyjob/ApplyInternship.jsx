import React, { useState } from 'react';
import { Box, Typography, Switch, Select, MenuItem, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { GreenCheck, CustomField, FileUploadField } from './CommonApply';
import CVPopup from './popup/cvpopup';
import ChooseLetterPopup from './popup/chooseletter';

// Assets
import companyLogo from '../../../assets/jobs/company1.webp';

import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ApplyInternship = ({ darkMode, onBack }) => {
    // Form States
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        location: '',
        experience: '',
        eligible: '',
        startDate: '',
        currentEducation: '',
        university: '',
        fieldOfStudy: '',
        pastProjects: '',
        availability: '',
        salaryCurrency: 'SAR',
        salaryAmount: '',
        salaryPeriod: 'Monthly',
        fitNote: ''
    });

    const [alertsEnabled, setAlertsEnabled] = useState(true);
    const [useDefaultCover, setUseDefaultCover] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [isCvPopupOpen, setIsCvPopupOpen] = useState(false);
    const [isLetterPopupOpen, setIsLetterPopupOpen] = useState(false);

    // File States
    const [resumeFile, setResumeFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    const [portfolioFile, setPortfolioFile] = useState(null);

    const handleInputChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>
            {/* Main Layout Container */}
            <Box sx={{
                width: '100%',
                maxWidth: '1086px',
                bgcolor: darkMode ? '#1e1e2e' : '#fff',
                borderRadius: '15px',
                boxShadow: darkMode ? '0px 4px 20px rgba(0,0,0,0.5)' : '0px 4px 20px rgba(0,0,0,0.05)',
                p: { xs: '20px', sm: '30px', md: '50px' },
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '25px'
            }}>

                {/* Company Header */}
                <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, borderBottom: '1px solid #EAEAEA', pb: '20px', gap: { xs: '15px', sm: '0' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <Box component="img" src={companyLogo} sx={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '14px', sm: '16px' }, color: darkMode ? '#fff' : '#000' }}>
                                    CodeLeap
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '16px', color: '#0077B5' }} />
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Galle, Sri Lanka
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            Stay Up To Date With Alerts:
                        </Typography>
                        <Switch
                            checked={alertsEnabled}
                            onChange={(e) => setAlertsEnabled(e.target.checked)}
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': { color: '#00EA8E' },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#00EA8E' },
                            }}
                        />
                    </Box>
                </Box>

                {/* Job Context */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '16px', sm: '18px' }, color: darkMode ? '#fff' : '#000' }}>
                            Frontend Developer Intern
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            1 day ago
                        </Typography>
                        <Box sx={{
                            bgcolor: 'rgba(0, 234, 142, 0.15)', color: '#00EA8E',
                            px: '10px', py: '2px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px'
                        }}>
                            <Typography sx={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Poppins' }}>Intern</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888', lineHeight: 1.6 }}>
                        Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit Lorem ipsum dolor sit amet consectetur. Accumsan mi vulputate ut lorem non vivamus sit ...
                        <span style={{ color: '#00EA8E', cursor: 'pointer', fontWeight: 500 }}> Read More</span>
                    </Typography>
                </Box>

                {/* Basic Information */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', mt: '10px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: darkMode ? '#fff' : '#111' }}>
                        Basic Information
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
                        <CustomField label="First Name" value={formData.firstName} onChange={handleInputChange('firstName')} />
                        <CustomField label="Last Name" value={formData.lastName} onChange={handleInputChange('lastName')} />
                        <CustomField label="Mobile Number" value={formData.mobile} onChange={handleInputChange('mobile')} />
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box sx={{ flex: 1 }}><CustomField label="Email" value={formData.email} onChange={handleInputChange('email')} type="email" /></Box>
                        <Box sx={{ flex: 1 }}><CustomField label="Current Location" value={formData.location} onChange={handleInputChange('location')} /></Box>
                        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                    </Box>
                </Box>

                {/* Resume/CV Upload */}
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '10px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: darkMode ? '#fff' : '#111' }}>
                        Resume/CV Upload
                    </Typography>
                    <FileUploadField
                        label="Attach CV/Resume"
                        file={resumeFile}
                        onFileSelect={(e) => { if (e.target.files[0]) setResumeFile(e.target.files[0]) }}
                        onRemoveFile={() => setResumeFile(null)}
                        onClickButton={() => setIsCvPopupOpen(true)}
                        buttonText="Choose Resume"
                        noteText="your cv/resume should be under 2mb and should be a pdf, doc, docx, rtf or a txt file."
                    />
                </Box>

                {/* Cover Letter Upload */}
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '10px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: darkMode ? '#fff' : '#111' }}>
                        Cover Letter Upload
                    </Typography>
                    <FileUploadField
                        label="Attach Cover letter"
                        file={coverFile}
                        onFileSelect={(e) => { if (e.target.files[0]) setCoverFile(e.target.files[0]) }}
                        onRemoveFile={() => setCoverFile(null)}
                        onClickButton={() => setIsLetterPopupOpen(true)}
                        buttonText="Choose Cover letter"
                        noteText="your cv/resume should be under 2mb and should be a pdf, doc, docx, rtf or a txt file."
                        showDefaultSwitch={true}
                        defaultSwitchValue={useDefaultCover}
                        onSwitchChange={(e) => setUseDefaultCover(e.target.checked)}
                    />
                </Box>

                {/* Other Information */}
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: '10px', gap: '20px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: darkMode ? '#fff' : '#111' }}>
                        Other Information
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
                        {/* Experience */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                How many years of experience you have in Web Designing?
                            </Typography>
                            <Select
                                value={formData.experience}
                                onChange={handleInputChange('experience')}
                                displayEmpty
                                sx={{ bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '13px', color: '#333' }}
                            >
                                <MenuItem value="" disabled>select years</MenuItem>
                                {['Less than 1 year', '1-3 years', '3-5 years', '5+ years'].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                            </Select>
                        </Box>

                        {/* Legal */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Are You Legally Eligible To Work In Saudi Arabia? <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <RadioGroup row value={formData.eligible} onChange={handleInputChange('eligible')}>
                                <FormControlLabel value="yes" control={<Radio sx={{ '&.Mui-checked': { color: '#888' } }} />} label={<Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>Yes</Typography>} />
                                <FormControlLabel value="no" control={<Radio sx={{ '&.Mui-checked': { color: '#888' } }} />} label={<Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>No</Typography>} />
                            </RadioGroup>
                        </Box>

                        {/* Start Date */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                When can you start? <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <Select
                                value={formData.startDate}
                                onChange={handleInputChange('startDate')}
                                displayEmpty
                                sx={{ bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '13px', color: '#333' }}
                            >
                                <MenuItem value="" disabled>select one</MenuItem>
                                {['Immediately', 'Within 1 week', 'Within 2 weeks', 'Within 1 month'].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                            </Select>
                        </Box>
                    </Box>

                    {/* Additional Internship Fields */}
                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
                        {/* Education Level */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Current Education Level <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <Select
                                value={formData.currentEducation}
                                onChange={handleInputChange('currentEducation')}
                                displayEmpty
                                sx={{ bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '13px', color: '#333' }}
                            >
                                <MenuItem value="" disabled>select one</MenuItem>
                                {['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD'].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                            </Select>
                        </Box>

                        {/* University */}
                        <Box sx={{ flex: 1 }}>
                            <CustomField label="University/College" value={formData.university} onChange={handleInputChange('university')} placeholder="Type here" />
                        </Box>

                        {/* Field of Study */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Field of Study/Major <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <Select
                                value={formData.fieldOfStudy}
                                onChange={handleInputChange('fieldOfStudy')}
                                displayEmpty
                                sx={{ bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '13px', color: '#333' }}
                            >
                                <MenuItem value="" disabled>select one</MenuItem>
                                {['Computer Science', 'Information Technology', 'Software Engineering', 'UI/UX Design'].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                            </Select>
                        </Box>
                    </Box>

                    {/* Past Projects & Invisibility */}
                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Describe Your Past Projects <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <Box
                                component="textarea"
                                placeholder="Attach portfolio link for obtaining attention"
                                value={formData.pastProjects}
                                onChange={handleInputChange('pastProjects')}
                                sx={{
                                    width: '100%', height: '40px', bgcolor: '#F5F5F5', borderRadius: '6px',
                                    border: 'none', outline: 'none', px: '15px', py: '10px', fontFamily: 'Poppins',
                                    fontSize: '13px', color: '#333', resize: 'none', boxSizing: 'border-box'
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Availability <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <Select
                                value={formData.availability}
                                onChange={handleInputChange('availability')}
                                displayEmpty
                                sx={{ bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px', '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '13px', color: '#333' }}
                            >
                                <MenuItem value="" disabled>select one</MenuItem>
                                {['Full-time', 'Part-time', 'Flexible'].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                            </Select>
                        </Box>
                    </Box>

                    {/* Portfolio Upload */}
                    <Box sx={{
                        border: '1px dashed #DDD', borderRadius: '10px', p: '20px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                        bgcolor: darkMode ? 'rgba(255,255,255,0.02)' : 'transparent'
                    }}>
                        <CloudUploadIcon sx={{ fontSize: '30px', color: '#BBB' }} />
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#AAA' }}>
                            upload your Portfolio file here
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ bgcolor: '#00EA8E', color: '#fff', borderRadius: '100px', textTransform: 'none', px: '25px', py: '6px', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 600, boxShadow: 'none', '&:hover': { bgcolor: '#00c779', boxShadow: 'none' } }}
                            onClick={() => { }}
                        >
                            Choose file
                        </Button>
                    </Box>

                    {/* Salary */}
                    <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Expected Salary <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px' }}>
                                <Select value={formData.salaryCurrency} onChange={handleInputChange('salaryCurrency')} sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '13px', minWidth: '80px' }}>
                                    {['SAR', 'USD', 'LKR'].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                                </Select>
                                <Box component="input" type="number" placeholder="Enter Amount" value={formData.salaryAmount} onChange={handleInputChange('salaryAmount')} sx={{ flex: 1, border: 'none', outline: 'none', bgcolor: 'transparent', px: '10px', fontFamily: 'Poppins', fontSize: '13px' }} />
                                <Select value={formData.salaryPeriod} onChange={handleInputChange('salaryPeriod')} sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '13px', minWidth: '100px' }}>
                                    {['Monthly', 'Yearly'].map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                                </Select>
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Tell Us Why You're a Great Fit?
                            </Typography>
                            <Box
                                component="textarea"
                                placeholder="A personal note to the recruiter..."
                                value={formData.fitNote}
                                onChange={handleInputChange('fitNote')}
                                sx={{
                                    width: '100%', height: '40px', bgcolor: '#F5F5F5', borderRadius: '6px',
                                    border: 'none', outline: 'none', px: '15px', py: '10px', fontFamily: 'Poppins',
                                    fontSize: '13px', color: '#333', resize: 'none', boxSizing: 'border-box'
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Footer Checkbox & Buttons */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mt: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} sx={{ '&.Mui-checked': { color: '#00EA8E' } }} />
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            I certify that all my information provided is true and correct <span style={{ color: '#FF4D4D' }}>*</span>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                        <Button sx={{ bgcolor: '#EAEAEA', color: '#333', borderRadius: '8px', px: '30px', textTransform: 'none', fontFamily: 'Poppins', fontWeight: 500 }}>
                            Save Draft
                        </Button>
                        <Button
                            disabled={!termsAgreed}
                            sx={{
                                bgcolor: '#00EA8E', color: '#fff', borderRadius: '8px', px: '35px', textTransform: 'none', fontFamily: 'Poppins', fontWeight: 500,
                                '&:hover': { bgcolor: '#00c779' }, '&.Mui-disabled': { bgcolor: '#A0E8C4' }
                            }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Popups */}
            <CVPopup isOpen={isCvPopupOpen} onClose={() => setIsCvPopupOpen(false)} onSave={() => setResumeFile({ name: 'selected_cv.pdf' })} />
            <ChooseLetterPopup isOpen={isLetterPopupOpen} onClose={() => setIsLetterPopupOpen(false)} onSave={() => setCoverFile({ name: 'selected_cover.pdf' })} />
        </Box>
    );
};

export default ApplyInternship;
