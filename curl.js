const request = require('request');

const curl = (url) => {
    console.log(request.get(url));
}

module.exports = curl