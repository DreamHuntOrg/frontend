import { Box, Paper, Avatar, Typography } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function AIMatchingCard() {
  return (
    <Paper elevation={2} sx={{
      p: 2.5,
      width: 280,
      borderRadius: 2,
      position: 'absolute',
      bottom: 40,
      left: 20,
      zIndex: 1,
      bgcolor: '#fff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    }}>
      <Box display="flex" alignItems="center" gap={1.5} sx={{ mb: 1.5 }}>
        <Avatar sx={{
          bgcolor: 'rgba(103, 58, 183, 0.1)',
          color: 'primary.main',
          width: 32,
          height: 32,
        }}>
          <AutoAwesomeIcon fontSize="small" />
        </Avatar>
        <Typography variant="body2" fontWeight="500">
          AI-based Smart Match
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
        Our AI analyzes skills, experience, and company needs to recommend the perfect matches in seconds.
      </Typography>
    </Paper>
  );
}
