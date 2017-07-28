$(document).ready(function(){
	//登陆验证2
	$(".login_btn_border").click(function(){
		var loginPhoneNum=localStorage.getItem("username");
		var loginPassward=localStorage.getItem("password");
		//alert(loginPassward)
		//alert($(".j_password").val());
		if($(".login_username").val()!=loginPhoneNum){
			$('.errowBox span').html("输入的用户名错误")
			$('.errowBox').slideDown();
			return false
			
		}else if($(".login_password").val()!=loginPassward){
			$('.errowBox span').html("输入的密码错误")
			$('.errowBox').slideDown();
			return false
		}else{
			$(".login").html("欢迎您，"+loginPhoneNum);
			//localStorage.removeItem("phoneNum");
			$('.login_bg').css('display','none');
			$('.login_win').css('display','none');
		}
	});
	
	
	//触摸停止滚动
	var oScrollNew=setInterval('scrollNew()',3000);
	var oScrollHot=setInterval('scrollHot()',3000);
	
	$('.new_body_box').hover(function(){
		clearInterval(oScrollNew);
	},function(){
		oScrollNew=setInterval('scrollNew()',3000);
	});
	$('.hot_body_box').hover(function(){
		clearInterval(oScrollHot);
	},function(){
		oScrollHot=setInterval('scrollHot()',3000);
	});
	
	
	
	$('.hpDr_tab_left,.hpDr_tab_right').bind('mousemove',function(){
		$(this).addClass('showTab').siblings().removeClass('showTab');
		$('.hpDr_content div').eq($(this).index()).css("display","block").siblings().css("display","none")
	})
	
	
	//登录验证部分
	$('.login_btn_border').bind('click',checkLogin);
	function checkLogin(){
		//alert("ceshi")
		if($('#j_username').val()==""){
			$('.errowBox span').html("帐号不能为空")
			$('.errowBox').slideDown();
			return false
		}
		else if($('#j_password').val()==""){
			$('.errowBox span').html("密码不能为空")
			$('.errowBox').slideDown();
			return false
		}
	}
	
	//显示登录窗口
	$('.login a').bind("click",function(){
		$('.login_bg').css('display','block');
		$('.login_win').css('display','block');
	})
	//关闭登录窗口
	$('.login_closeIcon').bind('click',function(){
		$('.login_bg').css('display','none');
		$('.login_win').css('display','none');
	})
	
	//展开更多
	//$('.serviceClass_box').css("height","235px");
	$('.moreClass_btn').bind('click',function(){
		//alert($('.serviceClass_box').height())
		if($('.serviceClass_box').height()==115){
			$(this).children('span').html("收起");
			$('.serviceClass_box').animate({"height":"231px"},500,"swing");
		}else{
			$(this).children('span').html("展开");
			$('.serviceClass_box').animate({"height":"115px"},500,"swing");
		}
			
	})
	
	//活动滚动
	$('.activity_btn').bind('click',function(){
		if($(this).index()==2){                   //点击右按钮
			if($('.activity_list ul').css("marginLeft")=="0px"){
				$('.activity_list ul').css("marginLeft","-402px");
				$('.activity_btn_left').css("display","block");
				//alert($('.activity_btn_left').css("marginLeft"));
			}else if($('.activity_list ul').css("marginLeft")=="-402px"){
				$('.activity_list ul').css("marginLeft","-804px");
				$('.activity_btn_right').css("display","none");
			}
		}else if($(this).index()==0){              //点击左按钮
			
			if($('.activity_list ul').css("marginLeft")=="-402px"){
				$('.activity_list ul').css("marginLeft","0px");
				$('.activity_btn_left').css("display","none");
			}else if($('.activity_list ul').css("marginLeft")=="-804px"){
				$('.activity_list ul').css("marginLeft","-402px");
				$('.activity_btn_right').css("display","block");
			}
		}
	})
	
	//弹出视频
	$('.createCloud_right_img div img').click(function(){
		$('.video_bg').css("display","block");
		$('.video_box').slideDown(500);
		
	})
	
	//关闭视频
	$('.video_closeBtn').click(function(){
		$('.video_bg').css("display","none");
		$('.video_box').css("display","none")
		$('.video_box video').removeAttr("autoplay");
	})
	
	
	//下方轮播点击
	$('.createCloud_next').bind("click",nextImg);       //clearInterval(crollNextImg);
	$('.createCloud_prev').bind("click",prevImg);
	

	//上方轮播点击
	$('.hpShow_container ol li').bind("click",scrollHPImag);
	
});




//上方轮播
var i=0;
var j=0;
var r=0; 
var oScrollSelf=setInterval("scrollSelf()",2000);
function scrollSelf(){
	//alert(i)
	if(i>=4){
		i=-1;
	}
	$('.hpShow_container ol li').off('click');      //滚动过程中不可点击
	$(".hpShow_img_box div").eq(i+1).removeClass("hiddenHPImag").addClass("nextHPImag").css("left","100%").animate({left:"0px"},500,"swing",function(){
		$('.hpShow_container ol li').bind("click",scrollHPImag);		
	});
	
	$('.hpShow_img_box div').eq(j).animate({left:"-100%"},500,"swing",function(){
		$('.hpShow_img_box div').eq(j).addClass('hiddenHPImag').removeClass("nextHPImag prevHPImag");
		$("ol li").eq(i+1).addClass("pointActive").siblings().removeClass("pointActive");
		j=i+1;
		i++;
		console.log(i);
		
	});
}	
	
