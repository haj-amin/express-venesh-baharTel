const express = require("express");
const { ValidationError } = require("express-validation");
const ErrorHandler = require("./component/handler/errorHandler");
const VeneshInquiryError = require('../errors/venesh/inquiryErrors');

const app = express();
const PORT = process.env.PORT || 5857;

app.use(express.json());

app.use("/venesh", require("./middlewares/accessChecker"), require("./venesh"));

app.use("/*", (req, res, next) => {
  return res.status(404).send({ error: "Not Found!" });
});
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    let error = VeneshInquiryError.General.InvalidRequest
    return ErrorHandler(res, error);
  }
  return ErrorHandler(res, err);
});

app.listen(PORT, () => {
  console.log(`venesh microservice is running on port ${PORT}`);
});
