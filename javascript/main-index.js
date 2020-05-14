var model_data;

var model_post = new UserPostdata(model_data);

const parentElement = document.getElementById("renderPost");

const _view_post = new RenderView(parentElement);

const _controller_post = new ControllerPost(model_post,_view_post);


if(model_post.getData() === undefined){

	fetchUserData("https://testapi.io/api/muthu/https://testapi.io/api/muthu/linkedin/user/post")
	.then(function(data){
		//console.log(data);
		model_post.setData(data);
		fetchData();
	})
	.catch(function(error){
		console.log(error);
	});

}
else{
	_controller_post.renderPost();
}

function fetchData(){
 	//console.log("TEST", model_post.getData());
 	//console.log( model_post);
 	//_controller_post.renderPost();
 	//console.log(model_post.getData());
 	//console.log("muthu");
 	_controller_post.renderPost();
 }

 //_controller_post.renderPost();

 var model_profile = new UserProfileData();

 //console.log(model_profile.getData());

 const parentid = document.getElementById("user-profile-page");

 var view_profile = new UserProfileRenderView(parentid);

 var controller_profile = new UserProfileController(model_profile,view_profile);

 const url = "https://testapi.io/api/muthuvijay/muthu/linkedin/user/profile";


 if(model_profile.getData() === undefined){
 	fetchProfile(url)
 	.then(function(data){
 		model_profile.setData(data);
 	})
 	.catch(function(error){
 		console.log(error);
 	});
 }
