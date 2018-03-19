$( document ).ready(function() {
	$('.category-item-list > li > a').mouseover(function() {
		$(this).tab('show');
	});
	$( ".home-banner,.navbar" ).mouseover(function() {
		$('.category-item-list > li > a,.tab-content .tab-pane ').removeClass('active');
	});

});

$(window).on('load',function(){
	$('#zipCodeModal').modal('show');
});

// subscribeModal
setInterval(showModal, 60000);

function showModal()
{
  $('#subscribeModal').modal('show');
}