const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { removeAllGarbage, part1, part2 } = require('./solution');

describe('day 9', () => {
    describe('part 1', () => {
        describe('Removing garbage', () => {
            [
                '<>',
                '<random characters>',
                '<<<<>',
                '<{!>}>',
                '<!!>',
                '<!!!>>',
                '<{o"i!a,<{i<a>'
            ].forEach((garbage) => {
                it(`should remove ${garbage}`, () => {
                    expect(removeAllGarbage(garbage)).toBe('');
                });
            });
        });

        [
            { stream: '{}', score: 1},
            { stream: '{{{}}}', score: 6},
            { stream: '{{},{}}', score: 5},
            { stream: '{{{},{},{{}}}}', score: 16},
            { stream: '{<a>,<a>,<a>,<a>}', score: 1},
            { stream: '{{<ab>},{<ab>},{<ab>},{<ab>}}', score: 9},
            { stream: '{{<!!>},{<!!>},{<!!>},{<!!>}}', score: 9},
            { stream: '{{<a!>},{<a!>},{<a!>},{<ab>}}', score: 3},
        ].forEach(({stream, score}) => {
            it(`should have score ${score} for the stream ${stream}`, () => {
                expect(part1(stream)).toBe(score);
            });
        });

        test('What is the total score for all groups in your input?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part1(input)).toBe(13154);
        });
    });

    describe('part 2', () => {
        [
            { garbage: '<>', score: 0},
            { garbage: '<random characters>', score: 17},
            { garbage: '<<<<>', score: 3},
            { garbage: '<!!>', score: 0},
            { garbage: '<!!!>>', score: 0},
            { garbage: '<{o"i!a,<{i<a>', score: 10}
        ].forEach(({garbage, score}) => {
            it(`should remove ${score} characters in the garbage ${garbage}`, () => {
                expect(part2(garbage)).toBe(score);
            });
        });

        test('How many non-canceled characters are within the garbage in your puzzle input?', () => {
            const input = readFile(join(__dirname, 'input.txt'), 'utf-8');

            expect(part2(input)).toBe(6369);
        });
    })
});
