import mongoose from "mongoose";
import User from "../../models/userModel.js";
import imagekit from "../../config/imagekit.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const uploadFile = (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     res.status(200).json({
//       message: "File uploaded successfully",
//       file: req.file,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



export const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    // Convert buffer → base64
    const base64File = file.buffer.toString("base64");

    const result = await imagekit.upload({
      file: base64File,
      fileName: file.originalname,
      folder: "/llmuploads"
    });

    res.json({
      url: result.url,
      name: result.name,
      type: file.mimetype
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
