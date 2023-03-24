#SQL
结构化查询语言（Structured Query Language）是用于访问和处理数据库的标准的计算机语言。


	•	SQL 面向数据库执行查询
	•	SQL 可从数据库取回数据
	•	SQL 可在数据库中插入新的记录
	•	SQL 可更新数据库中的数据
	•	SQL 可从数据库删除记录
	•	SQL 可创建新数据库
	•	SQL 可在数据库中创建新表
	•	SQL 可在数据库中创建存储过程
	•	SQL 可在数据库中创建视图
	•	SQL 可以设置表、存储过程和视图的权限


#1、创建数据库

语法：
```
CREATE DATABASE 数据库名称
```
示例：
```
CREATE DATABASE my_db
```
#2、创建数据表
语法：
```
CREATE TABLE 数据表名称
(
列名称1 数据类型,
列名称2 数据类型,
……
)
```

示例：
```
CREATE TABLE Persons
(
Id_P int,
LastName varchar(255),
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)
```

数据类型：

```

TINYINT 
-128 - 127 
TINYINT UNSIGNED 
0 - 255 
SMALLINT 
-32768 - 32767 
SMALLINT UNSIGNED 
0 - 65535 
MEDIUMINT 
-8388608 - 8388607 
MEDIUMINT UNSIGNED 
0 - 16777215 
INT 或 INTEGER 
-2147483648 - 2147483647 
INT UNSIGNED 或 INTEGER UNSIGNED 
0 - 4294967295 
BIGINT 
-9223372036854775808 - 9223372036854775807 
BIGINT UNSIGNED 
0 - 18446744073709551615 
FLOAT 
-3.402823466E+38 - -1.175494351E-38,0,1.175494351E-38 - 3.402823466E+38 
DOUBLE 或 DOUBLE PRECISION 或 REAL 
-1.7976931348623157E+308 - -2.2250738585072014E-308,0,2.2250738585072014E-308 - 1.7976931348623157E+308 
DECIMAL[(M,[D])] 或 NUMERIC(M,D) 
由M(整个数字的长度,包括小数点,小数点左边的位数,小数点右边的位数,但不包括负号)和D(小数点右边的位数)来决定,M缺省为10,D缺省为0 
DATE 
1000-01-01 - 9999-12-31 
DATETIME 
1000-01-01 00:00:00 - 9999-12-31 23:59:59 
TIMESTAMP 
1970-01-01 00:00:00 - 2037年的某天(具体是哪天我也不知道,呵呵) 
TIME
-838:59:59' to 838:59:59 
YEAR[(2|4)] 
缺省为4位格式,4位格式取值范围为1901 - 2155,0000,2位格式取值范围为70-69(1970-2069) 
CHAR(M) [BINARY] 或 NCHAR(M) [BINARY] 
M的范围为1 - 255,如果没有BINARY项,则不分大小写,NCHAR表示使用缺省的字符集.在数据库中以空格补足,但在取出来时末尾的空格将自动去掉. 
[NATIONAL] VARCHAR(M) [BINARY] 
M的范围为1 - 255.在数据库中末尾的空格将自动去掉. 
TINYBLOB 或 TINYTEXT 
255(2^8-1)个字符 
BLOB 或 TEXT 
65535(2^16-1)个字符 
MEDIUMBLOB 或 MEDIUMTEXT 
16777215 (2^24-1)个字符 
LONGBLOB 或 LONGTEXT 
4294967295 (2^32-1)个字符 
ENUM('value1','value2',...) 
可以总共有65535个不同的值 
SET('value1','value2',...) 
最多有64个成员 
```

#3、插入数据

语法：
```
INSERT INTO 表名称 VALUES (值1, 值2,...)
```

示例：
```
INSERT INTO Persons VALUES ('Gates', 'Bill', 'Xuanwumen 10', 'Beijing')
```

语法：
```
INSERT INTO 表名称 (列1, 列2,...) VALUES (值1, 值2,...)
```

示例：
```
INSERT INTO Persons (LastName, Address) VALUES ('Wilson', 'Champs-Elysees')
```

#4、查询数据

语法：
```
SELECT 列名称 FROM 表名称
```

示例：
```
SELECT LastName,FirstName FROM Persons
```

语法：
```
SELECT * FROM 表名称
```

示例：
```
SELECT * FROM Persons
```


