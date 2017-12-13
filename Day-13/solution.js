const copy = obj => JSON.parse(JSON.stringify(obj));

const parse = input => {
    let firewall = [];

    input.split('\n').forEach(row => {
        const parsedRow = row.split(': ');
        const layer = parseInt(parsedRow[0], 10);
        const depth = parseInt(parsedRow[1], 10);

        firewall[layer] = { direction: 'd', depths: Array.from(Array(depth)).fill(0) };
        firewall[layer].depths[0] = 'S';
    });

    return firewall;
}

const isCaught = (firewall, position) => firewall[position] && firewall[position].depths.indexOf('S') === 0;

const calculateSeverity = (firewall, position) => firewall[position].depths.length * position;

const moveScanners = firewall => {
    firewall.forEach(layer => {
        if (layer) {
            let scannerPosition = layer.depths.indexOf('S');
            let newScannerPosition = scannerPosition;

            layer.direction = scannerPosition === 0 ? 'd' 
                : scannerPosition === layer.depths.length - 1 ? 'u' : layer.direction;

            newScannerPosition += layer.direction === 'd' ? 1 : -1;
            layer.depths[scannerPosition] = 0;
            layer.depths[newScannerPosition] = 'S'; 
        }
    });

    return firewall;
}

const isGoodRun = firewall => {
    let position = 0;
    
    while (position < firewall.length) {
        if (isCaught(firewall, position)) return false;
        firewall = moveScanners(firewall);
        position += 1;
    }

    return true;
}

const severityToRun = firewall => {
    let position = 0;
    let severity = 0;

    while (position !== firewall.length) {
        severity += isCaught(firewall, position) ? calculateSeverity(firewall, position) : 0;
        firewall = moveScanners(firewall);
        position += 1;
    }

    return severity;
} 


/*
So this was an awful way of doing it, and ran so, so slow - it took 30s to just run one iteration at the correct answer

This is a better solution:

const input = document.body.textContent.trim();
const guards = input.split('\n').map(s => s.match(/\d+/g).map(Number));
const caughtByGuard = delay => ([d, r]) => (delay + d) % (2 * (r - 1)) === 0;
const severity = delay => guards.filter(caughtByGuard(delay))
    .reduce((n, [d, r]) => n + d * r, 0);

let delay = -1;
while (guards.some(caughtByGuard(++delay)));

*/

module.exports = {
    part1: (input) => {
        let firewall = parse(input);
        
        return severityToRun(firewall);
    },
    part2: (input) => {
        let firewall = parse(input);
        let delay = 0;
        let passed = isGoodRun(copy(firewall));

        while (!passed) {
            delay += 1;
            console.log(delay)
            let newRun = copy(firewall);
            for (i = 0; i < delay; i += 1) newRun = moveScanners(newRun);
            passed = isGoodRun(newRun);
        }

        return delay;

    }
};
