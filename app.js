var password = [7,7,8];
var entered = [];

// true if password is correct 
function isCorrect() {
	if (password.length !== entered.length) {
		return false;
	}

	for (var i = 0; i < password.length; i++) {
		if (entered[i] !== password[i]) {
			return false;
		}
	}
	return true;
}

// Event Listener on page load
window.addEventListener('load', function() {
	// Get the button 7 ID and make event listener when clicked
	var button7 = document.getElementById('button-7');
	button7.addEventListener('click', function() {

		var screen = document.getElementById('screen');

		// change the content at the top of the keypad
		screen.textContent += '7';
		entered.push(7);

		// see if it mattches, add the CSS success tag, and change the screen message
		if (isCorrect()) {
			screen.classList.add('success');
			screen.textContent = 'success';
		}
	});

	// Get the button 8 ID and make event listener when clicked
	var button8 = document.getElementById('button-8');
	button8.addEventListener('click', function() {

		var screen = document.getElementById('screen');
		// change the content at the top of the keypad
		screen.textContent += '8';
		entered.push(8);

		if (isCorrect()) {
			screen.classList.add('success');
			screen.textContent = 'success';
		}
	});

});