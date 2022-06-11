const userModel = require("../model/userModel");
const complaintModel = require("../model/complaintModel");
const cloudinary = require("../utils/cloudinary");
const mongoose = require("mongoose");

const createComplaint = async (req, res) => {
	try {
		const { customerName,Product,description,address } = req.body;
		const myImage = await cloudinary.uploader.upload(req.file.path);

		const getUser = await userModel.findById(req.params.id);
		const getComplaint = await new diaryModel({
			title,
			message,
			image: myImage.secure_url,
			imageID: myImage.public_id,
		});

		getComplaint.user = getUser;
		getComplaint.save();

		getUser.complaint.push(mongoose.Types.ObjectId(getComplaint._id));
		getUser.save();

		res.status(201).json({ message: "created", data: getComplaint });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const getComplaint = async (req, res) => {
	try {
		const getUser = await userModel.findById(req.params.id).populate("complaint");

		res.status(200).json({ message: "success", data: getUser });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const updateComplaint= async (req, res) => {
	try {
		const { title, message } = req.body;
		const updateData = await diaryModel.findByIdAndUpdate(
			req.params.diary,
			{ title, message },
			{ new: true }
		);

		res.status(201).json({ message: "updated Data", data: updateData });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const getSingleComplaint = async (req, res) => {
	try {
		const diaryData = await diaryModel.findById(req.params.diary);

		res.status(201).json({ message: "found single Diary", data: diaryData });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

const deleteComplaint = async (req, res) => {
	try {
		const getUser = await userModel.findById(req.params.id);

		const removeData = await diaryModel.findByIdAndRemove(req.params.diary);

		getUser.diary.pull(removeData);
		getUser.save();

		res.status(201).json({ message: "created", data: getUser });
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

module.exports = {
	deleteComplaint,
	getComplaint,
	updateComplaint,
	getSingleComplaint,
	createComplaint,
};
