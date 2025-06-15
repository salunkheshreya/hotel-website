-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2025 at 06:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel-booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `custome_details`
--

CREATE TABLE `custome_details` (
  `Name` varchar(30) NOT NULL,
  `Email id` varchar(30) NOT NULL,
  `Phone no` int(30) NOT NULL,
  `Adress` varchar(30) NOT NULL,
  `Check-in-date` date NOT NULL,
  `Check-out-date` date NOT NULL,
  `Payment-method` varchar(30) NOT NULL,
  `Ammount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `custome_details`
--

INSERT INTO `custome_details` (`Name`, `Email id`, `Phone no`, `Adress`, `Check-in-date`, `Check-out-date`, `Payment-method`, `Ammount`) VALUES
('Shreya', 'Shreya12@gmail.com', 1234567890, 'Nigdi', '2025-03-10', '2025-03-10', 'UPI', 5000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
