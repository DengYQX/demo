window.onload = function(){
   var timer = null;                                                          //定时器变量
    var onOff = true;
    var screenHeigth = window.screen.height - 100;
    //滚轮 滚动开关
  var wrapDiv = document.getElementById('oBox'),                            //父级DOM
      moveBox = document.getElementById('oBoxWrap'),                         //动画DOM
      oCh = currentPosition=document.documentElement.scrollTop || document.body.scrollTop,//获取可视高度
      twoPosition = $('.twoBox').offset().top;
      threePosition = $('.twoBox').offset().top;
      oDiv = document.getElementsByClassName('box');                          //获取每个可视区容器
	 var scrollFunc = function (e, Positions) {  
        e = e || window.event;  
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            	clearInterval(timer);  
                timer=setInterval(runToTop,2);  
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                alert("滑轮向下滚动");  
            }  
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向上滚动时
            	clearInterval(timer);  
                timer=setInterval(runToTop,2);  
            }  
            if (e.detail< 0) { //当滑轮向下滚动时  
                alert("滑轮向下滚动");  
            }  
        }  
    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) { 
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc
    
    //向上滚动
    function runToTop(Position) { 
	    var currentPosition=document.documentElement.scrollTop || document.body.scrollTop;   
	    currentPosition-=10;
	    if(oCh === document.body.scrollHeight) {
	    	window.scrollTo(0,currentPosition);  
	    }
//	    if(currentPosition>100)  
//	    {  
//	        window.scrollTo(0,currentPosition);  
//	    }  
//	    else
//	    {   console.log(oCh);
//	        window.scrollTo(0,100); 
//	        clearInterval(timer);  
//   }  
	} 
//	/*获取当前CUR 位置*/
//  function getCurrent(){
//    var Currlocation = window.document 
//     return Currlocation;
//  };
//	
//	Wheel(document,function(T){
//      if(onOff){
//          clearTimeout(timer);
//          onOff = false;
//          var Index = getCurrent();                                              //获取当前CUR 位置
//          if(T){/*鼠标向上滚动*/
//              var I = Index-1;
//              if(I>=0){
//                 animate(I); 
//              }
//              timer = setTimeout(function(){
//                  onOff = true;
//              },500);
//          }else{/*鼠标向下滚动*/
//              var I = Index+1;
//              if(I<aSpan.length){
//                 animate(I); 
//              }
//              timer = setTimeout(function(){
//                  onOff = true;
//              },500);
//          }
//      }
//  })
}		
   