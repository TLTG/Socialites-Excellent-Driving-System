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
(1, '1808246de68453f', 'Enrollment', '{\"enrolled\":[{\"course\":6,\"special\":false}],\"apply\":0}', 1, 2500, 2500, '2018-08-24 04:06:43'),
(2, '180824468f9e9d6', 'Enrollment', '{\"enrolled\":[{\"course\":2,\"special\":false}],\"apply\":0}', 1, 4900, 4900, '2018-08-24 04:10:41'),
(3, '1808246ee1c2690', 'Enrollment', '{\"enrolled\":[{\"course\":8,\"special\":false}],\"apply\":0}', 1, 5000, 5000, '2018-08-24 04:16:06'),
(4, '18082402c3e24a0', 'Enrollment', '{\"enrolled\":[{\"course\":3,\"special\":false}],\"apply\":0}', 1, 7000, 7000, '2018-08-24 04:19:57'),
(5, '180824b7952e960', 'Enrollment', '{\"enrolled\":[{\"course\":3,\"special\":false}],\"apply\":0}', 1, 7000, 7000, '2018-08-24 04:41:10'),
(6, '180824e844da2aa', 'Enrollment, Apply-1', '{\"enrolled\":[{\"course\":8,\"special\":false}],\"apply\":1}', 1, 5500, 0, '2018-08-24 04:44:45');

INSERT INTO `accounttype` (`id`, `title`, `permission`) VALUES
(1, 'admin', '----'),
(2, 'instructor', '-----'),
(3, 'student', '-------'),
(4, 'branch_admin', '-------');

INSERT INTO `announcement` (`id`, `title`, `message`, `dateFrom`, `status`) VALUES
(1, 'PROMO (Avail Now)!!!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero doloribus accusantium corporis, ipsam error dolorum! At laboriosam illo itaque ea et inventore fugit animi ratione! Fuga dicta facilis at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero doloribus accusantium corporis, ipsam error dolorum! At laboriosam illo itaque ea et inventore fugit animi ratione! Fuga dicta facilis at', '2018-09-16', 1),
(2, '20% OFF FOR THE FIRST TEN CUSTOMERS!', 'This promo is only valid for students enrolled in SED-Quezon City (Main). Valid until next week (9/23/18)', '2018-09-16', 1);

INSERT INTO `branch` (`id`, `address`, `telno`, `name`, `purgeFlag`) VALUES
(1, 'Mayon St. _Cor. Maria Clara, _Quezon city_1108_NCR', '741-7185/', 'Quezon city', 1),
(2, 'First Level Market! Market! Fort Bonifacio Taguig Global City', '844-7734', 'Taguig City', 1),
(3, 'Shopwise Cubao, Gen. Aguinaldo Ave., Socorro, Quezon City', '425-7383', 'Cubao, Quezon City', 1),
(4, 'Fortunata Bldg., 663 Q. Avenue between Araneta Ave., and Sto. Domingo ', '938-1236', 'Q. Ave., Quezon City', 1),
(5, 'Cartimar Shopping Center, Rm. 1A Pasay Taft (between Libertad and Buendia)', '833-2043', 'Pasay City', 1);

INSERT INTO `branch_instructor` (`id`, `instID`, `branchID`, `assignedDate`) VALUES
(1, 'INST-002002', 1, '2018-09-11 08:13:29'),
(2, 'INST-003003', 1, '2018-09-11 08:13:29'),
(3, 'INST-004004', 1, '2018-09-11 08:13:48'),
(4, 'INST-005005', 2, '2018-09-11 08:13:48'),
(5, 'INST-006006', 2, '2018-09-11 08:14:02'),
(6, 'INST-007007', 2, '2018-09-11 08:14:02'),
(7, 'INST-008008', 3, '2018-09-11 08:14:22'),
(8, 'INST-009009', 3, '2018-09-11 08:14:22');

