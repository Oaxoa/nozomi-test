import { describe, it, expect } from 'bun:test';
import { findRepeatingChars } from './string.ts';

describe('String functions', () => {
	describe('findRepeatingChars', () => {
		type Case = { input: string; expected: string[] };
		const testCases: Case[] = [
			{ input: 'caiopa', expected: ['a'] },
			{ input: 'caiopac', expected: ['c', 'a'] },
			{ input: 'aciopac', expected: ['a', 'c'] },
			{ input: 'caiopacc', expected: ['c', 'a'] },
			{ input: 'caiop', expected: [] },
			{ input: '', expected: [] },
			// big input (runs in 1ms on a Macbook M1 Pro)
			{ input: new Array(10000).fill('abc').join(''), expected: ['a', 'b', 'c'] },
		];

		it.each(testCases)(
			'finds characters in a string that appears twice or more',
			({ input, expected }) => {
				expect(findRepeatingChars(input)).toEqual(expected);
			}
		);
	});
});
