const debug = require("debug")("app:db:root");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectToDatabase = (connectionString) =>
  new Promise((resolve, reject) => {
    debug(chalk.whiteBright("Connecting to database..."));
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(new Error(`Couldn't connect to the database: ${error.message}`));
        return;
      }
      debug(chalk.yellowBright("Connection to database SUCESSFULL"));
      resolve();
    });
  });

module.exports = connectToDatabase;
