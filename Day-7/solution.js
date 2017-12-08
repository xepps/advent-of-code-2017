const copy = o => JSON.parse(JSON.stringify(o));

const buildTree = input => {
    const rows = input.split('\n');
    let output = {};
    rows.forEach((row) => {
        const parsed = /([a-z]+) \(([0-9]+)\)( -> )?([a-z, ]*)/.exec(row);
        output[parsed[1]] = { 
            name: parsed[1],
            weight: parseInt(parsed[2], 10), 
            branches: parsed[3] ? parsed[4].split(', ') : [] 
        };
    });

    var allBranches = [];
    Object.keys(output).forEach((node) => {
        var branches = copy(output[node].branches);
        output[node].branches = branches.map((branch) => output[branch]);
        allBranches = allBranches.concat(branches);
    });
    output = copy(output);
    allBranches.forEach(branch => delete output[branch]);
    
    output.start = Object.keys(output)[0];

    return output;
}

const getWeightOfBranches = (node) => {
    node.branches = node.branches.map(getWeightOfBranches)
    node.totalWeight = node.weight + (
        node.branches ? node.branches.map(branch => branch.totalWeight).reduce((acc, e) => acc + e, 0) : 0
    );
    
    return node;
}

module.exports = {
    part1: (input) => buildTree(input).start,
    part2: (input) => {
        let tree = buildTree(input);
        getWeightOfBranches(tree[tree.start]);
        const sizes = tree[tree.start].branches.map(branch => branch.totalWeight).sort((a, b) => a - b);
        return sizes[sizes.length-1] - sizes[0];
    }
};