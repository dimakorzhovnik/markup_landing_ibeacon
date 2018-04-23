$('.part').hover (
	function() {
		$('.sity-active').html($(this).attr('description-data'));
		$('.sity-active').fadeIn();
	}
)