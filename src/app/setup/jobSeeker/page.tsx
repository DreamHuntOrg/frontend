"use client";

import { Box } from "@mui/system";
import BasicInfo from "./BasicInfo"
import Skills from "./Skills"
import Projects from "./Projects"
import StepperComp from "@/app/components/StepperComp";
import { useState } from "react";
import ResumeUpload from "./Resume";
import Review from "../recruiter/Review";

const steps = ["Basic Info", "Skills", "Projects", "Experience", "Review"]
const SetupJobSeeker = () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep((s) => s+1)
    }
    const handleBack = () => {
        setActiveStep((s) => s-1)
    }

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <BasicInfo onNext={handleNext}/>
            case 1: 
                return <Skills onNext={handleNext} onBack={handleBack}/>
            case 2:
                return <Projects onNext={handleNext} onBack={handleBack}/>
            case 3:
                return <ResumeUpload onNext={handleNext} onBack={handleBack}/>
            case 4:
                return <Review onBack={handleBack}/>
        }
    }
  return (
    <Box>
        <StepperComp activeStep={activeStep} steps={steps} />
        {getStepContent(activeStep)}
    </Box>
  )
}

export default SetupJobSeeker
