package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            return "Username is required";
        }

        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return "Password is required";
        }

        if (userRepository.findByUsername(user.getUsername()) != null) {
            return "Username already exists";
        }

        userRepository.save(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            return "Username is required";
        }

        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return "Password is required";
        }

        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return "Login successful";
        }

        return "Invalid username or password";
    }
}
