import * as C from '../constants';

const defaultState = {
  data: [],
  isLoading: false,
  answers: {}
 }

export default (state = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case C.DATA + C.START: return {...state, isLoading: true}
    case C.DATA + C.SUCCESS: return {...state, data: payload.response.data, isLoading: false}
    case C.RESULT: return {...state, answers: payload.answers}
  }

  return state
}
