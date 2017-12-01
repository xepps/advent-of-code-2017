const determine = (input, difference) => {
    const inputAsArray = input.split('').map((x) => parseInt(x, 10));
    const other = (currentIndex, difference) => inputAsArray[(currentIndex + difference) % inputAsArray.length];

    return inputAsArray.reduce((acc, current, index) => acc += current === other(index, difference) ? current : 0, 0)
}

module.exports = {
    part1: (input) => determine(input, 1),
    part2: (input) => determine(input, input.length/2)
};