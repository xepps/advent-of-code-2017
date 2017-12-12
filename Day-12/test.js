const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 11', () => {
    describe('part 1', () => {
        it('should have 6 paths to house 0', () => {
            const connections = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part1(connections)).toBe(6);
        });

        test('How many programs are in the group that connect to program ID 0?', () => {
            const connections = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
            expect(part1(connections)).toBe(141);
        });
    });

    describe('part 2', () => {
        it('should have 2 groups in the village', () => {
            const connections = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part2(connections)).toBe(2);
        });

        test('How many groups are there in total?', () => {
            const connections = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
            expect(part2(connections)).toBe(171);
        });
    });
});
