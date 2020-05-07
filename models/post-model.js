
function UserPostdata(model_data){
	this.data=model_data;
}

UserPostdata.prototype.getData = async function(){
	if(this.data === undefined){
		//apiCall();
		try{
			let response = await fetch(`https://testapi.io/api/muthulingaraj/https://testapi.io/api/muthulingaraj/linkedin/user/post`);
    		let data = await response.json();
    		 model_post.setData(data);
    		return data;
		}   
		catch(err){
			console.log(err)
			return err;
		}
		//return this.data;
	}
	else{
		return this.data;
	}
};

UserPostdata.prototype.setData = function(value){
	this.data=value;
};
/*
async function apiCall(){
	try{
		let response = await fetch(`https://testapi.io/api/muthulingaraj/https://testapi.io/api/muthulingaraj/linkedin/user/post`);
    	let data = await response.json();
    	model_post.setData(data);
	}   
	catch(err){
		console.log(err)
	}
	//return data;
}
/*
function apiCall(url){
	return new Promise(function(resolve,reject){
		/*var httpRequest = new XMLHttpRequest();
		httpRequest.open("GET",url);
		httpRequest.send();
		httpRequest.onload=function(){
			if(httpRequest.status === 200){
				resolve(httpRequest.response)
			}
			else{
				reject(Error(httpRequest.statusText));
			}
		}
		fetch(url)
		.then(res => {
			//return res.json();
			resolve(res.json())
		})
		//.then(data => {
		//	resolve(data);
		//})
	});
}
*/






































/*
fetch("https://testapi.io/api/muthulingaraj/https://testapi.io/api/muthulingaraj/linkedin/user/post")
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		api_data=data;
	})
*/

/*function UserPost(_post_data){
	
	this.user_Id 	=_post_data.userId;
	this.user_name 	=_post_data.username;
	this.user_designation=_post_data.designation;
	this.user_post_type=_post_data.typeofpost;
	this.user_image =_post_data.userprofile;
	this.user_details=_post_data.details;
	this.user_time=_post_data.time;
	this.user_content=_post_data.content;
	this.user_post_image =_post_data.image;
}

UserPost.prototype.getUserId = function(){
	return this.user_Id;
};

UserPost.prototype.getUserPostImage = function(){
	return this.user_post_image;
};

UserPost.prototype.getUserContent = function(){
	return this.user_content;
};
*/