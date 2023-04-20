import express from 'express';
import {
  getTours,
  getTourById,
  createTours,
  updateTours,
  deleteTours,
} from '../controller/tourController.js';
const router = express.Router();

router.route('/').get(getTours).post(createTours);
router.route('/:id').get(getTourById).patch(updateTours).delete(deleteTours);

export default router;
