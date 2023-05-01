async function getSuperBowl() {
	const data = await fetch(
		'https://site.web.api.espn.com/apis/v2/scoreboard/header?sport=football&league=nfl'
	)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data.length);
			const games = data.sports[0].leagues[0].events;
			// console.log(games[0].competitors);
			// console.log(new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" }));
			var html = "<div class='game-cards'>";
			const gameDate = new Date(games[0].date);
			html +=
				'<h2>' +
				gameDate.toLocaleDateString('en-us', {
					weekday: 'long',
					year: 'numeric',
					month: 'short',
					day: 'numeric',
				}) +
				'</h2>';
			for (let i = 0; i < games[0].competitors.length; i++) {
				html += "<div class='game-card'>";
				html +=
					"<h2 style='color: #" +
					games[0].competitors[i].color +
					";'>" +
					games[0].competitors[i].displayName +
					"<input type='checkbox'></h2>";
				html += '</div>';
			}
			html += '</div>';
			document.getElementById('games-container').innerHTML = html;
		});
}
// getSchedule();
