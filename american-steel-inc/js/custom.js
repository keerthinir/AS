$( document ).ready(function() {
	$('.category-item-list > li > a').mouseover(function() {
		$(this).tab('show');
	});
	$( ".home-banner,.navbar" ).mouseover(function() {
		$('.category-item-list > li > a,.home-product-category-list > .tab-content .tab-pane ').removeClass('active');
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

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#dealerCoverImg').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});