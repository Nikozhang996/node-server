/*
一、数据库基础
  1、SQL关键字使用大写声明，尽管SQL不识别大小写
  2、库、表table、列column、行row
  3、主键（primary key)，一列或一组列，能标识表中的指定行，所有操作都会根据主键进行
二、检索数据
  4、USE 使用哪张表
  5、DISTINCT检索不同值，它必须直接放在列名前面
  6、MySQL中使用limit关键字限制内容长度,offset关键字设置偏移量，可以使用limit5,3作为简写
  7、order by x按升降进行排序，应始终作为最后一条子句
  8、可以按多个列进行排序，当A列值相同时取B列进行排序
  9、!=与<>等值
  10、between and范围检查

*/

use sql_store;

select customer_id, first_name, last_name
from customers
where customer_id between 4 and 8;












