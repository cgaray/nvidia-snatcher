import {Amazon} from './amazon';
import {BAndH} from './bandh';
import {BestBuy} from './bestbuy';
import {Gamestop} from './gamestop';
import {MicroCenter} from './microcenter';
import {Newegg} from './newegg';
import {OfficeDepot} from './officedepot';
import {Store} from './store';
import {config} from '../../config';
import {logger} from '../../logger';

const masterList = new Map([
	[Amazon.name, Amazon],
	[BAndH.name, BAndH],
	[BestBuy.name, BestBuy],
	[Gamestop.name, Gamestop],
	[MicroCenter.name, MicroCenter],
	[Newegg.name, Newegg],
	[OfficeDepot.name, OfficeDepot]
]);

const list = new Map();

for (const name of config.store.stores) {
	if (masterList.has(name)) {
		list.set(name, masterList.get(name));
	} else {
		const logString = `No store named ${name}, skipping.`;
		logger.warn(logString);
	}
}

logger.info(`ℹ selected stores: ${Array.from(list.keys()).join(', ')}`);

if (config.store.showOnlyBrands.length > 0) {
	logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
}

if (config.store.showOnlyModels.length > 0) {
	logger.info(`ℹ selected models: ${config.store.showOnlyModels.join(', ')}`);
}

if (config.store.showOnlySeries.length > 0) {
	logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
}

export const Stores = Array.from(list.values()) as Store[];

export * from './store';
