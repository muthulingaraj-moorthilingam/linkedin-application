class ControllerPost{
	constructor(model,view){
		this.model=model;
		this.view=view;
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

function user_Profile(event){
	event.stopPropagation();
	console.log(controller_profile.profile_data());
	var event_info = event.target.parentNode.id;
	view_profile.renderProfile(event_info,controller_profile.profile_data());

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