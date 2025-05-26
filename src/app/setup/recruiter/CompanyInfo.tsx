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
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useState } from "react";


interface CompanyInfoProps {
  onNext: () => void;
}

export default function RecruiterSetup({onNext}: CompanyInfoProps) {
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");


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
          Company Information
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ mb: 2 }}
        >
          <TextField
            label="Company Name"
            placeholder="TechCorp Inc."
            fullWidth
            margin="normal"
            size="medium"
            sx={{ flex: 1 }}
          />
          <TextField
            label="Company Website"
            placeholder="https://techcorp.com"
            fullWidth
            margin="normal"
            size="medium"
            sx={{ flex: 1 }}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ mb: 2 }}
        >
          <FormControl fullWidth margin="normal" size="medium">
            <InputLabel>Industry</InputLabel>
            <Select
              value={industry}
              label="Industry"
              onChange={(e) => setIndustry(e.target.value)}
              sx={{ bgcolor: "#faf8ff", borderRadius: 2 }}
            >
              <MenuItem value="">
                <em>Select industry</em>
              </MenuItem>
              <MenuItem value="Software">Software</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              <MenuItem value="Education">Education</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" size="medium">
            <InputLabel>Company Size</InputLabel>
            <Select
              value={companySize}
              label="Company Size"
              onChange={(e) => setCompanySize(e.target.value)}
              sx={{ bgcolor: "#faf8ff", borderRadius: 2 }}
            >
              <MenuItem value="">
                <em>Select company size</em>
              </MenuItem>
              <MenuItem value="1-10">1-10</MenuItem>
              <MenuItem value="11-50">11-50</MenuItem>
              <MenuItem value="51-200">51-200</MenuItem>
              <MenuItem value="201-1000">201-1000</MenuItem>
              <MenuItem value="1000+">1000+</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <TextField
          label="Company Description"
          placeholder="Tell candidates about your company culture, mission, and values..."
          fullWidth
          margin="normal"
          size="medium"
          multiline
          minRows={3}
          sx={{ mb: 3, bgcolor: "#faf8ff", borderRadius: 2 }}
        />

        {/* Logo Upload */}
        <Typography fontWeight={600} sx={{ mb: 1 }}>
          Company Logo
        </Typography>
        <Box
          sx={{
            border: "2px dashed #d1c4e9",
            borderRadius: 3,
            p: 4,
            mb: 4,
            textAlign: "center",
            bgcolor: "#faf8ff",
            color: "#a084e8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 140,
            cursor: "pointer",
            transition: "border-color 0.2s",
            "&:hover": { borderColor: "#a084e8" },
          }}
        >
          <CloudUploadOutlinedIcon sx={{ fontSize: 40, mb: 1 }} />
          <Typography sx={{ color: "#757575", mb: 0.5 }}>
            Drag and drop your company logo here, or{" "}
            <Box component="span" sx={{ color: "#7c4dff", cursor: "pointer", textDecoration: "underline" }}>
              browse files
            </Box>
          </Typography>
          <Typography sx={{ color: "#bdbdbd", fontSize: 13 }}>
            PNG or JPG, max 2MB
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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