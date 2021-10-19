<script>
  

  const player = document.getElementById('player');
    const captureButton = document.getElementById('capture-button');
    const outputCanvas = document.getElementById('output');
    const context = outputCanvas.getContext('2d');
    
    navigator.mediaDevices
      .getUserMedia({  video: { 
        facingMode: { exact: "environment" } } 
    })
      .then((stream) => {
        player.srcObject = stream;
      }).catch(error => {
        console.error('Can not get an access to a camera...', error);
      });
    
    captureButton.addEventListener('click', () => {
      // Get the real size of the picture
      const imageWidth = player.offsetWidth;
      const imageHeight = player.offsetHeight;
      
      // Make our hidden canvas the same size
      outputCanvas.width = imageWidth;
      outputCanvas.height = imageHeight;
      
      // Draw captured image to the hidden canvas
      context.drawImage(player, 0, 0, imageWidth, imageHeight);
      
      // A bit of magic to save the image to a file
      const downloadLink = document.createElement('a');
      downloadLink.setAttribute('download', `capture-${new Date().getTime()}.png`);
      outputCanvas.toBlob((blob) => {
        downloadLink.setAttribute('href', URL.createObjectURL(blob));
        downloadLink.click();
      });
    });


    (() => {
      const videoElm = document.querySelector('#player');
      const btnFront = document.querySelector('#btn-front');
      const btnBack = document.querySelector('#btn-back');
    
      const supports = navigator.mediaDevices.getSupportedConstraints();
      if (!supports['facingMode']) {
        alert('Browser Not supported!');
        return;
      }
    
      let stream;
    
      const capture = async facingMode => {
        const options = {
          audio: false,
          video: {
            facingMode,
          },
        };
    
        try {
          if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
          }
          stream = await navigator.mediaDevices.getUserMedia(options);
        } catch (e) {
          alert(e);
          return;
        }
        videoElm.srcObject = null;
        videoElm.srcObject = stream;
        videoElm.play();
      }
    
      btnBack.addEventListener('click', () => {
        capture('environment');
      });
    
      btnFront.addEventListener('click', () => {
        capture('user');
      });
    })();

</script><svelte:head><title>Camera</title><meta name="viewport" content="width=device-width, initial-scale=1.0,  maximum-scale=1"> 
<meta name="title" content="Camera">
<meta name="description" content="Take pictures so you can create photography.">
<meta name="keywords" content="take pictures, take photos, photography">
<link rel="manifest" href="/manifest.json">

</svelte:head>


  
<center>
    <div id="video-record">
    <video id="player" autoplay playsinline="true"><track kind="captions"></video>
    </div><button id="capture-button" title="Take a picture"></button>
    
      <button id="btn-front">Front</button>
      <button id="btn-back">Back</button>
    
    <canvas id="output"></canvas></center>
    
    
    <style>
    
    #player {
      width: 100%;
    }
    
    #video-record {
      max-width: 100vw;
      max-height: 100vh;
      position: relative;
    }
    
    #capture-button {
      display: block;
      position: absolute;
      width: 50px;
      height: 50px;
      bottom: 80px;
      left: 50%;
      margin-left: -25px;
      border-radius: 50%;
      background-color: #ff0000;
      cursor: pointer;
      transition: all .15s ease-in-out;
      opacity: 0.5;
      outline: none;
    }
    
    
    
    
    #output {
      display: none;
    }

    button {
      height: 3.5rem;
      min-width: 2rem;
      border: none;
      border-radius: 0.15rem;
      background: #ed341d;
      margin-left: 50px;
    padding-left: 20px;
    padding-right: 20px;
    margin-right: 50px;
      box-shadow: inset 0 -0.15rem 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      justify-content: center;
      align-items: center;
      color:#ffffff;
      font-weight: bold;
      font-size: 1.1rem;
    }
    button:hover, button:focus {
      outline: none;
      background: #c72d1c;
    }
    button::-moz-focus-inner {
      border: 0;
    }
    button:active {
      box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.2);
      line-height: 3rem;
    }
    button:disabled {
      pointer-events: none;
      background: lightgray;
    }
    button:first-child {
      margin-left: 0;
    }
    </style>
    
    
    
    
    

