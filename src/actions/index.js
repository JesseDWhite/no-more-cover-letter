import * as c from './ActionTypes';

export const deleteJobComparison = id => ({
  type: c.DELETE_JOB_COMPARISON,
  id,
});

export const createJobComparison = () => ({
  type: c.CREATE_JOB_COMPARISON,
});

export const returnToMainPage = () => ({
  type: c.RETURN_TO_MAIN_PAGE,
});

export const viewJobComparison = () => ({
  type: c.VIEW_JOB_COMPARISON,
});
