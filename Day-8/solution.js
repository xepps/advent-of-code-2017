const toObj = row => {
    return {r: row[1], m: row[2], by: row[3], exp: row[4], or: row[5]};
}

const toCode = ({r, m, by, exp, or}) => {
    return `
        if(r.${r} === undefined) r.${r} = 0;
        if(r.${or} === undefined) r.${or} = 0;
        if(r.${exp}) r.${r} ${m === 'inc' ? '+=' : '-='} ${by};
        if(r.${r} > h) h = r.${r};
`
}

const genCode = input => 
    `(function() {
        let r = {};
        let h = 0; ${
        input.split('\n')
            .map((row) => /([a-z]+) (inc|dec) ([0-9-]+) if (([a-z]+) .*)/.exec(row))
            .map(toObj)
            .map(toCode)
            .join(' ')
        }
        return {regs: r, highest: h};
    })();`;

module.exports = {
    part1: (input) => {
        const regs = eval(genCode(input)).regs;

        return Object.keys(regs).map(key => regs[key]).sort((a,b) => b - a)[0]
    },
    part2: (input) => eval(genCode(input)).highest
};