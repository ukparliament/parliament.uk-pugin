// Opens respective dropdown when clicked
(function () {
	var
		dropdown_toggle = document.getElementsByClassName('dropdown__toggle'),
		dropdown_content = document.getElementsByClassName('dropdown__content'),
		dropdown_parent;

	// Hide dropdowns if JS is on
	for (var x = 0; x < dropdown_content.length; x++) {
		dropdown_content[x].classList.add('visually-hidden');
	}

	// Add listener to dropdowns
	for (var y = 0; y < dropdown_toggle.length; y++) {
		dropdown_toggle[y].addEventListener('click', toggleDropdown, false);
	}

	// Add / Remove hidden class
	function toggleDropdown(e){
		e.preventDefault();

		// Get parent of dropdown
		dropdown_parent = this.parentElement;
		dropdown_content = dropdown_parent.querySelector('.dropdown__content');

		// Check dropdown content
		if (dropdown_content.classList.contains('visually-hidden')) {
			this.classList.add('open');
			dropdown_content.classList.remove('visually-hidden');
		} else {
			this.classList.remove('open');
			dropdown_content.classList.add('visually-hidden');
		}
	}

})();
