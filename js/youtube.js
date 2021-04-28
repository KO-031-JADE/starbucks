// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'cXG0OWaAcgY',
    playerVars:{
      autoplay: true,//자동 재상 유무
      loop: true, // 반복재상 유무
      playlist: 'cXG0OWaAcgY'//반복 재생할 유튜브영상 id 목록

    },
    events:{
      onReady: function(event){
        event.target.mute();
      }
    }
  });
}