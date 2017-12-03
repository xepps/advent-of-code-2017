const { part1, part2 } = require('./solution');

describe('day 1', () => {
    describe('part 1', () => {
        test('Data from square 1 is carried 0 steps, since it\'s at the access port.', () => {
            expect(part1(1)).toBe(0);
        });

        test('Data from square 12 is carried 3 steps, such as: down, left, left.', () => {
            expect(part1(12)).toBe(3);
        });

        test('Data from square 23 is carried only 2 steps: up twice.', () => {
            expect(part1(23)).toBe(2);
        });

        test('Data from square 1024 must be carried 31 steps.', () => {
            expect(part1(1024)).toBe(31);
        });
       
        describe('How many steps are required to carry the data from the square identified in your puzzle input all the way to the access port?', () => {
            test('480', () => {
                expect(part1(347991)).toBe(480);
            });
        });
    });
});
