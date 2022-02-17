/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const debug = require("debug")("app:utils:initUtils");

const getArguments = require("./argumentsHandler");
const askForParam = require("./paramsInquirier");

const getProgramGlobals = async () => {
  const params = getArguments();
  const dataTemplate = ["port", "devDatabase", "readOnly"];

  const wantedParams = [];

  dataTemplate.forEach((data) => {
    if (typeof params[data] === "undefined") {
      wantedParams.push(data);
    }
  });
  if (wantedParams.length !== 0) {
    for (const wantedParam of wantedParams) {
      const paramValue = await askForParam(wantedParam);
      params[wantedParam] = paramValue;
    }
  }
  debug(params);
};

module.exports = getProgramGlobals;
