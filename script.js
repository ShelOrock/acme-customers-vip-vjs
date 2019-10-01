const formInput = document.querySelector('form');
const nameInput = document.querySelector('input[name=name]');
const emailInput = document.querySelector('input[name=email]');
const vipInput = document.querySelector('input[type=checkbox]');
const errorMessage = document.querySelectorAll('.error');
const button = document.querySelector('.btn')

formInput.addEventListener('keyup', ev => {
    console.log(errorMessage);

    let newCustomer = {
        name: nameInput.value,
        email: emailInput.value,
        isVip: vipInput.checked
    };

    if(!ev.target.value) {
        errorMessage[0].innerHTML = 'name required'
        errorMessage[1].innerHTML = 'email required'
    } else {
        errorMessage[0].innerHTML = ''
        errorMessage[1].innerHTML = ''
    }
    ev.preventDefault();
})

button.addEventListener('submit', ev => {
    render(nameList);

    ev.preventDefault();
})

const render = (container) => {
    const html = `<div class='item'><p>${newCustomer.name} ${newCustomer.email}</p></div>`
    container.innerHTML = html;
}




// button.addEventListener('submit', ev =>{
//     ev.preventDefault();
    

//     vipArray.push()
    

//     console.log(newCustomer);
// } )