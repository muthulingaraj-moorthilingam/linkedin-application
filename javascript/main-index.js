var model_data;

var model_post = new UserPostdata(model_data);

//console.log("TEST", model_post.getData());
if(model_post){
	fetchData();

}
else{
	console.error("Object not created")
}

const parentElement = document.getElementById("renderPost");

const _view_post = new RenderView(parentElement);

const _controller_post = new ControllerPost(model_post,_view_post);

function fetchData(){
 	//console.log("TEST", model_post.getData());
 	//console.log( model_post);
 	//_controller_post.renderPost();
 	model_post.getData()
 	.then(function(data){
 		console.log('Fetch',data)
 		console.log( model_post);
 		_controller_post.renderPost();
 	})
 	.catch(function(error){
 		console.log(error)
 	});
 }

 //_controller_post.renderPost();

 