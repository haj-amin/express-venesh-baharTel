const ErrorHandler = require("../component/handler/errorHandler")

const accessCheckForAdmin = (req, res, next) => {
  // if (req.headers.adminkey !== process.env.ADMIN_KEY) {
  //   return ErrorHandler(res, 401, "access denied!")
  // }
  next()
}

module.exports = accessCheckForAdmin