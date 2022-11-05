package com.reports.service.atn.entities;

import javax.persistence.*;

@Entity
public class UserRole {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long userRoleId;
    @ManyToOne(
            fetch = FetchType.EAGER
    )
    private User user;
    @ManyToOne
    private Role role;

    public UserRole() {
    }

    public Long getUserRoleId() {
        return this.userRoleId;
    }

    public void setUserRoleId(Long userRoleId) {
        this.userRoleId = userRoleId;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return this.role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

}
