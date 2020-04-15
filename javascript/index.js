var body=document.getElementById("body");
var user=document.getElementById("user-details");
var side_menu=document.getElementById("side-menu");
var overlay=document.getElementById("overlay");
var hide_btn=document.getElementById("hide");

var dp_recent=document.getElementById("ul-recent");
var dp_group=document.getElementById("gp-ul");
var dp_followed=document.getElementById("followed-ul");

var arrow=document.getElementById("recent i");
var arrow_g=document.getElementById("group i");
var arrow_f=document.getElementById("followed i");

var fix_recent=document.getElementById("recent");
var fix_group=document.getElementById("group");
var fix_followed=document.getElementById("followed");

var sort=document.getElementById("dp-sort");
var topic=document.getElementById("sp-re");
var hover=document.getElementById("sort-a");

var news_block=document.getElementById("div-show");
var ro_news=document.getElementById("icon-mo");

var business_block=document.getElementById("business-block");
var business_icon=document.getElementById("business i");

var privacy_block=document.getElementById("privacy-block");
var privacy_icon=document.getElementById("privacy i")

var find=false;
var find1=false;

document.getElementById("ip").addEventListener("focus",function(){
		var icon = document.getElementById("icon_a");
		icon.style.display="inline-block";
		var iconl=document.getElementById("licon");
		iconl.style.display="none";
		document.getElementById("search-filter").style.display="block";
});
document.getElementById("ip").addEventListener("blur",function(){
		var righticon = document.getElementById("icon_a");
		righticon.style.display="none";
		var lefticon=document.getElementById("licon");
		lefticon.style.display="inline-block";
		document.getElementById("search-filter").style.display="none";
});


document.getElementById("header").addEventListener("click",render);

document.getElementById("hide").addEventListener("click",hide_side_bar);

document.getElementById("down-aside").addEventListener("click",render_ul);

document.getElementById("sort-by").addEventListener("click",render_sort);

document.getElementById("news").addEventListener("click",news_render);

document.getElementById("footer").addEventListener("click",footer_render);

function render(event){
	if(event.target.id === "mm"){
		if(find === false){
			event.stopPropagation();

			show_side_bar();
			user.style.display="none";
		}
		else{
			hide_side_bar();
		}
	}
	if(event.target.id === "user-a"){
		if(find1 === false){
			event.stopPropagation();
			show_user();
			hide_side_bar();
		}
		else{
			hide_user();
		}
	}
}

function show_side_bar(){
	find=true;
	//stage2.classList.add('main-said');
	body.classList.add('over');
	overlay.classList.add('overlay');
	side_menu.style.right="0px";
	hide_btn.style.display="block";
}

function show_user(){
	user.style.display="block";
	find1=true;
}


function hide_side_bar(){
	body.classList.remove('over');
	//stage2.classList.remove('main-said');
	side_menu.style.right="-380px";
	hide_btn.style.display="none";
	overlay.classList.remove('overlay');
	find=false;
}

function hide_user(){
	user.style.display="none";
	find1=false;
}

function render_ul(event){
	if((event.target.id ==="recent") || (event.target.id ==="recent i")){
		recent_render();
	}
	else if((event.target.id === "group") || (event.target.id === "group i")){
		group_render();
	}
	else if((event.target.id === "followed") || (event.target.id === "followed i")){
		followed_render();
	}
	
	
}

function recent_render(){
	
	if(!arrow.classList.contains('arrow-h')){
		dp_recent.style.display="none";
		dp_recent.style.marginBottom="0px";
		arrow.classList.add('arrow-h');
		fix_recent.classList.add('opa-arrow');
		fix_group.classList.remove('opa-arrow');
		fix_followed.classList.remove('opa-arrow');
	}
	else{
		dp_recent.style.display="block";
		dp_recent.style.marginBottom="16px";
		arrow.classList.remove('arrow-h');
		fix_recent.classList.add('opa-arrow');
		fix_group.classList.remove('opa-arrow');
		fix_followed.classList.remove('opa-arrow');
	}
}


