const determine = (input, difference) => 
    input
        .split('')
        .map((x) => parseInt(x, 10))
        .reduce(
            (acc, current, index, array) => 
                acc += current === array[(index + difference) % array.length] ? current : 0, 
            0
        )

module.exports = {
    part1: (input) => determine(input, 1),
    part2: (input) => determine(input, input.length/2)
};