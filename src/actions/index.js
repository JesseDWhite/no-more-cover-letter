import * as c from './ActionTypes';

export const deleteCoverLetter = id => ({
  type: c.DELETE_COVER_LETTER,
  id,
});

export const createCoverLetter = () => ({
  type: c.CREATE_COVER_LETTER,
});

export const createJobPosting = () => ({
  type: c.CREATE_JOB_POSTING,
});

export const viewCoverLetter = () => ({
  type: c.VIEW_COVER_LETTER,
});
