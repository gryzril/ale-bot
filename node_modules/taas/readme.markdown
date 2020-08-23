# taas [![Build Status](https://travis-ci.org/ganoro/taas.svg)](https://travis-ci.org/ganoro/taas)

Timer as a Service (TaaS) allows you to schedule tasks for a future execution given the destination time and action.

## Install

```shell
$ npm install taas
```

## Example
Schedule a task for the next 5 minutes 

```shell
var taas = require('taas');
taas.schedule(Date.now() + 5 * 1000 * 60, "http://example.com", "get", "a=6&b=7", function(error, response) {
    console.log(response.id);
    taas.cancel(response.id);
});
```

## License

The MIT License (MIT)

Copyright (c) 2015 Roy Ganor
