var side=document.getElementById("side-menu");
var user=document.getElementById("user-details");
var side_menu=document.getElementById("side-menu");
var main_side_menu=document.getElementById("main-side-menu");
var hide_btn=document.getElementById("hide");
var find=true;

document.getElementById("ip").addEventListener("focus",function(){
		var icon = document.getElementById("icon_a");
		icon.style.display="inline-block";
		var iconl=document.getElementById("licon");
		iconl.style.display="none";
		//document.getElementById("ip").classList.add("input_focus");
		document.getElementById("search-filter").style.display="block";
		console.log("muthu");
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
function render(event){
	if(event.target.id === "mm"){
		event.stopPropagation();
		if(find === true){
			show_side_bar();
			user.style.display="none";
		}
		else{
			hide_side_bar();
		}
	}
	if(event.target.id === "user-a"){
		event.stopPropagation();
		if(find === true){
			show_user();
			hide_side_bar();
		}
		else{
			hide_user();
		}
	}
}

function show_side_bar(){
	find=false;
	main_side_menu.classList.add('main-side-menu');
	side.style.display="block";
	side.style.width="380px";
	hide_btn.style.display="block";
}

function show_user(){
	user.style.display="block";
	find=false;
}
function hide_side_bar(){
	side_menu.style.width="0px";
	hide_btn.style.display="none";
	main_side_menu.classList.remove('main-side-menu');
	if(event.target.id === "user-a"){
		find=false;
	}
	else{
		find=true;
	}
}
function hide_user(){
	user.style.display="none";
	find=true;
}
document.addEventListener("click",hide);
function hide(event){
	if(event.target.id === "side-menu"){
		side.style.display="block";
	}
	else{
		side.style.width="0";
		main_side_menu.classList.remove('main-side-menu');
		hide_btn.style.display="block";
	}
	if(event.target.id === "user-details"){
		user.style.display="block";
	}
	else{
		if(user.style.display === "block"){
			user.style.display="none";
		}
	}
}