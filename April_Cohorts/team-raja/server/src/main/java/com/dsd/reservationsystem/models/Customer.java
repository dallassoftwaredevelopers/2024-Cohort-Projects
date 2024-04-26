package com.dsd.reservationsystem.models;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


//customer database class
public class Customer {
    private String id = UUID.randomUUID().toString();
    private String address;
    private String name;
    private String phoneNumber;
    private String email;
    private List<Appointment> appointments = new ArrayList<>();

    public Customer(String id, String address, String name, String phoneNumber, String email,
                    List<Appointment> appointments) {
        this.id = id;
        this.address = address;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.appointments = appointments;
    }

    public Customer() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }

    public void addAppointment(Appointment appointment) {
        this.appointments.add(appointment);
    }


    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", address='" + address + '\'' +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", appointments=" + appointments +
                '}';
    }


}