package com.users.service.atn.controllers;

import com.users.service.atn.entities.Role;
import com.users.service.atn.entities.User;
import com.users.service.atn.entities.UserRole;
import com.users.service.atn.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping({"/users"})
public class UserController {
    @Autowired
    private UserServices userServices;

    public UserController() {
    }

    @PostMapping({"/new"})
    public User saveUser(@RequestBody User user) throws Exception {
        user.setProfile("default.png");
        Set<UserRole> userRoles = new HashSet();

        Role role = new Role();
        role.setRoleId(2L);
        role.setName("NORMAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        userRoles.add(userRole);
        return this.userServices.saveUser(user, userRoles);
    }

    @GetMapping({"/"})
    public List<User> getAllUser() {
        return this.userServices.getAllUser();
    }

    @GetMapping({"/{username}"})
    public User getUser(@PathVariable("username") String username) {
        return this.userServices.getUser(username);
    }

    @DeleteMapping({"/delete/{userId}"})
    public void deleteUser(@PathVariable("userId") Long userId) {
        this.userServices.deleteUser(userId);
    }
}