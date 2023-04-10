INSERT INTO Categories (VOLUME, NAME, CAPACITY_LIMIT)
VALUES
(10.0, 'Small', 1000.0),
(20.0, 'Medium', 2000.0),
(30.0, 'Big', 3000.0);

-- insert moving trucks


INSERT INTO Cars (IMAGE, MODEL, MAKE, YEAR, AIR, GPS, PASSENGERS, PATENT, LENGTH, WIDTH, HEIGHT, PICK_UP_LOCATION, AVAILABLE,ID_CATEGORY)
VALUES
('truck1.jpg', 'Small Truck', 'Ford', 2022, true, true, 2, 'ABC123', 6000, 2200, 2400, 'Catan', true,1),
('truck2.jpg', 'Medium Truck', 'Chevrolet', 2021, true, false, 3, 'DEF456', 8000, 2500, 2800, 'Catan', true,2),
('truck3.jpg', 'Big Truck', 'Volvo', 2020, true, true, 4, 'GHI789', 10000, 3000, 3200, 'Catan', false,3),
('truck4.jpg', 'Small Truck', 'Toyota', 2023, true, true, 2, 'JKL123', 6000, 2200, 2400, 'Catan', true,1),
('truck5.jpg', 'Medium Truck', 'Dodge', 2022, true, false, 3, 'MNO456', 8000, 2500, 2800, 'Virrey Del Pino', false,2),
('truck6.jpg', 'Big Truck', 'Mercedes-Benz', 2021, true, true, 4, 'PQR789', 10000, 3000, 3200, 'Lomas de Zamora', true,3),
('truck7.jpg', 'Small Truck', 'Isuzu', 2022, true, true, 2, 'STU123', 6000, 2200, 2400, 'Catan', false,1),
('truck8.jpg', 'Medium Truck', 'GMC', 2021, true, false, 3, 'VWX456', 8000, 2500, 2800, 'Liniers', true,2),
('truck9.jpg', 'Big Truck', 'Kenworth', 2020, true, true, 4, 'YZA789', 10000, 3000, 3200, 'Moron', true,3),
('truck10.jpg', 'Small Truck', 'Mitsubishi', 2022, true, true, 2, 'BCD123', 6000, 2200, 2400, 'Lomas Del Mirador', true,1);