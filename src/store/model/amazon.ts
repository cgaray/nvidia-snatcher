import {Store} from './store';

export const Amazon: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#desktop_buybox',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'span[class*="PriceString"]'
		}
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl: 'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B07MQ36Z6L&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com/dp/B07MQ36Z6L'
		},
		{
			brand: 'thrustmaster',
			model: 'joystick',
			series: 'T.16000M FCS',
			url: 'https://www.amazon.com/dp/B01MQEDEEW'
		}
	],
	name: 'amazon'
};
