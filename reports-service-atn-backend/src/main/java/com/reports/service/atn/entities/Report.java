package com.reports.service.atn.entities;

import javax.persistence.*;

@Entity
@Table(
        name = "reports"
)
public class Report {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    private String material;
    private String caliber;
    private String height;
    private String rhomb;
    private String meters;
    private String quantity;
    private String author;
    private String date;

    public Report() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getCaliber() {
        return caliber;
    }

    public void setCaliber(String caliber) {
        this.caliber = caliber;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getRhomb() {
        return rhomb;
    }

    public void setRhomb(String rhomb) {
        this.rhomb = rhomb;
    }

    public String getMeters() {
        return meters;
    }

    public void setMeters(String meters) {
        this.meters = meters;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}
