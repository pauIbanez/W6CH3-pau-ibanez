require("dotenv").config();

const initializeServer = require("./server");
const getProgramGlobals = require("./utils/initUtils");

(async () => {
  const globals = await getProgramGlobals();

  await initializeServer(globals);
})();
