const { part1, part2 } = require('./solution');

describe('day 3', () => {
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

    describe.only('part 2', () => {
        test('Square 1 starts with the value 1.', () => {
            expect(part2((total, position) =>  position === 1)).toBe(1);
        });

        test('Square 2 has only one adjacent filled square (with value 1), so it also stores 1.', () => {
            expect(part2((total, position) =>  position === 2)).toBe(1);
        });

        test('Square 3 has both of the above squares as neighbors and stores the sum of their values, 2.', () => {
            expect(part2((total, position) =>  position === 3)).toBe(2);
        });

        test('Square 4 has all three of the aforementioned squares as neighbors and stores the sum of their values, 4.', () => {
            expect(part2((total, position) =>  position === 4)).toBe(4);
        });

        test('Square 5 only has the first and fourth squares as neighbors, so it gets the value 5.', () => {
            expect(part2((total, position) =>  position === 5)).toBe(5);
        });
       
        describe('What is the first value written that is larger than your puzzle input?', () => {
            test('349975', () => {
                expect(part2((total) =>  total > 347991)).toBe(349975);
            });
        });
    });
});
