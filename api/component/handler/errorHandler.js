const errorHandler = (res, err) => {
  if (!err) {
    res.status(500);
    return res.json({
      success: false,
      error: "-1",
      description: "خطای نامشخص",
      englishDescription: "Unknown Error",
      uri: "",
    });
  }

  res.statusCode = err.httpStatus;

  if (err.class && err.class === "VeneshInquiryError") {
    return res.json(err.jsonify());
  }

  return res.send({ err });
};

module.exports = errorHandler;
