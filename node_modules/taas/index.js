var request = require('request');
var querystring  = require('querystring');

module.exports = {
 
    schedule: function(time, url, method, parameters, callback) {
        var u = 'https://script.google.com/macros/s/AKfycbzFWoMxN5uXz1Qd8WbjKm_PeAX8D1GgOCpmCaw4H_WZYA7rOQGf/exec?';
        u += querystring.stringify ({
            time: time,
            url: url,
            method: method,
            parameters: parameters
        });
        
        request(u, function (error, response, body) {
            var r = {};
            if (!error && response.statusCode == 200) {
                r = JSON.parse(body);
            }
            callback ? callback(error, r) : "";
        })
    },
    
    cancel: function(id) {
    }
}
