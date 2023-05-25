import { processData, submitData } from '@use-cases/assessment';

export default Object.freeze({
  processData: () => processData(),
  submitData: (httpRequest: any) => submitData(httpRequest),
});
