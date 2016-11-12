$(function(){
	$("#auth").on("click",function(){	
		chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
			if (token == null) {
				return;
			}
			gapi.auth.setToken({ 'access_token':token });
			gapi.client.load('sheets','v4').then(callback);
		});
	})
})
function callback(){
	gapi.client.sheets.spreadsheets.values.get({
		spreadsheetId: '1S8wsGsv4-NGP-bchTsBHArucZfsNiyvInr_VjjwpItA',
		range:'SH!A:C',
	}).then(function(response){
		console.log(response.result.values)
	})
}