var documentBody = document.body.id;


	var model_data;

	var model_post = new UserPostdata(model_data);

	const parentElement = document.getElementById("renderPost");

	const _view_post = new RenderView(parentElement);

	const _controller_post = new ControllerPost(model_post,_view_post);


	var model_profile = new UserProfileData();

 	const parentid = document.getElementById("user-profile-page");

 	var view_profile = new UserProfileRenderView(parentid);

 	var controller_profile = new UserProfileController(model_profile,view_profile);




switch(documentBody){
	case 'body':
		postDataApiCall();
		break;
	case 'profile':
		profileDataApiCall();
		break;
	default:
		console.log("Not Found");
}


function postDataApiCall(){

	if(model_post.getData() === undefined){

		fetchUserData("https://testapi.io/api/muthu/https://testapi.io/api/muthu/linkedin/user/post")
		.then(function(data){
			//console.log(data);
			model_post.setData(data);
			fetchData(_controller_post);
		})
		.catch(function(error){
			console.log(error);
		});

	}
	else{

		_controller_post.renderPost();
	}
}
function fetchData(){

 	_controller_post.renderPost();
 }

 	
function profileDataApiCall(){

	const url = "https://testapi.io/api/muthuvijay/muthu/linkedin/user/profile";
	
 if(model_profile.getData() === undefined){
 	fetchProfile(url)
 	.then(function(data){
 		model_profile.setData(data);

 		sentData();
 	})
 	.catch(function(error){
 		console.log(error);
 	});
 }

}

 
