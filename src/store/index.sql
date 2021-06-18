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
  in限定范围
   ant or not in

    like模糊匹配, %不定词, _限定词, []方括号

    计算属性、别名,contect

    三、函数
        1、字符串函数
        2、日期时间函数
        3、Number函数
    四、汇总数据

    五、分组数据
    group by
    having

    六、子查询

    七、联结

    八、高级联结
    1、form a,b多张表
    */



# use sql_store;
select o.customer_id, customers.first_name, o.order_id, count(o.order_id) as pro_count
from customers
         join orders o on customers.customer_id = o.customer_id
         join order_items oi on o.order_id = oi.order_id
group by o.customer_id;


