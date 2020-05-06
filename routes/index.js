import express from "express";

import userRoute from "./user.route.js";
import bookingRoute from "./booking.route.js";
import testRoute from "./test.route.js";


const router = express.Router();

router.use("/user", userRoute);
router.use("/booking", bookingRoute);
router.use("/write_to_file", testRoute);

export default router;
