package com.materials.service.atn.services;


import com.materials.service.atn.entities.Rhomb;

import java.util.List;

public interface RhombServices {

    Rhomb saveRhomb(Rhomb rhomb) throws Exception;

    List<Rhomb> getAllRhomb();

    Rhomb getRhomb(String rhomb);

    void deleteRhomb(Long caliberId);

}
