const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 8', () => {
    describe('part 1', () => {
        test('After this process, the largest value in any register is 1.', () => {
            const input = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part1(input)).toBe(1);
        });

        test('What is the largest value in any register after completing the instructions in your puzzle input?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part1(input)).toBe(5966);
        });
    });

    describe('part 2', () => {
        test('in the above instructions, the highest value ever held was 10', () => {
            const input = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part2(input)).toBe(10);
        });

        test('The CPU also needs to know the highest value held in any register during this process/', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part2(input)).toBe(6347);
        });
    });
});
