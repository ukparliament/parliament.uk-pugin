// Adds 'loading icon' to button[type="submit"] when clicked

(function () {

	// Select <form> elements
	var forms = document.querySelectorAll('form');

	// Event listener for form submit
	for (var f = 0; f < forms.length; f++) {
		forms[f].addEventListener('submit', formSubmit, false);
	}

	function formSubmit() {

		// If form submission contains valid data
		if ( this.checkValidity() ) {

			// Select <button> elements
			var buttons = this.querySelectorAll('button');
			for (var i = 0; i < buttons.length; i++) {
				// if button type=submit
				if (buttons[i].type.toLowerCase() === 'submit') {
					this.classList.add('btn--loading');
				}
			}
		}
	}

})();
