//1、定义基本配置
seajs.config({
  base: '/',  // 设置别名，如果在二级目录这样配置：则base:'/erjimulu/'
  alias: {
  	//YSframe框架基础 js模块
    'jquery': 'YS-frame/jquery/jquery/1.10.1/jquery.js', 
    'YS':'YS-frame/YS.js', 

    //这里加载项目js
    'app1':'js/app1.js', 
    'app2':'js/app2.js', 
 
    //这里加载css
    'bcss':'css/bootstrap.css', 
    'mycss':'css/mycss.css'
  }
}) 

 //2、动态加载css
 seajs.use(['bcss','mycss']);

// 3、加载 项目js模块
seajs.use(['jquery','YS'],function(){
	seajs.use(['app1','app2']);
}); 






 
 