//****** Advanced DHTML Popup Ultimate Version 3.41.2.76 Script Version 3.02 ******
// Copyright (c) Digital Flow Software 2005-2011
// The present javascript code is property of Digital Flow Software.
// This code may NOT be integrated into any web based service including any service providing video or any content publishing to third parties. This code can only be used inside Internet/Intranet web sites located on *web servers*, as the outcome of a licensed Advanced DHTML Popup application only. 
// This code *cannot* be used inside distributable implementations (such as demos, applications or CD-based webs), unless this implementation is licensed with an "Advanced DHTML Popup License for Distributed Applications". 
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, facsimile, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// ***Removal of the present copyright notice is strictly prohibited***
var df,rf=false,na=navigator.userAgent,dt=document,op=(na.indexOf('Opera')!=-1),dm=(dt.getElementById)?true:false,ie5x=(dt.all&&dm),mci=(na.indexOf('Mac')!=-1);df=((ie5x||op)&&mci);decide();function decide(){if(df){return;}else{rf=true;}}
if(rf){
function initADP(){bdf=0;
// *** Begin advanced user scripting area ***
  htmlstring="<center><br> <p style=\"font-size:12px;color: #0F0F0F\">VisitBritain would like to invite you to take part in a short survey about our website.</p> <p style=\"font-size:12px;color: #0F0F0F\">It should take no more than a couple of minutes.</p> <a style=\"font-size:12px;color: #0F0F0F\" href=\"http://managed.surveyshack.com/s/BPTnJW7ILNcCSB7\">Please click here to be taken to the survey</p> </center>   ";
  VBpilot = new DFS.adp.adpInstance("VBpilot", 1, "#42A0FF", 0, 0, 0, 3, 0, 0, 0, 0, 0, 10, 3, 0, 0, 0, 0, 0, 25, 10, 350, 175, 1, "#0F0F0F", "#42A0FF", "#FFFFFF", 1, 0, "#0F0F0F", 0, 1, 1, 1, 1, "8pt Arial", "#1C5EA2", 0, 0);
  VBpilot.adp("VBpilot",htmlstring,"VisitBritain Survey");
  if(!VBpilot.pars.isc){ 
    DFS.adp.adpShow('VBpilot');
  }
// *** End advanced user scripting area ***
}
if(window.attachEvent){window.attachEvent('onload', initADP);}else{if(typeof window.onload == 'function'){var preADP = window.onload;window.onload = function(){preADP();initADP();}}else{window.onload = initADP;}}
}
