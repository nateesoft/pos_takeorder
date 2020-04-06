CREATE TABLE IF NOT EXISTS `employ` (
  `Code` varchar(6) NOT NULL DEFAULT '',
  `Name` varchar(40) NOT NULL DEFAULT '',
  `Salary` float(10,2) NOT NULL DEFAULT '0.00',
  `Position` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`Code`)
);

CREATE TABLE IF NOT EXISTS `tablefile` (
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

CREATE TABLE IF NOT EXISTS balance (
  R_Index varchar(10) NOT NULL DEFAULT '0' ,
  R_Table varchar(15) NOT NULL DEFAULT '' ,
  R_Date date ,
  R_Time varchar(10) ,
  Macno char(3) ,
  Cashier varchar(6) ,
  R_Emp varchar(6) ,
  R_PluCode varchar(13) NOT NULL DEFAULT '' ,
  R_PName varchar(70) ,
  R_Unit varchar(10) ,
  R_Group varchar(4) ,
  R_Status char(1) ,
  R_Normal char(1) ,
  R_Discount char(1) ,
  R_Service char(1) ,
  R_Stock char(1) ,
  R_Set char(1) ,
  R_Vat char(1) ,
  R_Type char(1) ,
  R_ETD char(1) ,
  R_Quan float(10,3) NOT NULL DEFAULT '0.000' ,
  R_Price float(10,2) NOT NULL DEFAULT '0.00' ,
  R_Total float(10,2) NOT NULL DEFAULT '0.00' ,
  R_PEName varchar(150) ,
  R_PrType char(2) ,
  R_PrCode char(3) ,
  R_PrDisc float(10,6) ,
  R_PrBath float(10,2) NOT NULL DEFAULT '0.00' ,
  R_PrAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  R_DiscBath float(12,6) NOT NULL DEFAULT '0.000000' ,
  R_PrCuType char(2) ,
  R_PrCuQuan float(10,0) NOT NULL DEFAULT '0' ,
  R_PrCuAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  R_Redule float(10,2) NOT NULL DEFAULT '0.00' ,
  R_Kic char(1) ,
  R_KicPrint char(1) ,
  R_Void char(1) ,
  R_VoidUser varchar(10) ,
  R_VoidTime varchar(10) ,
  FieldName tinyint(30) unsigned ,
  R_Opt1 varchar(30) ,
  R_Opt2 varchar(30) ,
  R_Opt3 varchar(30) ,
  R_Opt4 varchar(30) ,
  R_Opt5 varchar(30) ,
  R_Opt6 varchar(30) ,
  R_Opt7 varchar(30) ,
  R_Opt8 varchar(30) ,
  R_Opt9 varchar(30) ,
  R_PrCuCode char(3) ,
  R_Serve char(1) NOT NULL DEFAULT 'N' ,
  R_PrintOK char(1) NOT NULL DEFAULT 'N' ,
  R_KicOK char(1) NOT NULL DEFAULT 'N' ,
  StkCode char(3) NOT NULL DEFAULT '' ,
  PosStk char(1) NOT NULL DEFAULT 'Y' ,
  R_PrChkType char(1) ,
  R_PrQuan float(10,2) ,
  R_PrSubType char(2) ,
  R_PrSubCode char(3) ,
  R_PrSubQuan float(10,2) ,
  R_PrSubDisc float(10,6) ,
  R_PrSubBath float(10,2) ,
  R_PrSubAmt float(10,2) ,
  R_PrSubAdj float(10,2) ,
  R_PrCuDisc float(10,6) ,
  R_PrCuBath float(10,2) ,
  R_PrCuAdj float(10,2) ,
  R_QuanCanDisc float(10,2) ,
  R_Order char(1) NOT NULL DEFAULT '0' ,
  R_PItemNo int(10) unsigned NOT NULL DEFAULT '0' ,
  R_PKicQue int(10) unsigned NOT NULL DEFAULT '0' ,
  R_MemSum char(1) NOT NULL DEFAULT 'N' ,
  R_PrVcType varchar(2) ,
  R_PrVcCode varchar(20) ,
  R_PrVcAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  R_PrVcAdj float(10,4) NOT NULL DEFAULT '0.0000' ,
  R_VoidQuan float(10,2) NOT NULL DEFAULT '0.00' ,
  R_MoveFlag char(1) NOT NULL DEFAULT '0' ,
  R_MovePrint char(1) NOT NULL DEFAULT 'N' ,
  R_Pause char(1) NOT NULL DEFAULT '' ,
  R_SPIndex varchar(16) NOT NULL DEFAULT '' ,
  R_LinkIndex varchar(16) ,
  R_VoidPause char(1) ,
  R_MoveItem char(1) ,
  R_MoveFrom varchar(20) ,
  R_MoveUser varchar(10) ,
  VoidMsg varchar(30) ,
  R_PrintItemBill char(1) ,
  R_CountTime char(1) ,
  SoneCode varchar(100) ,
  R_Earn char(1) NOT NULL DEFAULT 'N' ,
  R_EarnNo varchar(15) ,
  PDAPrintCheck char(1) DEFAULT 'N' ,
  R_ServiceAmt float(13,2) 
);

CREATE TABLE IF NOT EXISTS stcard (
  S_Date date NOT NULL DEFAULT '2020-01-01' ,
  S_No varchar(15) ,
  S_SubNo varchar(15) ,
  S_Que int(3) unsigned NOT NULL DEFAULT '0' ,
  S_PCode varchar(13) NOT NULL DEFAULT '' ,
  S_Stk char(3) NOT NULL DEFAULT '' ,
  S_In float(10,3) NOT NULL DEFAULT '0.000' ,
  S_Out float(10,3) NOT NULL DEFAULT '0.000' ,
  S_InCost float(10,2) ,
  S_OutCost float(10,2) ,
  S_ACost float(10,2) ,
  S_Rem varchar(5) NOT NULL DEFAULT '' ,
  S_User varchar(6) NOT NULL DEFAULT '' ,
  S_EntryDate date NOT NULL DEFAULT '2020-01-01' ,
  S_EntryTime varchar(10) NOT NULL DEFAULT '' ,
  S_Link varchar(80) 
);

CREATE TABLE IF NOT EXISTS product (
  PCode varchar(13) NOT NULL DEFAULT '' ,
  PFix char(1) NOT NULL DEFAULT 'F' ,
  PReferent varchar(15) DEFAULT '' ,
  PAccNo varchar(10) DEFAULT '' ,
  PGroup varchar(4) NOT NULL DEFAULT '' ,
  PVender varchar(4) NOT NULL DEFAULT '' ,
  PType char(1) NOT NULL DEFAULT '1' ,
  PNormal char(1) NOT NULL DEFAULT 'C' ,
  PRemark varchar(50) ,
  PDiscount char(1) NOT NULL DEFAULT 'Y' ,
  PService char(1) NOT NULL DEFAULT 'Y' ,
  PStatus char(1) NOT NULL DEFAULT 'P' ,
  PStock char(1) NOT NULL DEFAULT 'Y' ,
  PSet char(1) NOT NULL DEFAULT 'N' ,
  PVat char(1) NOT NULL DEFAULT 'V' ,
  PDesc varchar(200) ,
  PUnit1 varchar(10) DEFAULT '' ,
  PPack1 int(11) DEFAULT '0' ,
  PArea varchar(15) DEFAULT '' ,
  PKic char(1) ,
  PPrice11 float(13,2) NOT NULL DEFAULT '0.00' ,
  PPrice12 float(13,2) NOT NULL DEFAULT '0.00' ,
  PPrice13 float(13,2) NOT NULL DEFAULT '0.00' ,
  PPrice14 float(13,2) NOT NULL DEFAULT '0.00' ,
  PPrice15 float(13,2) NOT NULL DEFAULT '0.00' ,
  PPromotion1 char(3) DEFAULT '' ,
  PPromotion2 char(3) DEFAULT '' ,
  PPromotion3 char(3) NOT NULL DEFAULT '' ,
  PMax float(13,4) NOT NULL DEFAULT '0.0000' ,
  PMin float(13,4) NOT NULL DEFAULT '0.0000' ,
  PBUnit varchar(10) DEFAULT '' ,
  PBPack float(13,4) DEFAULT '0.0000' ,
  PLCost float(13,4) NOT NULL DEFAULT '0.0000' ,
  PSCost float(13,4) NOT NULL DEFAULT '0.0000' ,
  PACost float(13,4) NOT NULL DEFAULT '0.0000' ,
  PLink1 varchar(13) DEFAULT '' ,
  PLink2 varchar(13) DEFAULT '' ,
  PLastUpdate date DEFAULT '2020-01-01' ,
  PLastTime time DEFAULT '00:00:00' ,
  PUserUpdate varchar(6) DEFAULT '' ,
  PLastSale date ,
  PBarCode varchar(13) ,
  PActive char(1) NOT NULL DEFAULT 'Y' ,
  PSPVat char(1) NOT NULL DEFAULT 'N' ,
  PSPVatAmt float(13,2) NOT NULL DEFAULT '0.00' ,
  POSStk char(1) NOT NULL DEFAULT '0' ,
  MSStk char(3) NOT NULL DEFAULT '' ,
  PTimeCharge float(10,2) NOT NULL DEFAULT '0.00' ,
  POrder char(1) NOT NULL DEFAULT '0' ,
  PFoodType char(1) NOT NULL DEFAULT '0' ,
  PChkDate date NOT NULL DEFAULT '2020-01-01' ,
  PPackOld int(3) unsigned NOT NULL DEFAULT '0' ,
  PselectItem varchar(10) ,
  PSelectNum int(10) ,
  PSelectShow char(1) NOT NULL DEFAULT 'N' ,
  PYield float(10,2) DEFAULT '100.00' ,
  PShowOption varchar(1) ,
  PDesc2 varchar(200) ,
  PSelectAllProduct char(1) NOT NULL DEFAULT 'N' ,
  PAddOptionName char(1) NOT NULL DEFAULT 'N' ,
  PAutoShowOption char(1) NOT NULL DEFAULT 'N' ,
  PPrintOption char(1) NOT NULL DEFAULT 'N' ,
  PPrintItemBill char(1) NOT NULL DEFAULT 'Y' ,
  PCountTime char(1) NOT NULL DEFAULT 'N' ,
  PCCActive char(1) NOT NULL DEFAULT 'N' ,
  PCCTopupAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  PCCActiveDay int(6) unsigned NOT NULL DEFAULT '0' ,
  PCCStartTime time DEFAULT '00:00:00' ,
  PCCEndTime time DEFAULT '00:00:00' ,
  PCCDateSelect int(1) unsigned NOT NULL DEFAULT '0' ,
  PCCStartDate date NOT NULL DEFAULT '2020-01-01' ,
  PCCEndDate date NOT NULL DEFAULT '2020-01-01' ,
  PEDesc varchar(150) ,
  PRIMARY KEY (PCode),
  UNIQUE KEY Porduct_PCode (PCode)
);

CREATE TABLE IF NOT EXISTS billno (
  B_Refno varchar(8) NOT NULL DEFAULT '0' ,
  B_CuponDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Ontime varchar(10) ,
  B_LoginTime varchar(10) ,
  B_OnDate date ,
  B_PostDate date ,
  B_Table varchar(5) ,
  B_MacNo char(3) NOT NULL DEFAULT '' ,
  B_Cashier varchar(6) NOT NULL DEFAULT '' ,
  B_Cust int(10) unsigned NOT NULL DEFAULT '0' ,
  B_ETD char(1) NOT NULL DEFAULT '' ,
  B_Total float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Food float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Drink float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Product float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Service float(10,2) NOT NULL DEFAULT '0.00' ,
  B_ServiceAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_ItemDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_FastDisc varchar(8) ,
  B_FastDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_EmpDisc varchar(8) ,
  B_EmpDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_TrainDisc varchar(8) ,
  B_TrainDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_MemDisc varchar(8) ,
  B_MemDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_SubDisc varchar(8) ,
  B_SubDiscAmt float(10,2) DEFAULT '0.00' ,
  B_SubDiscBath float(10,2) NOT NULL DEFAULT '0.00' ,
  B_ProDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_SpaDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_AdjAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_PreDisAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_NetTotal float(10,2) NOT NULL DEFAULT '0.00' ,
  B_NetFood float(10,2) NOT NULL DEFAULT '0.00' ,
  B_NetDrink float(10,2) NOT NULL DEFAULT '0.00' ,
  B_NetProduct float(10,2) NOT NULL DEFAULT '0.00' ,
  B_NetVat float(10,2) NOT NULL DEFAULT '0.00' ,
  B_NetNonVat float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Vat float(10,2) NOT NULL DEFAULT '0.00' ,
  B_PayAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Cash float(10,2) NOT NULL DEFAULT '0.00' ,
  B_GiftVoucher float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Earnest float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Ton float(10,2) NOT NULL DEFAULT '0.00' ,
  B_CrCode1 varchar(20) ,
  B_CardNo1 varchar(20) ,
  B_AppCode1 varchar(6) ,
  B_CrCharge1 float(10,2) NOT NULL DEFAULT '0.00' ,
  B_CrChargeAmt1 float(10,2) NOT NULL DEFAULT '0.00' ,
  B_CrAmt1 float(10,2) NOT NULL DEFAULT '0.00' ,
  B_AccrCode varchar(10) ,
  B_AccrAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_AccrCr int(10) unsigned NOT NULL DEFAULT '0' ,
  B_MemCode varchar(20) ,
  B_MemName varchar(40) ,
  B_MemBegin date ,
  B_MemEnd date ,
  B_MemCurSum float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Void char(1) NOT NULL DEFAULT '-' ,
  B_VoidUser varchar(6) ,
  B_VoidTime varchar(10) ,
  B_BillCopy int(10) NOT NULL DEFAULT '0' ,
  B_PrnCnt int(10) unsigned NOT NULL DEFAULT '0' ,
  B_PrnTime1 varchar(10) ,
  B_PrnTime2 varchar(10) ,
  B_InvNo varchar(12) ,
  B_InvType char(1) ,
  B_Bran char(3) ,
  B_BranName varchar(30) ,
  B_Tel varchar(30) ,
  B_RecTime varchar(10) ,
  MStamp varchar(20) ,
  MScore varchar(20) ,
  CurStamp varchar(20) ,
  StampRate varchar(20) ,
  B_ChkBill char(1) NOT NULL DEFAULT 'N' ,
  B_ChkBillTime time NOT NULL DEFAULT '00:00:00' ,
  B_CashTime time NOT NULL DEFAULT '00:00:00' ,
  B_WaitTime time NOT NULL DEFAULT '00:00:00' ,
  B_SumScore float(10,0) NOT NULL DEFAULT '0' ,
  B_CrBank char(3) ,
  B_CrCardAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_CrCurPoint float(10,2) NOT NULL DEFAULT '0.00' ,
  B_CrSumPoint float(10,2) NOT NULL DEFAULT '0.00' ,
  B_Entertain float(10,2) NOT NULL DEFAULT '0.00' ,
  B_VoucherDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_VoucherOver float(10,2) NOT NULL DEFAULT '0.00' ,
  B_NetDiff float(10,2) NOT NULL DEFAULT '0.00' ,
  B_SumSetDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  B_DetailFood float(10,2) NOT NULL DEFAULT '0.00' ,
  B_DetailDrink float(10,2) NOT NULL DEFAULT '0.00' ,
  B_DetailProduct float(10,2) NOT NULL DEFAULT '0.00' ,
  B_KicQue varchar(5) DEFAULT ' ' ,
  B_ROUNDCLOSE char(1) DEFAULT 'N' ,
  R_Opt9 varchar(40) ,
  R_Opt1 varchar(40) ,
  R_Opt2 varchar(40) ,
  R_Opt3 varchar(40) ,
  R_Opt4 varchar(40) ,
  R_Opt5 varchar(40) ,
  R_Opt6 varchar(40) ,
  R_Opt7 varchar(40) ,
  R_Opt8 varchar(40) ,
  VoidMsg varchar(30) ,
  B_EarnDocNo varchar(15) ,
  B_UseEarnNo varchar(15) ,
  B_UserEntertain varchar(10) ,
  PRIMARY KEY (B_MacNo,B_Refno)
);

CREATE TABLE IF NOT EXISTS branch (
  Code char(3) NOT NULL DEFAULT 'XXX' ,
  Name varchar(50) NOT NULL DEFAULT 'New Branch' ,
  AddressNo varchar(50) ,
  Locality varchar(30) ,
  SubProvince varchar(30) ,
  Province varchar(30) ,
  Post varchar(5) ,
  Tel_No varchar(30) ,
  Fax_No varchar(30) ,
  E_Mail varchar(50) ,
  Manager varchar(50) ,
  Location_Area char(2) ,
  Ser_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Cou_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Kic_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Tot_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Cost float(10,2) NOT NULL DEFAULT '0.00' ,
  Charge float(10,2) NOT NULL DEFAULT '0.00' ,
  FlageCost char(1) NOT NULL DEFAULT 'N' ,
  Gp float(10,2) NOT NULL DEFAULT '0.00' ,
  FlageGp char(1) NOT NULL DEFAULT 'N' ,
  Remark varchar(200) ,
  ArBillNo float(7,0) NOT NULL DEFAULT '1' ,
  EarneatBillNo float(7,0) NOT NULL DEFAULT '1' ,
  ReturnBillNo float(7,0) NOT NULL DEFAULT '1' ,
  PrintAutoSumDate date ,
  SaveOrder char(1) NOT NULL DEFAULT 'N' ,
  SaveOrderCopy char(1) NOT NULL DEFAULT 'N' ,
  SaveOrderChk char(1) NOT NULL DEFAULT 'N' ,
  KIC1 char(1) NOT NULL DEFAULT 'N' ,
  KIC2 char(1) NOT NULL DEFAULT 'N' ,
  KIC3 char(1) NOT NULL DEFAULT 'N' ,
  KIC4 char(1) NOT NULL DEFAULT 'N' ,
  KIC5 char(1) NOT NULL DEFAULT 'N' ,
  KIC6 char(1) NOT NULL DEFAULT 'N' ,
  KIC7 char(1) NOT NULL DEFAULT 'N' ,
  KIC8 char(1) NOT NULL DEFAULT 'N' ,
  KIC9 char(1) NOT NULL DEFAULT 'N' ,
  SmartCard char(1) NOT NULL DEFAULT 'N' ,
  GetFile varchar(30) ,
  RetFile varchar(30) ,
  PointFile varchar(30) ,
  CntLoop int(10) unsigned NOT NULL DEFAULT '1' ,
  InvNo float NOT NULL DEFAULT '1' ,
  InvCashNo float NOT NULL DEFAULT '1' ,
  InvCash float NOT NULL DEFAULT '1' ,
  InvActive char(1) NOT NULL DEFAULT 'Y' ,
  CreditAct char(3) ,
  PromotionGP varchar(30) ,
  LockTime int(11) NOT NULL DEFAULT '0' ,
  KicItemNo int(11) NOT NULL DEFAULT '0' ,
  PT1 varchar(13) ,
  PT2 varchar(13) ,
  PT3 varchar(13) ,
  PT4 varchar(13) ,
  PT5 varchar(13) ,
  PONO int(10) NOT NULL DEFAULT '1' ,
  PrintKicForm char(1) NOT NULL DEFAULT '1' ,
  PrintInvForm char(1) NOT NULL DEFAULT '1' ,
  PSelectStk char(1) NOT NULL DEFAULT 'P' ,
  PStkChk char(1) NOT NULL DEFAULT 'N' ,
  PMinStkChk char(1) NOT NULL DEFAULT 'N' ,
  RoundUpTime float NOT NULL DEFAULT '0' ,
  GiftStatusChk char(1) NOT NULL DEFAULT 'N' ,
  KICCopy1 char(1) NOT NULL DEFAULT '1' ,
  KICCopy2 char(1) NOT NULL DEFAULT '1' ,
  KICCopy3 char(1) NOT NULL DEFAULT '1' ,
  KICCopy4 char(1) NOT NULL DEFAULT '1' ,
  KICCopy5 char(1) NOT NULL DEFAULT '1' ,
  KICCopy6 char(1) NOT NULL DEFAULT '1' ,
  KICCopy7 char(1) NOT NULL DEFAULT '1' ,
  KICCopy8 char(1) NOT NULL DEFAULT '1' ,
  KICCopy9 char(1) NOT NULL DEFAULT '1' ,
  KICChk1 char(1) NOT NULL DEFAULT 'N' ,
  KICChk2 char(1) NOT NULL DEFAULT 'N' ,
  KICChk3 char(1) NOT NULL DEFAULT 'N' ,
  KICChk4 char(1) NOT NULL DEFAULT 'N' ,
  KICChk5 char(1) NOT NULL DEFAULT 'N' ,
  KICChk6 char(1) NOT NULL DEFAULT 'N' ,
  KICChk7 char(1) NOT NULL DEFAULT 'N' ,
  KICChk8 char(1) NOT NULL DEFAULT 'N' ,
  KICChk9 char(1) NOT NULL DEFAULT 'N' ,
  UpdateBranchPoint char(1) NOT NULL DEFAULT 'Y' ,
  KicName1 varchar(15) ,
  KicName2 varchar(15) ,
  KicName3 varchar(15) ,
  KicName4 varchar(15) ,
  KicName5 varchar(15) ,
  KicName6 varchar(15) ,
  KicName7 varchar(15) ,
  KicName8 varchar(15) ,
  KicName9 varchar(15) ,
  KicPrintOnReceipt1 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt2 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt3 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt4 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt5 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt6 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt7 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt8 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt9 char(1) NOT NULL DEFAULT 'N' ,
  KicQue int(5) unsigned NOT NULL DEFAULT '0' ,
  KIC10 char(1) ,
  KICChk10 char(1) ,
  KicName10 varchar(15) ,
  KicPrintOnReceipt10 char(1) ,
  Kic11 char(1) ,
  Kic12 char(1) ,
  Kic13 char(1) ,
  Kic14 char(1) ,
  Kic15 char(1) ,
  Kic16 char(1) ,
  Kic17 char(1) ,
  Kic18 char(1) ,
  Kic19 char(1) ,
  Kic20 char(1) ,
  KicCopy11 char(1) ,
  KicCopy12 char(1) ,
  KicCopy13 char(1) ,
  KicCopy14 char(1) ,
  KicCopy15 char(1) ,
  KicCopy16 char(1) ,
  KicCopy17 char(1) ,
  KicCopy18 char(1) ,
  KicCopy19 char(1) ,
  KicCopy20 char(1) ,
  KicChk11 char(1) ,
  KicChk12 char(1) ,
  KicChk13 char(1) ,
  KicChk14 char(1) ,
  KicChk15 char(1) ,
  KicChk16 char(1) ,
  KicChk17 char(1) ,
  KicChk18 char(1) ,
  KicChk19 char(1) ,
  KicChk20 char(1) ,
  KicCopy10 char(1) ,
  IMG_HOME_PATH varchar(100) DEFAULT '/images/1.jpg' ,
  INVHead char(3) ,
  INVCheckAuto char(1) ,
  AS400BranchCode char(4) 
);

CREATE TABLE IF NOT EXISTS branch (
  Code char(3) NOT NULL DEFAULT 'XXX' ,
  Name varchar(50) NOT NULL DEFAULT 'New Branch' ,
  AddressNo varchar(50) ,
  Locality varchar(30) ,
  SubProvince varchar(30) ,
  Province varchar(30) ,
  Post varchar(5) ,
  Tel_No varchar(30) ,
  Fax_No varchar(30) ,
  E_Mail varchar(50) ,
  Manager varchar(50) ,
  Location_Area char(2) ,
  Ser_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Cou_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Kic_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Tot_Area float(10,2) NOT NULL DEFAULT '0.00' ,
  Cost float(10,2) NOT NULL DEFAULT '0.00' ,
  Charge float(10,2) NOT NULL DEFAULT '0.00' ,
  FlageCost char(1) NOT NULL DEFAULT 'N' ,
  Gp float(10,2) NOT NULL DEFAULT '0.00' ,
  FlageGp char(1) NOT NULL DEFAULT 'N' ,
  Remark varchar(200) ,
  ArBillNo float(7,0) NOT NULL DEFAULT '1' ,
  EarneatBillNo float(7,0) NOT NULL DEFAULT '1' ,
  ReturnBillNo float(7,0) NOT NULL DEFAULT '1' ,
  PrintAutoSumDate date ,
  SaveOrder char(1) NOT NULL DEFAULT 'N' ,
  SaveOrderCopy char(1) NOT NULL DEFAULT 'N' ,
  SaveOrderChk char(1) NOT NULL DEFAULT 'N' ,
  KIC1 char(1) NOT NULL DEFAULT 'N' ,
  KIC2 char(1) NOT NULL DEFAULT 'N' ,
  KIC3 char(1) NOT NULL DEFAULT 'N' ,
  KIC4 char(1) NOT NULL DEFAULT 'N' ,
  KIC5 char(1) NOT NULL DEFAULT 'N' ,
  KIC6 char(1) NOT NULL DEFAULT 'N' ,
  KIC7 char(1) NOT NULL DEFAULT 'N' ,
  KIC8 char(1) NOT NULL DEFAULT 'N' ,
  KIC9 char(1) NOT NULL DEFAULT 'N' ,
  SmartCard char(1) NOT NULL DEFAULT 'N' ,
  GetFile varchar(30) ,
  RetFile varchar(30) ,
  PointFile varchar(30) ,
  CntLoop int(10) unsigned NOT NULL DEFAULT '1' ,
  InvNo float NOT NULL DEFAULT '1' ,
  InvCashNo float NOT NULL DEFAULT '1' ,
  InvCash float NOT NULL DEFAULT '1' ,
  InvActive char(1) NOT NULL DEFAULT 'Y' ,
  CreditAct char(3) ,
  PromotionGP varchar(30) ,
  LockTime int(11) NOT NULL DEFAULT '0' ,
  KicItemNo int(11) NOT NULL DEFAULT '0' ,
  PT1 varchar(13) ,
  PT2 varchar(13) ,
  PT3 varchar(13) ,
  PT4 varchar(13) ,
  PT5 varchar(13) ,
  PONO int(10) NOT NULL DEFAULT '1' ,
  PrintKicForm char(1) NOT NULL DEFAULT '1' ,
  PrintInvForm char(1) NOT NULL DEFAULT '1' ,
  PSelectStk char(1) NOT NULL DEFAULT 'P' ,
  PStkChk char(1) NOT NULL DEFAULT 'N' ,
  PMinStkChk char(1) NOT NULL DEFAULT 'N' ,
  RoundUpTime float NOT NULL DEFAULT '0' ,
  GiftStatusChk char(1) NOT NULL DEFAULT 'N' ,
  KICCopy1 char(1) NOT NULL DEFAULT '1' ,
  KICCopy2 char(1) NOT NULL DEFAULT '1' ,
  KICCopy3 char(1) NOT NULL DEFAULT '1' ,
  KICCopy4 char(1) NOT NULL DEFAULT '1' ,
  KICCopy5 char(1) NOT NULL DEFAULT '1' ,
  KICCopy6 char(1) NOT NULL DEFAULT '1' ,
  KICCopy7 char(1) NOT NULL DEFAULT '1' ,
  KICCopy8 char(1) NOT NULL DEFAULT '1' ,
  KICCopy9 char(1) NOT NULL DEFAULT '1' ,
  KICChk1 char(1) NOT NULL DEFAULT 'N' ,
  KICChk2 char(1) NOT NULL DEFAULT 'N' ,
  KICChk3 char(1) NOT NULL DEFAULT 'N' ,
  KICChk4 char(1) NOT NULL DEFAULT 'N' ,
  KICChk5 char(1) NOT NULL DEFAULT 'N' ,
  KICChk6 char(1) NOT NULL DEFAULT 'N' ,
  KICChk7 char(1) NOT NULL DEFAULT 'N' ,
  KICChk8 char(1) NOT NULL DEFAULT 'N' ,
  KICChk9 char(1) NOT NULL DEFAULT 'N' ,
  UpdateBranchPoint char(1) NOT NULL DEFAULT 'Y' ,
  KicName1 varchar(15) ,
  KicName2 varchar(15) ,
  KicName3 varchar(15) ,
  KicName4 varchar(15) ,
  KicName5 varchar(15) ,
  KicName6 varchar(15) ,
  KicName7 varchar(15) ,
  KicName8 varchar(15) ,
  KicName9 varchar(15) ,
  KicPrintOnReceipt1 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt2 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt3 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt4 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt5 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt6 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt7 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt8 char(1) NOT NULL DEFAULT 'N' ,
  KicPrintOnReceipt9 char(1) NOT NULL DEFAULT 'N' ,
  KicQue int(5) unsigned NOT NULL DEFAULT '0' ,
  KIC10 char(1) ,
  KICChk10 char(1) ,
  KicName10 varchar(15) ,
  KicPrintOnReceipt10 char(1) ,
  Kic11 char(1) ,
  Kic12 char(1) ,
  Kic13 char(1) ,
  Kic14 char(1) ,
  Kic15 char(1) ,
  Kic16 char(1) ,
  Kic17 char(1) ,
  Kic18 char(1) ,
  Kic19 char(1) ,
  Kic20 char(1) ,
  KicCopy11 char(1) ,
  KicCopy12 char(1) ,
  KicCopy13 char(1) ,
  KicCopy14 char(1) ,
  KicCopy15 char(1) ,
  KicCopy16 char(1) ,
  KicCopy17 char(1) ,
  KicCopy18 char(1) ,
  KicCopy19 char(1) ,
  KicCopy20 char(1) ,
  KicChk11 char(1) ,
  KicChk12 char(1) ,
  KicChk13 char(1) ,
  KicChk14 char(1) ,
  KicChk15 char(1) ,
  KicChk16 char(1) ,
  KicChk17 char(1) ,
  KicChk18 char(1) ,
  KicChk19 char(1) ,
  KicChk20 char(1) ,
  KicCopy10 char(1) ,
  IMG_HOME_PATH varchar(100) DEFAULT '/images/1.jpg' ,
  INVHead char(3) ,
  INVCheckAuto char(1) ,
  AS400BranchCode char(4) 
);



#
# Dumping data for table 'branch'
#

INSERT INTO branch VALUES("001", "MARE", "129", "50000", "", "", "", "", "01", "0.00", "0.00", "0.00", "0.00", "0.00", "0.00", "N", "0.00", "N", NULL, "5", "0", "5", "2010-06-04", "N", "2", "N", "T", "T", "N", "N", "N", "N", "N", "N", "N", "N", NULL, NULL, NULL, "1", "1", "57", "1", "Y", NULL, NULL, "0", "0", "1001", "", "", "", "", "1", "1", "1", "T", "N", "N", "0", "N", "2", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "N", NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, "N", "N", "N", "N", "N", "N", "N", "N", "N", "0", "N", "0", NULL, NULL, "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "/img/small_avt.jpg", NULL, NULL, "101R");

CREATE TABLE IF NOT EXISTS t_sale (
  R_Index varchar(20) NOT NULL DEFAULT '0' ,
  R_Refno varchar(8) NOT NULL DEFAULT '' ,
  R_Table varchar(5) ,
  R_Date date NOT NULL DEFAULT '2020-01-01' ,
  R_Time varchar(10) NOT NULL DEFAULT '' ,
  MacNo char(3) NOT NULL DEFAULT '' ,
  Cashier varchar(6) NOT NULL DEFAULT '' ,
  R_Emp varchar(6) NOT NULL DEFAULT '' ,
  R_PluCode varchar(13) NOT NULL DEFAULT '' ,
  R_PName varchar(70) ,
  R_Unit varchar(10) ,
  R_Group varchar(4) ,
  R_Status varchar(4) ,
  R_Normal char(1) ,
  R_Discount char(1) ,
  R_Service char(1) ,
  R_Stock char(1) ,
  R_Set char(1) ,
  R_Vat char(1) ,
  R_Type char(1) ,
  R_ETD char(1) ,
  R_Quan float(10,3) ,
  R_Price float(10,2) ,
  R_Total float(10,2) ,
  R_PrType char(2) ,
  R_PrCode char(3) ,
  R_PrDisc float(10,6) ,
  R_PrBath float(10,2) ,
  R_PrAmt float(10,2) ,
  R_PrCuType char(2) ,
  R_PrCuCode char(3) ,
  R_PrCuQuan float(10,2) ,
  R_PrCuAmt float(10,2) ,
  R_Redule float(10,2) NOT NULL DEFAULT '0.00' ,
  R_DiscBath float(12,6) ,
  R_PrAdj float(10,2) ,
  R_PreDisAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  R_NetTotal float(10,2) ,
  R_Kic char(1) ,
  R_KicPrint char(1) ,
  R_Refund char(1) NOT NULL DEFAULT '-' ,
  VoidMsg varchar(30) ,
  R_Void char(1) NOT NULL DEFAULT '-' ,
  R_VoidUser varchar(6) ,
  R_VoidTime varchar(10) ,
  StkCode char(3) NOT NULL DEFAULT '' ,
  PosStk char(1) NOT NULL DEFAULT 'Y' ,
  R_ServiceAmt float(13,2) NOT NULL DEFAULT '0.00' ,
  R_PrChkType char(1) ,
  R_PrQuan float(10,2) ,
  R_PrSubType char(2) ,
  R_PrSubCode char(3) ,
  R_PrSubQuan float(10,2) ,
  R_PrSubDisc float(10,6) ,
  R_PrSubBath float(10,2) ,
  R_PrSubAmt float(10,2) ,
  R_PrSubAdj float(10,2) ,
  R_PrCuDisc float(10,6) ,
  R_PrCuBath float(10,2) ,
  R_PrCuAdj float(10,2) ,
  R_PrChkType2 char(1) ,
  R_PrQuan2 float(10,2) ,
  R_PrType2 char(2) ,
  R_PrCode2 char(3) ,
  R_PrDisc2 float(10,6) ,
  R_PrBath2 float(10,2) ,
  R_PrAmt2 float(10,2) ,
  R_PrAdj2 float(10,2) ,
  R_PItemNo int(10) unsigned NOT NULL DEFAULT '0' ,
  R_PKicQue int(10) unsigned NOT NULL DEFAULT '0' ,
  R_PrVcType varchar(2) ,
  R_PrVcCode varchar(20) ,
  R_PrVcAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  R_PrVcAdj float(10,4) NOT NULL DEFAULT '0.0000' ,
  R_MoveFlag char(1) NOT NULL DEFAULT '0' ,
  R_Pause char(1) NOT NULL DEFAULT '' ,
  R_SPIndex varchar(16) NOT NULL DEFAULT '' ,
  R_LinkIndex varchar(16) ,
  R_VoidPause char(1) ,
  R_SetPrice float(10,2) NOT NULL DEFAULT '0.00' ,
  R_SetDiscAmt float(10,2) NOT NULL DEFAULT '0.00' ,
  R_MoveItem char(1) ,
  R_MoveFrom varchar(20) ,
  R_MoveUser varchar(10) ,
  R_Opt9 varchar(40) ,
  R_Opt1 varchar(40) ,
  R_Opt2 varchar(40) ,
  R_Opt3 varchar(40) ,
  R_Opt4 varchar(40) ,
  R_Opt5 varchar(40) ,
  R_Opt6 varchar(40) ,
  R_Opt7 varchar(40) ,
  R_Opt8 varchar(40) ,
  R_PrintItemBill char(1) ,
  R_CountTime char(1) ,
  R_Return char(1) NOT NULL DEFAULT 'N' ,
  R_Earn char(1) NOT NULL DEFAULT 'N' ,
  R_EarnNo varchar(15) ,
  R_NetDiff float(10,2) ,
  PRIMARY KEY (Cashier,MacNo,R_Date,R_Emp,R_Index,R_Time)
);

