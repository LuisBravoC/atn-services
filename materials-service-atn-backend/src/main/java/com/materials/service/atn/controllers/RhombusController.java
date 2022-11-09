package com.materials.service.atn.controllers;

import com.materials.service.atn.entities.Rhombus;
import com.materials.service.atn.services.RhombusServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/rhombus/"})
@CrossOrigin("*")
public class RhombusController {

    @Autowired
    private RhombusServices rhombusServices;

    public RhombusController() {
    }

    @PostMapping({"/"})
    public Rhombus saveRhombus(@RequestBody Rhombus rhombus) throws Exception {
        return this.rhombusServices.saveRhombus(rhombus);
    }

    @GetMapping({"/"})
    public List<Rhombus> getAllRhombus() {
        return this.rhombusServices.getAllRhombus();
    }

    @GetMapping({"/{name}"})
    public Rhombus getRhombus(@PathVariable("name") String rhombus) {
        return this.rhombusServices.getRhombus(rhombus);
    }

    @DeleteMapping({"/{rhombusId}"})
    public void deleteRhombus(@PathVariable("rhombusId") Long rhombusId) {
        this.rhombusServices.deleteRhombus(rhombusId);
    }

}
