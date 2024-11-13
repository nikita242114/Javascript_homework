const videoEl = document.querySelector('.video-frame');
const playButtonEl = document.querySelector('[src="img/play.jpg"]');
const pauseButtonEl = document.querySelector('[src="img/pause.jpg"]');
const stopButtonEl = document.querySelector('[src="img/stop.jpg"]');
const forwardButtonEl = document.querySelector('[src="img/forward.jpg"]');
const rewindButtonEl = document.querySelector('[src="img/rewind.jpg"]');
const videoProgressBar = document.querySelector('.video-progressbar');
const soundProgressBar = document.querySelector('.sound-progressbar');


videoEl.addEventListener('timeupdate', () => videoProgressBar.value = videoEl.currentTime / videoEl.duration * 100);
playButtonEl.addEventListener('click', () => videoEl.play());
pauseButtonEl.addEventListener('click', () => videoEl.pause());
stopButtonEl.addEventListener('click', () => videoEl.currentTime = 0);
rewindButtonEl.addEventListener('click', () => videoEl.currentTime -= 5);
forwardButtonEl.addEventListener('click', () => videoEl.currentTime += 5);
videoProgressBar.addEventListener('input', () => videoEl.currentTime = videoEl.duration * videoProgressBar.value / 100);
soundProgressBar.addEventListener('input', () => videoEl.volume = soundProgressBar.value);