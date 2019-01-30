// commonjs to use in gatsby-node
function slugify(string) {
    return string.toString().toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w-]+/g, '')    // Remove all non-word chars
    .replace(/--+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '');        // Trim - from end of text
};

function arrayZip(array1, array2, size1 = 1, size2 = 1 ) {

    let finalLength;
    const loopCount1 = Math.floor(array1.length / size1);
    const loopCount2 = Math.floor(array2.length / size2);

    if (loopCount1 >= loopCount2) {
        finalLength = loopCount2;
    } else {
        finalLength = loopCount1;
    }

    const chunkArray = (array, size) => {
        let chunk = [];
        for (let i=0; i < array.length; i += size) {
            chunk.push(array.slice(i, i+size));
        }
        return chunk;
    };

    const chunks1 = chunkArray(array1, size1);
    const chunks2 = chunkArray(array2, size2);

    let result = [];

    for (let i=0; i < finalLength; i++) {
       result.push(
        chunks1[i],
        chunks2[i]
       )
    }

    return result;
}

function getParent(location) {

    const url = location.match(/\/(.*?)\//)[0];
    const title = url.replace(/\//g, '');

    return {
        url: url,
        title: title
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

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const polished = require('polished')

function colorizeBlocks(min, max, startColor, array, lookback = 4) {
    let randomColors = [];

    function modifyColor(modifier) {
        if (modifier <= 0) {
            return polished.darken(modifier * -1, startColor);
        } else  {
            return polished.lighten(modifier, startColor);
        }
    }

    function setNewColor(i) {
        let newColor = modifyColor(randomNumber(min, max) / 20);

        if (i < lookback) {
            if (randomColors.includes(newColor)) {
                setNewColor(i);
            } else {
                randomColors.push(newColor);
                return;
            }
        } else {
            if (randomColors.slice(i - lookback, i).includes(newColor)) {
                setNewColor(i);
            } else {
                randomColors.push(newColor);
                return;
            }
        }
    }

    for (let i = 0; randomColors.length <= array.length; i++) {
        setNewColor(i);
    }

    return randomColors;
}

module.exports = {
    slugify,
    initialFormState,
    disableFormButton,
    getParent,
    arrayZip,
    randomNumber,
    colorizeBlocks
};