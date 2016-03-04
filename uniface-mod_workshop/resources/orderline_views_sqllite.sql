create view CUST_SUM as select  strftime('%Y', orddate) as yr, customerid,  nm, cast(qnt as numeric) as qntn from orders, orderline, article where  idorder = orderid and articleid=idarticle;

create view CUSTPRODHIST as select yr, customerid, nm, sum(qntn) as qntn from CUST_SUM group by yr, customerid, nm;
