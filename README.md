Ublue-jQueryTabs
================

    $(function(){
        $(".tabs").UblueTabs(); //默认调用方法
     
        $(".custom").UblueTabs({ //自定义选项卡区域
            tabsTit:"customTit", //自定义标签区域
            tabsTab:"customTab", //自定义标签
            tabsCon:"customCon", //自定义内容区域
            tabsList:"customList", //自定义内容列表
            tabsHover:"customHover", //自定义鼠标点击后样式
            eventType:"click" //鼠标经过标签切换内容 （此处不写则默认为hover事件 当然也可以把这里的click改成hover）
        });
    });

原文地址：http://www.bluesdream.com/blog/ublue-jquery-tabs-plugin.html
