import * as types from './action-types'

let init = {}
export default (state = init, action) => {
  switch (action.type) {
    case types.temp: {
      return state
    }
    default:
      return state
  }
}
