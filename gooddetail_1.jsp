<%@include file="header.jsp"%>
<!--end of header-->
<!-- jave start -->
<%@ page contentType="text/html; charset=utf-8" %>

<%@ page language="java" %>

<%@ page import="com.mysql.jdbc.Driver" %>

<%@ page import="java.sql.*" 
		 import="java.util.*"
%>
<%!
String goodid="1";



String goodtitle;
String gooddesc;
String goodupdatetime;
String posterid;

List picpaths = new ArrayList();


String postertitle;
String postername;
String email;
String tel;
String campus;
String address;

 %>

<!-- %


String driverName="com.mysql.jdbc.Driver";
String userName="root";
String userPasswd="root";
String dbName="fair";
String url="jdbc:mysql://localhost/"+dbName+"?user="+userName+"&password="+userPasswd;
Class.forName("com.mysql.jdbc.Driver").newInstance();
Connection connection=DriverManager.getConnection(url);
Statement statement = connection.createStatement();

String sql="SELECT good.title,good.description,good.time,posterid FROM good where id= "+goodid;
ResultSet rs = statement.executeQuery(sql); 
ResultSetMetaData rmeta = rs.getMetaData();
int numColumns=rmeta.getColumnCount();

while(rs.next()) {

goodtitle=rs.getString(1); 
gooddesc=rs.getString(2);
goodupdatetime=rs.getString(3);
posterid=rs.getString(4);
} 

//pic

sql="SELECT picpath, pos FROM pic where goodid= "+goodid+" order by pos asc;";
rs = statement.executeQuery(sql); 

int picnum=0;
while(rs.next()) {
picpaths.add(rs.getString(1));
//picpaths[picnum++]=rs.getString(1);
//pospicpath[picnum][1] = rs.getString(2);
}

//poster

sql="SELECT title, name, email, telephone, campus, address FROM poster where id= "+posterid+" ;";
rs = statement.executeQuery(sql); 


while(rs.next()) {
postername = rs.getString(1);
postertitle = rs.getString(2);
email = rs.getString(3);
tel = rs.getString(4);
campus = rs.getString(5);
address = rs.getString(6);
//picpaths[picnum++]=rs.getString(1);
//pospicpath[picnum][1] = rs.getString(2);
}
//} 
rs.close(); 

statement.close(); 

connection.close(); 

%> -->


<!-- java end -->
<a href="index.jsp">Home Page >> </a><a href="goodslist.jsp">Buy</a>
<p>
<p>&nbsp;</p>
<table border="0" width="800" >
  <tr>
                <td width="300">
                <a href="img/<%   out.print(picpaths.get(0)); %>">
                <img border="0" src="img/<% out.print(picpaths.get(0)) ; %>" width="300" ></td>
                </a></td>
                <td width="300" style="vertical-align:top;">
<p>
                <h2><% out.print(goodtitle); %></h2>
</p>
				<div class="right"> <% out.print(goodupdatetime); %></div>
<br>
<br><br><br><br >


        <ul>
          <li><% 
          String[] list1=gooddesc.split(";;");
          out.print(list1[0]); %>
          
          </li>
          <li><% 
         
          out.print(list1[1]); %></li>
          <li><% 
         
          out.print(list1[2]); %></li>
        </ul>
                <h7>
                
                &nbsp;</h7>
                
                

</td >
               <td align="center">
               
          </td>
        </tr>
        
        
        <tr>
        <td>
        <a href="img/<%  out.print(picpaths.get(1)); %>">
        <img src="img/<% out.print(picpaths.get(1));  %>"  width="80"/>
        </a><a href="img/<% out.print(picpaths.get(2));  %> ">
        <img src="img/<% out.print(picpaths.get(2)); %>"  width="80"/>
        </a>
        </td>
        </tr>
<tr>
        <td width="100" height="100"></td>
    <td width="100" height="100">
       <div class="right">Posted by</div>
   <h3> 
   		<div class="middle">
              </div>
             <!-- div class="left"><h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
             Student</h4></div-->
              
         <ul>
         <li><% out.print(postertitle+" "+postername); %></li>
          
          <li><% out.print(email); %></li>
          <li><% out.print(tel); %></li>
          <li><% out.print(campus+" Campus"); %> </li>
          </ul>
             </h3>
          </div>
          </td>
        
        <tr>
        </tr>
</table>
</p>


<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>
<p>
  
  
<p>
<p>
<p><br>
<%@include file="footer.jsp"%>
