
// imoport modules
const axios = require('axios').default;
const yMusic = require('node-youtube-music');

//console.log(axios);
//console.log(yMusic);
const song = yMusic.searchMusics('Sandra'); // its a promise
//promise is a way to retrieve data asynchronously to your application from youtube
song.then(result => {
    console.log('result', result);
}).catch(err => {
    console.log('Error error error ', err);
}).finally(() => {
    console.log('All is done... Enjoy the Musics');
}); // semicolon stops the process, put it at the end of the process

//Axios part
axios.get('https://jsonplaceholder.typicode.com/todos')//retrieve data from an internet address
    .then(res => {
        console.log('from api ', res.data);
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        console.log('Get all todos');
    });