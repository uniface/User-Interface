create table ADDRESS
(
 IDADDRESS char(40) not null,
 COUNTRYID char(3) null,
 HOUSE char(40) null,
 STREETNAME char(40) null,
 TOWN char(40) null,
 COUNTY char(40) null,
 POSTCODE char(10) null,
 TELNO char(80) null, 
 primary key  (IDADDRESS)
);

create table COUNTRY
(
 IDCOUNTRY char(3) not null,
 NM char(60) not null,
 TELCODE char(10) null, 
 primary key  (IDCOUNTRY)
);

create unique index COUNTRY_IDX2 on 
COUNTRY(NM)

;create table COUNTRYFLAG
(
 IDCOUNTRYFLAG char(40) not null,
 FLAG varbinary(8151) null, 
 primary key  (IDCOUNTRYFLAG)
);

create table OCOUNTRYFLAG
(
 IDCOUNTRYFLAG char(40) not null,
 SEGM char(4) not null,
 DATA varbinary(8146) null, 
 primary key  (IDCOUNTRYFLAG,SEGM)
);

create table CUSTOMER
(
 IDCUSTOMER char(40) not null,
 ADDRESSID char(40) null,
 TITLE char(3) null,
 FIRSTNAME char(60) null,
 LASTNAME char(60) not null,
 EMAIL char(60) not null,
 PASSWORD char(40) not null,
 HINTTEXT char(60) null,
 REGDATE date null, 
 primary key  (IDCUSTOMER)
);

create unique index CUSTOMER_IDX2 on 
CUSTOMER(EMAIL)

;create table STATE
(
 IDSTATE char(40) not null,
 COUNTRYID char(3) null,
 STATECODE char(3) not null,
 STATENAME char(40) null, 
 primary key  (IDSTATE)
);