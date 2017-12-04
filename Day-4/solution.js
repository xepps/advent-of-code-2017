const determine = (input, rule) => input
    .split('\n')
    .filter((phrase) => phrase === phrase
        .split(' ')
        .filter(rule)
        .join(' ')
    )
    .length


module.exports = {
    part1: (input) => determine(
        input, 
        (word, i, a) => a.lastIndexOf(word) === i
    ),
    part2: (input) => determine(
        input, 
        (word, i, a) => a.map(x => x.split('').sort().join('')).lastIndexOf(word.split('').sort().join('')) === i
    )
};