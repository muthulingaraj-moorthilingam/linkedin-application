class UserProfileRenderView{
	constructor(parentid){
		this.id = parentid;
	}
	getId(){
		return this.id;
	}
	renderProfile(info,data){
		for(let i=0; i<data.length;i++){
			if(data[i].userId === info){
				//console.log(data[i].userId);
				renderingProfile(data[i]);
				break;
			}
		}
	}
}

function renderingProfile(data){
	console.log("renderProfile",data);
	hidePostsection();

	var parent_div = document.createElement("div");
	parent_div.setAttribute("id",data.userId);
	view_profile.getId().appendChild(parent_div);

	var details = document.createElement("div");
	details.classList.add('top-card');
	parent_div.appendChild(details);

	var bg_div = document.createElement("div");
	bg_div.style.backgroundImage = 'url'+'('+'"'+ data.bgimage +'"'+')';
	bg_div.classList.add("bg-image");
	details.appendChild(bg_div);

	var bottom = document.createElement("div");
	bottom.classList.add("bottom-div");
	details.appendChild(bottom);

	var profile_div = document.createElement("div");
	profile_div.style.backgroundImage = 'url'+'('+'"'+ data.userprofileimage +'"'+')';
	profile_div.classList.add("profile-image");
	bottom.appendChild(profile_div);
	createMsgMore(bottom);
}


function createMsgMore(bottom){
	var parent =document.createElement("div");
	parent.classList.add("div-span");
	bottom.appendChild(parent);
	var msg = document.createElement("span");
	var more = document.createElement("span");
	msg.innerHTML = "Message";
	msg.classList.add("span-msg");
	more.innerHTML = "More...";
	more.classList.add("span-more");
	parent.appendChild(msg);
	parent.appendChild(more);
}

function clearChild(){
	var l = view_profile.getId();
	if(l.childElementCount === 1){
		l.removeChild(l.children[0]);
	}
}

function hidePostsection(){
	var section =document.getElementById("post-section");
	var profile =document.getElementById("user-profile-page");
	
	if(!section.classList.contains('post-section')){
		section.classList.add('post-section');
	}
}