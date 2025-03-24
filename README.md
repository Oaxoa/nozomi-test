# Pierluigi Pesenti's test

## for Nozomi

## Requirements

Write an algorithm (choose the language you prefer) that given a
string of characters, for example `{'c','a','i','o','p','a'}`, will print
out the list of characters appearing at least 2 times.
In this specific example, it would return `{'a'}`. Afterward, comment
out the cost in terms of space and time.

## Solution

> I wanted to not limit the answer to an algorithm but
> implementing it like I would do in a real project.
> I think in such a way you can infer more about my way of working.
> I hope building a little repo is not overkill.

I have chosen TypeScript on Bun.js for the project.

The code can be inspected starting from the function `findRepeatingChars` in `utils/string.ts`.
Comments were added to explain the rationale.

It is tested. You can run tests via:

```npm run test```

I like to write most functions as units.
They are small, pure, deterministic (can be unit tested with no need for mocks), moveable, composable and reusable.

Before writing one new function, I make sure it does not already exist in the code base.
Hunting for duplicated code or functionality is bad and time-consuming.

Once I assess there is no such a function I strongly believe it should sit in an intuitive place to maximise
discoverability from other devs that may benefit from it.
A function that nobody can easily found is like a tree falling in the forest when nobody's watching.

Lack of discoverability will cause duplication of code/functionalities/intents which are bad for a lean codebase.

Tests should run in (micro/milli)seconds, not seconds or minutes.
A comprehensive test suite should run in seconds.
Leveraging units we can dramatically reduce the number of integration tests and avoid entirely DOM testing which is slow
and cumbersome and tends to test declarative code.
Declarative code should never be tested for several reasons. I would be happy tell you more about in a live interview.

Thanks