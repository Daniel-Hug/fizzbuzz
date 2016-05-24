function createLogger() {
	var ul = document.createElement('ul');
	document.body.appendChild(ul);

	return function log(msg) {
		var li = document.createElement('li');
		li.textContent = msg;
		ul.appendChild(li);
	};
}


//      i5  !i5
//  i3  fb  f
// !i3  b   i

var funs = [
	function(i) {
		return i % 3 == 0 ?
		(i % 5 == 0 ?
			'FizzBuzz' :
			'Fizz') :
		(i % 5 == 0 ?
			'Buzz' :
			i);
	},

	function(i) {
		return {
			tt: 'FizzBuzz',
			tf: 'Fizz',
			ft: 'Buzz',
			ff: i
		}[(i % 3 ? 'f' : 't') + (i % 5 ? 'f' : 't')];
	},

	function(i) {
		var msg = i%3 ? '' : 'Fizz';
		if (i%5 === 0) msg += 'Buzz';
		else if (i%3) msg = i;
		return msg;
	}
];


funs.forEach(function(fun) {
	var log = createLogger();
	for (var i = 1; i <= 100; i++) {
		log(fun(i));
	}
});