let loginCnt = document.querySelector('#login');
if (loginCnt) {
    let loginBtn = document.querySelector('#login-btn');
    let loginEmail = document.querySelector('#login-email');
    let loginPass = document.querySelector('#login-pass');
    let loginEmailError = document.querySelector('#login-email-error');
    let loginPassError = document.querySelector('#login-pass-error');
    let loginError = document.querySelector('#login-error');

    loginBtn.onclick = (e) => {
        e.preventDefault();
        let hasError = false;

        loginEmailError.style.display = 'none';
        loginPassError.style.display = 'none';
        loginError.style.display = 'none';

        if (!loginEmail.value) {
            loginEmailError.style.display = 'block';
            hasError = true;
        }
        if (!loginPass.value) {
            loginPassError.style.display = 'block';
            hasError = true;
        }
        if (!hasError && (loginEmail.value !== localStorage.email || loginPass.value !== localStorage.pass)) {
            loginError.style.display = 'block';
            hasError = true;
        }

        if (!hasError) {
            loginCnt.innerHTML = '<h2 class="success">Ingresando a locopelis</h2>';
            window.setTimeout(() => window.location = 'index.html', 1000);
        }
    }    
}


let signupCnt = document.querySelector('#signup');
if (signupCnt) {
    let signupBtn = document.querySelector('#signup-btn');
    let signupName = document.querySelector('#signup-name');
    let signupEmail = document.querySelector('#signup-email');
    let signupPass = document.querySelector('#signup-pass');
    let signupNameError = document.querySelector('#signup-name-error');
    let signupEmailError = document.querySelector('#signup-email-error');
    let signupPassError = document.querySelector('#signup-pass-error');

    signupBtn.onclick = (e) => {
        e.preventDefault();
        let hasError = false;

        signupNameError.style.display = 'none';
        signupEmailError.style.display = 'none';
        signupPassError.style.display = 'none';

        if (!signupName.value) {
            signupNameError.style.display = 'block';
            hasError = true;
        }
        if (!signupEmail.value) {
            signupEmailError.style.display = 'block';
            hasError = true;
        }
        if (!signupPass.value) {
            signupPassError.style.display = 'block';
            hasError = true;
        }

        if (!hasError) {
            localStorage.email = signupEmail.value;
            localStorage.pass = signupPass.value;
            signupCnt.innerHTML = '<h2 class="success">Creamos tu usuario de locopelis</h2>';
            window.setTimeout(() => window.location = 'login.html', 1000);
        }
    }    
}
