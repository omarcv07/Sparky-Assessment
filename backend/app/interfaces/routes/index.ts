import express from 'express';
import assessmentRoutes from './assessment';

const router = express.Router();

router.use(assessmentRoutes)

export default router;
