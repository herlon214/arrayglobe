# ArrayGlobe
![Travis CI](https://travis-ci.org/herlon214/arrayglobe.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/herlon214/arrayglobe/badge.svg?branch=master)](https://coveralls.io/github/herlon214/arrayglobe?branch=master)

![Globe Logo](./globelogo.png)

A simple algorithm walk between the array values each time you call `get()`.

For what this can be useful? For me this is useful to toggle between websockets servers when one is diconnected.

Imagine that you have 3 websockets servers, you're connected to the first server but something crash the server. You need to connect into the second server automatically, so you handle the `disconnect` event to connect into a new websocket server. But what websocket I need to connect now? This is where the ArrayGlobe shine! Once you defined the array of servers you can just call ```get()``` and it will return the next websocket to connect.


### Install

`npm install arrayglobe --save`


### Example
```
const ArrayGlobe = require('arrayglobe')
let myArray = new ArrayGlobe(['first','second','third'])

myArray.get() // will return 'first'
myArray.get() // will return 'second'
myArray.get() // will return 'third'
myArray.get() // will return 'first'

```

### Tests

Run `npm run test`


#### Pull requests are welcome!
