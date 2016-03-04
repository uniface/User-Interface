create table ARTCAT
(
 ARTICLEID char(40) not null,
 CATEGORYID char(40) not null, 
 primary key  (ARTICLEID,CATEGORYID)
);

create table ARTICLE
(
 IDARTICLE char(40) not null,
 NM char(240) not null,
 PRICE money(8) not null,
 AVAIL boolean text null,
 DESCR char(1024) null,
 WEIGHT double precision null, 
 primary key  (IDARTICLE)
);

create table CATEGORY
(
 IDCATEGORY char(40) not null,
 CD char(12) not null,
 DESCR char(1024) null, 
 primary key  (IDCATEGORY)
);

create unique index CATEGORY_IDX2 on 
CATEGORY(CD);