INSERT INTO `course` (`id`, `description`, `carType`, `amount`, `days`, `status`) VALUES
(1, '', 'a', 3500, 5, 1),
(2, '', 'a', 4900, 7, 1),
(3, '', 'a', 7000, 10, 1),
(4, '', 'a', 10500, 15, 1),
(5, '', 'a', 14000, 20, 1),
(6, '', 'm', 2500, 5, 1),
(7, '', 'm', 3500, 7, 1),
(8, '', 'm', 5000, 10, 1),
(9, '', 'm', 7500, 15, 1),
(10, '', 'm', 10000, 20, 1);

INSERT INTO `faq` (`id`, `faqLabelID`, `question`, `answer`, `status`) VALUES
(1, 1, 'How long will the branch I enrolled in wait for me after I submit my enrollment form online?', 'Our system automatically removes all enrollment form that exceeds one week upon its submission. Don''t worry, we will email you two days before the one week deadline to make sure you don''t forget about it.', 1),
(2, 3, 'Can I choose specific lessons per course?', 'Yes, but only if you''ve been our student at least once. For choosing of specific lessons, please enroll with your account.', 1),
(3, 1, 'What are the requirements for enrollment?', 'Please visit the [COURSES] tab for more details.', 1),
(4, 2, 'What should I bring (requirements) for every driving lesson appointment?', 'It is required to have with you your Student Driver''s Permit or any Philippines Driver''s License for every appointment. You may bring your Student ID, however, it is not required.', 1);

INSERT INTO `faqlabel` (`id`, `label`, `status`) VALUES
(1, 'Enrollment', 1),
(2, 'Driving Appointments', 1),
(3, 'Courses and Lessons', 1),
(4, 'Scheduling', 1),
(5, 'Licensing Application Assistance', 1),
(6, 'Payment', 1),
(7, 'Others', 1);

INSERT INTO `instructor` (`id`, `userInfo`, `license`, `licenseExp`, `educAttain`, `vacant`, `dateRegistered`, `dateRetired`, `status`) VALUES
('INST-002002', 2, 'A02-11-1167', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1),
('INST-003003', 3, 'A01-11-2131', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1),
('INST-004004', 4, 'A01-11-9012', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1),
('INST-005005', 5, 'B01-01-3203', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1),
('INST-006006', 6, 'A01-11-0231', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1),
('INST-007007', 7, 'A01-11-9289', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1),
('INST-008008', 8, 'A01-11-8752', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1),
('INST-009009', 9, 'A01-11-2281', '2023-08-24', 5, '', '0000-00-00 00:00:00', '0000-00-00', 1);

INSERT INTO `lesson` (`id`, `title`, `prerequisite`, `description`, `duration`, `purgeFlag`) VALUES
(1, 'Start and Stop', NULL, 'Master the starting and stopping of your car''s engine before you hit the road.', 60, 1),
(2, 'Backing and Turning', NULL, 'Driving a vehicle in reverse direction in order to maneuver,', 60, 1),
(3, 'Road crossing', NULL, 'Giving way to the pedestrian on crossing with and without lights, crossing at intersection.', 60, 1),
(4, 'Maneuvering', NULL, 'A controlled change in movement or direction of a moving vehicle.', 60, 1),
(5, 'Hanging', NULL, 'You''ll be able to prevent your car from rolling while you''re on a hill or any elevated surface.', 60, 1),
(6, 'Garage driving', NULL, 'Things you can do to avoid getting an accident in a parking garage or busy parking lot.', 60, 1),
(7, 'Parking', NULL, 'The act of stopping and disengaging a vehicle and leaving it unoccupied.', 60, 1),
(8, 'Highway driving', NULL, 'Driving on a busy road with may lanes.', 60, 1),
(9, 'Heavy traffic', NULL, 'Feel safe when driving on a traffic jam, and this might mean you need to drive a little slower than the flow of traffic.', 60, 1),
(10, 'Review', NULL, 'Reviewing all the past lesson tackled.', 60, 1);

INSERT INTO `license_apply_price` (`id`, `type`, `desc`, `price`, `status`) VALUES
(0, 'none', 'none', 0, 0),
(1, 'SDP', 'Student Driver''s Permit', 500, 1),
(2, 'NonPro', 'Non-Professional License', 2500, 1),
(3, 'Pro', 'Professional License', 2700, 1),
(4, 'International', 'International License', 5000, 1);

