-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 20, 2022 at 05:09 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simple_quiz_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `category_image`, `created_at`, `updated_at`) VALUES
(2, 'sports', 'https://my-quiz-app-7.000webhostapp.com/images/sports.png', '2022-09-17 18:27:58', '2022-09-17 23:57:58'),
(3, 'science', 'https://my-quiz-app-7.000webhostapp.com/images/science.png', '2022-09-17 19:26:32', '2022-09-18 00:56:32'),
(4, 'arts', 'https://my-quiz-app-7.000webhostapp.com/images/arts.png', '2022-09-18 13:31:12', '2022-09-18 19:01:12'),
(5, 'politics', 'https://my-quiz-app-7.000webhostapp.com/images/politics.png', '2022-09-19 14:27:52', '2022-09-19 19:58:03');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `question` varchar(255) NOT NULL,
  `option1` varchar(255) NOT NULL,
  `option2` varchar(255) NOT NULL,
  `option3` varchar(255) NOT NULL,
  `option4` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `level` varchar(30) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `category`, `question`, `option1`, `option2`, `option3`, `option4`, `answer`, `level`, `created_at`) VALUES
(1, 'science', 'question 1', 'option 1', 'option 2', 'option 3', 'option 4', 'option 1', 'beginner', '2022-09-17 19:45:18'),
(2, 'science', 'question 2', 'option 1', 'option 2', 'option 3', 'option 4', 'option 2', 'intermediate', '2022-09-17 19:46:56'),
(3, 'science', 'question 3', 'option 1', 'option 2', 'option 3', 'option 4', 'option 2', 'intermediate', '2022-09-17 19:47:13'),
(4, 'science', 'question 4', 'option 1', 'option 2', 'option 3', 'option 4', 'option 2', 'intermediate', '2022-09-17 19:47:19'),
(5, 'science', 'question 5', 'option 1', 'option 2', 'option 3', 'option 4', 'option 3', 'professional', '2022-09-17 19:48:10'),
(6, 'science', 'question 6', 'option 1', 'option 2', 'option 3', 'option 4', 'option 3', 'professional', '2022-09-17 19:48:14'),
(7, 'science', 'question 7', 'option 1', 'option 2', 'option 3', 'option 4', 'option 3', 'professional', '2022-09-17 19:48:19'),
(8, 'arts', 'question 1', 'option 1', 'option 2', 'option 3', 'option 4', 'option 1', 'beginner', '2022-09-17 19:48:36'),
(9, 'science', 'question 8', 'option 1', 'option 2', 'option 3', 'option 4', 'option 1', 'beginner', '2022-09-17 19:48:39'),
(10, 'science', 'question 9', 'option 1', 'option 2', 'option 3', 'option 4', 'option 1', 'beginner', '2022-09-17 19:48:43'),
(11, 'science', 'question 10', 'option 1', 'option 2', 'option 3', 'option 4', 'option 1', 'beginner', '2022-09-17 19:48:48'),
(12, 'sports', 'Which among the following is the women’s equivalent of the Davis Cup?', 'Hopman Cup', 'Fed Cup', 'BMW Open', 'Millrose Cup', 'Fed Cup', 'beginner', '2022-09-19 17:39:41'),
(13, 'sports', 'Which country does Allyson Felix belong to?', 'US', 'Jamaica', 'Kenya', 'Nigeria', 'US', 'beginner', '2022-09-19 17:41:05'),
(14, 'sports', 'When was Thomas Cup founded?', '1926', '1938', '1949', '1957', '1949', 'intermediate', '2022-09-19 17:42:38'),
(15, 'sports', 'Who has composed the FIFA anthem?', 'Rob May', 'Simon Hill', 'Franz Lambert', 'All of the above', 'Franz Lambert', 'intermediate', '2022-09-19 17:43:44'),
(16, 'sports', 'Which was the first multilateral competition in cricket at the international scale?', 'The Ashes', 'The World Cup', 'World Series Cricket', 'Triangular Tournament', 'Triangular Tournament', 'intermediate', '2022-09-19 17:44:36'),
(17, 'sports', 'Who was declared the Fans Player of the Year in I-League in 2017-18 season?', 'Debjit Majumder', 'Francis Fernandes', 'Subhash Singh', 'Mehtab Hossain', 'Subhash Singh', 'beginner', '2022-09-19 17:46:57'),
(18, 'sports', 'Where is the International Women’s Boxing Hall of Fame based?', 'Vancouver', 'New York', 'Melbourne', 'Montreal', 'Vancouver', 'professional', '2022-09-19 17:48:20'),
(19, 'sports', 'Who was the first Indian athlete to win a gold medal in the Asian Games?', 'PT Usha', 'Tintu Luka', 'Lavy Pinto', 'Kamaljeet Sandhu', 'Lavy Pinto', 'beginner', '2022-09-19 17:49:27'),
(20, 'sports', 'When was the World Cup first time held outside England?', '1979', '1990', '1987', '1994', '1987', 'professional', '2022-09-19 17:51:00'),
(21, 'sports', 'How many national swimming federations are part of FINA?', '174', '209', '75', '202', '209', 'professional', '2022-09-19 17:52:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
