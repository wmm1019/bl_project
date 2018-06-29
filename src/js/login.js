$(function(){
	$("#btn_login").on("click",function(){
			const user={
				username:$("#username").val(),
				password:$("#password").val()
			}
			console.log(user)
			const users=[];
			users.push(user);
			$.post("http://localhost/login/php/login.php",$(".login_form").serialize(),function(data){
				console.log(data)
				if(data.res_code===1){
					window.location.href="/project/dist/index.html";
					$.cookie.json=true;
					$.cookie("users",users,{expires:7,path:'/'});
				}
				else{
					alert("用户名或密码输入错误！");
					
				}
			},"json");
	})
})