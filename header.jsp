<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Student Fair</title>
<link rel="stylesheet" type="text/css" href="themes/default/easyui.css" />
	<link rel="stylesheet" type="text/css" href="themes/icon.css" /> 
    <link rel="stylesheet" type="text/css" href="themes/searchbox.css" /> 
    <link rel="stylesheet" type="text/css" href="themes/align.css" /> 
	<script type="text/javascript" src="js/jquery-1.8.0.min.js"></script>
	<script type="text/javascript" src="js/jquery.easyui.min.js"></script>
</head><body bgcolor="#EEEEEE">
<a href="index.jsp"><img border=0 src="img/studentfair.jpg" width="243" height="81" /></a>
  <div class="right">
  <a  href="myaccount.htm">Hi, Sherri</a> &nbsp;<a href="login.htm">Sign out</a>
</div>
<div  style="background:#990066;padding:5px;height:35px; align:center">
	<ul class="dmenu" style="front:#e2ebf5;">
   	  <li>&nbsp; &nbsp;&nbsp; &nbsp;</li>
<li >
			<a icon="icon-sell" href="goodslist.jsp" class="accordion" ><font color="black">Buy and Sell</font></a>
			<ul>
		    <li><a href="goodslist.jsp" icon="icon-buy" accesskey="b" title="Access:alt+b" >Buy</a></li>
			<li><a href="goodpost.jsp" icon="icon-sell">Sell</a></li>
			</ul>
		</li>
      <li>&nbsp; &nbsp; &nbsp; &nbsp;</li>
<li >
			<a icon="icon-house" href="houselist.jsp" class="accordion" accesskey="a"><font color="black"> Live </font></a>
			<ul>
			<li><a href="houselist.jsp" icon="icon-house" accesskey="i" title="Access:alt+b" >Find Room</a></li>
			<li><a href="housepost.jsp" icon="icon-person">Find Person</a></li>
			</ul>
		</li>
	  <li>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; </li>
<li > 
			<a icon="icon-reload" href="exchangelist.jsp" class="accordion" accesskey="e"><font color="black">Exchange</font></a>
			<ul>
			<li><a icon="icon-reload" href="exchangelist.jsp" icon="icon-buy" accesskey="i" title="Access:alt+b" >Skill Exchange</a></li>
			<li><a icon="icon-reload" href="exchangepost.jsp" icon="icon-sell">Post Exchange</a></li>
			</ul>
		</li>
      <li>&nbsp; &nbsp;&nbsp; &nbsp;</li>
<li class="accordion">
			<a icon="icon-music" href="countries.jsp" class="accordion" accesskey="s"><font color="black"> Event </font></a>
			<ul>
				
			</ul>
		</li>
		<div class="right"> 
		<input type="text" value="Search here..."  onblur="if(this.value=='') this.value='Type here...'" onfocus="if(this.value =='Type here...' ) this.value=''" /> 
        <a href="#" onclick="document.getElementById('form-search').submit()" > <img src="themes/icons/searchbt.png" width="38" /> </a>
        </div>
		
  </ul>
</div>








