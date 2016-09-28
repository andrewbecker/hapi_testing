'use strict';
(function($) {
	var itemArray = [];
	var App = {
		init: function() {
			this.setup();
			this.bindUI();
		},
		setup: function() {
			this.getItems();
		},
		bindUI: function() {
			var that = this;
			$('.hero_add_to_cart').on('click', function(){
				alert($(this).html());
			});
			$(document).on('click', '.product_card', function(e){
				that.populateHero(e.target);
			});
		},
		getItems: function() {
			var that = this;
			$.getJSON('products.json', function (data) {
				$.each(data.productList, function(i, product) {
					that.displayItem(product, i);
				});
				itemArray = $.map(data.productList, function(value, index) {
					return [value];
				});
			});
		},
		displayItem: function(item, count) {
			var output = '';
			output += '<div class="product_card" data='+ count +'>';
	        output += '<img class="product_image"';
	        output += 'src="' + item.imageUrls.sm + '" alt="'+ item.description + '">';
	        output += '<p class="product_description">'+ item.description +'</p>';
	        output += '<span class="product_price">$' + item.pricing.price.selling + '</span>';
	        output += '<div class="btn product_btn">View More</div>';
	        output += '</div>';
	        $('.product_area').append(output);
		},
		populateHero: function($e) {
			console.log(e);
			var $data = $e,
				bullets = '',
				index = $(this).attr('data');

			//Replace image
			$('.hero_image').attr('src', $data.find('img').attr('src').replace(new RegExp('sm'), 'md'));

			//Replace description
			$('hero_item').html($data.find('p').html());

			//Replace bullets
			for(var i = 0; i < 3; i++ ) {
				bullets += '<li>' + itemArray[index].marketingBullets[i] + '</li>';
			}
			$('.hero_list').html(bullets);

			// //Show Hero
			// if(productPage.config.hero.is(':hidden')) {
			// 	productPage.config.hero.slideDown();
			// }
		}
	};

	App.init();

})(jQuery);

// (function()

// 	init: function() {
// 		this.setup();
// 	},
// 	bindUI: function() {
		
// 	},
// 	setup: function() {
// 		productPage.config.hero_add_to_cart
// 			.on('click', productPage.alertPrice);
// 		productPage.config.product_area
// 			.on('mouseenter', '.product_card', productPage.populateHero);
// 	},
// 	alertPrice: function() {
// 		var price = productPage.config.hero_price.html();
// 		alert(price);
// 	},
// 	getItems: function() {
// 		$.getJSON('products.json', function (data) {
// 			$.each(data.productList, function(i, product) {
// 				productPage.displayItem(product, i);
// 			});
// 			productPage.config.itemArray = $.map(data.productList, function(value, index) {
// 				return [value];
// 			});
// 		});
// 	},
// 	displayItem: function(item, count) {
// 		var output = '';
// 		output += '<div class="product_card" data='+ count +'>';
//         output += '<img class="product_image"';
//         output += 'src="' + item.imageUrls.sm + '" alt="'+ item.description + '">';
//         output += '<p class="product_description">'+ item.description +'</p>';
//         output += '<span class="product_price">$' + item.pricing.price.selling + '</span>';
//         output += '<div class="btn product_btn">View More</div>';
//         output += '</div>';
//         productPage.config.product_area.append(output);
// 	},
// 	populateHero: function() {
// 		var data = $(this),
// 			bullets = '',
// 			index = $(this).attr('data');

// 		//Replace image
// 		productPage.config.hero_image.attr('src', data.find('img').attr('src').replace(new RegExp('sm'), 'md'));

// 		//Replace description
// 		productPage.config.hero_item.html(data.find('p').html());

// 		//Replace bullets
// 		for(var i = 0; i < 3; i++ ) {
// 			bullets += '<li>' + productPage.config.itemArray[index].marketingBullets[i] + '</li>';
// 		}
// 		productPage.config.hero_list.html(bullets);

// 		//Show Hero
// 		if(productPage.config.hero.is(':hidden')) {
// 			productPage.config.hero.slideDown();
// 		}
// 	}

// };


