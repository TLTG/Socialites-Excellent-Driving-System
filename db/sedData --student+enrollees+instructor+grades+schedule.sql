SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


INSERT INTO `account` (`id`, `ORno`, `transaction`, `data`, `feeType`, `price`, `balance`, `date`) VALUES
(17, '1810045855', 'Enrollment', '{\"enrolled\":[{\"course\":6,\"special\":false}],\"apply\":0}', 1, 2500, 0, '2018-10-04 08:25:25'),
(18, '181004821212', 'Enrollment', '{\"enrolled\":[{\"course\":7,\"special\":false}],\"apply\":0}', 1, 3500, 0, '2018-10-04 08:28:51'),
(19, '181004123152', 'Enrollment', '{\"enrolled\":[{\"course\":6,\"special\":false}],\"apply\":0}', 1, 2500, 0, '2018-10-04 14:48:47'),
(20, '181004141511', 'Enrollment', '{\"enrolled\":[{\"course\":3,\"special\":false}],\"apply\":0}', 1, 7000, 3500, '2018-10-04 15:02:32'),
(21, '181004153814', 'Enrollment', '{\"enrolled\":[{\"course\":1,\"special\":false}],\"apply\":0}', 1, 3500, 500, '2018-10-04 15:05:33'),
(22, '1810041161413', 'Enrollment, Apply-1', '{\"enrolled\":[{\"course\":6,\"special\":false}],\"apply\":1}', 1, 3000, 3000, '2018-10-04 15:52:28');

INSERT INTO `accounttype` (`id`, `title`, `permission`) VALUES
(1, 'admin', '----'),
(2, 'instructor', '-----'),
(3, 'student', '-------'),
(4, 'branch_admin', '-----');

INSERT INTO `announcement` (`id`, `title`, `message`, `dateFrom`, `status`) VALUES
(1, 'PROMO (Avail Now)!!!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero doloribus accusantium corporis, ipsam error dolorum! At laboriosam illo itaque ea et inventore fugit animi ratione! Fuga dicta facilis at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero doloribus accusantium corporis, ipsam error dolorum! At laboriosam illo itaque ea et inventore fugit animi ratione! Fuga dicta facilis at', '2018-09-16', 1),
(2, '20% OFF FOR THE FIRST TEN CUSTOMERS!', 'This promo is only valid for students enrolled in SED-Quezon City (Main). Valid until next week (9/23/18)', '2018-09-16', 1);

INSERT INTO `branch` (`id`, `address`, `telno`, `name`, `purgeFlag`) VALUES
(1, 'Mayon St. _Cor. Maria Clara, _Quezon City_1108_NCR', '741-7185/', 'Quezon City', 1),
(2, 'First Level Market! Market! Fort Bonifacio Taguig Global City', '844-7734', 'Taguig City', 1),
(3, 'Shopwise Cubao, Gen. Aguinaldo Ave., Socorro, Quezon City', '425-7383', 'Cubao, Quezon City', 1),
(4, 'Fortunata Bldg., 663 Q. Avenue between Araneta Ave., and Sto. Domingo ', '938-1236', 'Q. Ave., Quezon City', 1),
(5, 'Cartimar Shopping Center, Rm. 1A Pasay Taft (between Libertad and Buendia)', '833-2043', 'Pasay City', 1);

INSERT INTO `course` (`id`, `description`, `carType`, `amount`, `days`, `status`) VALUES
(1, '', 'A', 3500, 5, 1),
(2, '', 'A', 4900, 7, 1),
(3, '', 'A', 7000, 10, 1),
(4, '', 'A', 10500, 15, 1),
(5, '', 'A', 14000, 20, 1),
(6, '', 'M', 2500, 5, 1),
(7, '', 'M', 3500, 7, 1),
(8, '', 'M', 5000, 10, 1),
(9, '', 'M', 7500, 15, 1),
(10, '', 'M', 10000, 20, 1);

