import cloudinary from "../../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

