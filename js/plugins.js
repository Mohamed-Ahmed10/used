$('document').ready(function()
{
	$(function () 
	{
  		$('[data-toggle="tooltip"]').tooltip();
	});
	$(".selection_nav .row>li").hover(function()
	{
		$(this).children().fadeIn(800);
	},function(){
		$(this).children().fadeOut(300);
	});
	$(".card").click(function()
	{
		if($('body').css('direction','ltr'))
			{
				window.location.replace("view_product.html");
			}
		else 
			{
				window.location.replace("view_product_arabic.html");
			}
	});

	$(".selection_nav .row>li").click(function()
	{
		$(this).children().slideDown();
	});
	$(".status_select").on("change",function()
	{
		$(".verification").css("display","block");
	});


	$(".user").click(function()
	{
		$(" nav .subminu").slideToggle();
	});
	
    $(".btn-danger").click(function()
    	{
    		$(this).parent().slideUp();
    	}); 
});
