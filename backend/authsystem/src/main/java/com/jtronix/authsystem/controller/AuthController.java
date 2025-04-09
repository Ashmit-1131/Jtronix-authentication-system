package com.jtronix.authsystem.controller;

import com.jtronix.authsystem.model.User;
import com.jtronix.authsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @PostMapping("/signin")
    public String signin(@RequestBody User user) {
        return userService.loginUser(user);
    }
}
