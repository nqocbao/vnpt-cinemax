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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,1,'manage'),(2,2,'staff'),(3,1,'manage'),(4,2,'staff');
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
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_ibfk_1` (`user_id`),
  CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (12,8,'hanoi','tay ho','vietnam','lolo',NULL),(13,9,'','','','lolo',''),(14,10,'','','','lolo',''),(15,11,'','','','lolo',''),(16,12,'','','','lolo',''),(17,13,'','','','lolo',''),(18,14,'','','','lolo',''),(19,15,'','','','lolo',''),(20,16,'','','','asdr',''),(21,17,'','','','qwe',''),(22,18,'','','','sq',''),(23,19,'','','','sqs',''),(24,20,'','','','sq',''),(25,21,'','','','wdw',''),(26,22,'','','','dd',''),(29,25,'','','','bao','dep chai');
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
  `movie_time` datetime DEFAULT NULL COMMENT 'Các khung giờ chiếu phim',
  `director` varchar(255) DEFAULT NULL,
  `cast` text,
  `content` longtext,
  `language` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `poster_url` varchar(255) DEFAULT NULL,
  `trailer_url` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `age_limit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'The Shawshank Redemption',142,'Drama','2025-07-02 10:00:00','Frank Darabont','Tim Robbins, Morgan Freeman','The Shawshank Redemption là một kiệt tác điện ảnh kể về hành trình đầy cảm xúc của Andy Dufresne, một nhân viên ngân hàng bị kết án oan vì tội giết vợ. Bị giam cầm trong nhà tù Shawshank khắc nghiệt, Andy xây dựng một tình bạn sâu sắc với Red, một tù nhân kỳ cựu. Bộ phim không chỉ khám phá chủ đề hy vọng và sự kiên trì mà còn thể hiện tinh thần tự do qua những nỗ lực bí mật của Andy để vượt ngục, kết thúc với một cái kết bất ngờ và đầy nhân văn, khiến người xem không thể quên.','English','1994-09-23','https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg','https://www.youtube.com/watch?v=6hB3S9bIaco','2023-01-15 10:00:00','C16'),(2,'The Godfather',175,'Crime','2025-07-02 12:30:00','Francis Ford Coppola','Marlon Brando, Al Pacino','The Godfather là một bộ phim kinh điển về gia đình mafia Corleone, nơi quyền lực và lòng trung thành đan xen trong thế giới ngầm nước Mỹ. Dưới sự lãnh đạo của Don Vito Corleone, gia đình đối mặt với những âm mưu, phản bội và sự chuyển giao thế hệ khi con trai Michael bất đắc dĩ bước vào con đường tội phạm. Với diễn xuất xuất sắc và cốt truyện phức tạp, phim khắc họa sâu sắc sự hy sinh và bi kịch của một gia đình quyền lực.','English','1972-03-15','https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=sY1S34973zA','2023-01-15 10:01:00','C18'),(3,'Pulp Fiction',154,'Crime','2025-07-02 15:00:00','Quentin Tarantino','John Travolta, Samuel L. Jackson','Pulp Fiction là một tác phẩm độc đáo của Quentin Tarantino, kết hợp các câu chuyện tội phạm đan xen với những cuộc đối thoại hài hước và bất ngờ. Từ tay súng Vincent Vega và Jules Winnfield đến mối quan hệ phức tạp giữa các nhân vật, bộ phim mang đến một góc nhìn mới mẻ về thế giới ngầm với những tình huống hài hước xen lẫn bạo lực, tạo nên một trải nghiệm điện ảnh khó quên.','English','1994-10-14','https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=s7EdQ4FqbhY','2023-01-15 10:02:00','C18'),(4,'The Dark Knight',152,'Action','2025-07-02 18:00:00','Christopher Nolan','Christian Bale, Heath Ledger','The Dark Knight đưa khán giả vào cuộc chiến tâm lý căng thẳng giữa Batman và Joker, kẻ thù không đội trời chung. Với sự dẫn dắt của Christopher Nolan và diễn xuất đỉnh cao của Heath Ledger, bộ phim không chỉ là một tác phẩm hành động mà còn là một cuộc đối đầu về đạo đức và công lý, để lại dấu ấn sâu đậm trong lịch sử điện ảnh siêu anh hùng.','English','2008-07-18','https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg','https://www.youtube.com/watch?v=EXeTwQB4sM4','2023-01-15 10:03:00','C16'),(5,'Inception',148,'Sci-Fi','2025-07-02 20:30:00','Christopher Nolan','Leonardo DiCaprio, Joseph Gordon-Levitt','Inception là một cuộc phiêu lưu trí tuệ trong thế giới giấc mơ, nơi Dom Cobb và đội của anh thực hiện những vụ trộm thông tin từ tiềm thức. Với hiệu ứng hình ảnh ấn tượng và cốt truyện nhiều tầng lớp, bộ phim khám phá ranh giới giữa thực tại và ảo giác, mang đến một trải nghiệm điện ảnh độc đáo và đầy thách thức.','English','2010-07-16','https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg','https://www.youtube.com/watch?v=YoHD9XEInc0','2023-01-15 10:04:00','C13'),(6,'Fight Club',139,'Drama','2025-07-03 10:00:00','David Fincher','Brad Pitt, Edward Norton','Fight Club kể về một nhân viên văn phòng chán nản tạo nên một câu lạc bộ bí mật để giải tỏa căng thẳng, dẫn đến một phong trào nổi loạn chống lại xã hội tiêu dùng. Bộ phim không chỉ là một hành trình tâm lý mà còn là lời cảnh tỉnh về bản chất con người và sự tự hủy hoại, với cú twist kết thúc gây sốc.','English','1999-10-15','https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=SUXWAEB3uPQ','2023-01-15 10:05:00','C18'),(7,'Forrest Gump',142,'Drama','2025-07-03 12:30:00','Robert Zemeckis','Tom Hanks, Robin Wright','Forrest Gump là câu chuyện cảm động về một người đàn ông với trí tuệ đơn giản nhưng trái tim rộng lớn, sống qua những sự kiện lịch sử Mỹ thế kỷ 20. Từ tình yêu với Jenny đến những thành tựu bất ngờ, bộ phim truyền tải thông điệp về lòng tốt và hy vọng, khiến khán giả xúc động sâu sắc.','English','1994-07-06','https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg','https://www.youtube.com/watch?v=bLvqoHBptjg','2023-01-15 10:06:00','P'),(8,'The Matrix',136,'Sci-Fi','2025-07-03 15:00:00','Wachowski Sisters','Keanu Reeves, Laurence Fishburne','The Matrix đưa khán giả vào một thế giới ảo do máy móc kiểm soát, nơi Neo phát hiện ra sự thật và trở thành người cứu rỗi loài người. Với hiệu ứng \"bullet time\" đột phá và triết lý sâu sắc, bộ phim đã định hình lại thể loại khoa học viễn tưởng và hành động.','English','1999-03-31','https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=vKQi3bBA1y8','2023-01-15 10:07:00','C13'),(9,'Goodfellas',146,'Crime','2025-07-03 18:00:00','Martin Scorsese','Robert De Niro, Ray Liotta','Goodfellas tái hiện cuộc đời của Henry Hill, một thành viên băng đảng mafia, với những khoảnh khắc huy hoàng và bi kịch. Dựa trên câu chuyện có thật, bộ phim của Martin Scorsese mang đến cái nhìn chân thực về thế giới tội phạm, từ sự giàu có đến sự sụp đổ không tránh khỏi.','English','1990-09-19','https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=qo5jJpHtI1Y','2023-01-15 10:08:00','C18'),(10,'The Lord of the Rings: The Fellowship of the Ring',178,'Fantasy','2025-07-03 20:30:00','Peter Jackson','Elijah Wood, Ian McKellen','The Lord of the Rings: The Fellowship of the Ring mở đầu cho một hành trình huyền thoại khi Frodo và nhóm bạn đồng hành lên đường tiêu hủy chiếc nhẫn quyền lực. Với bối cảnh đồ sộ và nhân vật đa dạng, bộ phim đã đặt nền móng cho một trong những series vĩ đại nhất lịch sử điện ảnh.','English','2001-12-19','https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg','https://www.youtube.com/watch?v=V75dMMIW2B4','2023-01-15 10:09:00','C13'),(11,'Titanic',195,'Romance','2025-07-04 10:00:00','James Cameron','Leonardo DiCaprio, Kate Winslet','Titanic kể về tình yêu định mệnh giữa Jack và Rose trên con tàu huyền thoại trước khi nó chìm trong thảm họa. Với kỹ xảo ấn tượng và câu chuyện lãng mạn xen kẽ bi kịch, bộ phim của James Cameron đã chạm đến trái tim hàng triệu khán giả trên toàn thế giới.','English','1997-12-19','https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOY-ZjNmJhYTYxZDAwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg','https://www.youtube.com/watch?v=kVrqfYjkTdQ','2023-01-15 10:10:00','C13'),(12,'The Silence of the Lambs',118,'Thriller','2025-07-04 12:30:00','Jonathan Demme','Jodie Foster, Anthony Hopkins','The Silence of the Lambs là cuộc đối đầu tâm lý căng thẳng giữa đặc vụ FBI Clarice Starling và kẻ sát nhân ăn thịt người Hannibal Lecter. Bộ phim không chỉ là một tác phẩm kinh dị mà còn là một hành trình khám phá nội tâm, với diễn xuất xuất sắc của Jodie Foster và Anthony Hopkins.','English','1991-02-14','https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=W6Mm8Sbe__o','2023-01-15 10:11:00','C18'),(13,'Star Wars: Episode IV - A New Hope',121,'Sci-Fi','2025-07-04 15:00:00','George Lucas','Mark Hamill, Harrison Ford','Star Wars: Episode IV - A New Hope giới thiệu khán giả đến với vũ trụ rộng lớn của Luke Skywalker, khi anh cùng các đồng minh chiến đấu chống lại Đế quốc. Bộ phim không chỉ là một câu chuyện anh hùng mà còn là nền tảng cho một thương hiệu văn hóa toàn cầu.','English','1977-05-25','https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg','https://www.youtube.com/watch?v=1g3_CFmnU7k','2023-01-15 10:12:00','P'),(14,'Schindler\'s List',195,'Drama','2025-07-04 18:00:00','Steven Spielberg','Liam Neeson, Ben Kingsley','Schindler\'s List tái hiện câu chuyện có thật về Oskar Schindler, người đã cứu hàng nghìn người Do Thái trong Thế chiến II. Với phong cách quay phim đen trắng và cảm xúc mãnh liệt, bộ phim của Steven Spielberg là một lời nhắc nhở về lòng nhân ái trong thời chiến.','English','1993-12-15','https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=gG22XNhtnoY','2023-01-15 10:13:00','C16'),(15,'The Lion King',88,'Animation','2025-07-04 20:30:00','Roger Allers, Rob Minkoff','Matthew Broderick, Jeremy Irons','The Lion King kể về hành trình trưởng thành của Simba, từ việc mất đi cha đến việc giành lại ngai vàng. Với âm nhạc tuyệt vời và thông điệp về trách nhiệm, bộ phim hoạt hình này đã trở thành một kiệt tác kinh điển cho mọi lứa tuổi.','English','1994-06-15','https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtKjE3YS00NDVhLWFjYWQtYmFkM2ZjNjg0OWU5XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg','https://www.youtube.com/watch?v=4sj1MT05lAA','2023-01-15 10:14:00','P'),(16,'Gladiator',155,'Action','2025-07-05 10:00:00','Ridley Scott','Russell Crowe, Joaquin Phoenix','Gladiator đưa khán giả vào đấu trường La Mã, nơi Maximus tìm cách trả thù kẻ đã giết gia đình anh. Với hình ảnh hoành tráng và diễn xuất mạnh mẽ của Russell Crowe, bộ phim là một bản anh hùng ca về danh dự và sự hy sinh.','English','2000-05-05','https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=ol67qo3WrdY','2023-01-15 10:15:00','C16'),(17,'The Departed',151,'Crime','2025-07-05 12:30:00','Martin Scorsese','Leonardo DiCaprio, Matt Damon','The Departed là một cuộc đấu trí căng thẳng giữa cảnh sát và gián điệp trong thế giới ngầm Boston. Với dàn diễn viên tài năng và cốt truyện phức tạp, bộ phim của Martin Scorsese đã mang về giải Oscar cho phim hay nhất.','English','2006-10-06','https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTcwOTc5ODk3MQ@@._V1_.jpg','https://www.youtube.com/watch?v=ibJEBuW3fzk','2023-01-15 10:16:00','C18'),(18,'Avatar',162,'Sci-Fi','2025-07-05 15:00:00','James Cameron','Sam Worthington, Zoe Saldana','Avatar đưa khán giả đến hành tinh Pandora với công nghệ 3D tiên phong. Câu chuyện về Jake Sully và cuộc chiến bảo vệ thiên nhiên đã tạo nên một cuộc cách mạng trong ngành công nghiệp điện ảnh hiện đại.','English','2009-12-18','https://m.media-amazon.com/images/M/MV5BZjZkODMwZmEtYjdiMy00ZmY2LTg2MTQtZWU0ZjQwODRkZjIwXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg','https://www.youtube.com/watch?v=5PSNL1qE6VY','2023-01-15 10:17:00','C13'),(19,'The Avengers',143,'Action','2025-07-05 18:00:00','Joss Whedon','Robert Downey Jr., Chris Evans','The Avengers tập hợp các siêu anh hùng như Iron Man, Captain America để chống lại mối đe dọa từ Loki. Với quy mô lớn và hành động mãn nhãn, bộ phim đã đánh dấu bước ngoặt cho vũ trụ điện ảnh Marvel.','English','2012-05-04','https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg','https://www.youtube.com/watch?v=eOrNdBpGMv8','2023-01-15 10:18:00','C13'),(20,'Parasite',132,'Thriller','2025-07-05 20:30:00','Bong Joon-ho','Song Kang-ho, Choi Woo-shik','Parasite kể về một gia đình nghèo trà trộn vào nhà giàu, dẫn đến những xung đột xã hội gay gắt. Với sự pha trộn giữa hài hước và bi kịch, bộ phim của Bong Joon-ho đã chinh phục cả thế giới và giành giải Oscar.','Korean','2019-10-11','https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg','https://www.youtube.com/watch?v=5xH0HfJHsaY','2023-01-15 10:19:00','C16');
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
  `posts_url` varchar(255) DEFAULT NULL COMMENT 'Liên kết đến hình ảnh của bài đăng',
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Giới Thiệu Cinemax','Chào mừng đến với Cinemax - hệ thống rạp chiếu phim hiện đại nhất Việt Nam! Chúng tôi mang đến trải nghiệm giải trí đỉnh cao với các bộ phim bom tấn, ghế ngồi thoải mái và dịch vụ thân thiện.','introduction',1,'2025-07-09 08:00:00','2025-07-09 00:53:44',NULL,NULL,1,'https://images.unsplash.com/photo-1582561923465-2c4b6e02d363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'),(2,'Khuyến Mãi Mùa Hè 2025','Mua 2 vé tặng 1 bắp rang bơ miễn phí! Chương trình áp dụng cho tất cả các suất chiếu từ ngày 10/7 đến 20/7/2025 tại tất cả các rạp Cinemax.','promotion',1,'2025-07-09 09:00:00','2025-07-09 00:53:44','2025-07-10 00:00:00','2025-07-20 23:59:59',1,'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'),(3,'Thông Báo Lịch Chiếu Mới','Cinemax công bố lịch chiếu mới cho tháng 7/2025 với các bộ phim bom tấn như The Shawshank Redemption, The Dark Knight và nhiều phim khác. Kiểm tra lịch chiếu ngay!','announcement',2,'2025-07-09 10:00:00','2025-07-09 00:53:44',NULL,NULL,1,'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'),(4,'Tin Tức: Cinemax Mở Rạp Mới Tại Hải Phòng','Cinemax hân hạnh khai trương rạp chiếu phim mới tại Hải Phòng vào ngày 15/7/2025. Đến tham dự để nhận vé miễn phí và nhiều quà tặng hấp dẫn!','news',2,'2025-07-09 11:00:00','2025-07-09 00:53:44','2025-07-15 00:00:00',NULL,0,'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'),(5,'Giới Thiệu Cinemax','Chào mừng đến với Cinemax - hệ thống rạp chiếu phim hiện đại nhất Việt Nam! Chúng tôi mang đến trải nghiệm giải trí đỉnh cao với các bộ phim bom tấn, ghế ngồi thoải mái và dịch vụ thân thiện.','introduction',1,'2025-07-09 08:00:00','2025-07-09 08:00:00',NULL,NULL,1,NULL),(6,'Khuyến Mãi Mùa Hè 2025','Mua 2 vé tặng 1 bắp rang bơ miễn phí! Chương trình áp dụng cho tất cả các suất chiếu từ ngày 10/7 đến 20/7/2025 tại tất cả các rạp Cinemax.','promotion',1,'2025-07-09 09:00:00','2025-07-09 09:00:00','2025-07-10 00:00:00','2025-07-20 23:59:59',1,NULL),(7,'Thông Báo Lịch Chiếu Mới','Cinemax công bố lịch chiếu mới cho tháng 7/2025 với các bộ phim bom tấn như The Shawshank Redemption, The Dark Knight và nhiều phim khác. Kiểm tra lịch chiếu ngay!','announcement',2,'2025-07-09 10:00:00','2025-07-09 10:00:00',NULL,NULL,1,NULL),(8,'Tin Tức: Cinemax Mở Rạp Mới Tại Hải Phòng','Cinemax hân hạnh khai trương rạp chiếu phim mới tại Hải Phòng vào ngày 15/7/2025. Đến tham dự để nhận vé miễn phí và nhiều quà tặng hấp dẫn!','news',2,'2025-07-09 11:00:00','2025-07-09 11:00:00','2025-07-15 00:00:00',NULL,0,NULL),(9,'Khám Phá Công Nghệ Mới Tại Cinemax','Cinemax tự hào giới thiệu công nghệ âm thanh Dolby Atmos và màn hình IMAX tại tất cả các rạp từ tháng 8/2025. Hãy đến để trải nghiệm sự khác biệt!','introduction',1,'2025-07-09 12:00:00','2025-07-09 12:00:00',NULL,NULL,1,'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'),(10,'Ưu Đãi Đặc Biệt Cuối Tuần','Giảm 30% giá vé cho tất cả các suất chiếu cuối tuần từ 15/7 đến 31/7/2025. Đặt vé ngay để không bỏ lỡ!','promotion',1,'2025-07-09 13:00:00','2025-07-09 13:00:00','2025-07-15 00:00:00','2025-07-31 23:59:59',1,'https://images.unsplash.com/photo-1593642634315-48f5414c8125?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'),(11,'Thông Báo Tạm Đóng Rạp Cần Thơ','Rạp Cinemax Pearl tại Cần Thơ sẽ tạm đóng cửa từ 20/7 đến 25/7/2025 để nâng cấp cơ sở vật chất. Mong quý khách thông cảm!','announcement',2,'2025-07-09 14:00:00','2025-07-09 14:00:00',NULL,NULL,1,'https://images.unsplash.com/photo-1546484396-fb3fcffa5a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'),(12,'Tin Tức: Sự Kiện Ra Mắt Phim Mới','Cinemax tổ chức buổi công chiếu độc quyền phim \"Inception\" vào ngày 25/7/2025 tại Hà Nội. Đăng ký ngay để nhận vé miễn phí!','news',2,'2025-07-09 15:00:00','2025-07-09 15:00:00','2025-07-25 00:00:00',NULL,0,'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
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
  `show_times_id` int NOT NULL,
  `seat_row` varchar(255) NOT NULL,
  `seat_number` varchar(255) NOT NULL,
  `seat_type` enum('standard','vip') DEFAULT 'standard',
  PRIMARY KEY (`id`),
  KEY `theater_id` (`theater_id`),
  KEY `show_times_id` (`show_times_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`) ON DELETE CASCADE,
  CONSTRAINT `seats_ibfk_2` FOREIGN KEY (`show_times_id`) REFERENCES `show_times` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
