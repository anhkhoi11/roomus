const express = require("express");

const { serviceRouter } = require("./service.router");

const { roleRouter } = require("./role.router");
const { userRouter } = require("./user.router");
const { businessRouter } = require("./business.router");

const rootRouter = express.Router();
rootRouter.use("/service", serviceRouter);

rootRouter.use("/user", userRouter);
rootRouter.use("/business", businessRouter);

rootRouter.use("/role", roleRouter);



module.exports = { rootRouter };
