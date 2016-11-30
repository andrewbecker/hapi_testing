'use strict';
const axios = require('axios');
const _ = require('lodash');

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			axios
				.get("http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=20&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1")
				.then(function (res) {
					if (res.data.productList) {
						let productList = [];
						for(let x = 0; x < 6; x++) {
						 	productList.push(res.data.productList[x]);
						}
						reply.view('index', {products: productList});
					}

				}, function (err) {
					console.log(err);
					reply.view('500').status(500);
				});
		}
	}
];