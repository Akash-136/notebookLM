import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import imagekit from "../../config/imagekit.js";



export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);     
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ message: "Login successful", token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let avatarData = null;

    if (req.file) {
      const file = req.file;

      const base64File = file.buffer.toString("base64");

      const result = await imagekit.upload({
        file: base64File,
        fileName: Date.now() + "-" + file.originalname,
        folder: "/avatars"
      });

      avatarData = {
        url: result.url,
        fileId: result.fileId
      };
    }

    const user = new User({ name, email, password:hashedPassword, avatar: avatarData });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};