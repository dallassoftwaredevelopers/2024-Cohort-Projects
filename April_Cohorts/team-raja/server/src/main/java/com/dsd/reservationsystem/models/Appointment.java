package com.dsd.reservationsystem.models;


//used inside customer db in appointmentsArray
public class Appointment {
    private String customerId;
    private String date;
    private String timeSlot;
    private String confirmationNumber;
    private String serviceId;
    private String Status;


    public String getTimeSlot() {
        return timeSlot;
    }

    public void setTimeSlot(String timeSlot) {
        this.timeSlot = timeSlot;
    }

    public String getConfirmationNumber() {
        return confirmationNumber;
    }

    public void setConfirmationNumber(String confirmationNumber) {
        this.confirmationNumber = confirmationNumber;
    }


    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getServiceId() {
        return serviceId;
    }

    public void setServiceId(String serviceId) {
        this.serviceId = serviceId;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "customerId='" + customerId + '\'' +
                ", date='" + date + '\'' +
                ", timeSlot='" + timeSlot + '\'' +
                ", confirmationNumber='" + confirmationNumber + '\'' +
                ", serviceId='" + serviceId + '\'' +
                ", Status='" + Status + '\'' +
                '}';
    }
}
