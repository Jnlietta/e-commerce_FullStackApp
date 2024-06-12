/* SELECTORS */
export const getSearchString = ({ searchString }) => searchString.data;


/* ACTIONS */

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload});

/* INITIAL STATE */
const initialState = {
  data: {},
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return { data: action.payload };
    default:
      return statePart;
  };
}

