// commonjs to use in gatsby-node
function slugify(string) {
    return string.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

function initialFormState(form) {

    let fields = {};

    Object.keys(form).map( (field) => {
        return fields[field] = '';
    })

    return fields;
}

function disableFormButton(fields, state) {

    let disableButton = true;

    Object.keys(fields).map((field) => {
        if (fields[field].required) {
            if (state[field] !== '') {
                disableButton = false;
            } else {
                disableButton = true;
            }
        }
    });

    return disableButton;
}

module.exports = {
    slugify,
    initialFormState,
    disableFormButton
};