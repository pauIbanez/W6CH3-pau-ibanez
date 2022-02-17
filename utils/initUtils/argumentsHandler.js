const { Command } = require("commander");

const program = new Command();
program.option("-p, --port <number>");
program.option("-d, --dev-database");
program.option("-r, --read-only");
program.parse();

const getArguments = () => ({ ...program.opts() });

module.exports = getArguments;
