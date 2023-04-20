import express from 'express';
import { login, logOut, Me, refreshToken } from '../controller/auth.js';
const router = express.Router();

router.get('/me', Me);
router.post('/login', login);
router.delete('/logout', logOut);
router.get('/token', refreshToken);

export default router;
