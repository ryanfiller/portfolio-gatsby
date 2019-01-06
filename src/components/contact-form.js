import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './buttons';

import styled from 'styled-components';
import { colors, fonts, padding, transition } from '../config/styles';

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
}

const Contact = (props) => {

    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        console.log(e.target.value);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
          });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formValues })
        })
        .then(() => setSubmitted(true))
        .catch(error => alert(error))
    }

    const reloadForm = () => {
        setSubmitted(false);
        setFormValues({
            name: '',
            email: '',
            message: ''
        })
    } 

    const Form = <StyledForm
        id="contact-form"
        className="form"
        tabIndex="1"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-recaptcha="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
    >
        <StyledRow>
            <StyledInput 
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={formValues.name}
                onChange={handleChange}
            />
            <StyledLabel htmlFor="name">Name</StyledLabel>
        </StyledRow>

        <StyledRow>
            <StyledInput
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formValues.email}
                onChange={handleChange} 
            />
            <StyledLabel htmlFor="email">Email</StyledLabel>
        </StyledRow>
        
        <StyledRow className="tall">
            <StyledTextarea 
                type="text"
                name="message"
                placeholder="Message..."
                required
                value={formValues.message}
                onChange={handleChange}
            />
            <StyledLabel htmlFor="message">Message</StyledLabel>
        </StyledRow>

        <StyledRow>
            <Button
                text={'Send'}
                disabled={
                    formValues.name &&
                    formValues.email &&
                    formValues.message
                    ? false : true
                }
            />

        </StyledRow>
    </StyledForm>;

    const Sent = <StyledMessage>
        Message sent!
        <Button
            text={'Send Another?'}
            onClick={reloadForm}
        />
    </StyledMessage>;

    return submitted === false ? Form : Sent;
}

export default Contact;

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
    font-size: 1em;
    padding: calc(${padding} / 4);
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
            max-height: calc(1.5 * ${padding});
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