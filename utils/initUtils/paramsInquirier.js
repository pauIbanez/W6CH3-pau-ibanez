const inquirer = require("inquirer");

const askForParam = (paramToAsk) =>
  new Promise((resolve) => {
    switch (paramToAsk) {
      case "port":
        inquirer
          .prompt([
            {
              name: "port",
              message: "Which port do you want to use?",
              type: "input",
              default: 4000,
            },
          ])
          .then((answer) => {
            resolve(answer.port);
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
            resolve(answer.devDatabase === "Development database");
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
            resolve(answer.readOnly === "Yes");
          });
        break;

      default:
        break;
    }
  });

module.exports = askForParam;
