CREATE DATABASE sistema;


use sistema;


CREATE TABLE administradores(
    adminId INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellidoP VARCHAR(255) NOT NULL,
    apellidoM VARCHAR(255) NOT NULL,
    user VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL

);

SHOW TABLES;

DESCRIBE administradores;