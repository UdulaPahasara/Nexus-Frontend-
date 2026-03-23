import React, { useState, useRef } from 'react';
import { Box, Typography, Switch, Select, MenuItem, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DescriptionIcon from '@mui/icons-material/Description';
import CancelIcon from '@mui/icons-material/Cancel';
import CVPopup from './popup/cvpopup';
import ChooseLetterPopup from './popup/chooseletter';

// Assets
import companyLogo from '../../../assets/jobs/company1.webp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Reusable Components matching the design
const GreenCheck = () => (
    <Box sx={{
        width: '16px', height: '16px', bgcolor: '#00EA8E', borderRadius: '3px',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
        <DoneIcon sx={{ color: '#fff', fontSize: '13px', strokeWidth: 1 }} />
    </Box>
);

const CustomField = ({ label, value, onChange, type = "text" }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
            {label}
        </Typography>
        <Box sx={{
            display: 'flex', alignItems: 'center', bgcolor: '#F5F5F5',
            borderRadius: '6px', px: '15px', py: '10px'
        }}>
            <Box
                component="input"
                type={type}
                value={value}
                onChange={onChange}
                placeholder={`Enter ${label}`}
                sx={{
                    flex: 1, border: 'none', outline: 'none', bgcolor: 'transparent',
                    fontFamily: 'Poppins', fontSize: '13px', color: '#111', fontWeight: 500,
                    width: '100%'
                }}
            />
            {value && value.trim() !== '' && <GreenCheck />}
        </Box>
    </Box>
);

const FileUploadField = ({ label, file, onFileSelect, onRemoveFile, buttonText, noteText, showDefaultSwitch, defaultSwitchValue, onSwitchChange, onClickButton }) => {
    const fileInputRef = useRef(null);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mt: '10px' }}>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                {label}
            </Typography>
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                bgcolor: '#F5F5F5', borderRadius: '6px', px: '15px', py: '10px',
                flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '10px', sm: '0' }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', width: { xs: '100%', sm: 'auto' }, overflow: 'hidden' }}>
                    {file ? (
                        <>
                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                <DescriptionIcon sx={{ color: '#999', fontSize: '28px' }} />
                                <CancelIcon
                                    onClick={onRemoveFile}
                                    sx={{
                                        position: 'absolute', top: -4, right: -4, cursor: 'pointer',
                                        color: '#FF4D4D', fontSize: '14px', bgcolor: '#fff', borderRadius: '50%'
                                    }}
                                />
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: '#333', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: { xs: '180px', sm: '200px' } }}>
                                {file.name}
                            </Typography>
                        </>
                    ) : (
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
                            No file chosen
                        </Typography>
                    )}
                </Box>

                <input
                    type="file"
                    hidden
                    ref={fileInputRef}
                    onChange={onFileSelect}
                    accept=".pdf,.doc,.docx,.rtf,.txt"
                />
                <Box
                    onClick={onClickButton || (() => fileInputRef.current?.click())}
                    sx={{
                        border: '1px solid #00EA8E', borderRadius: '20px',
                        px: '12px', py: '4px', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: { xs: '100%', sm: 'auto' }, boxSizing: 'border-box'
                    }}
                >
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#111', fontWeight: 500, whiteSpace: 'nowrap' }}>
                        {buttonText}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '11px', color: '#FF4D4D', mt: '2px' }}>
                * {noteText}
            </Typography>
            {showDefaultSwitch && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '5px' }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#333', fontWeight: 500 }}>
                        Use My Default Cover Letter
                    </Typography>
                    <Switch
                        checked={defaultSwitchValue}
                        onChange={onSwitchChange}
                        sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': { color: '#00EA8E' },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#00EA8E' },
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};

