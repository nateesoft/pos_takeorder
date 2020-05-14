CREATE TABLE `group_menu` (
  `code` varchar(3) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `status` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `menu_sublist` (
  `menu_code` varchar(13) DEFAULT NULL,
  `submenu_code` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `orders` (
  `order_no` varchar(100) NOT NULL,
  `table_code` varchar(10) DEFAULT NULL,
  `emp_code` varchar(20) NOT NULL,
  `cust_count` int(2) DEFAULT NULL,
  `item_count` int(2) DEFAULT NULL,
  `total_amount` float DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `orders_detail` (
  `index` varchar(20) NOT NULL,
  `order_no` varchar(100) NOT NULL,
  `menu_code` varchar(20) NOT NULL,
  `menu_name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `qty` int(2) NOT NULL,
  `total_amount` float NOT NULL,
  `status` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `uid` varchar(100) NOT NULL,
  `send_order` varchar(1) DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `orders_specialtext` (
  `order_no` varchar(100) NOT NULL,
  `menu_code` varchar(20) NOT NULL,
  `special_text` varchar(100) NOT NULL,
  `menu_index` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `orders_subcode` (
  `order_no` varchar(100) NOT NULL,
  `menu_code` varchar(20) NOT NULL,
  `sub_menu_code` varchar(100) NOT NULL,
  `menu_index` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `product_menu` (
  `code` varchar(13) NOT NULL,
  `code_key` varchar(5) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `group_code` varchar(3) NOT NULL,
  `img_url` varchar(100) DEFAULT NULL,
  `img_url_thumbnail` varchar(100) DEFAULT NULL,
  `status` varchar(1) NOT NULL,
  `star_count` int(11) DEFAULT NULL,
  `show_recommend` varchar(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `show_sublist` varchar(1) DEFAULT NULL,
  `img_host` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pos_takeorder.group_menu (code,name,description,status,created_at,updated_at) VALUES 
('g01','Appitizer','Appitizer','Y','2020-02-19 15:18:10.0','2020-02-19 15:18:10.0')
,('g02','Beef','Beef','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g03','Beverage','Beverage','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g04','Burger','Burger','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g05','Chicken','Chicken','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g06','Delivery','Delivery','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g07','Dessert','Dessert','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g08','Fish','Fish','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g09','Kids','Kids','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g10','Pork','Pork','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
;
INSERT INTO pos_takeorder.group_menu (code,name,description,status,created_at,updated_at) VALUES 
('g11','Premiumsteak','Premiumsteak','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g12','Salad','Salad','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g13','Soup','Soup','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g14','Spaghetti','Spaghetti','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g15','Yourway','Yourway','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
,('g16','Recommend','Recommend','Y','2020-02-19 15:18:28.0','2020-02-19 15:18:28.0')
;

INSERT INTO pos_takeorder.menu_sublist (menu_code,submenu_code) VALUES 
('P100','P01')
,('P100','P02')
,('P100','P03')
,('P76','P04')
,('P76','P05')
,('P76','P06')
,('P76','P07')
,('P76','P08')
,('P78','P09')
,('P78','P10')
;
INSERT INTO pos_takeorder.menu_sublist (menu_code,submenu_code) VALUES 
('P79','P11')
,('P79','P12')
,('P80','P13')
,('P80','P14')
,('P81','P15')
;

INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p01','1','appitizer1','appitizer',199,'g01','/appitizer/appitizer1.jpg','/appitizer/appitizer1.jpg','Y',NULL,'Y','2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p02','2','appitizer2','appitizer',199,'g01','/appitizer/appitizer2.jpg','/appitizer/appitizer2.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p03','3','appitizer3','appitizer',199,'g01','/appitizer/appitizer3.jpg','/appitizer/appitizer3.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p04','4','appitizer4','appitizer',199,'g01','/appitizer/appitizer4.jpg','/appitizer/appitizer4.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p05','5','appitizer5','appitizer',199,'g01','/appitizer/appitizer5.jpg','/appitizer/appitizer5.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p06','6','appitizer6','appitizer',199,'g01','/appitizer/appitizer6.jpg','/appitizer/appitizer6.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p07','7','appitizer7','appitizer',199,'g01','/appitizer/appitizer7.jpg','/appitizer/appitizer7.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p08','8','appitizer8','appitizer',199,'g01','/appitizer/appitizer8.jpg','/appitizer/appitizer8.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p09','9','appitizer9','appitizer',199,'g01','/appitizer/appitizer9.jpg','/appitizer/appitizer9.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p10','10','appitizer10','appitizer',199,'g01','/appitizer/appitizer10.jpg','/appitizer/appitizer10.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p100','100','yourway','yourway',199,'g15','/yourway/yourway25.jpg','/yourway/yourway25.jpg','Y',NULL,'Y','2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p11','11','appitizer11','appitizer',199,'g01','/appitizer/appitizer11.jpg','/appitizer/appitizer11.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p12','12','appitizer12','appitizer',199,'g01','/appitizer/appitizer12.jpg','/appitizer/appitizer12.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p13','13','appitizer13','appitizer',199,'g01','/appitizer/appitizer13.jpg','/appitizer/appitizer13.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p14','14','appitizer14','appitizer',199,'g01','/appitizer/appitizer14.jpg','/appitizer/appitizer14.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p15','15','appitizer15','appitizer',199,'g01','/appitizer/appitizer15.jpg','/appitizer/appitizer15.jpg','Y',NULL,NULL,'2020-02-19 15:29:06.0','2020-02-19 15:29:06.0','N')
,('p16','16','beef1','beef',199,'g02','/beef/beef1.jpg','/beef/beef1.jpg','Y',NULL,NULL,'2020-02-19 16:27:46.0','2020-02-19 16:27:46.0','N')
,('p17','17','beef2','beef',199,'g02','/beef/beef2.jpg','/beef/beef2.jpg','Y',NULL,NULL,'2020-02-19 16:27:46.0','2020-02-19 16:27:46.0','N')
,('p18','18','beef3','beef',199,'g02','/beef/beef3.jpg','/beef/beef3.jpg','Y',NULL,NULL,'2020-02-19 16:27:46.0','2020-02-19 16:27:46.0','N')
,('p19','19','beverage','beverage',159,'g03','/beverage/beverage1.jpg','/beverage/beverage1.jpg','Y',NULL,NULL,'2020-02-19 16:11:51.0','2020-02-19 16:11:51.0','N')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p20','20','beverage','beverage',169,'g03','/beverage/beverage2.jpg','/beverage/beverage2.jpg','Y',NULL,NULL,'2020-02-19 16:11:51.0','2020-02-19 16:11:51.0','N')
,('p21','21','burger','burger',199,'g04','/burger/burger1.jpg','/burger/burger1.jpg','Y',NULL,NULL,'2020-02-19 16:23:01.0','2020-02-19 16:23:01.0','N')
,('p22','22','burger','burger',199,'g04','/burger/burger2.jpg','/burger/burger2.jpg','Y',NULL,'Y','2020-02-19 16:23:01.0','2020-02-19 16:23:01.0','N')
,('p23','23','burger','burger',199,'g04','/burger/burger3.jpg','/burger/burger3.jpg','Y',NULL,NULL,'2020-02-19 16:23:01.0','2020-02-19 16:23:01.0','N')
,('p24','24','burger','burger',199,'g04','/burger/burger4.jpg','/burger/burger4.jpg','Y',NULL,NULL,'2020-02-19 16:23:01.0','2020-02-19 16:23:01.0','N')
,('p25','25','burger','burger',199,'g04','/burger/burger5.jpg','/burger/burger5.jpg','Y',NULL,NULL,'2020-02-19 16:23:01.0','2020-02-19 16:23:01.0','N')
,('p26','26','burger','burger',199,'g04','/burger/burger6.jpg','/burger/burger6.jpg','Y',NULL,NULL,'2020-02-19 16:23:01.0','2020-02-19 16:23:01.0','N')
,('p27','27','chicken','chicken',199,'g05','/chicken/chicken1.jpg','/chicken/chicken1.jpg','Y',NULL,NULL,'2020-02-19 16:42:12.0','2020-02-19 16:42:12.0','N')
,('p28','28','chicken','chicken',199,'g05','/chicken/chicken2.jpg','/chicken/chicken2.jpg','Y',NULL,NULL,'2020-02-19 16:42:12.0','2020-02-19 16:42:12.0','N')
,('p29','29','chicken','chicken',199,'g05','/chicken/chicken3.jpg','/chicken/chicken3.jpg','Y',NULL,NULL,'2020-02-19 16:42:12.0','2020-02-19 16:42:12.0','N')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p30','30','chicken','chicken',199,'g05','/chicken/chicken4.jpg','/chicken/chicken4.jpg','Y',NULL,NULL,'2020-02-19 16:42:12.0','2020-02-19 16:42:12.0','N')
,('p31','31','chicken','chicken',199,'g05','/chicken/chicken5.jpg','/chicken/chicken5.jpg','Y',NULL,NULL,'2020-02-19 16:42:12.0','2020-02-19 16:42:12.0','N')
,('p32','32','chicken','chicken',199,'g05','/chicken/chicken6.jpg','/chicken/chicken6.jpg','Y',NULL,NULL,'2020-02-19 16:42:12.0','2020-02-19 16:42:12.0','N')
,('p33','33','delivery','delivery',199,'g06','/delivery/delivery1.jpg','/delivery/delivery1.jpg','Y',NULL,NULL,'2020-02-19 16:43:27.0','2020-02-19 16:43:27.0','N')
,('p34','34','delivery','delivery',199,'g06','/delivery/delivery2.jpg','/delivery/delivery2.jpg','Y',NULL,NULL,'2020-02-19 16:43:27.0','2020-02-19 16:43:27.0','N')
,('p35','35','dessert','dessert',199,'g07','/dessert/dessert1.jpg','/dessert/dessert1.jpg','Y',NULL,NULL,'2020-02-19 16:44:44.0','2020-02-19 16:44:44.0','N')
,('p36','36','dessert','dessert',199,'g07','/dessert/dessert2.jpg','/dessert/dessert2.jpg','Y',NULL,NULL,'2020-02-19 16:44:44.0','2020-02-19 16:44:44.0','N')
,('p37','37','dessert','dessert',199,'g07','/dessert/dessert3.jpg','/dessert/dessert3.jpg','Y',NULL,NULL,'2020-02-19 16:44:44.0','2020-02-19 16:44:44.0','N')
,('p38','38','dessert','dessert',199,'g07','/dessert/dessert4.jpg','/dessert/dessert4.jpg','Y',NULL,NULL,'2020-02-19 16:44:44.0','2020-02-19 16:44:44.0','N')
,('p39','39','fish','fish',199,'g08','/fish/fish1.jpg','/fish/fish1.jpg','Y',NULL,NULL,'2020-02-19 16:46:08.0','2020-02-19 16:46:08.0','N')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p40','40','fish','fish',199,'g08','/fish/fish2.jpg','/fish/fish2.jpg','Y',NULL,NULL,'2020-02-19 16:46:08.0','2020-02-19 16:46:08.0','N')
,('p41','41','fish','fish',199,'g08','/fish/fish3.jpg','/fish/fish3.jpg','Y',NULL,NULL,'2020-02-19 16:46:08.0','2020-02-19 16:46:08.0','N')
,('p42','42','fish','fish',199,'g08','/fish/fish4.jpg','/fish/fish4.jpg','Y',NULL,NULL,'2020-02-19 16:46:08.0','2020-02-19 16:46:08.0','N')
,('p43','43','fish','fish',199,'g08','/fish/fish5.jpg','/fish/fish5.jpg','Y',NULL,NULL,'2020-02-19 16:46:08.0','2020-02-19 16:46:08.0','N')
,('p44','44','kids','kids',199,'g09','/kids/kids1.jpg','/kids/kids1.jpg','Y',NULL,NULL,'2020-02-19 16:47:14.0','2020-02-19 16:47:14.0','N')
,('p45','45','kids','kids',199,'g09','/kids/kids2.jpg','/kids/kids2.jpg','Y',NULL,NULL,'2020-02-19 16:47:14.0','2020-02-19 16:47:14.0','N')
,('p46','46','kids','kids',199,'g09','/kids/kids3.jpg','/kids/kids3.jpg','Y',NULL,NULL,'2020-02-19 16:47:14.0','2020-02-19 16:47:14.0','N')
,('p47','47','pork','pork',199,'g10','/pork/pork1.jpg','/pork/pork1.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p48','48','pork','pork',199,'g10','/pork/pork2.jpg','/pork/pork2.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p49','49','pork','pork',199,'g10','/pork/pork3.jpg','/pork/pork3.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p50','50','pork','pork',199,'g10','/pork/pork4.jpg','/pork/pork4.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p51','51','pork','pork',199,'g10','/pork/pork5.jpg','/pork/pork5.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p52','52','pork','pork',199,'g10','/pork/pork6.jpg','/pork/pork6.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p53','53','pork','pork',199,'g10','/pork/pork7.jpg','/pork/pork7.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p54','54','pork','pork',199,'g10','/pork/pork8.jpg','/pork/pork8.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p55','55','pork','pork',199,'g10','/pork/pork9.jpg','/pork/pork9.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p56','56','pork','pork',199,'g10','/pork/pork10.jpg','/pork/pork10.jpg','Y',NULL,NULL,'2020-02-19 16:49:14.0','2020-02-19 16:49:14.0','N')
,('p57','57','premiumsteak','premiumsteak',199,'g11','/premiumsteak/premiumsteak1.jpg','/premiumsteak/premiumsteak1.jpg','Y',NULL,NULL,'2020-02-19 16:50:39.0','2020-02-19 16:50:39.0','N')
,('p58','58','premiumsteak','premiumsteak',199,'g11','/premiumsteak/premiumsteak2.jpg','/premiumsteak/premiumsteak2.jpg','Y',NULL,NULL,'2020-02-19 16:50:39.0','2020-02-19 16:50:39.0','N')
,('p59','59','premiumsteak','premiumsteak',199,'g11','/premiumsteak/premiumsteak3.jpg','/premiumsteak/premiumsteak3.jpg','Y',NULL,NULL,'2020-02-19 16:50:39.0','2020-02-19 16:50:39.0','N')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p60','60','premiumsteak','premiumsteak',199,'g11','/premiumsteak/premiumsteak4.jpg','/premiumsteak/premiumsteak4.jpg','Y',NULL,NULL,'2020-02-19 16:50:39.0','2020-02-19 16:50:39.0','N')
,('p61','61','premiumsteak','premiumsteak',199,'g11','/premiumsteak/premiumsteak5.jpg','/premiumsteak/premiumsteak5.jpg','Y',NULL,NULL,'2020-02-19 16:50:39.0','2020-02-19 16:50:39.0','N')
,('p62','62','premiumsteak','premiumsteak',199,'g11','/premiumsteak/premiumsteak6.jpg','/premiumsteak/premiumsteak6.jpg','Y',NULL,NULL,'2020-02-19 16:50:39.0','2020-02-19 16:50:39.0','N')
,('p63','63','salad','salad',199,'g12','/salad/salad1.jpg','/salad/salad1.jpg','Y',NULL,NULL,'2020-02-19 16:51:52.0','2020-02-19 16:51:52.0','N')
,('p64','64','salad','salad',199,'g12','/salad/salad2.jpg','/salad/salad2.jpg','Y',NULL,NULL,'2020-02-19 16:51:52.0','2020-02-19 16:51:52.0','N')
,('p65','65','salad','salad',199,'g12','/salad/salad3.jpg','/salad/salad3.jpg','Y',NULL,NULL,'2020-02-19 16:51:52.0','2020-02-19 16:51:52.0','N')
,('p66','66','salad','salad',199,'g12','/salad/salad4.jpg','/salad/salad4.jpg','Y',NULL,NULL,'2020-02-19 16:51:52.0','2020-02-19 16:51:52.0','N')
,('p67','67','soup','soup',199,'g13','/soup/soup1.jpg','/soup/soup1.jpg','Y',NULL,NULL,'2020-02-19 16:53:16.0','2020-02-19 16:53:16.0','N')
,('p68','68','soup','soup',199,'g13','/soup/soup2.jpg','/soup/soup2.jpg','Y',NULL,NULL,'2020-02-19 16:53:16.0','2020-02-19 16:53:16.0','N')
,('p69','69','soup','soup',199,'g13','/soup/soup3.jpg','/soup/soup3.jpg','Y',NULL,NULL,'2020-02-19 16:53:16.0','2020-02-19 16:53:16.0','N')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p70','70','soup','soup',199,'g13','/soup/soup4.jpg','/soup/soup4.jpg','Y',NULL,NULL,'2020-02-19 16:53:16.0','2020-02-19 16:53:16.0','N')
,('p71','71','soup','soup',199,'g13','/soup/soup5.jpg','/soup/soup5.jpg','Y',NULL,NULL,'2020-02-19 16:53:16.0','2020-02-19 16:53:16.0','N')
,('p72','72','spaghetti','spaghetti',199,'g14','/spaghetti/spaghetti1.jpg','/spaghetti/spaghetti1.jpg','Y',NULL,NULL,'2020-02-19 16:54:17.0','2020-02-19 16:54:17.0','N')
,('p73','73','spaghetti','spaghetti',199,'g14','/spaghetti/spaghetti2.jpg','/spaghetti/spaghetti2.jpg','Y',NULL,'Y','2020-02-19 16:54:17.0','2020-02-19 16:54:17.0','N')
,('p74','74','spaghetti','spaghetti',199,'g14','/spaghetti/spaghetti3.jpg','/spaghetti/spaghetti3.jpg','Y',NULL,NULL,'2020-02-19 16:54:17.0','2020-02-19 16:54:17.0','N')
,('p75','75','spaghetti','spaghetti',199,'g14','/spaghetti/spaghetti4.jpg','/spaghetti/spaghetti4.jpg','Y',NULL,NULL,'2020-02-19 16:54:17.0','2020-02-19 16:54:17.0','N')
,('p76','76','yourway','yourway',199,'g15','/yourway/yourway1.jpg','/yourway/yourway1.jpg','Y',NULL,'Y','2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p77','77','yourway','yourway',199,'g15','/yourway/yourway2.jpg','/yourway/yourway2.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p78','78','yourway','yourway',199,'g15','/yourway/yourway3.jpg','/yourway/yourway3.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p79','79','yourway','yourway',199,'g15','/yourway/yourway4.jpg','/yourway/yourway4.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p80','80','yourway','yourway',199,'g15','/yourway/yourway5.jpg','/yourway/yourway5.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p81','81','yourway','yourway',199,'g15','/yourway/yourway6.jpg','/yourway/yourway6.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p82','82','yourway','yourway',199,'g15','/yourway/yourway7.jpg','/yourway/yourway7.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p83','83','yourway','yourway',199,'g15','/yourway/yourway8.jpg','/yourway/yourway8.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p84','84','yourway','yourway',199,'g15','/yourway/yourway9.jpg','/yourway/yourway9.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p85','85','yourway','yourway',199,'g15','/yourway/yourway10.jpg','/yourway/yourway10.jpg','Y',NULL,NULL,'2020-02-19 16:57:47.0','2020-02-19 16:57:47.0','Y')
,('p86','86','yourway','yourway',199,'g15','/yourway/yourway11.jpg','/yourway/yourway11.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p87','87','yourway','yourway',199,'g15','/yourway/yourway12.jpg','/yourway/yourway12.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p88','88','yourway','yourway',199,'g15','/yourway/yourway13.jpg','/yourway/yourway13.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p89','89','yourway','yourway',199,'g15','/yourway/yourway14.jpg','/yourway/yourway14.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
;
INSERT INTO pos_takeorder.product_menu (code,code_key,name,description,price,group_code,img_url,img_url_thumbnail,status,star_count,show_recommend,created_at,updated_at,show_sublist) VALUES 
('p90','90','yourway','yourway',199,'g15','/yourway/yourway15.jpg','/yourway/yourway15.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p91','91','yourway','yourway',199,'g15','/yourway/yourway16.jpg','/yourway/yourway16.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p92','92','yourway','yourway',199,'g15','/yourway/yourway17.jpg','/yourway/yourway17.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p93','93','yourway','yourway',199,'g15','/yourway/yourway18.jpg','/yourway/yourway18.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p94','94','yourway','yourway',199,'g15','/yourway/yourway19.jpg','/yourway/yourway19.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p95','95','yourway','yourway',199,'g15','/yourway/yourway20.jpg','/yourway/yourway20.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p96','96','yourway','yourway',199,'g15','/yourway/yourway21.jpg','/yourway/yourway21.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p97','97','yourway','yourway',199,'g15','/yourway/yourway22.jpg','/yourway/yourway22.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p98','98','yourway','yourway',199,'g15','/yourway/yourway23.jpg','/yourway/yourway23.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
,('p99','99','yourway','yourway',199,'g15','/yourway/yourway24.jpg','/yourway/yourway24.jpg','Y',NULL,NULL,'2020-02-19 16:57:48.0','2020-02-19 16:57:48.0','Y')
;
