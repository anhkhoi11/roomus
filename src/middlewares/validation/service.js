const { check } = require("express-validator");
const validateAddService=[
    check("serviceName").notEmpty(),
    check("bussinessId").notEmpty(),
    check("image").notEmpty(),
    check("serviceType").notEmpty(),
    check("description").notEmpty(),
    check("address").notEmpty(),
];
const validateAddServiceItem=[
    check("serviceId").notEmpty(),
    check("images").notEmpty(),
    check("price").notEmpty(),
    check("description").notEmpty(),
    check("itemType").notEmpty(),
];
module.exports={validateAddService,validateAddServiceItem};