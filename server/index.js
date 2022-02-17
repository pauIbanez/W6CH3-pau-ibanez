const debug = require("debug")("app:server");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");

let globals;
const app = express();

const initializeServer = (recievedGlobals) => {
  globals = recievedGlobals;

  debug(chalk.whiteBright(`Setting up server...`));

  return new Promise((resolve, reject) => {
    const server = app.listen(globals.port, () => {
      debug(
        chalk.yellowBright(`Server is up: http://localhost:${globals.port}`)
      );
      resolve();
    });

    server.on("error", (error) => {
      const errorMessage = `Couldn't start the server.${
        error.code === "EADDRINUSE"
          ? ` Port ${globals.port} is already in use`
          : ""
      }`;
      reject(new Error(errorMessage));
    });
  });
};

module.exports = initializeServer;
