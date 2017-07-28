$(document).ready(function(){
	$(".register_btn").click(function(){
		var result=true;
		if($("#jf_phoneNum").val()==""){
			$("#jf_phoneNum~.formErrow").css("display","inline-block");
			//event.stopPropagation();
			result=false;
		}
		if($("#imgCode").val()==""){
			$("#imgCode~.formErrow").css("display","inline-block");
			//event.stopPropagation();
			result=false;
		}
		if($("#soundCode").val()==""){
			$("#soundCode~.formErrow").css("display","inline-block");
			//event.stopPropagation();
			result=false;
		}
		if($("#jf_password").val()==""){
			$("#jf_password~.formErrow").css("display","inline-block");
			//event.stopPropagation();
			result=false;
		}
		if($("#rePassword").val()==""){
			$("#rePassword~.formErrow").css("display","inline-block");
			//event.stopPropagation();
			result=false;
		}
		if(result==false){
			return false;
		}else{
			saveSubmit();
		}
	})

});

function saveSubmit(){
	
	var jf_phoneNum=$("#jf_phoneNum").val();
	var jf_password=document.getElementById("jf_password").value;
	localStorage.setItem("username",jf_phoneNum);
	localStorage.setItem("password",jf_password);
	
}