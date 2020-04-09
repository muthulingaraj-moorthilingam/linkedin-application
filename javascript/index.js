
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
		//document.getElementById("search").classList.remove("input_focus");
		document.getElementById("search-filter").style.display="none";
});
document.getElementById("linkedin").addEventListener("click",func);

function func(event){
	var user=document.getElementById("user-details");
	if(event.target.id === "user-s"){
		user.style.display="block";
	}
	else{
		if(user.style.display === "block"){
			user.style.display="none";
		}
	}

}
