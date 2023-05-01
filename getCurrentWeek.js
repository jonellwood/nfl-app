async function getCurrentWeek(weeks) {
	// const date = new Date();
	const date = '2023-09-02T07:00Z';
	// console.log(weeks);
	// console.log(weeks[0][0].week);
	// console.log(weeks[0][1][0].endDate)
	for (let i = 0; i < weeks.length; i++) {
		// console.log(weeks.length);
		// console.log(weeks[i]);
		const weekName = weeks[i][0].week;
		// console.log(weekName);
		const weekStartDate = weeks[i][1][0].startDate;
		// console.log('Week Start Date = ' + weekStartDate);
		const weekEndDate = weeks[i][1][0].endDate;
		// console.log('Week End Date = ' + weekEndDate);
		// console.log('+++++++++++++++++++++++++++++++++++++++++');
		if (date >= weekStartDate && date <= weekEndDate) {
			// console.log('weekname is: ' + weekName);
			var currentWeek = weekName;
			//   console.log('current week is : ' + currentWeek);
			thisWeek.push(currentWeek);
			return true;
		}
	}
	console.log('Date not within season');
	return false;
}
