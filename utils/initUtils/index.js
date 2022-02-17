/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const debug = require("debug")("app:utils:initUtils");

const chalk = require("chalk");
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
    debug(
      chalk.yellowBright(
        "Looks like I need more data, please answer the questions"
      )
    );

    for (const wantedParam of wantedParams) {
      const paramValue = await askForParam(wantedParam);
      params[wantedParam] = paramValue;
    }
  }
  return params;
};

module.exports = getProgramGlobals;
