[![browser support](https://ci.testling.com/rhalff/instance-of.png)](https://ci.testling.com/rhalff/instance-of)

## Instance Of
===================================

Usage:

```javascript
var InstanceOf = require('instance-of');

// example objects.
var Stream = require('stream'),
  Util = require('util'),
  Actor = require('chix-flow').Actor,
  stream = new Stream();

function report(obj, type) {
  if(InstanceOf(obj, type)) {
    console.log('YES! is a', type);
  } else {
    console.log('Nope! not a', type);
  }
}

report(stream, 'Stream');
report(Util, 'Object');
report(Util, 'object');
report(true, 'boolean');
report(false, 'boolean');
report(100, 'number');
report("string", 'number');
report(new Array(), 'array');
report(new Array(), 'Array');
report("string", 'string');
report(new Actor(), 'Actor');
report(new Actor(), 'Handler');

YES! is a Stream
YES! is a Object
YES! is a object
YES! is a boolean
YES! is a boolean
YES! is a number
Nope! not a number
YES! is a array
YES! is a Array
YES! is a string
YES! is a Actor
YES! is a Handler

```
