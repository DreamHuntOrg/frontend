import React from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';

interface ReviewProps {
  onBack: () => void;
  onComplete?: () => void;
}

const Review: React.FC<ReviewProps> = ({ onBack, onComplete }) => {
  // Mock data (replace with real data as needed)
  const basicInfo = {
    name: '',
    title: '',
    github: '',
    availability: '',
  };
  const skills: string[] = [];
  const experienceLevel = '';
  const projects = [
    {
      name: '',
      description: '',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#FAF8FF',
        py: { xs: 4, md: 8 },
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 800,
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: '0 4px 24px 0 rgba(80, 63, 205, 0.08)',
          p: { xs: 2, sm: 4 },
          mb: 4,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#232323' }}>
          Review Your Profile
        </Typography>

        {/* Basic Information */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 3,
            borderRadius: 2,
            boxShadow: '0 2px 8px 0 rgba(80, 63, 205, 0.04)',
            background: '#fff',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#232323' }}>
            Basic Information
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            <Box sx={{ flex: 1, minWidth: 180 }}>
              <Typography variant="body2" sx={{ color: '#A0AEC0' }}>Name</Typography>
              <Typography sx={{ fontWeight: 700, color: '#232323', mb: 2 }}>
                {basicInfo.name ? basicInfo.name : <span style={{ color: '#232323' }}>Not provided</span>}
              </Typography>
              <Typography variant="body2" sx={{ color: '#A0AEC0' }}>GitHub</Typography>
              <Typography sx={{ fontWeight: 700, color: '#232323' }}>
                {basicInfo.github ? basicInfo.github : <span style={{ color: '#232323' }}>Not provided</span>}
              </Typography>
            </Box>
            <Box sx={{ flex: 1, minWidth: 180 }}>
              <Typography variant="body2" sx={{ color: '#A0AEC0' }}>Title</Typography>
              <Typography sx={{ fontWeight: 700, color: '#232323', mb: 2 }}>
                {basicInfo.title ? basicInfo.title : <span style={{ color: '#232323' }}>Not provided</span>}
              </Typography>
              <Typography variant="body2" sx={{ color: '#A0AEC0' }}>Availability</Typography>
              <Typography sx={{ fontWeight: 700, color: '#232323' }}>
                {basicInfo.availability ? basicInfo.availability : <span style={{ color: '#232323' }}>Not provided</span>}
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Skills & Experience */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 3,
            borderRadius: 2,
            boxShadow: '0 2px 8px 0 rgba(80, 63, 205, 0.04)',
            background: '#fff',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#232323' }}>
            Skills & Experience
          </Typography>
          <Box>
            <Typography variant="body2" sx={{ color: '#A0AEC0' }}>Skills</Typography>
            <Typography sx={{ color: '#232323', mb: 2 }}>
              {skills.length > 0 ? skills.join(', ') : 'No skills provided'}
            </Typography>
            <Typography variant="body2" sx={{ color: '#A0AEC0' }}>Experience Level</Typography>
            <Typography sx={{ fontWeight: 700, color: '#232323' }}>
              {experienceLevel ? experienceLevel : 'Not provided'}
            </Typography>
          </Box>
        </Paper>

        {/* Projects */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3 },
            mb: 3,
            borderRadius: 2,
            boxShadow: '0 2px 8px 0 rgba(80, 63, 205, 0.04)',
            background: '#fff',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#232323' }}>
            Projects
          </Typography>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: '#F7F6FA',
              border: '1px solid #F0EFFF',
              mb: 1,
            }}
          >
            <Typography sx={{ fontWeight: 700, color: '#232323', mb: 0.5 }}>
              {projects[0].name ? projects[0].name : 'Untitled Project'}
            </Typography>
            <Typography sx={{ color: '#A0AEC0' }}>
              {projects[0].description ? projects[0].description : 'No description provided'}
            </Typography>
          </Box>
        </Paper>

        {/* Action Buttons */}
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            onClick={onBack}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 500,
              color: '#7B61FF',
              borderColor: '#E0E0E0',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                borderColor: '#7B61FF',
                background: '#F3F0FF',
              },
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={onComplete}
            sx={{
              borderRadius: 2,
              px: 4,
              py: 1.5,
              fontWeight: 500,
              background: '#7B61FF',
              color: '#fff',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                background: '#6C63FF',
                boxShadow: 'none',
              },
            }}
          >
            Complete Setup
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Review;
