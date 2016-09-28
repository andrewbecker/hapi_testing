'use strict';
(function($) {
	var App = {
		init: function() {
			this.bindUI();
			$('.product_card').first().trigger('mouseenter');
		},
		bindUI: function() {
			$('.hero_add_to_cart').on('click', function(){
				alert($(this).next().html());
			});
			$('.product_area').on('mouseenter', '.product_card', this.populateHero );
		},
		populateHero: function() {
			var $this = $(this),
				numBullets = 2,
				index = $(this).attr('data');

			//Replace image
			$('.hero_image').attr('src', $this.find('img').attr('src').replace(new RegExp('sm'), 'md'));

			//Replace description
			$('.hero_item').html($this.find('p').html());
			$('.hero_list').html('');
			// Replace bullets
			$this.find('li').each(function(index) {
				$('.hero_list').append($(this));
				if (index === numBullets) {
					return false;
				}
			});
			// $('.hero_list').append($(this).find('li').html());
			// $('.hero_list').html(bullets);
			$('.hero_price').html($(this).find('.product_price').html());

		}
	};

	App.init();

})(jQuery);

