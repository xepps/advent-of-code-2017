const distribute = (array) => {
    const next = (i, length) => (i + 1) % length;
    let largest = array.reduce((acc, e) => acc < e ? e : acc);
    let indexFrom = array.indexOf(largest);
    
    array[indexFrom] = 0;

    while(largest > 0) {
        indexFrom = next(indexFrom, array.length);
        array[indexFrom] += 1;
        largest -= 1;
    }

    return array;
}

const determine = input => {
    let rotation = input.split(/\s+/).map((x) => parseInt(x, 10));
    let rotations = [];

    while(!rotations.includes(rotation.join())) {
        rotations.push(rotation.join());
        rotation = distribute(rotation);
    }

    rotations.push(rotation.join())

    return rotations;
}

module.exports = {
    part1: (input) => determine(input).length - 1,
    part2: (input) => {
        const cycles = determine(input);
        return (cycles.length - 1) - cycles.indexOf(cycles[cycles.length - 1])
    }
};