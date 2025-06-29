CREATE DATABASE  IF NOT EXISTS `cinemax` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cinemax`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cinemax
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `role` enum('manage','staff') DEFAULT 'manage',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `tickets_id` int DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_ibfk_1` (`user_id`),
  KEY `customers_ibfk_2` (`tickets_id`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `customers_ibfk_2` FOREIGN KEY (`tickets_id`) REFERENCES `tickets` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(2,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(3,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(4,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(5,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(6,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(10,2,NULL,'','','','b',''),(11,5,NULL,'','','','b',''),(12,8,NULL,'','','','lolo',''),(13,9,NULL,'','','','lolo',''),(14,10,NULL,'','','','lolo',''),(15,11,NULL,'','','','lolo',''),(16,12,NULL,'','','','lolo',''),(17,13,NULL,'','','','lolo',''),(18,14,NULL,'','','','lolo','');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `running_time` int NOT NULL COMMENT 'Thời lượng phim',
  `genre` varchar(255) NOT NULL,
  `movie_time` datetime NOT NULL COMMENT 'Các khung giờ chiếu phim',
  `director` varchar(255) DEFAULT NULL,
  `cast` text,
  `language` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `poster_url` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `post_type` enum('introduction','promotion','announcement','news') NOT NULL,
  `admin_id` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `start_date` datetime DEFAULT NULL COMMENT 'Ngày bắt đầu hiệu lực (dùng cho khuyến mãi)',
  `end_date` datetime DEFAULT NULL COMMENT 'Ngày kết thúc hiệu lực (dùng cho khuyến mãi)',
  `is_published` tinyint(1) DEFAULT '0' COMMENT 'Lưu ở trạng thái công khai hoặc riêng tư',
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `theater_id` int NOT NULL,
  `seat_row` varchar(255) NOT NULL,
  `seat_number` varchar(255) NOT NULL,
  `seat_type` enum('standard','couple') DEFAULT 'standard',
  PRIMARY KEY (`id`),
  KEY `theater_id` (`theater_id`),
  CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theaters`
--

DROP TABLE IF EXISTS `theaters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theaters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `movies_id` int DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `movies_id` (`movies_id`),
  CONSTRAINT `theaters_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theaters`
--

LOCK TABLES `theaters` WRITE;
/*!40000 ALTER TABLE `theaters` DISABLE KEYS */;
/*!40000 ALTER TABLE `theaters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movies_id` int DEFAULT NULL,
  `theater_id` int DEFAULT NULL,
  `seat_id` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `status` enum('pending','paid','cancelled','used') DEFAULT 'pending',
  `booking_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `tickets_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `movies_id` (`movies_id`),
  KEY `theater_id` (`theater_id`),
  KEY `seat_id` (`seat_id`),
  KEY `FKs490nrabkujkhstqti6m49s4a` (`tickets_id`),
  CONSTRAINT `FKs490nrabkujkhstqti6m49s4a` FOREIGN KEY (`tickets_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE SET NULL,
  CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`) ON DELETE SET NULL,
  CONSTRAINT `tickets_ibfk_3` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','customer') NOT NULL DEFAULT 'customer',
  `name` varchar(255) NOT NULL,
  `gender` enum('female','male') DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'a@gmail.com','0123455221','baodz','customer','baodz','male'),(2,'b@gmail.com','02020','b','customer','b','male'),(5,'ba@gmail.com','02020','b','customer','b','male'),(8,'l@gmail.com',NULL,'l','customer','lolo','male'),(9,'lo@gmail.com','2903','l','customer','lolo','male'),(10,'l0o@gmail.com','2903','l','customer','lolo','male'),(11,'1226@gmail.com','2903','b','customer','lolo','male'),(12,'1228@gmail.com','2903','b','customer','lolo','male'),(13,'1231@gmail.com','2903','b','customer','lolo','male'),(14,'1234@gmail.com','2903','b','customer','lolo','male');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-30  1:02:53
