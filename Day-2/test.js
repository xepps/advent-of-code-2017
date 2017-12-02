const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 1', () => {
    describe('part 1', () => {
        test('Sample spreadsheet gives the checksum 18', () => {
            const input = `5   1   9   5
7   5   3
2   4   6   8`;
            expect(part1(input)).toBe(18);
        });
       
        describe('What is the checksum for the input sheet?', () => {
            test(36766, () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
                expect(part1(input)).toBe(36766);
            });
        });
    });
    
    describe('part 2', () => {
        test('Sample spreadsheet gives the checksum 9', () => {
            const input = `5 9 2 8
9 4 7 3
3 8 6 5`;
            expect(part2(input)).toBe(9);
        });
       
        describe('What is the checksum for the input sheet?', () => {
            test(261, () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
                expect(part2(input)).toBe(261);
            });
        });
    });
});
