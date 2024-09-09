const { machineIdSync } = require("node-machine-id");

const machineId = machineIdSync();

// pretty print
const length = machineId.length + 2;
const filling = new Array(length).fill("-").concat("+").join("");
console.log(`+------------+${filling}`);
console.log(`| Machine Id | ${machineId} |`);
console.log(`+------------+${filling}`);

// keep terminal window from closing
setInterval(() => {}, 1 << 30);
