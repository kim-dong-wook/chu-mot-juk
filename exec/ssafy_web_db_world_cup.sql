-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: j7a207.p.ssafy.io    Database: ssafy_web_db
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `world_cup`
--

DROP TABLE IF EXISTS `world_cup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `world_cup` (
  `wc_no` bigint NOT NULL AUTO_INCREMENT,
  `ch_name` varchar(255) NOT NULL,
  `novel_name` varchar(255) NOT NULL,
  `novel_no` bigint NOT NULL,
  `novel_url` varchar(6000) NOT NULL,
  `pic` varchar(6000) NOT NULL,
  PRIMARY KEY (`wc_no`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `world_cup`
--

LOCK TABLES `world_cup` WRITE;
/*!40000 ALTER TABLE `world_cup` DISABLE KEYS */;
INSERT INTO `world_cup` VALUES (1,'뷘터','악역의 엔딩은 죽음 뿐',8675,'https://series.naver.com/novel/detail.series?productNo=5039321','https://user-images.githubusercontent.com/98065254/191660549-2f03f867-796e-4bef-90d4-d69e62332983.jpg'),(2,'청명','화산귀환',8665,'https://series.naver.com/novel/detail.series?productNo=4130558','https://user-images.githubusercontent.com/98065254/191660557-fe85ad1e-eaf7-4ba4-a491-f34b2c115b17.jpg'),(3,'성진우 ','나 혼자만 레벨업',832,'https://ridibooks.com/books/777034313','https://user-images.githubusercontent.com/98065254/191660520-502dabf2-c359-4a87-9617-38da91dea59f.jpg'),(4,'페레스','이번 생은 가주가 되겠습니다',8688,'https://page.kakao.com/home?seriesId=52903324','https://user-images.githubusercontent.com/98065254/191660554-78e207c9-0680-47cb-9078-6bcf6defe8e6.jpg'),(5,'루카스','어느 날 공주가 되어버렸다',423,'https://ridibooks.com/books/2057042206?_s=search&_q=%EC%96%B4%EB%8A%90%EB%82%A0+%EA%B3%B5%EC%A3%BC%EA%B0%80+%EB%90%98%EC%96%B4%EB%B2%84%EB%A0%B8%EB%8B%A4&_rdt_sid=search&_rdt_idx=2','https://user-images.githubusercontent.com/98065254/191660551-e91da523-a80d-4b4d-80a3-cc51bcc87695.jpg'),(6,'노아 벌스테어 윈나이트','그녀가 공작저로 가야 했던 사정',8674,'https://series.naver.com/novel/detail.series?productNo=2944889','https://user-images.githubusercontent.com/98065254/191660515-7fc15ec9-2f90-436a-9093-8e2e673bd859.jpg'),(7,'에우레디안 루 솔레도르 벨고트','악당의 아빠를 꼬셔라',8673,'https://series.naver.com/novel/detail.series?productNo=6226087','https://user-images.githubusercontent.com/98065254/191660545-987be022-0bba-43df-b606-90edbff4f8af.jpg'),(8,'세드릭 에브론','악녀는 두 번 산다',8672,'https://series.naver.com/novel/detail.series?productNo=5032515','https://user-images.githubusercontent.com/98065254/191660536-3287d3df-98c6-4df3-b641-6d15084cf93e.jpg'),(9,'박문대','데뷔 못하면 죽는 병 걸림',8686,'https://page.kakao.com/home?seriesId=53706168','https://user-images.githubusercontent.com/98065254/191660530-828b123c-ec91-4a5d-8edd-2931222a27c9.jpg'),(10,'아스테로페','악녀는 모래시계를 되돌린다',8671,'https://series.naver.com/novel/detail.series?productNo=4911894','https://user-images.githubusercontent.com/98065254/191660538-18907e10-c82c-4e3b-8671-7524a98382a3.jpg'),(11,'김독자','전지적 독자 시점',8670,'https://series.naver.com/novel/detail.series?productNo=3400123','https://user-images.githubusercontent.com/98065254/191660556-ca218294-9745-4dc4-802e-d47f8abfe0c1.jpg'),(12,'클로드','어느 날 공주가 되어버렸다',423,'https://ridibooks.com/books/2057042206?_s=search&_q=%EC%96%B4%EB%8A%90%EB%82%A0+%EA%B3%B5%EC%A3%BC%EA%B0%80+%EB%90%98%EC%96%B4%EB%B2%84%EB%A0%B8%EB%8B%A4&_rdt_sid=search&_rdt_idx=2','https://user-images.githubusercontent.com/98065254/191660553-56ca0e8a-d6fb-4dfd-8b47-8fea97138279.jpg'),(13,'제로니스 드 잉글리드','남주의 첫날밤을 가져버렸다',8676,'https://series.naver.com/novel/detail.series?productNo=3990680','https://user-images.githubusercontent.com/98065254/191660523-28fbf46e-4d68-471f-ba14-a359c0488f4f.jpg'),(14,'조제프','사실은 내가 진짜였다',8699,'https://page.kakao.com/home?seriesId=52496367','https://user-images.githubusercontent.com/98065254/191660534-f2245e36-a3ec-4f48-bce0-eae8eae13e7e.jpg'),(15,'루블리스','버림 받은 황비',8689,'https://page.kakao.com/home?seriesId=49917642','https://user-images.githubusercontent.com/98065254/191660531-ec2b50e6-c522-487c-bc9c-9ac4806e26ff.jpg'),(16,'제이미 웰턴','66666년 만에 환생한 흑마법사',8703,'https://series.naver.com/novel/detail.series?productNo=5553059','https://user-images.githubusercontent.com/98065254/192668973-3c36c942-2522-40f5-8520-8617e384f88b.jpg');
/*!40000 ALTER TABLE `world_cup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 12:01:29
