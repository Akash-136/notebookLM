import multer from "multer";

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null,"src/uploads/");
//     },
//     filename: function(req, file, cb) {
//         cb(null, Date.now() + "-" + file.originalname);
//     }
// });

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