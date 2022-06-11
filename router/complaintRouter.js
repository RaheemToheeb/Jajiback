const express = require("express");
const router = express.Router();
const { image } = require("../utils/multer");
const {
	deleteComplaint,
	getComplaint,
	updateComplaint,
	getSingleComplaint,
	createComplaint,
} = require("../controller/complaintController");

router.route("/:id").post(image, createComplaint);
router.route("/:id").get(getComplaint);

router
	.route("/:id/:diary")
	.get(getSingleComplaint)
	.delete(deleteComplaint)
	.patch(updateComplaint);

module.exports = router;