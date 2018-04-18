function showPic(whichpic){
var source=whichpic.href;
document.getElementById("tu6").src=source;
var text=whichpic.getAttribute("title");
var description=document.getElementById("tu");
description.firstChild.nodeValue=text;
}