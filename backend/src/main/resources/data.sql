-- insert user --

INSERT INTO users(EMAIL, PASSWORD, ROLE)
VALUES ('maria@correo.com','$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta','ADMIN'),
('pedro@correo.com','$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta','ADMIN'),
('admin@movear.com','$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta','ADMIN'),
('user@test.com','$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta','ADMIN')
;


INSERT INTO LOCATIONS(ID_LOCATION, NAME) values  ('02000010','Ciudad Autónoma de Buenos Aires'),
                                                 ('14014010','Córdoba'),
                                                 ('06441030','La Plata'),
                                                 ('10077020','Rosario'),
                                                 ('66028050','Salta');

INSERT INTO CUSTOMERS(full_name, fk_location,fk_user, address,dni,number_license,date_expiration)
VALUES ('Maria Contrera','02000010',1,'Control','234234234','234234234','2026-09-12'),
('Pedro Perez','14014010',2,'Otra direccion','345345345','234234234','2029-09-12'),
('Admin Admin','10077020',3,'Otra direccion','6768768','4565466','2025-09-12'),
('Test Test','06441030',4,'Otra direccion','97979','456456','2049-09-12')
;






INSERT INTO Categories (NAME, VOLUME, CAPACITY_LIMIT, HOURLY_PRICE)
VALUES
('Small', 10.0, 1000.0, 40000.00),
('Medium', 20.0, 2000.0, 50000.00),
('Big', 30.0, 3000.0, 60000.00);


-- insert locations --


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
