package com.materials.service.atn.services;

import com.materials.service.atn.entities.Caliber;

import java.util.List;

public interface CaliberServices {

    Caliber saveCaliber(Caliber caliber) throws Exception;

    List<Caliber> getAllCaliber();

    Caliber getCaliber(String name);

    void deleteCaliber(Long caliberId);

}
