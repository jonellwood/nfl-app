async function getScheduleData() {
	const data = await fetch(
		'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022'
	)
		.then((response) => response.json())
		.then((data) => {
			// console.log('*************** Get Schedule Data ************');
			// console.log(data);
			// const entries = data.sections
			// console.log(data.types.items);
			var sdate = new Date(data.startDate);
			var edate = new Date(data.endDate);
			var items = data.types.items;
			// console.log(items);
			var html = "<div class='dates'>";
			// html += "<h3>" + data.displayName + " Regular Season</h3>";
			// html += "<p>" + sdate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) + " to " + edate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) + "</p>";

			for (let i = 0; i < items.length; i++) {
				var startd = new Date(items[i].startDate);
				var endd = new Date(items[i].endDate);
				html += "<div class='section'>";
				html += '<h3>' + items[i].name + '</h3>';
				html +=
					'<p><em>' +
					startd.toLocaleDateString('en-us', {
						weekday: 'long',
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					}) +
					' to ' +
					edate.toLocaleDateString('en-us', {
						weekday: 'long',
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					}) +
					'</em></p>';
				// html += "<p>" + endd.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) + " to " + edate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }) + "</p>"
				// html += "</div>";
				// getWeeks(i+1);
				html += "<p id='week-holder" + i + "'></p>";
			}
			html += '</div>';
			document.getElementById('dates-container').innerHTML = html;
		});
}

// getScheduleData();
