import { createStore } from "redux";
import rootReducer from './reducers';
//引入redux-devtools-extension的可视化工具（有点吊）
import { composeWithDevTools } from 'redux-devtools-extension';//devToolsEnhancer,

let store = createStore(rootReducer, composeWithDevTools());

export default store;