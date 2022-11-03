package com.users.service.atn.services;

import com.users.service.atn.entities.User;
import com.users.service.atn.entities.UserRole;

import java.util.List;
import java.util.Set;

public interface UserServices {

    User saveUser(User user, Set<UserRole> UserRoles) throws Exception;

    List<User> getAllUser();

    User getUser(String username);

    void deleteUser(Long userId);

}
