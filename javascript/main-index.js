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




/*switch(documentBody){
	case 'body':
		postDataApiCall();
		break;
	case 'profile':
		profileDataApiCall();
		break;
	default:
		console.log("Not Found");
}
*/


	if(model_post.getData() === undefined){

		fetchUserData("https://testapi.io/api/muthu/https://testapi.io/api/muthu/linkedin/user/post")
		.then(function(data){
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


function fetchData(){

 	_controller_post.renderPost();
 }

 	
function aPiCall(userId){

const url = "https://testapi.io/api/muthuvijay/muthu/linkedin/user/profile";
	
 if(model_profile.getData() === undefined){
 	fetchProfile(url)
 	.then(function(data){
 		model_profile.setData(data);
 		sentData(userId);
 	})
 	.catch(function(error){
 		console.log(error);
 	});
 }
 else{
 	sentData(userId);
 }
}

function sentData(userId){
 	
 	controller_profile.profile_data();
 	profileRendering(userId);
 }

function show_and_hide(type){

	if(type === "profile"){
		show_and_hide_Profile();
	}
	else if(type === "home"){
		show_and_hide_HomePost();
	}
}

function show_and_hide_Profile(){

	var post_Section = document.getElementById("post-section");

	if(post_Section.classList.contains('show-post')){
		post_Section.classList.remove('show-post');
		post_Section.classList.add('hide-post');
		if(view_profile.getId().classList.contains('hide-profile')){
			view_profile.getId().classList.remove('hide-profile');
			view_profile.getId().classList.add('show-profile')
		}
	}
}

function show_and_hide_HomePost(){

	var profile_Section = document.getElementById("user-profile-page");

	var post_Section = document.getElementById("post-section");

	if(view_profile.getId().classList.contains('show-profile')){
		view_profile.getId().classList.remove('show-profile');
		view_profile.getId().classList.add('hide-profile');

		if(post_Section.classList.contains('hide-post')){
			post_Section.classList.remove('hide-post');
			post_Section.classList.add('show-post');
		}
	}
}