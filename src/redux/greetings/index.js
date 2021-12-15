import getRandomMessage from '../api';

const GET_RANDOM_GREETING = 'greetings/random';
const SHOW_LOADING = 'greetings/showLoading';
const HIDE_LOADING = 'greetings/hideLoading';

export const getRandomGreeting = (payload) => ({
  type: GET_RANDOM_GREETING,
  payload,
});

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});

export const randomGreeting = () => async (dispatch) => {
  dispatch(showLoading());
  const data = await getRandomMessage();
  dispatch(getRandomGreeting(data));
  dispatch(hideLoading());
};

const initialState = {
  greeting: null,
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_GREETING:
      return action.payload;
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
