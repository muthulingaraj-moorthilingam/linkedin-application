
window.addEventListener("hashchange",querySetting);

/*var body = document.getElementById('body');

body.addEventListener("load",querySetting);
*/

function querySetting(event){
	switch(event.type){
		case "load" : windowLoading();
			break;
		case "hashchange" : 
			if(window.location.hash === "#home"){
				clearChild();
				show_and_hide("home");
				break;
			}
			else{
				windowLoading();
			}
	}
}

function windowLoading(){

	var uRl_string = window.location.href;
	
	window.location.pathname += "index.hrml";
	
	var findHash = uRl_string.split("index.html")[1];


	if(findHash === ""){
		window.location.hash = "index.html/#home";
		show_and_hide("home");
	}
	else{
		var search = findHash.split("?")[0];

		if(search === "#profile"){
			var userId =  uRl_string.split("=")[1];
			profileRendering(userId);
		}
	}
}

function profileRendering(userId){

	var data = controller_profile.profile_data();
	
	show_and_hide("profile");

	profile_page_controller(userId);

}










/*
function sentData(){

	profileRender();
}
*/




//serach qoery string
/*function profileRender(){
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
*/
