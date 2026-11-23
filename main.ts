import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My phone's battery dies faster than my motivation on a Monday morning.";

console.log(roast);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n");
