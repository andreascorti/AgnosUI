import {writable} from '@amadeus-it-group/tansu';
import type {SpyInstance} from 'vitest';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {writableWithDefault} from './stores';
import {typeArray} from './writables';

describe(`Writables service`, () => {
	const equal = typeArray.equal!;
	let consoleErrorSpy: SpyInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
	});

	test(`should support typeArray`, () => {
		const config$ = writable([0]);
		const store$ = writableWithDefault<number[]>([0], config$, typeArray);
		// set the wrong value
		store$.set(100 as any);
		expect(consoleErrorSpy).toHaveBeenCalledWith('Not setting invalid value', 100);
		// the store is not updated with the wrong value
		expect(store$()).toStrictEqual([0]);

		const testArray = [15, 20];
		store$.set(testArray);

		expect(store$()).toBe(testArray);
	});

	test(`typeArray equal function should compare values`, () => {
		expect(equal([15, 15], [15, 15])).toBe(true);
		expect(equal([15, 15], [15, 10])).toBe(false);
		const arr = [15, 15];
		expect(equal(arr, arr)).toBe(true);
		expect(equal([15], [15, 15])).toBe(false);
		expect(equal([15, 15], [15])).toBe(false);
	});
});
