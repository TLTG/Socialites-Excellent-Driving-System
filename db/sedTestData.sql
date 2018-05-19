SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


INSERT INTO `account` (`id`, `studID`, `feeType`, `isAircon`, `amount`, `balance`, `data`) VALUES
(1, '04220', 1, 0, 300, 0, '2018-05-16 07:10:39'),
(2, '04325', 1, 1, 500, 100, '2018-05-16 07:13:48'),
(3, '06597', 2, 1, 600, 0, '2018-05-16 07:15:42'),
(4, '89432', 0, 0, 700, 200, '2018-05-16 07:16:40'),
(5, '34291', 2, 1, 200, 400, '2018-05-16 07:17:40');

INSERT INTO `accounttype` (`id`, `title`, `permission`) VALUES
(1, 'admin', 'r,w-a');

INSERT INTO `activity` (`id`, `data`, `startTime`, `duration`, `studID`, `instID`, `vehicleID`, `lessonID`) VALUES
(1, '2018-05-16 07:27:49', '10:00:00', 1, '04220', '12345', 123, 1),
(2, '2018-05-16 07:36:35', '16:00:00', 2, '34291', '56789', 567, 5),
(3, '2018-05-16 07:32:27', '12:30:00', 1, '04325', '23456', 234, 2),
(4, '2018-05-16 07:33:38', '15:30:00', 1, '06597', '34567', 345, 3),
(5, '2018-05-16 07:34:23', '14:30:00', 2, '89432', '45678', 456, 4);

INSERT INTO `branch` (`id`, `address`, `telno`, `name`, `purgeFlag`) VALUES
(1, 'Quezon City', '324-4123', 'SEDQC', 0),
(2, 'Taguig City', '421-4315', 'SEDTC', 1),
(3, 'Pasay City', '751-5331', 'SEDPC', 0),
(4, 'Makati City', '752-2413', 'SEDMC', 0),
(5, 'Pasig City', '750-5239', 'SEDPC', 0);

INSERT INTO `defect` (`id`, `vehicle`, `part`, `description`, `importance`, `repaired`) VALUES
(1, 123, 'Gas', 'Gas is half empty', 1, 1),
(2, 234, 'Break', 'tighten the break', 1, 1),
(3, 345, 'Aicon', 'Aircon is not working', 1, 1),
(4, 456, 'Seatbelt', 'Seatbelt is damaged', 1, 1),
(5, 567, 'Oil', 'Excessive oil consumption', 1, 1),
(6, 568, 'Tires', 'deflated', 4, 1);

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

INSERT INTO `instructor` (`id`, `userInfo`, `vacant`, `status`) VALUES
('12345', 1, 'Monday', 1),
('23456', 2, 'Tuesday', 0),
('34567', 3, 'Friday', 1),
('45678', 4, 'sunday', 1),
('56789', 5, 'monday', 0);

INSERT INTO `lesson` (`id`, `title`, `prerequisite`, `description`, `purgeFlag`) VALUES
(1, 'start and stop', 1, '', 0),
(2, 'Backing and tur', 0, '', 0),
(3, 'Road crossing l', 2, '', 0),
(4, 'Manuevering', 1, '', 1),
(5, 'Hanging', 3, '', 1);

INSERT INTO `requirement` (`id`, `title`, `description`, `importance`) VALUES
(1, 'license', 'To apply drivers permit at LTO', 1);

INSERT INTO `schedule` (`id`, `date`, `time`, `hour`, `studID`, `instID`, `branch`, `status`) VALUES
(1, '2018-05-19', '10:30:00', 1, '04220', '12345', 4, 1),
(2, '2018-05-19', '15:00:00', 1, '04325', '23456', 1, 0),
(3, '2018-05-31', '12:00:00', 1, '06597', '34567', 5, 1),
(4, '2018-05-29', '14:30:00', 1, '34591', '56789', 2, 0),
(5, '2018-05-30', '16:00:00', 1, '89432', '45678', 5, 0);

INSERT INTO `student` (`id`, `userInfo`, `dateRegistered`, `status`) VALUES
('04220', 1, '2017-05-17', 1),
('04325', 3, '2017-12-04', 0),
('06597', 4, '2018-02-18', 0),
('34591', 2, '2018-01-30', 1),
('89432', 5, '2017-08-22', 1);

INSERT INTO `useraccount` (`id`, `username`, `password`, `accType`, `status`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 1, 0),
(2, 'jaja', 'qwerty', 2, 0),
(3, 'peyt', 'zxcvb', 1, 1),
(4, 'joy', 'poiuy', 2, 0),
(5, 'hope', 'lkjhg', 1, 1);

INSERT INTO `userinfo` (`id`, `userAcc`, `fullname`, `address`, `telno`, `birthdate`, `birthplace`, `sex`, `civilStatus`, `email`, `userType`) VALUES
(1, 1, 'Janelle Joy R. Gabat', '31-D G.L. Jaena St. West Rembo, Makati City ', '882-7273', '1998-12-18', 'Makati City', 'F', 'Single', 'janellejoygabat@gmail.com', 1),
(2, 3, 'Janelen Faith R. Gabat', 'Quezon City', '751-1326', '1997-08-07', 'Makati City', 'F', 'Single', 'jfgabat@yahoo.com', 1),
(3, 2, 'Jann Hope R. Gabat', 'Pasig City', '882-2629', '2004-04-30', 'Makati City', 'F', 'Single', 'jannhopegabat@gmail.com', 2),
(4, 4, 'Jakielyn Jann G. Magno', 'Taguig City ', '632-5322', '2000-02-01', 'Pasay City', 'F', 'Single', 'jakielynjannmagno@gmail.com', 2),
(5, 5, 'Sarah Jane R. Gabat', 'Mandaluyong City', '845-4314', '1967-12-02', 'Pembo, Makati City ', 'F', 'Married', 'sjgabat@gmail.com', 1);

INSERT INTO `vehicle` (`id`, `model`, `brand`, `transmission`, `plate`, `driver`, `offday`, `status`) VALUES
(123, 'vios', 'toyota', 'M', 'AAP3780', '12345', 1, 1),
(234, 'wigo', 'toyota', 'M', 'ASD123', '23456', 3, 1),
(345, 'accent', 'hyundai', 'M', 'TRY345', '34567', 0, 1),
(456, 'Vios', 'Toyota', 'M', 'VDS634', '45678', 7, 1),
(567, 'Accent', 'Hyundai', 'M', 'FAS', '56789', 4, 2),
(568, 'paul', 'wagon', 'A', 'SEX699', '', 5, 1);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;