INSERT INTO `course_enrolled` (`id`, `enrollmentID`, `courseID`, `branch`, `selectedLesson`, `special`, `dateEnrolled`, `paid`, `status`) VALUES
(1, 1, 6, 1, '[]', 0, '2018-10-04 16:58:33', 1, 1),
(2, 2, 7, 1, '[]', 0, '2018-10-04 16:58:40', 1, 1),
(3, 3, 6, 1, '[]', 0, '2018-10-04 22:49:28', 1, 1),
(4, 4, 3, 1, '[]', 0, '2018-10-04 23:02:56', 2, 1),
(5, 5, 1, 1, '[]', 0, '2018-10-04 23:07:43', 2, 1);

INSERT INTO `enrollment` (`id`, `studID`, `accountID`, `date_enrolled`, `status`) VALUES
(1, '2018-0031', '1810045855', '2018-10-04 08:58:32', 1),
(2, '2018-0032', '181004821212', '2018-10-04 08:58:40', 1),
(3, '2018-0033', '181004123152', '2018-10-04 14:49:28', 1),
(4, '2018-0034', '181004141511', '2018-10-04 15:02:56', 1),
(5, '2018-0035', '181004153814', '2018-10-04 15:07:43', 1);

INSERT INTO `faq` (`id`, `faqLabelID`, `question`, `answer`, `status`) VALUES
(1, 1, 'How long will the branch I enrolled in wait for me after I submit my enrollment form online?', 'Our system automatically removes all enrollment form that exceeds one week upon its submission. Don\'t worry, we will email you two days before the one week deadline to make sure you don\'t forget about it.', 1),
(2, 3, 'Can I choose specific lessons per course?', 'Yes, but only if you\'ve been our student at least once. For choosing of specific lessons, please enroll with your account.', 1),
(3, 1, 'What are the requirements for enrollment?', 'Please visit the [COURSES] tab for more details.', 1),
(4, 2, 'What should I bring (requirements) for every driving lesson appointment?', 'It is required to have with you your Student Driver\'s Permit or any Philippines Driver\'s License for every appointment. You may bring your Student ID, however, it is not required.', 1);

INSERT INTO `faqlabel` (`id`, `label`, `status`) VALUES
(1, 'Enrollment', 1),
(2, 'Driving Appointments', 1),
(3, 'Courses and Lessons', 1),
(4, 'Scheduling', 1),
(5, 'Licensing Application Assistance', 1),
(6, 'Payment', 1),
(7, 'Others', 1);

INSERT INTO `grades` (`id`, `instID`, `studID`, `lessonID`, `grade`, `comment`, `courseID`, `schedID`) VALUES
(1, 'INST-2018-0021', '2018-0034', 1, 4, 'nice start mr. weasley! keep it up!', 3, 24),
(2, 'INST-2018-0019', '2018-0035', 1, 4, 'nice start, mr. ferrett', 1, 32),
(3, 'INST-2018-0019', '2018-0035', 2, 4, 'u did well on this one', 1, 31),
(4, 'INST-2018-0019', '2018-0035', 3, 3, 'very nice try', 1, 30),
(5, 'INST-2018-0019', '2018-0035', 4, 4, 'u need to practice more but at least youre trying', 1, 30),
(6, 'INST-2018-0019', '2018-0035', 5, 4, 'wow keep it up', 1, 30),
(7, 'INST-2018-0019', '2018-0035', 6, 5, 'u amazingly got this!!', 1, 31),
(8, 'INST-2018-0019', '2018-0035', 7, 5, 'seems like someone\'s a pro here...', 1, 29),
(9, 'INST-2018-0019', '2018-0035', 8, 5, 'u didn\'t even need my help now', 1, 29),
(10, 'INST-2018-0020', '2018-0033', 1, 3, 'clearly, wit isn\'t everything', 6, 13),
(11, 'INST-2018-0020', '2018-0033', 2, 3, 'r u kidding me??', 6, 13),
(12, 'INST-2018-0020', '2018-0033', 3, 3, 'u make me laugh ms. granger, but this isnt a joke', 6, 14),
(13, 'INST-2018-0020', '2018-0033', 4, 3, 'maybe just practice apparition', 6, 14);

