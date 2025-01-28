import React, { useEffect, useState } from "react";
import { TextField, Checkbox, Button, Typography, Box, FormControlLabel } from "@mui/material";
import { getPrincipal, initAuthClient, login, logout } from "../../services/authService";

const SignInPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [principal, setPrincipal] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      await initAuthClient();
      const currentPrincipal = getPrincipal();
      if (currentPrincipal) {
        setIsAuthenticated(true);
        setPrincipal(currentPrincipal);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async () => {
    try {
      const principal = await login();
      setIsAuthenticated(true);
      setPrincipal(principal);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
    setPrincipal(null);
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-primary">
      <Box
        className="w-[400px] p-8 rounded-2xl shadow-lg bg-gradient-to-br from-[rgba(105,120,255,0.282)] via-[rgba(255,255,255,0.3)] to-[rgba(13,220,170,0.247)]"
        sx={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <Typography variant="h5" component="h1" className="text-white font-bold text-center mb-4">
          Manage Your Parking System
        </Typography>

        <Typography variant="body2" className="text-white text-center pb-4">
          Your parking operations, streamlined and secure.
        </Typography>

        <form className="space-y-6">
          {/* <TextField
            label="Username"
            variant="outlined"
            fullWidth
            className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-lg"
            InputProps={{
              style: {
                color: "white",
                border: "none",
              },
              classes: {
                notchedOutline: "border-none",
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          /> */}

          {/* <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-0"
            InputProps={{
              style: {
                color: "white",
                border: "none",
              },
              classes: {
                notchedOutline: "border-none",
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
          /> */}

          {isAuthenticated
            ?
            <>
              <Typography variant="body2" className="text-white text-center pb-4">
                Logged in as: {principal}
              </Typography>
              <Button
                variant="contained"
                fullWidth
                className="text-white font-semibold py-3 rounded-lg border-none focus:outline-none focus:ring-0"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
            : <Button
              variant="contained"
              fullWidth
              className="text-white font-semibold py-3 rounded-lg border-none focus:outline-none focus:ring-0"
              onClick={handleLogin}
            >
              Login with Internet Identity
            </Button>
          }

        </form>
      </Box>
    </div>
  );
};

export default SignInPage;
