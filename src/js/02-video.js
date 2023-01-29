import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(function (time) {
        localStorage.setItem("videoplayer-current-time", time.seconds);
        console.log(localStorage.getItem("videoplayer-current-time"));
    }, 1000));
if ((localStorage.getItem("videoplayer-current-time")) !== null) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}
