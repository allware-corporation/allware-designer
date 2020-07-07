/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 10.4.8-MariaDB : Database - clinicals
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`clinicals` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `clinicals`;

/*Table structure for table `grid` */

DROP TABLE IF EXISTS `grid`;

CREATE TABLE `grid` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `menuGroup` varchar(255) DEFAULT NULL,
  `menuItem` varchar(255) DEFAULT NULL,
  `readAccess` varchar(255) DEFAULT NULL,
  `writeAccess` varchar(255) DEFAULT NULL,
  `siteId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Data for the table `grid` */

insert  into `grid`(`id`,`menuGroup`,`menuItem`,`readAccess`,`writeAccess`,`siteId`) values 
(1,'Patient Forms','Form','View','Edit',168),
(2,'Data Analysis','Subgroup Analysis','View','Edit',168),
(3,'Registry','User Profile','Admin','Admin',168),
(4,'Registry','Study Groups','Admin','Admin',168),
(5,'System','User Registration','Admin','Admin',168),
(6,'System','Email / Password',NULL,NULL,168),
(7,'System','Logout',NULL,NULL,168),
(8,'System','Audit','Admin','System',168),
(9,'System','Preview Clinical Form','View','System',168);

/*Table structure for table `home` */

DROP TABLE IF EXISTS `home`;

CREATE TABLE `home` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `logo` varchar(255) DEFAULT NULL,
  `logoImg` varchar(255) DEFAULT NULL,
  `title` longtext DEFAULT NULL,
  `lists` text DEFAULT NULL,
  `mainImg` longtext DEFAULT NULL,
  `selectedMainImg` int(11) DEFAULT NULL,
  `selectedColor` int(11) DEFAULT NULL,
  `selectedAppId` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `home` */

insert  into `home`(`id`,`logo`,`logoImg`,`title`,`lists`,`mainImg`,`selectedMainImg`,`selectedColor`,`selectedAppId`) values 
(1,'MY CLINICALS','assets/img/logo.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus.','[{\"listIcon\": \"icon-list-icon fa fa-hand-o-up bounceIn\", \"listTitle\":\"CLICK THROUGH\", \"listContent\":\"Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.\"}, {\"listIcon\": \"icon-list-icon fa fa-heart-o bounceIn\", \"listTitle\":\"LEAD GENERATION\", \"listContent\":\"Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.\"},{\"listIcon\": \"icon-list-icon fa fa-lightbulb-o bounceIn\", \"listTitle\":\"OTHER PURPOSES\", \"listContent\":\"Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.\"}]','[\"assets/img/antoine-barres.jpg\",\"assets/img/daniel-olahh.jpg\",\"assets/img/login.jpg\",\"assets/img/login-image.jpg\"]',3,2,1),
(2,'MEDICIO','assets/img/logo1.png','Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus.','[{\"listIcon\": \"icon-list-icon fa fa-hand-o-up bounceIn\", \"listTitle\":\"CLICK THROUGH\", \"listContent\":\"Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.\"}, {\"listIcon\": \"icon-list-icon fa fa-heart-o bounceIn\", \"listTitle\":\"LEAD GENERATION\", \"listContent\":\"Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.\"},{\"listIcon\": \"icon-list-icon fa fa-lightbulb-o bounceIn\", \"listTitle\":\"OTHER PURPOSES\", \"listContent\":\"Sed a nisl ullamcorper, tempus augue at, rutrum lacus. Duis et turpis eros. Duis ex metus, facilisis nec porta non, accumsan vel turpis.\"}]','[\"assets/img/antoine-barres.jpg\", \"assets/img/daniel-olahh.jpg\", \"assets/img/login.jpg\", \"assets/img/login-image.jpg\"]',0,2,0);

/*Table structure for table `registry` */

DROP TABLE IF EXISTS `registry`;

CREATE TABLE `registry` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `img1` longtext DEFAULT NULL,
  `img2` longtext DEFAULT NULL,
  `mainImg` longtext DEFAULT NULL,
  `text1` text DEFAULT NULL,
  `text2` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `registry` */

insert  into `registry`(`id`,`title`,`description`,`name`,`content`,`img1`,`img2`,`mainImg`,`text1`,`text2`) values 
insert  into `registry`(`id`,`title`,`description`,`name`,`content`,`img1`,`img2`,`mainImg`,`text1`,`text2`) values 
(2,'Second','Welcome to the Second Registry','Second Registry','Second Results in Aneurysms with Better Long-term Efficacy','assets/img/city-profile.jpg','assets/img/sidebar-3.jpg','[\"assets/img/sidebar-4.jpg\", \"assets/img/sidebar-1.jpg\", \"assets/img/cover.jpg\", \"assets/img/city-profile.jpg\", \"assets/img/sidebar-2.jpg\", \"assets/img/sidebar-3.jpg\"]','3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
(3,'Third','Welcome to the Third Registry','Third Registry','Third Results in Aneurysms with Better Long-term Efficacy','assets/img/cover.jpg','assets/img/city-profile.jpg','[\"assets/img/sidebar-3.jpg\", \"assets/img/sidebar-2.jpg\", \"assets/img/cover.jpg\", \"assets/img/city-profile.jpg\", \"assets/img/sidebar-4.jpg\", \"assets/img/sidebar-1.jpg\"]','1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;