package com.dsd.reservationsystem.models;

//request for post appointment
public class AppointmentPostRequest {
  private AppointmentTime appointmentTime;
  private CustomerInfo customerInfo;

  public AppointmentPostRequest() {
  }

  public AppointmentPostRequest(AppointmentTime appointmentTime, CustomerInfo customerInfo) {
    this.appointmentTime = appointmentTime;
    this.customerInfo = customerInfo;
  }

  public AppointmentTime getAppointmentTime() {
    return appointmentTime;
  }

  public void setAppointmentTime(AppointmentTime appointmentTime) {
    this.appointmentTime = appointmentTime;
  }

  public CustomerInfo getCustomerInfo() {
    return customerInfo;
  }

  public void setCustomerInfo(CustomerInfo customerInfo) {
    this.customerInfo = customerInfo;
  }

  @Override
  public String toString() {
    return "AppointmentPostRequest{" +
        "appointmentTime=" + appointmentTime +
        ", customerInfo=" + customerInfo +
        '}';
  }

  public class AppointmentTime {
    private String date;
    private String timeSlot;

    public AppointmentTime() {

    }

    public String getDate() {
      return date;
    }

    public void setDate(String day) {
      this.date = day;
    }

    public String getTimeSlot() {
      return timeSlot;
    }

    public void setTimeSlot(String timeSlot) {
      this.timeSlot = timeSlot;
    }

    @Override
    public String toString() {
      return "AppointmentTime{" +
          "date='" + date + '\'' +
          ", timeSlot='" + timeSlot + '\'' +
          '}';
    }
  }

  public class CustomerInfo {
    private String address;
    private String name;
    private String phoneNumber;
    private String email;
    private String serviceId;

    public CustomerInfo() {
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

    public String getServiceId() {
      return serviceId;
    }

    public void setServiceId(String serviceId) {
      this.serviceId = serviceId;
    }

    @Override
    public String toString() {
      return "CustomerInfo{" +
          "address='" + address + '\'' +
          ", name='" + name + '\'' +
          ", phoneNumber='" + phoneNumber + '\'' +
          ", email='" + email + '\'' +
          ", serviceId='" + serviceId + '\'' +
          '}';
    }
  }
}
