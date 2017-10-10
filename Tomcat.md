HTTP Status 405 – Method Not Allowed

Type Status Report
Message HTTP method GET is not supported by this URL
Description The method received in the request-line is known by the origin server but not supported by the target resource.

Apache Tomcat/8.5.23





HTTP Status 404 – Not Found

Type Status Report
Message /LR/VerifyCodeServlet
Description The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.

Apache Tomcat/8.5.23






HTTP Status 500 – Internal Server Error

Type Exception Report
Message java.sql.SQLException: Access denied for user 'root'@'localhost' (using password: YES)
Description The server encountered an unexpected condition that prevented it from fulfilling the request.
Exception
java.lang.RuntimeException: java.sql.SQLException: Access denied for user 'root'@'localhost' (using password: YES)
	dao.JdbcUserDaoImpl.findByUsername(JdbcUserDaoImpl.java:41)
	service.UserService.regist(UserService.java:17)
	servlet.RegistServlet.doPost(RegistServlet.java:71)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:661)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:742)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
Root Cause
java.sql.SQLException: Access denied for user 'root'@'localhost' (using password: YES)
	com.mysql.jdbc.SQLError.createSQLException(SQLError.java:946)
	com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:2985)
	com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:885)
	com.mysql.jdbc.MysqlIO.secureAuth411(MysqlIO.java:3421)
	com.mysql.jdbc.MysqlIO.doHandshake(MysqlIO.java:1247)
	com.mysql.jdbc.Connection.createNewIO(Connection.java:2775)
	com.mysql.jdbc.Connection.<init>(Connection.java:1555)
	com.mysql.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:285)
	java.sql.DriverManager.getConnection(DriverManager.java:664)
	java.sql.DriverManager.getConnection(DriverManager.java:247)
	util.JdbcUtils.getConnection(JdbcUtils.java:39)
	dao.JdbcUserDaoImpl.findByUsername(JdbcUserDaoImpl.java:21)
	service.UserService.regist(UserService.java:17)
	servlet.RegistServlet.doPost(RegistServlet.java:71)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:661)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:742)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
Note The full stack trace of the root cause is available in the server logs.

Apache Tomcat/8.5.23












Type Exception Report
Message java.sql.SQLException: Access denied for user 'root'@'localhost' (using password: YES)
Description The server encountered an unexpected condition that prevented it from fulfilling the request.
Exception
java.lang.RuntimeException: java.sql.SQLException: Access denied for user 'root'@'localhost' (using password: YES)
	dao.JdbcUserDaoImpl.findByUsername(JdbcUserDaoImpl.java:41)
	service.UserService.login(UserService.java:27)
	servlet.LoginServlet.doPost(LoginServlet.java:31)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:661)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:742)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
Root Cause
java.sql.SQLException: Access denied for user 'root'@'localhost' (using password: YES)
	com.mysql.jdbc.SQLError.createSQLException(SQLError.java:946)
	com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:2985)
	com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:885)
	com.mysql.jdbc.MysqlIO.secureAuth411(MysqlIO.java:3421)
	com.mysql.jdbc.MysqlIO.doHandshake(MysqlIO.java:1247)
	com.mysql.jdbc.Connection.createNewIO(Connection.java:2775)
	com.mysql.jdbc.Connection.<init>(Connection.java:1555)
	com.mysql.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:285)
	java.sql.DriverManager.getConnection(DriverManager.java:664)
	java.sql.DriverManager.getConnection(DriverManager.java:247)
	util.JdbcUtils.getConnection(JdbcUtils.java:39)
	dao.JdbcUserDaoImpl.findByUsername(JdbcUserDaoImpl.java:21)
	service.UserService.login(UserService.java:27)
	servlet.LoginServlet.doPost(LoginServlet.java:31)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:661)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:742)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
Note The full stack trace of the root cause is available in the server logs.

Apache Tomcat/8.5.23





HTTP Status 500 – Internal Server Error

Type Exception Report
Message java.sql.SQLException: Parameter index out of range (0 < 1 ).
Description The server encountered an unexpected condition that prevented it from fulfilling the request.
Exception
java.lang.RuntimeException: java.sql.SQLException: Parameter index out of range (0 < 1 ).
	dao.JdbcUserDaoImpl.findByUsername(JdbcUserDaoImpl.java:37)
	service.UserService.regist(UserService.java:17)
	servlet.RegistServlet.doPost(RegistServlet.java:71)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:661)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:742)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
Root Cause
java.sql.SQLException: Parameter index out of range (0 < 1 ).
	com.mysql.jdbc.SQLError.createSQLException(SQLError.java:910)
	com.mysql.jdbc.PreparedStatement.setInternal(PreparedStatement.java:2791)
	com.mysql.jdbc.PreparedStatement.setString(PreparedStatement.java:3627)
	dao.JdbcUserDaoImpl.findByUsername(JdbcUserDaoImpl.java:23)
	service.UserService.regist(UserService.java:17)
	servlet.RegistServlet.doPost(RegistServlet.java:71)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:661)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:742)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
Note The full stack trace of the root cause is available in the server logs.

Apache Tomcat/8.5.23

