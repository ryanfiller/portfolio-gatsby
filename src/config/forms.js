export const ContactForm = {
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