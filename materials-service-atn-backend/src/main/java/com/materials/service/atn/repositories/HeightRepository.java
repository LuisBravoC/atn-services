package com.materials.service.atn.repositories;

import com.materials.service.atn.entities.Height;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeightRepository extends JpaRepository<Height, Long> {

    Height findByHeight(String name);

}
