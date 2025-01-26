import React from 'react';
import './App.css';
import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  const { data: count, call: refetchCount } = useQueryCall({
    functionName: 'get',
  });

  const { call: increment, loading } = useUpdateCall({
    functionName: 'inc',
    onSuccess: () => {
      refetchCount();
    },
  });

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div className='bg-[#071029] h-screen w-full flex items-center justify-center'>
      <div className='border-2 border-white p-6 rounded-lg text-white text-center'>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '300px',
            margin: '0 auto',
          }}
        >
          <Input
            placeholder="Username"
            fullWidth
            sx={{ backgroundColor: 'white', borderRadius: 1, padding: '5px' }}
            disableUnderline
          />
          <Input
            placeholder="Password"
            type="password"
            fullWidth
            sx={{ backgroundColor: 'white', borderRadius: 1, padding: '5px' }}
            disableUnderline
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            disabled={loading}
          >
            Login
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default App;
