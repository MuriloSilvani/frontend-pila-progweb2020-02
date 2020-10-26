CREATE TABLE IF NOT EXISTS `categories` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`_id`)
)

CREATE TABLE IF NOT EXISTS `launch` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `id_category` int NOT NULL,
  `type` tinyint(1) NOT NULL,
  `description` varchar(60) NOT NULL,
  `value` decimal(10,0) NOT NULL,
  PRIMARY KEY (`_id`),
  KEY `fk_launch_categories_id` (`id_category`)
)