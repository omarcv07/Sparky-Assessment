import express from 'express';

import assessmentController from '@interfaces/controllers/assessment';
import makeExpressCallback from '../make-callback';

const router = express.Router();

router.route('/process-data').get(makeExpressCallback(assessmentController.processData));
router.route('/submit-data').post(makeExpressCallback(assessmentController.submitData));

export default router;
