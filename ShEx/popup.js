$(function(){
	$("#auth").on("click",function(){	
		chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
			console.log(token)
			if (token == undefined) {
				return;
			}else{
				gapi.auth.setToken({'access_token':token});
				gapi.client.load('sheets','v4').then(callback);
			}
		});
	})
})
function callback(){
	gapi.client.sheets.spreadsheets.values.get({
		spreadsheetId: '1S8wsGsv4-NGP-bchTsBHArucZfsNiyvInr_VjjwpItA',
		range:'SH!A1',
	}).then(function(response){
		console.log(response.result.values)
	})

	gapi.client.sheets.spreadsheets.values.update({
		spreadsheetId: '1S8wsGsv4-NGP-bchTsBHArucZfsNiyvInr_VjjwpItA',
		range:'SH!A1',
		valueInputOption:'USER_ENTERED',
		values:[["111"]]
	}).then(function(response){
		console.log(response)
	})
	gapi.client.sheets.spreadsheets.values.append({
		spreadsheetId: '1S8wsGsv4-NGP-bchTsBHArucZfsNiyvInr_VjjwpItA',
		range:'SH!A1',
		valueInputOption:'USER_ENTERED',
		values:[["111","A1","BBJ"]]
	}).then(function(response){
		console.log(response)
	})
	
/*
	gapi.client.sheets.spreadsheets.values.get({
		spreadsheetId: '1S8wsGsv4-NGP-bchTsBHArucZfsNiyvInr_VjjwpItA',
		range:'SH!A:C',
	}).then(function(response){
		console.log(response.result.values)
	})
*/
}