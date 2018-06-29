$(function(){
	//加载头部
	$("_head").load("/project/dist/html/include/header.html");
	//加载尾部
	$("_foot").load("/html/include/footer.html");
	//container_1模板数据渲染
	$.getJSON("/project/dist/mock/index_list.json",function(data){
		const html=template("hotSale_template",{list:data.res_body.list});
		$(".hot_prodSale").prepend(html);
	});
	//guessyou_like模板数据渲染
	$.getJSON("/project/dist/mock/index_list.json",function(data){
		const html2=template("yourLike_template",{list2:data.res_body.list2});
		$(".yourlike_prodSale").prepend(html2);
	});
	
	
//	$.getJSON("/project/dist/mock/floor.json",function(data){
//		const html3=template("lv1_template",{lv:data.res_body.lv});
//		$(".container_3").prepend(html3);
//	});
          //三级菜单显示
      $(".second_menu").hover(function(e){
      	$(this).css({
      		"background":"#666"
      		
     	})
      	$(this).find(".third_menu").css({
      		"display":"block",
      		 zIndex:500
      	})
      	$(".banner_right").css({
      		display:"none"
      	})
      	$("#banner_carousel").css({
      		display:"none"
      	})
      },function(){
      	$(this).css({
      		"background":"none"
      		
     	})
      	$(this).find(".third_menu").css({
      		"display":"none"
      	})
      	$(".banner_right").css({
      		display:"block"
      	})
      	$("#banner_carousel").css({
      		display:"block"
      	})
      })
	$(window).on("scroll",function(){
		var _srcoll = $(window).scrollTop();
		//吸顶样式
		if(_srcoll > 160){
                    $(".fileheader").css({
                        position:"fixed",
                        display:"block",
                        top:0,
                        zIndex:300,
                    })
                }else{
                    $(".fileheader").css({
                        display:"none"
                    })    
                }
        //商品翻页
        $("#btn_right").on("click",function(){
        	$(".hot_prodSale").css({
        		"transition":"all 2s",
        		"transform":"translateX(-964px)"
        	})
        	$(this).css({
        		"display":"none"
        	})
        	$("#btn_left").css({
      		    "display":"block"
      	    })
        })
        $("#btn_left").on("click",function(){
        	$(".hot_prodSale").css({
        		"transition":"all 2s",
        		"transform":"translateX(0)"
        	})
        	$(this).css({
        		"display":"none"
        	})
        	$("#btn_right").css({
      		    "display":"block"
      	    })
        })
        //楼层导航
        var top_f1 = $(".level").eq(0).offset().top; //1楼相对于文档的定位
                if(_srcoll > top_f1 - $(window).innerHeight()/2){
                    $(".navigation").css({
                        display:"block"
                    })
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(0).addClass("current");
                }else{
                    $(".navigation").css({
                        display:"none"
                    })        
                }
        var top_f2 = $(".level").eq(1).offset().top; //2楼相对于文档的定位
                if(_srcoll > top_f2 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(1).addClass("current");
                }
        var top_f3 = $(".level").eq(2).offset().top; //3楼相对于文档的定位
                if(_srcoll > top_f3 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(2).addClass("current");
                }
        
        var top_f4 = $(".level").eq(3).offset().top; //4楼相对于文档的定位
                if(_srcoll > top_f4 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(3).addClass("current");
                }
        var top_f5 = $(".level").eq(4).offset().top; //5楼相对于文档的定位
                if(_srcoll > top_f5 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(4).addClass("current");
                }
        
        var top_f6 = $(".level").eq(5).offset().top; //6楼相对于文档的定位
                if(_srcoll > top_f6 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(5).addClass("current");
                }
        var top_f7 = $(".level").eq(6).offset().top; //7楼相对于文档的定位
                if(_srcoll > top_f7 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(6).addClass("current");
                }
        var top_f8 = $(".level").eq(7).offset().top; //8楼相对于文档的定位
                if(_srcoll > top_f8 - $(window).innerHeight()/2){
                    for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                        $(".navigation a").eq(i).removeClass("current");
                    }
                    $(".navigation a").eq(7).addClass("current");
                }
        //点击楼层navigation改变定位
        $(".navigation").on("click","a",function(e){
                e = e || event;
                var src = e.target;
                const divs = $(".navigation a");
                var index = divs.index(this);
                var lvs = $(".level");
                var _top = lvs.eq(index).offset().top;
                
                for(var i = 0,len = $(".navigation a").length; i < len ; i++){
                    $(".navigation a").eq(i).removeClass("current");
                }
                    $(".navigation a").eq(index).addClass("current");
               $('html,body').animate({scrollTop:_top}, 100);
            })
	});
	//banner
	$("#banner_carousel").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/banner1.jpg"},
						{href:"#", src:"/project/dist/img/banner2.jpg"},
						{href:"#", src:"/project/dist/img/banner3.jpg"},
						{href:"#", src:"/project/dist/img/banner4.jpg"},
						{href:"#", src:"/project/dist/img/banner5.jpg"},
						{href:"#", src:"/project/dist/img/banner6.jpg"},
						{href:"#", src:"/project/dist/img/banner7.jpg"}
					], 
					width: 785,
                    height: 430,
					showBtn: true
				});
	//各楼层轮播
	$("#left_carousel1").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line3_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line3_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line3_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});
	$("#left_carousel2").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line4_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line4_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line4_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});	
	$("#left_carousel3").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line5_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line5_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line5_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});		
	$("#left_carousel4").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line6_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line6_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line6_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});		
	$("#left_carousel5").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line3_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line3_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line3_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});
	$("#left_carousel6").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line4_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line4_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line4_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});	
	$("#left_carousel7").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line5_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line5_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line5_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});		
	$("#left_carousel8").carousel({
					duration: 3000, 
					imgs: [
						{href:"#", src:"/project/dist/img/index_line6_1.1.jpg"},
						{href:"#", src:"/project/dist/img/index_line6_1.2.jpg"},
						{href:"#", src:"/project/dist/img/index_line6_1.3.jpg"}
					], 
					width: 306,
                    height: 464,
					showBtn: false
				});						
	// 点击热卖商品图片，加入购物车，事件委派
	$(".yourlike_prodSale").on("click",".collection",function(){
		const currProd = {
					id : $(this).parents("li").find(".id").text(),
					txt :$(this).parents("li").find(".likeprod_txt").text(),
					price : $(this).parents("li").find("p span").text().slice(1),
					img : $(this).parents("li").find(".likeprod_img img").attr("src"),
					amount : 1
			};
			$.cookie.json = true;
				// 先从 cookie 中读取已有保存的购物车数组
				const products = $.cookie("products") || [];
				// 判断当前选购商品是否在购物车中已存在
				const index = exist(currProd.id, products);
				if (index === -1) { // 不存在
					products.push(currProd);
				} else { // 存在
					products[index].amount++;
				}
				/* 将当前选购的商品信息保存到 cookie 中：即将数组存回cookie */
				$.cookie("products", products, {expires:7, path:"/"});
				console.log("success");

				return false; // 阻止超级链接跳转	
	})
	// 判断某 id 商品在数组中是否存在，
			// 存在则返回其在数组中的下标，-1表示不存在
			function exist(id, array) {
				for (let i = 0, len = array.length; i < len; i++) {
					if (array[i].id == id)
						return i;
				}
				return -1;
			}
});