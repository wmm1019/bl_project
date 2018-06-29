$(function(){
	var _checked=$("#checked").prop("checked");
	$("#checked").on("click",function(e){
		if(_checked){
			$("#checked").css({
				background:"#55779B"
			});
		}
	})
	//验证码生成
	function randcode() {　　
			var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';　　
			var maxPos = $chars.length;　　
			var pwd = '';　　
			for (var i = 0; i < 4; i++) {　　　　
				pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
			}　　
			return pwd;
		}
	$("#checkCode").html(randcode());
	$("#checkCode").on("click",function(){
		$(this).html(randcode())
	})
	$("#createCode").on("click",function(){
		$("#checkCode").html(randcode())
	})
	//验证code
	function validateCode(){
		var inputCode = $("#inputCode").val(),
		    code=$("#checkCode").html();
				if((inputCode.length <= 0) || (inputCode.toUpperCase() != code.toUpperCase()))
					return false;
				else
					return true;

	}
	
	$("#btn_confirm").on("click",function(){
		{
//			var _username=$("#username").val(),
//			    _password1=$("#password1").val(),
//			    _password2=$("#password2").val(),
//			    _phonenumber=$("#phonenumber").val();
//			console.log(_username)
//			var reg1= /^\w{5,19}$/,
//			    reg2= /^\w{7,19}$/,
//		        reg3=/^[A-Za-z0-9]*[A-Za-z]+[A-Za-z0-9]*$/,
//			    reg4=/^[1]\d{10}$/;
//			var test1=reg1.test(_username),
//			    test2=reg2.test(_password1),
//			    test3=validateCode(),
//			    test4=reg4.test(_phonenumber);
//			if(test1&&test2&&test3&&test4)
{
				$.post("http://localhost/login/php/register.php",$(".register_form").serialize(),function(data){
					console.log(data)
					if(data.res_code===1){
						window.location.href="login.html";
					}
					else{
						alert("用户名已存在");
					}
				},"json");
			}
			
		}
	})
})
