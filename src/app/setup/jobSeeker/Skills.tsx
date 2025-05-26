import { 
    Box, 
    Typography, 
    Button, 
    Chip, 
    TextField, 
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Divider,
    Stack
  } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  
  interface SkillsProps {
    onBack: () => void;
    onNext: () => void;
  }
const SkillsAndExpertise = ({ onBack, onNext }: SkillsProps) => {
    return (
      <Box sx={{
        maxWidth: '800px',
        mx: 'auto',
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1
      }}>
        {/* Header */}
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Skills & Expertise
        </Typography>
        
        {/* Key Skills Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Key Skills
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Add your technical skills, programming languages, frameworks, tools, etc.
          </Typography>
          
          {/* Skills Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            <Chip label="React" onDelete={() => {}} />
            <Chip label="Node.js" onDelete={() => {}} />
            <Chip label="Python" onDelete={() => {}} />
          </Box>
          
          {/* Add Skill Input */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a skill (e.g. React, Node.js, Python)..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 1 }}
          />
          <Button 
            startIcon={<AddIcon />} 
            variant="text" 
            sx={{ color: 'primary.main', textTransform: 'none' }}
          >
            Add
          </Button>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Experience Level Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Experience Level
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Select your experience level</InputLabel>
            <Select
              label="Select your experience level"
              defaultValue=""
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
              <MenuItem value="expert">Expert</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Availability Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Availability
          </Typography>
          <FormControl fullWidth>
            <InputLabel>Select your availability</InputLabel>
            <Select
              label="Select your availability"
              defaultValue=""
            >
              <MenuItem value="full-time">Full-time</MenuItem>
              <MenuItem value="part-time">Part-time</MenuItem>
              <MenuItem value="contract">Contract</MenuItem>
              <MenuItem value="freelance">Freelance</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        {/* Navigation Buttons */}
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
          <Button 
            startIcon={<ArrowBackIcon />} 
            variant="outlined" 
            onClick={onBack}
            sx={{ textTransform: 'none' }}
          >
            Back
          </Button>
          <Button 
            variant="contained" 
            onClick={onNext}
            sx={{ 
              textTransform: 'none',
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            Continue
          </Button>
        </Stack>
      </Box>
    );
};
  
export default SkillsAndExpertise;