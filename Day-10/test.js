const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 10', () => {
    describe('part 1', () => {
        test(`sample input produces final array and checksum`, () => {
            const inputList = Array.from(Array(5).fill(), (x,i) => i);
            const lengths = '3,4,1,5';

            expect(part1(inputList, lengths)).toEqual({
                list: [3, 4, 2, 1, 0],
                checkSum: 12
            });
        });

        test('Given input of 0 -> 255, and input.txt lengths, what is the final checksum?', () => {
            const inputList = Array.from(Array(256).fill(), (x,i) => i);
            const lengths = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part1(inputList, lengths).checkSum).toBe(1980);
        });
    });

    describe('part 2', () => {
        [
            { input: '', output: 'a2582a3a0e66e6e86e3812dcb672a272' },
            { input: 'AoC 2017', output: '33efeb34ea91902bb2f59c9920caa6cd' },
            { input: '1,2,3', output: '3efbe78a8d82f29979031a4aa0b16a9d' },
            { input: '1,2,4', output: '63960835bcdc130f0b66d7ff4f6a5a8e' }
        ].forEach(({input, output}) => {
            it(`should turn the input '${input}' into the hash '${output}'`, () => {
                expect(part2(input)).toBe(output);
            });
        });

        test('Treating your puzzle input as a string of ASCII characters, what is the Knot Hash of your puzzle input?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part2(input)).toBe('899124dac21012ebc32e2f4d11eaec55');
        });
    });
});
