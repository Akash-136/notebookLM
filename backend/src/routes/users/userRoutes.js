import express from 'express';
const router = express.Router();
import { registerUser, loginUser, changePassword} from '../../controllers/users/auth.js'; 
import { getUsers, uploadFile } from '../../controllers/users/users.js'; 
import { auth } from "../../middlewares/auth.js";
import { upload } from '../../middlewares/users/uploadMiddleware.js';

router.post('/register', upload.single('avatar'), registerUser);
router.post('/login', loginUser);
router.get('/', auth, getUsers);
router.patch('/change-password/:userId', changePassword);

router.post('/upload', upload.single('file'), uploadFile);

export default router;