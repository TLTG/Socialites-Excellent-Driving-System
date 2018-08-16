SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


INSERT INTO `account` (`id`, `ORno`, `transaction`, `data`, `feeType`, `price`, `balance`, `date`) VALUES
(11, '180813898eaea91', 'Enrolment', '{"enrolled":[{"course":2,"special":false}],"apply":"2"}', 1, 3700, 2700, '2018-08-12 22:26:03'),
(12, '180813eecde87b8', 'Enrolment', '{"enrolled":[{"course":1,"special":true}],"apply":0}', 1, 7000, 0, '2018-08-12 22:54:40'),
(13, '180813ba4f9babf', 'Enrolment', '{"enrolled":[{"course":2,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-12 23:22:44'),
(14, '180813b168f0fc8', 'Enrolment', '{"enrolled":[{"course":1,"special":false}],"apply":0}', 1, 3500, 0, '2018-08-12 23:37:25'),
(15, '1808130e40fc17c', 'Enrolment', '{"enrolled":[{"course":2,"special":true}],"apply":0}', 1, 2000, 1000, '2018-08-12 23:41:41'),
(16, '180814fa43bb95e', 'EnrolmentEnrolment, ', '{"enrolled":[{"course":2,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-13 21:05:32'),
(17, '1808159ccc9e5ce', 'Enrollment, Apply-1', '{"enrolled":[{"course":5,"special":false}],"apply":1}', 1, 3500, 0, '2018-08-14 16:51:46'),
(18, '180815ad3368d84', 'Enrollment, Apply-2', '{"enrolled":[{"course":5,"special":false}],"apply":2}', 1, 3700, 2700, '2018-08-14 18:03:23'),
(19, '1808155d5d41b89', 'Enrollment, Apply-2', '{"enrolled":[{"course":1,"special":true}],"apply":2}', 1, 9700, 9700, '2018-08-14 18:12:43'),
(20, '180815f7fcde6e7', 'Enrollment, Apply-1', '{"enrolled":[{"course":1,"special":false}],"apply":1}', 1, 6000, 1000, '2018-08-14 18:16:20'),
(21, '180815566e57a44', 'Enrollment, Apply-2', '{"enrolled":[{"course":2,"special":false},{"course":5,"special":true}],"apply":2}', 1, 5700, 0, '2018-08-14 18:20:45'),
(22, '180815154549db5', 'Enrollment, Apply-3', '{"enrolled":[{"course":2,"special":false}],"apply":3}', 1, 6000, 0, '2018-08-15 13:26:36'),
(23, '180815cc3842533', 'Enrollment, Apply-1', '{"enrolled":[{"course":5,"special":true}],"apply":1}', 1, 4500, 0, '2018-08-15 13:59:31'),
(24, '180815d135efdb4', 'Enrollment, Apply-2', '{"enrolled":[{"course":2,"special":false}],"apply":2}', 1, 3700, 0, '2018-08-15 14:06:36'),
(25, '18081698dcd3426', 'Enrollment, Apply-1', '{"enrolled":[{"course":2,"special":false},{"course":1,"special":false}],"apply":1}', 1, 7000, 4000, '2018-08-15 19:43:58'),
(26, '18081601ff686cd', 'Enrollment', '{"enrolled":[{"course":2,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 14:05:07'),
(27, '180816e240a456e', 'Enrollment', '{"enrolled":[{"course":1,"special":false}],"apply":0}', 1, 3500, 0, '2018-08-16 14:15:06'),
(28, '180816afbc6d503', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 14:30:09'),
(29, '180816022c3117b', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 200, '2018-08-16 14:34:04'),
(30, '18081625ae8eac2', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 1000, '2018-08-16 14:41:11'),
(31, '1808165ed092d45', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 14:46:28'),
(32, '1808160a01111e4', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 14:49:52'),
(33, '180816e897c057c', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 14:53:18'),
(34, '1808167ee2424a4', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 1000, '2018-08-16 14:58:11'),
(35, '180816a0bef2b66', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 1000, '2018-08-16 15:05:54'),
(36, '18081677cf96d4b', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 15:13:43'),
(37, '180816056192e7d', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 15:21:48'),
(38, '180816640707b3c', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 15:46:19'),
(39, '180816ec3988d46', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 15:50:33'),
(40, '180816bcb650c3e', 'Enrollment', '{"enrolled":[{"course":5,"special":false}],"apply":0}', 1, 1000, 0, '2018-08-16 15:59:31');

INSERT INTO `accounttype` (`id`, `title`, `permission`) VALUES
(1, 'admin', 'r,w-a'),
(2, 'instructor', 'rw+'),
(3, 'student', 'r+');

INSERT INTO `activity` (`id`, `data`, `startTime`, `duration`, `studID`, `instID`, `vehicleID`, `lessonID`) VALUES
(1, '2018-05-16 07:27:49', '10:00:00', 1, '04220', '12345', 123, 1),
(2, '2018-05-16 07:36:35', '16:00:00', 2, '34291', '56789', 567, 5),
(3, '2018-05-16 07:32:27', '12:30:00', 1, '04325', '23456', 234, 2),
(4, '2018-05-16 07:33:38', '15:30:00', 1, '06597', '34567', 345, 3),
(5, '2018-05-16 07:34:23', '14:30:00', 2, '89432', '45678', 456, 4);

INSERT INTO `admin` (`id`, `userInfo`, `branchID`) VALUES
(1, 1, 1);

INSERT INTO `branch` (`id`, `address`, `telno`, `name`, `purgeFlag`) VALUES
(1, 'Quezon City_31-D G. L. Jaena St. West Rembo_Makati City_2015_Metro Manila', '6/755', 'SEDQC', 1),
(2, 'Taguig City', '421-4315', 'SEDTC', 1),
(3, 'Pasay City', '751-5331', 'SEDPC', 1),
(4, 'Makati City', '752-2413', 'SEDMC', 1),
(5, 'Pasig City', '750-5239', 'SEDPC', 1),
(6, 'asvasdmk_vasvasd_vasdv_2345_c', '203980923/827364975', 'vd', 0);

INSERT INTO `course` (`id`, `description`, `carType`, `amount`, `days`, `status`) VALUES
(1, '', 'a', 3500, 5, 1),
(2, '', 'm', 1000, 5, 1),
(3, '', 'm', 1, 20, 0),
(4, '', 'a', 12312312, 1, 0),
(5, '', 'm', 1000, 15, 1),
(6, '', 'a', 4501, 12, 1);

INSERT INTO `defect` (`id`, `vehicle`, `part`, `description`, `importance`, `repaired`) VALUES
(1, 123, 'Gas', 'Gas is half empty', 1, 1),
(2, 234, 'Break', 'tighten the break', 1, 1),
(3, 345, 'Aicon', 'Aircon is not working', 1, 1),
(4, 456, 'Seatbelt', 'Seatbelt is damaged', 1, 1),
(5, 567, 'Oil', 'Excessive oil consumption', 1, 1),
(6, 568, 'Tires', 'deflated', 4, 1),
(7, 569, 'Starting System', 'battery', 5, 0),
(8, 123, 'Tires', 'Flattires', 5, 1),
(9, 574, 'Tires', 'bsad', 5, 0),
(10, 569, 'Ignition Electr', 'nostarter', 5, 1),
(11, 569, 'Lighting and Si', 'broken', 3, 0),
(12, 569, 'Wiring Harnesse', 'loose', 4, 1),
(13, 569, 'Tires', '', 0, 0),
(14, 569, 'Fuel Supply Sys', '', 0, 0),
(15, 569, 'Engine Oil Syst', 'greassy', 5, 1);

INSERT INTO `evaluation` (`id`, `studID`, `instID`, `evaluation`, `comment`, `date`, `target`) VALUES
(1, '04220', '12345', 'Passed', '', '2018-05-16 21:24:57', '1'),
(2, '04325', '23456', 'passed', '', '2018-05-16 21:25:19', '0'),
(3, '06597', '34567', 'failed', '', '2018-05-16 21:33:21', '1'),
(4, '34591', '56789', 'passed', '', '2018-05-16 21:33:52', '1'),
(5, '89432', '45678', 'passed', '', '2018-05-16 21:38:26', '1');

INSERT INTO `guardian` (`id`, `fullname`, `telno`, `refAcc`, `purgeFlag`) VALUES
(1, 'Valentino A. Gabat', '882-7273', 1, 0),
(2, 'Marilou A. Gabat', '889-3412', 2, 0),
(3, 'Sarah Jane R. Gabat', '859-4234', 3, 0),
(4, 'Ma. Elena Magno', '942-421', 4, 0),
(5, 'Alberto T. Reyes', '890-9866', 5, 0);

INSERT INTO `instructor` (`id`, `userInfo`, `license`, `licenseExp`, `educAttain`, `vacant`, `dateRegistered`, `dateRetired`, `status`) VALUES
('0', 0, 'sample1', '2018-07-30', 1, NULL, '2018-07-29 08:05:39', '2018-07-01', 1),
('INST-014008', 8, 'A1212111223', '2018-06-14', 5, 'Monday', '2018-05-20 17:05:05', NULL, 1),
('INST-016010', 10, 'P8437724876', '2023-06-22', 3, '', '2018-06-22 10:41:53', NULL, 1),

INSERT INTO `lesson` (`id`, `title`, `prerequisite`, `description`, `duration`, `purgeFlag`) VALUES
(1, 'Start and Stop', NULL, 'Master the starting and stopping of your car’s engine before you hit the road.', 60, 1),
(2, 'Backing and Turning, Light Traffic', 1, 'Driving a vehicle in reverse direction in order to maneuver.', 60, 1),
(3, 'Road Crossing ', 2, ' Giving way to pedestrians on crossing with and without lights, crossing at intersection.', 60, 1),
(4, 'Manuevering', 1, 'A controlled change in movement or direction of a moving vehicle', 60, 1),
(5, 'Hanging', 3, 'you’ll be able to prevent your car from rolling while you’re on a hill or any elevated surface.', 60, 1),
(6, 'Garage Driving', 3, 'things you can do to avoid getting in an accident in a parking garage or busy parking lot.', 60, 0),
(7, 'Parking', 4, 'the act of stopping and disengaging a vehicle and leaving it unoccupied', 60, 0),
(8, 'Highway Driving', 2, 'Driving on a busy road with many lanes', 60, 0),
(9, 'Heavy Traffic', 1, 'feel safe when driving on a traffic jam, and this might mean you need to drive a little slower than the flow of traffic.', 60, 0),
(10, 'Review', 9, 'Reviewing all the lessons tackled', 60, 0);

INSERT INTO `license_apply_price` (`id`, `type`, `desc`, `price`, `status`) VALUES
(0, 'none', 'none', 0, 0),
(1, 'STDP', 'Student Drivers Permit', 500, 1),
(2, 'NonPro', 'Non-Professional', 2500, 1),
(3, 'Pro', 'Professional', 2700, 1),
(4, 'Inter', 'International License', 5000, 1);

INSERT INTO `requirement` (`id`, `title`, `description`, `importance`) VALUES
(1, 'license', 'To apply drivers permit at LTO', 1);

INSERT INTO `useraccount` (`id`, `username`, `password`, `accType`, `status`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 1, 1)

INSERT INTO `userinfo` (`id`, `userAcc`, `fullname`, `address`, `telno`, `birthdate`, `birthplace`, `sex`, `civilStatus`, `email`, `userType`) VALUES
(1, 1, 'Janelle Joy R. Gabat', '31-D G.L. Jaena St. West Rembo, Makati City ', '882-7273', '1998-12-18', 'Makati City', 'F', 'Single', 'janellejoygabat@gmail.com', 1),
(2, 3, 'Janelen Faith R. Gabat', 'Quezon City', '751-1326', '1997-08-07', 'Makati City', 'F', 'Single', 'jfgabat@yahoo.com', 1),
(3, 2, 'Jann Hope R. Gabat', 'Pasig City', '882-2629', '2004-04-30', 'Makati City', 'F', 'Single', 'jannhopegabat@gmail.com', 2),
(4, 4, 'Jakielyn Jann G. Magno', 'Taguig City ', '632-5322', '2000-02-01', 'Pasay City', 'F', 'Single', 'jakielynjannmagno@gmail.com', 2),
(5, 5, 'Sarah Jane R. Gabat', 'Mandaluyong City', '845-4314', '1967-12-02', 'Pembo, Makati City ', 'F', 'Married', 'sjgabat@gmail.com', 1),
(6, 16, 'Christian Paul Tupas_Rojero_Tupas', 'Sample address for address input text box box input input', '091856713538', '1998-12-08', 'Quezon City', 'M', 'Married', 'christianpaultupas@gmail.com', 3),
(7, 15, 'LhexyKhyrystelle_Ballesteros_Romero', 'fasdasdasdasd', '09185671538', '1998-10-02', 'Quezon City', 'F', 'Married', 'lhexyromero@gmail.com', 3),
(8, 20, 'Lara Jane_Rojero_Tupas', 'lkadfhaklsfhalskfhlak', '1982374233', '1990-08-26', 'Quezon City', 'F', 'Single', 'casdh@asd.caskd', 3),
(9, 22, 'Edgar_Pugon_Tupas', 'asjdhasjkdhasjkdhajk', '131231312312', '1997-04-06', 'ashkdajsdhajkdh', 'M', 'Divorced', 'casdhjas@asdad.cosd', 3)

INSERT INTO `vehicle` (`id`, `model`, `brand`, `transmission`, `price`, `plate`, `driver`, `garage`, `offday`, `status`) VALUES
(123, 'vios', 'toyota', 'A', 'default', 'AAP3780', NULL, 1, 5, 1),
(234, 'wigo', 'toyota', 'M', 'default', 'ASD123', '23456', 1, 3, 1),
(345, 'accent', 'hyundai', 'M', 'default', 'TRY345', '34567', 1, 0, 1),
(456, 'Vios', 'Toyota', 'M', 'default', 'VDS634', '45678', 1, 7, 1),
(567, 'Accent', 'Hyundai', 'M', 'default', 'FAS', '56789', 1, 4, 2),
(568, 'paul', 'wagon', 'M', 'default', 'SEX699', NULL, 1, 5, 1),
(569, 'LX34', 'Ford', 'M', 'default', 'LAS295', NULL, 1, 3, 1),
(570, 'Kali', 'Mitsubishi', 'A', 'default', 'LTX-326', NULL, 1, 3, 0);

INSERT INTO `web_branch` (`id`, `branchID`, `branchName`, `location`, `fulladdress`, `telno`) VALUES
(1, 3, 'Pasay', 'Pasay', 'Cartimar Shopping Center Rm. 1-A', '833-20-43');

INSERT INTO `web_course` (`id`, `courseID`, `transmission`, `days`, `hour`, `price`) VALUES
(1, 2, 'm', 5, 60, 2500),
(2, 1, 'a', 5, 60, 3500),
(3, 5, 'm', 15, 60, 1000),
(4, 6, 'a', 12, 60, 4501);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
