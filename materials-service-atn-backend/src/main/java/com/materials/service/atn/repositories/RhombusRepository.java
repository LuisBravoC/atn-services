package com.materials.service.atn.repositories;

import com.materials.service.atn.entities.Rhombus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RhombusRepository extends JpaRepository<Rhombus, Long> {

    Rhombus findByRhombus(String rhombus);

}
