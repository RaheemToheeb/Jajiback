require("dotenv").config();
require("./utils/Database");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT;
// const port = 6060
const app = express();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Welcome to Jjilite" });
// });

app.use("/api/user", require("./router/userRouter"));
app.use("/api/complaint", require("./router/complaintRouter"));

app.listen(port, () => {
  console.log("server is now running...!");
});







// require("./Util/Database");
// const cors = require("cors");
// const express = require("express");
// const port = 6060;
// const app = express();
// const signupRoute = require("./Othercontroller/signUp");
// const signUpdate = require("./Othercontroller/signUp");
// const signInRoute = require("./Router/userRouter");
// app.use(cors({ origin: "*" }));
// app.use(express.json());
// app.use("/api", signupRoute);

// // app.use(express.json({ extended: true }));
// // app.use(express.urlencoded({ extended: true }));
// app.use("/api", signInRoute);

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Welcome to our Jajilite " });
// });

// app.listen(port, () => {
//   console.log(`I am listening to ${port}`);
// });
