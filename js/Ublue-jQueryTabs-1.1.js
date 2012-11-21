/*!
 * Ublue jQuery Tabs
 * Version 1.1
 * Copyright (c) 2011, 梦幻神化 
 * http://www.bluesdream.com
 *
 * Date: 2011.10.25
 * Update:2012.09.04
 * 
 * 请保留此信息，如果您有修改或意见可通过网站给我留言，也可以通过邮件形式联系本人。
 * Mail: hello@bluesdream.com
 */

$.fn.UblueTabs=function(options){
	var $this = $(this);
	var defaults = { //设置默认参数
		tabsTit:"tabsTit",
		tabsTab:"tabsTab",
		tabsCon:"tabsCon",
		tabsList:"tabsList",
		tabsHover:"tabsHover",
		eventType:"hover"
	};
	var options = $.extend(defaults, options); //合并多个对象为一个。也就是如果你在调用的时候写了新的参数，就用你新的参数，如果没有写，就用默认的参数。

	$("."+options.tabsCon+"."+options.tabsList+":eq(0)").siblings().hide(); //隐藏第一个元素以外的其余兄弟元素

	if( options.eventType == "hover"){
		$this.find("."+options.tabsTit+"").each(function(){
			$(this).find("."+options.tabsTab+"").each(function(i){
				$(this).hover(function(){
					$(this).addClass(""+options.tabsHover+"")
						   .siblings()
						   .removeClass(""+options.tabsHover+"");
					$(this).parent("."+options.tabsTit+"").siblings("."+options.tabsCon+"").find("."+options.tabsList+":eq("+i+")")
						   .show()
						   .siblings()
						   .hide();
				});
			});
		});
	}else if(options.eventType == "click"){
		$this.find("."+options.tabsTit+"").each(function(){
			$(this).find("."+options.tabsTab+"").each(function(i){
				$(this).click(function(){
					$(this).addClass(""+options.tabsHover+"").siblings()
						   .removeClass(""+options.tabsHover+"");
					$(this).parent("."+options.tabsTit+"").siblings("."+options.tabsCon+"").find("."+options.tabsList+":eq("+i+")")
						   .show()
						   .siblings()
						   .hide();
				});
			});
		});
	};
};