INSERT INTO `instructor` (`id`, `userInfo`, `license`, `licenseExp`, `educAttain`, `vacant`, `dateRegistered`, `dateRetired`, `status`) VALUES
('INST-2018-0019', 19, 'A01-11-1111', '2023-10-04', 6, '', '2018-10-04 04:28:53', NULL, 1),
('INST-2018-0020', 20, 'B01-01-9200', '2023-10-04', 6, '', '2018-10-04 04:30:24', NULL, 1),
('INST-2018-0021', 21, 'A21-01-9001', '2023-10-04', 6, '', '2018-10-04 04:31:57', NULL, 1),
('INST-2018-0022', 22, 'A12-01-0087', '2023-10-04', 6, '', '2018-10-04 04:33:26', NULL, 1),
('INST-2018-0023', 23, 'C12-01-0019', '2023-10-04', 6, '', '2018-10-04 04:36:16', NULL, 1),
('INST-2018-0024', 24, 'A01-11-1113', '2023-10-04', 6, '', '2018-10-04 04:38:18', NULL, 1),
('INST-2018-0027', 27, 'D01-01-2112', '2023-10-04', 6, '', '2018-10-04 04:43:16', NULL, 1),
('INST-2018-0028', 28, 'D01-01-1200', '2023-10-04', 6, '', '2018-10-04 07:29:51', NULL, 1),
('INST-2018-0029', 29, 'D02-01-9091', '2023-10-04', 6, '', '2018-10-04 07:34:02', NULL, 1),
('INST-2018-0030', 30, 'B02-02-9065', '2023-10-04', 6, '', '2018-10-04 07:35:32', NULL, 1);

INSERT INTO `lesson` (`id`, `title`, `prerequisite`, `description`, `duration`, `purgeFlag`) VALUES
(1, 'Start and Stop', NULL, 'Master the starting and stopping of your car\'s engine before you hit the road.', 60, 1),
(2, 'Backing and Turning', NULL, 'Driving a vehicle in reverse direction in order to maneuver,', 60, 1),
(3, 'Road Crossing; Light Traffic', NULL, 'Giving way to the pedestrian on crossing with and without lights, crossing at intersection.', 60, 1),
(4, 'Maneuvering', NULL, 'A controlled change in movement or direction of a moving vehicle.', 60, 1),
(5, 'Hanging', NULL, 'You\'ll be able to prevent your car from rolling while you\'re on a hill or any elevated surface.', 60, 1),
(6, 'Garage Driving', NULL, 'Things you can do to avoid getting an accident in a parking garage or busy parking lot.', 60, 1),
(7, 'Parking', NULL, 'The act of stopping and disengaging a vehicle and leaving it unoccupied.', 60, 1),
(8, 'Highway Driving', NULL, 'Driving on a busy road with may lanes.', 60, 1),
(9, 'Heavy Traffic', NULL, 'Feel safe when driving on a traffic jam, and this might mean you need to drive a little slower than the flow of traffic.', 60, 1),
(10, 'Review', NULL, 'Reviewing all the past lesson tackled.', 60, 1);

INSERT INTO `license_apply_price` (`id`, `type`, `desc`, `price`, `status`) VALUES
(0, 'none', 'none', 0, 0),
(1, 'SDP', 'Student Driver\'s Permit', 500, 1),
(2, 'NonPro', 'Non-Professional License', 2500, 1),
(3, 'Pro', 'Professional License', 2700, 1),
(4, 'International', 'International License', 5000, 1);

