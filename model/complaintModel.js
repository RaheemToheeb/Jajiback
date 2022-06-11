const mongoose = require("mongoose");

const complaintModel = mongoose.Schema(
	{
		customerName: {
			type: String,
		},
		Product: {
			type: String,
		},
		description: {
			type: String,
		},
		address: {
			type: String,
		},
		image: {
			type: String,
		},
		imageID: {
			type: String,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("complaints", complaintModel);

