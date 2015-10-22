function music(){
	var audio = new Audio();
	audio.src = 'music.mp3';
	audio.autoplay = true;
	setTimeout("music()",5000);
}