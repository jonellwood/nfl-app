function highlightThisWeek(thisWeek) {
	var weekHolder = document.getElementById('weeks');
	var thisWeek = thisWeek[0];
	var childElements = weekHolder.children;
	for (var i = 0; i < childElements.length; i++) {
		var childElement = childElements[i];
		// console.log(childElements[i]);
		if (childElement.id === thisWeek) {
			childElement.classList.add('active-week');
			// childElement.classList.remove('hidden');
		}
	}
}
