package com.materials.service.atn.services;

import com.materials.service.atn.entities.Material;

import java.util.List;

public interface MaterialServices {

    Material saveMaterial(Material material) throws Exception;

    List<Material> getAllMaterial();

    Material getMaterial(String name);

    Material updateMaterial(Material material);

    void deleteMaterial(Long materialId);

}
