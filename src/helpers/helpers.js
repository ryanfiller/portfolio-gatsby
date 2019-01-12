// commonjs to use in gatsby-node
function slugify(string) {
    return string.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/--+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

function getParent(location) {

    const url = location.match(/\/(.*?)\//)[0];
    const title = url.replace(/\//g, '');

    return {
        url: url,
        title, title
    };
}

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
        if (fields[field].required && state[field] !== '') {
            return disableButton = false;
        } 
        return disableButton = true;
    });

    return disableButton;
}

module.exports = {
    slugify,
    initialFormState,
    disableFormButton,
    getParent
};