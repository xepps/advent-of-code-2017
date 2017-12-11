const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 1', () => {
    describe('part 1', () => {
        test('1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.', () => {
            expect(part1('1122')).toBe(3);
        });
        
        test('1111 produces 4 because each digit (all 1) matches the next.', () => {
            expect(part1('1111')).toBe(4);
        });
        
        test('1234 produces 0 because no digit matches the next.', () => {
            expect(part1('1234')).toBe(0);
        });
        
        test('91212129 produces 9 because the only digit that matches the next one is the last digit, 9.', () => {
            expect(part1('91212129')).toBe(9);
        });
        
        test('What is the solution to your captcha?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');
        
            expect(part1(input)).toBe(1029);
        });
    });

    describe('part 2', () => {
        test('1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.', () => {
            expect(part2('1212')).toBe(6);
        });
        
        test('1221 produces 0, because every comparison is between a 1 and a 2.', () => {
            expect(part2('1221')).toBe(0);
        });
        
        test('123425 produces 4, because both 2s match each other, but no other digit has a match.', () => {
            expect(part2('123425')).toBe(4);
        });
        
        test('123123 produces 12', () => {
            expect(part2('123123')).toBe(12);
        });
        
        test('12131415 produces 4.', () => {
            expect(part2('12131415')).toBe(4);
        });
        
        test('What is the solution to your new captcha?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');
        
            expect(part2(input)).toBe(1220);
        });
    });
});
