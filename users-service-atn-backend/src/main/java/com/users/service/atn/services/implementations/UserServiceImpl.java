package com.users.service.atn.services.implementations;

import com.users.service.atn.entities.User;
import com.users.service.atn.entities.UserRole;
import com.users.service.atn.repositories.RoleRepository;
import com.users.service.atn.repositories.UserRepository;
import com.users.service.atn.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserServices {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    public UserServiceImpl() {
    }

    public User saveUser(User user, Set<UserRole> userRoles) throws Exception {
        User userLocal = this.userRepository.findByUsername(user.getUsername());
        if (userLocal != null) {
            System.out.println("El usuario ya existe");
            throw new Exception("El usuario ya esta presente");
        } else {
            Iterator var4 = userRoles.iterator();

            while(var4.hasNext()) {
                UserRole userRole = (UserRole)var4.next();
                this.roleRepository.save(userRole.getRole());
            }

            user.getUserRoles().addAll(userRoles);
            userLocal = (User)this.userRepository.save(user);
            return userLocal;
        }
    }

    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
}
