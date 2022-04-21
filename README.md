# web前端小米商城项目实战（HTML+CSS+JS）
1. 项目介绍：
* 仿小米商城的静态页面制作，以及JS交互的实现
* 运用div+css做首页面index.html的整体布局；细节可用表格进行布局
* CSS样式和JavaScript脚本分别放到单独的CSS文件和JS文件中
2. 项目目的：
*  熟练掌握HTML语言的用法

* 掌握框架、表格、DIV等页面布局的方法

* 掌握运用CSS对页面进行统一格式处理的方法

* 掌握运用JavaScript操作HTML页面、响应用户操作及验证数据等方面的技术

2. 首页面包含内容：

* 网站LOGO

* 二级下拉导航菜单；菜单内容自定

* 滚动新闻

* 登录窗口

* 友情链接

* 版权
3. 需要注意的问题：
- 使用div、ul、li横向布局时，需要清除float浮动的影响（可使用overfloat：hidden，[具体使用方法](https://blog.csdn.net/qq_41638795/article/details/83304388）)
- 制作二级下来菜单时
-- 浮动溢出问题：由于水平导航栏涉及浮动，所以往往会与浮动溢出相关联，这就涉及到解决浮动溢出的问题
-- 下拉菜单被页面其他内容遮盖的问题：需要在顶层同级父元素设置position:relative;以及z-index，注意z-index的层级关系，否则容易出现光标移动，菜单栏就立刻消失（当然只要你的鼠标滑过速度超过导航栏消失的速度，就不会消失啦，哈哈哈）
-- 设置需要hover的元素块的范围适中（让光标能滑动这片区域都能下拉二级菜单）
4. 效果展示图：
![展示效果](https://github.com/LPmaster666/Xiaomishangcheng-web-html-css-js/blob/main/%E5%B1%95%E7%A4%BA%E6%95%88%E6%9E%9C%E5%9B%BE.png)




