package com.dsd.reservationsystem.controller;

import com.dsd.reservationsystem.models.Appointment;
import com.dsd.reservationsystem.models.AppointmentPostRequest;
import com.dsd.reservationsystem.service.AppointmentService;
import com.dsd.reservationsystem.service.TimeSlotsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private TimeSlotsService timeSlotsService;

    @PostMapping("/save")
    public ResponseEntity saveAppointment(@RequestBody AppointmentPostRequest appointmentRequest) {


        // todo Save the appointment
        try {
            Appointment savedAppointment = appointmentService.saveAppointment(appointmentRequest);

            HashMap<String, String> response = new HashMap<>();

            response.put("status", "success");
            response.put("day", savedAppointment.getDate());
            response.put("timeSlot", savedAppointment.getTimeSlot());
            response.put("confirmationID", savedAppointment.getConfirmationNumber());

            return new ResponseEntity<HashMap>(response, HttpStatus.OK);
        } catch (Exception e) {

            HashMap<String, String> response = new HashMap<>();
            response.put("status", "failed");
            response.put("error", e.toString());

            // todo test error sent back
            return new ResponseEntity<HashMap>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private boolean isTimeSlotAvailable(String day, String timeSlot) {
        // Get the time slots for the selected day
        return timeSlotsService.isTimeSlotAvailable(day, timeSlot);

    }

    @GetMapping("/all")
    public ResponseEntity<List<HashMap<String, Object>>> getAppointments(@RequestParam String date)
            throws ExecutionException, InterruptedException {


        // List<Appointment> appointments =
        // appointmentService.getAppointmentsForDay(date);
        try {

            List<HashMap<String, Object>> appointments = appointmentService.getAppointmentsForDay(date);
            return ResponseEntity.ok(appointments);

        } catch (Exception e) {
            //if failed to reach database
            return ResponseEntity.internalServerError().build();
        }
    }
}