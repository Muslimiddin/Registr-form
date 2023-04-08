const face = document.querySelector('.face');
const tongue = document.querySelector('.tongue');
const hands = document.querySelectorAll('.hand');

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const passBtn = document.querySelector('.password-button');

// Username
 
username.addEventListener('input', () => {
    nameLength = username.value.length;
    if(nameLength < 40) {
        face.style.transform = `rotate(${20 - nameLength}deg)`
    }
} );
username.addEventListener('focus', () => {
    nameLength = username.value.length;
    if(nameLength < 40) {
        face.style.transform = `rotate(${20 - nameLength}deg)`
    }
})
username.addEventListener('blur', () => {
    nameLength = username.value.length;
    if(nameLength < 40) {
        face.style.transform = `rotate(${0}deg)`
    }
});
// Password
passBtn.addEventListener('click', () => {
    if (password.type == "password"){
        tongue.classList.add('breath');
        password.type = 'text';
        passBtn.innerHTML = 'Hide';
        hands.forEach((hand) => {
            hand.classList.add('peek');
            hand.classList.remove('hide');
        })
    } else {
        tongue.classList.remove('breath');
        password.type = 'password';
        passBtn.innerHTML = 'Show';
        hands.forEach((hand) => {
            hand.classList.add('hide');
            hand.classList.remove('peek');
        });
    }
});
passBtn.addEventListener('input', () => {
    if (password.type == "password"){
        tongue.classList.add('breath');
        password.type = 'text';
        passBtn.innerHTML = 'Hide';
        hands.forEach((hand) => {
            hand.classList.add('peek');
            hand.classList.remove('hide');
        })
    } else {
        tongue.classList.remove('breath');
        password.type = 'password';
        passBtn.innerHTML = 'Show';
        hands.forEach((hand) => {
            hand.classList.add('hide');
            hand.classList.remove('peek');
        });
    }
});
// Password Focus
password.addEventListener('focus', () => {
    tongue.classList.remove('breath');
    if (password.type == 'password'){
        hands.forEach((hand) => {
            hand.classList.add('hide');
            hand.classList.remove('peek');
        });
    } else {
        hands.forEach((hand) => {
            hand.classList.add('peek');
            hand.classList.remove('hide');
        });
    }
});
password.addEventListener('blur', () => {
    tongue.classList.add('breath');
    // password.type = 'text';
    hands.forEach((hand) => {
        hand.classList.remove('hide');
        hand.classList.remove('peek');
    });
});
