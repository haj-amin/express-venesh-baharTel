// const Promise = require("bluebird")
// const DatabaseServices = require("../../database/services")
// const client = require("../../database/drivers/redis/redis-connecion")
// const Config = require('./config')

// const requestData = (config, token) => {
//   if (token) axios.defaults.headers.common["Authorization"] = token
//   return axios(config)
//     .then((res) => {
//       return res.data
//     })
//     .catch((e) => {
//       console.log(e)
//     })
// }

// const getToken = () => {
//   return new Promise((resolve, reject) => {
//     return client
//       .get("token")
//       .then((data) => {
//         data = JSON.parse(data)
//         return resolve(data)
//       })
//       .catch((err) => {
//         const data = {
//           username: process.env.BAHARTEL_USERNAME,
//           password: process.env.BAHARTEL_PASSWORD,
//           uid: process.env.BAHARTEL_UID,
//         }
//         const axiosConfig = {
//           method : "post",
//           url : Config.Urls.Login,
//           data
//         }
//         return requestData(axiosConfig)
//           .then((result) => {
//             client.set("token", result)
//             resolve(result)
//           })
//           .catch((err) => reject(err))
//       })
//   })
// }

// const firstStageInsuranceOrder = (params) => {
//   return new Promise((resolve, reject) => {
//     getToken().then((token) => {
//       const axiosConfig = {
//         method : "post",
//         url : Config.Urls.Order,
//         data: params
//       }
//       return requestData(axiosConfig, token)
//         .then((result) => {
//           if (result.code === 0) {
//             let data = {
//               ...params,
//               providerId: result.providerId,
//               insuredName: result.insuredName,
//             }
//             return DatabaseServices.baharTel.Add.createNewDocument(data)
//               .then((result) => {
//                 return resolve(result)
//               })
//               .catch((err) => {
//                 return reject(err)
//               })
//           } else return reject(result)
//         })
//         .catch((err) => reject(err))
//     })
//   })
// }

// const secondStageInsuranceOrder = (params) => {
//   return new Promise((resolve, reject) => {
//     getToken().then((token) => {
//       const axiosConfig = {
//         method : "post",
//         url : Config.Urls.Submit,
//         data: params
//       }
//       return requestData(axiosConfig, token)
//         .then((result) => {
//           let data = {
//             providerId: params.providerId,
//             ...result.toObject(),
//           }
//           delete data.code
//           if (result.code === 0) {
//             return DatabaseServices.baharTel.FindAndModify.findAndUpdateSecondStage(
//               data
//             )
//               .then((result) => {
//                 return resolve(result)
//               })
//               .catch((err) => {
//                 return reject(err)
//               })
//           } else return reject(result)
//         })
//         .catch((err) => reject(err))
//     })
//   })
// }

// const getReportOfInsurancePackages = (params) => {
//   return new Promise((resolve, reject) => {
//     getToken().then((token) => {
//       const axiosConfig = {
//         method : "post",
//         url : Config.Urls.Report,
//         data: params
//       }
//       return requestData(axiosConfig, token)
//         .then((result) => {
//           return resolve(result)
//           // return DatabaseServices.baharTel.FindAndModify.findAndUpdateSecondStage(
//           //   result
//           // )
//           //   .then((result) => {
//           //     return resolve(result)
//           //   })
//           //   .catch((err) => {
//           //     return reject(err)
//           //   })
//         })
//         .catch((err) => reject(err))
//     })
//   })
// }

// const getResultOfInsuranceByPdf = (params) => {
//   return new Promise((resolve, reject) => {
//     getToken()
//       .then((token) => {
//         const axiosConfig = {
//           method : "post",
//           url : Config.Urls.GetPdf,
//           data: params
//         }
//         return requestData(axiosConfig, token)
//           .then((result) => resolve(result))
//           .catch((err) => reject(err))
//       })
//       .catch((err) => {
//         return reject(err)
//       })
//   })
// }

// module.exports = {
//   firstStageInsuranceOrder,
//   secondStageInsuranceOrder,
//   getResultOfInsuranceByPdf,
//   getReportOfInsurancePackages,
// }
