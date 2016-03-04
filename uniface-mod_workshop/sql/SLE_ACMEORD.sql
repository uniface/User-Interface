create table DELIVERYMETHOD
(
 IDDELIVERYMETHOD char(40) not null,
 NM char(40) null,
 DESCR char(180) null,
 COSTPERUNIT money(8) null, 
 primary key  (IDDELIVERYMETHOD)
);

create table ORDERLINE
(
 IDORDERLINE char(40) not null,
 ORDERID char(40) not null,
 ARTICLEID char(40) null,
 QNT char(32) not null,
 ORDERLINETOTAL money(8) null, 
 primary key  (IDORDERLINE,ORDERID)
);

create table ORDERLINE_RED
(
 IDORDERLINE char(40) not null,
 ORDERID char(40) not null,
 ARTICLEID char(40) null,
 QNTN int not null,
 ORDERLINETOTAL money(8) null, 
 primary key  (IDORDERLINE,ORDERID)
);

create table ORDERS
(
 IDORDER char(40) not null,
 CUSTOMERID char(40) not null,
 ADDRESSID char(40) null,
 DELIVERYMETHODID char(40) null,
 ORDNUM int not null,
 STATUS int null,
 ORDDATE date not null,
 SHPDATE date null,
 TOTAL money(8) null,
 SHIPTONAME char(60) null, 
 primary key  (IDORDER)
);

create unique index ORDERS_IDX2 on 
ORDERS(ORDNUM);