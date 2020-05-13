
class UserProfileData{
	constructor(){
		this.data;
	}

	getData(){
		return this.data;
	}

	setData(value){
		this.data=value;
	}
}

async function fetchProfile(url){
	try{
		var response = await fetch(url);
		var data = await response.json();
		//console.log(data)
		return data;
	}
	catch(error){
		return(new Error(error));
	}
}












/*fetch("https://testapi.io/api/muthulingaraj/https://testapi.io/api/muthulingaraj/linkedin/user/post")
		.then(function (response){
		console.log(response);
		return response.json();
		})
		.then(function (data){
		console.log(data);

		class userdata{
			constructor(data){
				this.data=data;
			}
		}
});
*/