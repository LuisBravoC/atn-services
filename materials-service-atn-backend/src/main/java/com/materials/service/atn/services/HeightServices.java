package com.materials.service.atn.services;

import com.materials.service.atn.entities.Height;

import java.util.List;

public interface HeightServices {

    Height saveHeight(Height height) throws Exception;

    List<Height> getAllHeight();

    Height getHeight(String height);

    void deleteHeight(Long heightId);


}
