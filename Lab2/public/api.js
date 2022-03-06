// catches the generated password from a json file
//https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
function generate() {
    fetch('http://localhost:1337/api/generate')
        .then(response => response.json())
        .then(data => {
            let passwords = data;
            document.getElementById('password').innerHTML = `${passwords.pw}`;
            document.getElementById('tries').innerHTML = `${passwords.tries}`;
        });
}
//generates a new password and tries when loaded.
generate();
