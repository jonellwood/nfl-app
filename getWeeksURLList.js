WeeksURLList = [];
WeeksDetailsURLList = [];
WeeksEventsList = [];
async function getWeeksURLList() {
	const data = await fetch(
		'http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/weeks?lang=en&region=us'
	)
		.then((response) => response.json())
		.then((data) => {
			// console.log('data dot items from getURLList function');
			// console.log(data.items[0]);
			for (let i = 0; i < data.items.length; i++) {
				// console.log(data.items.length);
				WeeksURLList.push(data.items[i]);
			}
		});
	console.log('+++++ Weeks URLList Array after the push +++++');
	console.log(WeeksURLList);
	for (let j = 0; j < WeeksURLList.length; j++) {
		//console.log(WeeksURLList.length);
		const weeksDetails = await fetch(WeeksURLList[j].$ref)
			.then((response) => response.json())
			.then((data) => {
				WeeksDetailsURLList.push(data);
			});
	}
	console.log('Weeks Details List');
	console.log(WeeksDetailsURLList);

	for (let k = 0; k < WeeksDetailsURLList.length; k++) {
		console.log(WeeksDetailsURLList.length);
		const weeksEventsList = await fetch(WeeksDetailsURLList[k].events.$ref)
			.then((response) => response.json())
			.then((data) => {
				WeeksEventsList.push(data);
			});
	}
	console.log('Weeks Events URL List');
	console.log(WeeksEventsList);
}
