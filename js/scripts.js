//js to ensure light/dark mode rule is followed according to user preference.
function toggleDarkMode() {
	if (document.documentElement.classList.contains('dark')) {
		document.documentElement.classList.remove('dark');
		document.documentElement.classList.add('light');
	} else if (document.documentElement.classList.contains('light')) {
		document.documentElement.classList.remove('light');
		document.documentElement.classList.add('dark');
	} else {
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: light)').matches
		) {
			document.documentElement.classList.add('light');
		} else {
			document.documentElement.classList.add('dark');
		}
	}
}
