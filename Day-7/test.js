const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe.only('day 7', () => {
    describe('part 1', () => {
        test('The base of the tree should be tknk', () => {
            const input = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part1(input)).toBe('tknk');
        });

        describe('What is the name of the bottom program?', () => {
            test('aapssr', () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

                expect(part1(input)).toBe('aapssr');
            });
        });
    });

    describe('part 2', () => {
        test('As you can see, tknk\'s disc is unbalanced: ugml\'s stack is heavier than the other two.', () => {
            const input = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part2(input)).toBe(8);
        });

        describe('Given that exactly one program is the wrong weight, what would its weight need to be to balance the entire tower?', () => {
            test('1458', () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

                expect(part2(input)).toBe(1458);
            });
        });
    });
});
