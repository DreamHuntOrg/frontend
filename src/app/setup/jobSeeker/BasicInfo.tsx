import { Box, Typography, TextField, Button } from "@mui/material"
import { useState } from "react"

interface BasicInfoProps {
  onNext: () => void
}

const BasicInformation = ({onNext}: BasicInfoProps) => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    professionalTitle: 'Full Stack Developer',
    githubUrl: 'https://github.com/username',
    bio: 'Tell recruiters about yourself, your experience, and what you\'re looking for...'
  })

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
  }

  return (
    <Box sx={{ 
      maxWidth: '800px', 
      mx: 'auto', 
      p: 4,
      backgroundColor: '#ffffff'
    }}>
      {/* Section Title */}
      <Typography 
        variant="h5" 
        sx={{ 
          fontWeight: 600,
          color: '#2d3748',
          mb: 4,
          fontSize: '24px'
        }}
      >
        Basic Information
      </Typography>

      {/* Form Fields Container */}
      <Box sx={{ mb: 4 }}>
        {/* Full Name and Professional Title Row */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3, 
          mb: 3,
          flexDirection: { xs: 'column', sm: 'row' }
        }}>
          {/* Full Name */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 500,
                color: '#2d3748',
                mb: 1,
                fontSize: '16px'
              }}
            >
              Full Name
            </Typography>
            <TextField
              fullWidth
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f7fafc',
                  borderRadius: '8px',
                  fontSize: '16px',
                  '& fieldset': {
                    borderColor: '#e2e8f0',
                    borderWidth: '1px'
                  },
                  '&:hover fieldset': {
                    borderColor: '#cbd5e0'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#8b5cf6',
                    borderWidth: '2px'
                  }
                },
                '& .MuiInputBase-input': {
                  color: '#a0aec0',
                  padding: '14px 16px'
                }
              }}
            />
          </Box>

          {/* Professional Title */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                fontWeight: 500,
                color: '#2d3748',
                mb: 1,
                fontSize: '16px'
              }}
            >
              Professional Title
            </Typography>
            <TextField
              fullWidth
              value={formData.professionalTitle}
              onChange={handleInputChange('professionalTitle')}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f7fafc',
                  borderRadius: '8px',
                  fontSize: '16px',
                  '& fieldset': {
                    borderColor: '#e2e8f0',
                    borderWidth: '1px'
                  },
                  '&:hover fieldset': {
                    borderColor: '#cbd5e0'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#8b5cf6',
                    borderWidth: '2px'
                  }
                },
                '& .MuiInputBase-input': {
                  color: '#a0aec0',
                  padding: '14px 16px'
                }
              }}
            />
          </Box>
        </Box>

        {/* GitHub Profile URL */}
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 500,
              color: '#2d3748',
              mb: 1,
              fontSize: '16px'
            }}
          >
            GitHub Profile URL
          </Typography>
          <TextField
            fullWidth
            value={formData.githubUrl}
            onChange={handleInputChange('githubUrl')}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f7fafc',
                borderRadius: '8px',
                fontSize: '16px',
                '& fieldset': {
                  borderColor: '#e2e8f0',
                  borderWidth: '1px'
                },
                '&:hover fieldset': {
                  borderColor: '#cbd5e0'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#8b5cf6',
                  borderWidth: '2px'
                }
              },
              '& .MuiInputBase-input': {
                color: '#a0aec0',
                padding: '14px 16px'
              }
            }}
          />
        </Box>

        {/* Professional Bio */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontWeight: 500,
              color: '#2d3748',
              mb: 1,
              fontSize: '16px'
            }}
          >
            Professional Bio
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            value={formData.bio}
            onChange={handleInputChange('bio')}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f7fafc',
                borderRadius: '8px',
                fontSize: '16px',
                '& fieldset': {
                  borderColor: '#e2e8f0',
                  borderWidth: '1px'
                },
                '&:hover fieldset': {
                  borderColor: '#cbd5e0'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#8b5cf6',
                  borderWidth: '2px'
                }
              },
              '& .MuiInputBase-input': {
                color: '#a0aec0',
                padding: '14px 16px'
              }
            }}
          />
        </Box>
      </Box>

      {/* Continue Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={onNext}
          sx={{
            backgroundColor: '#8b5cf6',
            color: 'white',
            borderRadius: '8px',
            padding: '12px 32px',
            fontSize: '16px',
            fontWeight: 500,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#7c3aed',
              boxShadow: 'none'
            }
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  )
}

export default BasicInformation