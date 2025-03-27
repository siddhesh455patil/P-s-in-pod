const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Failed:", err));

  const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model("User", UserSchema);


app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: "✅ User saved successfully!", user: newUser });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
}); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);
