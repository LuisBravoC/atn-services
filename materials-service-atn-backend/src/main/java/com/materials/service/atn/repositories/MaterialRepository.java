package com.materials.service.atn.repositories;

import com.materials.service.atn.entities.Material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepository extends JpaRepository<Material, Long> {

    Material findByName(String name);

}
