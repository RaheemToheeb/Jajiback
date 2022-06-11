const mongoose = require("mongoose");

const signupModel = mongoose.Schema(
  {
    name: {
      type: String,
      
    },
    userName: {
      type: String,
      
    },
    
    email: {
      type: String,
    
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },

    complaint: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "complaints",
			},
		],
  },
  { timestamps: true }
);

module.exports = mongoose.model("signUp", signupModel);
