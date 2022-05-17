// JavaScript Document
/* app二维码滑动*/
var J_app = document.getElementById("j-app"),
    appCode = document.querySelector(".down-box");
J_app.onmouseover = function() {
    appCode.style.height = "148px";
    J_app.classList.add('active');
}
J_app.onmouseout = function() {
    appCode.style.height = "0";
    J_app.classList.remove('active');
}
/*购物车*/
var j_menu = document.getElementById("pop"),
    site_Shop = document.querySelector(".car-box");
site_Shop.onmouseover = function() {
    j_menu.style.height = "99px";
}
site_Shop.onmouseout = function() {
        j_menu.style.height = "0";
}
/*侧边导航栏 向下滚动出现回顶部*/
var J_atop = document.getElementById("J_atop");
// 当网页向下滑动 854px 出现"返回顶部" 按钮
window.onscroll = function() { scrollFun() };

function scrollFun() {
    if (document.body.scrollTop >854 || document.documentElement.scrollTop > 854) {
        J_atop.classList.add("active");
    } else {
        J_atop.classList.remove("active");
    }
}

function topFun() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*点击返回顶部*/
J_atop.onclick = function() {
    topFun();
}
/*搜索框*/
var $search = document.getElementById("search"),
	tags = document.getElementById("tags");
$search.onclick=test;
function test(){
	if($search===this){
		$search.className="search active";
		tags.style.display="none";//点击搜索框后 热点标签消失
	}
	else{
		$search.className="search";
	}
}
$search.onmouseout=setInterval(test2,3000);//定时推荐下拉框消失
function test2(){
	$search.className="search";
}
