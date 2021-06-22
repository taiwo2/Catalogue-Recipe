var instanceOf = require('../index');
var test       = require('tape');

test('type checking', function (t) {

  t.plan(19);

  t.ok(instanceOf(true, 'boolean'), 'true is a boolean');
  t.notOk(instanceOf(true, 'string'), 'true is not a string');
  t.ok(instanceOf(false, 'boolean'), 'false is a boolean');
  t.notOk(instanceOf(false, 'number'), 'false is not a number');

  t.ok(instanceOf([], 'array'), '[] is an array');
  t.ok(instanceOf([], 'Array'), '[] is an Array');
  t.ok(instanceOf([], 'object'), '[] is an object ');
  t.notOk(instanceOf([], 'boolean'), '[] is not a boolean');

  t.ok(instanceOf('a string', 'string'), 'String is a string');
  t.notOk(instanceOf('a string', 'number'), 'String is not a number');

  t.ok(instanceOf(99, 'number'), 'Number is a number');
  t.notOk(instanceOf(99, 'string'), 'Number is not a string');

  t.ok(instanceOf({}, 'object'), 'Object is an object');
  t.ok(instanceOf({}, 'Object'), 'Object is an Object');

  t.ok(instanceOf(instanceOf, 'function'), 'instanceOf is a function');

  t.ok(instanceOf(new test.Test(), 'Test'), 'Test is a Test');
  t.ok(instanceOf(new test.Test(), 'EventEmitter'), 'Test is an EventEmitter');
  t.ok(instanceOf(new test.Test(), 'Object'), 'Test is an Object');

  t.ok(instanceOf(null, 'null'), 'null is null');

});
