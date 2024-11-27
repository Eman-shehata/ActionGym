$(document).ready(function(){
	//alert('hihihi')
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$('a.scrollT').fadeIn();
		}
		else{
			$('a.scrollT').fadeOut();
		}

		return false;

		$('a.scrollT').click(function(){
			$('html, body').animate({scrollTop:0},700);
		});

		
	});
});
// ...................................................

var imgslid=document.getElementById('img_slid');

	function sld(url){
		imgslid.src=url;
	}