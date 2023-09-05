const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose"); // Import mongoose
const rateLimiterMiddleware = require("./middlewares/rateLimiterFlexible");

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
const userRoutes = require("./routes/user");
const verifyRoutes = require("./routes/verify");
const forgotPasswordRoutes = require("./routes/forgotpassword");
const resetPasswordRoutes = require("./routes/resetpassword");

app.use("/api/user", userRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/forgotpassword", forgotPasswordRoutes);
app.use("/api/resetpassword", resetPasswordRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });

// Apply rate limiter middleware after defining routes
app.use(rateLimiterMiddleware);

app.listen(PORT, () => {
  console.log("Server started running at port", PORT);
});
