const BASE_URL = "http://ip:port/api"

module.exports = {
    Urls: {
        Login: `${BASE_URL}/login/token`,
        Order: `${BASE_URL}/insurance/order`,
        Submit: `${BASE_URL}/insurance/submit`,
        Report: `${BASE_URL}/report/insurancepackages`,
        GetPdf: `${BASE_URL}/insurance/pdf`
    }
}