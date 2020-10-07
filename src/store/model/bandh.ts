import {Store} from './store';

export const BAndH: Store = {
	backoffStatusCodes: [403, 429],
	labels: {
		inStock: {
			container: 'div[data-selenium="addToCartSection"]',
			text: ['add to cart']
		},
		maxPrice: {
			container: 'div[data-selenium="pricingPrice"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.bhphotovideo.com/c/product/1452927-REG/evga_06g_p4_2063_kr_geforce_rtx_2060_xc.html'
		},
		{
			brand: 'thrustmaster',
			model: 'joystick',
			series: 'T.16000M FCS',
			url: 'http://www.bhphotovideo.com/c/product/1296153-REG/thrustmaster_2960773_t_16000m_fcs_flight_stick.html'
		}
	],
	name: 'bandh'
};
