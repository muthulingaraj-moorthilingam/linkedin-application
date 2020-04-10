var side=document.getElementById("side-menu");
var user=document.getElementById("user-details");
var side_menu=document.getElementById("side-menu");
var main_side_menu=document.getElementById("main-side-menu");

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


document.getElementById("header").addEventListener("click",show);

function show(event){

	if(event.target.id === "mm"){
		if(side_menu.style.width === "0px"){
			event.stopPropagation();
			side_menu.style.display="block";
			side_menu.style.width="380px";
			main_side_menu.classList.add('main-side-menu');
		}
		else{
			side_menu.style.width="0";
			main_side_menu.classList.remove('main-side-menu');
		}
	}
	if(event.target.id === "user-s"){
		ev
		user.style.display="block";
	}
	else{
		if(user.style.display === "block"){
			user.style.display="none";
		}
	}
}


document.addEventListener("click",hide);
function hide(event){
	if(event.target.id === "side-menu"){
		side.style.display="block";
	}
	else{
		side.style.width="0";
		main_side_menu.classList.remove('main-side-menu');
	}
}