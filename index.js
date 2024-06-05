#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// countdown timer coding
function startcountdown(duration) {
    let remainingseconds = duration;
    const interval = setInterval(() => {
        if (remainingseconds <= 0) {
            clearInterval(interval);
            return;
        }
        const minutes = Math.floor(remainingseconds / 60);
        const seconds = remainingseconds % 60;
        console.log(chalk.redBright(`${minutes}:${seconds}`));
        remainingseconds--;
    }, 1000);
}
async function main() {
    const { duration } = await inquirer.prompt([{
            type: "input",
            name: "duration",
            message: "Enter the duration in seconds:",
            validate: (input) => {
                return input > 0 ? true : "Please enter a positive number";
            }
        }
    ]);
    startcountdown((duration));
}
main();
