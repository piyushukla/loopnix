import React, { useEffect, useState } from "react";
import { Provider, connect } from "react-redux";
import Reduce from "./Store";
import { combineReducers } from "redux";
import { createStore } from "redux";
import Table from "./Table";

const reducer = combineReducers({ data: Reduce });
const store = createStore(reducer);

function User(props) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://node-expresss-api.herokuapp.com/api/v1/bootcamps")
      .then((output) => output.json())
      .then((output) => {
        props.addData(output.data);
        setItem([...output.data]);
        console.log("ddd", output.data);
      });
  }, []);
  return <div>{item.length > 0 ? <Table /> : <h5>Loading....</h5>}</div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (response) => {
      dispatch({ type: "setData", user: response });
    },
  };
};
export default connect(null, mapDispatchToProps)(User);
