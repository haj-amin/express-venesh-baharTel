const successHandler = (res, status, message, Data) => {
  return res.status(200).send({ status, message, Data })
}

module.exports = successHandler