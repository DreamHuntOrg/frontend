import { Avatar, AvatarGroup, Box, Chip, Paper, Stack, Typography } from "@mui/material"

interface CompanyCardProps {
  avatarGrp?: string[];
  name: string;
  isHiring?: boolean;
  location: string;
  industry: string;
  review: string;
  positions: string[];
  rating: number;
}

const CompanyCard = ({
  avatarGrp=[],
  name,
  isHiring=true,
  location,
  industry,
  review,
  positions,
  rating,
}: CompanyCardProps) => {
  const initials = name.split(" ").map(n => n[0]).join("")
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? '⯨' : '';
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

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
            }}>{initials}</Avatar>
            <Typography variant="h6" fontWeight="500">{name}</Typography>
          </Box>
          {isHiring && (
            <Chip label="Hiring" size="small" sx={{ 
              bgcolor: 'rgba(76, 175, 80, 0.08)', 
              color: '#4caf50',
              fontWeight: 'medium',
              fontSize: '0.75rem',
              height: 24,
            }} />
          )}
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, mt: 1.5, fontSize: '0.875rem' }}>
          {location} • {industry}
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 2, fontStyle: 'italic', color: '#555', fontSize: '0.875rem' }}>
          {review}
        </Typography>
        
        <Box sx={{ mb: 1.5 }}>
          <Typography variant="body2" fontWeight="500" sx={{ mb: 0.75, fontSize: '0.875rem' }}>
            Open Positions:
          </Typography>
    
          <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', gap: 0.75 }}>
            {positions.map((pos,i) => (
              <Chip key={i} 
                label={pos} 
                size="small" sx={{ 
                height: 24, 
                fontSize: '0.75rem',
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              }} />
            ))}
          </Stack>
        </Box>
        
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
          <Typography color="primary.main" sx={{ fontSize: '1.1rem', letterSpacing: '0.1em' }}>
            {'★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars)}
          </Typography>
          <AvatarGroup max={4} sx={{ 
            '& .MuiAvatar-root': { 
              width: 24, 
              height: 24, 
              fontSize: '0.75rem',
              border: '1px solid #fff',
            } 
          }}>
            {avatarGrp.map((src, i) => (
              <Avatar key={i} alt={`user-${i}`} src={src} />
            ))}
          </AvatarGroup>
        </Box>
      </Paper>

  )
}

export default CompanyCard
