
function UserPostdata(model_data){
	this.data=model_data;
}

UserPostdata.prototype.getData = function(){
	return this.data;
}

UserPostdata.prototype.setData = function(value){
	this.data=value;
};


function fetchUserData(url){

	return new Promise(function(resolve,reject){
		var httpRequest = new XMLHttpRequest();
		httpRequest.open("GET",url);
		httpRequest.send();
		httpRequest.onload=function(){
			if(httpRequest.status === 200){
				var data = JSON.parse(httpRequest.response);
				resolve(data);
			}
			else{
				reject(httpRequest.statusText);
			}
		}
	});
}



/*async function fetchUserData(url){
	try{
		var response = await fetch(url);
		var data = await response.json();
		return data;
	}
	catch(err){
		return err;
	}
}





/*
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
