
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
});