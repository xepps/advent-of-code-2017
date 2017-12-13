const readFile = require('fs').readFileSync; 
const join = require('path').join;

const { part1, part2 } = require('./solution');

describe('day 13', () => {
    describe('part 1', () => {
        it('should calculate the severity of the sample trip as 24', () => {
            const firewall = readFile(join(__dirname, 'sample.txt'), 'utf-8');

            expect(part1(firewall)).toBe(24);
        });

        test('Given the details of the firewall you\'ve recorded, if you leave immediately, what is the severity of your whole trip?', () => {
            const firewall = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
            expect(part1(firewall)).toBe(632);
        });
    });

    describe('part 2', () => {
        it('should not get caught if you delay by 10 turns', () => {
            const firewall = readFile(join(__dirname, 'sample.txt'), 'utf-8');
            
            expect(part2(firewall)).toBe(10);
        });

        test('What is the fewest number of picoseconds that you need to delay the packet to pass through the firewall without being caught?', () => {
            const firewall = readFile(join(__dirname, 'input.txt'), 'utf-8');
            
            expect(part2(firewall)).toBe(3849742);
        });
    });
});
