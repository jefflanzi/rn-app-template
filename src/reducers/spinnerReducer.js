export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

export default function (state = false, action) {
  switch (action.type) {
    case SHOW_SPINNER: {
      return true;
    }
    case HIDE_SPINNER: {
      return false;
    }
    default: {
      return state;
    }
  }
}
