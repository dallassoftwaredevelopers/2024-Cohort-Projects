package com.dsd.reservationsystem.controller;

import com.dsd.reservationsystem.service.PartsService;

import com.dsd.reservationsystem.models.Part;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/api/parts")
public class PartsController {

    private PartsService partsService;


    public PartsController(PartsService partsService) {
        this.partsService = partsService;
    }


    @GetMapping("")
    public List<Part> getPartsInventory() {
        return this.partsService.getAllParts();
    }

    @PostMapping("")
    public ResponseEntity<Part> postParts(@RequestBody Part part) {
        Part createdPart = partsService.createPart(part);
        return ResponseEntity.ok(createdPart);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Part> getPartById(@PathVariable String id) {
        Part part = partsService.getPartById(id);
        if (part != null) {
            return ResponseEntity.ok(part);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("")
    public ResponseEntity<Part> postPart(@RequestBody Part part) {

        try {
            Optional<Part> updatedPart = partsService.updatePart(part);
            return ResponseEntity.ok(updatedPart.orElseThrow());

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Part>(part, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(part);
        }
    }
}
