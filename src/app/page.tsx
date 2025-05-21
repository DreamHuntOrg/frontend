import { Box, Button, Paper, Stack, Typography, Avatar, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import EmpCard from "./components/EmpCard";
import CompanyCard from "./components/CompanyCard";
import AIMatchingCard from "./components/AiMatchCard";


export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: "center",
          background: "linear-gradient(120deg, #f8f6ff 60%, #e6eaff 100%)",
          position: 'relative',
          px: { xs: 2, md: 8 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 4, md: 8 },
        }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
          <Typography variant="h2" sx={{ mb: 2, lineHeight: 1.1 }}>
            Where <Box component="span" color="primary.main">talent</Box><br />
            meets <Box component="span" color="primary.main">opportunity</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: "500px" }}>
            Connect skilled people with innovative companies through our consent-based matching platform.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              sx={{ borderRadius: 2 }}
            >
              Create an account
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large" 
              sx={{ borderRadius: 2, backgroundColor: "#fff" }}
            >
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
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          height: '500px',
        }}>
          <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}>
            <Box sx={{
              position: 'absolute',
              top: '15%',
              left: '10%',
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'rgba(103, 58, 183, 0.05)',
              animation: 'float 8s ease-in-out infinite',
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(33, 150, 243, 0.05)',
              animation: 'float 6s ease-in-out infinite',
            }} />
            <Box sx={{
              position: 'absolute',
              top: '60%',
              left: '20%',
              width: 30,
              height: 30,
              borderRadius: '8px',
              background: 'rgba(233, 30, 99, 0.05)',
              transform: 'rotate(45deg)',
              animation: 'float 7s ease-in-out infinite',
            }} />
          </Box>

          {/* Card Container */}
          <Box sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            perspective: '1000px',
          }}>
            <EmpCard />
            <CompanyCard />
            <AIMatchingCard />
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box 
        id="features" 
        sx={{ 
          py: 10, 
          background: 'linear-gradient(180deg, #f8f6ff 0%, #ffffff 100%)',
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              A <Box component="span" color="primary.main">smarter</Box> way to connect
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              Our platform brings together tech talent and employers in a transparent, efficient, and respectful process.
            </Typography>
          </Box>

          {/* Features Grid */}
          <Box display="flex" gap={2}>
            <Box flex={1}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: 3,
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Typography variant="h4" sx={{ mb: 3 }}>For Job Seekers</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Create a compelling profile to showcase your skills and experience.
                </Typography>

                <Stack spacing={3}>
                  {[
                    "Build a rich developer profile with GitHub integration",
                    "Showcase your portfolio and top projects",
                    "Control who contacts you with two-way consent",
                    "Receive opportunities from top tech companies"
                  ].map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={2}>
                      <Avatar sx={{ bgcolor: 'rgba(103, 58, 183, 0.1)', color: 'primary.main' }}>
                        <Box component="span" sx={{ fontSize: '1rem' }}>✓</Box>
                      </Avatar>
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Box>

            <Box flex={1}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%', 
                  borderRadius: 3,
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                <Typography variant="h4" sx={{ mb: 3 }}>For Recruiters</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Find the perfect candidates based on skills, experience, and availability.
                </Typography>

                <Stack spacing={3}>
                  {[
                    "Advanced search with powerful filtering options",
                    "View detailed developer profiles before reaching out",
                    "Respect developer privacy with consent-based communication",
                    "Track your candidate pipeline and interactions"
                  ].map((item, index) => (
                    <Box key={index} display="flex" alignItems="center" gap={2}>
                      <Avatar sx={{ bgcolor: 'rgba(103, 58, 183, 0.1)', color: 'primary.main' }}>
                        <Box component="span" sx={{ fontSize: '1rem' }}>✓</Box>
                      </Avatar>
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}