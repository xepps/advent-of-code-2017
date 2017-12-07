const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 4', () => {
    describe('part 1', () => {
        test('aa bb cc dd ee is valid.', () => {
            expect(part1('aa bb cc dd ee')).toBe(1);
        });

        test('aa bb cc dd aa is not valid - the word aa appears more than once.', () => {
            expect(part1('aa bb cc dd aa')).toBe(0);
        });

        test('aa bb cc dd aaa is valid - aa and aaa count as different words.', () => {
            expect(part1('aa bb cc dd aaa')).toBe(1);
        });
       
        describe('How many passphrases are valid?', () => {
            test('466', () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
                expect(part1(input)).toBe(466);
            });
        });
    });
    
    describe('part 2', () => {
        test('abcde fghij is a valid passphrase.', () => {
            expect(part2('abcde fghij')).toBe(1);
        });

        test('abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.', () => {
            expect(part2('abcde xyz ecdab')).toBe(0);
        });
        
        test('a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.', () => {
            expect(part2('a ab abc abd abf abj')).toBe(1);
        });
        
        test('iiii oiii ooii oooi oooo is valid.', () => {
            expect(part2('iiii oiii ooii oooi oooo')).toBe(1);
        });
               
        test('oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.', () => {
            expect(part2('oiii ioii iioi iiio')).toBe(0);
        });
               
        describe('Under this new system policy, how many passphrases are valid?', () => {
            test('251', () => {
                const input = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
                expect(part2(input)).toBe(251);
            });
        });
    });
});
