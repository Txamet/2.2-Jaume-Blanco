const readline = require("readline");
import { throttle } from "./throttle";
import chalk from "chalk";

console.log(chalk.greenBright("-----DEMOSTRACIÓN FUNCIÓN THROTTLE-----"));
console.log("Pulsa cualquier tecla repetitivamente para observar que\nsólo se incrementa en 1 a partir de haber pasado 1 segundo.\n");
console.log("Para salir pulsa CRTL + C\n");
console.log(chalk.cyan("Pulsa cualquier tecla para comenzar a contar:"))

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

let i = 0;
const throttleFunction: Function = throttle(() => {
    i++
}, 1000);

process.stdin.on("keypress", (str, key) => {
    if(key.ctrl == true && key.name == "c"){
        process.exit();
    }
    
    throttleFunction();
    console.log(i);
});
