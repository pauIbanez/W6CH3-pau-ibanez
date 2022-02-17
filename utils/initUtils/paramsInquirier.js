const inquirer = require("inquirer");

const askForParams = (paramsToAsk) => {
  const wantedParams = {};

  Object.keys(paramsToAsk).forEach((paramToAsk) => {
    switch (paramToAsk) {
      case "port":
        inquirer
          .prompt([
            {
              name: "port",
              message: "Which port do you want to use?",
              type: "input",
            },
          ])
          .then((answer) => {
            wantedParams.port = answer.port;
          });
        break;
      case "devDatabase":
        inquirer
          .prompt([
            {
              name: "devDatabase",
              message: "Which database do you want to use?",
              type: "list",
              choices: ["Production database", "Development database"],
            },
          ])
          .then((answer) => {
            wantedParams.devDatabase =
              answer.devDatabase === "Development database";
          });
        break;
      case "readOnly":
        inquirer
          .prompt([
            {
              name: "readOnly",
              message: "Launch API as read only?",
              type: "list",
              choices: ["No", "Yes"],
            },
          ])
          .then((answer) => {
            wantedParams.readOnly = answer.readOnly === "Yes";
          });
        break;

      default:
        break;
    }
  });

  return wantedParams;
};

module.exports = askForParams;
