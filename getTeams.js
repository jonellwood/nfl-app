async function getTeams() {
	const data = await fetch(
		'http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams'
	)
		.then((response) => response.json())
		.then((data) => {
			// console.log(teams);
			const teams = data.sports[0].leagues[0].teams;

			var html = "<div class='team-cards'>";
			for (let i = 0; i < teams.length; i++) {
				html +=
					"<div class='card' style='background-color: #" +
					teams[i].team.color +
					";'>";
				html += '<h2>' + teams[i].team.displayName + '</h2>';
				html +=
					"<img class='logo-img' src='" +
					teams[i].team.logos[0].href +
					"' alt='logo' width='25px'>";
				html += '</div>';
			}

			html += '</div>';
			document.getElementById('container').innerHTML = html;
		});
}
getTeams();
