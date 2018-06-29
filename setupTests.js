import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Map, List, fromJS } from 'immutable'

Enzyme.configure({ adapter: new Adapter() })

window.Map = Map
window.List = List
window.fromJS = fromJS
