package com.materials.service.atn.controllers;

import com.materials.service.atn.entities.Material;
import com.materials.service.atn.services.MaterialServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/materials"})
@CrossOrigin("*")
public class MaterialController {
    @Autowired
    private MaterialServices materialServices;

    public MaterialController() {
    }

    @PostMapping({"/"})
    public Material saveMaterial(@RequestBody Material material) throws Exception {
        return this.materialServices.saveMaterial(material);
    }

    @GetMapping({"/"})
    public List<Material> getAllMaterial() {
        return this.materialServices.getAllMaterial();
    }

    @GetMapping({"/{name}"})
    public Material getMaterial(@PathVariable("name") String name) {
        return this.materialServices.getMaterial(name);
    }

    @DeleteMapping({"/{materialId}"})
    public void deleteMaterial(@PathVariable("materialId") Long materialId) {
        this.materialServices.deleteMaterial(materialId);
    }

}