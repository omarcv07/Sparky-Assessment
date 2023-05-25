import { assessmentDb, orderDb } from '@data-access/index';
import makeProcessData from './process-data';
import makeSubmitData from './submit-data';

const processData = makeProcessData({
  assessmentDb,
  orderDb
});

const submitData = makeSubmitData({
  assessmentDb,
});

const assessmentService = Object.freeze({
  processData,
  submitData
});

export { processData, submitData };

export default assessmentService;
