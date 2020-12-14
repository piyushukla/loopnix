import React from "react";
import { connect } from "react-redux";
import "./Style.css";

function table(props) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>WebSite</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Course</th>
        <th>Longitude</th>
        <th>Latitude</th>
      </tr>
      <>
        {props.user.length > 0 ? (
          <>
            {props.user.map((item) => {
              return (
                <tr>
                  <td>{item["name"]}</td>
                  <td>{item["website"]}</td>
                  <td>{item["phone"]}</td>
                  <td>{item["email"]}</td>
                  <td>
                    {item.courses.map((data) => {
                      return <td>{data.title}</td>;
                    })}
                  </td>
                  <td>{item.location["coordinates"][0]}</td>
                  <td>{item.location["coordinates"][1]}</td>
                </tr>
              );
            })}
          </>
        ) : null}
      </>
    </table>
  );
}

const mapStateToProps = (state) => {
  console.log("data", state.data);
  return {
    user: state.data,
  };
};
export default connect(mapStateToProps, null)(table);
