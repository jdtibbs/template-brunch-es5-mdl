var test = require('tape');
var incrementFactory = require('./increment.factory');

var increment = incrementFactory.create();

test('increment.factory test increment', function(t) {
	t.plan(3);

	t.equal(increment.increment(), 1);
	t.equal(increment.increment(), 2);
	t.equal(increment.increment(), 3);
});

test('increment.factory test decrement', function(t) {
	t.plan(4);

	t.equal(increment.decrement(), 2);
	t.equal(increment.decrement(), 1);
	t.equal(increment.decrement(), 0);
	t.equal(increment.decrement(), -1);
});

test('increment.factory test reset', function(t) {
	t.plan(1);

	t.equal(increment.reset(), 999);
});
