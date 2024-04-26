package com.dsd.reservationsystem.controller;

import com.dsd.reservationsystem.models.Appointment;
import com.dsd.reservationsystem.service.TimeSlotsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/timeslots")
public class TimeSlotsController {

    private final TimeSlotsService timeSlotsService;

    public TimeSlotsController(TimeSlotsService timeSlotsService) {
        this.timeSlotsService = timeSlotsService;
    }

    @GetMapping("/{todaysDate}")
    @ResponseBody
    public ResponseEntity<Object> getTimeSlotsForDay(@PathVariable String todaysDate) {

        try {
            Map<String, Boolean> timeSlotsAvailability = this.timeSlotsService
                    .getTimeSlotsAvailabilityForDay(todaysDate);
            return ResponseEntity.ok().body(timeSlotsAvailability);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
