
import express from 'express';
import {login,register} from '../controllers/auth.controller.js'
import {getUserById,getAllUsers} from '../controllers/users.controller.js'

const router = express.Router();
router.post('/login', login);

router.post('/register',register);
router.get('/users',getAllUsers);
router.get('/user/:id',getUserById)


export default router;

