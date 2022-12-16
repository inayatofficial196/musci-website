// var mysong = document.querySelector('.my-song');
// var playicon = document.querySelector('.play-icon');

// playicon.onclick = function(){
//     mysong.play();
//     // console.log('click me');
// }
var mysong = document.querySelector('.my-song');
var icon = document.querySelector('.play-icon');

icon.onclick = function(){
    if (mysong.paused) {
        mysong.play();
        icon.src = "th2.jpg";
        console.log('clike')
        
    }
    else {
        mysong.pause();
        icon.src = "th.jpg";
        console.log('clicke me')
    }

}



{/* <h1>The show is song</h1>
<img src="th.jpg" class="play-icon" alt="" title="Click me and play the music">

<audio src="mysong.mp3" class="my-song"></audio> */}