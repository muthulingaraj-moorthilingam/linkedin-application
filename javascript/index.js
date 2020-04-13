var body=document.getElementById("body");
var user=document.getElementById("user-details");
var side_menu=document.getElementById("side-menu");
var overlay=document.getElementById("overlay");
var hide_btn=document.getElementById("hide");
//var stage2=document.getElementById("main-side-menu");
var find=false;
var find1=false;

document.getElementById("ip").addEventListener("focus",function(){
		var icon = document.getElementById("icon_a");
		icon.style.display="inline-block";
		var iconl=document.getElementById("licon");
		iconl.style.display="none";
		//document.getElementById("ip").classList.add("input_focus");
		document.getElementById("search-filter").style.display="block";
		//overlay.classList.add('overlay');
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





document.addEventListener("click",hide);
function hide(event){
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
}