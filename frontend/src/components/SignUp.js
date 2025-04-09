
import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    password: ''
  });
  
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      enqueueSnackbar('Please fill all required fields.', { variant: 'error' });
      return false;
    }
    if (user.password.length < 6) {
      enqueueSnackbar('Password must be at least 6 characters long.', { variant: 'error' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post('https://jtronix-authentication-system-3.onrender.com/api/signup', user);
      enqueueSnackbar('Sign up successful! Redirecting to Sign In...', { variant: 'success' });

      setTimeout(() => {
        navigate('/signin');
      }, 2000);
 
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: ''
      });
    } catch (err) {
      const errorMsg = (err.response && err.response.data && err.response.data.message)
        ? err.response.data.message
        : 'Signup failed due to a network or server issue.';
      enqueueSnackbar(errorMsg, { variant: 'error' });
      console.error('Error during signup:', err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: '#fff'
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name *"
              type='text'
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name *"
              type='text'
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email *"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              type='text'
              name="address"
              value={user.address}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password *"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              helperText="Minimum 6 characters"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, py: 1.5 }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
