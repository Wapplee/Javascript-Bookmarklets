// Fake roblox robux on a game, if it is free then it is usable.

void(function(){

var obj = document.getElementsByClassName("icon-common-play")[0];
var obj2 = obj.cloneNode(true);

obj.setAttribute("class","icon-robux-white");
obj2.innerHTML = "<span class=\"btn-text\">"+prompt("Amount of robux")+"</span>";
obj2.setAttribute("class","btn-text");
obj.parentNode.appendChild(obj2);
})();
