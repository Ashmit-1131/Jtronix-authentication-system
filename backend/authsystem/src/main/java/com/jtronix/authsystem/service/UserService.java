package com.jtronix.authsystem.service;

import com.jtronix.authsystem.model.User;
import com.jtronix.authsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Handle user registration
    public String registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "Error: Email already registered.";
        }

        // Hash password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }

    // Handle user login
    public String loginUser(User user) {
        User existing = userRepository.findByEmail(user.getEmail());
        if (existing == null) {
            return "Error: Email not found.";
        }

        // Verify hashed password
        if (!passwordEncoder.matches(user.getPassword(), existing.getPassword())) {
            return "Error: Incorrect password.";
        }

        return "Login successful!";
    }
}
