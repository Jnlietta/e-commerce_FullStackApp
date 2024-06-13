/* SELECTORS */
export const getSearchString = ({ searchString }) => searchString.data;
export const getSearchStringVisibility = ({ searchString }) => searchString.visible;


/* ACTIONS */

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');
const TOGGLE_SEARCHSTRING_VISIBILITY = createActionName('TOGGLE_SEARCHSTRING_VISIBILITY');

export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload});
export const toggleSearchStringVisibility = payload => ({ type: TOGGLE_SEARCHSTRING_VISIBILITY, payload });

/* INITIAL STATE */
const initialState = {
  data: '',
  visible: false,
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return { ...statePart, data: action.payload };
    case TOGGLE_SEARCHSTRING_VISIBILITY:
      return { ...statePart, visible: !statePart.visible };
    default:
      return statePart;
  };
}

