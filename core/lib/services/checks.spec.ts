import {describe, expect, test} from 'vitest';
import {isBoolean, isFunction, isNumber, clamp, isString, isArray} from './checks';

describe('Checks', () => {
	test(`'isNumber' should check if value is a number`, () => {
		expect(isNumber(0)).toBe(true);
		expect(isNumber(1)).toBe(true);
		expect(isNumber(1.1)).toBe(true);
		expect(isNumber('1')).toBe(false);
		expect(isNumber('0')).toBe(false);
		expect(isNumber('1.1')).toBe(false);
		expect(isNumber(undefined)).toBe(false);
		expect(isNumber(null)).toBe(false);
		expect(isNumber(true)).toBe(false);
		expect(isNumber({})).toBe(false);
		expect(isNumber([])).toBe(false);
		expect(isNumber(NaN)).toBe(false);
		expect(isNumber(Infinity)).toBe(false);
		expect(isNumber(-Infinity)).toBe(false);
		expect(isNumber(() => {})).toBe(false);
	});

	test(`'isBoolean' should check if value is a boolean`, () => {
		expect(isBoolean(true)).toBe(true);
		expect(isBoolean(false)).toBe(true);
		expect(isBoolean(0)).toBe(false);
		expect(isBoolean(1)).toBe(false);
		expect(isBoolean(1.1)).toBe(false);
		expect(isBoolean('1')).toBe(false);
		expect(isBoolean('0')).toBe(false);
		expect(isBoolean('1.1')).toBe(false);
		expect(isBoolean(undefined)).toBe(false);
		expect(isBoolean(null)).toBe(false);
		expect(isBoolean({})).toBe(false);
		expect(isBoolean([])).toBe(false);
		expect(isBoolean(NaN)).toBe(false);
		expect(isBoolean(Infinity)).toBe(false);
		expect(isBoolean(-Infinity)).toBe(false);
		expect(isBoolean(() => {})).toBe(false);
	});

	test(`'isFunction' should check if value is a function`, () => {
		expect(isFunction(function () {})).toBe(true);
		expect(isFunction(class {})).toBe(true);
		expect(isFunction(true)).toBe(false);
		expect(isFunction(false)).toBe(false);
		expect(isFunction(0)).toBe(false);
		expect(isFunction(1)).toBe(false);
		expect(isFunction(1.1)).toBe(false);
		expect(isFunction('1')).toBe(false);
		expect(isFunction('0')).toBe(false);
		expect(isFunction('1.1')).toBe(false);
		expect(isFunction(undefined)).toBe(false);
		expect(isFunction(null)).toBe(false);
		expect(isFunction({})).toBe(false);
		expect(isFunction([])).toBe(false);
		expect(isFunction(NaN)).toBe(false);
		expect(isFunction(Infinity)).toBe(false);
		expect(isFunction(-Infinity)).toBe(false);
		expect(isFunction(() => {})).toBe(true);
	});

	test(`'isString' should check if value is a string`, () => {
		expect(isString(true)).toBe(false);
		expect(isString(false)).toBe(false);
		expect(isString(0)).toBe(false);
		expect(isString(1)).toBe(false);
		expect(isString(1.1)).toBe(false);
		expect(isString('1')).toBe(true);
		expect(isString('0')).toBe(true);
		expect(isString('1.1')).toBe(true);
		expect(isString(undefined)).toBe(false);
		expect(isString(null)).toBe(false);
		expect(isString({})).toBe(false);
		expect(isString([])).toBe(false);
		expect(isString(NaN)).toBe(false);
		expect(isString(Infinity)).toBe(false);
		expect(isString(-Infinity)).toBe(false);
		expect(isString(() => {})).toBe(false);
	});

	test(`'isArray' should check if the value is an array`, () => {
		expect(isArray(true)).toBe(false);
		expect(isArray(false)).toBe(false);
		expect(isArray(0)).toBe(false);
		expect(isArray(1)).toBe(false);
		expect(isArray(1.1)).toBe(false);
		expect(isArray('1')).toBe(false);
		expect(isArray('0')).toBe(false);
		expect(isArray('1.1')).toBe(false);
		expect(isArray(undefined)).toBe(false);
		expect(isArray(null)).toBe(false);
		expect(isArray({})).toBe(false);
		expect(isArray([])).toBe(true);
		expect(isArray(NaN)).toBe(false);
		expect(isArray(Infinity)).toBe(false);
		expect(isArray(-Infinity)).toBe(false);
		expect(isArray(() => {})).toBe(false);
	});

	test(`'getValueInRange' should return a value is within a specific range`, () => {
		expect(clamp(1, 5)).toBe(1);
		expect(clamp(-1, 5)).toBe(0);
		expect(clamp(0, 5)).toBe(0);
		expect(clamp(-Infinity, 5)).toBe(0);
		expect(clamp(-2022, 5)).toBe(0);
		// Max could be < min
		expect(clamp(5, -5)).toBe(0);
		expect(clamp(Infinity, 5)).toBe(5);
		expect(clamp(2022, 5)).toBe(5);
		expect(clamp(0, 10, 5)).toBe(5);
		expect(clamp(5, 10, 5)).toBe(5);
		expect(clamp(6, 10, 5)).toBe(6);
		expect(clamp(10, 10, 5)).toBe(10);
		expect(clamp(2022, 10, 5)).toBe(10);
	});
});
