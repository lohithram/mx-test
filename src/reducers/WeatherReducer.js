import * as types from '../actions/types'

const initialState = {
  data: {},
  error: null,
  loading: false,
}

///////////////////////////////////////////////////////////////////////
// The reducer has been kept void of any formatting or transformation of
// the data for the following reasons
// 1. If the data is set is huge like in this case there would be a time
//    penalty if we try to format the data as we desire and store it.
// 2. Since we don't know up front how much of the data is displayed,
//    formatting all data upfront is redundant. This affects both UI
//    response time and consumes memory
// 3. We may need to keep the original data (for good reason(s)) and hence
//    is better to apply required formatting at the time of display
///////////////////////////////////////////////////////////////////////


export default function reducer(state = initialState, action) {
  console.log("Action", action)

  switch(action.type) {
    case types.LOAD_WEATHER_DATA:
    {
      return { ...state,
        data: {},
        error: null,
        loading: true};
    }
    case types.LOAD_WEATHER_DATA_SUCCESS:
    {
      return { ...state,
                data: action.data,
                loading: false};
    }
    case types.LOAD_WEATHER_DATA_FAILURE:
    {
      return { ...state,
                error: action.error,
                loading: false};
    }
    default:
      break;
  }
  return state
}
