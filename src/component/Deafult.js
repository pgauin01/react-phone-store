import React, { Component } from "react";

export default class Deafult extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h1 className="display-3">404</h1>
              <h1>error</h1>
              <h2>Page not found</h2>
              <h3>the requested url</h3>
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              was not found
            </div>
          </div>
        </div>
      </div>
    );
  }
}
