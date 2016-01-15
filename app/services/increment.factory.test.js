var test = require('tape');


test('math test', function(t) {
	// TODO implement actual test
	t.plan(2);

	var x = 1 + 3;
	t.equal(x, 4);

	x = ++x;
	t.equal(x, 5);

});

test('spelling test', function(t) {
	// TODO implement actual test
	t.plan(1);

	var x = 'hello';
	t.equal(x, 'hello');

});
