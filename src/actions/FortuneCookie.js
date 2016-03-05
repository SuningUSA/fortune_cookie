var request = require('superagent');
var url = "http://fortunecookieapi.com/v1/fortunes?limit=100&skip=0";
module.exports= {
	getFortunes: function(){
		return new Promise(function(resolve, reject){
			request.get(url)
			.set('Accept', 'application/json')
			.end(function(err, response){
				if(err) return console.error(err);
				else resolve(JSON.parse(response.text));
			});
		});
	}
};