import express from 'express';
const router = express.Router();
import { registerUser, getUsers, loginUser } from '../../controllers/users/users.js'; 
import { auth } from "../../middlewares/users/auth.js";

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', auth, getUsers);

export default router;