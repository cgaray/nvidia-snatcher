import {Store} from './store';

export const BestBuy: Store = {
	labels: {
		inStock: {
			container: '.v-m-bottom-g',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'div[class="priceView-hero-price priceView-customer-price"] > span',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.bestbuy.com/site/evga-ko-ultra-gaming-nvidia-geforce-rtx-2060-6gb-gddr6-pci-express-3-0-graphics-card-black-gray/6403801.p?skuId=6403801&intl=nosplash'
		}
	],
	name: 'bestbuy'
};
