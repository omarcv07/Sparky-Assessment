import makeAssessmentDb from './assessment';
import makeOrdersDb from './orders';

const assessmentDb = makeAssessmentDb();

const orderDb = makeOrdersDb()

export { assessmentDb, orderDb };
