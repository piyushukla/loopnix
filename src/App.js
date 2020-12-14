import User from "./component/Users";
import { Provider, connect } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import Reduce from "./component/Store";

const reducer = combineReducers({ data: Reduce });
const store = createStore(reducer);

function App(props) {
  return (
    <div>
      <Provider store={store}>
        <User />
      </Provider>
    </div>
  );
}

export default App;
