
  var audio = document.getElementById('audio');
  var isPlaying = false;
  
  function playVideo() {
    var videoImage = document.getElementById('videoImage');
    var textoContainer = document.getElementById('textoContainer');
  
    if (!isPlaying) {
      videoImage.style.display = 'block';
      textoContainer.style.display = 'block';
      audio.play();
      isPlaying = true;
    } else {
      videoImage.style.display = 'none';
      textoContainer.style.display = 'none';
      audio.pause();
      isPlaying = false;
    }
  }