function group_render(){
	
	if(!arrow_g.classList.contains('arrow-h')){
		dp_group.style.display="none";
		dp_group.style.marginBottom="0px";
		arrow_g.classList.add('arrow-h');
		fix_group.classList.add('opa-arrow');
		fix_followed.classList.remove('opa-arrow');
		fix_recent.classList.remove('opa-arrow');

	}
	else{
		dp_group.style.display="block";
		dp_group.style.marginBottom="16px";
		arrow_g.classList.remove('arrow-h');
		fix_group.classList.add('opa-arrow');
		fix_followed.classList.remove('opa-arrow');
		fix_recent.classList.remove('opa-arrow');
	}
}

function followed_render(){
	
	if(!arrow_f.classList.contains('arrow-h')){
		dp_followed.style.display="none";
		dp_followed.style.marginBottom="0px";
		arrow_f.classList.add('arrow-h');
		fix_followed.classList.add('opa-arrow');
		fix_recent.classList.remove('opa-arrow');
		fix_group.classList.remove('opa-arrow');
	}
	else{
		dp_followed.style.display="block";
		dp_followed.style.marginBottom="16px";
		arrow_f.classList.remove('arrow-h');
		fix_followed.classList.add('opa-arrow');
		fix_recent.classList.remove('opa-arrow');
		fix_group.classList.remove('opa-arrow');
	}
}

function render_sort(event){
	if(((event.target.id === "sort-by") || (event.target.id === "so-id")) || (event.target.id === "sp-re")){
		event.stopPropagation();
		if(sort.style.display === "none"){
			sort.style.display = "block";
		}
		else{
			sort.style.display = "none";
		}
	}
	else{
		adding_content(event.target);
	}

}

function adding_content(data){
	topic.innerHTML = data.innerHTML;
	sort.style.display = "none";
	if(topic.innerHTML === data.innerHTML){
		data.classList.add('sort-add');
	}
}

function news_render(event){
	if((event.target.id === "showmore") || (event.target.id === "icon-mo")){
		event.stopPropagation();
		if(news_block.style.display !="block"){
			news_block.style.display="block";
			ro_news.classList.add('rotate');
		}
		else{
			news_block.style.display="none";
			ro_news.classList.remove('rotate');

		}

	}
}

function footer_render(event){
	if((event.target.id ===  "business") || (event.target.id === "business i")){
		event.stopPropagation();
		if(business_block.style.display !="block"){
			business_block.style.display="block";
			privacy_block.style.display="none";
			business_icon.classList.add('rotate');
		}
		else{
			business_block.style.display="none";
			business_icon.classList.remove('rotate');

		}
	}
	else{
		privacy_fun(event);
	}
}

function privacy_fun(event){
	if((event.target.id ===  "privacy") || (event.target.id === "privacy i")){
		event.stopPropagation();
		if(privacy_block.style.display !="block"){
			privacy_block.style.display="block";
			privacy_icon.classList.add('rotate');
			business_block.style.display="none";
		}
		else{
			privacy_block.style.display="none";
			privacy_icon.classList.remove('rotate');

		}
	}
}

document.addEventListener("click",hide);
function hide(event){

	//fix_recent.classList.remove('opa-arrow');
	//fix_group.classList.remove('opa-arrow');
	//fix_followed.classList.remove('opa-arrow');

	if(event.target.id === "side-menu"){
		side.style.display="block";
	}
	else{
		side_menu.style.right="-380px";
		body.classList.remove('over');
		overlay.classList.remove('overlay');
		hide_btn.style.display="block";
		//stage2.classList.remove('main-said');
	}
	if(event.target.id === "user-details"){
		user.style.display="block";
	}
	else{
		if(user.style.display === "block"){
			user.style.display="none";
		}
	}
	if(event.target.id === "sort-by"){
		sort.style.display="block";
	}
	else{
		sort.style.display="none";
	}
	if(event.target.id === "business"){
		business_block.style.display="block";
	}
	else{
		business_block.style.display="none";
		business_icon.classList.remove('rotate');
	}
	if(event.target.id === "privacy"){
		privacy_block.style.display="block";
	}
	else{
		privacy_block.style.display="none";
		privacy_icon.classList.remove('rotate');
	}
}