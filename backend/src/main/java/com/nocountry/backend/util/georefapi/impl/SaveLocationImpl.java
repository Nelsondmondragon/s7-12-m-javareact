package com.nocountry.backend.util.georefapi.impl;

import com.nocountry.backend.service.ILocationsService;
import com.nocountry.backend.util.georefapi.IExecute;
import com.nocountry.backend.util.georefapi.ISaveLocation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;


@Component
@RequiredArgsConstructor
public class SaveLocationImpl implements ISaveLocation {
    private final IExecute execute;

    private final ILocationsService locationsService;


    @Override
    public void save() {
        this.locationsService.save(execute.execute(this.cityCaba()).getLocations().get(0));
        this.locationsService.save(execute.execute(this.cityCordoba()).getLocations().get(0));
        this.locationsService.save(execute.execute(this.cityPlata()).getLocations().get(0));
        this.locationsService.save(execute.execute( this.cityRosario()).getLocations().get(0));
        this.locationsService.save(execute.execute( this.citySalta()).getLocations().get(0));
    }

    private Map<String, Object> cityCaba() {
        Map<String, Object> params = new HashMap<>();
        params.put("nombre", "ciudad%20de%20buenos%20aires");
        params.put("campos", "nombre");
        return params;
    }

    private Map<String, Object> cityCordoba() {
        Map<String, Object> params = new HashMap<>();
        params.put("nombre", "cordoba");
        params.put("campos", "nombre");
        params.put("max", "1");
        return params;
    }

    private Map<String, Object> cityPlata() {
        Map<String, Object> params = new HashMap<>();
        params.put("nombre", "la%20plata");
        params.put("campos", "nombre");
        params.put("max", "1");
        return params;
    }

    private Map<String, Object> cityRosario() {
        Map<String, Object> params = new HashMap<>();
        params.put("nombre", "rosario");
        params.put("campos", "nombre");
        params.put("max", "1");
        return params;
    }

    private Map<String, Object> citySalta() {
        Map<String, Object> params = new HashMap<>();
        params.put("nombre", "salta");
        params.put("campos", "nombre");
        params.put("max", "1");
        return params;
    }

}
