// const weeks = [
// 	[
// 		{ week: 'week 1' },
// 		[{ startDate: '2022-09-08T07:00Z', endDate: '2022-09-14T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 2' },
// 		[{ startDate: '2022-09-14T07:00Z', endDate: '2022-09-21T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 3' },
// 		[{ startDate: '2022-09-21T07:00Z', endDate: '2022-09-28T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 4' },
// 		[{ startDate: '2022-09-28T07:00Z', endDate: '2022-10-05T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 5' },
// 		[{ startDate: '2022-10-05T07:00Z', endDate: '2022-10-12T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 6' },
// 		[{ startDate: '2022-10-12T07:00Z', endDate: '2022-10-19T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 7' },
// 		[{ startDate: '2022-10-19T07:00Z', endDate: '2022-10-26T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 8' },
// 		[{ startDate: '2022-10-26T07:00Z', endDate: '2022-11-02T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 9' },
// 		[{ startDate: '2022-11-02T07:00Z', endDate: '2022-11-09T06:59Z' }],
// 	],
// 	[
// 		{ week: 'week 10' },
// 		[{ startDate: '2022-11-09T07:00Z', endDate: '2022-11-16T06:59Z' }],
// 	],
// 	// ["week 11", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// 	// ["week 12", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// 	// ["week 13", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// 	// ["week 14", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// 	// ["week 15", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// 	// ["week 16", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// 	// ["week 17", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// 	// ["week 18", [ { 'startDate': '022-09-08T07:00Z' }, { 'endDate': '2022-09-14T06:59Z' } ]],
// ];

function displayWeeks(WeeksURLList) {
	// const hole = document.getElementById('weeks');
	let html = '';
	for (let i = 0; i < WeeksURLList.length; i++) {
		// const weekName = weeks[i][0].week;
		const url = WeeksURLList[i] + 'events';
		console.log('hack it ' + url);
		//sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2022/types/2/weeks/1/events?lang=en%C2%AEion=us
		// console.log(weekName);
		http: var weekStartDate = new Date(weeks[i][1][0].startDate);
		// console.log('Week Start Date = ' + weekStartDate);
		var weekEndDate = new Date(weeks[i][1][0].endDate);
		// console.log('Week End Date = ' + weekEndDate);
		html += "<div class='week-card' id='" + weekName + "'>";
		html += '<h3><b>' + weekName.toUpperCase() + '</b></h3>';
		html +=
			'<p>' +
			weekStartDate.toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			});
		html +=
			' - ' +
			weekEndDate.toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			}) +
			'</p>';
		html += '</div>';
	}
	// html += '</p>';
	// console.log(html);
	document.getElementById('weeks').innerHTML = html;
}
