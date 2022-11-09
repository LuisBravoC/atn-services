package com.materials.service.atn.controllers;

import com.materials.service.atn.entities.Caliber;
import com.materials.service.atn.services.CaliberServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/calibers"})
@CrossOrigin("*")
public class CaliberController {
    @Autowired
    private CaliberServices caliberServices;

    public CaliberController() {
    }

    @PostMapping({"/"})
    public Caliber saveCaliber(@RequestBody Caliber caliber) throws Exception {
        return this.caliberServices.saveCaliber(caliber);
    }

    @GetMapping({"/"})
    public List<Caliber> getAllCaliber() {
        return this.caliberServices.getAllCaliber();
    }

    @GetMapping({"/{name}"})
    public Caliber getCaliber(@PathVariable("name") String name) {
        return this.caliberServices.getCaliber(name);
    }

    @DeleteMapping({"/{caliberId}"})
    public void deleteCaliber(@PathVariable("caliberId") Long caliberId) {
        this.caliberServices.deleteCaliber(caliberId);
    }

}
