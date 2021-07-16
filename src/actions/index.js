import * as c from './ActionTypes';

export const deleteCoverLetter = id => ({
  type: c.DELETE_COVER_LETTER,
  id,
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});
