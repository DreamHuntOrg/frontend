import { Avatar, AvatarGroup, Box, Chip, Paper, Stack, Typography } from "@mui/material"


const CompanyCard = () => {
  return (
    <Paper elevation={2} sx={{ 
        p: 3,
        minWidth: 320,
        maxWidth: 360,
        borderRadius: 2,
        position: 'absolute',
        top: 180,
        right: 0,
        zIndex: 4,
        bgcolor: '#fff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        opacity: 0.8,
      }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={1.5}>
            <Avatar sx={{ 
              bgcolor: '#2196f3',
              width: 42,
              height: 42,
              fontWeight: 'bold',
            }}>TC</Avatar>
            <Typography variant="h6" fontWeight="500">TechCorp Inc.</Typography>
          </Box>
          <Chip label="Hiring" size="small" sx={{ 
            bgcolor: 'rgba(76, 175, 80, 0.08)', 
            color: '#4caf50',
            fontWeight: 'medium',
            fontSize: '0.75rem',
            height: 24,
          }} />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, mt: 1.5, fontSize: '0.875rem' }}>
          San Francisco, CA • AI & Machine Learning
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic', color: '#555', fontSize: '0.875rem' }}>
          &quot;We&apos;ve hired 5 amazing developers through ANT in last 3 months!&quot;
        </Typography>
        
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="body2" fontWeight="500" sx={{ mb: 0.75, fontSize: '0.875rem' }}>
            Open Positions:
          </Typography>
          <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75 }}>
            <Chip label="Frontend" size="small" sx={{ 
              height: 24, 
              fontSize: '0.75rem',
              bgcolor: 'rgba(0, 0, 0, 0.04)',
            }} />
            <Chip label="ML Engineer" size="small" sx={{ 
              height: 24, 
              fontSize: '0.75rem',
              bgcolor: 'rgba(0, 0, 0, 0.04)',
            }} />
            <Chip label="DevOps" size="small" sx={{ 
              height: 24, 
              fontSize: '0.75rem',
              bgcolor: 'rgba(0, 0, 0, 0.04)',
            }} />
          </Stack>
        </Box>
        
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
          <Box color="primary.main" sx={{ fontSize: '0.875rem' }}>★★★★★</Box>
          <AvatarGroup max={4} sx={{ 
            '& .MuiAvatar-root': { 
              width: 24, 
              height: 24, 
              fontSize: '0.75rem',
              border: '1px solid #fff',
            } 
          }}>
            <Avatar alt="User 1" src="/static/images/avatar/1.jpg" />
            <Avatar alt="User 2" src="/static/images/avatar/2.jpg" />
            <Avatar alt="User 3" src="/static/images/avatar/3.jpg" />
            <Avatar alt="User 4" src="/static/images/avatar/4.jpg" />
            <Avatar alt="User 5" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
      </Paper>

  )
}

export default CompanyCard
