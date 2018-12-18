import * as types from './action-types'

let init = {
  isLogin: false,
  test: 'haha'
}

export default (state = init, action) => {
  switch (action.type) {
    case types.UPDATE_APP_INFO:
      return {
        state,
        ...action.data
      }
    default:
      return state
  }
}
