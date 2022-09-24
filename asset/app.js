
// create array
const songs = [
	{
		id: '1',
		songName: `First song <br> 
		<div class="subtitle">First singer</div>`,
		img: './files/img/img1.jpg',
		audio: './files/audio/music7.mp3'
	},
	{
		id: '2',
		songName: `Second song <br> 
		<div class="subtitle">Second singer</div>`,
		img: './files/img/img2.jpg',
		audio: './files/audio/music1.mp3'
	},
	{
		id: '3',
		songName: `Thirth song <br> 
		<div class="subtitle">Thirth singer</div>`,
		img: './files/img/img3.jpg',
		audio: './files/audio/music2.mp3'
	},
	{
		id: '4',
		songName: `Fourth song <br> 
		<div class="subtitle">Fourth singer</div>`,
		img: './files/img/img4.jpg',
		audio: './files/audio/music3.mp3'
	},
	{
		id: '5',
		songName: `Fifth song <br> 
		<div class="subtitle">Fifth singer</div>`,
		img: './files/img/img5.jpg',
		audio: './files/audio/music4.mp3'
	},
	{
		id: '6',
		songName: `Sixth song <br> 
		<div class="subtitle">Sixth singer</div>`,
		img: './files/img/img6.jpg',
		audio: './files/audio/music5.mp3'
	},
	{
		id: '7',
		songName: `Seventh song <br> 
		<div class="subtitle">Sevent singer</div>`,
		img: './files/img/img7.jpg',
		audio: './files/audio/music6.mp3'
	},
	{
		id: '8',
		songName: `First song <br> 
		<div class="subtitle">First singer</div>`,
		img: './files/img/img1.jpg',
		audio: './files/audio/music2.mp3'
	},
	{
		id: '9',
		songName: `Second song <br> 
		<div class="subtitle">Second singer</div>`,
		img: './files/img/img2.jpg',
		audio: './files/audio/music.mp3'
	},
	{
		id: '10',
		songName: `Second song <br> 
		<div class="subtitle">Second singer</div>`,
		img: './files/img/img3.jpg',
		audio: './files/audio/music1.mp3'
	},
	{
		id: '11',
		songName: `Fourth song <br> 
		<div class="subtitle">Fourth singer</div>`,
		img: './files/img/img4.jpg',
		audio: './files/audio/music7.mp3'
	},
	{
		id: '12',
		songName: `Fifth song <br> 
		<div class="subtitle">Fifth singer</div>`,
		img: './files/img/img5.jpg',
		audio: './files/audio/music3.mp3'
	},
	{
		id: '13',
		songName: `Sixth song <br> 
		<div class="subtitle">Sixth singer</div>`,
		img: './files/img/img6.jpg',
		audio: './files/audio/music4.mp3'
	},
	{
		id: '14',
		songName: `Seventh song <br> 
		<div class="subtitle">Seventh singer</div>`,
		img: './files/img/img7.jpg',
		audio: './files/audio/music5.mp3'
	},
	{
		id: '15',
		songName: `First song <br> 
		<div class="subtitle">First singer</div>`,
		img: './files/img/img1.jpg',
		audio: './files/audio/music6.mp3'
	},
	{
		id: '16',
		songName: `Second song <br> 
		<div class="subtitle">Second singer</div>`,
		img: './files/img/img2.jpg',
		audio: './files/audio/music1.mp3'
	},
	{
		id: '17',
		songName: `Thirth song <br> 
		<div class="subtitle">Thirth singer</div>`,
		img: './files/img/img3.jpg',
		audio: './files/audio/music.mp3'
	},
	{
		id: '18',
		songName: `Fourth song <br> 
		<div class="subtitle">Fourth singer</div>`,
		img: './files/img/img4.jpg',
		audio: './files/audio/music4.mp3'
	},
	{
		id: '19',
		songName: `Fifth song <br> 
		<div class="subtitle">First singer</div>`,
		img: './files/img/img5.jpg',
		audio: './files/audio/music6.mp3'
	},
	{
		id: '20',
		songName: `Sixth song <br> 
		<div class="subtitle">Sixth singer</div>`,
		img: './files/img/img6.jpg',
		audio: './files/audio/music7.mp3'
	},
]
const music = document.querySelector('audio');//get element audio
let postMasterPlay = document.querySelector('#posterMasterPlay');//get btn play or pause
let rotateCd = document.querySelector('#user');//get CD
let title = document.querySelector('#title');//get song name and singer name
const prevBtn = document.querySelector('#back');//get prev btn
const nextBtn = document.querySelector('#next');//get next btn
const songCurrentTime = document.querySelector('#currentStart');//get currentTime of song
const songDuration = document.querySelector('#currentEnd');//get currentTime of song
const progress = document.querySelector('#bar2');//get grogress of song
const seek = document.querySelector('#seek');//get grogress of song
const dot = document.querySelector('.dot');//get dot seek
const songVolume = document.querySelector('#vol');//get volume song
const volBar = document.querySelector('#volBar');//get volume song
const volDot = document.querySelector('#volDot');//get volume song

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
	element.getElementsByTagName('img')[0].src = songs[i].img;
	element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
	music.src = songs[i].audio;
});

let index = 0;//use first song when render
let  masterPlay = document.getElementById('masterPlay');
let wave = document.querySelector('.wave');

