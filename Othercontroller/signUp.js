const express = require("express");
const bcrypt = require("bcrypt");
const signupModel = require("../Model/SignupModel/Signup");
const router = express.Router();
const cloudinary = require("../Util/cloudinary");
const { upload } = require("../Util/multer");
const path = require("path");

// User Creation
router.post("/register", upload, async (req, res) => {
  try {
    const { email, firstname, surname, username, password } = req.body;

    const saltedPassword = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, saltedPassword);

    const image = await cloudinary.uploader.upload(req.file.path);

    const createUser = await signupModel.create({
      firstname,
      surname,
      username,
      email,
      password: hashPassword,
      avatar: image.secure_url,
      avatarID: image.public_id,
    });

    res.status(201).json({
      message: "member created ",
      data: createUser,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
    console.log(err);
  }
});
// Specialist creation

router.patch("/:id/update", upload, async (req, res) => {
  try {
    const { userName } = req.body;
    const image = await cloudinary.uploader.upload(req.file.path);
    const createUser = await signupModel.findByIdAndUpdate(
      req.params.id,
      {
        userName,
        avatar: image.secure_url,
        avatarID: image.public_id,
      },
      { new: true }
    );

    res.status(201).json({
      message: "updated created ",
      data: createUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.patch("/:id/update", upload, async (req, res) => {
  try {
    const { userName } = req.body;
    const image = await cloudinary.uploader.upload(req.file.path);
    const createUser = await signupModel.findByIdAndUpdate(
      req.params.id,
      {
        userName,
        avatar: image.secure_url,
        avatarID: image.public_id,
      },
      { new: true }
    );

    res.status(201).json({
      message: "updated created ",
      data: createUser,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
