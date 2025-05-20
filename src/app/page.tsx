import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(120deg, #f8f6ff 60%, #e6eaff 100%)",
          position: 'relative',
          px: { xs: 2, md: 8 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 4, md: 8 },
        }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" sx={{ mb: 2, lineHeight: 1.1 }}>
            Where <Box component="span" color="primary.main">talent</Box><br />
            meets <Box component="span" color="primary.main">opportunity</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 , maxWidth: "500px"}}>
            Connect skilled people with innovative companies through our consent-based matching platform.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button variant="contained" color="primary" size="large" sx={{ borderRadius: 2 }}>
              Create an account
            </Button>
            <Button variant="outlined" color="primary" size="large" sx={{ borderRadius: 2, backgroundColor: "#fff" }}>
              Sign in
            </Button>
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            Trusted by 2,000+ users and 500+ companies
          </Typography>
        </Box>

        {/* Right Side */}
        <Box sx={{
          flex: 1,
          display: { xs: 'none', md: 'flex'},
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Upper Card */}
          <Paper elevation={6} sx={{
              p: 3,
              minWidth: 340,
              maxWidth: 380,
              borderRadius: 4,
              position: 'absolute',
              top: 0,
              right: 40,
              zIndex: 2,
              backgroundColor: "#fff",
            }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Full Stack Developer</Typography>
              <Chip label="Available" color="primary" size="small" sx={{ bgcolor: "#f3f0ff", color: "primary.main"}} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
}
