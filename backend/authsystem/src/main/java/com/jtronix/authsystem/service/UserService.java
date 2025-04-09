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

    public String registerUser(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return "Error: Email already registered.";
        }

    
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }


    public String loginUser(User user) {
        User existing = userRepository.findByEmail(user.getEmail());

        if (existing == null) {
            return "Error: Email not found.";
        }

  
        boolean isPasswordValid = passwordEncoder.matches(user.getPassword(), existing.getPassword());
        if (!isPasswordValid) {
            return "Error: Incorrect password.";
        }

        return "Login successful!";
    }
}
