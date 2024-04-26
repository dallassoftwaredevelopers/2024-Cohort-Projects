package com.dsd.reservationsystem.service;

import com.dsd.reservationsystem.database.Db;
import com.dsd.reservationsystem.models.Appointment;
import com.dsd.reservationsystem.models.DaySchedule;
import com.dsd.reservationsystem.models.TimeSlotInfo;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class TimeSlotsService {
    private final Db database;
    ArrayList<String> timeSlotCodes = new ArrayList<>(Arrays.asList("TS79", "TS911", "TS111", "TS13", "TS35", "TS57"));

    public TimeSlotsService(Db database) {
        this.database = database;
    }

    // todo create update days timeslots method
    public Optional<Map<String, Object>> updateDayTimeslot(String customerId, String date, String timeSlot)
            throws ExecutionException, InterruptedException {

        // create new timeslot info to update database with
        TimeSlotInfo timeSlotInfo = new TimeSlotInfo(customerId);

        DocumentReference docRef = database.collection("timeSlots").document(date);
        ApiFuture<DocumentSnapshot> query = docRef.get();
        DocumentSnapshot document = query.get();

        // if there is a document for day update it
        if (document.exists()) {
            // get data from doc snapshot that contains the days timeslots
            Map<String, Object> data = document.getData();

            // update data on date timeslots
            data.put(timeSlot, timeSlotInfo);

            // todo update database

            docRef.set(data);

            return Optional.of(data);

        } else {
            // todo doc does not exist create it
            HashMap<String, Object> data = new HashMap<>();
            data.put(timeSlot, timeSlotInfo);
            docRef.set(data);

            return Optional.of(data);

        }

    }

    public boolean isTimeSlotAvailable(String day, String timeSlot) {
        try {
            Map<String, Boolean> timeSlots = getTimeSlotsAvailabilityForDay(day);
            return timeSlots.get(timeSlot);
        } catch (Exception e) {
            return false;
        }
    }

    // date will be provided in 03022024 two-digit month, two-digit month and four
    // digit year
    public Map<String, Boolean> getTimeSlotsAvailabilityForDay(String dateStr) throws Exception {
        Map<String, Boolean> timeSlotsAvailability = new HashMap<String, Boolean>() {
            {
                put("TS79", true);
                put("TS911", true);
                put("TS111", true);
                put("TS13", true);
                put("TS35", true);
                put("TS57", true);
            }
        };

        DaySchedule dayTimeSlots = this.database.getTimeSlotsForDay(dateStr);

        // get set of key:value from Map and loop through it
        for (Map.Entry<String, Appointment> timeSlot : dayTimeSlots.appointments().entrySet()) {
            String key = timeSlot.getKey();
            Object timeSlotData = timeSlot.getValue();

            // check if timecode exists, if exists then time slot is taken
            if (timeSlotData != null) {
                timeSlotsAvailability.put(key, false);
            }
        }
        return timeSlotsAvailability;
    }

    // todo create new day entry into timeslots database
}
