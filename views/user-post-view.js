class RenderView{
	constructor(parentid){
		this.parentid = parentid;
	}
	renderView(model){
		var _parent_div= document.createElement("div");
		_parent_div.setAttribute("class","parent-div");
		this.parentid.appendChild(_parent_div);

		var _head_ = document.createElement("a");
		_head_.classList.add('top-part');
		_head_.setAttribute("id","user-profile-page");

		var _user_profile_details = document.createElement('div')
		_user_profile_details.classList.add('up-details');

		var _logo_ = document.createElement("img");
		_logo_.src=model.user_image;
		_logo_.classList.add('top-logo');

		var _name_=document.createElement('span');
		_name_.innerText=model.user_name;
		_name_.classList.add('up-name');

		var _designation_=document.createElement('span');
		_designation_.innerText=model.user_designation;
		_designation_.classList.add('up-designation');

		var _time =document.createElement("span");
		_time.innerText=model.user_time;
		_time.classList.add('up-post-time');


		var _post_type = document.createElement('i');
		_post_type.setAttribute("class","fa fa-globe");
		_post_type.classList.add("globe");

		var _content_ =document.createElement('p');
		_content_.classList.add('up-content');
		 var _rep =findHashTag(model.getUserContent());
		 _content_.appendChild(_rep);

		_user_profile_details.appendChild(_name_);
		_user_profile_details.appendChild(_designation_);
		_user_profile_details.appendChild(_time);
		_user_profile_details.appendChild(_post_type);

		_head_.appendChild(_logo_);
		_head_.appendChild(_user_profile_details);

		_parent_div.appendChild(_head_);
		_parent_div.appendChild(_content_);



		renderImage(model.getUserPostImage(),_parent_div);
		//_parent_div.appendChild(_img_);
	}
}

function findHashTag(hash){
	
	var str="";
	var str_a="";
	var len=0;
	var _span_parent=document.createElement('span');

	for(let i=0;i<hash.length;i++){
		if(hash[i] === '#'){
			createChild(_span_parent,str);
			str="";
			for(let j=i;j<hash.length;j++){
				if(hash[j] === " "){
					len=str_a.length;
					hashTag(_span_parent,str_a);
					str_a="";
					break;
				}
				else if(j+1 === hash.length){
					len=str_a.length;
					hashTag(_span_parent,str_a);
					str_a="";
					break;
				}
				else{
					str_a=str_a+hash[j];
				}
			}
			i=i+len;
		}
		else{
			str=str+hash[i];
		}
	}
	createChild(_span_parent,str);
	return _span_parent;
}

function hashTag(parent,str){
	var _hashtag_=document.createElement('a');
	_hashtag_.innerText=str;
	_hashtag_.classList.add('hashTag');
	parent.appendChild(_hashtag_);
}

function createChild(parent,str){
	var _span_=document.createElement('span');
	_span_.innerText=str;
	parent.appendChild(_span_);
}


function renderImage(images,parent){

	var _imgcontainer_=document.createElement("div");
	_imgcontainer_.classList.add("up-muliple-img");
	parent.appendChild(_imgcontainer_);
	
	for(let i=0;i<images.length;i++){
		if(images.length === 1){
			var _img_=document.createElement("img");
			_img_.src=images[i];
			_img_.classList.add("render-post-img");
			parent.appendChild(_img_);
		}
		else{
			var _mul_img=multiPleImage(images[i]);
			_imgcontainer_.appendChild(_mul_img);
		}
	}
}

function multiPleImage(images,parent){
	
	var _img_=document.createElement("img");
	_img_.src=images;
	_img_.classList.add("up-mul-img");
	//_imgcontainer_.appendChild(_img_);
	return _img_;
}