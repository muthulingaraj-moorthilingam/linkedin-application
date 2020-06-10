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
				user_data_=data[i];
				break;
			}
		}
	}
}

function renderingProfile(data){
	console.log("renderProfile",data);
	if(document.body.id != "profile"){
		//hidePostsection();
	}
	//hidePostsection();

	var parent_section = document.createElement("div");
	parent_section.setAttribute("id",data.userId);
	parent_section.classList.add("clearfix");
	parent_section.classList.add("scroll-snap");
	view_profile.getId().appendChild(parent_section);
	//const parentid = document.getElementById("user-profile-page");
	//parentid.appendChild(parent_section);


	var inner_div = document.createElement("div");
	inner_div.classList.add("inner");
	parent_section.appendChild(inner_div);
	renderElements(inner_div,data);

}
function renderElements(parent_div,data){
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

	var profile_part = document.createElement("div");
	profile_part.classList.add("part-pro");
	bottom.appendChild(profile_part);

	var profile_div = document.createElement("div");
	profile_div.style.backgroundImage = 'url'+'('+'"'+ data.userprofileimage +'"'+')';
	profile_div.classList.add("profile-image");
	profile_div.setAttribute("id","profile_div");
	profile_part.appendChild(profile_div);
	createMsgMore(profile_part);

	var name_blk = document.createElement("div");
	name_blk.classList.add("details-blk");
	name_blk.classList.add("clearfix");
	bottom.appendChild(name_blk);
	createNameDes(name_blk,data);

	var about_blk = document.createElement("div");
	about_blk.classList.add("about-blk");
	createAbout(about_blk,data);
	parent_div.appendChild(about_blk);

	if(data.featured != ""){
		renderFeature(parent_div,data);
	}

	var exp_edu_blk = document.createElement("div");
	exp_edu_blk.classList.add("exp-edu");

	var exp_block =document.createElement("section");
	exp_edu_blk.appendChild(exp_block);

	var edu_block = document.createElement("section");
	edu_block.classList.add("set-one");
	exp_edu_blk.appendChild(edu_block);

	createExp_Edu_Block(exp_block,data);
	createEdu_Block(edu_block,data);

	if(data.licenses.length != 0){
		var licse_block = document.createElement("section");
		licse_block.classList.add("set-one-last");
		exp_edu_blk.appendChild(licse_block);

		licensesBlock(licse_block,data);
	}

	parent_div.appendChild(exp_edu_blk);

	var skills_block = document.createElement("section");
	skills_block.classList.add("section-skills");
	parent_div.appendChild(skills_block);

	var inner_skills = document.createElement("div");
	inner_skills.setAttribute("id","skills-block");
	inner_skills.classList.add("inner-section-skills");
	skills_block.appendChild(inner_skills);

	renderSkillsBlock(inner_skills,data);

	var inner_skills_div = document.createElement("div");
	inner_skills_div.setAttribute("id","other-skills-block");
	inner_skills.appendChild(inner_skills_div);
	//renderSkills_Block(inner_skills,data.skills);

	renderShowMore(inner_skills);

	var intrest_block = document.createElement("div");
	intrest_block.classList.add("intrest_block-div");
	parent_div.appendChild(intrest_block);
	renderIntrest_Block(intrest_block,data);

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

function createNameDes(name_blk,data){
	var right_side = document.createElement("div");
	right_side.classList.add("right_side-blk");
	name_blk.appendChild(right_side);

	renderName(right_side,data);

	var left_side = document.createElement("div");
	left_side.classList.add("lest_slide-blk");
	name_blk.appendChild(left_side);
	renderCompany(left_side,data);
}

function renderName(right_side,data){
	var name_span = document.createElement("span");
	name_span.innerHTML = data.name;
	name_span.classList.add("name_span");

	var designation_ = document.createElement("h2");
	designation_.innerHTML = data.designation;
	designation_.classList.add("designation-blk");

	var address_blk =document.createElement("ul");
	address_blk.classList.add("address-blk");

	createAddress(address_blk,data);

	right_side.appendChild(name_span);
	right_side.appendChild(designation_);
	right_side.appendChild(address_blk);
}

function createAddress(address_blk,data){
	var li_add = document.createElement("li");
	if(data.address.city ==='' || data.address.state === ''){
		li_add.innerHTML = data.address.city+data.address.state+data.address.nationality;
	}
	else{
		li_add.innerHTML = data.address.city+','+data.address.state+','+data.address.nationality;
	}
	//li_add.innerHTML = data.address.city+','+data.address.state+','+data.address.nationality;
	li_add.classList.add("add-blk");
	address_blk.appendChild(li_add);

	var li_add1 = document.createElement("li");
	li_add1.classList.add("add1_blk");

	var a_tag = document.createElement("a");
	a_tag.innerHTML= data.connection;
	a_tag.classList.add("add1_a_blk");
	li_add1.appendChild(a_tag);
	address_blk.appendChild(li_add1);

	var li_add2 = document.createElement("li");
	li_add2.classList.add("add1_blk");
	var a1_tag = document.createElement("a");
	a1_tag.classList.add("add1_a_blk");
	a1_tag.innerHTML= "Contack info";
	li_add2.appendChild(a1_tag);
	address_blk.appendChild(li_add2);
}

function renderCompany(left_side,data){
	var cpy_a = document.createElement("a");
	cpy_a.classList.add("cpy-a");
	left_side.appendChild(cpy_a);

	var img_sp = document.createElement("img");
	img_sp.classList.add("img-cpy");
	img_sp.src = companyImage(data);
	cpy_a.appendChild(img_sp);

	var name_sp = document.createElement("span");
	name_sp.classList.add("name_sp");
	name_sp.innerHTML = companyNmae(data);
	cpy_a.appendChild(name_sp);

}

function companyImage(data){
	var company_img= data.experience;
	for(let i=0; i< company_img.length;i++){
		if(company_img[i].present === "true"){
			return company_img[i].companyimg;
		}
	}
}

function companyNmae(data){
	var company_name= data.experience;
	for(let i=0; i< company_name.length;i++){
		if(company_name[i].present === "true"){
			return company_name[i].companyname;
		}
	}
}
function createAbout(about_blk,data){
	var head = document.createElement("h2");
	head.classList.add("about_head");
	head.innerHTML = "About";
	about_blk.appendChild(head);

	var parah = document.createElement("div");
	parah.innerHTML = data.about;
	parah.classList.add("about_parah");
	about_blk.appendChild(parah);
}

function renderFeature(parent_div,data){
	var feature = document.createElement("div");
	feature.classList.add("feature-blk");
	parent_div.appendChild(feature);

	var head =document.createElement("h2");
	head.classList.add("about_head");
	head.classList.add("h-fea");
	head.innerHTML = "Featured";
	feature.appendChild(head);

	featureBlock(feature,data);
}

function featureBlock(feature,data){
	var inner_section = document.createElement("div");
	inner_section.classList.add("inner-feature");
	feature.appendChild(inner_section);

	imageRennder(inner_section,data);
}

function imageRennder(inner_section,data){
	var frame = document.createElement("div");
	frame.classList.add("fea-div");
	inner_section.appendChild(frame);

	var picture = document.createElement("img");
	picture.src=data.featured;
	picture.classList.add("img-fe");
	frame.appendChild(picture);

	var h_span = document.createElement("span");
	//var d = data.name.indexOf(" ");
	//var res = data.name.slice(0,d);
	h_span.innerHTML = data.name+'.pdf';
	h_span.classList.add("h_span");
	frame.appendChild(h_span);
}

function createExp_Edu_Block(parent,data){
	var head = document.createElement("div");
	head.classList.add("h2-exp-edu");

	var h2 = document.createElement("h2");
	h2.innerHTML = "Experience";
	h2.classList.add("h2-title");
	head.appendChild(h2);
	parent.appendChild(head);

	renderExperience(parent,data.experience);
}

function renderExperience(parent,data){
	var exp_blk = document.createElement("ul");
	exp_blk.classList.add("exp-ul");
	parent.appendChild(exp_blk);

	for(let i=data.length-1; i >= 0; i--){
		var list = document.createElement("li");
		list.classList.add("exp-li");
		exp_blk.appendChild(list);

		if(data[i].samecompany === "true"){
			renderSameCmpy(list,data[i],i);
		}
		else{
			renserPresent_Old_Cmpy(list,data[i],i);
		}
	}
}

function renserPresent_Old_Cmpy(list,data,i){
	var inner = document.createElement("div");
	inner.classList.add("inner_blk");
	inner.classList.add("inner-blk-after");
	if (i === 0) {
		inner.classList.remove("inner-blk-after");
		inner.classList.add("inner-blk-last");
	}
	list.appendChild(inner);
	
	var div = document.createElement("div")
	div.classList.add("in_div");
	inner.appendChild(div);

	var logo = document.createElement("div");
	logo.style.backgroundImage = 'url'+'('+'"'+ data.companyimg +'"'+')';
	logo.classList.add("logo-p");
	div.appendChild(logo);

	var right = document.createElement("div");
	right.classList.add("right-div");
	div.appendChild(right);

	alignData(right,data);
}

function renderSameCmpy(list,data,i){
	var inner = document.createElement("div");
	inner.classList.add("inner_blk");
	inner.classList.add("inner-blk-after");
	if (i === 0) {
		inner.classList.remove("inner-blk-after");
		inner.classList.add(".inner-blk-last");
	}
	list.appendChild(inner);
	
	var top_cmpy = document.createElement("a");
	top_cmpy.href="#";
	top_cmpy.classList.add("top-cpmy-exp");
	inner.appendChild(top_cmpy);

	var logo = document.createElement("div");
	logo.style.backgroundImage = 'url'+'('+'"'+ data.companyimg +'"'+')';
	logo.classList.add("logo-p");
	top_cmpy.appendChild(logo);

	var top_cmpy_name = document.createElement("div");
	top_cmpy.appendChild(top_cmpy_name);

	var cmpy_name = document.createElement("h3");
	cmpy_name.innerHTML = data.companyname;
	cmpy_name.classList.add("top-cmpy-name");
	top_cmpy_name.appendChild(cmpy_name);

	var total_year =document.createElement("span");
	total_year.innerHTML=data.totalexp;
	total_year.classList.add("top-cmpy-name-sp");
	top_cmpy_name.appendChild(total_year);

	var ul_list = document.createElement("ul");
	ul_list.classList.add("ul_list-cmpy-exp");
	inner.appendChild(ul_list);


	var design_list =data.designation;
	for(let i=0; i<  design_list.length;i++){

		var ul_li = document.createElement("li");
		ul_li.classList.add("ul_li-li");
		ul_list.appendChild(ul_li);

		renderUlList(ul_li, design_list[i],design_list.length,i);
		if( i < (design_list.length-1)){
			var line = document.createElement("span");
			line.classList.add("ul-li-line");
			ul_li.appendChild(line);
		}
	}



	/*var div = document.createElement("div")
	div.classList.add("in_div");
	inner.appendChild(div);

	var logo = document.createElement("div");
	logo.style.backgroundImage = 'url'+'('+'"'+ data.companyimg +'"'+')';
	logo.classList.add("logo-p");
	div.appendChild(logo);

	var right = document.createElement("div");
	right.classList.add("right-div");
	div.appendChild(right);

	alignData(right,data);*/
}

function renderUlList(ul_li,data,l,i){
	
	var ul_li_top = document.createElement("div");
	ul_li_top.classList.add("ul_li-top");
	if(i === (l-1)){
		ul_li_top.classList.add("ul_li-top-bottom");
	}
	ul_li.appendChild(ul_li_top);

	var ul_dot = document.createElement("span");
	ul_dot.classList.add("ul_li-top-before");
	ul_li_top.appendChild(ul_dot);

	var ul_h3 = document.createElement("span");
	ul_h3.innerHTML = data.desingnation;
	ul_h3.classList.add("ul-li-top-span");
	ul_li_top.appendChild(ul_h3);

	var exp = document.createElement("div");
	exp.classList.add("exp-crt-div");
	ul_li_top.appendChild(exp);

	var e_span = document.createElement("span");
	e_span.innerHTML = data.totelyears;
	e_span.classList.add("cmpy-span");
	exp.appendChild(e_span);

		var span_1=document.createElement("span");
		span_1.classList.add("cp-after");
		exp.appendChild(span_1);

	var et_span = document.createElement("span");
	et_span.innerHTML = findTotal(data.employmentDuration);
	et_span.classList.add("cmpy-span");
	exp.appendChild(et_span);

	var add =document.createElement("div");
	add.innerHTML = data.location;
	add.classList.add("add-div-exp");
	ul_li_top.appendChild(add);

	if(data.content != ""){
		var content =document.createElement("div");
		content.innerHTML = data.content;
		content.classList.add("add-div-content");
		ul_li_top.appendChild(content);
	}

}

function alignData(right,data){

	var h3 = document.createElement("h3");
	h3.innerHTML =data.desingnation;
	h3.classList.add("h3-head-cmpy");
	right.appendChild(h3);

	var div = document.createElement("div");
	div.classList.add("cmpy-name-div");

	var c_span = document.createElement("span");
	c_span.innerHTML = data.companyname;
	c_span.classList.add("cmpy-span");
	if (data.employmenttype != ""){
		var span=document.createElement("span");
		span.classList.add("cp-after");
		c_span.appendChild(span);
	}
	div.appendChild(c_span);

	right.appendChild(div);

	var c_span = document.createElement("span");
	c_span.innerHTML = data.employmenttype;
	c_span.classList.add("cmpy-span");
	div.appendChild(c_span);

	var exp = document.createElement("div");
	exp.classList.add("exp-crt-div");
	right.appendChild(exp);

	var e_span = document.createElement("span");
	e_span.innerHTML = data.totelyears;
	e_span.classList.add("cmpy-span");
	exp.appendChild(e_span);

		var span_1=document.createElement("span");
		span_1.classList.add("cp-after");
		exp.appendChild(span_1);

	var et_span = document.createElement("span");
	if(data.samecompany === "true"){
		var desing = data.designation;
		for(let i=0;i < desing.length;i++){
			et_span.innerHTML= findTotal(desing[i].employmentDuration);
		}
	}
	else{
		et_span.innerHTML = findTotal(data.employmentDuration);
	}
	et_span.classList.add("cmpy-span");
	exp.appendChild(et_span);

	var add =document.createElement("div");
	add.innerHTML = data.location;
	add.classList.add("add-div-exp");
	right.appendChild(add);

	if(data.content != ""){
		var content =document.createElement("div");
		content.innerHTML = data.content;
		content.classList.add("add-div-content");
		right.appendChild(content);
	}
}

function findTotal(date){
	var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var split = date.split(" ");
	var prev_m = month.indexOf(split[0]);
	var prev_y = split[1];
	var pres_m = month.indexOf(split[2]);
	var pres_y = split[3];
	if(prev_m > pres_m){
		pres_m = pres_m +12;
		pres_y = pres_y-1;
	}
	var mo = pres_m - prev_m;
	var yr = pres_y - prev_y;
	return (yr+' '+'yrs'+' '+(mo+1)+' '+"mos")
}

function createEdu_Block(parent,data){
	var head = document.createElement("div");
	head.classList.add("h2-exp-edu");

	var h2 = document.createElement("h2");
	h2.innerHTML = "Educations";
	h2.classList.add("h2-title");
	head.appendChild(h2);
	parent.appendChild(head);

	renderSchoolsLic(parent,data.education);
}

function renderSchoolsLic(parent,data){
	var exp_blk = document.createElement("ul");
	exp_blk.classList.add("exp-ul");
	parent.appendChild(exp_blk);

	var len = data.length;
	for(let i=0; i < data.length; i++){
		var list = document.createElement("li");
		list.classList.add("exp-li");
		exp_blk.appendChild(list);

		if(data[i].college === "true"){
			alignDetailsPro(list,data[i],i,len);
		}
		else if(data[i].diploma === "true"){
			alignDetailsPro(list,data[i],i,len);
		}
		else if(data[i].school === "true"){
			alignDetailsPro(list,data[i],i,len);
		}
	}
}

function licensesBlock(parent,data){
	var head = document.createElement("div");
	head.classList.add("h2-exp-edu");

	var h2 = document.createElement("h2");
	h2.innerHTML = data.licenses[0].title;
	h2.classList.add("h2-title");
	head.appendChild(h2);
	parent.appendChild(head);

	renderLicence_Block(parent,data.licenses);
}

function renderLicence_Block(parent,data){
	var exp_blk = document.createElement("ul");
	exp_blk.classList.add("exp-ul");
	parent.appendChild(exp_blk);

	var len = data.length;
	for(let i=0; i < data.length; i++){
		var list = document.createElement("li");
		list.classList.add("exp-li");
		exp_blk.appendChild(list);

		alignDetailsPro(list,data[i],i,len);
	}
}

function alignDetailsPro(list,data,i,l){
	var inner = document.createElement("div");
	inner.classList.add("inner_blk");
	inner.classList.add("inner-blk-after");
	if (i === l-1) {
		inner.classList.remove("inner-blk-after");
		inner.classList.add("inner-blk-last");
	}
	list.appendChild(inner);
	
	var div = document.createElement("div")
	div.classList.add("in_div");
	inner.appendChild(div);

	var logo = document.createElement("div");
	logo.style.backgroundImage = 'url'+'('+'"'+ data.src +'"'+')';
	logo.classList.add("logo-p");
	div.appendChild(logo);

	var right = document.createElement("div");
	right.classList.add("right-div");
	div.appendChild(right);

	detailsAlign(right,data);
}

function detailsAlign(right,data){
	var h3 = document.createElement("h3");
	h3.innerHTML =data.name;
	h3.classList.add("h3-head-cmpy");
	right.appendChild(h3);

	var div = document.createElement("div");
	div.classList.add("cmpy-name-div");

	var c_span = document.createElement("span");
	c_span.innerHTML = data.field;
	c_span.classList.add("cmpy-span");
	div.appendChild(c_span);

	right.appendChild(div);

	if(data.graduation != undefined ){
		var e_span = document.createElement("span");
		e_span.innerHTML = data.graduation;
		e_span.classList.add("cmpy-span");
		right.appendChild(e_span);
	}

	if(data.activities.length != 0){
		var div_activity = document.createElement("div");
		div_activity.classList.add("div_activity");
		activity(div_activity,data.activities);
		right.appendChild(div_activity);
	}

	if(data.about != ""){
		var content =document.createElement("div");
		content.innerHTML = data.about;
		content.classList.add("add-div-content");
		right.appendChild(content);
	}
	if(data.issued != undefined || data.expires != undefined){
		var issued = document.createElement('div');
		issued.classList.add("issued-div");
		right.appendChild(issued);

		var issued_span = document.createElement("span");
		issued_span.innerHTML = data.issued;
		issued_span.classList.add("cmpy-span");
		issued.appendChild(issued_span);

			var span_1=document.createElement("span");
			span_1.classList.add("cp-after");
			issued.appendChild(span_1);

		var expires_span = document.createElement("span");
		expires_span.innerHTML = data.expires;
		expires_span.classList.add("cmpy-span");
		issued.appendChild(expires_span);

	}

	if(data.credential != ""){
		var ec_span = document.createElement("span");
		ec_span.innerHTML = data.credential;
		ec_span.classList.add("cmpy-span");
		right.appendChild(ec_span);
	}
}

function activity(parent,data){
	for(let i=0;i<data.lenght;i++){

		var e_span = document.createElement("span");
		e_span.innerHTML = data[i].tittle +':';
		e_span.classList.add("cmpy-span");
		parent.appendChild(e_span);

		var er_span = document.createElement("span");
		er_span.innerHTML = data[i].details;
		er_span.classList.add("cmpy-span");
		parent.appendChild(er_span);
	}
}

function renderSkillsBlock(parent,data){
	renderHead(parent);

	var skill_ul = document.createElement("ul");
	skill_ul.classList.add("ul-skill-parent");
	parent.appendChild(skill_ul);

	var skill = data.skills[0].topskills;

	for(let i=0; i < skill.length;i++){
		var list=document.createElement("li");
		list.classList.add("skill-li");
		if(i === (skill.length-1)){
			list.classList.remove("skill-li");
			list.classList.add("skill-li-last")
		}
		skill_ul.appendChild(list);

		renderTopSkill(list,skill[i]);
	}
}

function renderHead(parent){
	var head = document.createElement("div");
	parent.appendChild(head);

	var h2 = document.createElement("h2");
	h2.innerHTML = "Skills & Endorsements";
	h2.classList.add("h2-skill");
	head.appendChild(h2);
}

function renderTopSkill(parent,data){
	var div = document.createElement("div");
	div.classList.add("li-div-flex");
	parent.appendChild(div);

	renderButton(div);

	var div_content = document.createElement("div");
	div_content.classList.add("line-height");
	div.appendChild(div_content);

	var sp = document.createElement("span");
	sp.innerHTML = data;
	sp.classList.add("span-list-skill");
	div_content.appendChild(sp);
}

function renderButton(parent){

	var div_btn = document.createElement("div");
	div_btn.classList.add("div-skill-btn");
	parent.appendChild(div_btn);

	var button = document.createElement("button");
	button.classList.add("button-skill-plus");
	div_btn.appendChild(button);

	var span = document.createElement("span");
	span.classList.add("span-skill-plus");
	button.appendChild(span);



}

function renderSkills_Block(parent,data){
	var parent_div = document.createElement("div");
	parent_div.classList.add("skills-parent-padding");
	parent.appendChild(parent_div);

	if(data[1].industry_skills.length != 0){
		var i_skills = data[1].industry_skills;
		renderSkills_Other(i_skills,parent_div,"Industry Knowledge");
	}
	if(data[2].tool_tech.length != 0){
		var tool_skl = data[2].tool_tech;
		renderSkills_Other(tool_skl,parent_div,"Tools & Technologies");
	}
	if(data[3].inter_skill.length != 0){
		var inter_skl = data[3].inter_skill;
		renderSkills_Other(inter_skl,parent_div,"Interpersonal Skills");
	}
	if(data[4].other_skills.length != 0){
		var other_skl = data[4].other_skills;
		renderSkills_Other(other_skl,parent_div,"Other Skills");
	}
	
}

function renderSkills_Other(data,parent,heading){

	var div = document.createElement("div");
	div.classList.add("child-skills-div");
	parent.appendChild(div);

	var h3 = document.createElement("h3");
	h3.innerHTML = heading;
	h3.classList.add("child-skills-heading");
	div.appendChild(h3);

	if(heading === "Other Skills"){
		var i = document.createElement("i");
		i.classList.add("fa", "fa-question-circle-o");
		i.classList.add("i-skills-question");
		div.appendChild(i);

		var span =document.createElement("span");
		span.innerHTML = "These skills do not currently fit under the available categories";
		span.classList.add("i-skills-question-span");
		i.appendChild(span);
	}

	var ul_list = document.createElement("ul");
	ul_list.classList.add("child-skills-ul");
	div.appendChild(ul_list);

	for(let i=0; i < data.length;i++){
		var list=document.createElement("li");
		list.classList.add("child-skill-li");
		ul_list.appendChild(list);

		renderTopSkill(list,data[i]);
	}
}

function renderShowMore(inner_skills){

	var div = document.createElement("div");
	div.classList.add("show-more-div");
	div.setAttribute("id","show-more-div");
	inner_skills.appendChild(div);

	var span = document.createElement("span");
	span.innerHTML = "Show More";
	span.classList.add("show-more-span");
	span.setAttribute("id","show-more");
	div.appendChild(span);

	var i = document.createElement("i");
	i.classList.add('fa', 'fa-chevron-down');
	i.classList.add("show-more-i");
	i.setAttribute("aria-hidden","true");
	i.setAttribute("id","show-more");
	div.appendChild(i);
}

function renderIntrest_Block(parent,data){
	var head = document.createElement("div");
	parent.appendChild(head);

	var h2 = document.createElement("h2");
	h2.innerHTML = data.interests;
	h2.classList.add("h2-skill");
	head.appendChild(h2);

	var ul_interest = document.createElement("ul");
	ul_interest.classList.add("ul-interest-blk");
	parent.appendChild(ul_interest);

	var interest = data.listofinterests;
	var l = data.listofinterests.length;
	
	for(let i=0 ;i < interest.length;i++){
		if(i === 6){
			break;
		}
		else{
			var li = document.createElement("li");
			li.classList.add("li-intrest");
			ul_interest.appendChild(li);
			createIntrest(li,interest[i]);
		}
	}

	var div = document.createElement("div");
	div.classList.add("show-more-div");
	div.setAttribute("id","show-more-div");
	parent.appendChild(div);

	var span = document.createElement("span");
	span.innerHTML = "See all";
	span.classList.add("show-more-span");
	span.setAttribute("id","show-more");
	div.appendChild(span);
}

function createIntrest(parent,data){
	var a = document.createElement("a");
	a.href="#";
	a.classList.add("list-a-interst");
	parent.appendChild(a);

	var div = document.createElement("div");
	div.classList.add("div-image");
	a.appendChild(div);

	var img = document.createElement("img");
	img.src = data.image;
	img.classList.add("intrest-image");
	div.appendChild(img);

	var div_right = document.createElement("div");
	div_right.classList.add("div-right-side");
	a.appendChild(div_right);

	var h3 = document.createElement("h3");
	h3.innerHTML = data.name;
	h3.classList.add("h3-intrest-head");
	div_right.appendChild(h3)

	var span = document.createElement("span");
	span.innerHTML = data.follower;
	span.classList.add("span-intrest-head");
	div_right.appendChild(span)
}

function clearChild(){
	var l = view_profile.getId();
	if(l.childElementCount === 1){
		l.removeChild(l.children[0]);
	}
}

function hidePostsection(){
	/*var section =document.getElementById("post-section");
	var profile =document.getElementById("user-profile-page");
	
	if(!section.classList.contains('post-section')){
		section.classList.add('post-section');
	}*/
	console.log("")
}