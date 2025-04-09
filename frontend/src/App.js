
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Auth App
          </Typography>
          <Button component={Link} to="/signup" color="inherit">
            Sign Up
          </Button>
          <Button component={Link} to="/signin" color="inherit">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Box>
  );
};

export default App;
