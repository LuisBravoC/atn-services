package com.materials.service.atn.services.implementations;

import com.materials.service.atn.entities.Material;
import com.materials.service.atn.repositories.MaterialRepository;
import com.materials.service.atn.services.MaterialServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;

@Service
public class MaterialServiceImpl implements MaterialServices {
    @Autowired
    private MaterialRepository materialRepository;

    public MaterialServiceImpl() {
    }

    public Material saveMaterial(Material material) throws Exception {
        Material materialLocal = this.materialRepository.findByName(material.getName());
        if (materialLocal != null) {
            System.out.println("El material ya existe");
            throw new Exception("El material ya esta presente");
        } else {
            materialLocal = (Material)this.materialRepository.save(material);
            return materialLocal;
        }
    }

    public List<Material> getAllMaterial() {
        return this.materialRepository.findAll();
    }

    public Material getMaterial(String name) {
        return this.materialRepository.findByName(name);
    }

    public void deleteMaterial(Long materialId) {
        this.materialRepository.deleteById(materialId);
    }

}
