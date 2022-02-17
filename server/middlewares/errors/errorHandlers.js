const errorTypes = require("./errorTypes");

const generateErrorObject = (errorMessage, info) => ({
  error: true,
  message: errorMessage,
  info,
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
          "Looks like your request is not correct, please read the documentation!",
          err.info
        )
      );
      break;

    case errorTypes.forbidden:
      res.status(403);
      res.json(
        generateErrorObject(
          "Forbidden, this server is only accepting GET requests at the moment"
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
