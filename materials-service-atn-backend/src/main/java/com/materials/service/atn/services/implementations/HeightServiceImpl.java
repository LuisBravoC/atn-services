package com.materials.service.atn.services.implementations;

import com.materials.service.atn.entities.Height;
import com.materials.service.atn.repositories.HeightRepository;
import com.materials.service.atn.services.HeightServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HeightServiceImpl implements HeightServices {

    @Autowired
    HeightRepository heightRepository;

    public HeightServiceImpl() {
    }

    @Override
    public Height saveHeight(Height height) throws Exception {
        Height heightLocal = this.heightRepository.findByHeight(height.getHeight());
        if (heightLocal != null) {
            System.out.println("La altura ya existe");
            throw new Exception("La altura ya esta presente");
        } else {
            heightLocal = (Height)this.heightRepository.save(height);
            return heightLocal;
        }
    }

    @Override
    public List<Height> getAllHeight() {
        return this.heightRepository.findAll();
    }

    @Override
    public Height getHeight(String height) {
        return this.heightRepository.findByHeight(height);
    }

    @Override
    public void deleteHeight(Long heightId) {
        this.heightRepository.deleteById(heightId);
    }

}
