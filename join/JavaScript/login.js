setURL('http://gruppe-145.developerakademie.net/smallest_backend_ever');


let userlogin = [];

async function initi() {
    await downloadFromServer();
    userlogin = JSON.parse(backend.getItem('userlogin')) || [];

    console.log('userloginJajaj', userlogin)

}

/**
 * registered the user for an a account
 * 
 */
async function accountregister(event) {
    event.preventDefault();


    let user = document.getElementById('availableuser').value;
    let pwd = document.getElementById('availablepwd').value;
    let pwd2 = document.getElementById('availablepwd1').value;
    console.log(' user', user)
    console.log('pwd', pwd)

    if (userlogin.find(use => use.username === user)) {
        userexists();

    } else {
        if (pwd == pwd2 && pwd.length >= 7 && pwd2.length >= 7) {
            alert('You are now Registered');


        } else {
            alert('passwords do not match or password not equal or too small at least 7 characters')
            return false;
            pwd = "";
            pwd2 = "";
        }
        await pushuser(user, pwd);

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
    console.log('userlogin', userlogin)
    console.log('userlogin', user)
    console.log('userlogin', pwd)

}



async function login() {
    let loginuser = document.getElementById('usersname').value;
    let loginpwd = document.getElementById('passwordname').value;
    console.log('loginuser', loginuser)
    console.log('loginpwd', loginpwd)

    if (userlogin.find(use => use.username === loginuser) && userlogin.find(pw => pw.password === loginpwd)) {
        // includeHTML();
        console.log(userlogin)
        load();

    } else {
        alert('You are not Registered')

    }
}


function registered() {
    console.log('Usser existiert schon');

}


function userexists() {
    alert('Usser existiert')
}

function load() {
    document.getElementById('singnin').innerHTML = "";
    //includeHTML();
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

function myFunction() {
    var x = document.getElementById("passwordname");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFunction1() {
    var x = document.getElementById("availablepwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFunction2() {
    var x = document.getElementById("availablepwd1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}