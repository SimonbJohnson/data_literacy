//

function prep4pdf(){
	$('.stretch').each(function(e){
		currentHeight = $(this).height();
		$(this).height(0);
		$(this).parent().css('height','100%');
		parentHeight = $(this).parent().height();
		console.log(parentHeight);
		$(this).parent().css('height','850px');
		console.log(850-parentHeight)
		$(this).height(Math.min(630-parentHeight,currentHeight));
	})

	$('.slide-background').height(630);
	$('.pdf').show();
	$('.no-pdf').hide();
}