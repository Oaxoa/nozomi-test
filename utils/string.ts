/**
 * String utilities
 */

import { getChar, isCountGreaterThan } from './tuple.ts';

/**
 * partially applied function, disposable, no need for tests
 * could be inlined, I am just maximizing readability (and showing off a little)
 */
const appearsTwiceOrMore = isCountGreaterThan(1);

/**
 * Finds a list of repeating chars in a string
 */
export const findRepeatingChars = (input: string): string[] => {
	/*
    We create a map to store all the info we will collect.
    It does not strictly need to count how many occurrences, but we still need to keep track
    if the char was already encountered.
    in this very case the list could be Record<string, boolean | undefined>
    that would save us some bytes in memory. It all depends on the need for the count or not.

    The map is at most as big (keys-wise) as the list of unique available characters, therefore it will not
    grow much even in the worst case. It will have an upper limit in the hundreds for an ASCII charset
    or thousands for a UTF charset.

    Note: we could have used the output array directly but before every push we would have had to
    check all the array if the char we were trying to add was there already or not, and that takes M time.
    This would have changed the time complexity to O(N) + O(N * M) = O(N * M), saving only a little memory compared
    to the use of an intermediate map that instead have instant O(1) access time.
    */
	const occurrences: Record<string, number> = {};

	/*
    Iterate over the input once and collect info
    we need to iterate only once, and we need to go through each and every char in the string,
    therefore the time complexity up to this point is O(N).

    A plain ol' `for` loop is used here. Could be replaced by something more functional like
    e.g.: `input.split('').reduce(reducer, {})` to create the map, but it would be slower.
    Depending on the use case (big inputs) it could make a difference
    */
	for (let i = 0; i < input.length; i++) {
		const c = input[i];
		occurrences[c] = occurrences[c] ? occurrences[c] + 1 : 1;
	}

	return (
		/* A few more linear passes `O(M * 3) = O(M) = linear time` are needed if we want a more
        functional (and elegant) solution. Consider M is likely smaller than N.
         */
		Object.entries(occurrences) // O(M)
			// then we filter the map to keep only positives
			.filter(appearsTwiceOrMore) // O(M)
			// and we finally map it to our desired output format
			.map(getChar) // O(M)
	);

	/* The only added memory is for the map, and it depends on the amplitude of the charset
    and the custom implementation */
};
