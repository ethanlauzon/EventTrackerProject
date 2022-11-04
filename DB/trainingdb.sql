-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trainingdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `trainingdb` ;

-- -----------------------------------------------------
-- Schema trainingdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trainingdb` DEFAULT CHARACTER SET utf8 ;
USE `trainingdb` ;

-- -----------------------------------------------------
-- Table `trainer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trainer` ;

CREATE TABLE IF NOT EXISTS `trainer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `bench` INT NULL,
  `squat` INT NULL,
  `deadlift` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS trainer@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'trainer'@'localhost' IDENTIFIED BY 'trainer';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'trainer'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `trainer`
-- -----------------------------------------------------
START TRANSACTION;
USE `trainingdb`;
INSERT INTO `trainer` (`id`, `name`, `bench`, `squat`, `deadlift`) VALUES (1, 'Ethan Lauzon', 135, 165, 265);
INSERT INTO `trainer` (`id`, `name`, `bench`, `squat`, `deadlift`) VALUES (2, 'Paul Ledney', 225, 185, 315);
INSERT INTO `trainer` (`id`, `name`, `bench`, `squat`, `deadlift`) VALUES (3, 'King Diamond', 185, 225, 300);

COMMIT;

