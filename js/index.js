// JavaScript Document

/*轮播图*/
// 获取元素节点
var containerDom = document.getElementById("banner").getElementsByClassName("container")[0]; // 容器
var ulDom = document.getElementById("banner").getElementsByClassName("banner-list")[0]; // 图片盒子
var prevDom = document.getElementById("banner").getElementsByClassName("btn prev iconfont icon-qiehuanqizuo")[0]; // 上一张按钮
var nextDom = document.getElementById("banner").getElementsByClassName("btn next iconfont icon-qiehuanqiyou")[0]; // 下一张按钮
var numUlDom = document.getElementById("banner").getElementsByClassName("page")[0]; // 数字按钮父级容器
var numList = document.getElementById("banner").getElementsByClassName("page")[0].getElementsByTagName("a");
// 定义全局变量
var currentIndex = 0; // 当前显示的图片索引
var timer = null; // 自动播放定时器
// 上一张
prevDom.addEventListener("click", prevFun);
// 下一张
nextDom.addEventListener("click", nextFun);
// 鼠标移入容器，停止自动播放
containerDom.addEventListener("mouseenter", stopAutoPlay);
// 鼠标移出容器，开启自动播放
containerDom.addEventListener("mouseleave", autoPlay);
// 数字按钮点击事件
numUlDom.addEventListener("click", numClick);

// 开启自动播放
autoPlay();
// 切换上一张
function prevFun() {
  ulDom.style.transition = "3s";
  numList[currentIndex].style.backgroundColor = ""; // 清空上一个按钮的样式
  if (currentIndex === 0) {
    ulDom.style.transition = "0s"; // 为了实现无缝滚动，清除动画
    currentIndex = 2;
  } else {
    --currentIndex;
  }
  ulDom.style.left = (currentIndex* -1226)+"px";
  numList[currentIndex].style.backgroundColor = "#ccc";
}

// 切换下一张
function nextFun() {
  ulDom.style.transition = "3s";
  numList[currentIndex].style.backgroundColor = ""; // 清空上一个按钮的样式
  if (currentIndex === 3) {
    ulDom.style.transition = "0s"; // 为了实现无缝滚动，清除动画
	currentIndex = 0; // 重新播放第一张
  } else {
    ++currentIndex;
  }
  ulDom.style.left = (currentIndex* -1226)+"px";
  numList[currentIndex].style.backgroundColor = "#ccc";
}

// 数字按钮点击事件
function numClick(e) {
  ulDom.style.transition = "3s";
  var index = e.target.dataset.index;
  if (index == undefined) {
    return;
  }
  numList[currentIndex].style.backgroundColor = ""; // 清空上一个按钮的样式
  currentIndex = Number(index);
  numList[currentIndex].style.backgroundColor = "#ccc";
  ulDom.style.left = (currentIndex* -1226)+"px";
}

// 循环播放
function autoPlay() {
  timer = setInterval(nextFun, 3000);
}

// 关闭自动播放
function stopAutoPlay() {
  // 清除定时器
  clearInterval(timer);
}
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
