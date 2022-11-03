package com.users.service.atn.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(
        name = "roles"
)
public class Role {

    @Id
    private Long roleId;
    private String name;
    @OneToMany(
            cascade = {CascadeType.ALL},
            fetch = FetchType.LAZY,
            mappedBy = "role"
    )
    private Set<UserRole> userRoles = new HashSet();

    public Role() {
    }

    public Long getRoleId() {
        return this.roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<UserRole> getUserRoles() {
        return this.userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

}
