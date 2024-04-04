var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false; 
	video.loop = false; 
	console.log("Auto play is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Play Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Play Video");
	video.playbackRate -= 0.1;
	console.log("New Speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Play Video");
	video.playbackRate += 0.1;
	console.log("New Speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted) {
		muteButton.textContent = "Unmute";
	} else {
		muteButton.textContent = "Mute";
	}
});

var volumeDisplay = document.getElementById("volume");
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	volumeDisplay.textContent = this.value + "%";
	console.log("New Volume: " + this.value + "%");
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Apply Vintage Style");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Remove Vintage Style");
    video.classList.remove("oldSchool");
});