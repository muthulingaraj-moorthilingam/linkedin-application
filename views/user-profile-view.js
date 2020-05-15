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

	var parent_section = document.createElement("div");
	parent_section.setAttribute("id",data.userId);
	parent_section.classList.add("clearfix");
	view_profile.getId().appendChild(parent_section);

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
	createExp_Edu_Block(exp_edu_blk,data);
	parent_div.appendChild(exp_edu_blk);
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

		renderUlList(ul_li, design_list[i]);
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

function renderUlList(ul_li,data){
	
	var ul_li_top = document.createElement("div");
	ul_li_top.classList.add("ul_li-top");
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