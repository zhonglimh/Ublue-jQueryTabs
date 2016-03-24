## Ublue jQuery Tabs插件 支持自定义样式 可多次调用


    $(function(){
        $(".tabs").UblueTabs(); //默认调用方法
     
        $(".custom").UblueTabs({ //自定义选项卡区域
            tabsTit:"customTit", //自定义标签区域
            tabsTab:"customTab", //自定义标签
            tabsCon:"customCon", //自定义内容区域
            tabsList:"customList", //自定义内容列表
            tabsHover:"customHover", //自定义鼠标点击后样式
            eventType:"click" //标签切换方式 可以选参数[ click | hover ]
        });
    });

Demo：http://www.bluesdream.com/case/jquery/jquery-tabs/
