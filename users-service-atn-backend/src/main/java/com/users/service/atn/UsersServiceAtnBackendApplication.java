package com.users.service.atn;

import com.users.service.atn.entities.Role;
import com.users.service.atn.entities.User;
import com.users.service.atn.entities.UserRole;
import com.users.service.atn.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class UsersServiceAtnBackendApplication implements CommandLineRunner {

	@Autowired
	private UserServices userServices;

	public static void main(String[] args) {
		SpringApplication.run(UsersServiceAtnBackendApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

		if(this.userServices.getUser("admin") == null){
			try {
				User user = new User();
				user.setName("Admin");
				user.setLastname("System");
				user.setUsername("admin");
				user.setPassword("admin");
				user.setEmail("admin@cerdi.com");
				user.setPhone("6677889900");
				user.setProfile("default.png");

				Role role = new Role();
				role.setRoleId(1L);
				role.setName("ADMIN");

				Set<UserRole> userRoles = new HashSet<>();
				UserRole userRole = new UserRole();
				userRole.setRole(role);
				userRole.setUser(user);
				userRoles.add(userRole);

				User savedUser = userServices.saveUser(user, userRoles);
				System.out.println(savedUser.getUsername());
			} catch (Exception e) {
				throw new RuntimeException(e);
			}
			System.out.println("Creando usuario administrador");
		}
		System.out.println("Usuario administrador ya existe");
	}

}
