import reducer from './WeatherReducer';
import * as types from '../actions/types'

const initialState =
  {
    data: {},
    error: null,
    loading: false,
  }

describe('WeatherReducer', () => {

  it('ANY_OTHER_ACTION, doesnt affect the state', () => {
    const nextState = reducer(initialState, {type: 'ANY_OTHER_ACTION', payload: {}});
    expect(nextState).toEqual(initialState);
  })

  it('types.LOAD_WEATHER_DATA', () => {
    const nextState = reducer(initialState, {type: types.LOAD_WEATHER_DATA, payload: {}});
    expect(nextState.loading).toEqual(true);
  })

  it('types.LOAD_WEATHER_DATA_SUCCESS', () => {
    const nextState = reducer(initialState, {type: types.LOAD_WEATHER_DATA_SUCCESS, data: {xyz: 'xyz'}});
    expect(nextState.data).toEqual({xyz: 'xyz'});
    expect(nextState.error).toEqual(null);
    expect(nextState.loading).toEqual(false);

  })

  it('types.LOAD_WEATHER_DATA_FAILURE', () => {
    const nextState = reducer(initialState, {type: types.LOAD_WEATHER_DATA_FAILURE, error: {msg: 'xyz'}});
    expect(nextState.error).toEqual({msg: 'xyz'});
    expect(nextState.data).toEqual({});
    expect(nextState.loading).toEqual(false);

  })
})
