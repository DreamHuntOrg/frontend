import { Avatar, Box, Chip, LinearProgress, Paper, Stack, Typography } from '@mui/material'

const EmpCard = () => {
  return (
    <Paper elevation={2} sx={{
        p: 3.5,
        minWidth: 340,
        maxWidth: 380,
        borderRadius: 2,
        position: 'absolute',
        top: 0,
        right: 40,
        zIndex: 3,
        backgroundColor: "#fff",
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        minHeight: 220,
      }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={1.5}>
          <Avatar sx={{ 
            bgcolor: 'primary.main',
            width: 42,
            height: 42,
            fontWeight: 'bold',
          }}>JD</Avatar>
          <Typography variant="h6" fontWeight="500">Full Stack Developer</Typography>
        </Box>
        <Chip label="Available" size="small" sx={{ 
          bgcolor: "rgba(103, 58, 183, 0.08)", 
          color: "primary.main",
          fontWeight: 'medium',
          fontSize: '0.75rem',
          height: 24,
        }} />
      </Box>
      
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
          5 years experience
        </Typography>
        <Typography variant="body2" fontWeight="600" color="primary.main" sx={{ fontSize: '0.875rem' }}>
          Match Score: 95%
        </Typography>
      </Box>
      
      <LinearProgress 
        variant="determinate" 
        value={95} 
        sx={{ 
          mt: 1.5, 
          mb: 3, 
          height: 4, 
          borderRadius: 2,
          backgroundColor: 'rgba(103, 58, 183, 0.08)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'primary.main',
          }
        }} 
      />
      
      <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75 }}>
        <Chip label="React" size="small" sx={{ 
          bgcolor: 'rgba(33, 150, 243, 0.08)', 
          color: '#2196f3',
          fontWeight: 'medium',
          height: 24,
          fontSize: '0.75rem',
        }} />
        <Chip label="Node.js" size="small" sx={{ 
          bgcolor: 'rgba(76, 175, 80, 0.08)', 
          color: '#4caf50',
          fontWeight: 'medium',
          height: 24,
          fontSize: '0.75rem',
        }} />
        <Chip label="MongoDB" size="small" sx={{ 
          bgcolor: 'rgba(56, 142, 60, 0.08)', 
          color: '#388e3c',
          fontWeight: 'medium',
          height: 24,
          fontSize: '0.75rem',
        }} />
        <Chip label="TypeScript" size="small" sx={{ 
          bgcolor: 'rgba(3, 169, 244, 0.08)', 
          color: '#03a9f4',
          fontWeight: 'medium',
          height: 24,
          fontSize: '0.75rem',
        }} />
      </Stack>
    </Paper>
  )
}

export default EmpCard
