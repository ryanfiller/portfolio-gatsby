import React from "react";
import Navigation from '../components/navigation'
import Form from '../components/form.js'

export default class OffCanvas extends React.Component {

  render() {
    return (
        <div className="off-canvas">
          <Navigation />
          <Form />
        </div>
      );
  }
}