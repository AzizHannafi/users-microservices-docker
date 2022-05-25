const express = require("express");
const router = express.Router();

const Usercontroller = require("../Database/Controller/UserConttroller");
router.get("/Users", Usercontroller.getAllUsers);
router.patch("/UpdateUser/:id", Usercontroller.UpdateUser);


module.exports = router;