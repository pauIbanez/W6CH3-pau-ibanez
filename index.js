require("dotenv").config();
const debug = require("debug")("app:root");
const chalk = require("chalk");

const initializeServer = require("./server");
const getProgramGlobals = require("./utils/initUtils");

(async () => {
  try {
    const globals = await getProgramGlobals();

    await initializeServer(globals);
  } catch (error) {
    debug(
      chalk.redBright(`There was an error on the server: ${error.message}`)
    );
  }
})();
