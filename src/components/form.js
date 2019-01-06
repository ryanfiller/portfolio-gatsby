import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './buttons';

import styled from 'styled-components';
import { fonts, padding, transition, theme } from '../config/styles';
import { initialFormState, disableFormButton } from '../helpers/helpers'

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

const Contact = (props) => {

    const {
        form,
        color,
        active,
        background
    } = props;

    const formFields = form.fields;
    const formButtons = form.buttons;

    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues ] = useState(initialFormState(formFields));

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": form.name, ...formValues })
        })
        .then(() => setSubmitted(true))
        .catch(error => alert(error))
    }

    const reloadForm = () => {
        setSubmitted(false);
        setFormValues(initialFormState(formFields));
    } 

    const Form = <StyledForm
        id={form.name}
        className="form"
        tabIndex="1"
        name="contact"
        method="post"
        data-netlify="true"
        // data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
    >
        {Object.keys(formFields).map( (field, index) => {

            const Element = formFields[field].element;

            const placeholderText = formFields[field].placeholder ?
                formFields[field].placeholder : 
                    formFields[field].required ? 
                    field + ' *': field;

            return (
                <StyledRow key={index} className={formFields[field].extraClassName}>
                    <Element 
                        key={field}
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
                text={formButtons.submit.text}
                disabled={disableFormButton(formFields, formValues)}
            />

        </StyledRow>
    </StyledForm>;

    const Sent = <StyledSent>
        Message sent!
        <Button
            text={formButtons.reload.text}
            onClick={reloadForm}
        />
    </StyledSent>;

    return submitted === false ? Form : Sent;
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

        label {
            max-height: 0;
            color: ${props => props.color || theme.light};
            background-color: ${props => props.active || theme.highlight};
            overflow: hidden;
            font-size: .6em;
            font-weight: bold;
            text-transform: capitalize;
            padding-left: 0.5rem;
            flex: 1;
            order: 2;
            display: flex;
            align-items: center;
            transition: ${transition};
        }

        input, textarea {
            color: ${props => props.background || theme.dark };
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
                color: ${theme.disabled}
            }

            &:focus {
                outline: none;
                border: 2px solid ${props => props.active || theme.highlight};
                margin: 0;

                &::-webkit-input-placeholder,
                &::-moz-placeholder {
                    transition: ${transition};
                    color: transparent;
                }
                + label {
                    max-height: ${padding};
                }
            }
        }
    `

    const StyledSent = styled.div`
        margin-top: 25vh;
        color: ${props => props.color};
        text-align: center;
        width: 100%;
        font-size: 1em;
    `

Contact.propTypes = {
    form: PropTypes.object.isRequired,
	color: PropTypes.string,
	active: PropTypes.string,
	background: PropTypes.string,
};

export default Contact;