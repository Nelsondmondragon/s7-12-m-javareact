package com.nocountry.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "MEDIA")
public class MediaResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_MEDIA")
    private Long id;

    @Column(name = "URL_SECURE")
    private String urlSecure;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "TYPE_FORMAT")
    private String typeFormat;

    @Column(name = "PUBLIC_ID")
    public String publicId;

    @Column(name = "BYTES")
    private Integer bytes;
}