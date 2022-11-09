package com.materials.service.atn.services;


import com.materials.service.atn.entities.Rhombus;

import java.util.List;

public interface RhombusServices {

    Rhombus saveRhombus(Rhombus rhombus) throws Exception;

    List<Rhombus> getAllRhombus();

    Rhombus getRhombus(String rhombus);

    void deleteRhombus(Long rhombusId);

}
