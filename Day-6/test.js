const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 6', () => {
    describe('part 1', () => {
        test('0 2 7 0 should take 5 steps to get to a stable solution', () => {
            expect(part1('0 2 7 0')).toBe(5);
        });

        test('how many redistribution cycles must be completed before a configuration is produced that has been seen before?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part1(input)).toBe(6681);
        });
    });

    describe('part 2', () => {
        test('0 2 7 0 has an infinite loop that is 4 steps long', () => {
            expect(part2('0 2 7 0')).toBe(4);
        });

        test('How many cycles are in the infinite loop that arises from the configuration in your puzzle input?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part2(input)).toBe(2392);
        });
    });
});