// when click into btn play or pause
masterPlay.addEventListener('click', function() {
	if(music.paused || music.currentTime <= 0) {
		music.play();
		cdThumAnimation.play();
		masterPlay.classList.remove('fa-caret-right');
		masterPlay.classList.add('fa-pause');
		wave.classList.add('active2');
	} else {
		music.pause();
		cdThumAnimation.pause();
		masterPlay.classList.remove('fa-pause');
		masterPlay.classList.add('fa-caret-right');
		wave.classList.remove('active2');
	}
})
// when end song
music.onended = function() {
	nextSong();
 	music.play();
}
// when click into btn prev
prevBtn.addEventListener('click', (e)=>{
	prevSong();
	music.play();
})
// when click into btn next
nextBtn.addEventListener('click', (e)=>{
	nextSong();
	music.play();
})

// display about play or pause
const makeAllPlays = ()=> {
	Array.from(document.querySelectorAll('.bi')).forEach((e)=>{
		e.classList.add('fa-circle-play');
		e.classList.remove('fa-circle-pause');
	})
}

// rotate CD
const cdThumAnimation = rotateCd.animate([
	{
		transform: 'rotate(360deg)',
	}
],{
	duration: 10000,
	iterations: Infinity
})
cdThumAnimation.pause();

// get all songs if click into song then play or pause
Array.from(document.querySelectorAll('.bi')).forEach((e)=>{
	e.addEventListener('click', (e)=>{
		if (e.target.classList.contains('fa-circle-play')){
			index = (e.target.id);
			makeAllPlays();
			e.target.classList.remove('fa-circle-play');
			e.target.classList.add('fa-circle-pause');
			music.src = songs[`${index}`].audio;
			postMasterPlay.src = songs[`${index}`].img;//change image in masterplay
			rotateCd.src = postMasterPlay.src;//change image to CD equid with masterPlay
			music.play();
			title.innerHTML = songs[`${index}`].songName;//add name song and name singer
			cdThumAnimation.play();//rotate CD
			masterPlay.classList.remove('fa-caret-right');
			masterPlay.classList.add('fa-pause');
			wave.classList.add('active2');
		} else {
			index = (e.target.id);
			makeAllPlays();
			e.target.classList.add('fa-circle-play');
			e.target.classList.remove('fa-circle-pause');
			music.pause();
			cdThumAnimation.pause();
			masterPlay.classList.remove('fa-pause');
			masterPlay.classList.add('fa-caret-right');
			wave.classList.remove('active2');
		}
	});
})

// load songs
function loadSong () {
	cdThumAnimation.play();
	masterPlay.classList.remove('fa-caret-right');
	masterPlay.classList.add('fa-pause');
	wave.classList.add('active2');
	postMasterPlay.src = songs[index].img;//change image in masterplay
	title.innerHTML = songs[index].songName;//add name song and name singer
	rotateCd.src = postMasterPlay.src;//change image to CD equid with masterPlay
	music.src = songs[index].audio;
}

// prev songs
function prevSong () {
	index--;
	if(index < 0) {
		index = songs.length - 1;
	}
	loadSong();
}
// next song
function nextSong () {
	index++;
	if(index > songs.length - 1) {
		index = 0;
	}
	loadSong();
}

// progress seek of song
music.ontimeupdate = function(e) {
	const currentTime = e.target.currentTime;
	const duration = e.target.duration;
	let progressWidth = (currentTime / duration) * 100;
	progress.style.width = `${progressWidth}%`;
	dot.style.left = `${progressWidth}%`;
	// update song currenttime 
	let currentMinute = Math.floor(currentTime / 60);
	let currentSecond = Math.floor(currentTime % 60); 
	if(currentMinute < 10) {
		currentMinute = `0${currentMinute}`;
	}
	if(currentSecond < 10) {
		currentSecond = `0${currentSecond}`;
	}
	songCurrentTime.innerHTML = `${currentMinute}:${currentSecond}`;//assign song currentTime
	// update song duration
	music.onloadeddata = function(){
		let durationMinute = Math.floor(music.duration / 60);
		let durationSecond = Math.floor(music.duration % 60);
		if(durationMinute < 10) {
			durationMinute = `0${durationMinute}`;
		}
		if(durationSecond < 10) {
			durationSecond = `0${durationSecond}`;
		}
		songDuration.innerHTML = `${durationMinute}:${durationSecond}`;//assign duration of currentSong
	}
}

// change when seek song
seek.onchange = function(e) {
	const seekTime = music.duration / 100 * e.target.value;//get value when enter into bar progress
	music.currentTime = seekTime;//assign value when seek for currentTime
}

// song volume
volBar.style.width = `${songVolume.value}%`;//when volume rendered
volDot.style.left = `${songVolume.value}%`;	//when volume rendered
// when change volume
songVolume.onchange = function(e) {
	const volValue = (e.target.value);
	music.volume = volValue / 100;
	volBar.style.width = `${volValue}%`;
	volDot.style.left = `${volValue}%`;		
}

// right and left songs popular 
const rightScoll = document.querySelector('#right_scroll');
const leftScoll = document.querySelector('#left_scroll');
const popSong = document.querySelector('.pop_song');
rightScoll.onclick = function(){
	popSong.scrollLeft += 360;
}
leftScoll.onclick = function(){
	popSong.scrollLeft -= 360;
}
// right ad left singer popular
const rightScolls = document.querySelector('#right_scrolls');
const leftScolls = document.querySelector('#left_scrolls');
const item = document.querySelector('.item');
rightScolls.onclick = function(){
	item.scrollLeft += 360;
}
leftScolls.onclick = function(){
	item.scrollLeft -= 360;
}

console.log([music])