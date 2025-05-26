import { Step, StepLabel, Stepper, stepConnectorClasses, StepConnector, StepIconProps } from "@mui/material"
import { Box, styled } from "@mui/system"



interface stepperProps {
  activeStep: number,
  steps: string[]
}

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 20,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#cfd8dc',
    borderTopWidth: 2,
    borderRadius: 1,
    minWidth: 60,
  },
}))


const CustomStepIconRoot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{
  active?: boolean;
}>(({ active }) => ({
  backgroundColor: active ? '#7B61FF' : '#faf8ff',
  color: active ? '#fff' : '#b0b0b0',
  border: active ? `2px solid #7B61FF` : `2px solid #cfd8dc`,
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 500,
  fontSize: 20,
  transition: 'all 0.2s',
  boxShadow: 'none',
}))

function CustomStepIcon(props: StepIconProps) {
  const { active, icon } = props;
  return (
    <CustomStepIconRoot active={active}>
      {icon}
    </CustomStepIconRoot>
  );
}

const StepperComp = ({ activeStep, steps }: stepperProps) => {
  return (
    <Box display="flex" justifyContent="center" mt={4} mb={4}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<CustomConnector />}
        sx={{ width: '100%', maxWidth: 900 }}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              sx={{
                '& .MuiStepLabel-label': {
                  mt: 1.5,
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: activeStep === index ? 'primary.main' : '#607d8b',
                  textAlign: 'center',
                  transition: 'color 0.2s',
                },
                '& .MuiStepLabel-alternativeLabel': {
                  top: 0,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default StepperComp