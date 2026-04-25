import express from 'express';
const router = express.Router();
import { registerUser} from '../../controllers/users/register.js'; 
import { loginUser} from '../../controllers/users/login.js';
import { getUsers } from '../../controllers/users/getUsers.js'; 
import { auth } from "../../middlewares/auth.js";

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', auth, getUsers);

export default router;