import React from "react";

const title = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h4 className="text-captilize font-weight-bold">
            {props.name}
            <strong className="text-blue px-2">{props.title}</strong>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default title;
