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
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";

export default function Register() {
  const [role, setRole] = useState<"jobseeker" | "recruiter" | null>(null);
//   console.log(role)

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
          Create your account
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Select your role and enter your details to get started
        </Typography>

        {/* Role Selection */}
        <Stack direction="row" spacing={2} sx={{ mb: 3, width: "100%", maxWidth: 420 }}>
          <Paper
            elevation={role === "jobseeker" ? 4 : 1}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
              border: role === "jobseeker" ? "2px solid #b39ddb" : "1px solid #ece7fa",
              background: role === "jobseeker" ? "#f8f6ff" : "#fff",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onClick={() => setRole("jobseeker")}
          >
            <Stack alignItems="center" spacing={1}>
              <PersonOutlineIcon sx={{ fontSize: 40, color: "#a084e8" }} />
              <Typography variant="h6" fontWeight={600}>
                Job Seeker
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14, textAlign: "center" }}>
                Find the perfect opportunity for your skills and experience
              </Typography>
              <Button
                size="small"
                sx={{
                  mt: 1,
                  color: "#a084e8",
                  bgcolor: "#f8f6ff",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "none",
                  border: "1px solid #ede7ff",
                  "&:hover": { bgcolor: "#ede7ff" },
                }}
                variant={role === "jobseeker" ? "contained" : "text"}
              >
                Select
              </Button>
            </Stack>
          </Paper>
          <Paper
            elevation={role === "recruiter" ? 4 : 1}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
              border: role === "recruiter" ? "2px solid #90caf9" : "1px solid #ece7fa",
              background: role === "recruiter" ? "#f0f7ff" : "#fff",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onClick={() => setRole("recruiter")}
          >
            <Stack alignItems="center" spacing={1}>
              <WorkOutlineIcon sx={{ fontSize: 40, color: "#64b5f6" }} />
              <Typography variant="h6" fontWeight={600}>
                Recruiter
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: 14, textAlign: "center" }}>
                Find the best talent to join your company or team
              </Typography>
              <Button
                size="small"
                sx={{
                  mt: 1,
                  color: "#64b5f6",
                  bgcolor: "#f0f7ff",
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "none",
                  border: "1px solid #e3f2fd",
                  "&:hover": { bgcolor: "#e3f2fd" },
                }}
                variant={role === "recruiter" ? "contained" : "text"}
              >
                Select
              </Button>
            </Stack>
          </Paper>
        </Stack>

        {/* Registration Form */}
        <Box component="form" sx={{ width: "100%", maxWidth: 420 }}>
          <TextField
            label="Full name"
            placeholder="Jane Doe"
            fullWidth
            margin="normal"
            size="medium"
          />
          <TextField
            label="Email address"
            placeholder="name@example.com"
            fullWidth
            margin="normal"
            size="medium"
            type="email"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            size="medium"
          />
          <TextField
            label="Confirm password"
            type="password"
            fullWidth
            margin="normal"
            size="medium"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography sx={{ fontSize: 14, lineHeight: 1.5 }}>
                I agree to the{" "}
                <Link href="#" color="primary">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" color="primary">
                  Privacy Policy
                </Link>
              </Typography>
            }
            sx={{ mt: 1, mb: 2, alignItems: "center" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              fontWeight: 700,
              bgcolor: "#a084e8",
              boxShadow: "none",
              mb: 2,
              mt: 1,
              "&:hover": { bgcolor: "#7c4dff" },
            }}
          >
            Create account
          </Button>
          <Divider sx={{ my: 2 }}>Or sign up with</Divider>
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
            Already have an account?{" "}
            <Link href="/account/login" color="primary" fontWeight={600}>
              Sign in
            </Link>
          </Typography>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          minHeight: "100vh",
          background: "radial-gradient(circle at 70% 40%, #a084e8 0%, #7c4dff 60%, #6c47e6 100%)",
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
            Join our talent network
          </Typography>
          <Typography sx={{ mb: 3, color: "#f3eaff" }}>
            Create an account to showcase your skills, find the perfect job, or discover exceptional talent for your company.
          </Typography>
          <Stack spacing={2}>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: 22, color: "#b39ddb" }}>✔</Typography>
              <Typography>Create a compelling professional profile</Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: 22, color: "#b39ddb" }}>✔</Typography>
              <Typography>Connect with companies that match your skills and aspirations</Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={1}>
              <Typography sx={{ fontSize: 22, color: "#b39ddb" }}>✔</Typography>
              <Typography>Maintain control over who can contact you</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}