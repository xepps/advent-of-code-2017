const parse = (input) => {
    return input.split('\n').map(e => e.split(' <-> ')[1].split(', ').map(e => parseInt(e, 10)))
}

const firstAvailableHouse = (village) => village.indexOf(village.find(house => Array.isArray(house)));

const findConnectedHouses = (houses) => {
    const firstHouse = firstAvailableHouse(houses);
    let foundHouses = [firstHouse];
    let investigationQueue = [firstHouse];
    while (investigationQueue.length) {
        let current = investigationQueue.splice(0, 1);
        let connected = houses[current];
        connected.forEach((newHouse) => {
            if (!foundHouses.includes(newHouse)) {
                foundHouses.push(newHouse);
                investigationQueue.push(newHouse);
            }
        });
    }

    return foundHouses;
}

const removeGroupFromVillage = (group, village) => {
    group.forEach(house => {
        delete village[house];
    });
    
    return village;
}

module.exports = {
    part1: (input) => {
        const village = parse(input);
        return findConnectedHouses(village).length;
    },
    part2: (input) => {
        let village = parse(input);
        let groups = 0;
        
        while (Number.isInteger(firstAvailableHouse(village)) && firstAvailableHouse(village) >= 0) {
            groups += 1;
            village = removeGroupFromVillage(findConnectedHouses(village), village);
        }

        return groups;
    }
};
