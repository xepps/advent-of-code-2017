const determine = (input, filter, rowReduce) => 
    input
        .split('\n')
        .map(line => line
            .split(/\s+/)
            .map((i) => parseInt(i, 10))
            .sort((a, b) => b - a)
            .filter(filter)
            .reduce(rowReduce)
        )
        .reduce((acc, e) => acc + e)

module.exports = {
    part1: (input) => determine(
        input, 
        (e, i, a) => i === 0 || i === a.length -1, 
        (acc, e) => acc - e
    ),
    part2: (input) => determine(
        input, 
        (e, i, a) => a.filter(x => x % e === 0 || e % x === 0).length === 2, 
        (acc, e) => acc/e
    )
};