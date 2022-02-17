const debug = require("debug")("app:server");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");

const {
  notFoundError,
  generalHandler,
} = require("./middlewares/errors/errorHandlers");
const router = require("./routers/thingsRouter");

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

app.use(morgan("dev"));
app.use(express.json());

app.use("/things", router);

app.use(notFoundError);
app.use(generalHandler);

module.exports = initializeServer;
