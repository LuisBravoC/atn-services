package com.materials.service.atn.controllers;

import com.materials.service.atn.entities.Height;
import com.materials.service.atn.services.HeightServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/heights"})
@CrossOrigin("*")
public class HeightController {

    @Autowired
    private HeightServices heightServices;

    public HeightController() {
    }

    @PostMapping({"/"})
    public Height saveHeight(@RequestBody Height height) throws Exception {
        return this.heightServices.saveHeight(height);
    }

    @GetMapping({"/"})
    public List<Height> getAllHeight() {
        return this.heightServices.getAllHeight();
    }

    @GetMapping({"/{height}"})
    public Height getHeight(@PathVariable("height") String height) {
        return this.heightServices.getHeight(height);
    }

    @DeleteMapping({"/{heightId}"})
    public void deleteHeight(@PathVariable("heightId") Long heightId) {
        this.heightServices.deleteHeight(heightId);
    }
}
