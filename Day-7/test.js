const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 7', () => {
    describe('part 1', () => {
        test('0 2 7 0 should take 5 steps to get to a stable solution', () => {
            const input = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part1(input)).toBe('tknk');
        });

        describe('how many redistribution cycles must be completed before a configuration is produced that has been seen before?', () => {
            test(6681, () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

                expect(part1(input)).toBe(6681);
            });
        });
    });
});
