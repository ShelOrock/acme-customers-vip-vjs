const form = document.querySelector('form');
const error = document.querySelector('.errorField');
const nameContainer = document.querySelector('.name-container');
const checkVip = document.querySelectorAll('input')[2];

const formData = {};
const submittedNames = [];

const computeData = ev => {
    const {target: {name, value}} = ev

    if([name]) {
        formData[name] = value;
    }

}

const validate = () => {
    const missingFields = Object
        .entries(formData)
        .reduce((missing, [key, value]) => {
            if(!value) {
                return missing.concat(key);
            }
            return missing;
        }, []);

    if(missingFields.length) {
        const errorMessage = missingFields.map(missing => {
            return `${missing} required<br>`
        }).join('');
        error.innerHTML = errorMessage;
    } else {
        error.innerHTML = '';
    }
}

const onKeyUp = ev => {
    computeData(ev);
    validate();
}

const render = (submittedNames, nameContainer) => {
    const html = submittedNames.map(name => {
        return `<div class='name${name.isVip ? ' is-vip' : ' '}'>${name.name} (${name.email})<button class='destroy-btn'>Destroy</button></div>`
    }).join('');
    nameContainer.innerHTML = html;
}

checkVip.addEventListener('change', ev => {
    formData.isVip = ev.target.checked;
})

form.addEventListener('keyup', onKeyUp)

form.addEventListener('submit', ev => {
    submittedNames.push(formData)
    ev.preventDefault();
    render(submittedNames, nameContainer)
    resetForm();
})