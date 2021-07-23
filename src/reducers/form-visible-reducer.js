import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case c.CREATE_COVER_LETTER:
      return !state;
    case c.CREATE_JOB_POSTING:
      return !state;
    default:
      return state;
  }
};
