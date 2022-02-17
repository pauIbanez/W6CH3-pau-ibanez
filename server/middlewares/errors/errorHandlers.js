const errorTypes = require("./errorTypes");

const generateErrorObject = (errorMessage) => ({
  error: true,
  message: errorMessage,
});

const notFoundError = (req, res) => {
  res.status(400);
  res.json(generateErrorObject("Resource not found"));
};

// eslint-disable-next-line no-unused-vars
const generalHandler = (err, req, res, next) => {
  switch (err.type) {
    case errorTypes.badRequest:
      res.status(400);
      res.json(
        generateErrorObject(
          "Looks like your request is not correct, please read the documentation!"
        )
      );
      break;

    default:
      res.status(500);
      res.json(
        generateErrorObject(
          "Opps, something went wrong processing your request"
        )
      );
      break;
  }
};

module.exports = {
  notFoundError,
  generalHandler,
};