//点击滚动函数
function scrollHPImag(){
	clearInterval(oScrollSelf);
	$('.hpShow_container ol li').off('click');  
	i=$(this).index();
	if(i==j){
		$('.hpShow_container ol li').stop();
		$('.hpShow_container ol li').on('click',scrollHPImag);
	}else{
		if(i>j){
			
			$(".hpShow_img_box div").eq(i).removeClass("hiddenHPImag").addClass("nextHPImag").css("left","100%").animate({left:"0px"},400,"swing",function(){
				$('.hpShow_container ol li').on('click',scrollHPImag); 
			});
			$('.hpShow_img_box div').eq(j).css("left","0px").animate({left:"-100%"},400,"swing",function(){
				$('.hpShow_img_box div').eq(j).addClass('hiddenHPImag').removeClass("nextHPImag prevHPImag");
				$("ol li").eq(i).addClass("pointActive").siblings().removeClass("pointActive");
				j=i;
				oScrollSelf=setInterval("scrollSelf()",2000);
				
			});
		}else{
			$(".hpShow_img_box div").eq(i).removeClass("hiddenHPImag").addClass("prevHPImag").css("left","-100%").animate({left:"0px"},400,"swing",function(){
				$('.hpShow_container ol li').on('click',scrollHPImag);
			});
			$('.hpShow_img_box div').eq(j).css("left","0px").animate({left:"100%"},400,"swing",function(){
				$('.hpShow_img_box div').eq(j).addClass('hiddenHPImag').removeClass("prevHPImag nextHPImag").css("left","100%");
				$("ol li").eq(i).addClass("pointActive").siblings().removeClass("pointActive");
				j=i;
				oScrollSelf=setInterval("scrollSelf()",2000);
			});
		}
	}
	//return false;
}



//下方轮播
var crollNextImg=setInterval("nextImg()",2000);

var n=0;
function nextImg(){
	clearInterval(crollNextImg);                        //调用即清除
	$('.createCloud_next').off("click");                //点后即关闭
	$('.createCloud_right_img div').eq(n).animate({left:"-100%"},500,"swing",function(){
		
		$('.createCloud_right_img div').eq(n-1).addClass("hiddenImg");   //将所有addClass换为css()
		$('.createCloud_right_img div').eq(n-1).css({"left":"100%"});
		//crollNextImg;
		crollNextImg=setInterval("nextImg()",2000);     //结束后再循环
	});
	//alert($('.createCloud_right_img div[class="showImg"]').index())
	if(n!=5){
		$('.createCloud_right_img div').eq(n+1).removeClass("hiddenImg").addClass("next").css({"left":"100%"}).animate({left:"0px"},500,"swing",function(){
			$('.createCloud_next').on("click",nextImg);         //结束后可点击
			
		});                                                     //css({"position":"absolute","top:0","left":"100%"}) //
	}else{
		$('.createCloud_right_img div').eq(0).removeClass("hiddenImg").addClass("next").css({"left":"100%"}).animate({left:"0px"},500,"swing",function(){
			$('.createCloud_next').on("click",nextImg);         //结束后可点击
		});
	}
	n=n+1;
	if(n==6){
		n=0;
	}
}
function prevImg(){
	clearInterval(crollNextImg);                        //调用即清除
	$('.createCloud_prev').off("click");                //点后即关闭
	$('.createCloud_right_img div').eq(n).animate({left:"100%"},500,"swing",function(){
		
		$('.createCloud_right_img div').eq(n+1).addClass("hiddenImg");   //将所有addClass换为css()
		$('.createCloud_right_img div').eq(n+1).css({"left":"-100%"});
		//crollNextImg;
		crollNextImg=setInterval("nextImg()",2000);     //结束后再循环
	});
	//alert($('.createCloud_right_img div[class="showImg"]').index())
	if(n!=0){
		$('.createCloud_right_img div').eq(n-1).removeClass("hiddenImg").addClass("prev").css("left","-100%").animate({left:"0px"},500,"swing",function(){
			$('.createCloud_prev').on("click",prevImg);         //结束后可点击
			
		});                                                     //css({"position":"absolute","top:0","left":"100%"}) //
	}else{
		$('.createCloud_right_img div').eq(5).removeClass("hiddenImg").addClass("prev").css("left","-100%").animate({left:"0px"},500,"swing",function(){
			$('.createCloud_right_img div').eq(0).addClass("hiddenImg");   
			$('.createCloud_right_img div').eq(0).css({"left":"-100%"});
			$('.createCloud_prev').on("click",prevImg);         //结束后可点击
		});
	}
	n=n-1;
	if(n==-1){
		n=5;
	}
}






//最新、热门无缝滚动
function scrollNew(){
	$('.new_body_box ul').animate({marginTop:'-36px'},1000,function(){
		//console.log('ceshi')
		$('.new_body_box ul').css('margin-top','0').find('li:first').appendTo('.new_body_box ul');
	});
}
function scrollHot(){
	$('.hot_body_box ul').animate({marginTop:'-36px'},1000,function(){
		//console.log('ceshi')
		$('.hot_body_box ul').css('margin-top','0').find('li:first').appendTo('.hot_body_box ul');
	});
}

//点击滑出
$(function(){
	
	$('.leastQuestion_btn').click(function(){
		$(this).animate({"marginLeft":"-140px"},100,"swing");
		$('.leastQuestion_border').css("display","block").animate({"marginLeft":"0px"},400,"swing");
	})
	
	
	$('.leastQuestion_right span').click(function(){
		$('.leastQuestion_border').animate({"marginLeft":"-100%"},400,"swing",function(){
			$('.leastQuestion_btn').animate({"marginLeft":"0px"},100,"swing");
			$('.leastQuestion_border').css("display","none");
		});
	});
});
