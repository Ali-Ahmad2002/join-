function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

let userlogin = [{
    'username': [],
    'password': []
}];



/**
 * registered the user for an a account
 * 
 */
async function accountregister(event) {
    event.preventDefault();

    //  document.getElementById('loginfailt').classList.add('d-none');

    let user = document.getElementById('availableuser').value;
    let pwd = document.getElementById('availablepwd').value;
    console.log(' user', user)
    console.log('pwd', pwd)

    if (userlogin.find(use => use.username === user)) {
        userexists();
    } else {
        await pushuser(user, pwd);
        console.log('pushUser', pushuser)


        // document.getElementById('registerfailt').classList.remove('d-none');
        // document.getElementById('registerfailt').classList.add('registred');
        // document.getElementById('registerfailt').innerHTML = 'You are now Registered';

        setTimeout(() => {
            registered();
        }, 2000);
    }

    document.getElementById('usersname').value = '';
    document.getElementById('passwordname').value = '';
    showLogin();
}


async function pushuser(user, pwd) {
    userlogin.push({
        'username': user,
        'password': pwd,
    });
    await backend.setItem('userlogin', JSON.stringify(userlogin));

}
console.log('userlogin login', userlogin)

async function login() {
    let loginuser = document.getElementById('usersname').value;
    let loginpwd = document.getElementById('passwordname').value;
    console.log('loginuser', loginuser)
    console.log('loginpwd', loginpwd)

    if (userlogin.find(use => use.username === loginuser) && userlogin.find(pw => pw.password === loginpwd)) {
        includeHTML();
        window.location.href = 'addToTask.html';
    } else {
        console.log('Hallo nich geklappt');
        console.log('userlogin login', userlogin)
        // document.getElementById('loginfailt').classList.remove('d-none');
        // document.getElementById('loginfailt').innerHTML = 'Please enter the right Username or Password<br> or Register please';
        // document.getElementById('availableuser').value = '';
        // document.getElementById('availablepwd').value = '';
    }
}


function registered() {
    console.log('Regeistriert');
}


function userexists() {
    console.log('Usser existiert')
}

function load() {
    document.getElementById('singnin').innerHTML = " ";
    includeHTML();
    window.location.href = 'addToTask.html';

}

function showRegister() {
    document.getElementById('containerLog').classList.add('d-none');
    document.getElementById('containerRegister').classList.remove('d-none');
}

function showLogin() {
    document.getElementById('containerLog').classList.remove('d-none');
    document.getElementById('containerRegister').classList.add('d-none');
}