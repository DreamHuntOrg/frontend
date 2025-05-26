'use client';

import { Box } from '@mui/system'
import CompanyInfo from './CompanyInfo'
import Prefences from './Prefrences'
import Review from './Review'
import { useState } from 'react'
import StepperComp from '@/app/components/StepperComp';
import { Typography } from '@mui/material';


const steps = ["Company Info", "Hiring Preferences", "Review"]
const SetUp = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => setActiveStep((s) => Math.min(s+1, 2))
  const handleBack = () => setActiveStep((s) => Math.max(s-1, 0))

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <CompanyInfo onNext={handleNext} />
      case 1:
        return <Prefences onNext={handleNext} onBack={handleBack} />
      case 2:
        return <Review onBack={handleBack} />
    }
  }

  return (
    <Box>
        {/* Header */}
      <Typography
        variant="h3"
        fontWeight={700}
        align="center"
        sx={{ mb: 1, fontSize: { xs: "2rem", md: "2.5rem" } }}
      >
        Set up your recruiter profile
      </Typography>
      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 5, fontSize: { xs: 16, md: 18 } }}
      >
        Provide information about your company and hiring needs to connect with the right candidates.
      </Typography>
        <StepperComp activeStep={activeStep} steps={steps} />
        {getStepContent(activeStep)}
    </Box>
  )
}

export default SetUp
