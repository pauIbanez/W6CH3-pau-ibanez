require("dotenv").config();
const debug = require("debug")("app:root");
const chalk = require("chalk");
const connectToDatabase = require("./db");

const initializeServer = require("./server");
const getProgramGlobals = require("./utils/initUtils");

(async () => {
  try {
    const globals = await getProgramGlobals();

    const connectionString = globals.devDatabase
      ? process.env.DEV_CONN_STRING
      : process.env.CONN_STRING;

    await initializeServer(globals);
    await connectToDatabase(connectionString);
  } catch (error) {
    debug(
      chalk.redBright(`There was an error on the server: ${error.message}`)
    );
  }
})();
