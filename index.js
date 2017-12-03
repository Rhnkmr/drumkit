var drums = document.getElementsByClassName("drum");
var audios = document.getElementsByTagName("audio");

function Playsound(x){ 
    audios[x].play();
}

for (let i = 0; i < drums.length; i++) {
	let y = i;
	drums[y].addEventListener("click", function() {
		Playsound(y);
	});
}
