const determine = (input) => 
    input
        .split('\n')
        .map(line => line
            .split(/\s+/)
            .map((i) => parseInt(i, 10))
            .sort((a, b) => b - a)
            .filter((e, i, a) => i === 0 || i === a.length -1)
            .reduce((acc, e) => acc - e)
        )
        .reduce((acc, e) => acc + e)


module.exports = {
    part1: (input) => determine(input)
};