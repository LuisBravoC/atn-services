package com.users.service.atn.repositories;

import org.springframework.security.core.userdetails.UserDetails;

public interface MyUserDetails extends UserDetails {

    Long getId();

}
