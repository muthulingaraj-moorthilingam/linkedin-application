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
	li_add.innerHTML = data.address.city+','+data.address.state+','+data.address.nationality;
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