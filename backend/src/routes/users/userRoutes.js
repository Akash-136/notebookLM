import express from 'express';
const router = express.Router();
import { registerUser, loginUser} from '../../controllers/users/auth.js'; 
import { getUsers } from '../../controllers/users/users.js'; 
import { auth } from "../../middlewares/auth.js";

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', auth, getUsers);

export default router;