INSERT INTO `preregstudent` (`id`, `data`, `dateSubmit`, `status`) VALUES
(1, '{"info":{"fullname":"Graciella _Custodio_Tatel","birthdate":"1999-05-17","birthplace":"CSJDM, Bulacan","address":"CSJDM, Bulacan","telno":"09565867353","occupation":"Student","email":"gtatel0517@gmail.com","civilStatus":"Single","sex":"Female","guardian":{"name":"Jemma C. Tatel","telno":"09758664532"}},"course":[6],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"1808246de68453f","dataID":1},"preference":{"vehicle":"7","schedule":["2","4","5"]}}', '2018-08-24 04:06:43', 0),
(2, '{"info":{"fullname":"Christian Paul_Rojero_Tupas","birthdate":"1998-12-08","birthplace":"Quzon City","address":"here and there places everywhere","telno":"09185671538","occupation":"Developer","email":"christianpaultupas@gmail.com","civilStatus":"Single","sex":"Male","guardian":{"name":"olivia tupas","telno":"09094527651"}},"course":[2],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"180824468f9e9d6","dataID":2},"preference":{"vehicle":"5","schedule":["5","7","3"]}}', '2018-08-24 04:10:41', 1),
(3, '{"info":{"fullname":"Perrine Clarisse_Buena_Laganzo","birthdate":"1998-08-16","birthplace":"Makati City","address":"Taguig City","telno":"09272597427","occupation":"Student","email":"zhayrineoznagal@gmail.com","civilStatus":"Single","sex":"Female","guardian":{"name":"Wilma Laganzo","telno":"09062078123"}},"course":[8],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"1808246ee1c2690","dataID":3},"preference":{"vehicle":"8","schedule":["2","5"]}}', '2018-08-24 04:16:06', 1),
(4, '{"info":{},"course":[3],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"18082402c3e24a0","dataID":4},"preference":{"vehicle":"5","schedule":["2","5"]}}', '2018-08-24 04:19:57', 0),
(5, '{"info":{"fullname":"Janelle Joy_Reyes_Gabat","birthdate":"1998-12-18","birthplace":"Makati City","address":"31-D G. L. Jaena St., West Rembo, Makati City","telno":"09218038667","occupation":"Student","email":"janellejoygabat@gmail.com","civilStatus":"Single","sex":"Female","guardian":{"name":"Sarah Jane Gabat","telno":"8827273"}},"course":[3],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"180824b7952e960","dataID":5},"preference":{"vehicle":"5","schedule":["2","5"]}}', '2018-08-24 04:41:10', 1),
(6, '{"info":{"fullname":"Kenard Smith_Belarmino _Bautista ","birthdate":"1997-05-12","birthplace":"CSJDM, Bulacan","address":"CSJDM, Bulacan","telno":"09750025101","occupation":"Programmer","email":"ksbautista@gmail.com","civilStatus":"Married","sex":"Male","guardian":{"name":"Claire Bautista","telno":"09563219645"}},"course":[8],"branch":"1","payment":1,"applyLicense":1,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment, Apply-1","amount":500,"ORnum":"180824e844da2aa","dataID":6},"preference":{"vehicle":"10","schedule":["1","4","2"]}}', '2018-08-24 04:44:45', 1),
(7, '{"info":{"fullname":"Troy_Casper_Bolton","birthdate":"1980-01-01","birthplace":"Salt Lake, Utah","address":"Salt Lake, Utah","telno":"09891019991","occupation":"Actor","email":"troy@gmaill.com","civilStatus":"Single","sex":"Male","guardian":{"name":"Thea Bolton","telno":"09019001919"}},"course":[6],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"1808221113115","dataID":7},"preference":{"vehicle":"7","schedule":["7","1","4","2","3"]}}', '2018-08-21 16:41:57', 1),
(8, '{"info":{"fullname":"Gabriela__Montes","birthdate":"1982-02-02","birthplace":"CSJDM, Bulacan","address":"CSJDM, Bulacan","telno":"09098781019","occupation":"Actress","email":"gabriela@gmail.com","civilStatus":"Married","sex":"Female","guardian":{"name":"Gabby Montes","telno":"09189901812"}},"course":[6],"branch":"1","payment":1,"applyLicense":1,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment, Apply-1","amount":500,"ORnum":"18082241380","dataID":8},"preference":{"vehicle":"8","schedule":["1","2","3"]}}', '2018-08-21 16:47:01', 1),
(9, '{"info":{"fullname":"Chad_Harley_Danforth","birthdate":"1980-03-21","birthplace":"Quezon City","address":"Quezon City","telno":"09098881910","occupation":"Writer","email":"chad@gmail.com","civilStatus":"Married","sex":"Female","guardian":{"name":"Charise Danforth","telno":"09010001011"}},"course":[1],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"18082921407","dataID":9},"preference":{"vehicle":"4","schedule":["1","7","4","2","3"]}}', '2018-08-28 16:52:57', 1),
(10, '{"info":{"fullname":"Sharpay__Evans","birthdate":"1978-05-01","birthplace":"Quezon City","address":"Quezon City","telno":"09871910011","occupation":"Painter","email":"sharpay@gmail.com","civilStatus":"Married","sex":"Female","guardian":{"name":"Sarah Jane Evans","telno":"09128880011"}},"course":[1],"branch":"1","payment":1,"applyLicense":1,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment, Apply-1","amount":500,"ORnum":"18081541192","dataID":10},"preference":{"vehicle":"5","schedule":["2","3","4"]}}', '2018-08-14 16:55:32', 1),
(11, '{"info":{"fullname":"Chad_Harley_Danforth","birthdate":"1990-02-21","birthplace":"CSJDM, Bulacan","address":"CSJDM, Bulacan","telno":"09902920101","occupation":"Painter","email":"chad@gmail.com","civilStatus":"Married","sex":"Male","guardian":{"name":"Charise Danforth","telno":"09081910001"}},"course":[1],"branch":"1","payment":1,"applyLicense":1,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment, Apply-1","amount":500,"ORnum":"180822214138","dataID":11},"preference":{"vehicle":"4","schedule":["1","4","7","2","3"]}}', '2018-08-21 16:58:57', 1),
(12, '{"info":{"fullname":"Ryan_Harley_Evans","birthdate":"1980-05-05","birthplace":"Quezon City","address":"Quezon City","telno":"09908110923","occupation":"Programmer","email":"ryan@gmail.com","civilStatus":"Divorced","sex":"Male","guardian":{"name":"Ryannn Evans","telno":"09182930021"}},"course":[1],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"18082212068","dataID":12},"preference":{"vehicle":"6","schedule":["1","4","5","2","3"]}}', '2018-08-21 17:02:31', 1),
(13, '{"info":{"fullname":"Taylor _Custodio_McKessie","birthdate":"1978-06-06","birthplace":"Quezon City","address":"Quezon City","telno":"09071882345","occupation":"Dancer","email":"zhayrineoznagal@gmail.com","civilStatus":"Single","sex":"Female","guardian":{"name":"Taytay McKessie","telno":"09657829102"}},"course":[6],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"18082233910","dataID":13},"preference":{"vehicle":"10","schedule":["1","4","7","5"]}}', '2018-08-21 17:06:44', 1),
(14, '{"info":{"fullname":"Kelsi_Adams_Nielsen","birthdate":"1987-12-02","birthplace":"CSJDM, Bulacan","address":"CSJDM. Bulacan","telno":"09758664532","occupation":"Student","email":"kelsi@gmail.com","civilStatus":"Single","sex":"Female","guardian":{"name":"Kelly Nielsen","telno":"09758664531"}},"course":[6],"branch":"1","payment":1,"applyLicense":1,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment, Apply-1","amount":500,"ORnum":"180822159144","dataID":14},"preference":{"vehicle":"8","schedule":["2","5","6","3"]}}', '2018-08-21 17:09:11', 1),
(15, '{"info":{"fullname":"Ria_A_Sagum","birthdate":"1980-12-25","birthplace":"Quezon City","address":"Quezon City","telno":"09567224151","occupation":"Professor","email":"gtatel0517@gmail.com","civilStatus":"Married","sex":"Female","guardian":{"name":"Ryan Sagum","telno":"09056788191"}},"course":[8],"branch":"1","payment":1,"applyLicense":0,"special":{"course":[],"location":null},"transaction":{"transaction":"Enrollment","amount":0,"ORnum":"18082901430","dataID":15},"preference":{"vehicle":"7","schedule":["1","2","3","4","5"]}}', '2018-08-29 00:24:05', 1);

