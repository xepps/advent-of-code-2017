const ringMultiplicate = ring => ring * 2 + 1;

const getClosestCentre = (ring, position) => {
    const closest = [0,1,2,3]
        .map(x => (Math.pow(ringMultiplicate(ring), 2) - (ring * 8) * (x/4)) - ring)
        .map(x => x - position)
        .map(Math.abs)
        .sort((a, b) => a - b)
        .shift();

    return closest;
}

const determineRing = (number, ring = 0) => {
    if (number <= Math.pow(ringMultiplicate(ring), 2)) return ring;
    return determineRing(number, ring + 1);
}

const determine = (input) => {
    const ring = determineRing(input);
    return ring + getClosestCentre(ring, input);
}

module.exports = {
    part1: (input) => determine(input),
    part2: (input) => null
};
