import multer from "multer";

const storage = multer.memoryStorage();
export const avatarUpload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new Error("Only images allowed"));
    }
  }
 });

 
export const upload = multer({ storage: storage });