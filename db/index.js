const debug = require("debug")("app:db:root");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectToDatabase = (connectionString) =>
  new Promise((resolve, reject) => {
    debug(chalk.whiteBright("Connecting to database..."));
    mongoose.connect(connectionString, (error) => {
      if (error) {
        const newError = {
          ...error,
          message: `Database error: ${error.message}`,
        };
        reject(newError);
      }
      debug(chalk.yellowBright("Connection to database SUCESSFULL"));
      resolve();
    });
  });

module.exports = connectToDatabase;
