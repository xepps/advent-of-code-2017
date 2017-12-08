const copy = o => JSON.parse(JSON.stringify(o));

const buildTree = input => {
    const rows = input.split('\n');
    let output = {};
    rows.forEach((row) => {
        const parsed = /([a-z]+) \(([0-9]+)\)( -> )?([a-z, ]*)/.exec(row);
        output[parsed[1]] = { 
            name: parsed[1],
            weight: parsed[2], 
            branches: parsed[3] ? parsed[4].split(', ') : [] 
        };
    });

    var allBranches = [];
    Object.keys(output).forEach((node) => {
        var branches = copy(output[node].branches);
        output[node].branches = branches.map((branch) => copy(output[branch]));
        allBranches = allBranches.concat(branches);
    });
    allBranches.forEach(branch => delete output[branch]);
    
    return output;

}

module.exports = {
    part1: (input) => Object.keys(buildTree(input))[0],
    part2: (input) => null
};