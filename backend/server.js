const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const gateKeeperRoutes = require("./routes/gatekeeperRoute");
const userRoutes = require("./routes/userRoute");
const accessRoutes = require("./routes/accessRoute");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3001", "http://localhost:3000"] }));

app.use("/api/gatekeepers", gateKeeperRoutes);
app.use("/users", userRoutes);
app.use("/access", accessRoutes);

app.get("/", (req, res) => {
  res.send("The Gatekeeper Home");
});

const PORT = process.env.PORT

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
