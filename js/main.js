$('.part').hover (
	function() {
		$('.screen-hover').html($(this).attr('description-data'));
		// $('.screen-hover').fadeIn();
    },
    function(){
        $('.screen-hover').fadeIn();
    }

)