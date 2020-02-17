CREATE TABLE `bill` (
  `bill_no` varchar(10) NOT NULL,
  `order_no` varchar(10) NOT NULL,
  `table_code` varchar(3) NOT NULL,
  `emp_code` varchar(20) NOT NULL,
  `cust_count` int(2) NOT NULL,
  `item_count` int(2) NOT NULL,
  `total_amount` float NOT NULL,
  `status` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`bill_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `bill_detail` (
  `index` varchar(20) NOT NULL,
  `bill_no` varchar(100) DEFAULT NULL,
  `order_no` varchar(10) NOT NULL,
  `menu_code` varchar(20) DEFAULT NULL,
  `menu_name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `qty` int(2) NOT NULL,
  `total_amount` float NOT NULL,
  `status` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `group_menu` (
  `code` varchar(3) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `status` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `login` (
  `emp_code` varchar(20) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `active` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `open_table` (
  `code` varchar(3) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `zone` varchar(20) DEFAULT NULL,
  `reserve_status` varchar(1) DEFAULT NULL,
  `max_customer` int(2) DEFAULT NULL,
  `available_customer` int(2) DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `orders` (
  `order_no` varchar(10) NOT NULL,
  `table_code` varchar(3) DEFAULT NULL,
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
  `order_no` varchar(10) NOT NULL,
  `menu_code` varchar(20) NOT NULL,
  `menu_name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `qty` int(2) NOT NULL,
  `total_amount` float NOT NULL,
  `status` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `product_menu` (
  `code` varchar(10) NOT NULL,
  `code_key` varchar(5) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `group_code` varchar(3) NOT NULL,
  `img_url` varchar(100) DEFAULT NULL,
  `img_url_thumbnail` varchar(100) DEFAULT NULL,
  `status` varchar(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
