<%@ page language="java" pageEncoding="UTF-8"%>



<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

  <head>
    <html:base />
    
    <title>showdb</title>

	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="notice board, student, bourneouth">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
 
    
    <%@ page contentType="text/html; charset=utf-8" %>

<%@ page language="java" %>

<%@ page import="com.mysql.jdbc.Driver" %>

<%@ page import="java.sql.*" %>

<%

String goodid="1";

String goodtitle;
String gooddesc;
String goodupdatetime;




String driverName="com.mysql.jdbc.Driver";
String userName="root";
String userPasswd="root";
String dbName="fair";
String url="jdbc:mysql://localhost/"+dbName+"?user="+userName+"&password="+userPasswd;
Class.forName("com.mysql.jdbc.Driver").newInstance();
Connection connection=DriverManager.getConnection(url);
Statement statement = connection.createStatement();

String sql="SELECT good.title,good.description,good.time FROM good where id= "+goodid;
ResultSet rs = statement.executeQuery(sql); 
ResultSetMetaData rmeta = rs.getMetaData();
int numColumns=rmeta.getColumnCount();


while(rs.next()) {

goodtitle=rs.getString(1)+" "; 
gooddesc=rs.getString(2);
goodupdatetime=rs.getString(3);

} 

out.print("<br>");



rs.close(); 

statement.close(); 

connection.close(); 

%>

    
  </body>
</html>
