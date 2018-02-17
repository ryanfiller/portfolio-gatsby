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
    if(this.state.submitted != true) {
        return (
            <div>
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
            <div className="contact-form__message">
                Message sent!
                <a onClick={this.reloadForm}>Send Another?</a>
            </div>
        );
    }
  }

//   render(state) {
//     if(this.state.submitted != true) {
//         return (
//               <form
//                 id="contact-form"
//                 name="contact"
//                 method="post"
//                 action="/thanks/"
//                 data-netlify="true"
//                 data-netlify-honeypot="bot-field"
//                 onSubmit={this.handleSubmit}
//               >

//                   <div className="form__row">
//                       <input type="text" name="name" placeholder="Name *" required />
//                       <label htmlFor="name">Name</label>
//                   </div>

//                   <div className="form__row">
//                       <input type="email" name="_replyto" placeholder="Email *" required />
//                       <label htmlFor="email">Email</label>
//                   </div>

//                   <div className="form__row">
//                       <input type="text" name="_subject" placeholder="Subject *" required />
//                       <label htmlFor="subject">Subject</label>
//                   </div>
                    
//                   <div className="form__row form__row--tall">
//                       <textarea type="text" name="_message" required placeholder="Message..."></textarea>
//                       <label htmlFor="message">Message</label>
//                   </div>

//                   <div className="form__row">
//                       <input name="bot-field" hidden />
//                       <input className="button" type="submit" value="Send" />
//                   </div>
//               </form>
//           );
//     } else {
//         return(
//             <div className="contact-form__message">
//                 Message sent!
//                 {/* <a onClick={this.setState({submitted: false})}>Send Another?</a> */}
//             </div>
//         );
//     }
//   }
}