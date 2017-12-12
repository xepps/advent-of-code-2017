// Too deep into the call stack to do this :(
// const step = (array, update, pos = 0, steps = 0) => {
//     return Number.isInteger(array[pos])
//         ? step(update(array, pos), update, pos + array[pos], steps += 1)
//         : steps
// }

module.exports = {
    // part1: (input) => step(
    //     input, 
    //     (array, pos) => array.map((v, i) => i === pos ? v += 1 : v)
    // ),
    part1: (array) => {
        let steps = 0;
        let pos = 0;
    
        while(Number.isInteger(array[pos])) {
            pos += array[pos]++;
            steps++;
        }
    
        return steps;
    },
    part2: (array) => {
        let steps = 0;
        let pos = 0;
    
        while(Number.isInteger(array[pos])) {
            if (array[pos] >= 3) pos += array[pos]--;
            else pos += array[pos]++;
            steps++;
        }
    
        return steps;
    }
};