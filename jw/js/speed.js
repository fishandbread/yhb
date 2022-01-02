// 调速
const audio = document.getElementById("bibleaudio");
const myRange = document.getElementById("myRange");
function getData() {
    var x = document.getElementById("myRange").value;
     document.getElementById("sr").innerHTML = x;
     audio.playbackRate = x;
    }

// 一个页面中有多个audio标签，播放其中一个时暂停其他，只允许一个audio播放。
var audios = document.getElementsByTagName("audio");
// 暂停函数
function pauseAll() {
	var self = this;
	[].forEach.call(audios, function (i) {
		// 将audios中其他的audio全部暂停
			i !== self && i.pause();
		})
}
// 给play事件绑定暂停函数
[].forEach.call(audios, function (i) {
		i.addEventListener("play", pauseAll.bind(i));
})


