const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 11', () => {
    describe('part 1', () => {
        [
            { path: 'ne,ne,ne', distance: 3 },
            { path: 'ne,ne,sw,sw', distance: 0 },
            { path: 'ne,ne,s,s', distance: 2 },
            { path: 'se,sw,se,sw,sw', distance: 3 }
        ].forEach(({path, distance}) => {
            it(`should take ${distance} steps to return from going ${path}`, () => {
                expect(part1(path)).toBe(distance);
            });
        });

        test('How many steps does it take to return from the input\'s path?', () => {
            const path = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
            expect(part1(path)).toBe(685);
        });
    });
});
