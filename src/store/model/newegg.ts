import {Store} from './store';

export const Newegg: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['are you a human?']
		},
		inStock: {
			container: 'div#ProductBuy .btn-primary',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'div#app div.product-price > ul > li.price-current > strong',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.newegg.com/evga-geforce-rtx-2060-06g-p4-2066-kr/p/N82E16814487488'
		}
	],
	name: 'newegg'
};
