var rsi_k;
var rsi_now = new Date();
var rsi_csid = 'B10871';if(typeof(csids)=="undefined"){var csids=[rsi_csid];}else{csids.push(rsi_csid);};function rsiClient(Ca){this._rsiaa=Ca;this._rsiba=0;this._rsica=1;this._rsida=0;this._rsiea=0;this._rsifa=0;this._rsiga="0910011";this._rsiha="pix04.revsci.net";this._rsiia="js";this._rsija="b";this._rsika="3";this._rsila=3;this._rsima=new Array();this._rsina=0;this._rsioa=null;this._rsipa=null;this._rsiqa=null;this._rsira=null;this._rsisa=null;this._rsita=null;this._rsiua=0;this.DM_cat=function(Da){this._rsioa=Da;};this.DM_name=function(Ea){this._rsipa=Ea;};this.DM_keywords=function(st){this._rsiqa=st;};this.DM_event=function(Fa){this._rsira=Fa;};this.DM_addToLoc=function(n,v){this._rsisa=_rsiva(this._rsisa,n,v);};this.DM_addEncToLoc=function(n,v){this.DM_addToLoc(_rsiwa(n),_rsiwa(v));};this.DM_setLoc=function(u){this._rsisa=u;};this.rsi_c=function(Ca){this._rsiaa=Ca;};this.rsi_ral=function(Ga){this._rsiba=Ga;};this.rsi_riu=function(Ha){this._rsica=Ha;};this.rsi_tiu=function(Ia){this._rsida=Ia;};this.rsi_m=function(Ja){this._rsiea=Ja;};this.rsi_dw=function(Ka){this._rsifa=Ka;};this.rsi_s=function(La){this._rsiha=La;};this.rsi_t=function(Ma){this._rsiia=Ma;};this.rsi_en=function(Na){this._rsija=Na;};this.rsi_cn=function(Oa){this._rsika=Oa;};this.rsi_us=function(Pa){this._rsila=Pa;};this.DM_tag=function(){var Qa;if(this._rsina==0||this._rsiea==1){if(typeof(DM_prepClient)=="function"){DM_prepClient(this._rsiaa,this);}var Ra=this._rsixa();if(this._rsiia=="gif"){Qa=new Image(2,3);Qa.src=Ra;this._rsima[this._rsima.length]=Qa;}else if(this._rsiia=="js"){if(this._rsifa==1){document.write("<script language=\"JavaScript\" type=\"text/javascript\" src=\""+Ra+"\"><"+"/script>");}else{var Sa=document.createElement("script");Sa.language="JavaScript";Sa.type="text/javascript";Sa.src=Ra;if(document.body==null){document.getElementsByTagName("head")[0].appendChild(Sa);}else{document.body.insertBefore(Sa,document.body.firstChild);}Qa=Sa;}}this._rsina=1;}this.rsi_r();return Qa;};this._rsixa=function(){var Ta="";Ta="DM_LOC="+_rsiwa(this._rsisa);if(this._rsioa){Ta+="&DM_CAT="+_rsiwa(this._rsioa);}if(this._rsira){Ta+="&DM_EVT="+_rsiwa(this._rsira);}if(this._rsiqa){Ta+="&DM_KYW="+_rsiwa(this._rsiqa);}if(this._rsica==1&&this._rsita){Ta+="&DM_REF="+_rsiwa(this._rsita);}if(this._rsida==1){Ta+="&DM_TIT="+_rsiwa(document.title);}if(this._rsipa){Ta+="&DM_NAM="+_rsiwa(this._rsipa);}Ta+="&DM_EOM=1";var Ua="http"+(location.protocol=="https:"?"s":"")+"://";var Va="/"+this._rsiaa+"/"+this._rsija+this._rsika+"/0/"+this._rsila+"/"+this._rsiga+"/";var Wa=Math.floor(Math.random()*1000000000)+"."+this._rsiia;var Xa=Ua+this._rsiha+Va+Wa+"?D="+_rsiwa(Ta)+"&C="+_rsiwa(csids)+"&L="+this._rsiua;var Ya=Xa.length;if(Ya>=2000){if(Xa.charAt(1998)=='%'){Xa=Xa.substr(0,1998);}else if(Xa.charAt(1999)=='%'){Xa=Xa.substr(0,1999);}else{Xa=Xa.substr(0,2000);}if(Xa.charAt(Xa.length-3)=='%'&&Xa.charAt(Xa.length-2)=='2'&&Xa.charAt(Xa.length-1)=='5'){Xa=Xa.substr(0,Xa.length-3);}}return Xa;};this.rsi_r=function(){var Za;var $a;var ab=0;var bb=0;if(this._rsiba==1){var cb=window;while(true){try{Za=cb.document.location;$a=cb.document.referrer;ab=bb;}catch(notAllowed){}if(cb==window.top){break;}cb=cb.parent;bb++;}}else{Za=window.document.location;$a=window.document.referrer;}this._rsiua=bb-ab;this._rsita=_rsiya($a.toString());this._rsisa=(this._rsiua==0)?_rsiya(Za.href):this._rsita;this._rsioa=null;this._rsipa=null;this._rsiqa=null;this._rsira=null;};this.rsi_r();}var _rsiwa;if(typeof(encodeURIComponent)=="function"){_rsiwa=encodeURIComponent;}else{var _rsiza=new RegExp("[\x00-\x20]|[\x22-\x26]|[\x2B-\x2C]|\x2F|[\x3A-\x40]|[\x5B-\x5E]|\x60|[\x7B-\x7D]|[\x7F-\uFFFF]","g");_rsiwa=function(v){return v.toString().replace(_rsiza,_rsiAa);}}function _rsiva(u,n,v){return u+(u.indexOf("?")==-1?"?":"&")+n+"="+v;}function _rsiya(u){var i=u.indexOf('#');return(i>=0)?u.substr(0,i):u;}function _rsiBa(i){var db=i.toString(16).toUpperCase();return db.length<2?"0"+db:db;}function _rsiAa(c){var i=c.charCodeAt(0);if(isNaN(i))return "";if(i<128)return "%"+_rsiBa(i);if(i<2048)return "%"+_rsiBa(0xC0+(i>>6))+"%"+_rsiBa(0x80+(i&0x3F));if(i<65536)return "%"+_rsiBa(0xE0+(i>>12))+"%"+_rsiBa(0x80+(i>>6&0x3F))+"%"+_rsiBa(0x80+(i&0x3F));return "%"+_rsiBa(0xF0+(i>>18))+"%"+_rsiBa(0x80+(i>>12&0x3F))+"%"+_rsiBa(0x80+(i>>6&0x3F))+"%"+_rsiBa(0x80+(i&0x3F));}window[rsi_csid]=new rsiClient(rsi_csid);