INSERT INTO `useraccount` (`id`, `username`, `password`, `accType`, `status`) VALUES
(1, 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 1, 1),
(2, 'harryjamespotter@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(3, 'leviosarrr@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(4, 'ronaldweasley@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(5, 'myfatherwillhearaboutthis@gmai', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(6, 'lovegooder@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(7, 'chooochang@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(8, 'nevilleshorttop@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1),
(9, 'iamnotdead@gmail.com', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 2, 1);

INSERT INTO `userinfo` (`id`, `userAcc`, `fullname`, `address`, `telno`, `birthdate`, `birthplace`, `sex`, `civilStatus`, `email`, `userType`) VALUES
(1, 1, 'administrator', 'SED Manila', '0', '2018-08-01', '---', 'M', 'single', 'sedtest@gmail.com', 1),
(2, 2, 'Harry James__Potter', 'Number 4, Privet Drive', '09458920192', '1980-07-31', 'n/a', 'M', 'n/a', 'harryjamespotter@gmail.com', 2),
(3, 3, 'Hermione Jean__Granger', 'Number 5, Little Whingings', '09067819012', '1981-06-15', 'n/a', 'F', 'n/a', 'leviosarrr@gmail.com', 2),
(4, 4, 'Ronald Bilius__Weasley', 'The Burrow', '09759100023', '1981-09-07', 'n/a', 'M', 'n/a', 'ronaldweasley@gmail.com', 2),
(5, 5, 'Draco__Malfoy', 'Malfoy Manor', '09078192001', '1980-08-17', 'n/a', 'M', 'n/a', 'myfatherwillhearaboutthis@gmai', 2),
(6, 6, 'Luna__Lovegood', 'Diagon Alley', '09982100201', '1980-01-22', 'n/a', 'F', 'n/a', 'lovegooder@gmail.com', 2),
(7, 7, 'Cho__Chang', 'Knockturn Alley', '09190119293', '1979-09-10', 'n/a', 'F', 'n/a', 'chooochang@gmail.com', 2),
(8, 8, 'Neville__Longbottom', 'Hogwarts School of Witchcraft and Wizardry', '09156789201', '1977-07-31', 'n/a', 'M', 'n/a', 'nevilleshorttop@gmail.com', 2),
(9, 9, 'Fred__Weasley', 'The Burrow', '09756181021', '1976-07-08', 'n/a', 'M', 'n/a', 'iamnotdead@gmail.com', 2);

INSERT INTO `vehicle` (`id`, `model`, `brand`, `transmission`, `price`, `plate`, `driver`, `garage`, `offday`, `status`) VALUES
(1, 'Toyota', 'Sequoia ', 'a', 'default', 'ZBC562', 'INST-002002', 1, 1, 1),
(4, 'Lexus', 'Toyota', 'A', 'default', 'KSA012', 'INST-003003', 1, 1, 1),
(5, 'Vios', 'Toyota', 'A', 'default', 'JMO019', 'INST-004004', 1, 5, 1),
(6, 'Altis', 'Toyota', 'A', 'default', 'PAF211', 'INST-005005', 1, 1, 1),
(7, 'Corolla AE111', 'Toyota', 'M', 'default', 'OPF0123', 'INST-006006', 1, 2, 1),
(8, 'Carina AT210', 'Toyota', 'M', 'default', 'LMV018', 'INST-007007', 1, 4, 1),
(9, 'Civic Sedan', 'Honda', 'M', 'default', 'ORF180', 'INST-008008', 1, 5, 1),
(10, 'Accord', 'Honda', 'M', 'default', 'JKR731', 'INST-009009', 1, 1, 1);

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