INSERT INTO `other_info` (`id`, `referenceID`, `data`, `status`) VALUES
(10, 19, '{\"avatar\":null}', 1),
(11, 20, '{\"avatar\":null}', 1),
(12, 21, '{\"avatar\":null}', 1),
(13, 22, '{\"avatar\":null}', 1),
(14, 23, '{\"avatar\":null}', 1),
(15, 24, '{\"avatar\":null}', 1),
(16, 25, '{\"avatar\":null}', 1),
(17, 26, '{\"avatar\":null}', 1),
(18, 27, '{\"avatar\":null}', 1),
(19, 28, '{\"avatar\":null}', 1),
(20, 29, '{\"avatar\":null}', 1),
(21, 30, '{\"avatar\":null}', 1),
(22, 31, '{\"occupation\":\"Student\",\"guardian\":{\"name\":\"Lily Potter\",\"telno\":\"09758664532\"}}', 1),
(23, 32, '{\"occupation\":\"Student\",\"guardian\":{\"name\":\"Cheese Chang\",\"telno\":\"09098872910\"},\"avatar\":\"assets\\\\images\\\\image_upload\\\\32.jpeg\"}', 1),
(24, 33, '{\"occupation\":\"Student\",\"guardian\":{\"name\":\"Hisutwo Granger\",\"telno\":\"09176628191\"},\"avatar\":\"assets\\\\images\\\\image_upload\\\\33.jpeg\"}', 1),
(25, 34, '{\"occupation\":\"Student\",\"guardian\":{\"name\":\"Molly Weasley\",\"telno\":\"09152293211\"},\"avatar\":\"assets\\\\images\\\\image_upload\\\\34.jpeg\"}', 1),
(26, 35, '{\"occupation\":\"Student\",\"guardian\":{\"name\":\"Lucius Malfoy\",\"telno\":\"09122273894\"},\"avatar\":\"assets\\\\images\\\\image_upload\\\\35.jpeg\"}', 1);

INSERT INTO `payment` (`id`, `transactionID`, `bill`, `pay`, `balance`, `datePay`) VALUES
(1, '1810045855', 2500, 2500, 0, '2018-10-04 08:58:28'),
(2, '181004821212', 3500, 3500, 0, '2018-10-04 08:58:38'),
(3, '181004123152', 2500, 2500, 0, '2018-10-04 14:49:18'),
(4, '181004141511', 7000, 3500, 3500, '2018-10-04 15:02:52'),
(5, '181004153814', 3500, 3000, 500, '2018-10-04 15:07:42');

