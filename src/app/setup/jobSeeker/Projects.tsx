import {
    Box,
    Typography,
    Button,
    TextField,
    Link,
    Divider,
    Stack
  } from '@mui/material';
  import AddIcon from '@mui/icons-material/Add';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  
interface ProjectProps {
    onBack: () => void;
    onNext: () => void;
  }

const ProjectsSection = ({ onBack, onNext }: ProjectProps) => {
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
          Projects
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Showcase your best projects that demonstrate your skills and expertise.
        </Typography>
  
        {/* Project 1 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            Project Name
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, fontStyle: 'italic' }}>
            E-commerce Platform
          </Typography>
          
          <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
            Project URL
          </Typography>
          <Link 
            href="https://github.com/username/project" 
            target="_blank" 
            rel="noopener"
            sx={{ 
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            https://github.com/username/project
          </Link>
        </Box>
  
        {/* Description */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 1 }}>
            Description
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={4}
            placeholder="Brief description of the project, your role, and technologies used..."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: '#f5f5f5',
                borderRadius: 2
              }
            }}
          />
        </Box>
  
        <Divider sx={{ my: 3 }} />
  
        {/* Add Project Button */}
        <Button
          fullWidth
          startIcon={<AddIcon />}
          variant="outlined"
          sx={{
            mb: 4,
            py: 1.5,
            borderStyle: 'dashed',
            borderColor: 'text.secondary',
            color: 'text.secondary',
            '&:hover': {
              borderColor: 'primary.main',
              color: 'primary.main',
              bgcolor: 'action.hover'
            }
          }}
        >
          Add another project
        </Button>
  
        {/* Navigation Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            onClick={onBack}
            sx={{
              textTransform: 'none',
              px: 3,
              py: 1
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={onNext}
            sx={{
              textTransform: 'none',
              px: 4,
              py: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark'
              }
            }}
          >
            Continue
          </Button>
        </Stack>
      </Box>
    );
};
  
export default ProjectsSection;