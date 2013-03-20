/* SWFObject v2.1 <http://code.google.com/p/swfobject/> Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis. This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> */
var swfobject=function(){var N="undefined",y="object",G="Shockwave Flash",H="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",o="SWFObjectExprInst",P=window,m=document,x=navigator,n=[],B=[],z=[],v=[],E,L=null,J=null,K=null,t=false,u=false;var M=function(){var Z=typeof m.getElementById!=N&&typeof m.getElementsByTagName!=N&&typeof m.createElement!=N,X=[0,0,0],R=null;if(typeof x.plugins!=N&&typeof x.plugins[G]==y){R=x.plugins[G].description;if(R&&!(typeof x.mimeTypes!=N&&x.mimeTypes[q]&&!x.mimeTypes[q].enabledPlugin)){R=R.replace(/^.*\s+(\S+\s+\S+$)/,"$1");X[0]=parseInt(R.replace(/^(.*)\..*$/,"$1"),10);X[1]=parseInt(R.replace(/^.*\.(.*)\s.*$/,"$1"),10);X[2]=/r/.test(R)?parseInt(R.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof P.ActiveXObject!=N){var Q=null,T=false;try{Q=new ActiveXObject(H+".7")}catch(S){try{Q=new ActiveXObject(H+".6");X=[6,0,21];Q.AllowScriptAccess="always"}catch(S){if(X[0]==6){T=true}}if(!T){try{Q=new ActiveXObject(H)}catch(S){}}}if(!T&&Q){try{R=Q.GetVariable("$version");if(R){R=R.split(" ")[1].split(",");X=[parseInt(R[0],10),parseInt(R[1],10),parseInt(R[2],10)]}}catch(S){}}}}var Y=x.userAgent.toLowerCase(),W=x.platform.toLowerCase(),aa=/webkit/.test(Y)?parseFloat(Y.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,U=/MSIE/.test(navigator.userAgent),ab=true,V=false;return{w3cdom:Z,pv:X,webkit:aa,ie:U,win:ab,mac:V}}();var A=function(){if(!M.w3cdom){return}b(w);if(M.ie&&M.win){try{m.write("<script id=__ie_ondomload defer=true src=//:></script>");E=r("__ie_ondomload");if(E){c(E,"onreadystatechange",f)}}catch(Q){}}if(M.webkit&&typeof m.readyState!=N){L=setInterval(function(){if(/loaded|complete/.test(m.readyState)){e()}},10)}if(typeof m.addEventListener!=N){m.addEventListener("DOMContentLoaded",e,null)}d(e)}();function f(){if(E.readyState=="complete"){E.parentNode.removeChild(E);e()}}function e(){if(t){return}if(M.ie&&M.win){var T=i("span");try{var U=m.getElementsByTagName("body")[0].appendChild(T);U.parentNode.removeChild(U)}catch(R){return}}t=true;if(L){clearInterval(L);L=null}var Q=n.length;for(var S=0;S<Q;S++){n[S]()}}function b(Q){if(t){Q()}else{n[n.length]=Q}}function d(Q){if(typeof P.addEventListener!=N){P.addEventListener("load",Q,false)}else{if(typeof m.addEventListener!=N){m.addEventListener("load",Q,false)}else{if(typeof P.attachEvent!=N){c(P,"onload",Q)}else{if(typeof P.onload=="function"){var R=P.onload;P.onload=function(){R();Q()}}else{P.onload=Q}}}}}function w(){var T=B.length;for(var Q=0;Q<T;Q++){var R=B[Q].id;if(M.pv[0]>0){var S=r(R);if(S){B[Q].width=S.getAttribute("width")?S.getAttribute("width"):"0";B[Q].height=S.getAttribute("height")?S.getAttribute("height"):"0";if(s(B[Q].swfVersion)){if(M.webkit&&M.webkit<312){p(S)}F(R,true)}else{if(B[Q].expressInstall&&!u&&s("6.0.65")&&(M.win||M.mac)){I(B[Q])}else{l(S)}}}}else{F(R,true)}}}function p(Y){var X=Y.getElementsByTagName(y)[0];if(X){var U=i("embed"),Q=X.attributes;if(Q){var R=Q.length;for(var V=0;V<R;V++){if(Q[V].nodeName=="DATA"){U.setAttribute("src",Q[V].nodeValue)}else{U.setAttribute(Q[V].nodeName,Q[V].nodeValue)}}}var S=X.childNodes;if(S){var T=S.length;for(var W=0;W<T;W++){if(S[W].nodeType==1&&S[W].nodeName=="PARAM"){U.setAttribute(S[W].getAttribute("name"),S[W].getAttribute("value"))}}}Y.parentNode.replaceChild(U,Y)}}function I(X){u=true;var V=r(X.id);if(V){if(X.altContentId){var Q=r(X.altContentId);if(Q){J=Q;K=X.altContentId}}else{J=a(V)}if(!(/%$/.test(X.width))&&parseInt(X.width,10)<310){X.width="310"}if(!(/%$/.test(X.height))&&parseInt(X.height,10)<137){X.height="137"}m.title=m.title.slice(0,47)+" - Flash Player Installation";var W=M.ie&&M.win?"ActiveX":"PlugIn",R=m.title,T="MMredirectURL="+P.location+"&MMplayerType="+W+"&MMdoctitle="+R,Y=X.id;if(M.ie&&M.win&&V.readyState!=4){var U=i("div");Y+="SWFObjectNew";U.setAttribute("id",Y);V.parentNode.insertBefore(U,V);V.style.display="none";var S=function(){V.parentNode.removeChild(V)};c(P,"onload",S)}k({data:X.expressInstall,id:o,width:X.width,height:X.height},{flashvars:T},Y)}}function l(S){if(M.ie&&M.win&&S.readyState!=4){var Q=i("div");S.parentNode.insertBefore(Q,S);Q.parentNode.replaceChild(a(S),Q);S.style.display="none";var R=function(){S.parentNode.removeChild(S)};c(P,"onload",R)}else{S.parentNode.replaceChild(a(S),S)}}function a(V){var Q=i("div");if(M.win&&M.ie){Q.innerHTML=V.innerHTML}else{var U=V.getElementsByTagName(y)[0];if(U){var R=U.childNodes;if(R){var S=R.length;for(var T=0;T<S;T++){if(!(R[T].nodeType==1&&R[T].nodeName=="PARAM")&&!(R[T].nodeType==8)){Q.appendChild(R[T].cloneNode(true))}}}}}return Q}function k(R,ad,V){var ae,T=r(V);if(T){if(typeof R.id==N){R.id=V}if(M.ie&&M.win){var Q="";for(var U in R){if(R[U]!=Object.prototype[U]){if(U.toLowerCase()=="data"){ad.movie=R[U]}else{if(U.toLowerCase()=="styleclass"){Q+=' class="'+R[U]+'"'}else{if(U.toLowerCase()!="classid"){Q+=" "+U+'="'+R[U]+'"'}}}}}var ac="";for(var W in ad){if(ad[W]!=Object.prototype[W]){ac+='<param name="'+W+'" value="'+ad[W]+'" />'}}T.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+Q+">"+ac+"</object>";z[z.length]=R.id;ae=r(R.id)}else{if(M.webkit&&M.webkit<312){var S=i("embed");S.setAttribute("type",q);for(var X in R){if(R[X]!=Object.prototype[X]){if(X.toLowerCase()=="data"){S.setAttribute("src",R[X])}else{if(X.toLowerCase()=="styleclass"){S.setAttribute("class",R[X])}else{if(X.toLowerCase()!="classid"){S.setAttribute(X,R[X])}}}}}for(var Y in ad){if(ad[Y]!=Object.prototype[Y]){if(Y.toLowerCase()!="movie"){S.setAttribute(Y,ad[Y])}}}T.parentNode.replaceChild(S,T);ae=S}else{var ab=i(y);ab.setAttribute("type",q);for(var Z in R){if(R[Z]!=Object.prototype[Z]){if(Z.toLowerCase()=="styleclass"){ab.setAttribute("class",R[Z])}else{if(Z.toLowerCase()!="classid"){ab.setAttribute(Z,R[Z])}}}}for(var aa in ad){if(ad[aa]!=Object.prototype[aa]&&aa.toLowerCase()!="movie"){j(ab,aa,ad[aa])}}T.parentNode.replaceChild(ab,T);ae=ab}}}return ae}function j(Q,S,T){var R=i("param");R.setAttribute("name",S);R.setAttribute("value",T);Q.appendChild(R)}function D(Q){var R=r(Q);if(R&&(R.nodeName=="OBJECT"||R.nodeName=="EMBED")){if(M.ie&&M.win){if(R.readyState==4){C(Q)}else{P.attachEvent("onload",function(){C(Q)})}}else{R.parentNode.removeChild(R)}}}function C(R){var S=r(R);if(S){for(var Q in S){if(typeof S[Q]=="function"){S[Q]=null}}S.parentNode.removeChild(S)}}function r(S){var R=null;try{R=m.getElementById(S)}catch(Q){}return R}function i(Q){return m.createElement(Q)}function c(S,Q,R){S.attachEvent(Q,R);v[v.length]=[S,Q,R]}function s(R){var Q=M.pv,S=R.split(".");S[0]=parseInt(S[0],10);S[1]=parseInt(S[1],10)||0;S[2]=parseInt(S[2],10)||0;return(Q[0]>S[0]||(Q[0]==S[0]&&Q[1]>S[1])||(Q[0]==S[0]&&Q[1]==S[1]&&Q[2]>=S[2]))?true:false}function h(U,Q){if(M.ie&&M.mac){return}var R=m.getElementsByTagName("head")[0],T=i("style");T.setAttribute("type","text/css");T.setAttribute("media","screen");if(!(M.ie&&M.win)&&typeof m.createTextNode!=N){T.appendChild(m.createTextNode(U+" {"+Q+"}"))}R.appendChild(T);if(M.ie&&M.win&&typeof m.styleSheets!=N&&m.styleSheets.length>0){var S=m.styleSheets[m.styleSheets.length-1];if(typeof S.addRule==y){S.addRule(U,Q)}}}function F(Q,R){var S=R?"visible":"hidden";if(t&&r(Q)){r(Q).style.visibility=S}else{h("#"+Q,"visibility:"+S)}}function O(S){var R=/[\\\"<>\.;]/;var Q=R.exec(S)!=null;return Q?encodeURIComponent(S):S}var g=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var V=v.length;for(var Q=0;Q<V;Q++){v[Q][0].detachEvent(v[Q][1],v[Q][2])}var R=z.length;for(var S=0;S<R;S++){D(z[S])}for(var T in M){M[T]=null}M=null;for(var U in swfobject){swfobject[U]=null}swfobject=null})}}();return{registerObject:function(Q,S,T){if(!M.w3cdom||!Q||!S){return}var R={};R.id=Q;R.swfVersion=S;R.expressInstall=T?T:false;B[B.length]=R;F(Q,false)},getObjectById:function(S){var T=null;if(M.w3cdom){var R=r(S);if(R){var Q=R.getElementsByTagName(y)[0];if(!Q||(Q&&typeof R.SetVariable!=N)){T=R}else{if(typeof Q.SetVariable!=N){T=Q}}}}return T},embedSWF:function(aa,Z,ac,T,ab,ad,S,Y,R){if(!M.w3cdom||!aa||!Z||!ac||!T||!ab){return}ac+="";T+="";if(s(ab)){F(Z,false);var Q={};if(R&&typeof R===y){for(var U in R){if(R[U]!=Object.prototype[U]){Q[U]=R[U]}}}Q.data=aa;Q.width=ac;Q.height=T;var X={};if(Y&&typeof Y===y){for(var V in Y){if(Y[V]!=Object.prototype[V]){X[V]=Y[V]}}}if(S&&typeof S===y){for(var W in S){if(S[W]!=Object.prototype[W]){if(typeof X.flashvars!=N){X.flashvars+="&"+W+"="+S[W]}else{X.flashvars=W+"="+S[W]}}}}b(function(){k(Q,X,Z);if(Q.id==Z){F(Z,true)}})}else{if(ad&&!u&&s("6.0.65")&&(M.win||M.mac)){u=true;F(Z,false);b(function(){var ae={};ae.id=ae.altContentId=Z;ae.width=ac;ae.height=T;ae.expressInstall=ad;I(ae)})}}},getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:s,createSWF:function(Q,R,S){if(M.w3cdom){return k(Q,R,S)}else{return undefined}},removeSWF:function(Q){if(M.w3cdom){D(Q)}},createCSS:function(R,Q){if(M.w3cdom){h(R,Q)}},addDomLoadEvent:b,addLoadEvent:d,getQueryParamValue:function(S){var T=m.location.search||m.location.hash;if(S==null){return O(T)}if(T){var R=T.substring(1).split("&");for(var Q=0;Q<R.length;Q++){if(R[Q].substring(0,R[Q].indexOf("="))==S){return O(R[Q].substring((R[Q].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(u&&J){var Q=r(o);if(Q){Q.parentNode.replaceChild(J,Q);if(K){F(K,true);if(M.ie&&M.win){J.style.display="block"}}J=null;K=null;u=false}}}}}();