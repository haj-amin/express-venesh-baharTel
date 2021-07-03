const baseUrl = "https://venesh.ir/sandbox";
const url = baseUrl + "/api/Auth/v2";

module.exports = {
  login: baseUrl + "/oauth/token",
  billInquiry: url + "/BillInquiry",
  negativeScoreInquiry: url + "/Law/NegativeScoreInquiry",
  drivingAccidentInquiry: url + "/Law/DrivingAccidentInquiry",
  carTechnicalInspectionInquiry: url + "/Law/CarTechnicalInspectionInquiry",
  commonHeaders: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
};
