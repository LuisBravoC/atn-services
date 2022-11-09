package com.materials.service.atn.services.implementations;

import com.materials.service.atn.entities.Caliber;
import com.materials.service.atn.repositories.CaliberRepository;
import com.materials.service.atn.services.CaliberServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaliberServiceImpl implements CaliberServices {

    @Autowired
    private CaliberRepository caliberRepository;

    public CaliberServiceImpl() {
    }

    public Caliber saveCaliber(Caliber caliber) throws Exception {
        Caliber caliberLocal = this.caliberRepository.findByCaliber(caliber.getCaliber());
        if (caliberLocal != null) {
            System.out.println("El calibre ya existe");
            throw new Exception("El calibre ya esta presente");
        } else {
            caliberLocal = (Caliber)this.caliberRepository.save(caliber);
            return caliberLocal;
        }
    }

    public List<Caliber> getAllCaliber() {
        return this.caliberRepository.findAll();
    }

    public Caliber getCaliber(String name) {
        return this.caliberRepository.findByCaliber(name);
    }

    public void deleteCaliber(Long caliberId) {
        this.caliberRepository.deleteById(caliberId);
    }


}
