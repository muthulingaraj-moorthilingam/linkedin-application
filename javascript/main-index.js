var model_data;

var model_post = new UserPostdata(model_data);

//console.log("TEST", model_post.getData());
/*if(model_post){
	fetchData();

}
else{
	console.error("Object not created")
}
*/

const parentElement = document.getElementById("renderPost");

const _view_post = new RenderView(parentElement);

const _controller_post = new ControllerPost(model_post,_view_post);


if(model_post.getData() === undefined){

	fetchUserData("https://testapi.io/api/muthulingaraj/https://testapi.io/api/muthulingaraj/linkedin/user/post")
	.then(function(data){
		//console.log(data);
		model_post.setData(data);
		fetchData();
	})
	.catch(function(error){
		console.log(error);
	});

}

function fetchData(){
 	//console.log("TEST", model_post.getData());
 	//console.log( model_post);
 	//_controller_post.renderPost();
 	/*model_post.getData()
 	.then(function(data){
 		console.log('Fetch',data)
 		console.log( model_post);
 		_controller_post.renderPost();
 	})
 	.catch(function(error){
 		console.log(error)
 	});*/
 	console.log(model_post.getData());
 	console.log("muthu");
 	_controller_post.renderPost();
 }

 //_controller_post.renderPost();

 