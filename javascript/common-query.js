
//window.addEventListener("load",domSelection);

function sentData(){

	profileRender();
}


function profileRender(){
	//console.log(window.location.search)
	var user = window.location.search
	const prodileId = new URLSearchParams(user);
	//console.log(prodileId.get("user"));
	var info = prodileId.get("user");
	//console.log(controller_profile.profile_data())
	var data =controller_profile.profile_data();
	for(let i=0; i<data.length;i++){
			if(data[i].userId === info){
				//console.log(data[i].userId);
				renderingProfile(data[i]);
				user_data_=data[i];
				break;
			}
		}
}
