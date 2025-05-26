import {
    Box,
    Typography,
    Button,
    Divider,
    Stack,
    Paper
  } from '@mui/material';
  import CloudUploadIcon from '@mui/icons-material/CloudUpload';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  
  interface ResumeProps {
    onBack: () => void;
    onNext: () => void;
  }

const ResumeUpload = ({ onBack, onNext }: ResumeProps) => {
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
          Resume & Experience
        </Typography>
  
        {/* Upload Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Upload Resume
          </Typography>
          
          <Paper
            variant="outlined"
            sx={{
              p: 4,
              border: '2px dashed',
              borderColor: 'divider',
              borderRadius: 2,
              textAlign: 'center',
              bgcolor: 'background.default',
              cursor: 'pointer',
              '&:hover': {
                borderColor: 'primary.main',
                bgcolor: 'action.hover'
              }
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 0.5 }}>
              Drag and drop your resume here, or <Box component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}>browse files</Box>
            </Typography>
            <Typography variant="body2" color="text.disabled">
              PDF or Word document, max 5MB
            </Typography>
          </Paper>
        </Box>
  
        <Divider sx={{ my: 3 }} />
  
        {/* Navigation Buttons */}
        <Stack direction="row" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            onClick={onBack}
            sx={{
              textTransform: 'none',
              px: 4,
              py: 1.5
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
              py: 1.5,
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
  
export default ResumeUpload;