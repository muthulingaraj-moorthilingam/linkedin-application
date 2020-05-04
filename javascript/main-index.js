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

async function fetchData(){
 	console.log("TEST",await model_post.getData());
 	console.log(await model_post);
 	_controller_post.renderPost();
 }

 //_controller_post.renderPost();

 