INSERT INTO `seats` VALUES (1,1,1,'A','1','standard'),(2,1,1,'A','2','standard'),(3,1,1,'B','1','vip'),(4,2,2,'A','1','standard'),(5,2,2,'B','1','vip'),(6,3,3,'A','1','standard'),(7,1,1,'F','12','vip'),(8,1,1,'E','12','vip'),(9,1,1,'D','12','vip'),(10,1,1,'C','12','vip'),(11,2,1,'F','12','vip'),(12,2,1,'E','12','vip'),(13,1,1,'G','12','vip'),(14,2,1,'F','11','vip'),(15,2,1,'F','10','standard');
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `show_times`
--

DROP TABLE IF EXISTS `show_times`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `show_times` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NOT NULL,
  `theater_id` int NOT NULL,
  `show_date` date DEFAULT NULL,
  `start_time` time NOT NULL,
  `number_seat` int NOT NULL COMMENT 'Số ghế khả dụng',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `create_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `movie_id` (`movie_id`),
  KEY `theater_id` (`theater_id`),
  CONSTRAINT `show_times_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `show_times_ibfk_2` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `show_times`
--

LOCK TABLES `show_times` WRITE;
/*!40000 ALTER TABLE `show_times` DISABLE KEYS */;
INSERT INTO `show_times` VALUES (1,1,1,'2025-07-09','10:00:00',100,'2025-07-08 22:00:00',NULL),(2,2,2,'2025-07-09','12:30:00',80,'2025-07-08 22:01:00',NULL),(3,4,3,'2025-07-09','18:00:00',120,'2025-07-08 22:02:00',NULL),(4,5,1,'2025-07-10','20:30:00',90,'2025-07-08 22:03:00',NULL),(5,1,1,'2025-07-06','13:15:00',100,'2025-07-14 00:47:45','2025-07-14 00:47:45.052776'),(6,1,1,'2025-07-06','14:45:00',100,'2025-07-14 00:47:45','2025-07-14 00:47:45.080059'),(7,1,1,'2025-07-06','20:15:00',100,'2025-07-14 00:47:45','2025-07-14 00:47:45.083969'),(8,1,1,'2025-07-06','21:30:00',100,'2025-07-14 00:47:45','2025-07-14 00:47:45.086999');
/*!40000 ALTER TABLE `show_times` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theater_movies`
--

DROP TABLE IF EXISTS `theater_movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theater_movies` (
  `theater_id` int NOT NULL,
  `movies_id` int NOT NULL,
  KEY `FK2yvta0l7uvewl4eghkjkxjov9` (`movies_id`),
  KEY `FKkqw9a5iki0k7wnib0xaekpip3` (`theater_id`),
  CONSTRAINT `FK2yvta0l7uvewl4eghkjkxjov9` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `FKkqw9a5iki0k7wnib0xaekpip3` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theater_movies`
--

LOCK TABLES `theater_movies` WRITE;
/*!40000 ALTER TABLE `theater_movies` DISABLE KEYS */;
/*!40000 ALTER TABLE `theater_movies` ENABLE KEYS */;
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
  KEY `movies_id` (`movies_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theaters`
--

LOCK TABLES `theaters` WRITE;
/*!40000 ALTER TABLE `theaters` DISABLE KEYS */;
INSERT INTO `theaters` VALUES (1,'Cinemax Central','Hà Nội',1,'2025-07-02 14:00:00'),(2,'Cinemax Galaxy','TP Hồ Chí Minh',3,'2025-07-02 14:01:00'),(3,'Cinemax Diamond','Đà Nẵng',5,'2025-07-02 14:02:00'),(4,'Cinemax Pearl','Cần Thơ',7,'2025-07-02 14:03:00'),(5,'Cinemax Star','Hải Phòng',10,'2025-07-02 14:04:00');
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
  `seat_id` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `status` enum('pending','paid','cancelled','used') DEFAULT 'pending',
  `booking_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `booking_code` varchar(255) DEFAULT NULL,
  `show_time_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `movies_id` int DEFAULT NULL,
  `theater_id` int DEFAULT NULL,
  `tickets_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `seat_id` (`seat_id`),
  KEY `fk_tickets_show_times` (`show_time_id`),
  KEY `fk_tickets_users` (`user_id`),
  KEY `FKmlhm2pr7b0lqjc6nj1ia7urvm` (`movies_id`),
  KEY `FK38cfth0o6wei3ui9pvto1m983` (`theater_id`),
  KEY `FKs490nrabkujkhstqti6m49s4a` (`tickets_id`),
  CONSTRAINT `FK38cfth0o6wei3ui9pvto1m983` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`),
  CONSTRAINT `fk_tickets_show_times` FOREIGN KEY (`show_time_id`) REFERENCES `show_times` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tickets_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FKmlhm2pr7b0lqjc6nj1ia7urvm` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `FKs490nrabkujkhstqti6m49s4a` FOREIGN KEY (`tickets_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `tickets_ibfk_3` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,1,100000,'paid','2025-07-08 22:10:00',NULL,1,1,1,1,NULL),(2,2,100000,'pending','2025-07-08 22:15:00',NULL,1,1,1,1,NULL),(3,3,150000,'paid','2025-07-08 22:20:00',NULL,2,2,NULL,NULL,NULL),(5,5,200000,'used','2025-07-08 22:30:00',NULL,4,1,NULL,NULL,NULL),(6,6,100000,'paid','2025-07-08 22:35:00',NULL,1,8,NULL,NULL,NULL),(7,8,120000,'pending','2025-07-13 11:16:45',NULL,1,1,1,1,NULL),(8,9,120000,'pending','2025-07-13 11:16:45',NULL,1,1,1,1,NULL),(9,10,120000,'paid','2025-07-13 11:59:53','123',1,1,1,1,NULL),(10,7,75000,'paid','2025-07-13 17:04:42','980117FA',1,1,2,1,NULL),(11,8,75000,'paid','2025-07-13 17:04:42','980117FA',1,1,2,1,NULL),(12,11,75000,'paid','2025-07-13 17:12:44','350FED9F',1,1,1,2,NULL),(13,12,75000,'paid','2025-07-13 17:12:44','350FED9F',1,1,1,2,NULL),(14,7,75000,'paid','2025-07-13 17:13:11','A947E73B',1,1,1,1,NULL),(15,13,75000,'paid','2025-07-13 17:13:11','A947E73B',1,1,1,1,NULL),(16,14,75000,'paid','2025-07-14 01:04:31','F6316650',1,1,3,2,NULL),(17,15,50000,'paid','2025-07-14 01:04:31','F6316650',1,1,3,2,NULL),(18,11,75000,'paid','2025-07-14 01:04:31','F6316650',1,1,3,2,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'a@gmail.com','0123455221','baodz','admin','baodz','male'),(2,'b@gmail.com','02020','b','admin','b','male'),(8,'l@gmail.com',NULL,'l','customer','lolo','male'),(9,'lo@gmail.com','2903','l','customer','lolo','male'),(10,'l0o@gmail.com','2903','l','customer','lolo','male'),(11,'1226@gmail.com','2903','b','customer','lolo','male'),(12,'1228@gmail.com','2903','b','customer','lolo','male'),(13,'1231@gmail.com','2903','b','customer','lolo','male'),(14,'1234@gmail.com','2903','b','customer','lolo','male'),(15,'124@gmail.com','2903','b','customer','lolo','male'),(16,'953@gmail.com','1242424','b','customer','asdr','male'),(17,'qwe@gmail.com','3322','b','customer','qwe','female'),(18,'qs@gmail.com','123','b','customer','sq','female'),(19,'qss@gmail.com','123','b','customer','sqs','female'),(20,'ee@gmail.com','23','b','customer','sq','female'),(21,'sdsddd@gmail.com','sfsf','b','customer','wdw','female'),(22,'nao280604@gmail.com','sqdq','b','customer','dd','female'),(25,'hahe','0398023','bao','customer','bao dep chai','male');
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

-- Dump completed on 2025-07-14  1:11:39
