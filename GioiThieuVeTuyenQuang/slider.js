var images = [
	"Pics/2.png",
	"Pics/3.png",
	"Pics/4.png",
	"Pics/5.png",
	"Pics/6.png",
	"Pics/7.png",
	"Pics/8.png",

];
var num ;

function set(num){
	var mp = document.getElementById("mp");
	mp.src = images[num];
}

$(document).ready(function() {
	$('#btn-next').click(function(event) {
	   var slide_sau = $('.active').next();
	   if(slide_sau.length!=0){
		  $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
			 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
		  });
		  slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
			 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
		  });
	   }else{
		  $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
			 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
		  });
		  $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
			 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
		  });
	   }
	});
 });