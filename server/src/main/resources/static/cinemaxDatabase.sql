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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(2,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(3,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(4,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(5,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(6,NULL,NULL,'nghean','doluong','vietnam','Bao','Depzai'),(10,2,NULL,'','','','b',''),(11,5,NULL,'','','','b',''),(12,8,NULL,'','','','lolo',''),(13,9,NULL,'','','','lolo',''),(14,10,NULL,'','','','lolo',''),(15,11,NULL,'','','','lolo',''),(16,12,NULL,'','','','lolo',''),(17,13,NULL,'','','','lolo',''),(18,14,NULL,'','','','lolo',''),(19,15,NULL,'','','','lolo',''),(20,16,NULL,'','','','asdr',''),(21,17,NULL,'','','','qwe',''),(22,18,NULL,'','','','sq',''),(23,19,NULL,'','','','sqs',''),(24,20,NULL,'','','','sq',''),(25,21,NULL,'','','','wdw',''),(26,22,NULL,'','','','dd',''),(27,23,NULL,'','','','ssq',''),(28,24,NULL,'','','','s','');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'The Shawshank Redemption',142,'Drama','2025-07-02 10:00:00','Frank Darabont','Tim Robbins, Morgan Freeman','The Shawshank Redemption là một kiệt tác điện ảnh kể về hành trình đầy cảm xúc của Andy Dufresne, một nhân viên ngân hàng bị kết án oan vì tội giết vợ. Bị giam cầm trong nhà tù Shawshank khắc nghiệt, Andy xây dựng một tình bạn sâu sắc với Red, một tù nhân kỳ cựu. Bộ phim không chỉ khám phá chủ đề hy vọng và sự kiên trì mà còn thể hiện tinh thần tự do qua những nỗ lực bí mật của Andy để vượt ngục, kết thúc với một cái kết bất ngờ và đầy nhân văn, khiến người xem không thể quên.','English','1994-09-23','https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg','https://www.youtube.com/watch?v=6hB3S9bIaco','2023-01-15 10:00:00'),(2,'The Godfather',175,'Crime','2025-07-02 12:30:00','Francis Ford Coppola','Marlon Brando, Al Pacino','The Godfather là một bộ phim kinh điển về gia đình mafia Corleone, nơi quyền lực và lòng trung thành đan xen trong thế giới ngầm nước Mỹ. Dưới sự lãnh đạo của Don Vito Corleone, gia đình đối mặt với những âm mưu, phản bội và sự chuyển giao thế hệ khi con trai Michael bất đắc dĩ bước vào con đường tội phạm. Với diễn xuất xuất sắc và cốt truyện phức tạp, phim khắc họa sâu sắc sự hy sinh và bi kịch của một gia đình quyền lực.','English','1972-03-15','https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=sY1S34973zA','2023-01-15 10:01:00'),(3,'Pulp Fiction',154,'Crime','2025-07-02 15:00:00','Quentin Tarantino','John Travolta, Samuel L. Jackson','Pulp Fiction là một tác phẩm độc đáo của Quentin Tarantino, kết hợp các câu chuyện tội phạm đan xen với những cuộc đối thoại hài hước và bất ngờ. Từ tay súng Vincent Vega và Jules Winnfield đến mối quan hệ phức tạp giữa các nhân vật, bộ phim mang đến một góc nhìn mới mẻ về thế giới ngầm với những tình huống hài hước xen lẫn bạo lực, tạo nên một trải nghiệm điện ảnh khó quên.','English','1994-10-14','https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=s7EdQ4FqbhY','2023-01-15 10:02:00'),(4,'The Dark Knight',152,'Action','2025-07-02 18:00:00','Christopher Nolan','Christian Bale, Heath Ledger','The Dark Knight đưa khán giả vào cuộc chiến tâm lý căng thẳng giữa Batman và Joker, kẻ thù không đội trời chung. Với sự dẫn dắt của Christopher Nolan và diễn xuất đỉnh cao của Heath Ledger, bộ phim không chỉ là một tác phẩm hành động mà còn là một cuộc đối đầu về đạo đức và công lý, để lại dấu ấn sâu đậm trong lịch sử điện ảnh siêu anh hùng.','English','2008-07-18','https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg','https://www.youtube.com/watch?v=EXeTwQB4sM4','2023-01-15 10:03:00'),(5,'Inception',148,'Sci-Fi','2025-07-02 20:30:00','Christopher Nolan','Leonardo DiCaprio, Joseph Gordon-Levitt','Inception là một cuộc phiêu lưu trí tuệ trong thế giới giấc mơ, nơi Dom Cobb và đội của anh thực hiện những vụ trộm thông tin từ tiềm thức. Với hiệu ứng hình ảnh ấn tượng và cốt truyện nhiều tầng lớp, bộ phim khám phá ranh giới giữa thực tại và ảo giác, mang đến một trải nghiệm điện ảnh độc đáo và đầy thách thức.','English','2010-07-16','https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg','https://www.youtube.com/watch?v=YoHD9XEInc0','2023-01-15 10:04:00'),(6,'Fight Club',139,'Drama','2025-07-03 10:00:00','David Fincher','Brad Pitt, Edward Norton','Fight Club kể về một nhân viên văn phòng chán nản tạo nên một câu lạc bộ bí mật để giải tỏa căng thẳng, dẫn đến một phong trào nổi loạn chống lại xã hội tiêu dùng. Bộ phim không chỉ là một hành trình tâm lý mà còn là lời cảnh tỉnh về bản chất con người và sự tự hủy hoại, với cú twist kết thúc gây sốc.','English','1999-10-15','https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=SUXWAEB3uPQ','2023-01-15 10:05:00'),(7,'Forrest Gump',142,'Drama','2025-07-03 12:30:00','Robert Zemeckis','Tom Hanks, Robin Wright','Forrest Gump là câu chuyện cảm động về một người đàn ông với trí tuệ đơn giản nhưng trái tim rộng lớn, sống qua những sự kiện lịch sử Mỹ thế kỷ 20. Từ tình yêu với Jenny đến những thành tựu bất ngờ, bộ phim truyền tải thông điệp về lòng tốt và hy vọng, khiến khán giả xúc động sâu sắc.','English','1994-07-06','https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg','https://www.youtube.com/watch?v=bLvqoHBptjg','2023-01-15 10:06:00'),(8,'The Matrix',136,'Sci-Fi','2025-07-03 15:00:00','Wachowski Sisters','Keanu Reeves, Laurence Fishburne','The Matrix đưa khán giả vào một thế giới ảo do máy móc kiểm soát, nơi Neo phát hiện ra sự thật và trở thành người cứu rỗi loài người. Với hiệu ứng \"bullet time\" đột phá và triết lý sâu sắc, bộ phim đã định hình lại thể loại khoa học viễn tưởng và hành động.','English','1999-03-31','https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=vKQi3bBA1y8','2023-01-15 10:07:00'),(9,'Goodfellas',146,'Crime','2025-07-03 18:00:00','Martin Scorsese','Robert De Niro, Ray Liotta','Goodfellas tái hiện cuộc đời của Henry Hill, một thành viên băng đảng mafia, với những khoảnh khắc huy hoàng và bi kịch. Dựa trên câu chuyện có thật, bộ phim của Martin Scorsese mang đến cái nhìn chân thực về thế giới tội phạm, từ sự giàu có đến sự sụp đổ không tránh khỏi.','English','1990-09-19','https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg','https://www.youtube.com/watch?v=qo5jJpHtI1Y','2023-01-15 10:08:00'),(10,'The Lord of the Rings: The Fellowship of the Ring',178,'Fantasy','2025-07-03 20:30:00','Peter Jackson','Elijah Wood, Ian McKellen','The Lord of the Rings: The Fellowship of the Ring mở đầu cho một hành trình huyền thoại khi Frodo và nhóm bạn đồng hành lên đường tiêu hủy chiếc nhẫn quyền lực. Với bối cảnh đồ sộ và nhân vật đa dạng, bộ phim đã đặt nền móng cho một trong những series vĩ đại nhất lịch sử điện ảnh.','English','2001-12-19','https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg','https://www.youtube.com/watch?v=V75dMMIW2B4','2023-01-15 10:09:00'),(11,'Titanic',195,'Romance','2025-07-04 10:00:00','James Cameron','Leonardo DiCaprio, Kate Winslet','Titanic kể về tình yêu định mệnh giữa Jack và Rose trên con tàu huyền thoại trước khi nó chìm trong thảm họa. Với kỹ xảo ấn tượng và câu chuyện lãng mạn xen kẽ bi kịch, bộ phim của James Cameron đã chạm đến trái tim hàng triệu khán giả trên toàn thế giới.','English','1997-12-19','https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOY-ZjNmJhYTYxZDAwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg','https://www.youtube.com/watch?v=kVrqfYjkTdQ','2023-01-15 10:10:00'),(12,'The Silence of the Lambs',118,'Thriller','2025-07-04 12:30:00','Jonathan Demme','Jodie Foster, Anthony Hopkins','The Silence of the Lambs là cuộc đối đầu tâm lý căng thẳng giữa đặc vụ FBI Clarice Starling và kẻ sát nhân ăn thịt người Hannibal Lecter. Bộ phim không chỉ là một tác phẩm kinh dị mà còn là một hành trình khám phá nội tâm, với diễn xuất xuất sắc của Jodie Foster và Anthony Hopkins.','English','1991-02-14','https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=W6Mm8Sbe__o','2023-01-15 10:11:00'),(13,'Star Wars: Episode IV - A New Hope',121,'Sci-Fi','2025-07-04 15:00:00','George Lucas','Mark Hamill, Harrison Ford','Star Wars: Episode IV - A New Hope giới thiệu khán giả đến với vũ trụ rộng lớn của Luke Skywalker, khi anh cùng các đồng minh chiến đấu chống lại Đế quốc. Bộ phim không chỉ là một câu chuyện anh hùng mà còn là nền tảng cho một thương hiệu văn hóa toàn cầu.','English','1977-05-25','https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_.jpg','https://www.youtube.com/watch?v=1g3_CFmnU7k','2023-01-15 10:12:00'),(14,'Schindler\'s List',195,'Drama','2025-07-04 18:00:00','Steven Spielberg','Liam Neeson, Ben Kingsley','Schindler\'s List tái hiện câu chuyện có thật về Oskar Schindler, người đã cứu hàng nghìn người Do Thái trong Thế chiến II. Với phong cách quay phim đen trắng và cảm xúc mãnh liệt, bộ phim của Steven Spielberg là một lời nhắc nhở về lòng nhân ái trong thời chiến.','English','1993-12-15','https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=gG22XNhtnoY','2023-01-15 10:13:00'),(15,'The Lion King',88,'Animation','2025-07-04 20:30:00','Roger Allers, Rob Minkoff','Matthew Broderick, Jeremy Irons','The Lion King kể về hành trình trưởng thành của Simba, từ việc mất đi cha đến việc giành lại ngai vàng. Với âm nhạc tuyệt vời và thông điệp về trách nhiệm, bộ phim hoạt hình này đã trở thành một kiệt tác kinh điển cho mọi lứa tuổi.','English','1994-06-15','https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtKjE3YS00NDVhLWFjYWQtYmFkM2ZjNjg0OWU5XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg','https://www.youtube.com/watch?v=4sj1MT05lAA','2023-01-15 10:14:00'),(16,'Gladiator',155,'Action','2025-07-05 10:00:00','Ridley Scott','Russell Crowe, Joaquin Phoenix','Gladiator đưa khán giả vào đấu trường La Mã, nơi Maximus tìm cách trả thù kẻ đã giết gia đình anh. Với hình ảnh hoành tráng và diễn xuất mạnh mẽ của Russell Crowe, bộ phim là một bản anh hùng ca về danh dự và sự hy sinh.','English','2000-05-05','https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg','https://www.youtube.com/watch?v=ol67qo3WrdY','2023-01-15 10:15:00'),(17,'The Departed',151,'Crime','2025-07-05 12:30:00','Martin Scorsese','Leonardo DiCaprio, Matt Damon','The Departed là một cuộc đấu trí căng thẳng giữa cảnh sát và gián điệp trong thế giới ngầm Boston. Với dàn diễn viên tài năng và cốt truyện phức tạp, bộ phim của Martin Scorsese đã mang về giải Oscar cho phim hay nhất.','English','2006-10-06','https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTcwOTc5ODk3MQ@@._V1_.jpg','https://www.youtube.com/watch?v=ibJEBuW3fzk','2023-01-15 10:16:00'),(18,'Avatar',162,'Sci-Fi','2025-07-05 15:00:00','James Cameron','Sam Worthington, Zoe Saldana','Avatar đưa khán giả đến hành tinh Pandora với công nghệ 3D tiên phong. Câu chuyện về Jake Sully và cuộc chiến bảo vệ thiên nhiên đã tạo nên một cuộc cách mạng trong ngành công nghiệp điện ảnh hiện đại.','English','2009-12-18','https://m.media-amazon.com/images/M/MV5BZjZkODMwZmEtYjdiMy00ZmY2LTg2MTQtZWU0ZjQwODRkZjIwXkEyXkFqcGdeQXVyMTI5NzUyMTIz._V1_.jpg','https://www.youtube.com/watch?v=5PSNL1qE6VY','2023-01-15 10:17:00'),(19,'The Avengers',143,'Action','2025-07-05 18:00:00','Joss Whedon','Robert Downey Jr., Chris Evans','The Avengers tập hợp các siêu anh hùng như Iron Man, Captain America để chống lại mối đe dọa từ Loki. Với quy mô lớn và hành động mãn nhãn, bộ phim đã đánh dấu bước ngoặt cho vũ trụ điện ảnh Marvel.','English','2012-05-04','https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg','https://www.youtube.com/watch?v=eOrNdBpGMv8','2023-01-15 10:18:00'),(20,'Parasite',132,'Thriller','2025-07-05 20:30:00','Bong Joon-ho','Song Kang-ho, Choi Woo-shik','Parasite kể về một gia đình nghèo trà trộn vào nhà giàu, dẫn đến những xung đột xã hội gay gắt. Với sự pha trộn giữa hài hước và bi kịch, bộ phim của Bong Joon-ho đã chinh phục cả thế giới và giành giải Oscar.','Korean','2019-10-11','https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg','https://www.youtube.com/watch?v=5xH0HfJHsaY','2023-01-15 10:19:00');
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
-- Table structure for table `theater_movies`
--

DROP TABLE IF EXISTS `theater_movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theater_movies` (
  `theater_id` int NOT NULL,
  `movies_id` int NOT NULL,
  `movie_id` int NOT NULL,
  KEY `FK2yvta0l7uvewl4eghkjkxjov9` (`movies_id`),
  KEY `FKkqw9a5iki0k7wnib0xaekpip3` (`theater_id`),
  KEY `FK2b1o8s37y6bohb9a2hl3awii5` (`movie_id`),
  CONSTRAINT `FK2b1o8s37y6bohb9a2hl3awii5` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
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
  KEY `movies_id` (`movies_id`),
  CONSTRAINT `theaters_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `movies` (`id`) ON DELETE SET NULL
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'a@gmail.com','0123455221','baodz','customer','baodz','male'),(2,'b@gmail.com','02020','b','customer','b','male'),(5,'ba@gmail.com','02020','b','customer','b','male'),(8,'l@gmail.com',NULL,'l','customer','lolo','male'),(9,'lo@gmail.com','2903','l','customer','lolo','male'),(10,'l0o@gmail.com','2903','l','customer','lolo','male'),(11,'1226@gmail.com','2903','b','customer','lolo','male'),(12,'1228@gmail.com','2903','b','customer','lolo','male'),(13,'1231@gmail.com','2903','b','customer','lolo','male'),(14,'1234@gmail.com','2903','b','customer','lolo','male'),(15,'124@gmail.com','2903','b','customer','lolo','male'),(16,'953@gmail.com','1242424','b','customer','asdr','male'),(17,'qwe@gmail.com','3322','b','customer','qwe','female'),(18,'qs@gmail.com','123','b','customer','sq','female'),(19,'qss@gmail.com','123','b','customer','sqs','female'),(20,'ee@gmail.com','23','b','customer','sq','female'),(21,'sdsddd@gmail.com','sfsf','b','customer','wdw','female'),(22,'nao280604@gmail.com','sqdq','b','customer','dd','female'),(23,'nngocbbao28sds0604@gmail.com','223','b','customer','ssq','female'),(24,'nngoscbbao280604@gmail.com','wqw','b','customer','s','female');
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

-- Dump completed on 2025-07-04  7:35:20
