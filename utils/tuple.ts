/**
 * Tuple utilities and types
 */

/**
 * Gets the first element out of a tuple
 */
export const getFirst = <T>([first, _]: [T, unknown]) => first;

export type CharCountTuple = [string, number];

/**
 * Gets the char out of a char/count tuple
 * This is a specialized version with types of getFirst
 * Note for the reviewers: It actually does not need tests, I left them so you can double-check the typescript working
 */
export const getChar: ([char]: CharCountTuple) => string = getFirst<string>;

/**
 * Checks that the count in a char/count tuple is greater than a threshold.
 * Higher-order predicate. Must be partially-applied before using
 */
export const isCountGreaterThan =
	(threshold: number) =>
	([_, count]: CharCountTuple) =>
		count > threshold;
