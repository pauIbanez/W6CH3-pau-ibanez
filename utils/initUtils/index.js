const debug = require("debug")("app:utils:initUtils");

const getArguments = require("./argumentsHandler");

const getProgramGlobals = () => {
  const params = getArguments();
};

module.exports = getProgramGlobals;