INSERT INTO `preregstudent` (`id`, `data`, `dateSubmit`, `status`) VALUES
(17, '{\"info\":{\"fullname\":\"Harry_James_Potter\",\"birthdate\":\"1999-07-31\",\"birthplace\":\"CSJDM, Bulacan\",\"address\":\"CSJDM, Bulacan\",\"telno\":\"09565867353\",\"occupation\":\"Student\",\"email\":\"gtatel0517@gmail.com\",\"civilStatus\":\"Single\",\"sex\":\"Male\",\"guardian\":{\"name\":\"Lily Potter\",\"telno\":\"09758664532\"}},\"course\":[6],\"branch\":\"1\",\"payment\":1,\"applyLicense\":0,\"special\":{\"course\":[],\"location\":null},\"transaction\":{\"transaction\":\"Enrollment\",\"amount\":500,\"ORnum\":\"1810045855\",\"dataID\":17},\"preference\":{\"vehicle\":\"Carina AT210 Toyota\",\"schedule\":[\"2\",\"5\",\"1\",\"3\",\"4\"]}}', '2018-10-04 08:25:25', 0),
(18, '{\"info\":{\"fullname\":\"Cho__Chang\",\"birthdate\":\"1998-01-02\",\"birthplace\":\"CSJDM, Bulacan\",\"address\":\"CSJDM, Bulacan\",\"telno\":\"09156778191\",\"occupation\":\"Student\",\"email\":\"cho@gmail.com\",\"civilStatus\":\"Single\",\"sex\":\"Female\",\"guardian\":{\"name\":\"Cheese Chang\",\"telno\":\"09098872910\"}},\"course\":[7],\"branch\":\"1\",\"payment\":1,\"applyLicense\":0,\"special\":{\"course\":[],\"location\":null},\"transaction\":{\"transaction\":\"Enrollment\",\"amount\":0,\"ORnum\":\"181004821212\",\"dataID\":18},\"preference\":{\"vehicle\":\"Carina AT210 Toyota\",\"schedule\":[\"1\",\"4\",\"7\",\"5\"]}}', '2018-10-04 08:28:51', 0),
(19, '{\"info\":{\"fullname\":\"Hermione_Jean_Granger\",\"birthdate\":\"1999-09-19\",\"birthplace\":\"Great Britain, Quezon City\",\"address\":\"Great Britain, Quezon City\",\"telno\":\"09567889201\",\"occupation\":\"Student\",\"email\":\"hermione@gmail.com\",\"civilStatus\":\"Single\",\"sex\":\"Female\",\"guardian\":{\"name\":\"Hisutwo Granger\",\"telno\":\"09176628191\"}},\"course\":[6],\"branch\":\"1\",\"payment\":1,\"applyLicense\":0,\"special\":{\"course\":[],\"location\":null},\"transaction\":{\"transaction\":\"Enrollment\",\"amount\":3000,\"ORnum\":\"181004123152\",\"dataID\":19},\"preference\":{\"vehicle\":\"Accord Honda\",\"schedule\":[\"1\",\"4\",\"7\",\"5\",\"2\"]}}', '2018-10-04 14:48:48', 0),
(20, '{\"info\":{\"fullname\":\"Ronald_Bilius_Weasley\",\"birthdate\":\"1999-03-01\",\"birthplace\":\"Ottery St Catchpole, Devon, Great Britain, Quezon City\",\"address\":\"Ottery St Catchpole, Devon, Great Britain, Quezon City\",\"telno\":\"09656278881\",\"occupation\":\"Student\",\"email\":\"ronald@gmail.com\",\"civilStatus\":\"Single\",\"sex\":\"Male\",\"guardian\":{\"name\":\"Molly Weasley\",\"telno\":\"09152293211\"}},\"course\":[3],\"branch\":\"1\",\"payment\":1,\"applyLicense\":0,\"special\":{\"course\":[],\"location\":null},\"transaction\":{\"transaction\":\"Enrollment\",\"amount\":0,\"ORnum\":\"181004141511\",\"dataID\":20},\"preference\":{\"vehicle\":\"Altis Toyota\",\"schedule\":[\"2\",\"5\",\"1\",\"4\",\"3\"]}}', '2018-10-04 15:02:32', 0),
(21, '{\"info\":{\"fullname\":\"Draco_Lucius_Malfoy\",\"birthdate\":\"1999-06-05\",\"birthplace\":\"Filthy St Mudblood, Murray, Great Britain, Quezon City\",\"address\":\"Filthy St Mudblood, Murray, Great Britain, Quezon City\",\"telno\":\"09654019929\",\"occupation\":\"Student\",\"email\":\"draco@gmail.com\",\"civilStatus\":\"Single\",\"sex\":\"Male\",\"guardian\":{\"name\":\"Lucius Malfoy\",\"telno\":\"09122273894\"}},\"course\":[1],\"branch\":\"1\",\"payment\":1,\"applyLicense\":0,\"special\":{\"course\":[],\"location\":null},\"transaction\":{\"transaction\":\"Enrollment\",\"amount\":0,\"ORnum\":\"181004153814\",\"dataID\":21},\"preference\":{\"vehicle\":\"Vios Toyota\",\"schedule\":[\"4\",\"7\",\"5\",\"6\"]}}', '2018-10-04 15:05:33', 0),
(22, '{\"info\":{\"fullname\":\"Neville__Longbottom\",\"birthdate\":\"1999-07-30\",\"birthplace\":\"Great Britain, Quezon City\",\"address\":\"Great Britain, Quezon City\",\"telno\":\"09145672831\",\"occupation\":\"Student\",\"email\":\"neville@gmail.com\",\"civilStatus\":\"Single\",\"sex\":\"Male\",\"guardian\":{\"name\":\"Frank Longbottom\",\"telno\":\"09176238211\"}},\"course\":[6],\"branch\":\"3\",\"payment\":1,\"applyLicense\":1,\"special\":{\"course\":[],\"location\":null},\"transaction\":{\"transaction\":\"Enrollment, Apply-1\",\"amount\":500,\"ORnum\":\"1810041161413\",\"dataID\":22},\"preference\":{\"vehicle\":\"Civic Sedan Honda\",\"schedule\":[\"2\",\"5\",\"1\",\"4\",\"3\"]}}', '2018-10-04 15:52:28', 1);

