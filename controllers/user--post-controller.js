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

if(document.body.id != "profile"){
	rootElement.addEventListener("click",user_Profile);

}
//rootElement.addEventListener("click",user_Profile);

function user_Profile(event){
	event.stopPropagation();
	//console.log(controller_profile.profile_data());
	//console.log(event.target.parentNode)
	//console.log(event_info)
	//console.log(_info)
	
	var event_info = event.target.parentNode.id;
	
	
	var _info = event.target.parentNode.parentNode;

	if(_info.localName === "a"){
		_info.href = "profile.html?user"+"="+event_info;
		_info.target="_blank";
	}

	//view_profile.renderProfile(event_info,controller_profile.profile_data());
	

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