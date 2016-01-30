/**
 * Created by hb on 2016/1/22.
 */
var autoShow = document.getElementById('banner_autoShow');

window.mySwipe = Swipe(
    autoShow,
    {
        startSlide: 0,		//表示轮播开始的图片编号
        auto: 1500,         //表示自动轮播的间隔
        continuous: true,   //表示是否再来一轮
        disableScroll: true,  //表示是否在上面阻止默认的滚轮事件，不用改
        stopPropagation: true,   //表示是否阻止冒泡，不用改。
        callback: function(index, element) {
            //写小圆点的业务
            $(".circlt ul li").eq(index).addClass("cur").siblings().removeClass("cur");
        }
    }
);

//小圆点的点击业务
$(".circlt ul li").click(
    function(){
        mySwipe.slide($(this).index(),1000);
    }
);

