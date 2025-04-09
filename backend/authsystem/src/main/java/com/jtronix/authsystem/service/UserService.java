package com.jtronix.authsystem.service;

import com.jtronix.authsystem.model.User;
import com.jtronix.authsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String registerUser(User user) {
        try {
            if (userRepository.findByEmail(user.getEmail()) != null) {
                return "Error: Email already registered.";
            }

            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            return "User registered successfully!";

        } catch (DuplicateKeyException e) {
            return "Error: Email already registered (duplicate key).";
        } catch (Exception e) {
            return "Error: Something went wrong during registration.";
        }
    }

    public String loginUser(User user) {
        User existing = userRepository.findByEmail(user.getEmail());
        if (existing == null) {
            return "Error: Email not found.";
        }

        if (!passwordEncoder.matches(user.getPassword(), existing.getPassword())) {
            return "Error: Incorrect password.";
        }

        return "Login successful!";
    }
}
