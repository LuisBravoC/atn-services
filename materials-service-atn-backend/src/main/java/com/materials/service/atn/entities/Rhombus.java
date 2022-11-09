package com.materials.service.atn.entities;

import javax.persistence.*;

@Entity
@Table(
        name = "rhombs"
)
public class Rhomb {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    private String rhomb;

    private boolean enabled = true;

    public Rhomb() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRhomb() {
        return rhomb;
    }

    public void setRhomb(String rhomb) {
        this.rhomb = rhomb;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

}
