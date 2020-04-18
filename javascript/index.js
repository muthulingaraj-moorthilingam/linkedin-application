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

var teammate=document.getElementById("teammate");
var text=document.getElementById("text-area");

var start_a_post=document.getElementById("start-a-post");
var sap_orly=document.getElementById("start-a-post-overlay");

var spa_block=document.getElementById("start-a-post-overlay");
var over_lay=document.getElementById("ory");

var select_privacy=document.getElementById("who-can-see-post");
var inner_parent=document.getElementById("start-a-post-inner");


var doc=document.getElementById("save-btn");
var praivacy_value=document.getElementById("typ-value");

var find=false;
var find1=false;
var string="";
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

document.getElementById("start-a-post").addEventListener("click",render_post_block);

document.getElementById("start-a-post-overlay").addEventListener("click",render_post);

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
	overlay.classList.add('overlay-second');
	side_menu.style.right="0px";
	hide_btn.style.display="block";
	if(spa_block.style.display==="block"){
		spa_block.style.display="block";
				overlay.classList.add('overlay');	
		 		start_a_post.style.display="none";
	}

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
	overlay.classList.remove('overlay-second');
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

function render_post_block(event){
	if(event.target.id === "sap"){
		event.stopPropagation();
		if(spa_block.style.display === "none"){
			spa_block.style.display = "block";
			start_a_post.style.display="none";
			overlay.classList.add('overlay');
		}
		else{
			spa_block.style.display = "none";
			start_a_post.style.display="block";
			overlay.classList.remove('overlay');
		}
	}
}



function render_post(event){

	if(event.target.id === "add-hashtag"){
		text.value =text.value + '#';
	}
	else if(event.target.id === "celebrate"){
		event.stopPropagation();
		celebrateBlock();
	}
	else if(event.target.id == "sc"){
		block();
	}
	else if(event.target.parentNode.id === "select-privacy"){
		event.stopPropagation();
		selectPrivacy();
	}
	else if((event.target.id === "back-btn") || (event.target.id === "save-btn")){
		event.stopPropagation();
		backHome();
		if(doc.classList.contains('save')){
			doc.classList.remove('save');
			if(event.target.id === "save-btn"){
				praivacy_value.innerText=string;
			}
			removeOutline();
		}
	}
	else if(event.target){
		savePrivacy(event.target);
	}
}

function selectPrivacy(){

	for(let i=0;i<inner_parent.childElementCount;i++){
		if(inner_parent.children[i].id === "sh"){
				if(inner_parent.children[i].childElementCount > 0){
				var head=inner_parent.children[i];
				changeHead(head);
			}
		}
		else if(inner_parent.children[i].id === "who-can-see-post"){
			select_privacy.style.display="block";
		}
		else{
			inner_parent.children[i].style.display="none";
		}

	}
}


function changeHead(headnode){
	var count=headnode.childElementCount-1;
	while(count >= 0){
		if(headnode.children[count].innerText === "Create a post"){
			headnode.children[count].innerText="Who can see your post?";
		}
		else{
			count--;
		}
	}
}

function backHome(){

	for(let i=0;i<inner_parent.childElementCount;i++){
		if(inner_parent.children[i].id === "sh"){
				if(inner_parent.children[i].childElementCount > 0){
				var head=inner_parent.children[i];
				changeHeadBack(head);
			}
		}
		else if(inner_parent.children[i].id === "who-can-see-post"){
			select_privacy.style.display="none";
		}
		else{
			inner_parent.children[i].style.display="flex";
		}

	}
}

function changeHeadBack(headnode){
	var count=headnode.childElementCount-1;
	while(count >= 0){
		if(headnode.children[count].innerText === "Who can see your post?"){
			headnode.children[count].innerText="Create a post";
		}
		else{
			count--;
		}
	}
}

function celebrateBlock(){
	if(teammate.style.display === "block"){
			teammate.style.display="none";
	}
	else{
		teammate.style.display="block";
			
	}
}

function block(){
	spa_block.style.display = "none";
	start_a_post.style.display="block";
	overlay.classList.remove('overlay');
}


function savePrivacy(target){

	if(target.className === "who-see-post-li"){
		string=getInnerValue(target);
		checkMark(event.target);
		
	}
	else if((target.className === "who-head-lg") || (target.className === "who-head-sm")){
		if(target.className === "who-head-lg"){
			praivacy_value.innerText=target.innerText;
			var p=target.parentNode;
			var gp=p.parentNode;
			checkMark(gp);
		}
		else{
			var val=target.parentNode;
			var gp=val.parentNode;
			praivacy_value.innerText=val.children[0].innerText;
			checkMark(gp);
		}
	}
	doc.classList.add('save');
	
}

function getInnerValue(data){
	var c1=data.children[0];
	var c2=c1.children[1];
	var c3=c2.children[0];
	var value=c3.innerText;
	return value;
}

function checkMark(target){
	var list_length=document.getElementsByClassName("who-see-post-li");
	for(let i=0;i<list_length.length;i++){
		if(target === list_length[i]){
			list_length[i].classList.add('outline-le');
			var left=list_length[i].children[0];
			var left_0=left.children[1];
			var left_1=left_0.children[0].classList.add('clr');
			addBgClr(list_length[i].children[1])
		}
		else{
			list_length[i].classList.remove('outline-le');
			var left=list_length[i].children[0];
			var left_0=left.children[1];
			var left_1=left_0.children[0].classList.remove('clr');
			removerBgClr(list_length[i].children[1]);
		}
	}
}

function addBgClr(parent){
	parent.classList.add('checked');
	var inner=parent.children[0];
	inner.classList.add('checked-sp');
}

function removerBgClr(parent){
	parent.classList.remove('checked');
	var inner=parent.children[0];
	inner.classList.remove('checked-sp');
}

function removeOutline(){
	var list_length=document.getElementsByClassName("who-see-post-li");
	for(let i=0;i<list_length.length;i++){
		list_length[i].classList.remove('outline-le');
	}
}






document.addEventListener("click",hide);


function hide(event){

	if(event.target.id === "side-menu"){
		side.style.display="block";
	}
	else{
		side_menu.style.right="-380px";
		body.classList.remove('over');
		overlay.classList.remove('overlay');
		overlay.classList.remove('overlay-second');
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
	if(event.target.id != "start-a-post-overlay"){
		event.stopPropagation();
		if((event.target.className === "who-head-lg")|| (event.target.className === "who-head-sm")){
			findAndHide(event.target);
		}
		else if((event.target.offsetParent.id === "start-a-post-overlay") || (event.target.offsetParent.id === "media-box")){
		 	findAndHide(event.target);
		 }
		 else{
		 	spa_block.style.display="none";	
		 	start_a_post.style.display="block";
		 }
	}
	else{
		 	spa_block.style.display="none";	
		 	start_a_post.style.display="block";
		 }
	
}

function findAndHide(target){
	var count=spa_block.childElementCount;
	for(let i=0; i<count;i++){
		var child_count=spa_block.children[i];
		if(child_count.childElementCount > 0){
			findTheChild(child_count);
		}
	}
}

function findTheChild(child_count){
	var count=child_count.childElementCount;
	for(let i=0 ; i < count ;i++){
		//console.log(child_count.children[i]);
		var small_child=child_count.children[i];
		if(small_child.childElementCount  > 0){
			var length=small_child.childElementCount;
			for(let j=0;j<length;j++){
				spa_block.style.display="block";
				overlay.classList.add('overlay');	
		 		start_a_post.style.display="none";
			}
		}
	}
}

