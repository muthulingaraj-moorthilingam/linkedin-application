class ControllerPost{
	constructor(model,view){
		this.model=model;
		this.view=view;
	}
	parentId(){
		return this.view
	}
	renderPost(){
		this.view.renderView(this.model);
	}
	
	userDetails(){
		return this.model.getData();
	}
}

const rootElement = document.getElementById('renderPost');
rootElement.addEventListener("click",user_Profile);
const postElement = document.getElementById("post-section");
if(document.body.id != "profile"){
	rootElement.addEventListener("click",user_Profile);

}
//rootElement.addEventListener("click",user_Profile);


function user_Profile(event){
	event.stopPropagation();
	
	var event_info = event.target.parentNode.id;

	var _info = event.target.parentNode.parentNode;

	if(_info.localName === "a"){

		var haSh = _info.hash.split("=")[1];
		if(haSh === ""){
			_info.href += event_info;
		}
		else{
			return;
		}

		//_info.href += event_info;
		
	}
	//view_profile.renderProfile(event_info,controller_profile.profile_data())
}

function clearChild(){
	var parent = controller_profile.getView();
	
	var parentId = parent.id;

	var count = parentId.childElementCount;

	if(count === 0){
		return;
	}
	else{
		parentId.removeChild(parentId.children[0]);
	}
}

function profile_page_controller(userId){
	var parent = controller_profile.getView();
	
	var parentId = parent.id;

	var count = parentId.childElementCount;

	if(count === 0){
		view_profile.renderProfile(userId,controller_profile.profile_data());
	}
	else {
		if(count > 0){
			parentId.removeChild(parentId.children[0]);
			view_profile.renderProfile(userId,controller_profile.profile_data());
		}
	}
}


/*
//previous implementation
event.stopPropagation();
	//console.log(event.target);
	//console.log(event.target.parentNode.id);
	//var data =_controller_profile.userDetails();
	var event_info = event.target.parentNode.id;
	//var data = model_profile.getData();
	//view_profile.renderProfile(event_info,data);
	view_profile.renderProfile(event_info,model_profile.getData());
	/*for(let i=0;i<data.length;i++){
		if(event.target.parentNode.id === data[i].userId){
			//console.log(data[i].userId);
			view_profile.renderProfile(data[i]);
			break;
		}
	}
	//console.log("Controller",data);
	*/