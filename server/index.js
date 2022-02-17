const debug = require("debug")("app:server");
const chalk = require("chalk");
const express = require("express");
const morgan = require("morgan");

const {
  notFoundError,
  generalHandler,
} = require("./middlewares/errors/errorHandlers");
const errorTypes = require("./middlewares/errors/errorTypes");
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
app.use((req, res, next) => {
  req.globals = globals;
  next();
});
app.use((req, res, next) => {
  if (req.globals.readOnly && req.method !== "GET") {
    const error = new Error("Forbidden!");
    error.type = errorTypes.forbidden;
    next(error);
    return;
  }
  next();
});

app.use("/things", router);

app.use(notFoundError);
app.use(generalHandler);

module.exports = initializeServer;
