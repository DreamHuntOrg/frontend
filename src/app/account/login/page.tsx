"use client";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "#faf8ff",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 8 },
          py: 4,
        }}
      >
        {/* Logo */}
        <Stack direction="row" alignItems="center" spacing={1} mb={4}>
          <Avatar
            sx={{
              bgcolor: "linear-gradient(135deg, #7c4dff 60%, #536dfe 100%)",
              color: "#fff",
              width: 36,
              height: 36,
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            ANT
          </Avatar>
          <Typography variant="h6" fontWeight={700}>
            Accelerated Nexus of Talent
          </Typography>
        </Stack>

        {/* Title */}
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: 1, fontSize: { xs: "2rem", md: "2.5rem" } }}
        >
          Sign in to your account
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Enter your credentials to access your dashboard
        </Typography>

        {/* Login Form */}
        <Box component="form" sx={{ width: "100%", maxWidth: 420 }}>
          <TextField
            label="Email address"
            placeholder="name@example.com"
            fullWidth
            margin="normal"
            size="medium"
            type="email"
          />
          {/* Password Field with Forgot Password */}
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', mb: 1 }}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              size="medium"
              sx={{ pr: 0, mb: 0 }}
            />
            <Link
              href="#"
              sx={{
                position: 'absolute',
                right: 16,
                top: '55%',
                transform: 'translateY(-30%)',
                fontSize: 14,
                color: '#7c4dff',
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Forgot password?
            </Link>
          </Box>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography sx={{ fontSize: 15 }}>
                Remember me for 30 days
              </Typography>
            }
            sx={{ mt: 1, mb: 2, alignItems: 'center' }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              fontWeight: 700,
              bgcolor: "#7c4dff",
              boxShadow: "none",
              mb: 2,
              mt: 1,
              fontSize: "1.1rem",
              "&:hover": { bgcolor: "#a084e8" },
            }}
          >
            Sign in
          </Button>
          <Divider sx={{ my: 2 }}>Or continue with</Divider>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                bgcolor: "#fff",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                minWidth: 140,
                borderColor: "#ece7fa",
                "&:hover": { bgcolor: "#f3f0ff" },
              }}
            >
              Google
            </Button>
            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{
                bgcolor: "#fff",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                minWidth: 140,
                borderColor: "#ece7fa",
                "&:hover": { bgcolor: "#f3f0ff" },
              }}
            >
              Facebook
            </Button>
          </Stack>
          <Typography sx={{ mt: 3, textAlign: "center", fontSize: 15 }}>
            Don&apos;t have an account?{" "}
            <Link href="/account/register" color="primary" fontWeight={600}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 70% 40%, #a084e8 0%, #7c4dff 60%, #6c47e6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 6 },
            borderRadius: 4,
            maxWidth: 420,
            width: "100%",
            color: "#fff",
            background: "rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(103,58,183,0.18)",
            border: "1px solid rgba(255,255,255,0.18)",
            backdropFilter: "blur(2px)",
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
            Welcome back to Accelerated Nexus of Talent
          </Typography>
          <Typography sx={{ mb: 3, color: "#f3eaff" }}>
            Sign in to access your personalized dashboard, check new opportunities, and connect with your potential employers or candidates.
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: 22, color: "#b39ddb" }}>✔</Typography>
              <Typography>Access your personalized dashboard</Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: 22, color: "#b39ddb" }}>✔</Typography>
              <Typography>Stay updated on your job search or recruitment process</Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: 22, color: "#b39ddb" }}>✔</Typography>
              <Typography>Manage your professional connections securely</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}