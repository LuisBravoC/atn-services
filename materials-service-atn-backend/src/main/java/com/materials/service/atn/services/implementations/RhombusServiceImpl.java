package com.materials.service.atn.services.implementations;

import com.materials.service.atn.entities.Rhombus;
import com.materials.service.atn.repositories.RhombusRepository;
import com.materials.service.atn.services.RhombusServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RhombusServiceImpl implements RhombusServices {

    @Autowired
    private RhombusRepository rhombusRepository;

    public RhombusServiceImpl() {
    }

    public Rhombus saveRhombus(Rhombus rhombus) throws Exception {
        Rhombus rhombusLocal = this.rhombusRepository.findByRhombus(rhombus.getRhombus());
        if (rhombusLocal != null) {
            System.out.println("La medida de rombos ya existe ya existe");
            throw new Exception("La medida de rombos ya existe ya esta presente");
        } else {
            rhombusLocal = (Rhombus)this.rhombusRepository.save(rhombus);
            return rhombusLocal;
        }
    }

    public List<Rhombus> getAllRhombus() {
        return this.rhombusRepository.findAll();
    }

    public Rhombus getRhombus(String rhombus) {
        return this.rhombusRepository.findByRhombus(rhombus);
    }

    public void deleteRhombus(Long rhombusId) {
        this.rhombusRepository.deleteById(rhombusId);
    }



}
