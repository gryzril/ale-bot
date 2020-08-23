var taas = require('./')

taas.schedule(Date.now() + 5 * 1000 * 60, "http://example.com", "get", "a=6&b=7", function(error, response) {
    console.log(response.id);
    taas.cancel(response.id);
});