INSERT INTO `schedule` (`id`, `title`, `date`, `time`, `hour`, `studID`, `instID`, `branch`, `status`) VALUES
(1, 'session#5', '2018-10-11', '09:00:00', 1, '2018-0031', 'INST-2018-0019', 1, 2),
(2, 'session#1', '2018-10-09', '09:00:00', 1, '2018-0031', 'INST-2018-0019', 1, 2),
(3, 'session#2', '2018-10-12', '09:00:00', 1, '2018-0031', 'INST-2018-0019', 1, 2),
(4, 'session#3', '2018-10-08', '09:00:00', 1, '2018-0031', 'INST-2018-0019', 1, 2),
(5, 'session#4', '2018-10-10', '09:00:00', 1, '2018-0031', 'INST-2018-0019', 1, 2),
(6, 'session#5', '2018-10-06', '09:00:00', 1, '2018-0032', 'INST-2018-0019', 1, 2),
(7, 'session#1', '2018-10-08', '10:00:00', 1, '2018-0032', 'INST-2018-0019', 1, 2),
(8, 'session#3', '2018-10-05', '09:00:00', 1, '2018-0032', 'INST-2018-0019', 1, 2),
(9, 'session#4', '2018-10-12', '11:00:00', 1, '2018-0032', 'INST-2018-0019', 1, 2),
(10, 'session#2', '2018-10-10', '10:00:00', 1, '2018-0032', 'INST-2018-0019', 1, 2),
(11, 'session#6', '2018-10-07', '09:00:00', 1, '2018-0032', 'INST-2018-0019', 1, 2),
(12, 'session#7', '2018-10-09', '10:00:00', 1, '2018-0032', 'INST-2018-0019', 1, 2),
(13, 'session#4', '2018-10-03', '09:00:00', 1, '2018-0033', 'INST-2018-0020', 1, 3),
(14, 'session#1', '2018-10-04', '09:00:00', 1, '2018-0033', 'INST-2018-0020', 1, 3),
(15, 'session#2', '2018-10-05', '09:00:00', 1, '2018-0033', 'INST-2018-0020', 1, 2),
(16, 'session#3', '2018-10-06', '09:00:00', 1, '2018-0033', 'INST-2018-0020', 1, 2),
(17, 'session#5', '2018-10-06', '10:00:00', 1, '2018-0033', 'INST-2018-0020', 1, 2),
(18, 'session#5', '2018-10-10', '10:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(19, 'session#1', '2018-10-09', '10:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(20, 'session#2', '2018-10-12', '10:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(21, 'session#4', '2018-10-11', '10:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(22, 'session#3', '2018-10-08', '10:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(23, 'session#6', '2018-10-07', '09:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(24, 'session#7', '2018-10-04', '09:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 3),
(25, 'session#9', '2018-10-05', '09:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(26, 'session#10', '2018-10-06', '00:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(27, 'session#8', '2018-10-13', '09:00:00', 1, '2018-0034', 'INST-2018-0021', 1, 2),
(28, 'session#1', '2018-10-05', '10:00:00', 1, '2018-0035', 'INST-2018-0019', 1, 2),
(29, 'session#4', '2018-10-04', '09:00:00', 1, '2018-0035', 'INST-2018-0019', 1, 3),
(30, 'session#2', '2018-10-03', '10:00:00', 1, '2018-0035', 'INST-2018-0019', 1, 3),
(31, 'session#3', '2018-10-02', '10:00:00', 1, '2018-0035', 'INST-2018-0019', 1, 3),
(32, 'session#5', '2018-10-01', '10:00:00', 1, '2018-0035', 'INST-2018-0019', 1, 3);

INSERT INTO `student` (`id`, `userInfo`, `license`, `hours`, `prefDays`, `prefCar`, `branch`, `dateRegistered`, `status`) VALUES
('2018-0031', 31, '', 0, '[\"2\",\"5\",\"1\",\"3\",\"4\"]', 'Carina AT210 Toyota', 1, '2018-10-04 08:58:30', 1),
('2018-0032', 32, '', 0, '[\"1\",\"4\",\"7\",\"5\"]', 'Carina AT210 Toyota', 1, '2018-10-04 08:58:40', 1),
('2018-0033', 33, '', 0, '[\"1\",\"4\",\"7\",\"5\",\"2\"]', 'Accord Honda', 1, '2018-10-04 14:49:20', 1),
('2018-0034', 34, '', 0, '[\"2\",\"5\",\"1\",\"4\",\"3\"]', 'Altis Toyota', 1, '2018-10-04 15:02:56', 1),
('2018-0035', 35, '', 0, '[\"4\",\"7\",\"5\",\"6\"]', 'Vios Toyota', 1, '2018-10-04 15:07:43', 1);

INSERT INTO `useraccount` (`id`, `username`, `password`, `accType`, `status`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 1, 1),
(19, 'minerva@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(20, 'severus@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(21, 'albus@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(22, 'rubeus@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(23, 'filius@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(24, 'gilderoy@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(31, 'dolores@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(32, 'horace@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(33, 'sybill@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(34, 'remus@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(35, 'harry@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 3, 1),
(36, 'cho@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 3, 1),
(37, 'hermione@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 3, 1),
(38, 'ronald@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 3, 1),
(39, 'draco@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 3, 1);

INSERT INTO `userinfo` (`id`, `userAcc`, `fullname`, `address`, `telno`, `birthdate`, `birthplace`, `sex`, `civilStatus`, `email`, `userType`) VALUES
(1, 1, 'administrator', 'SED Manila', '0', '2018-08-01', '---', 'M', 'single', 'sedtest@gmail.com', 1),
(19, 19, 'Minerva__Mcgonagall', 'Caithness, Scotland, Great Britain, Quezon City', '09097879999', '1960-10-04', 'n/a', 'F', 'n/a', 'minerva@gmail.com', 2),
(20, 20, 'Severus__Snape', 'Spinner\'s End, Cokeworth, Midlands, Quezon City', '09091677181', '1960-01-09', 'n/a', 'M', 'n/a', 'severus@gmail.com', 2),
(21, 21, 'Albus Percival__Dumbledore', 'Mould-on-the-Wold, England, Quezon City', '09076778282', '1958-06-30', 'n/a', 'M', 'n/a', 'albus@gmail.com', 2),
(22, 22, 'Rubeus__Hagrid', 'Forest of Dean, West Country, England, Quezon City', '09078980098', '1959-12-06', 'n/a', 'M', 'n/a', 'rubeus@gmail.com', 2),
(23, 23, 'Filius__Flitwick', 'Hogwarts School, Quezon City', '09569290010', '1999-10-17', 'n/a', 'M', 'n/a', 'filius@gmail.com', 2),
(24, 24, 'Gilderoy__Lockhart', 'Blk 43, Lot 1, Quezon City', '09089201101', '1959-12-02', 'n/a', 'M', 'n/a', 'gilderoy@gmail.com', 2),
(27, 31, 'Dolores__Umbridge', 'Caithness, Scotland, Great Britain, Quezon City', '09128900992', '1957-11-01', 'n/a', 'F', 'n/a', 'dolores@gmail.com', 2),
(28, 32, 'Horace__Slughorn', 'Salt Lake, Utah', '09076778291', '1960-05-01', 'n/a', 'M', 'n/a', 'horace@gmail.com', 2),
(29, 33, 'Sybill__Trelawney', 'Caithness, Scotland, Great Britain, Quezon City', '09096662819', '1959-06-22', 'n/a', 'F', 'n/a', 'sybill@gmail.com', 2),
(30, 34, 'Remus__Lupin', 'Blk 43 Lot 2 Phase 2, Quezon City', '09097879921', '1960-10-09', 'n/a', 'M', 'n/a', 'remus@gmail.com', 2),
(31, 35, 'Harry_James_Potter', 'CSJDM, Bulacan', '09565867353', '1999-07-31', 'CSJDM, Bulacan', 'M', 'Single', 'gtatel0517@gmail.com', 3),
(32, 36, 'Cho__Chang', 'CSJDM, Bulacan', '09156778191', '1998-01-02', 'CSJDM, Bulacan', 'F', 'Single', 'cho@gmail.com', 3),
(33, 37, 'Hermione_Jean_Granger', 'Great Britain, Quezon City', '09567889201', '1999-09-19', 'Great Britain, Quezon City', 'F', 'Single', 'hermione@gmail.com', 3),
(34, 38, 'Ronald_Bilius_Weasley', 'Ottery St Catchpole, Devon, Great Britain, Quezon City', '09656278881', '1999-03-01', 'Ottery St Catchpole, Devon, Great Britain, Quezon ', 'M', 'Single', 'ronald@gmail.com', 3),
(35, 39, 'Draco_Lucius_Malfoy', 'Filthy St Mudblood, Murray, Great Britain, Quezon City', '09654019929', '1999-06-05', 'Filthy St Mudblood, Murray, Great Britain, Quezon ', 'M', 'Single', 'draco@gmail.com', 3);

INSERT INTO `vehicle` (`id`, `model`, `brand`, `transmission`, `price`, `plate`, `driver`, `garage`, `offday`, `status`) VALUES
(1, 'Toyota', 'Sequoia ', 'A', 'default', 'ZBC562', 'INST-2018-0019', 1, 1, 1),
(4, 'Lexus', 'Toyota', 'A', 'default', 'KSA012', 'INST-2018-0020', 1, 1, 1),
(5, 'Vios', 'Toyota', 'A', 'default', 'JMO019', 'INST-2018-0021', 1, 5, 1),
(6, 'Altis', 'Toyota', 'A', 'default', 'PAF211', 'INST-2018-0022', 1, 1, 1),
(7, 'Corolla AE111', 'Toyota', 'M', 'default', 'OPF0123', 'INST-2018-0023', 1, 2, 1),
(8, 'Carina AT210', 'Toyota', 'M', 'default', 'LMV018', 'INST-2018-0024', 1, 4, 1),
(9, 'Civic Sedan', 'Honda', 'M', 'default', 'ORF180', 'INST-2018-0027', 1, 5, 1),
(10, 'Accord', 'Honda', 'M', 'default', 'JKR731', 'INST-2018-0028', 1, 1, 1);

INSERT INTO `web_branch` (`id`, `branchID`, `branchName`, `location`, `fulladdress`, `telno`) VALUES
(1, 1, 'Main, Quezon City', 'Quezon City', 'Mayon St. Cor. Maria Clara, Quezon city', '741-7185'),
(2, 2, 'Taguig City', 'Taguig City', 'First Level Market! Market! Fort Bonifacio Taguig Global City', '844-7734'),
(3, 3, 'Cubao, Quezon City', 'Quezon City', 'Shopwise Cubao, Gen. Aguinaldo Ave., Socorro, Quezon City', '425-7383'),
(4, 4, 'Q. Ave, Quezon City', 'Quezon City', 'Fortunata Bldg., 663 Q. Avenue between Araneta Ave., and Sto. Domingo ', '938-1236'),
(5, 5, 'Pasay City', 'Pasay City', 'Cartimar Shopping Center, Rm. 1A Pasay Taft (between Libertad and Buendia)', '833-2043');

INSERT INTO `web_course` (`id`, `courseID`, `transmission`, `days`, `hour`, `price`) VALUES
(11, 1, 'a', 5, 60, 3500),
(12, 2, 'a', 7, 60, 4900),
(13, 3, 'a', 10, 60, 7000),
(14, 4, 'a', 15, 60, 10500),
(15, 5, 'a', 20, 60, 14000),
(16, 6, 'm', 5, 60, 2500),
(17, 7, 'm', 7, 60, 3500),
(18, 8, 'm', 10, 60, 5000),
(19, 9, 'm', 15, 60, 7500),
(20, 10, 'm', 20, 60, 10000);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
