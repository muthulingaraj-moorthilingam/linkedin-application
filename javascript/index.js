
document.getElementById("ip").addEventListener("focus",function (){
		var icon = document.getElementById("icon_a");
		icon.style.display="inline-block";
		var iconl=document.getElementById("licon");
		iconl.style.display="none";
		document.getElementById("search_bar").classList.add("focus");
		document.getElementById("search-filter").style.display="block";
});
document.getElementById("ip").addEventListener("blur",function(){
		var righticon = document.getElementById("icon_a");
		righticon.style.display="none";
		var lefticon=document.getElementById("licon");
		lefticon.style.display="inline-block";
		document.getElementById("search_bar").classList.remove("focus");
		document.getElementById("search-filter").style.display="none";
});