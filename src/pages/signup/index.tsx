import React from "react";
import { TextField, Checkbox, Button, Typography, Box, FormControlLabel } from "@mui/material";

const SignUpPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-primary">
      {/* Glassmorphic Container */}
      <Box
        className="w-[400px] p-8 rounded-2xl shadow-lg bg-gradient-to-br from-[rgba(105,120,255,0.282)] via-[rgba(255,255,255,0.3)] to-[rgba(13,220,170,0.247)]"
        sx={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Title */}
        <Typography variant="h5" component="h1" className="text-white font-bold text-center mb-4">
          Create a new Wallet
        </Typography>

        {/* Subtitle */}
        <Typography variant="body2" className="text-white text-center mb-8">
          Get started with Crypto by creating a new wallet address to hold, trade, and exchange assets.
        </Typography>

        {/* Form */}
        <form className="space-y-6">
          {/* Username Field */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-lg"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-lg"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />

          {/* Confirm Password Field */}
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-lg"
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          />

          {/* Terms and Conditions */}
          <FormControlLabel
            control={<Checkbox className="text-blue-500" />}
            label={
              <Typography variant="body2" className="text-white">
                By clicking, you agree to the{" "}
                <a href="#" className="text-blue-500 underline">
                  terms and conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>.
              </Typography>
            }
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            fullWidth
            className="bg-[#0ddcaa] hover:bg-[#0cc89a] text-white font-semibold py-3 rounded-lg"
          >
            Connect Wallet
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default SignUpPage;
