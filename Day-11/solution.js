const objsMatch = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const direction = (position, step) => {
    return {
        n: () => ({x: 0, y: -1}),
        s: () => ({x: 0, y: 1}),
        ne: p => ({x: 1, y: p.x % 2 ? 0 : -1}),
        sw: p => ({x: -1, y: p.x % 2 ? 1 : 0}),
        se: p => ({x: 1, y: p.x % 2 ? 1 : 0}),
        nw: p => ({x: -1, y: p.x % 2 ? 0 : -1})
    }[step](position);
}

const move = (position, direction) => ({ 
    x: position.x + direction.x, 
    y: position.y + direction.y
});

const directionToOrigin = (position) => {
    const origin = { x: 0, y: 0 };

    if (position.x === origin.x && position.y < origin.y) return 's';
    if (position.x === origin.x && position.y > origin.y) return 'n';
    if (position.x < origin.x && position.y >= origin.y) return 'ne';
    if (position.x < origin.x && position.y <= origin.y) return 'se';
    if (position.x > origin.x && position.y >= origin.y) return 'nw';
    if (position.x > origin.x && position.y <= origin.y) return 'sw';
}

const distanceToOrigin = (position, step = 0) => {
    if (objsMatch(position, {x: 0, y: 0})) return step;
    return distanceToOrigin(move(position, direction(position, directionToOrigin(position))), step+1);
}

const setObjective = (steps) => {
    let position = { x: 0, y: 0 };
    let furthest = 0;
    
    steps.forEach(step => {
        position = move(position, direction(position, step));
        let distanceAway = distanceToOrigin(position);
        furthest = furthest < distanceAway ? distanceAway : furthest;
    });

    return { objective: position, furthest};
}

module.exports = {
    part1: (input) => {
        const objective = setObjective(input.split(',')).objective;
        return distanceToOrigin(objective);
    },
    part2: (input) => {
        return setObjective(input.split(',')).furthest;
    }
};
