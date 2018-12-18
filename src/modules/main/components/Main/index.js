import { connect } from 'react-redux'
import Main from './Main'
import { updateAppInfo } from 'modules/app/actions.js'

const mapStateToProps = state => {
  return {
    isLogin: state.app.isLogin,
    test: state.app.test
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAppInfo: () => {
      dispatch(updateAppInfo({ test: '1232' }))
    },
    logout: () => {
      // dispatch(logout())
      // window.location.replace('/order/login')
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
