const router = require("express").Router();
const { validate, Joi } = require("express-validation");
const Services = require("../../services");
const SuccessHandler = require("../component/handler/successHandler");
const ErrorHandler = require("../component/handler/errorHandler");

router.route("/login").post((req, res, next) => {
  Services.venesh
    .login()
    .then((result) => {
      return SuccessHandler(
        res,
        200,
        'success',
        result ? result : null
      );
    })
    .catch((err) => {
      return ErrorHandler(res, err);
    });
});

router.route("/billInquiry").post(
  validate(
    {
      body: Joi.object({
        Type: Joi.string().required(),
        Parameter: Joi.string().required(),
        SecondParameter: Joi.number(),
        Info: Joi.number(),
      }),
    },
    {},
    {}
  ),
  (req, res, next) => {
    Services.venesh
      .BillInquiry(req.body)
      .then((result) => {
        return SuccessHandler(
          res,
          result.Status,
          result.Message,
          result.Data ? result.Data : null
        );
      })
      .catch((err) => {
        return ErrorHandler(res, err);
      });
  }
);

router.route("/negativeScoreInquiry").post(
  validate(
    {
      body: Joi.object({
        LicenseNumber: Joi.string().required(),
      }),
    },
    {},
    {}
  ),
  (req, res, next) => {
    Services.venesh
      .NegativeCertificateScoreInquiry(req.body)
      .then((result) => {
        return SuccessHandler(
          res,
          result.Status,
          result.Message,
          result.Data ? result.Data : null
        );
      })
      .catch((err) => {
        return ErrorHandler(res, err);
      });
  }
);

router.route("/drivingAccidentInquiry").post(
  validate(
    {
      body: Joi.object({
        VIN: Joi.string().required(),
      }),
    },
    {},
    {}
  ),
  (req, res, next) => {
    Services.venesh
      .getDrivingAccidentInquiry(req.body)
      .then((result) => {
        return SuccessHandler(
          res,
          result.Status,
          result.Message,
          result.Data ? result.Data : null
        );
      })
      .catch((err) => {
        return ErrorHandler(res, err);
      });
  }
);

router.route("/carTechnicalInspectionInquiry").post(
  validate(
    {
      body: Joi.object({
        VIN: Joi.string().required(),
      }),
    },
    {},
    {}
  ),
  (req, res, next) => {
    Services.venesh
      .getCarTechnicalInspectionInquiry(req.body)
      .then((result) => {
        return SuccessHandler(
          res,
          result.Status,
          result.Message,
          result.Data ? result.Data : null
        );
      })
      .catch((err) => {
        return ErrorHandler(res, err);
      });
  }
);

module.exports = router;