const ApplyJob = ({ darkMode }) => {
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
                                    Pixel Studio Pvt Ltd
                                </Typography>
                                <CheckCircleIcon sx={{ fontSize: '16px', color: '#0077B5' }} />
                            </Box>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Colombo, Sri Lanka
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
                            UI/UX Designer (Part-Time)
                        </Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            3 hours ago
                        </Typography>
                        <Box sx={{
                            bgcolor: 'rgba(0, 234, 142, 0.15)', color: '#00EA8E',
                            px: '10px', py: '2px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px'
                        }}>
                            <Typography sx={{ fontSize: '11px', fontWeight: 600, fontFamily: 'Poppins' }}>Part-Time</Typography>
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
                                sx={{
                                    bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px',
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                    fontFamily: 'Poppins', fontSize: '13px', color: '#333'
                                }}
                            >
                                <MenuItem value="" disabled>select years</MenuItem>
                                <MenuItem value={1}>1 Year</MenuItem>
                                <MenuItem value={2}>2 Years</MenuItem>
                            </Select>
                        </Box>

                        {/* Legal */}
                        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                                Are You Legally Eligible To Work In Saudi Arabia? <span style={{ color: '#FF4D4D' }}>*</span>
                            </Typography>
                            <RadioGroup row value={formData.eligible} onChange={handleInputChange('eligible')} sx={{ flexWrap: 'nowrap' }}>
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio sx={{ '&.Mui-checked': { color: '#888' }, p: '4px' }} />}
                                    label={<Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>Yes</Typography>}
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio sx={{ '&.Mui-checked': { color: '#888' }, p: '4px' }} />}
                                    label={<Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>No</Typography>}
                                />
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
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            borderRadius: '12px',
                                            boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
                                            mt: '4px',
                                            '& .MuiList-root': { padding: 0 }
                                        }
                                    }
                                }}
                                sx={{
                                    bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px',
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                    fontFamily: 'Poppins', fontSize: '13px', color: '#333'
                                }}
                            >
                                <MenuItem value="" disabled sx={{ display: 'none' }}>select one</MenuItem>
                                {[
                                    'Immediately', 'Within 1 week', 'Within 2 weeks',
                                    'Within 1 month', 'After 1 month', 'Upon contract notice period'
                                ].map((option, index, arr) => (
                                    <MenuItem
                                        key={option}
                                        value={option}
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontSize: '13px',
                                            color: '#666',
                                            py: '12px',
                                            px: '16px',
                                            borderBottom: index === arr.length - 1 ? 'none' : '1px solid #f0f0f0',
                                            '&:hover': { bgcolor: '#f9f9f9' }
                                        }}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Box>

                    {/* Salary */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: { xs: '100%', md: '32%' } }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            Expected Salary <span style={{ color: '#FF4D4D' }}>*</span>
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#F5F5F5', borderRadius: '6px', height: '40px' }}>
                            <Select
                                value={formData.salaryCurrency}
                                onChange={handleInputChange('salaryCurrency')}
                                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '12px', color: '#333', minWidth: '80px' }}
                            >
                                <MenuItem value="SAR">SAR</MenuItem>
                                <MenuItem value="USD">USD</MenuItem>
                            </Select>
                            <Box
                                component="input"
                                type="number"
                                placeholder="Enter Amount"
                                value={formData.salaryAmount}
                                onChange={handleInputChange('salaryAmount')}
                                sx={{ flex: 1, border: 'none', outline: 'none', bgcolor: 'transparent', fontFamily: 'Poppins', fontSize: '12px', color: '#111', py: '10px', width: '50px' }}
                            />
                            <Select
                                value={formData.salaryPeriod}
                                onChange={handleInputChange('salaryPeriod')}
                                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, fontFamily: 'Poppins', fontSize: '12px', color: '#333', minWidth: { xs: '90px', sm: '100px' } }}
                            >
                                <MenuItem value="Monthly">Monthly</MenuItem>
                                <MenuItem value="Yearly">Yearly</MenuItem>
                            </Select>
                        </Box>
                    </Box>

                    {/* Textarea */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            Tell Us Why You're a Great Fit?
                        </Typography>
                        <Box
                            component="textarea"
                            placeholder="A personal note to the recruiter..."
                            value={formData.fitNote}
                            onChange={handleInputChange('fitNote')}
                            sx={{
                                width: '100%', height: '100px', bgcolor: '#F5F5F5', borderRadius: '6px',
                                border: 'none', outline: 'none', p: '15px', fontFamily: 'Poppins',
                                fontSize: '13px', color: '#333', resize: 'none', boxSizing: 'border-box'
                            }}
                        />
                    </Box>
                </Box>

                {/* Footer Checkbox & Buttons */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', mt: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Checkbox
                            checked={termsAgreed}
                            onChange={(e) => setTermsAgreed(e.target.checked)}
                            sx={{ p: '5px', '&.Mui-checked': { color: '#00EA8E' } }}
                        />
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#888' }}>
                            I verify that all my information provided is true and correct <span style={{ color: '#FF4D4D' }}>*</span>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, gap: '15px', flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                        <Button sx={{
                            textTransform: 'none', fontFamily: 'Poppins', fontWeight: 500,
                            bgcolor: '#EAEAEA', color: '#333', borderRadius: '8px', px: '30px', width: { xs: '100%', sm: 'auto' },
                            boxShadow: 'none', '&:hover': { bgcolor: '#ddd', boxShadow: 'none' }
                        }}>
                            Save Draft
                        </Button>
                        <Button
                            disabled={!termsAgreed}
                            sx={{
                                textTransform: 'none', fontFamily: 'Poppins', fontWeight: 500,
                                bgcolor: '#00EA8E', color: '#fff', borderRadius: '8px', px: '35px', width: { xs: '100%', sm: 'auto' },
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#00c779', boxShadow: 'none' },
                                '&.Mui-disabled': { bgcolor: '#A0E8C4', color: '#fff' }
                            }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Popups */}
            <CVPopup
                isOpen={isCvPopupOpen}
                onClose={() => setIsCvPopupOpen(false)}
                onSave={() => setResumeFile({ name: 'selected_cv_from_popup.pdf' })}
            />
            <ChooseLetterPopup
                isOpen={isLetterPopupOpen}
                onClose={() => setIsLetterPopupOpen(false)}
                onSave={() => setCoverFile({ name: 'selected_cover_letter.pdf' })}
            />
        </Box>
    );
};

export default ApplyJob;
