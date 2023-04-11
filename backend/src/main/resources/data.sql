-- insert categories

INSERT INTO Categories (NAME, VOLUME, CAPACITY_LIMIT)
VALUES
('Small', 10.0, 1000.0),
('Medium', 20.0, 2000.0),
('Big', 30.0, 3000.0);

-- insert moving trucks

INSERT INTO Cars (MODEL, MAKE, YEAR, AIR, GPS, PASSENGERS, PATENT, LENGTH, WIDTH, HEIGHT, PICK_UP_LOCATION, ID_CATEGORY)
VALUES
('Small Truck', 'Ford', 2022, true, true, 2, 'ABC123', 6000, 2200, 2400, 'CABA', 1),
('Medium Truck', 'Chevrolet', 2021, true, false, 3, 'DEF456', 8000, 2500, 2800, 'CABA', 2),
('Big Truck', 'Volvo', 2020, true, true, 4, 'GHI789', 10000, 3000, 3200, 'CABA', 3),
('Small Truck', 'Toyota', 2023, true, true, 2, 'JKL123', 6000, 2200, 2400, 'CABA', 1),
('Medium Truck', 'Dodge', 2022, true, false, 3, 'MNO456', 8000, 2500, 2800, 'Rosario', 2),
('Big Truck', 'Mercedes-Benz', 2021, true, true, 4, 'PQR789', 10000, 3000, 3200, 'Salta', 3),
('Small Truck', 'Isuzu', 2022, true, true, 2, 'STU123', 6000, 2200, 2400, 'CABA', 1),
('Medium Truck', 'GMC', 2021, true, false, 3, 'VWX456', 8000, 2500, 2800, 'Salta', 2),
('Big Truck', 'Kenworth', 2020, true, true, 4, 'YZA789', 10000, 3000, 3200, 'Mendoza', 3),
('Small Truck', 'Mitsubishi', 2022, true, true, 2, 'BCD123', 6000, 2200, 2400, 'Salta', 1);