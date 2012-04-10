/* AG-develop 12.7.1-401 (2011-12-07 17:23:16 UTC) */
rsinetsegs=['B10871_10120','B10871_10092','B10871_10001','B10871_10153','B10871_10118','B10871_10303','B10871_10356','B10871_10358','B10871_10479','B10871_10527','B10871_50003','B10871_50004'];
var rsiExp=new Date((new Date()).getTime()+2419200000);
var rsiDom=location.hostname;
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.[a-zA-Z]{3}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]+\.\w+\.[a-zA-Z]{2}$)/,'$1');
rsiDom=rsiDom.replace(/.*(\.[\w\-]{3,}\.[a-zA-Z]{2}$)/,'$1');
var rsiSegs="";
var rsiPat=/.*_5.*/;
var i=0;
for(x=0;x<rsinetsegs.length&&i<10;++x){if(!rsiPat.test(rsinetsegs[x])){rsiSegs+='|'+rsinetsegs[x];++i;}}
document.cookie="rsi_segs="+(rsiSegs.length>0?rsiSegs.substr(1):"")+";expires="+rsiExp.toGMTString()+";path=/;domain="+rsiDom;
if(typeof(DM_onSegsAvailable)=="function"){DM_onSegsAvailable(['B10871_10120','B10871_10092','B10871_10001','B10871_10153','B10871_10118','B10871_10303','B10871_10356','B10871_10358','B10871_10479','B10871_10527','B10871_50003','B10871_50004'],'b10871');}