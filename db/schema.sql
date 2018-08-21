
  DROP DATABASE IF EXISTS burgers_db;
  CREATE DATABASE burgers_db;
  USE burgers_db;

  CREATE TABLE burgers (
    id INT(30) AUTO_INCREMENT PRIMARY KEY,
    burger_name varchar(100) NOT NULL,
    devoured BOOLEAN DEFAULT false
  );