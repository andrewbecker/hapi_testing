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
				bulletList = [];

			//Replace image
			$('.hero_image').attr('src', $this.find('img').attr('src').replace(new RegExp('sm'), 'md'));

			//Replace description
			$('.hero_item').html($this.find('p').html());
			
			// Replace bullets
			$this.find('li').clone().each(function(index) {
				bulletList.push(this);
				if (index === numBullets) {
					return false;
				}
			});
			$('.hero_list').html(bulletList)

			//Replace Price
			$('.hero_price').html($(this).find('.product_price').html());

		}
	};

	App.init();

})(jQuery);

