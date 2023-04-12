-- insert categories

INSERT INTO Categories (NAME, VOLUME, CAPACITY_LIMIT, HOURLY_PRICE)
VALUES
('Small', 10.0, 1000.0, 40000.00),
('Medium', 20.0, 2000.0, 50000.00),
('Big', 30.0, 3000.0, 60000.00);

INSERT INTO LOCATIONS(ID_LOCATION, NAME) values  ('02000010','Ciudad Autónoma de Buenos Aires'),
                                                 ('14014010','Córdoba'),
                                                 ('06441030','La Plata'),
                                                 ('10077020','Rosario'),
                                                 ('66028050','Salta');

-- insert moving trucks

INSERT INTO Cars (MODEL, MAKE, YEAR, AIR, GPS, PASSENGERS, PATENT, LENGTH, WIDTH, HEIGHT, FK_LOCATION, ID_CATEGORY)
VALUES
('Small Truck', 'Ford', 2022, true, true, 2, 'ABC123', 6000, 2200, 2400, '02000010', 1),
('Medium Truck', 'Chevrolet', 2021, true, false, 3, 'DEF456', 8000, 2500, 2800, '14014010', 2),
('Big Truck', 'Volvo', 2020, true, true, 4, 'GHI789', 10000, 3000, 3200, '06441030', 3),
('Small Truck', 'Toyota', 2023, true, true, 2, 'JKL123', 6000, 2200, 2400, '10077020', 1),
('Medium Truck', 'Dodge', 2022, true, false, 3, 'MNO456', 8000, 2500, 2800, '66028050', 2),
('Big Truck', 'Mercedes-Benz', 2021, true, true, 4, 'PQR789', 10000, 3000, 3200, '66028050', 3),
('Small Truck', 'Isuzu', 2022, true, true, 2, 'STU123', 6000, 2200, 2400, '10077020', 1),
('Medium Truck', 'GMC', 2021, true, false, 3, 'VWX456', 8000, 2500, 2800, '06441030', 2),
('Big Truck', 'Kenworth', 2020, true, true, 4, 'YZA789', 10000, 3000, 3200, '02000010', 1),
('Small Truck', 'Mitsubishi', 2022, true, true, 2, 'BCD123', 6000, 2200, 2400, '14014010', 1);



INSERT INTO Cars (MODEL, MAKE, YEAR, AIR, GPS, PASSENGERS, PATENT, LENGTH, WIDTH, HEIGHT, ID_CATEGORY)
VALUEs
('Test', 'Ford', 2022, true, true, 2, 'ABC123', 6000, 2200, 2400, 1);
