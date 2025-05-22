import { Avatar, Chip, Divider, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

interface Testimonial {
    rating: number,
    review: string,
    name: string,
    title: string,
    type: string,
}

const TestimonialCards = ({
    rating,
    review,
    name,
    title,
    type,
}: Testimonial) => {
    const initials = name.split(" ").map(n => n[0]).join("")

  return (
    <Paper
    elevation={0}
        sx={{
            p: 4,
            borderRadius: 4,
            minWidth: 300,
            maxWidth: 370,
            flex: '1 1 300px',
            background: '#fff',
            boxShadow: '0 4px 24px rgba(103,58,183,0.04)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
            border: '1px solid #f0eefc'
        }}
    >
        <Typography sx={{ color: '#2196f3', fontSize: 20, mb: 2 }}>
            {'★'.repeat(rating)}
        </Typography>
        <Typography sx={{ fontStyle: 'italic', mb: 4, fontSize: '1.1rem' }}>
            {review}
        </Typography>
        <Divider sx={{ width: '100%', mb: 2, mt: 'auto', bgcolor: '#f0eefc' }} />
        <Box display="flex" alignItems="center" gap={2} sx={{ mb: 2 }}>
            <Avatar sx={{ width: 48, height: 48, fontWeight: 700, fontSize: 22 }}>
                {initials}
            </Avatar>
            <Box>
                <Typography fontWeight={700}>{name}</Typography>
                <Typography color="text.secondary" fontSize="0.95rem">{title}</Typography>
            </Box>
        </Box>
        <Chip
            label={type}
            size="small"
            sx={{
                bgcolor: type === "Recruiter" ? "#e3f2fd" : "#ede7f6",
                color: type === "Recruiter" ? "#2196f3" : "#7c4dff",
                fontWeight: 500,
                fontSize: '0.85rem',
                borderRadius: 2,
                mt: -1
            }}
        />
  </Paper>
  )
}

export default TestimonialCards
