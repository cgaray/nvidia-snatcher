import {Store} from './store';
import {config} from '../../config';

const microCenterLocation = config.store.microCenterLocation;

const microCenterLocationToId: Map<string, string> = new Map([
	['web', '029'],
	['brooklyn', '115'],
	['brentwood', '095'],
	['cambridge', '121'],
	['chicago', '151'],
	['columbus', '141'],
	['dallas', '131'],
	['denver', '181'],
	['duluth', '065'],
	['fairfax', '081'],
	['flushing', '145'],
	['houston', '155'],
	['madison-heights', '055'],
	['marietta', '041'],
	['mayfield-heights', '051'],
	['north-jersey', '075'],
	['overland-park', '191'],
	['parkville', '125'],
	['rockville', '085'],
	['sharonville', '071'],
	['st-davids', '061'],
	['st-louis-park', '045'],
	['tustin', '101'],
	['westbury', '171'],
	['westmont', '025'],
	['yonkers', '105']
]);

let storeId: string;
if (microCenterLocationToId.get(microCenterLocation) === undefined) {
	storeId = '029';
} else {
	storeId = microCenterLocationToId.get(microCenterLocation)!;
}

export const MicroCenter: Store = {
	labels: {
		inStock: {
			container: '#cart-options',
			text: ['in stock']
		},
		maxPrice: {
			container: 'span[id="pricing"]',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: `https://www.microcenter.com/product/618433/evga-geforce-rtx-2060-ko-ultra-overclocked-dual-fan-6gb-gddr6-pcie-30-graphics-card/?storeid=${storeId}`
		}
	],
	name: 'microcenter'
};
