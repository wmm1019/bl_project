$(function(){
	    $("_head").load("/project/src/html/include/header.html");
		/*********************************************************/
			/* 读取并渲染购物车 */
			/*********************************************************/	
		$.cookie.json=true;
		const products = $.cookie("products")||[];
		if(products.length === 0){
		$(".products").html("<tr><td colspan='7'>购物车为空</td></tr>");	
		}
		console.log(products);
		//有选购的商品就渲染模板，，显示
		const html = template("cart_template",{products});
		$(".products").html(html);
		
			/*********************************************************/
			/* 删除购物车 */
			/*********************************************************/	
		$(".cart-shop table .products").on("click",".del",function(){
			const id = $(this).parents("tr").data("id");
			const index = exist(id, products);
			products.splice(index,1);
			$.cookie("products",products,{expires:7,path:"/"});
			$(this).parents("tr").remove();
			getTotal();
		});
		
			/*********************************************************/
			/* 全选 */
			/*********************************************************/	
			$(".ck_all").click(function(){
				const status = $(this).prop("checked");
				$(".ck_single").prop("checked",status);
				console.log(status);
				getTotal();
			});
		
			/*********************************************************/
			/* 部分选中 */
			/*********************************************************/	
			$(".ck_single").click(function(){
				const len = $(".ck_single:checked").length;
				$(".ck_all").prop("checked",len === products.length);	
				getTotal();
			});
		
			/*********************************************************/
			/* 修改数量 */
			/*********************************************************/	
			$(".cart-shop table .products").on("click",".add, .minus",function(){
				const id = $(this).parents("tr").data("id");
				const index = exist(id, products);
				const num = products[index];
				if($(this).is(".minus")){
					console.log("+------------")
					if(num.amount<1){
						return;
					}else{
					num.amount--;
					}
				}else{
					num.amount++;
				}
				$.cookie("products",products,{expires:7,path:"/"});
				$(this).siblings(".amount").val(num.amount);
				$(this).parents("tr").children(".sub_total").text("￥"+(num.price*num.amount).toFixed(2));
				getTotal();
			});
			/*********************************************************/
			/* 手动修改数量 */
			/*********************************************************/	
			$(".cart-shop table .products").on("blur",".amount",function(){
				const id = $(this).parents("tr").data("id");
				const index = exist(id, products);
				const num = products[index];
				const val =$(this).val();
				if(!/^[1-9]\d*$/.test(val)){
					$(this).val(num.amount);
					return;
				}
				num.amount = val;
				$(this).siblings(".amount").val(num.amount);
				$(this).parents("tr").children(".sub_total").text((num.price*num.amount).toFixed(2));
				getTotal();
			});
		
		
		function exist(id, array) {
		for (let i = 0, len = array.length; i < len; i++) {
			if (array[i].id == id)
				return i;
		}
		return -1;
	}
			/*********************************************************/
			/* 计算合计 */
			/*********************************************************/	
		function getTotal(){
			let sum = 0,
				count=0;
			$(".ck_single:checked").each(function(index,element){
				//console.log(Number($(element).parents("tr").children(".sub_total").text()));
				
				sum += Number($(element).parents("tr").find(".sub_total").text().replace("￥",""));
				count += Number($(element).parents("tr").find(".amount").val());
				console.log(sum);
			});
			
			$(".total").text(sum.toFixed(2));
			$(".count").text(count);
			
		}
})