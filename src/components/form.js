import React from "react";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => this.setState({submitted: true}))
    .catch(error => alert(error));

    e.preventDefault();
  };

  render(state) {
    if(this.state.submitted != true) {
        return (
            <div id="contact-form">
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <p>
                  <label>
                    Your name:<br />
                  <input type="text" name="name" onChange={this.handleChange}/>
                  </label>
                </p>
                <p>
                  <label>
                    Your email:<br />
                    <input type="email" name="email" onChange={this.handleChange}/>
                  </label>
                </p>
                <p>
                  <label>
                    Message:<br />
                    <textarea name="message" onChange={this.handleChange}/>
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </div>
          );
    } else {
        return(
            <div>it worked</div>
        );
    }
  }
}