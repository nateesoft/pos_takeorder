CREATE TABLE `employ` (
  `Code` varchar(6) NOT NULL DEFAULT '',
  `Name` varchar(40) NOT NULL DEFAULT '',
  `Salary` float(10,2) NOT NULL DEFAULT '0.00',
  `Position` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`Code`)
);

CREATE TABLE `tablefile` (
  `Tcode` varchar(15) NOT NULL DEFAULT '',
  `SoneCode` char(3) NOT NULL DEFAULT 'N',
  `TLoginDate` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `Cashier` char(3) DEFAULT NULL,
  `TLoginTime` varchar(10) DEFAULT NULL,
  `TCurTime` varchar(10) DEFAULT '',
  `TCustomer` int(10) unsigned NOT NULL DEFAULT '0',
  `TItem` int(10) unsigned NOT NULL DEFAULT '0',
  `TAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `TOnAct` char(1) NOT NULL DEFAULT 'N',
  `Service` float(10,2) NOT NULL DEFAULT '0.00',
  `ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `EmpDisc` varchar(8) DEFAULT NULL,
  `EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `FastDisc` varchar(8) DEFAULT NULL,
  `FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `TrainDisc` varchar(8) DEFAULT NULL,
  `TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemDisc` varchar(8) DEFAULT '',
  `MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SubDisc` varchar(8) DEFAULT '',
  `SubDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `DiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemCode` varchar(20) DEFAULT '',
  `MemCurAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemName` varchar(40) DEFAULT '',
  `MemBegin` date DEFAULT '2020-01-01',
  `MemEnd` date DEFAULT '2020-01-01',
  `Food` float(10,2) NOT NULL DEFAULT '0.00',
  `Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `Product` float(10,2) NOT NULL DEFAULT '0.00',
  `NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintChkBill` char(1) NOT NULL DEFAULT 'N',
  `PrintCnt` int(10) unsigned NOT NULL DEFAULT '0',
  `PrintTime1` varchar(10) DEFAULT NULL,
  `PrintTime2` varchar(10) DEFAULT '',
  `ChkBill` char(1) NOT NULL DEFAULT 'N',
  `ChkBillTime` time NOT NULL DEFAULT '00:00:00',
  `StkCode1` char(3) NOT NULL DEFAULT 'N',
  `StkCode2` char(3) NOT NULL DEFAULT 'N',
  `TDesk` int(5) unsigned NOT NULL DEFAULT '0',
  `TUser` varchar(5) DEFAULT NULL,
  `VoidMsg` varchar(250) DEFAULT NULL,
  `TPause` char(1) DEFAULT NULL,
  `CCUseCode` varchar(20) DEFAULT NULL,
  `CCUseAmt` float(10,2) DEFAULT NULL,
  PRIMARY KEY (`Tcode`)
);

INSERT INTO pos_softpos.tablefile (Tcode,SoneCode,TLoginDate,MacNo,Cashier,TLoginTime,TCurTime,TCustomer,TItem,TAmount,TOnAct,Service,ServiceAmt,EmpDisc,EmpDiscAmt,FastDisc,FastDiscAmt,TrainDisc,TrainDiscAmt,MemDisc,MemDiscAmt,SubDisc,SubDiscAmt,DiscBath,ProDiscAmt,SpaDiscAmt,CuponDiscAmt,ItemDiscAmt,MemCode,MemCurAmt,MemName,MemBegin,MemEnd,Food,Drink,Product,NetTotal,PrintTotal,PrintChkBill,PrintCnt,PrintTime1,PrintTime2,ChkBill,ChkBillTime,StkCode1,StkCode2,TDesk,TUser,VoidMsg,TPause,CCUseCode,CCUseAmt) VALUES 
('A10','A',NULL,'','','00:00:00','00:00',0,0,0,'N',0,0,'',0,'',0,'',0,'',0,'',0,0,0,0,0,0,'',0,'','2020-02-26','2020-02-26',0,0,0,0,0,'N',0,'','','N','00:00:00','','',0,'9',NULL,'',NULL,NULL)
,('A1-1-1','A','2018-01-16',NULL,NULL,'13:21:53','00:00',0,0,0,'N',0,0,'',0,'',0,'',0,'',0,'',0,0,0,0,0,0,'',0,'','2020-02-26','2020-02-26',0,0,0,0,0,'N',0,NULL,'','N','00:00:00','','',0,NULL,NULL,NULL,NULL,NULL)
,('A1-1','A','2020-02-10',NULL,NULL,'20:00:11','00:00',0,0,0,'N',0,0,'',0,'',0,'',0,'',0,'',0,0,0,0,0,0,'',0,'','2020-02-26','2020-02-26',0,0,0,0,0,'N',0,NULL,'','N','00:00:00','','',0,NULL,NULL,NULL,NULL,NULL)
,('A1','A','2020-02-25','','','00:00:00','00:00',0,0,0,'N',0,0,'',0,'',0,'',0,'',0,'',0,0,0,0,0,0,'',0,'','2020-02-26','2020-02-26',0,0,0,0,0,'N',0,'','','N','00:00:00','','',0,'',NULL,'N',NULL,NULL)
,(' B6','B','2019-01-24','','','00:00:00','00:00',0,0,0,'N',0,0,'',0,'',0,'',0,'',0,'',0,0,0,0,0,0,'',0,'','2020-02-26','2020-02-26',0,0,0,0,0,'N',0,'','','N','00:00:00','','',0,'',NULL,'N',NULL,NULL)
;