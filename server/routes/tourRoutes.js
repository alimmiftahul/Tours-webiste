import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../controller/userController.js';
const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).patch(updateUser).delete(deleteUser);

export default router;
