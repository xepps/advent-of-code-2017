const _ = require('lodash');

const removeIgnores = (input) => input.replace(/!./g, '');

const removeGarbage = (input) => input.replace(/<.*?>/g, '');

const removeCommas = (input) => input.replace(/,/g, '');

const countBraces = (input) => {
    let level = 0;

    return input.split('')
        .reduce((acc, e) => {
            if (e === '{') return acc += ++level;
            level--;
            return acc;
        }, 0);
}

module.exports = {
    removeAllGarbage: _.flow(removeIgnores, removeGarbage),
    part1: _.flow(
        removeIgnores,
        removeGarbage,
        removeCommas,
        countBraces
    ),
    part2: (input) => null
};