class UserProfileController{
	constructor(model,view){
		this.model = model;
		this.view = view;
	}
	profile_data(){
		return this.model.getData();
	}
}

var user_data_;

var show = document.getElementById('user-profile-page');
if(show){
	show.addEventListener("click",render_skill_block);
}
function render_skill_block(event){
	
	var inner_skills = document.getElementById("other-skills-block");
	var data = user_data_;
	var parent = document.getElementById("show-more-div");

	if(event.target.id === "show-more-div" || event.target.id === "show-more"){
		if(inner_skills.childElementCount === 0){
			renderSkills_Block(inner_skills,data.skills);
				if(!parent.children[1].classList.contains("rotate-i-skill")){
					parent.children[1].classList.add("rotate-i-skill");
				}
			parent.children[0].innerText="Show Less";		
		}
		else{
			parent.children[0].innerText="Show More";
			parent.children[1].classList.remove("rotate-i-skill");
			inner_skills.removeChild(inner_skills.children[0]);
		}
	}
}