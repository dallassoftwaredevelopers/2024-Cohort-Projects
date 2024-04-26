package com.dsd.reservationsystem.models;

public class TimeSlotInfo {

    private String CustomerId;

    public TimeSlotInfo(String customerId) {
        CustomerId = customerId;
    }


    public String getCustomerId() {
        return CustomerId;
    }

    public void setCustomerId(String customerId) {
        CustomerId = customerId;
    }

    @Override
    public String toString() {
        return "timeSlotInfo{" +
                "CustomerId='" + CustomerId + '\'' +
                '}';
    }
}
