/**
 * Created by hb on 2016/1/22.
 */
var autoShow = document.getElementById('banner_autoShow');

window.mySwipe = Swipe(
    autoShow,
    {
        startSlide: 0,		//��ʾ�ֲ���ʼ��ͼƬ���
        auto: 1500,         //��ʾ�Զ��ֲ��ļ��
        continuous: true,   //��ʾ�Ƿ�����һ��
        disableScroll: true,  //��ʾ�Ƿ���������ֹĬ�ϵĹ����¼������ø�
        stopPropagation: true,   //��ʾ�Ƿ���ֹð�ݣ����øġ�
        callback: function(index, element) {
            //дСԲ���ҵ��
            $(".circlt ul li").eq(index).addClass("cur").siblings().removeClass("cur");
        }
    }
);

//СԲ��ĵ��ҵ��
$(".circlt ul li").click(
    function(){
        mySwipe.slide($(this).index(),1000);
    }
);

