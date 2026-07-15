const fs = require("fs");

const data = fs.readFileSync("manifest.txt", "utf8");
const lines = data.trim().split("\n");

const cargo = [];

const regex = /\[(.*?)\]\s+\|\|\s+(.*?)\s+::\s+(\d+)\s+>>\s+(.*)/;

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

for (const line of lines) {
    const match = line.match(regex);

    if (!match) continue;

    const date = match[1];
    const id = match[2];
    let weight = Number(match[3]);
    const destination = match[4];

    if (destination.includes("Sector-7")) {
        weight *= 1.45;
    }
    // added
    weight = Math.round(weight);

    if (isPrime(weight)) {
        continue;
    }

    cargo.push({
        date,
        cargoId: id,
        weight,
        destination
    });
}

// read 
