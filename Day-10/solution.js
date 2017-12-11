const copyInto = (list, splice, position) => {
    splice.forEach((e, i) => {
        list[(i+position) % list.length] = e;
    });

    return list;
}

const stepList = (list, length, position) => {
    return copyInto(
        list, 
        list.concat(list).splice(position, length).reverse(), 
        position
    );
}

const computeKnottedArray = (inputList, lengths, times = 1) => { 
    let steps = 0;
    let list = inputList;
    let position = 0;

    for (let it = 0; it < times; it++) {
        lengths.forEach((length, i, a) => {
            list = stepList(list, length, position % list.length);
            position += length + (it * a.length) + i;
        });
    }

    return list
}

module.exports = {
    part1: (input, lengths) => {
        const knottedInput = computeKnottedArray(input, lengths.split(',').map(x => parseInt(x, 10)));

        return { checkSum: knottedInput[0] * knottedInput[1], list: knottedInput };
    },
    part2: (input, initialHash = [17, 31, 73, 47, 23]) => {
        const initialArray = Array.from(Array(256).fill(), (x,i) => i);
        const ascii = input.split('').map(e => e.charCodeAt(0)).concat(initialHash);
        const sparseCheckSum = computeKnottedArray(initialArray, ascii, 64);
        const denseCheckSum = Array.from(Array(16).fill(0))
            .map(
                (e, i) => sparseCheckSum
                    .splice(0, 16)
                    .reduce((acc, e) => e ^ acc)
            )
            .map(e => e.toString(16))
            .map(e => e.length === 1 ? `0${e}` : e)
            .join('');

        return denseCheckSum;
    }
};
