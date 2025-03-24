import { describe, expect, it } from 'bun:test';
import { getChar, isCountGreaterThan, type CharCountTuple, getFirst } from './tuple.ts';

describe('Tuple functions', () => {
	describe('getFirst', () => {
		type Case = { input: [unknown, unknown]; expected: unknown };
		const testCases: Case[] = [
			{ input: ['a', 'b'], expected: 'a' },
			{ input: [1, 100], expected: 1 },
		];

		it.each(testCases)('returns the char out of a [char, count] tuple', ({ input, expected }) => {
			expect(getFirst(input)).toEqual(expected);
		});
	});

	describe('getChar', () => {
		type Case = { input: CharCountTuple; expected: string };
		const testCases: Case[] = [
			{ input: ['a', 1], expected: 'a' },
			{ input: ['b', 100], expected: 'b' },
		];

		it.each(testCases)('returns the char out of a [char, count] tuple', ({ input, expected }) => {
			expect(getChar(input)).toEqual(expected);
		});
	});

	describe('isCountGreaterThan', () => {
		type Case = { input: CharCountTuple[]; expected: CharCountTuple[]; threshold: number };
		const testCases: Case[] = [
			{
				input: [
					['b', 1],
					['c', 2],
					['d', 3],
				],
				expected: [
					['c', 2],
					['d', 3],
				],
				threshold: 1,
			},
			{
				input: [
					['b', 1],
					['c', 2],
					['d', 3],
				],
				expected: [['d', 3]],
				threshold: 2,
			},
		];

		it.each(testCases)(
			'filters [char, count] tuples that have a count greater than X',
			({ input, expected, threshold }) => {
				expect(input.filter(isCountGreaterThan(threshold))).toEqual(expected);
			}
		);
	});
});
