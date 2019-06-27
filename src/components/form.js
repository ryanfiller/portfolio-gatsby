import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './buttons';

import styled from 'styled-components';
import { fonts, padding, transition, theme } from '../config/styles';
import { initialFormState, disableFormButton } from '../helpers'

import {setConfig} from 'react-hot-loader';
setConfig({pureSFC: true});

const Form = (props) => {

    const formFields = props.form.fields;
    const formButtons = props.form.buttons;

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
            body: encode({ "form-name": props.form.name, ...formValues })
        })
        .then(() => setSubmitted(true))
        .catch(error => alert(error))
    }

    const reloadForm = () => {
        setSubmitted(false);
        setFormValues(initialFormState(formFields));
    } 

    return (
        <div className={props.className}>
            {submitted === false ?
                <form
                    id={props.form.name}
                    tabIndex="1"
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    {Object.keys(formFields).map( (field, index) => {

                        const Element = formFields[field].element;

                        const placeholderText = formFields[field].placeholder ?
                            formFields[field].placeholder : 
                                formFields[field].required ? 
                                field + ' *': field;

                        return (
                            <div key={index} className={`row ${formFields[field].extraClassName}`}>
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
                            </div>
                        )
                    })}

                    <Button
                        text={formButtons.submit.text}
                        disabled={disableFormButton(formFields, formValues)}
                    />
                </form>
            :
                <div className="sent">
                    <header>
                        Message sent!
                    </header>
                    <Button
                        text={formButtons.reload.text}
                        onClick={reloadForm}
                    />
                </div>
            }
        </div>
    )
}

const StyledForm = styled(Form)`
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0;
        font-size: 1.5rem;

        &:focus {
            outline: none;
        }

        & > * {
            margin-bottom: ${padding};

            &:last-child {
                margin-bottom: 0;
            }
        } 

        .row {
            min-height: 3em;
            width: 100%;
            display: flex;
            flex-direction: column;

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
        }
    }

    .sent {
        width: 100%;
        font-size: 1.5rem;

        header {
            font-size: 1.5em;
            text-align: center;
            color: ${props => props.color};
            margin-bottom: 1em;
        }

        button {
            margin: 0 auto;
        }
    }
`

Form.propTypes = {
    form: PropTypes.object.isRequired,
	color: PropTypes.string,
	active: PropTypes.string,
	background: PropTypes.string,
};

export default StyledForm;