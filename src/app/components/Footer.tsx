import { Box, Typography, Link, Stack, Avatar } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "#faf8ff",
        borderTop: "1px solid #f0eefc",
        mt: 8,
        pt: { xs: 6, md: 8 },
        pb: { xs: 3, md: 4 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 0 },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "stretch" },
            mb: 2,
          }}
        >
          {/* Logo and description */}
          <Box sx={{ flex: 1, minWidth: 220, mb: { xs: 3, md: 0 } }}>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Avatar
                sx={{
                  bgcolor: "linear-gradient(135deg, #7c4dff 60%, #536dfe 100%)",
                  color: "#fff",
                  width: 40,
                  height: 40,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                A
              </Avatar>
              <Typography variant="h6" fontWeight={700}>
                Nexus of Talent
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              sx={{ fontSize: 15, mt: 1, maxWidth: 220 }}
            >
              Connecting skilled developers with innovative companies through a seamless, consent-based matching system.
            </Typography>
          </Box>

          {/* Platform */}
          <Box sx={{ flex: 1, minWidth: 160, mb: { xs: 3, md: 0 } }}>
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Platform
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">Features</Link>
              <Link href="#" color="inherit" underline="hover">For Job Seekers</Link>
              <Link href="#" color="inherit" underline="hover">For Recruiters</Link>
              <Link href="#" color="inherit" underline="hover">Success Stories</Link>
            </Stack>
          </Box>

          {/* Resources */}
          <Box sx={{ flex: 1, minWidth: 160, mb: { xs: 3, md: 0 } }}>
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">Developer Blog</Link>
              <Link href="#" color="inherit" underline="hover">Industry Reports</Link>
              <Link href="#" color="inherit" underline="hover">Hiring Guides</Link>
              <Link href="#" color="inherit" underline="hover">Career Advice</Link>
            </Stack>
          </Box>

          {/* Company */}
          <Box sx={{ flex: 1, minWidth: 160 }}>
            <Typography variant="subtitle1" fontWeight={700} mb={1}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">About Us</Link>
              <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
              <Link href="#" color="inherit" underline="hover">Terms of Service</Link>
              <Link href="#" color="inherit" underline="hover">Contact</Link>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid #ece7fa",
            mt: 5,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} ANT. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}