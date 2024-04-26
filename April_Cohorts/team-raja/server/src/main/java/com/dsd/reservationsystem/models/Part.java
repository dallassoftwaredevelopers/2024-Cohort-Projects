package com.dsd.reservationsystem.models;

public class Part {
    private String id;
    private String name;
    private Long quantity;
    private Long threshold;

    public Part(String id, String name, Long quantity, Long threshold) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.threshold = threshold;
    }

    public Part() {
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getQuantity() {
        return quantity;
    }

    public Long getThreshold() {
        return threshold;
    }
}