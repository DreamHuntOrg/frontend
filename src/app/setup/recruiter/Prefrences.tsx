"use client";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  Paper,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { useState } from "react";

interface preferencesProp {
  onNext: () => void;
  onBack: () => void;
}

export default function HiringPreferences({onNext, onBack}: preferencesProp) {
  const [skill, setSkill] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("San Francisco, CA");
  const [policy, setPolicy] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#faf8ff",
        py: { xs: 4, md: 8 },
        px: 2,
      }}
    >
      {/* Form Card */}
      <Paper
        elevation={0}
        sx={{
          maxWidth: 700,
          mx: "auto",
          p: { xs: 2, md: 5 },
          borderRadius: 4,
          boxShadow: "0 4px 32px rgba(103,58,183,0.06)",
          background: "#fff",
        }}
      >
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
          Hiring Preferences
        </Typography>

        {/* Skills */}
        <Typography fontWeight={600} sx={{ mb: 0.5 }}>
          Skills You&apos;re Looking For
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          Add the technical skills, programming languages, and technologies you&apos;re hiring for.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Add a skill (e.g. React, Node.js, Python)..."
            fullWidth
            margin="none"
            size="medium"
            sx={{ bgcolor: "#faf8ff", borderRadius: 2 }}
            value={skill}
            onChange={e => setSkill(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#a084e8",
              color: "#fff",
              borderRadius: 2,
              fontWeight: 700,
              px: 3,
              boxShadow: "none",
              "&:hover": { bgcolor: "#7c4dff" },
              minWidth: 80,
            }}
          >
            Add
          </Button>
        </Stack>

        {/* Roles */}
        <Typography fontWeight={600} sx={{ mb: 0.5 }}>
          Roles You&apos;re Hiring For
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          Add the job titles or roles you&apos;re currently recruiting for.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <TextField
            placeholder="Add a role (e.g. Full Stack Developer, UX Designer)..."
            fullWidth
            margin="none"
            size="medium"
            sx={{ bgcolor: "#faf8ff", borderRadius: 2 }}
            value={role}
            onChange={e => setRole(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#a084e8",
              color: "#fff",
              borderRadius: 2,
              fontWeight: 700,
              px: 3,
              boxShadow: "none",
              "&:hover": { bgcolor: "#7c4dff" },
              minWidth: 80,
            }}
          >
            Add
          </Button>
        </Stack>

        {/* Location and Policy */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 4 }}>
          <TextField
            label="Primary Location"
            placeholder="San Francisco, CA"
            fullWidth
            margin="none"
            size="medium"
            sx={{ bgcolor: "#faf8ff", borderRadius: 2 }}
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <FormControl fullWidth size="medium">
            <InputLabel>Remote Work Policy</InputLabel>
            <Select
              value={policy}
              label="Remote Work Policy"
              onChange={e => setPolicy(e.target.value)}
              sx={{ bgcolor: "#faf8ff", borderRadius: 2 }}
            >
              <MenuItem value="">
                <em>Select policy</em>
              </MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="Onsite">Onsite</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 2,
              fontWeight: 700,
              color: "#a084e8",
              borderColor: "#e1bee7",
              px: 4,
              py: 1.2,
              fontSize: 16,
              boxShadow: "none",
              "&:hover": { borderColor: "#a084e8", bgcolor: "#f3eaff" },
            }}
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 2,
              fontWeight: 700,
              bgcolor: "#7c4dff",
              px: 4,
              py: 1.2,
              fontSize: 16,
              boxShadow: "none",
              "&:hover": { bgcolor: "#a084e8" },
            }}
            onClick={onNext}
          >
            Continue
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}