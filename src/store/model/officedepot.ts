import {Store} from './store';

export const OfficeDepot: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['please verify you are a human']
		},
		inStock: {
			container: '#productPurchase',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'span[class^="price_column right"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.officedepot.com/a/products/4652239/EVGA-GeForce-RTX-2060-Graphic-Card/'
		},
		{
			brand: 'thrustmaster',
			model: 'joystick',
			series: 'T.16000M FCS',
			url: 'https://www.officedepot.com/a/products/9749595/Thrustmaster-T16000M-FCS-Gaming-Joystick-Cable/'
		}
	],
	name: 'officedepot'
};
