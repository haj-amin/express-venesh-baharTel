const axios = require("axios");
const { resolve, method, reject } = require("bluebird");
const Promise = require("bluebird");
const { client } = require("../../database/drivers/redis/redis-connecion");
const Config = require("./config");
const VeneshInquiryError = require("./errors");

const _requestData = (method, url, data = null, token = null) => {
  let config = {
    method,
    url,
    headers: {
      ...Config.commonHeaders,
      Authorization: token,
    },
    data,
  };
  return axios(config)
    .then((res) => {
      return resolve(res.data);
    })
    .catch((err) => {
      return reject(err);
    });
};

const _getToken = () => {
  return new Promise((resolve, reject) => {
    return client.get("venesh:token", function (err, res) {
      if (err) {
        reject(err);
      } else {
        if (res) {
          return resolve(res);
        } else {
          const data = {
            username: process.env.VENESH_USERNAME,
            password: process.env.VENESH_PASSWORD,
            grant_type: process.env.VENESH_GRANT_TYPE,
            client_id: process.env.VENESH_CLIENT_ID,
            client_secret: process.env.VENESH_CLIENT_SECRET,
          };
          return _requestData("post", Config.login, data)
            .then((result) => {
              client.set(
                "venesh:token",
                result.token_type + " " + result.access_token,
                "EX",
                result.expires_in,
                (err, data) => {
                  return resolve(result.token_type + " " + result.access_token);
                }
              );
            })
            .catch((err) => reject(err));
        }
      }
    });
  });
};

const login = () => {
  return new Promise((resolve, reject) => {
    return client.del("venesh:token", (err) => {
      if (err) reject(err);
      return _getToken()
        .then((data) => {
          let result = {
            token: data,
          };
          return resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
};

const BillInquiry = (data) => {
  return new Promise((resolve, reject) => {
    _getToken()
      .then((token) => {
        return _requestData("post", Config.billInquiry, data, token)
          .then((result) => {
            if (result.Status === 0) {
              return resolve(result);
            } else return reject(VeneshInquiryError(Number(result.Status)));
          })
          .catch((err) => reject(VeneshInquiryError(Number(err.Status))));
      })
      .catch((err) => {
        if (err.Status === 16) {
          client.del("token");
          return resolve(BillInquiry(data));
        } else {
          reject(err);
        }
      });
  });
};

const NegativeCertificateScoreInquiry = (data) => {
  return new Promise((resolve, reject) => {
    _getToken()
      .then((token) => {
        return _requestData("post", Config.negativeScoreInquiry, data, token)
          .then((result) => {
            if (result.Status === 0) {
              return resolve(result);
            } else return reject(VeneshInquiryError(Number(result.Status)));
          })
          .catch((err) => reject(err));
      })
      .catch((err) => {
        if (err.Status === 16) {
          client.del("token");
          return resolve(NegativeCertificateScoreInquiry(data));
        } else {
          reject(err);
        }
      });
  });
};

const getDrivingAccidentInquiry = (data) => {
  return new Promise((resolve, reject) => {
    _getToken()
      .then((token) => {
        return _requestData("post", Config.drivingAccidentInquiry, data, token)
          .then((result) => {
            if (result.Status === 0) {
              return resolve(result);
            } else return reject(VeneshInquiryError(Number(result.Status)));
          })
          .catch((err) => reject(err));
      })
      .catch((err) => {
        if (err.Status === 16) {
          client.del("token");
          return resolve(getDrivingAccidentInquiry(data));
        } else {
          reject(err);
        }
      });
  });
};

const getCarTechnicalInspectionInquiry = (data) => {
  return new Promise((resolve, reject) => {
    _getToken()
      .then((token) => {
        return _requestData(
          "post",
          Config.carTechnicalInspectionInquiry,
          data,
          token
        )
          .then((result) => {
            if (result.Status === 0) {
              return resolve(result);
            } else return reject(VeneshInquiryError(Number(result.Status)));
          })
          .catch((err) => reject(err));
      })
      .catch((err) => {
        if (err.Status === 16) {
          client.del("token");
          return resolve(getCarTechnicalInspectionInquiry(data));
        } else {
          reject(err);
        }
      });
  });
};

module.exports = {
  login,
  BillInquiry,
  NegativeCertificateScoreInquiry,
  getCarTechnicalInspectionInquiry,
  getDrivingAccidentInquiry,
};
