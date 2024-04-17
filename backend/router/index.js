// backend/api/index.js
const express = require('express');

const userrouter = require("./user");

const accountRouter= require("./accounts")

const router = express.Router();

router.use("/user",userrouter);
router.use("/account", accountRouter);

module.exports = router;