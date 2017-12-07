const formatInput = input => {
    const rows = input.split('\n');
    let output = {};
    rows.forEach((row) => {
        const parsed = /([a-z]+) \(([0-9]+)\)( -> )?([a-z, ]*)/.exec(row);
        output[parsed[1]] = { 
            weight: parsed[2], 
            branches: parsed[3] ? parsed[4].split(', ') : null 
        };
    });

    return output;

}

const getTreeBase = () => {

}

module.exports = {
    part1: (input) => formatInput(input),
    part2: (input) => null
};