package com.materials.service.atn.entities;

import javax.persistence.*;

@Entity
@Table(
        name = "rhombus"
)
public class Rhombus {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    private String rhombus;

    private boolean enabled = true;

    public Rhombus() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRhombus() {
        return rhombus;
    }

    public void setRhombus(String rhombus) {
        this.rhombus = rhombus;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

}
