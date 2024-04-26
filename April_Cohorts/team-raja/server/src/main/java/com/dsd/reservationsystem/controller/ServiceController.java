package com.dsd.reservationsystem.controller;

import com.dsd.reservationsystem.models.ServiceModel;
import com.dsd.reservationsystem.service.PartsService;
import com.dsd.reservationsystem.service.ServicesService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {
    private ServicesService servicesService;


    public ServiceController(ServicesService servicesService) {
        this.servicesService = servicesService;
    }


    @GetMapping("")
    public List getServicesAvailable() {
        return this.servicesService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceModel> getServiceById(@PathVariable String id) {
        ServiceModel service = servicesService.getServiceById(id);
        if (service != null) {
            return ResponseEntity.ok(service);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

