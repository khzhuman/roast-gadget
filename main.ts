import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My phone's battery dies faster than my motivation on a Monday morning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n", "utf8");
console.log(roast);

// One line, one gripe: the phone gives up before I do on Mondays.
process.exit(0);
