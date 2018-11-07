import * as C from '../constants';

export function getData() {
  return (dispatch) => {
    dispatch({
      type: C.DATA + C.START
    });

    fetch(`https://api.myjson.com/bins/cwc5q`)
    .then(res => {
      return res.json()
    })
    .then(response => dispatch({
      type: C.DATA + C.SUCCESS,
      payload: { response }
    }))
    .catch(error => {
      dispatch({
        type: C.DATA + C.FAIL,
        payload: { error }
      })
    })
  }
}

export function getResult(answers) {
  return {
    type: C.RESULT,
    payload: { answers }
  }
}
