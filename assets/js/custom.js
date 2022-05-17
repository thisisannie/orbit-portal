// Contact form label show
jQuery(window).on('load',function() {
	jQuery('form').on('focus click', 'input', function(){
		jQuery('form').find('label').addClass('show')
	})
})