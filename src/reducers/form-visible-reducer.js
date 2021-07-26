import * as c from '../actions/ActionTypes';

export default (state = c.RETURN_TO_MAIN_PAGE, action) => {
  switch (action.type) {
    case c.CREATE_JOB_COMPARISON:
      return state = c.CREATE_JOB_COMPARISON;
    case c.RETURN_TO_MAIN_PAGE:
      return state = c.RETURN_TO_MAIN_PAGE;
    default:
      return state;
  }
};
