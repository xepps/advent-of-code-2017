const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 5', () => {
    describe('part 1', () => {
        test('0 3 0 1 -3 should take 5 steps to get to the end', () => {
            expect(part1([0, 3, 0,  1,  -3])).toBe(5);
        });

        describe('How many steps does it take to reach the exit?', () => {
            test('354121', () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8')
                    .split('\n')
                    .map(n => parseInt(n, 10));

                expect(part1(input)).toBe(354121);
            });
        });
    });

    describe('part 2', () => {
        test('0 3 0 1 -3 should take 5 steps to get to the end', () => {
            expect(part2([0, 3, 0,  1,  -3])).toBe(10);
        });

        describe('How many steps does it take to reach the exit?', () => {
            test('27283023', () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8')
                    .split('\n')
                    .map(n => parseInt(n, 10));

                expect(part2(input)).toBe(27283023);
            });
        });
    });
});
