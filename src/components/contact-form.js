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

const ContactForm = {
    name: 'contact-form',
    fields: {
        name : {
            type: 'text',
            element: 'input',
            required: true,
        },
        email: {
            type: 'email',
            element: 'input',
            required: true,
        },
        message: {
            type: 'text',
            element: 'textarea',
            required: true,
            placeholder: 'Message...',
            extraClassName: 'tall'
        }
    },
    buttons: {
        submit: {
            text: 'Send',
        },
        reload: {
            text: 'Send Another?',
        }
    }
}

const initialFormState = (form) => {

    let fields = {};

    Object.keys(form).map( (field) => {
        return fields[field] = '';
    })

    return fields;
}

const Contact = (props) => {

    const formFields = ContactForm.fields;
    const formButtons = ContactForm.buttons;

    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues ] = useState(initialFormState(formFields));

    const handleChange = (e) => {
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
        setFormValues(initialFormState(formFields));
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
        {Object.keys(formFields).map( (field, key) => {

            const Element = formFields[field].element;

            const placeholderText = formFields[field].placeholder ?
                formFields[field].placeholder : 
                    formFields[field].required ? 
                    field + ' *': field;

            return (
                <StyledRow key={key} className={formFields[field].extraClassName}>
                    <Element 
                        type={formFields[field].type}
                        name={field}
                        placeholder={placeholderText}
                        required={formFields[field].required ? true : false}
                        value={formValues.field}
                        onChange={handleChange}
                    />
                    <label htmlFor={field}>
                        {field}
                    </label>
                </StyledRow>
            )
        })}

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

    const Sent = <StyledSent>
        Message sent!
        <Button
            text={'Send Another?'}
            onClick={reloadForm}
        />
    </StyledSent>;

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

    label {
        max-height: 0;
        color: ${colors.white};
        font-weight: bold;
        background-color: ${colors.gray};
        overflow: hidden;
        font-size: .6em;
        text-transform: capitalize;
        padding-left: 0.5rem;
        flex: 1;
        order: 2;
        display: flex;
        align-items: center;
        transition: ${transition};
    }

    input, textarea {
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
        resize: none;

        &::placeholder {
            text-transform: capitalize;
        }

        &:focus {
            outline: none;
            border: 2px solid ${colors.gray};
            margin: 0;

            &::-webkit-input-placeholder,
            &::-moz-placeholder {
                transition: ${transition};
                color: transparent;
            }
            + label {
                max-height: calc(1.5 * ${padding});
            }
        }
    }
`

const StyledSent = styled.div`
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