var rsi_td=rsi_now.getFullYear()+'_'+(rsi_now.getMonth()+1)+'_'+rsi_now.getDate();
var rsi_ct=0;
var rsi_beg=document.cookie.indexOf('rsi_ct=');
if(rsi_beg>=0){
rsi_beg=document.cookie.indexOf('=',rsi_beg)+1;
if(rsi_beg>0){
if(rsi_td==document.cookie.substring(rsi_beg,rsi_beg+rsi_td.length)){
rsi_beg+=(rsi_td.length+1);
var rsi_end=document.cookie.indexOf(';',rsi_beg);
if(rsi_end==-1)
rsi_end=document.cookie.length;
var rsi_par=parseInt(document.cookie.substring(rsi_beg,rsi_end));
if(!isNaN(rsi_par))
rsi_ct=rsi_par;
}}}
var rsi_tom=new Date(rsi_now.getTime()+86400000);
var rsi_dom=location.hostname;
rsi_dom=rsi_dom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsi_dom=rsi_dom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsi_dom=rsi_dom.replace(/.*(\.[\w\-]{4,}\.[a-zA-Z]{2}$)/,'$1');
document.cookie=('rsi_ct='+rsi_td+':'+(rsi_ct+1)+';expires='+rsi_tom.toGMTString()+';path=/;domain='+rsi_dom);
rsi_k = '&ko=' + rsi_td + '__' + Math.floor((rsi_ct+4)/5);
document.writeln('<script type="text/javascript" src="' + location.protocol + '//ads.revsci.net/adserver/ako?activate&csid=B10871' + rsi_k + '" charset="ISO-8859-1"></s' + 'cript>');

function B10871_EXEC(){
	if(window.B10871 && window.B10871.DM_tag) {
		B10871.DM_tag();
	} else {
		setTimeout(B10871_EXEC,500);
	}
}
B10871_EXEC();

document.write('<sc' + 'ript type="text/javascript" src="' + location.protocol + '//cdn.c-team.jp/piggy_back/rhnd.js"></sc' + 'ript>');