//****** Advanced DHTML Popup Ultimate Version 3.41.2.76 Script Version 3.02 ******
// Copyright (c) Digital Flow Software 2005-2011
// The present javascript code is property of Digital Flow Software.
// This code may NOT be integrated into any web based service including any service providing video or any content publishing to third parties. This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed Advanced DHTML Popup application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "Advanced DHTML Popup License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***
var df,rf=false,na=navigator.userAgent,dt=document,op=(na.indexOf('Opera')!=-1),dm=(dt.getElementById)?true:false,ie5x=(dt.all&&dm),mci=(na.indexOf('Mac')!=-1);df=((ie5x||op)&&mci);decide();function decide(){if(df){return;}else{rf=true;}}
if(rf){
if(typeof(DFS)=='undefined'){var DFS = {};}if(typeof(DFS.adp)=='undefined'){DFS.adp = {};}DFS.adp = {exof:15,goex:0,mxb:15,mnh:50,mnw:50,mxp:15,mxt:5,ush:false,xpos:[],ypos:[],adpuids:[],adppla:[],adpscr:[],alc:window.location.href,eloc:[]};DFS.adp.isIpad = function(){return navigator.userAgent.match(/iPad/i) != null;};DFS.adp.isIphone = function(){return navigator.userAgent.match(/iPhone/i) != null;};DFS.adp.isIpod = function(){return navigator.userAgent.match(/iPod/i) != null;};DFS.adp.isIdevice = function(){return DFS.adp.isIpad() || DFS.adp.isIphone() || DFS.adp.isIpod()};DFS.adp.isFirefox = function(){return navigator.userAgent.match(/Firefox/i) != null;};var drs=0;var tid3,tid4;var moving=0,resizing=0,dsh,bdf=0,sht=0,slt=0,ba5=0,nd9,absl=1,ism3=0;var fia=0,foa=100,fis=15,fii=2,fos=5,foi=2,ddp=0,bp3=0,dis=15,sis=10;var fp5=0,fo4=0;var cth,ctw;var lhg=0,dmt=document,nbl='none',ibl='block',nvi='hidden',ivi='visible',sct,na=navigator.userAgent;function de7(id){return dmt.getElementById(id)}var w37=(de7)?true:false, mie=(w37 && dmt.all)?true:false, ns=(w37 && !dmt.all)?true:false, op=(na.indexOf('Opera')!=-1);if(op){var otmp=na.indexOf("Opera")+6;opv=parseInt(na.charAt(otmp));var op9=(opv==9)?true:false;}if(mie){mtmp=na.split("MSIE");miv=parseFloat(mtmp[1]);var ieh=(miv>=5.5)?true:false;var ie7p=(miv>=7)?true:false;}window.onerror=function(){return true};var tInd=[], tNames=["a","BUTTON","TEXTAREA","INPUT","IFRAME"];var delX=[],delY=[];var adppdel=250;var MovexDiff=0,MoveyDiff=0,ResizexDiff=0,ResizeyDiff=0,z_index=10000,Mousex=0,Mousey=0;function miebody(){return (dmt.compatMode && dmt.compatMode=="CSS1Compat")? dmt.documentElement:dmt.body}if(dmt.compatMode=='CSS1Compat')sct=true;else sct=false;DFS.adp.adpInstance = function(uid,bwh,bc7,isex,oo7,pla,shf,pcc,tro,tra,issp,plt,rn,cpad,tbw,is7,isScr,ifr,fw7,adpx,adpy,adpw,adph,it9,tc2,tc3,ib8,is6,shs,sc5,bng,ir9,cc6,im5,cnm,if8,it3,msk,rot){this.pars = {uid : uid,bwh : Math.min(bwh,DFS.adp.mxb),bc7 : bc7,isex : isex,oo7 : oo7,pla : pla,shf : shf,pcc : pcc,tro : tro,tra : tra,issp : issp,plt : plt,rn : rn,cpad : Math.min(cpad,DFS.adp.mxp),tbw : Math.min(tbw,DFS.adp.mxt),is7 : is7,isScr : isScr,ifr : ifr,fw7 : fw7,adpx : adpx,adpy : adpy,adpxS : adpx,adpyS : adpy,adpw : Math.max(adpw,DFS.adp.mnw),adph : Math.max(adph,DFS.adp.mnh),it9 : it9,tc2 : tc2,tc3 : tc3,ib8 : ib8,is6 : is6,shs : shs,sc5 : sc5,bng : bng,ir9 : ir9,cc6 : cc6,im5 : im5,cnm : cnm,if8 : if8,it3 : it3,msk : msk,rot : rot,isc : 0,tsp : 0};this.leftTabberObj = {lc:3,tl:6,bl:7};if( this.pars.adpxS != 0 ){if( this.pars.pla == this.leftTabberObj.lc || this.pars.pla == this.leftTabberObj.tl || this.pars.pla == this.leftTabberObj.bl ){this.leftTabber = true;this.pars.adpxS = 10*Math.round(parseInt(this.pars.adpxS)/10);this.pars.adpw = 10*Math.round(parseInt(this.pars.adpw)/10);}else{this.leftTabber = false;}}};DFS.adp.adpInstance.prototype.soh = function(id,bon,voh){var f=DFS.adp;if(f.ush)de7(id+'_ash').style.visibility=voh;de7(id+'_adpB').style.visibility=voh;if(this.pars.is6)de7(id+'_adpS').style.visibility=voh;if(this.pars.ir9)de7(id+'_rsize').style.visibility=voh;de7(id+'_close').style.visibility=voh;de7(id+'_adpC').style.visibility=voh;de7(id+'_adpT').style.visibility=voh;};DFS.adp.adpHide = function(id){eval(id+'.adpHideObj("'+id+'")');};DFS.adp.adpInstance.prototype.adpHideObj = function(id){clearTimeout(dsh);clearTimeout(tid3);clearTimeout(tid4);if(typeof adpOnHide!='undefined')adpOnHide(id);this.soh(id,nbl,nvi);if(this.pars.msk){adpMask.soh('adpMask',nbl,nvi);if(mie || op){sbShow();tiShow();}else{document.onkeypress=tabrereplace;}}};DFS.adp.adpShow = function(id){eval(id+'.adpShowObj("'+id+'")');};DFS.adp.adpInstance.prototype.adpShowObj = function(id){var that=this;if(absl&&!drs&&!ism3)setTimeout(function(){that.adpLocationObj(id,that.pars.adpx,that.pars.adpy)},150);dsh=setTimeout(function(){that.soh(id,ibl,ivi)},250);if(mie){de7(id+'_adpB').style.filter= "alpha(opacity=100)";if(!op)de7(id+'_adpB').style.removeAttribute('filter');de7(id+'_adpS').style.filter="alpha(opacity=30)";}else{de7(id+'_adpB').style.opacity=1;de7(id+'_adpS').style.opacity=0.3;}if(this.pars.uid=='adpMask'){if(mie || op){setTimeout("sbHide();tiHide();",100);}else{document.onkeypress = tabremove;}}};function gsp(){sht=(mie)?miebody().scrollTop:window.pageYOffset;slt=(mie)?miebody().scrollLeft:window.pageXOffset;return sht,slt;}DFS.adp.adpLocation = function(id,x,y,m,event){eval(id+'.adpLocationObj("'+id+'",'+x+','+y+','+m+',event)');};DFS.adp.adpInstance.prototype.adpLocationObj = function(id,x,y,m,evt){var f=DFS.adp;ism3=m;this.pars.adpx=x;this.pars.adpy=y;if(m){Mousex=(mie)?event.clientX+miebody().scrollLeft:evt.pageX;Mousey=(mie)?event.clientY+miebody().scrollTop:evt.pageY;x=x+Mousex;y=y+Mousey;this.pars.adpx=x;this.pars.adpy=y;}else{gsp();if(mie&&(!ie7p||!sct)&&!op||this.pars.isScr==0){x+=slt;y+=sht;}}de7(id+'_adpS').style.left=(x+this.pars.shs)+'px';de7(id+'_adpS').style.top=(y+this.pars.shs)+'px';de7(id+'_adpB').style.left=x+'px';de7(id+'_adpB').style.top=y+'px';if(f.ush)de7(id+'_ash').style.top=y+'px';if(f.ush)de7(id+'_ash').style.left=x+'px';};function addRszEv(f){var pre=window.onresize;if (typeof window.onresize!='function'){window.onresize = f;}else{window.onresize=function(){if(pre){pre();}f();}}}function addScrEv(f){var pre=window.onscroll;if (typeof window.onscroll!='function'){window.onscroll = f;}else{window.onscroll=function(){if(pre){pre();}f();}}}function tabremove(e) {if (e.keyCode == 9){return false;}}function tabrereplace(e) {if (e.keyCode == 9){return true;}}function sbHide(){for(var i = 0; i < document.forms.length; i++) {for(var j = 0; j < document.forms[i].length; j++){if(document.forms[i].elements[j].tagName == "SELECT") {document.forms[i].elements[j].style.visibility="hidden";}}}}function sbShow(){for(var i = 0; i < document.forms.length; i++) {for(var j = 0; j < document.forms[i].length; j++){if(document.forms[i].elements[j].tagName == "SELECT") {document.forms[i].elements[j].style.visibility="visible";}}}}function tiHide(){var i=0;for (var j=0;j<tNames.length;j++){var tElements = document.getElementsByTagName(tNames[j]);for (var k=0;k<tElements.length;k++){tInd[i]=tElements[k].tabIndex;tElements[k].tabIndex="-1";i++;}}}function tiShow(){var i=0;for (var j=0;j<tNames.length;j++){var tElements = document.getElementsByTagName(tNames[j]);for (var k=0;k<tElements.length;k++){tElements[k].tabIndex=tInd[i];tElements[k].tabEnabled=true;i++;}}}DFS.adp.adpAnchor = function(uid,anchor,oX,oY){DFS.adp.mae(uid,anchor,oX,oY);DFS.adp.adj(uid,anchor,oX,oY);};DFS.adp.rae = function(obj){var aet=0,ael=0;if (obj.offsetParent){while (obj.offsetParent){aet+=(obj.offsetTop);ael+=obj.offsetLeft;obj=obj.offsetParent;}}return {x:ael,y:aet};};DFS.adp.mae = function(uid,aid,offX,offY){var f=DFS.adp,adpAncElem=de7(aid);if(!adpAncElem)return;gsp();f.eloc[adpAncElem.id.substr(14)]=f.rae(adpAncElem);DFS.adp.adpLocation(uid,f.eloc[adpAncElem.id.substr(14)].x+Number(offX)-slt,f.eloc[adpAncElem.id.substr(14)].y+Number(offY)-sht);};DFS.adp.adj = function(uid,aid,offX,offY){addRszEv(function(){DFS.adp.mae(uid,aid,offX,offY);})};DFS.adp.adpDropin = function(id){eval(id+'.adpDropinObj("'+id+'")');};DFS.adp.adpInstance.prototype.adpDropinObj =  function(id){var tod;drs=1;var that=this;clearInterval(ddp);if(tod)clearTimeout(tod);tod=setTimeout(function(){that.indl(id)},200);};DFS.adp.adpInstance.prototype.indl = function(id){var that=this;var oa=this.pars.adph+(2*this.pars.bwh+2*this.pars.tbw);nd9=0;ba5=40;ddp=setInterval(function(){that.dropdown(id,oa)},dis);};DFS.adp.adpInstance.prototype.dropdown = function(id,oa){var f=DFS.adp;var that=this;clearInterval(bp3);var iess=(mie&&(!ie7p||!sct)&&!op||this.pars.isScr==0);gsp();if(nd9==0){var delta=this.pars.adpy-10*Math.floor(this.pars.adpy/10);if(f.ush)de7(id+'_ash').style.top=((iess)?sht:0)-100-delta-(10*Math.round(parseInt(oa)/10))+'px';de7(id+'_adpB').style.top=((iess)?sht:0)-100+delta-(10*Math.round(parseInt(oa)/10))+'px';de7(id+'_adpS').style.top=((iess)?sht:0)-100+delta-(10*Math.round(parseInt(oa)/10))+this.pars.shs+'px';nd9+=1;}if(parseInt(de7(id+'_adpB').style.top)<this.pars.adpy+delY[id]+((iess)?sht:0)){if(f.ush)de7(id+'_ash').style.top=parseInt(de7(id+'_adpB').style.top)+10+'px';de7(id+'_adpB').style.top=parseInt(de7(id+'_adpB').style.top)+10+'px';de7(id+'_adpS').style.top=parseInt(de7(id+'_adpS').style.top)+10+'px';if(f.ush)de7(id+'_ash').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpB').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpS').style.left=this.pars.adpx+delX[id]+this.pars.shs+'px';}else{drs=2;clearInterval(ddp);if(this.pars.bng){bp3=setInterval(function(){that.bouncedown(id)},50);}else{if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);}}};DFS.adp.adpInstance.prototype.bouncedown = function(id){if(DFS.adp.ush)de7(id+'_ash').style.top=parseInt(de7(id+'_adpB').style.top)-ba5+'px';de7(id+'_adpB').style.top=parseInt(de7(id+'_adpB').style.top)-ba5+'px';de7(id+'_adpS').style.top=parseInt(de7(id+'_adpS').style.top)-ba5+'px';if(ba5<0) ba5+=10;ba5=ba5*-1;if(ba5==0){clearInterval(bp3);if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);}};DFS.adp.adpSlidein = function(id){eval(id+'.adpSlideinObj("'+id+'")');};DFS.adp.adpSlideInRight = function(id){eval(id+'.adpSlideInRightObj("'+id+'")');};DFS.adp.adpSlideout = function(id){eval(id+'.adpSlideoutObj("'+id+'")');};DFS.adp.adpSlideOutLeft = function(id){eval(id+'.adpSlideOutLeftObj("'+id+'")');};DFS.adp.adpSlideup = function(id){eval(id+'.adpSlideupObj("'+id+'")');};DFS.adp.adpSlideUpTop = function(id){eval(id+'.adpSlideUpTopObj("'+id+'")');};DFS.adp.adpSlideDownBottom = function(id){eval(id+'.adpSlideDownBottomObj("'+id+'")');};DFS.adp.adpInstance.prototype.adpSlideinObj = function(id){this.tos;drs=1;var that=this;clearInterval(this.sp7);if(this.tos)clearTimeout(this.tos);this.tos=setTimeout(function(){that.slin(id)},200);};DFS.adp.adpInstance.prototype.adpSlideInRightObj = function(id){this.tos;drs=1;var that=this;clearInterval(this.sp7);if(this.tos)clearTimeout(this.tos);this.tos=setTimeout(function(){that.slinright(id)},200);};DFS.adp.adpInstance.prototype.adpSlideoutObj = function(id){this.tos;drs=1;var that=this;clearInterval(this.sp7);if(this.tos)clearTimeout(this.tos);this.tos=setTimeout(function(){that.slout(id)},200);};DFS.adp.adpInstance.prototype.adpSlideOutLeftObj = function(id){this.tos;drs=1;var that=this;clearInterval(this.sp7);if(this.tos)clearTimeout(this.tos);this.tos=setTimeout(function(){that.sloutLeft(id)},200);};DFS.adp.adpInstance.prototype.adpSlideupObj = function(id){this.tos;drs=1;var that=this;clearInterval(this.sp7);if(this.tos)clearTimeout(this.tos);this.tos=setTimeout(function(){that.slup(id)},200);};DFS.adp.adpInstance.prototype.adpSlideUpTopObj = function(id){this.tos;drs=1;var that=this;clearInterval(this.sp7);if(this.tos)clearTimeout(this.tos);this.tos=setTimeout(function(){that.sluptop(id)},200);};DFS.adp.adpInstance.prototype.adpSlideDownBottomObj = function(id){this.tos;drs=1;var that=this;clearInterval(this.sp7);if(this.tos)clearTimeout(this.tos);this.tos=setTimeout(function(){that.sloutbottom(id)},200);};DFS.adp.adpInstance.prototype.slin = function(id){var that=this;var delta=this.pars.adpx-10*Math.floor(this.pars.adpx/10);var oa=-10*Math.round((this.pars.adpw+(2*this.pars.bwh+2*this.pars.tbw))/10)+delta;if( this.leftTabber ){this.pars.adpxS = 10*Math.round(parseInt(this.pars.adpxS)/10);this.pars.adpw = 10*Math.round(parseInt(this.pars.adpw)/10);if(DFS.adp.ush)de7(id+'_ash').style.left = -this.pars.adpw + this.pars.adpxS +'px';de7(id+'_adpB').style.left = -this.pars.adpw + this.pars.adpxS +'px';de7(id+'_adpS').style.left = -this.pars.adpw + this.pars.adpxS + this.pars.shs +'px';}else{if(DFS.adp.ush)de7(id+'_ash').style.left=(oa-100)+'px';de7(id+'_adpB').style.left=(oa-100)+'px';de7(id+'_adpS').style.left=(oa-100+this.pars.shs)+'px';}this.sp7=setInterval(function(){that.slide(id,1)},sis);};DFS.adp.adpInstance.prototype.slinright = function(id){var that=this;wh5();var delta=this.pars.adpx-10*Math.floor(this.pars.adpx/10);var oa = 10*Math.round((this.pars.adpw+(2*this.pars.bwh+2*this.pars.tbw))/10)+delta;if(DFS.adp.ush)de7(id+'_ash').style.left=(oa-100)+'px';de7(id+'_adpB').style.left = pwh + (oa+100)+'px';de7(id+'_adpS').style.left = pwh + (oa+100+this.pars.shs)+'px';this.sp7=setInterval(function(){that.slide(id,6)},sis);};DFS.adp.adpInstance.prototype.slout = function(id){var that=this;wh5();this.sp7=setInterval(function(){that.slide(id,2)},sis);};DFS.adp.adpInstance.prototype.sloutLeft = function(id){var that=this;wh5();this.sp7=setInterval(function(){that.slide(id,4)},sis);};DFS.adp.adpInstance.prototype.sloutbottom = function(id){var that=this;wh5();this.sp7=setInterval(function(){that.slide(id,5)},sis);};DFS.adp.adpInstance.prototype.slup = function(id){var that=this;var f=DFS.adp;wh5();gsp();var iess=(mie&&(!ie7p||!sct)&&!op||this.pars.isScr==0);var delta=this.pars.adpy-10*Math.floor(this.pars.adpy/10);var oa=pht+this.pars.adph+(2*this.pars.bwh+2*this.pars.tbw);if(f.ush)de7(id+'_ash').style.top=(oa-100)+'px';de7(id+'_adpB').style.top=((iess)?sht:0)+100+delta+(10*Math.round(parseInt(oa)/10))+'px';de7(id+'_adpS').style.top=((iess)?sht:0)+100+delta+(10*Math.round(parseInt(oa)/10))+this.pars.shs+'px';this.sp7=setInterval(function(){that.slide(id,3)},sis);};DFS.adp.adpInstance.prototype.sluptop = function(id){var that=this;wh5();this.sp7=setInterval(function(){that.slide(id,7)},sis);};DFS.adp.adpInstance.prototype.slide = function(id,n,e){var f=DFS.adp;var that=this;gsp();var iess=(mie&&(!ie7p||!sct)&&!op||this.pars.isScr==0);var lim;if(n==1){if( ! this.leftTabber ){lim = this.pars.adpx+slt+delX[id]-10;}else{lim = slt+delX[id]-10;}}if(n==2)lim = pwh+100;if(n==3)lim = this.pars.adpy+((iess)?sht:0)+delY[id];if(n==4)lim = -this.pars.adpw-100;if(n==5)lim = pwh+100;if(n==6)lim = this.pars.adpx+slt+delX[id]-10;if(n==7)lim = -this.pars.adph-100;if(n==1 || n==2){if(parseInt(de7(id+'_adpB').style.left)<=lim){if(f.ush)de7(id+'_ash').style.left=parseInt(de7(id+'_adpB').style.left)+10+'px';de7(id+'_adpB').style.left=parseInt(de7(id+'_adpB').style.left)+10+'px';de7(id+'_adpS').style.left=parseInt(de7(id+'_adpS').style.left)+10+'px';if(f.ush)de7(id+'_ash').style.top=(iess)?sht:0+this.pars.adpy+delY[id]+'px';de7(id+'_adpB').style.top=((iess)?sht:0)+this.pars.adpy+delY[id]+'px';de7(id+'_adpS').style.top=((iess)?sht:0)+this.pars.adpy+delY[id]+this.pars.shs+'px';}else{drs=2;if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);clearInterval(this.sp7);if(n==2){this.adpHideObj(id);de7(id+'_adpB').style.left=this.pars.adpx+'px';de7(id+'_adpS').style.left=this.pars.adpx+this.pars.shs+'px';}}}if(n==3){if(parseInt(de7(id+'_adpB').style.top)>lim){if(f.ush)de7(id+'_ash').style.top=parseInt(de7(id+'_adpB').style.top)-10+'px';de7(id+'_adpB').style.top=parseInt(de7(id+'_adpB').style.top)-10+'px';de7(id+'_adpS').style.top=parseInt(de7(id+'_adpS').style.top)-10+'px';if(f.ush)de7(id+'_ash').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpB').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpS').style.left=this.pars.adpx+delX[id]+this.pars.shs+'px';}else{drs=2;if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);clearInterval(this.sp7);}}if( n == 4 ){if(parseInt(de7(id+'_adpB').style.left) > lim + ((this.leftTabber)?(100 + this.pars.adpxS):0) ){if(f.ush)de7(id+'_ash').style.left=parseInt(de7(id+'_adpB').style.left)-10+'px';de7(id+'_adpB').style.left=parseInt(de7(id+'_adpB').style.left)-10+'px';de7(id+'_adpS').style.left=parseInt(de7(id+'_adpS').style.left)-10+'px';if(f.ush)de7(id+'_ash').style.top=(iess)?sht:0+this.pars.adpy+delY[id]+'px';de7(id+'_adpB').style.top=((iess)?sht:0)+this.pars.adpy+delY[id]+'px';de7(id+'_adpS').style.top=((iess)?sht:0)+this.pars.adpy+delY[id]+this.pars.shs+'px';}else{drs=2;if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);clearInterval(this.sp7);if( ! this.leftTabber ){this.adpHideObj(id);de7(id+'_adpB').style.left = this.pars.adpx+'px';de7(id+'_adpS').style.left = this.pars.adpx+this.pars.shs+'px';}addRszEv(function(){that.dorszadp(id,that.pars.pla,0,e);})}}if( n == 5 ){if(parseInt(de7(id+'_adpB').style.top) < lim){if(f.ush)de7(id+'_ash').style.top=parseInt(de7(id+'_adpB').style.top)+10+'px';de7(id+'_adpB').style.top=parseInt(de7(id+'_adpB').style.top)+10+'px';de7(id+'_adpS').style.top=parseInt(de7(id+'_adpS').style.top)+10+'px';if(f.ush)de7(id+'_ash').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpB').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpS').style.left=this.pars.adpx+delX[id]+this.pars.shs+'px';}else{drs=2;if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);clearInterval(this.sp7);this.adpHideObj(id);de7(id+'_adpB').style.top=this.pars.adpy+'px';de7(id+'_adpS').style.top=this.pars.adpy+this.pars.shs+'px';}}if( n == 6 ){if(parseInt(de7(id+'_adpB').style.left) >= lim){if(f.ush)de7(id+'_ash').style.left=parseInt(de7(id+'_adpB').style.left)-10+'px';de7(id+'_adpB').style.left=parseInt(de7(id+'_adpB').style.left)-10+'px';de7(id+'_adpS').style.left=parseInt(de7(id+'_adpS').style.left)-10+'px';if(f.ush)de7(id+'_ash').style.top=(iess)?sht:0+this.pars.adpy+delY[id]+'px';de7(id+'_adpB').style.top=((iess)?sht:0)+this.pars.adpy+delY[id]+'px';de7(id+'_adpS').style.top=((iess)?sht:0)+this.pars.adpy+delY[id]+this.pars.shs+'px';}else{drs=2;if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);clearInterval(this.sp7);de7(id+'_adpB').style.left=this.pars.adpx+'px';de7(id+'_adpS').style.left=this.pars.adpx+this.pars.shs+'px';}}if( n == 7 ){if(parseInt(de7(id+'_adpB').style.top) > lim){if(f.ush)de7(id+'_ash').style.top=parseInt(de7(id+'_adpB').style.top)-10+'px';de7(id+'_adpB').style.top=parseInt(de7(id+'_adpB').style.top)-10+'px';de7(id+'_adpS').style.top=parseInt(de7(id+'_adpS').style.top)-10+'px';if(f.ush)de7(id+'_ash').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpB').style.left=this.pars.adpx+delX[id]+'px';de7(id+'_adpS').style.left=this.pars.adpx+delX[id]+this.pars.shs+'px';}else{drs=2;if(this.pars.isScr)this.adpScroll(id,this.pars.pla,1);clearInterval(this.sp7);this.adpHideObj(id);de7(id+'_adpB').style.top=this.pars.adpy+'px';de7(id+'_adpS').style.top=this.pars.adpy+this.pars.shs+'px';}}};DFS.adp.adpFadein = function(id){eval(id+'.adpFadeinObj("'+id+'")');};DFS.adp.adpFadeout = function(id){eval(id+'.adpFadeoutObj("'+id+'")');};DFS.adp.adpInstance.prototype.adpFadeinObj = function(id){var that=this;clearInterval(fp5);clearInterval(fo4);fia=0;this.adpShowObj(id);if(mie){de7(id+'_adpB').style.filter= "alpha(opacity=0)";de7(id+'_adpS').style.filter="alpha(opacity=0)";}else{de7(id+'_adpB').style.MozOpacity=0;de7(id+'_adpS').style.MozOpacity=0;}fp5=setInterval(function(){that.fadein(id)},fis);};DFS.adp.adpInstance.prototype.fadein = function(id){fia+=fii;if(fia <=99){if(mie){de7(id+'_adpB').style.filter="alpha(opacity="+fia+")";de7(id+'_adpS').style.filter="alpha(opacity="+3*fia/10+")";}else{de7(id+'_adpB').style.MozOpacity=fia/100;de7(id+'_adpS').style.MozOpacity=3*fia/1000;}}else{clearInterval(fp5);}};DFS.adp.adpInstance.prototype.adpFadeoutObj = function(id){var that=this;clearInterval(fo4);clearInterval(fp5);foa=99;DFS.adp.adpShow(id);if(mie){de7(id+'_adpB').style.filter= "alpha(opacity=100)";de7(id+'_adpS').style.filter="alpha(opacity=30)";}else{de7(id+'_adpB').style.MozOpacity=0.99;de7(id+'_adpS').style.MozOpacity=0.3;}fo4=setInterval(function(){that.fadeout(id)},fos);};DFS.adp.adpInstance.prototype.fadeout = function(id){foa -=foi;if(foa >=1){if(mie){de7(id+'_adpB').style.filter="alpha(opacity="+foa+")";de7(id+'_adpS').style.filter="alpha(opacity="+3*foa/10+")";}else{de7(id+'_adpB').style.MozOpacity=foa/100;de7(id+'_adpS').style.MozOpacity=3*foa/1000;}}else{this.adpHideObj(id);clearInterval(fo4);}};DFS.adp.adpInstance.prototype.mouseexit = function(evt){var f=DFS.adp;Mousex=(mie)?event.clientX+miebody().scrollLeft:evt.pageX;Mousey=(mie)?event.clientY+miebody().scrollTop:evt.pageY;gsp();wh5();if(Mousey>sht+f.exof && Mousex>=slt+f.exof && f.goex==0){  f.goex+=1;}if(f.goex==1){  if(Mousex<=slt+f.exof || Mousey<=sht+f.exof){    runCmdSet();    f.goex=2;  }}};DFS.adp.mousemove = function (evt){Mousex=(mie)?event.clientX+miebody().scrollLeft:evt.pageX;Mousey=(mie)?event.clientY+miebody().scrollTop:evt.pageY;if(mie){window.event.cancelBubble = true;window.event.returnValue = false;}else evt.preventDefault();if(mie&&!op)if(event.button!=1){moving=0;resizing=0;return true;}if(moving)window.setTimeout(function(){DFS.adp.move(DFS.adp.nEl)},10);if(resizing)window.setTimeout(function(){DFS.adp.resize(DFS.adp.nEl)},10);if(Mousex<=10 || Mousey<=window.pageYOffset+5 || Mousex>=window.innerWidth+window.pageXOffset-16 || Mousey>=window.innerHeight+window.pageYOffset-16){moving=0; resizing=0;return true;}return false;};DFS.adp.move = function(id){var f=DFS.adp;var tmp = new Function('var adpx = '+DFS.adp.nEl+'.pars.adpx;var adpy = '+DFS.adp.nEl+'.pars.adpy;var shs = '+DFS.adp.nEl+'.pars.shs;return {adpx:adpx,adpy:adpy,shs:shs};');var pars = tmp();var movex=Mousex+MovexDiff;var movey=Mousey+MoveyDiff;delX[id]=movex-pars.adpx-slt;delY[id]=movey-pars.adpy-sht;if(f.ush)de7(id+'_ash').style.left=movex+'px';de7(id+'_adpB').style.left=movex+'px';de7(id+'_adpS').style.left=movex+pars.shs+'px';if(f.ush)de7(id+'_ash').style.top=movey+'px';de7(id+'_adpB').style.top=movey+'px';de7(id+'_adpS').style.top=movey+pars.shs+'px';return false;};DFS.adp.stmr = function(){if(mie){dmt.detachEvent('onmousemove', DFS.adp.mousemove);dmt.detachEvent('onmouseup', DFS.adp.stmr);}else{document.removeEventListener("mousemove",DFS.adp.mousemove,true);document.removeEventListener("mouseup",DFS.adp.stmr,true);}moving=0;resizing=0;};DFS.adp.amre = function (evt){if(mie){dmt.attachEvent("onmousemove",DFS.adp.mousemove);dmt.attachEvent("onmouseup",DFS.adp.stmr);window.event.cancelBubble = true;window.event.returnValue = false;}else{document.addEventListener("mousemove",DFS.adp.mousemove,true);document.addEventListener("mouseup",DFS.adp.stmr,true);}Mousex=(mie)?event.clientX+miebody().scrollLeft:evt.pageX;Mousey=(mie)?event.clientY+miebody().scrollTop:evt.pageY;DFS.adp.nEl=this.adpid;if(this.id==this.adpid+'_adpT'||this.id==this.adpid+'_adpC'){moving=1;MovexDiff=parseInt(de7(this.adpid+'_adpB').style.left)-Mousex;MoveyDiff=parseInt(de7(this.adpid+'_adpB').style.top)-Mousey;de7(this.adpid+'_adpS').style.zIndex=++z_index;de7(this.adpid+'_adpB').style.zIndex=++z_index;}else if(this.id==this.adpid+'_rsize'){resizing=1;ResizexDiff=parseInt(this.style.left)-Mousex;ResizeyDiff=parseInt(this.style.top)-Mousey;}};DFS.adp.resize = function(id){var f=DFS.adp;var tmp = new Function('var bwh = '+DFS.adp.nEl+'.pars.bwh;var cpad = '+DFS.adp.nEl+'.pars.cpad;var shs = '+DFS.adp.nEl+'.pars.shs;var tsp = '+DFS.adp.nEl+'.pars.tsp;return {bwh:bwh,cpad:cpad,shs:shs,tsp:tsp};');var pars = tmp();var rx4=Mousex+ResizexDiff+9;var ry4=Mousey+ResizeyDiff+9;de7(DFS.adp.nEl+'_rsize').style.left=Math.max(rx4-9,f.mnw+2*pars.bwh-9)+'px';de7(DFS.adp.nEl+'_rsize').style.top=Math.max(ry4-9,f.mnh+2*pars.bwh-9)+'px';de7(DFS.adp.nEl+'_adpS').style.width=Math.max(rx4,f.mnw+2*pars.bwh)+'px';de7(DFS.adp.nEl+'_adpS').style.height=Math.max(ry4,f.mnh+2*pars.bwh)+'px';if(f.ush)de7(DFS.adp.nEl+'_ash').style.width=Math.max(rx4+pars.shs,f.mnw+2*pars.bwh+pars.shs)+'px';if(f.ush)de7(DFS.adp.nEl+'_ash').style.height=Math.max(ry4+pars.shs,f.mnh+2*pars.bwh+pars.shs)+'px';de7(DFS.adp.nEl+'_adpB').style.width=Math.max(rx4,f.mnw+2*pars.bwh)+'px';de7(DFS.adp.nEl+'_adpB').style.height=Math.max(ry4,f.mnh+2*pars.bwh)+'px';de7(DFS.adp.nEl+'_adpT').style.width=Math.max((rx4-2*pars.bwh),(f.mnw))+'px';de7(DFS.adp.nEl+'_adpC').style.width=Math.max((rx4-2*pars.bwh+((!op9&&mie&&!sct)?0:-2*pars.cpad)),((!op9&&mie&&!sct)?f.mnw:f.mnw-2*pars.cpad))+'px';de7(DFS.adp.nEl+'_adpC').style.height=Math.max((ry4-2*pars.bwh-pars.tsp+((!op9&&mie&&!sct)?0:-2*pars.cpad)),((!op9&&mie&&!sct)?f.mnh-pars.tsp:f.mnh-pars.tsp-2*pars.cpad))+'px';de7(DFS.adp.nEl+'_close').style.left=Math.max(rx4-pars.bwh-20,f.mnw+pars.bwh-20)+'px';return false;};DFS.adp.adpContent = function (id,text){de7(id+'_adpC').innerHTML=text;};DFS.adp.adpTitle = function(id,tCol,ttCol,tStr){var nT='<span id="'+id+'_adpTitle" style="white-space:nowrap;padding: 1px 0px 0px 3px;width:100%;position:absolute;left:0px;height:20px;">';nT+=tStr;nT+="</span>";de7(id + '_adpT').innerHTML=nT;de7(id + '_adpTitle').style.color=ttCol;de7(id + '_adpTitle').style.backgroundColor=tCol;};DFS.adp.adpSize = function(id,w,h){eval(id+'.adpSizeObj("'+id+'",'+w+','+h+')');};DFS.adp.adpInstance.prototype.adpSizeObj = function(id,w,h){var f=DFS.adp;if(w<f.mnw||h<f.mnh)return;de7(id+'_adpB').style.width=w+2*this.pars.bwh+'px';de7(id+'_adpB').style.height=h+2*this.pars.bwh+'px';de7(id+'_adpS').style.width=w+2*this.pars.bwh+'px';de7(id+'_adpS').style.height=h+2*this.pars.bwh+'px';de7(id+'_adpT').style.width=w-((!op9&&mie&&!sct)?0:0)+'px';de7(id+'_adpC').style.width=w-((!op9&&mie&&!sct)?0:2*this.pars.cpad)+'px';de7(id+'_adpC').style.height=h-this.pars.tsp-((!op9&&mie&&!sct)?0:2*this.pars.cpad)+'px';if(this.pars.ir9)de7(id+'_rsize').style.left=w+2*this.pars.bwh-9+'px';if(this.pars.ir9)de7(id+'_rsize').style.top=h+2*this.pars.bwh-9+'px';de7(id+'_close').style.left=w+this.pars.bwh-20+'px';if(f.ush)de7(id+'_ash').style.width=w+2*this.pars.bwh+this.pars.shs+'px';if(f.ush)de7(id+'_ash').style.height=h+2*this.pars.bwh+this.pars.shs+'px';this.pars.adpw=w;this.pars.adph=h;};DFS.adp.adpInstance.prototype.adpScroll = function(id,p,s){  var f=DFS.adp;  var that=this;  this.pars.isScr=s;  for(var n=0;n<=f.adpuids.length-1;n++){    if(f.adpuids[n]==id){      f.adpscr[n]=s;    }  }  if(mie && (!ie7p || !sct) && !op){    addScrEv(function(){that.doscradp(id,p);})  }  else{    for(var n=0;n<=f.adpuids.length-1;n++){      if(f.adpscr[n]==1){        de7(f.adpuids[n]+'_adpB').style.position='fixed';        de7(f.adpuids[n]+'_adpS').style.position='fixed';      }else{        de7(f.adpuids[n]+'_adpB').style.position='absolute';        de7(f.adpuids[n]+'_adpS').style.position='absolute';      }    }  }};DFS.adp.adpInstance.prototype.doscradp = function (){var f=DFS.adp;for(var n=0;n<=f.adpuids.length-1;n++){if(f.adpscr[n]==1)this.getScr(f.adpuids[n],f.xpos[f.adpuids[n]],f.ypos[f.adpuids[n]],f.adppla[n]);}};DFS.adp.adpInstance.prototype.getScr = function(id,x,y,p){var f=DFS.adp;if(drs==1)return;gsp();this.sth(this.pars.uid,p);if(f.ush)de7(this.pars.uid+'_ash').style.top=(sht+cth+delY[this.pars.uid])+'px';de7(this.pars.uid+'_adpB').style.top=(sht+cth+delY[this.pars.uid])+'px';de7(this.pars.uid+'_adpS').style.top=(sht+cth+delY[id]+this.pars.shs)+'px';if(f.ush)de7(this.pars.uid+'_ash').style.left=(slt+ctw+delX[this.pars.uid])+'px';de7(this.pars.uid+'_adpB').style.left=(slt+ctw+delX[this.pars.uid])+'px';de7(this.pars.uid+'_adpS').style.left=(slt+ctw+delX[this.pars.uid]+this.pars.shs)+'px';};function wh5(){if(self.innerHeight){pht=self.innerHeight;pwh=self.innerWidth;}else if(dmt.documentElement && sct){pht=dmt.documentElement.clientHeight;pwh=dmt.documentElement.clientWidth;}else if(document.body){pht=dmt.body.offsetHeight;pwh=dmt.body.offsetWidth;}}DFS.adp.adpPlace = function(id,p,fw){eval(id+'.adpPlaceObj("'+id+'",'+p+','+fw+')');};DFS.adp.adpInstance.prototype.adpPlaceObj = function(id,p,fw){var that=this;setTimeout(function(){that.adppl(id,p,fw)},adppdel);};DFS.adp.adpInstance.prototype.adppl = function(id,p,fw){gsp();this.sth(id,p);if(fw==1)ctw=0;if(fw==2){ctw=0;cth=0;}this.rsz(id,p,fw);this.adpLocationObj(id,ctw,cth);this.pars.adpx=ctw;this.pars.adpy=cth;};DFS.adp.adpInstance.prototype.rsz = function(id,p,fw,e){if(fw!=0){  this.pars.adpw=pwh-((mie)?(sct)?0:21:17)-2*this.pars.bwh-2*this.pars.tbw;if(fw==2)this.pars.adph=pht-((mie)?(sct)?0:4:0)-2*this.pars.bwh-2*this.pars.tbw;  this.adpSizeObj(id,this.pars.adpw,this.pars.adph);}var that=this;addRszEv(function(){that.dorszadp(id,p,fw,e);})};DFS.adp.adpInstance.prototype.dorszadp = function(id,p,fw,e){wh5();gsp();delY[id]=0;delX[id]=0;if(fw!=0){  this.pars.adpw=pwh-((mie)?(sct)?0:21:17)-2*this.pars.bwh-2*this.pars.tbw;if(fw==2)this.pars.adph=pht-((mie)?(sct)?0:4:0)-2*this.pars.bwh-2*this.pars.tbw;  this.adpSizeObj(id,this.pars.adpw,this.pars.adph);}this.sth(id,p);cth=Math.floor(cth);ctw=Math.floor(ctw);this.adpLocationObj(id,ctw,cth,0,e);};DFS.adp.adpInstance.prototype.sth = function(id,p){wh5();if(p==0){cth=this.pars.adpy;ctw=this.pars.adpx;}if(p==1){cth=(pht/2)-((mie)?(sct)?0:2:0)-((this.pars.adph+2*this.pars.bwh+2*this.pars.tbw)/2);ctw=(pwh/2)-((mie)?(sct)?0:10:8)-((this.pars.adpw+2*this.pars.bwh+2*this.pars.tbw)/2);}if(p==2){cth=(pht)-((mie)?(sct)?0:4:0)-((this.pars.adph+2*this.pars.bwh));ctw=(pwh/2)-((mie)?(sct)?0:10:8)-((this.pars.adpw+2*this.pars.bwh)/2);}if(p==3){cth=(pht/2)-((mie)?(sct)?0:2:0)-((this.pars.adph+2*this.pars.bwh+2*this.pars.tbw)/2);if( this.leftTabber ){ctw=-((this.pars.adpw)) + this.pars.adpxS;}else{ctw=0;}}if(p==4){cth=(pht/2)-((mie)?(sct)?0:2:0)-((this.pars.adph+2*this.pars.bwh+2*this.pars.tbw)/2);ctw=(pwh)-((mie)?(sct)?0:22:18)-((this.pars.adpw+2*this.pars.bwh+2*this.pars.tbw));}if(p==5){cth=0;ctw=(pwh/2)-((mie)?(sct)?0:10:8)-((this.pars.adpw+2*this.pars.bwh+2*this.pars.tbw)/2);}if(p==6){cth=0;if( this.leftTabber ){ctw=-((this.pars.adpw)) + this.pars.adpxS;}else{ctw=0;}}if(p==7){cth=(pht)-((mie)?(sct)?0:4:0)-((this.pars.adph+2*this.pars.bwh));if( this.leftTabber ){ctw=-((this.pars.adpw)) + this.pars.adpxS;}else{ctw=0;}}if(p==8){cth=(pht)-((mie)?(sct)?0:4:0)-((this.pars.adph+2*this.pars.bwh));ctw=(pwh)-((mie)?(sct)?0:22:18)-((this.pars.adpw+2*this.pars.bwh+2*this.pars.tbw));}if(p==9){cth=0;ctw=(pwh)-((mie)?(sct)?0:22:18)-((this.pars.adpw+2*this.pars.bwh+2*this.pars.tbw));}cth=Math.floor(cth);ctw=Math.floor(ctw);};DFS.adp.adpInstance.prototype.mca = function(id,v,l){if(l){var t0=new Date();t0.setTime(t0.getTime()+(l*1e3));var tl=";expires="+t0.toGMTString();}else var tl="";dmt.cookie=id+"="+escape(v)+tl+"; path=/";};DFS.adp.adpInstance.prototype.rca = function(id){var idc=id+"=";var a=document.cookie.split(';');for(var i=0;i<a.length;i++){var s=a[i];while (s.charAt(0)==' '){s=s.substring(1,s.length);}if (s.indexOf(idc)==0){return unescape(s.substring(idc.length,s.length));}}return null;};DFS.adp.adpInstance.prototype.ac1 = function(id){var s=this.rca(id+'_s');if(this.pars.pcc){var p=this.rca(id+'_p');this.mca(id+'_r',DFS.adp.alc,'');if(s&&p) this.cca(id+'_p');if(s&&!p)return true;if(!s&&!p){DFS.adp.alc=window.location.href;this.mca(id+'_s',true,'');this.mca(id+'_p',true,this.pars.tro);this.cca(id+'_p');}}else{if(s)return true; else this.mca(id+'_s',true,0);}};DFS.adp.adpInstance.prototype.cca = function(id){var that=this,t;if((this.rca(id.substring(0,id.length-2)+'_r')) != DFS.adp.alc)return;if(!this.rca(id)){DFS.adp.adpShow(id.substring(0,id.length-2));clearTimeout(t);this.adpTimer(id.substring(0,id.length-2),'','','DFS.adp.adpHide','','',this.pars.shf);}else{t=setTimeout(function(){that.cca(id)},1000);}};DFS.adp.adpInstance.prototype.adpRotation = function(id){var currContentNum = Number(this.rca(id+'_rotation'));if( ! currContentNum ){this.mca(id+'_rotation','1',86313600);currContentNum = 1;var currentContent = eval('adp_'+id);DFS.adp.adpContent(id,currentContent);}else{try{var currentContent = eval('adp_'+id+currContentNum);DFS.adp.adpContent(id,currentContent);currContentNum++;this.mca(id+'_rotation',currContentNum,86313600);}catch(err){var currentContent = eval('adp_'+id);currContentNum = 1;this.mca(id+'_rotation',currContentNum,86313600);DFS.adp.adpContent(id,currentContent);}}};DFS.adp.adpInstance.prototype.adpDiv = function(id,x,y,w,h,bgColour){var adiv=dmt.createElement('div');adiv.setAttribute('id',id);adiv.style.backgroundColor=bgColour;adiv.style.visibility='hidden';adiv.style.padding='0px 0px 0px 0px';if(id.indexOf('adpB')!=-1 || id.indexOf('adpS')!=-1){  if(this.pars.isScr==1 && ( (ie7p && sct) || !mie)){    adiv.style.position='fixed';  }else{    adiv.style.position='absolute';  }}else{  adiv.style.position='absolute';}adiv.style.left=x+'px';adiv.style.top=y+'px';adiv.style.width=w+'px';adiv.style.height=h+'px';return adiv;};DFS.adp.adpInstance.prototype.adp = function(adpid,text,titletext){var that=this,f=DFS.adp;f.adpuids[f.adpuids.length]=adpid;f.adppla[f.adppla.length]=this.pars.pla;f.adpscr[f.adpscr.length]=this.pars.isScr;f.xpos[adpid]=this.pars.adpx;f.ypos[adpid]=this.pars.adpy;delX[adpid]=0;delY[adpid]=0;f.ush=(this.pars.ifr&&ieh&&!op);if(this.pars.it9)this.pars.tsp=20;else this.pars.tsp=0;if(!w37)return;if(Math.floor(Math.random()*this.pars.rn)!=0) return this.pars.isc=1;if(f.ush){this.ash=f.adpiF(adpid+'_ash',this.pars.adpx,this.pars.adpy,this.pars.adpw+2*this.pars.bwh+this.pars.shs+((mie)?2*this.pars.tbw:0),this.pars.adph+2*this.pars.bwh+this.pars.shs+((mie)?2*this.pars.tbw:0));this.ash.style.zIndex=++z_index;}this.adpS=this.adpDiv(adpid+'_adpS',this.pars.adpx+this.pars.shs,this.pars.adpy+this.pars.shs,this.pars.adpw+2*this.pars.bwh+2*this.pars.tbw,this.pars.adph+2*this.pars.bwh+2*this.pars.tbw,this.pars.sc5);this.adpS.style.zIndex=++z_index;if(mie)this.adpS.style.filter="alpha(opacity=30)";else this.adpS.style.opacity=.3;this.adpB=this.adpDiv(adpid+'_adpB',this.pars.adpx,this.pars.adpy,this.pars.adpw+2*this.pars.bwh,this.pars.adph+2*this.pars.bwh,this.pars.bc7);this.adpB.style.zIndex=++z_index;this.adpT=this.adpDiv(adpid+'_adpT',this.pars.bwh,this.pars.bwh,this.pars.adpw,20,this.pars.tc3);this.adpT.style.overflow="hidden";this.adpT.style.font="bold 9pt Tahoma";this.adpT.style.color=this.pars.tc2;this.adpT.innerHTML='<span id="'+adpid+'_adpTitle" style="white-space:nowrap;padding: 1px 0px 0px 3px;width:100%;position:absolute;left:0px;height:20px;">'+titletext+'</span>';if(this.pars.it9){this.adpC=this.adpDiv(adpid+'_adpC',this.pars.bwh,this.pars.bwh+20,this.pars.adpw-((mie&&!sct&&!op9)?0:2*this.pars.cpad),this.pars.adph-lhg-20-((mie&&!sct&&!op9)?0:2*this.pars.cpad),this.pars.ib8);}else{this.adpT.style.height="0px";this.adpC=this.adpDiv(adpid+'_adpC',this.pars.bwh,this.pars.bwh,this.pars.adpw-((mie&&!sct&&!op9)?0:2*this.pars.cpad),this.pars.adph-lhg-((mie&&!sct&&!op9)?0:2*this.pars.cpad),this.pars.ib8);}this.adpC.style.borderColor="";this.adpC.style.borderStyle="inset";this.adpC.style.borderWidth="0px";if(this.pars.is7){this.adpC.style.overflow="auto";}else{this.adpC.style.overflow="hidden";}this.adpC.style.padding=this.pars.cpad+'px';this.adpC.style.font=this.pars.if8;this.adpC.style.color=this.pars.it3;this.rsize=this.adpDiv(adpid+'_rsize',this.pars.adpw+2*this.pars.bwh-9,this.pars.adph+2*this.pars.bwh-9,9,9,'');this.close=this.adpDiv(adpid+'_close',this.pars.adpw+this.pars.bwh-20,this.pars.bwh,20,20,'');if(!mie)this.adpC.innerHTML=text;this.adpB.appendChild(this.close);if(this.pars.ir9)this.adpB.appendChild(this.rsize);this.adpB.appendChild(this.adpT);this.adpB.appendChild(this.adpC);if(f.ush)dmt.body.appendChild(this.ash);dmt.body.appendChild(this.adpB);dmt.body.appendChild(this.adpS);if(mie)this.adpC.innerHTML=text;if(this.pars.ir9){this.rsize.style.background = 'url("/public/images/resize.gif") no-repeat';this.rsize.style.cursor='NW-resize';this.rsize.style.zIndex=++z_index;}if(this.pars.cc6){this.close.style.background = 'url("/public/images/close.gif") no-repeat';this.close.style.cursor=(mie)?'hand':'pointer';this.close.style.zIndex=++z_index;}this.adpT.adpid=adpid;this.adpC.adpid=adpid;if(this.pars.ir9)this.rsize.adpid=adpid;if(this.pars.isex==1){if(mie){setTimeout(function(){dmt.attachEvent("onmousemove",that.mouseexit);},1000);}else{setTimeout(function(){document.addEventListener("mousemove",that.mouseexit,true);},1000);}}if(this.pars.ir9)this.rsize.onmousedown=f.amre;if(this.pars.im5){this.adpT.style.cursor='move';this.adpT.onmousedown=f.amre;}if(this.pars.cnm){this.adpC.style.cursor='move';this.adpC.onmousedown=f.amre;}if(this.pars.cc6)de7(adpid+'_close').onclick = function(){that.adpHideObj(adpid);};if(this.pars.isScr && mie)this.adpScroll(adpid,this.pars.pla,1);if( this.pars.pla != 0 ){if( this.pars.pla != 10 ){this.adpPlaceObj(adpid,this.pars.pla,this.pars.fw7);}else{DFS.adp.adpAnchor(adpid,adpid+'_anchor',this.pars.adpx,this.pars.adpy);}}if( this.pars.issp ){var sp = this.rca(adpid+'_sp');if(sp){return this.pars.isc = 1;}else{this.mca(adpid+'_sp',true,this.pars.plt);if( this.pars.rot ){this.adpRotation(adpid);}return this.pars.isc = 0;}}else if( this.pars.oo7 ){if(this.ac1(adpid)){return this.pars.isc = 1;}else if( this.pars.rot ){this.adpRotation(adpid);}return this.pars.isc = 0;}else if( this.pars.rot ){this.adpRotation(adpid);}var misC = this.rca(adpid+'_misC');if(misC){return this.pars.isc = 1;}};DFS.adp.adpInstance.prototype.toggleTab = function(uid){if( parseInt(de7(uid+'_adpB').style.left) >= 0 ){DFS.adp.adpSlideOutLeft(uid);}else{DFS.adp.adpSlidein(uid);}};DFS.adp.adpInstance.prototype.dontShowAgain = function(){this.mca(this.pars.uid+'_misC',true,86313600);};DFS.adp.adpInstance.prototype.adpTimer = function(id,fid1,fid2,fid3,fid4,int1,int2){id="'" + id + "'";clearTimeout(this.tid1);clearTimeout(this.tid2);clearTimeout(this.tid3);clearTimeout(this.tid4);this.tstr1='' + fid1 + '(' + id + ')';this.tstr2='' + fid2 + '(' + id + ')';this.tstr3='' + fid3 + '(' + id + ')';this.tstr4='' + fid4 + '(' + id + ')';var that=this;this.tid1=setTimeout(that.tstr1,1000*int1);this.tid2=setTimeout(that.tstr2,1000*int1);this.tid3=setTimeout(that.tstr3,1000*(int1+int2));this.tid4=setTimeout(that.tstr4,1000*(int1+int2));};DFS.adp.adpInstance.prototype.adpTooltip = function(id,tid,w,h,adpOffX,adpOffY,adptContent,adpCol,adpFade,event){var that=this,mnh=20;this.adpLocationObj(id,adpOffX,adpOffY,1,event);this.adpSizeObj(id,w,h);DFS.adp.adpContent(id,adptContent);de7(id+'_adpC').style.backgroundColor=adpCol;if(adpFade){this.adpFadeinObj(id);de7(tid).onmouseout=function(){that.adpFadeoutObj(id);}}else{DFS.adp.adpShow(id);de7(tid).onmouseout=function(){DFS.adp.adpHide(id);}}};
}
