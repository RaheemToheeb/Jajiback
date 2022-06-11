// // We can have more than one field validation in a field
// const hapiJoi = require("@hapi/joi");

// const validateDetails = (data) => {
//   // create the instance of object you want to validate
//   const validateUser = hapiJoi.object({
//     fullname: hapiJoi.string().min(3).max(20),
//     email: hapiJoi.string().email(),
//     password: hapiJoi.string().min(8).max(100),
//   });
//   return validateUser.validate(data);
// };
// module.exports.validateDetails = validateDetails;

// // const hapiJoi = require("@hapi/joi");

// // const userDetails = (data) => {
// //   user = hapiJoi.object({
// //     fullname: hapiJoi.string().min(7).max(20),
// //     email: hapiJoi.string().email(),
// //     passwrod: hapiJoi.string().min(7).max(20),
// //   });
// //   return user.validate(data);
// // };

// // module.exports.userDetails = userDetails;

// const fieldValidator = (data) => {
//   const userField = hapiJoi.object({
//     fullname: hapiJoi.string().min(8).max(20),
//     email: hapiJoi.string().email(),
//     password: hapiJoi.string().min(7).max(20).alphanum(),
//   });
//   return userField.validate(data);
// };
// module.exports.fieldValidator = fieldValidator;
