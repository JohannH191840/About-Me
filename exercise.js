document.body.style.fontFamily = "Arial, sans-serif";

var nick = document.getElementById("nickname");
nick.textContent = ('Antonio');

var fav = document.getElementById("favorites");
fav.textContent = ('Pizza');

var home = document.getElementById("hometown");
home.textContent = ('Tolleson')

var el = document.getElementsByTagName("li");
for( var i=0; i<el.length; i++){
    el[i].classList.add('list-item')
}

var img = document.createElement("img");
img.src = "challenger.jfif";
document.body.append(img);
img.style.width = "300px";
img.style.height = "300px";






