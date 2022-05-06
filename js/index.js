// JavaScript Document
/*大内容区家电广告切换*/
var tabs=document.getElementById("tabs").getElementsByTagName("li");
var list=document.getElementById("list").getElementsByClassName("good-box");
for(var i=0;i<tabs.length;i++){
	tabs[i].onclick=showlist;
}
function showlist(){
	for(var i=0;i<tabs.length;i++){
		if(tabs[i]===this){
			tabs[i].className="active";
			list[i].className="good-box active";
		}
		else{
			tabs[i].className="";
			list[i].className="good-box";
		}
	}
}