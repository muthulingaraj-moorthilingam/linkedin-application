
fetch("https://testapi.io/api/muthulingaraj/https://testapi.io/api/muthulingaraj/linkedin/user/post")
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

		for(let i=0;i<data.length;i++){
			var userprofile = new userdata(data[i]);
			console.log(userprofile.data);
		}
});