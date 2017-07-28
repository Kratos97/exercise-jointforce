$(document).ready(function(){
	$.ajax({
		url:"mobileTerminal.json",
		type:"get",
		dataType:"json",
		success:function(data){
			$.each(data, function(i,n){
				//alert("0")
				$('.quickPost_title').html(data[0].title);
				$('.quickPost_desc').html(data[0].desc);
				$('.quickPost_img_content img').attr("src",data[0].src);
				
				$('.quickPiece_title').html(data[1].title);
				$('.quickPiece_desc').html(data[1].desc);
				$('.quickPiece_img_content img').attr("src",data[1].src);
				
				$('.onlineWork_title').html(data[2].title);
				$('.onlineWork_desc').html(data[2].desc);
				$('.onlineWork_img_content img').attr("src",data[2].src);
				$('.onlineWork_cellDesc div').html(da ta[2].cellDesc);
				
				$('.mediaMeeting_title').html(data[3].title);
				$('.mediaMeeting_desc').html(data[3].desc);
				$('.mediaMeeting_img_content img').attr("src",data[3].src);
				
				$('.miniNote_title').html(data[4].title);
				$('.miniNote_desc').html(data[4].desc);
				$('.miniNote_img_content img').attr("src",data[4].src);
				$('.miniNote_cellDesc').html(data[4].cellDesc);
			});
		}
	});
});
