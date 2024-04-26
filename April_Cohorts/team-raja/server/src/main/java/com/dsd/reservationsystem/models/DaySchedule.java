package com.dsd.reservationsystem.models;

import java.util.HashMap;

public record DaySchedule(String Date, HashMap<String, Appointment> appointments) {

}


