$(document).ready(function(){
	var image_width = 450;
	var images_count = document.getElementsByClassName("image_bar").length;
	var curr = 1;
	$("#right").click(function(){
		if(curr != images_count - 2){
			$('.accIcon').animate({
	        'marginLeft' : "-=450px"
	        });
	        curr+=1;
		}
	});	
	$("#left").click(function(){
		if(curr!=1){
			$('.accIcon').animate({
	        'marginLeft' : "+=450px"
	        });
	        curr--;
		}
	});
});