
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

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      enqueueSnackbar('Please enter both email and password.', { variant: 'error' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/signin', credentials);
   
      enqueueSnackbar('Login successful!', { variant: 'success' });
   
    } catch (err) {
      const errorMsg =
        (err.response && err.response.data && err.response.data.message) ||
        'Login failed due to network or server issue.';
      enqueueSnackbar(errorMsg, { variant: 'error' });
      console.error('Error during signin:', err);
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
          Sign In
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email *"
              type="email"
              name="email"
              value={credentials.email}
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
              value={credentials.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
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
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
