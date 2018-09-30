import React from "react"

import styled from 'styled-components'
import { colors, fonts, padding, transition } from '../config/styles'

import Recaptcha from "react-google-recaptcha";
const RECAPTCHA_KEY = "6LeZT2IUAAAAACs54WyysXeSztMT6xJMpr2bDr7n";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

export default class Contact extends React.Component {
    state = {
        submitted: false,
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
            .catch(error => alert(error))

        e.preventDefault()
    }

    reloadForm() {
	    this.setState({submitted: false})
    }   

    // handleRecaptcha = (value) => {
    //     this.setState({ "recaptcha": value });
    // };

    // handleRecaptchaSize = () => {
    //     var scaledElement = document.getElementById('recaptcha')
    //     var targetWidth = document.getElementById('recaptcha').parentElement.offsetWidth
    //     var scale = targetWidth / 304
    
    //     if (scaledElement.offsetWidth < 304) {
    //         scaledElement.style.cssText = `transform: scale(${scale})`
    //     }
    // }
    
    // componentDidMount() {
    //     this.handleRecaptchaSize()
    //     window.addEventListener("resize", this.handleRecaptchaSize())
    // }
    
    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.handleRecaptchaSize())
    // }

    render() {

        const Form = <StyledForm
                id="contact-form"
                className="form"
                tabIndex="1"
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >


                <StyledRow>
                    <StyledInput 
                        type="text"
                        name="name"
                        placeholder="Name *"
                        required
                        onChange={this.handleChange}
                    />
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                </StyledRow>

                <StyledRow>
                    <StyledInput
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                        onChange={this.handleChange} 
                    />
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                </StyledRow>
                
                <StyledRow className="tall">
                    <StyledTextarea 
                        type="text"
                        name="message"
                        placeholder="Message..."
                        required
                        onChange={this.handleChange}
                    />
                    <StyledLabel htmlFor="message">Message</StyledLabel>
                </StyledRow>

                {/* <StyledRow className="recaptcha">
                    <Recaptcha
                        id="recaptcha"
                        theme="dark"
                        required
                        ref="recaptcha"
                        name="recaptcha"
                        sitekey={RECAPTCHA_KEY}
                        onChange={this.handleRecaptcha}
                    />
                </StyledRow> */}

                <StyledRow>
                    <input name="bot-field" hidden />
                    <button 
                        className="form__button button button--orange"
                        type="submit"
                        value="Send"
                        disabled={
                            this.state.name &&
                            this.state.email &&
                            this.state.message &&
                            this.state.recaptcha 
                            ? false : true
                        }
                    >
                        <span>Send</span>
                    </button>
                </StyledRow>
            </StyledForm>

        const Sent = <StyledMessage>
            Message sent!
            <a onClick={this.reloadForm}>Send Another?</a>
        </StyledMessage>


        if(this.state.submitted !== true) {
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

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 1.5rem;

    &:focus {
        outline: none;
    }
`

const StyledRow = styled.div`
    min-height: 3em;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: ${padding};

    &:last-child {
        margin-bottom: 0;
    }

    &.tall {
    flex: 1;
    min-height: 20rem;
    max-height: 25rem;
}

    &.recaptcha {
        min-height: 0;
    }
`

const CommonInputStyles = `
    ${fonts.sansSerif()}
    padding: calc(${padding} / 4);
    font-size: 1.5rem;
    border: 2px solid transparent;
    border-radius: 0;
    transition: ${transition};
    flex: 1;
    order: 1;
    -webkit-appearence: none;
    box-shadow: none;

    &:focus {
        outline: none;
        border: 2px solid ${colors.gray};
        margin: 0;

        &::-webkit-input-placeholder {
            transition: ${transition};
            color: transparent;
        }
        &::-moz-placeholder {
            transition: ${transition};
            color: transparent;
        }
        + label {
            max-height: ${padding};
        }
    }
`

const StyledInput = styled.input`
    ${CommonInputStyles}
`

const StyledTextarea = styled.textarea`
    ${CommonInputStyles}
    resize: none;
`

const StyledLabel = styled.label`
    max-height: 0;
    color: ${colors.white};
    font-weight: bold;
    background-color: ${colors.gray};
    overflow: hidden;
    font-size: .6em;
    padding-left: 0.5rem;
    flex: 1;
    order: 2;
    display: flex;
    align-items: center;
    transition: ${transition};
`

const StyledMessage = styled.div`
    margin-top: 25vh;
    color: ${colors.white};
    text-align: center;
    width: 100%;
    font-size: 1.5em;

    a {
        display: block;
        cursor: pointer;
        color: ${colors.Orange};
        margin-top: ${padding};

            &:hover {
                color: ${colors.white};
            }
    }
`