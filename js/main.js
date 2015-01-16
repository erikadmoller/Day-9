//Question #1:

var random = function(placeholder) {
	var computerChoice = Math.floor(Math.random() * placeholder.length);
	return placeholder[computerChoice];
}