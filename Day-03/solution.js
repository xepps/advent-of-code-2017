const ringMultiplicate = ring => ring * 2 + 1;

const getRingCorners = ring => [0,1,2,3].map(x => (Math.pow(ringMultiplicate(ring), 2) - (ring * 8) * (x/4)));

const getClosestCentre = (ring, position) => {
    const closest = getRingCorners(ring)
        .map(x => x - ring)
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

const getSurroundingValues = (grid, pos) => [
        grid[pos.x + 1][pos.y + 1],
        grid[pos.x + 1][pos.y - 1], 
        grid[pos.x + 1][pos.y],
        grid[pos.x - 1][pos.y + 1],
        grid[pos.x - 1][pos.y - 1],
        grid[pos.x - 1][pos.y],
        grid[pos.x][pos.y + 1],
        grid[pos.x][pos.y - 1]
    ]
    .reduce((acc, cur) => acc + cur);

const getDirection = position => {
    const corners = getRingCorners(determineRing(position));

    if (position === corners[0] + 1 || position < corners[3]) return {x: 0, y: -1};
    if (position < corners[2]) return {x: -1, y: 0};
    if (position < corners[1]) return {x: 0, y: 1};
    return {x: 1, y: 0};
}

const gridUntil = until => {
    const size = 999;
    const grid = JSON.parse(JSON.stringify(Array(size).fill(Array(size).fill(0))));
    
    let coords = {x: Math.floor(size/2), y: Math.floor(size/2)};
    let total = 1;
    let position = 1;
    let direction = getDirection(position);

    grid[coords.x][coords.y] = 1;
    
    while (!until(total, position)) {
        coords = {
            x: coords.x + direction.x, 
            y: coords.y + direction.y
        };
        
        grid[coords.x][coords.y] = total = getSurroundingValues(grid, coords);
        direction = getDirection(position += 1);
    }

    return total;
}

module.exports = {
    part1: (input) => {
        const ring = determineRing(input);
        return ring + getClosestCentre(ring, input);
    },
    part2: (until) => gridUntil(until),
};
