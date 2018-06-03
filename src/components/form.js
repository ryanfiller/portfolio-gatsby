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

    this.reloadForm = this.reloadForm.bind(this)    
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

  reloadForm() {
      this.setState({submitted: false});
  }

  render(state) {

    const Form = <form
        id="contact-form"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // onSubmit={this.handleSubmit}
        >

            <div className="form__row">
                <input type="text" name="name" placeholder="Name *" required onChange={this.handleChange} />
                <label htmlFor="name">Name</label>
            </div>

            <div className="form__row">
                <input type="email" name="email" placeholder="Email *" required onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
            </div>
            
            <div className="form__row form__row--tall">
                <textarea type="text" name="message" required placeholder="Message..." onChange={this.handleChange}></textarea>
                <label htmlFor="message">Message</label>
            </div>

            <div data-netlify-recaptcha />

            <div className="form__row">
                <input name="bot-field" hidden />
                <button className="button" type="submit" value="Send" onClick={ (e) => {this.handleSubmit(e)} }>Send</button>
            </div>
        </form>

    const Sent = <div className="contact-form__message">
        Message sent!
        <a onClick={this.reloadForm}>Send Another?</a>
    </div>


    if(this.state.submitted != true) {
        return (
            Form
          );
    } else {
        return(
            Sent
        );
    }
  }
}