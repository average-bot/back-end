// https://github.com/auth0/jwt-decode/blob/master/README.md test
// const decoder = require('jwt_decode');

// fetch('/api/secure', {
//     method: 'GET',
//     headers: {
//         'auth-token': localStorage.getItem('auth-token')
//     }
// })
// .then(res =>  res.json())
// .then(data => {console.log(data)});
const localToken = window.localStorage.getItem("auth-token");
console.log(localToken);
var base64Url = localToken.split('.')[1];
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}).join(''));

var token = JSON.parse(jsonPayload);
console.log(token);


// Source: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
// first answer
document.querySelector("#owner").innerHTML = "The owner of this page you are looking at is: " + token.owner;
document.querySelector("#nickname").innerHTML = "But she prefers to be called: " + token.nickname;




//api/secure/decode