import { AUTH_USER } from 'actions/types';
import axios from 'axios';

export const signup = (formProps) => async dispatch => {
  const response = await axios.post('http://localhost:3090/signup', formProps);

  dispatch({
    type: AUTH_USER,
    payload: response.data.token
  });
};
